type Menu = {
    label: string;
    route: string;
}

type Social = {
    name: string;
    icon: string;
    href: string;
}

type Project = {
    name: string;
    desc: string;
    link: string;
    prev: string;
}

type Experience = {
    date: string;
    role: string;
    comp: string;
    desc: string;
    logo: string;
};

export type { Menu, Social, Project, Experience };