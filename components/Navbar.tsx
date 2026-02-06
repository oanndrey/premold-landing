'use client'
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "@/data/navlinks";
import { INavLink } from "@/types";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                {/* --- MUDANÇA AQUI: Transformei o Link em Flex Column --- */}
                <a href="#!" className="flex flex-col items-start gap-1">
                    <Image className="h-9.5 w-auto" src="/assets/premold-logo.svg" alt="logo" width={240} height={44} priority />
                    
                    {/* Texto adicionado abaixo da logo */}
                    <span className="text-[16px] font-medium leading-none text-gray-600 dark:text-gray-300 ml-1">
                        Uma solução<span className="text-white-600 text-[20px]"> <i>Hiwston <span className="text-blue-600">Software</span></i></span>
                    </span>
                </a>
                {/* -------------------------------------------------------- */}

                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    {navlinks.map((link: INavLink) => (
                        <Link key={link.name} href={link.href} className="hover:text-red-500 transition">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <button className="hidden md:block px-6 py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 transition-all rounded-full">
                    Teste Grátis
                </button>
                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link: INavLink) => (
                    <Link key={link.name} href={link.href} onNavigate={() => setIsOpen(false)}>
                        {link.name}
                    </Link>
                ))}
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-red-600 hover:bg-red-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}