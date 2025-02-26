type Menu = {
    label: string;
    route: string;
};

type Social = {
    name: string;
    icon: string;
    href: string;
};

type Project = {
    name: string;
    desc: string;
    link: string | null;
    prev: string;
};

type Experience = {
    date: string;
    role: string;
    comp: string;
    desc: string;
    logo: string;
};

type TechStack = {
    label: string;
    color: string;
};

export type { Menu, Social, Project, Experience, TechStack };
