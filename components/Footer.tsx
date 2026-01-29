'use client'
import { footerData } from "@/data/footer";
import { DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IFooterLink } from "@/types";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-10 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 border-t border-slate-900">
            <motion.div className="flex flex-wrap items-start gap-10 md:gap-35"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <Link href="/">
                    <Image className="size-8 aspect-square" src="/assets/logo.svg" alt="Premold Logo" width={32} height={32} priority />
                </Link>
                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-slate-100 font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link: IFooterLink, index: number) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-red-600 transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60 text-slate-400">Transformando a gestão de fábricas de premoldados com tecnologia de ponta.</p>
                
                <div className="flex items-center gap-4 mt-3">
                    <a href="#!" rel="noreferrer" aria-label="LinkedIn">
                        <LinkedinIcon className="size-5 hover:text-red-500 transition-colors" />
                    </a>
                    <a href="#!" rel="noreferrer" aria-label="Twitter/X">
                        <TwitterIcon className="size-5 hover:text-red-500 transition-colors" />
                    </a>
                    <a href="#!" rel="noreferrer" aria-label="YouTube">
                        <YoutubeIcon className="size-6 hover:text-red-500 transition-colors" />
                    </a>
                    <a href="#!" rel="noreferrer" aria-label="Instagram">
                        <DribbbleIcon className="size-5 hover:text-red-500 transition-colors" />
                    </a>
                </div>
                
                <p className="mt-3 text-center">
                    &copy; {new Date().getFullYear()} <strong>Premold</strong> • Uma solução <a href="https://hiwston.com" target="_blank" className="text-red-500 hover:underline font-medium">Hiwston Software</a>
                </p>
            </motion.div>
        </footer>
    );
}