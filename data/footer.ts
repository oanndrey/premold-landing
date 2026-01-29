import { IFooter } from "@/types";

export const footerData: IFooter[] = [
    {
        title: "Sistema",
        links: [
            { name: "Início", href: "/"},
            { name: "Funcionalidades", href: "#features" },
            { name: "Planos e Preços", href: "#pricing" },
            { name: "Demonstração", href: "#contact" },
        ]
    },
    {
        title: "Recursos",
        links: [
            { name: "Suporte Técnico", href: "#" },
            { name: "Blog Industrial", href: "#" },
            { name: "Sobre a Hiwston", href: "#" },
            { name: "Carreiras", href: "#" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacidade", href: "#" },
            { name: "Termos de Uso", href: "#" },
            { name: "Compliance", href: "#" },
        ]
    }
];