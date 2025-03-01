import type { Experience, Menu, Project, Social, TechStack } from '@types';

export const pagination = {
    limit: 5,
};

export const menus: { header: Array<Menu>; footer: Array<Menu> } = {
    header: [
        {
            label: 'Home',
            route: '/',
        },
        {
            label: 'Posts',
            route: '/posts',
        },
        {
            label: 'Projects',
            route: '/projects',
        },
        {
            label: 'About',
            route: '/about',
        },
    ],

    footer: [
        {
            label: 'Posts',
            route: '/posts',
        },
        {
            label: 'Projects',
            route: '/projects',
        },
        {
            label: 'About',
            route: '/about',
        },
        {
            label: 'Attribution',
            route: '/attribution',
        },
    ],
};

export const socials: Array<Social> = [
    {
        name: 'Facebook',
        icon: 'Facebook',
        href: 'https://facebook.com/SupianIDz',
    },
    {
        name: 'Instagram',
        icon: 'Instagram',
        href: 'https://instagram.com/SupianIDz',
    },
    {
        name: 'Threads',
        icon: 'AtSign',
        href: 'https://threads.com/@SupianIDz',
    },
    {
        name: 'LinkedIn',
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/supianidz/',
    },
    {
        name: 'Github',
        icon: 'Github',
        href: 'https://github.com/SupianIDz',
    },
];

export const projects: Array<Project> = [
    {
        name: 'Laravel Impersonate',
        desc: 'Login as a different user quickly for Laravel.',
        prev: '/images/projects/1.webp',
        link: 'https://github.com/OctopyID/LaraPersonate',
    },
    {
        name: 'Google Photo CLI',
        desc: 'GPhoto streamlines the photo uploading process and helps you keep your photo library organized.',
        prev: '/images/projects/2.webp',
        link: 'https://github.com/OctopyID/GPhotoCLI',
    },
    {
        name: 'Debugify',
        desc: 'Your Debug Companion.',
        prev: '/images/projects/3.webp',
        link: 'https://github.com/OctopyID/Debugify',
    },
    {
        name: 'SIOPEN',
        desc: 'Marketplace designed to facilitate the procurement of goods and services between the Regional Government and MSMEs.',
        prev: '/images/projects/4.webp',
        link: null,
    },
];

export const experiences: Array<Experience> = [
    {
        date: 'January 2023 · Present',
        role: 'Back-End Engineer',
        comp: 'Procurement of Goods and Services Work Unit of Hulu Sungai Selatan Regency',
        desc: 'Developed and managed a marketplace for transactions between local governments and SMEs, facilitated adoption by other districts, and integrated with Bela Pengadaan to streamline procurement processes.',
        logo: '/images/company/4.webp',
    },
    {
        date: 'August 2022 · December 2023',
        role: 'Full-Stack Engineer',
        comp: 'Regional Water Utility Company Intan Banjar',
        desc: 'Building and optimizing systems for clean water payment processing, installation requests, and customer complaint management, ensuring seamless and efficient service delivery.',
        logo: '/images/company/3.webp',
    },
    {
        date: 'February 2020 · December 2022',
        role: 'Full-Stack Engineer',
        comp: 'Department of Communication and Informatics of Hulu Sungai Selatan Regency',
        desc: 'Responsible for developing government applications and managing main and email servers infrastructures to ensure seamless operations and robust security.',
        logo: '/images/company/2.webp',
    },
    {
        date: 'February 2019 · Feb 2020',
        role: 'Administrator & Full-Stack Programmer',
        comp: 'Hasnur Jaya International',
        desc: 'Freelance Developer focused on Warehouse Management Systems, streamlining inventory processes with FIFO and LIFO strategies, overseeing fuel and clean water data management, and automating asset maintenance schedules.',
        logo: '/images/company/1.webp',
    },
];

export const stacks: Array<TechStack> = [
    // Programming Languages & Framework
    { label: 'PHP', color: '#777BB4' },
    { label: 'Laravel', color: '#FF2D20' },
    { label: 'Typescript', color: '#3178C6' },
    { label: 'Vue.js', color: '#4FC08D' },
    { label: 'Astro', color: '#BC52EE' },
    { label: 'Node.js', color: '#5FA04E' },

    // Desktop & Cross-Platform Development
    { label: 'Electron', color: '#47848F' },
    { label: 'Flutter', color: '#02569B' },

    // DevOps & Deployment
    { label: 'Ubuntu', color: '#E95420' },
    { label: 'Docker', color: '#2496ED' },
    { label: 'Nginx', color: '#009639' },
    { label: 'Apache', color: '#D22128' },

    // Databases
    { label: 'MySQL', color: '#4479A1' },
    { label: 'PostgreSQL', color: '#4169E1' },

    // Version Control & Collaboration
    { label: 'Git', color: '#F05032' },

    // Project Management
    { label: 'ClickUp', color: '#7B68EE' },

    // Monitoring & Analytics
    { label: 'Grafana', color: '#F46800' },

    // CDN & Cloud
    { label: 'Cloudflare', color: '#F38020' },
];
