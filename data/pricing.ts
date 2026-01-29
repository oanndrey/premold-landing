import { IPricing } from "@/types";

export const pricingData: IPricing[] = [
    {
        name: "Essencial",
        price: 300,
        period: "mês",
        features: [
            "Gestão de Estoque de Insumos",
            "Cadastro de Clientes e Produtos",
            "Pedidos de Venda e Orçamentos",
            "Relatórios Financeiros Básicos",
            "Suporte via E-mail e Ticket",
            "Até 3 usuários logados"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 600,
        period: "mês",
        features: [
            "Tudo do plano Essencial",
            "Controle de Produção (Cura e Desforma)",
            "Gestão de Paletização e Expedição",
            "Financeiro Completo (DRE/Fluxo de Caixa)",
            "Suporte Prioritário via WhatsApp",
            "Usuários Ilimitados"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 0, // Definido como 0 para ativar o "Sob consulta" no componente visual
        period: "custom",
        features: [
            "Multi-filiais (Gestão de várias fábricas)",
            "Integração com Balanças e Sensores",
            "Dashboard em Tempo Real (BI)",
            "Consultoria de Implantação Local",
            "API para integrações externas",
            "Backup e Segurança dedicada"
        ],
        mostPopular: false
    }
];