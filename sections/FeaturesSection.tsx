'use client'
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "@/data/features";
import { IFeature } from "@/types";

export default function FeaturesSection() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle 
                text1="Recursos Técnicos" 
                text2="Gestão especializada" 
                text3="Módulos integrados para o controle total da sua produção de blocos, pisos e artefatos." 
            />
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-16 px-6">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div key={index} className={`${index === 1 ? 'p-px rounded-[13px] bg-linear-to-br from-red-600 to-slate-800' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 max-w-80 w-full min-h-[220px]">
                            {feature.icon}
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 line-clamp-3 pb-4">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-40 relative mx-auto max-w-5xl">
                <div className="absolute -z-50 size-100 -top-10 -left-20 aspect-square rounded-full bg-red-500/40 blur-3xl"></div>
                <motion.p className="text-slate-300 text-lg text-left max-w-3xl"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    O Premold transforma a gestão da sua fábrica, eliminando planilhas manuais e erros de estoque com uma interface intuitiva e robusta.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    <motion.div className="md:col-span-2"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        {/* Aqui você deve colocar uma imagem da dashboard do seu sistema */}
                        <Image className="h-full w-auto rounded-xl border border-slate-800" src="/assets/features-showcase-1.png" alt="Visualização do Sistema Premold" width={1000} height={500} />
                    </motion.div>
                    <motion.div className="md:col-span-1"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <Image src="/assets/features-showcase-2.png" alt="Controle de Produção" width={1000} height={500} className="hover:-translate-y-0.5 transition duration-300 rounded-xl" />
                        <h3 className="text-[24px]/7.5 text-slate-300 font-medium mt-6">Decisões baseadas em dados reais </h3>
                        <p className="text-slate-300 mt-2">Tenha relatórios precisos de lucratividade por lote e rendimento de matéria-prima.</p>
                        <a href="#!" className="group flex items-center gap-2 mt-4 text-red-600 hover:text-red-700 transition">
                            Agendar demonstração técnica
                            <ArrowUpRight className="size-5 group-hover:translate-x-0.5 transition duration-300" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}