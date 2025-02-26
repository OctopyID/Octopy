export function excerpt(content: string, length: number = 200): string {
    if (content === '') {
        return '';
    }

    return (
        content
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Hapus link markdown [text](url)
            .replace(/<[^>]+>/g, '') // Hapus HTML tags
            .replace(/[*_~`>#-]/g, '') // Hapus karakter khusus markdown
            .replace(/\n/g, ' ') // Hapus newline
            .slice(0, length)
            .trim() + '...'
    );
}

function parseDate(dateStr: string) {
    const [month, day, year] = dateStr.split(' ');
    return new Date(`${month} ${parseInt(day)}, ${year}`);
}
