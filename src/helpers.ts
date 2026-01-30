import { type CollectionEntry, getCollection } from 'astro:content';
import moment from 'moment';

export function excerpt(content: string, length: number = 180): string {
    if (content === '') {
        return '';
    }

    return (
        content
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove markdown link [text](url)
            .replace(/<[^>]+>/g, '') // Remove HTML tags
            .replace(/[*_~`>#-]/g, '') // Remove markdown special characters
            .replace(/\n/g, ' ') // Remove newline
            .slice(0, length)
            .trim() + '...'
    );
}

export async function collection() {
    let posts = await getCollection('posts');

    return posts
        .map((post: CollectionEntry<'posts'>) => {
            let data = {
                ...post.data,
                tags: post.data.tags ?? [],
                category: post.data.category ?? 'Uncategorized',
            };

            return {
                ...post,
                data,
                slug: post.id,
                date: moment(post.data.date, 'YYYY-MM-DD HH:mm'),
            };
        })
        .sort((a, b) => {
            return b.date.toDate().getTime() - a.date.toDate().getTime();
        });
}

export async function categories() {
    let posts = await collection();

    let categoryCounts = posts.reduce(
        (acc, post) => {
            let category = post.data.category || 'Uncategorized';
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>,
    );

    return Object.entries(categoryCounts).map(([label, count]) => ({
        label,
        count,
    }));
}

export async function tags() {
    let posts = await collection();

    let tagCounts = posts.reduce(
        (acc, post) => {
            let tags = post.data.tags || [];
            tags.forEach((tag) => {
                acc[tag] = (acc[tag] || 0) + 1;
            });
            return acc;
        },
        {} as Record<string, number>,
    );

    return Object.entries(tagCounts).map(([label, count]) => ({
        label,
        count,
    }));
}

export async function github(repo: string) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
            headers: {
                'Cache-Control': 'public, max-age=604800',
            },
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
    }

    return null;
}
