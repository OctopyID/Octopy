import type { Experience, Menu, Project, Social } from './types';

export const menus: Array<Menu> = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Posts',
        route: '/posts'
    },
    {
        label: 'Projects',
        route: '/projects'
    },
    {
        label: 'About Me',
        route: '/about'
    }
];

export const socials: Array<Social> = [
    {
        name: 'Facebook',
        icon: 'Facebook',
        href: 'https://facebook.com/SupianIDz'
    },
    {
        name: 'Instagram',
        icon: 'Instagram',
        href: 'https://instagram.com/SupianIDz'
    },
    {
        name: 'Threads',
        icon: 'AtSign',
        href: 'https://threads.com/@SupianIDz'
    },
    {
        name: 'LinkedIn',
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/supianidz/'
    },
    {
        name: 'Github',
        icon: 'Github',
        href: 'https://github.com/SupianIDz'
    }
];

export const projects: Array<Project> = [
    {
        name: 'TempMail.Best',
        desc: 'Best Temporary Email.',
        prev: 'https://kai.bi/assets/images/projects/tempmail.best.png',
        link: 'https://tempmail.best'
    },
    {
        name: 'DNS.Surf',
        desc: 'Querying DNS Resolution Results in Different Regions Worldwide.',
        prev: 'https://kai.bi/assets/images/projects/dns.surf.png',
        link: 'https://dns.surf'
    },
    {
        name: 'HTML.ZONE',
        desc: 'Web Toolbox.',
        prev: 'https://kai.bi/assets/images/projects/html.zone.png',
        link: 'https://html.zone'
    },
    {
        name: 'Sink',
        desc: 'A Simple / Speedy / Secure Link Shortener with Analytics.',
        prev: 'https://kai.bi/assets/images/projects/sink.cool.png',
        link: 'https://sink.cool'
    }
];

export const experiences: Array<Experience> = [
    {
        date: 'January 2023 · Present',
        role: 'Back-End Engineer',
        comp: 'Procurement of Goods and Services Work Unit of Hulu Sungai Selatan Regency',
        desc: 'Developed and managed a marketplace for transactions between local governments and SMEs, facilitated adoption by other districts, and integrated with Bela Pengadaan to streamline procurement processes.',
        logo: '/images/company/4.png'
    },
    {
        date: 'August 2022 · December 2023',
        role: 'Full-Stack Engineer',
        comp: 'Regional Water Utility Company Intan Banjar',
        desc: 'Building and optimizing systems for clean water payment processing, installation requests, and customer complaint management, ensuring seamless and efficient service delivery.',
        logo: '/images/company/3.png'
    },
    {
        date: 'February 2020 · December 2022',
        role: 'Full-Stack Engineer',
        comp: 'Department of Communication and Informatics of Hulu Sungai Selatan Regency',
        desc: 'Responsible for developing government applications and managing main and email servers infrastructures to ensure seamless operations and robust security.',
        logo: '/images/company/2.png'
    },
    {
        date: 'February 2019 · Feb 2020',
        role: 'Administrator & Full-Stack Programmer',
        comp: 'Hasnur Jaya International',
        desc: 'Freelance Developer focused on Warehouse Management Systems, streamlining inventory processes with FIFO and LIFO strategies, overseeing fuel and clean water data management, and automating asset maintenance schedules.',
        logo: '/images/company/1.png'
    }
];