import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
    title: "Premold ERP - Gestão para Fábricas de Premoldados",
    description: "Premold é um sistema para gestão de fábricas de artefatos de cimento, como blocos, pisos e outros premoldados. Controle estoque, produção e financeiro em uma única plataforma.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}