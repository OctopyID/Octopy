import type { Menu, Project, Social } from './types';

export const menus: Array<Menu> = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Posts',
        route: '/'
    },
    {
        label: 'Projects',
        route: '/projects'
    },
    {
        label: 'About Me',
        route: '/'
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