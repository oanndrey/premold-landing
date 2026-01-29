'use client'
import SectionTitle from "@/components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon, Building2Icon } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
    return (
        <div id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <SectionTitle 
                text1="Contato" 
                text2="Agende uma Demonstração" 
                text3="Pronto para levar sua fábrica ao próximo nível? Nossa equipe técnica está pronta para mostrar como o Premold pode otimizar sua produção." 
            />
            
            <form onSubmit={(e) => e.preventDefault()} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full'>
                
                {/* Campo: Nome */}
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium text-sm'>Seu nome</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 bg-slate-900/50 focus-within:border-red-500 transition-colors'>
                        <UserIcon className='size-5 text-slate-500' />
                        <input name='name' type="text" placeholder='Ex: João Silva' className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600' />
                    </div>
                </motion.div>

                {/* Campo: Nome da Empresa/Fábrica */}
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium text-sm'>Nome da Fábrica</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 bg-slate-900/50 focus-within:border-red-500 transition-colors'>
                        <Building2Icon className='size-5 text-slate-500' />
                        <input name='factory' type="text" placeholder='Ex: Premoldados Horizonte' className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600' />
                    </div>
                </motion.div>

                {/* Campo: E-mail Corporativo */}
                <motion.div className="sm:col-span-2"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium text-sm'>E-mail corporativo</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 bg-slate-900/50 focus-within:border-red-500 transition-colors'>
                        <MailIcon className='size-5 text-slate-500' />
                        <input name='email' type="email" placeholder='joao@suafabrica.com.br' className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600' />
                    </div>
                </motion.div>

                {/* Campo: Mensagem/Necessidade */}
                <motion.div className='sm:col-span-2'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium text-sm'>Como podemos ajudar sua produção?</p>
                    <textarea 
                        name='message' 
                        rows={6} 
                        placeholder='Conte um pouco sobre seus desafios atuais (estoque, produção, custos...)' 
                        className='focus:border-red-500 bg-slate-900/50 resize-none w-full p-3 outline-none rounded-lg border border-slate-700 placeholder:text-slate-600 transition-colors' 
                    />
                </motion.div>

                {/* Botão de Envio */}
                <motion.button 
                    type='submit' 
                    className='w-full sm:w-max flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg shadow-red-900/20'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Solicitar Contato Técnico
                    <ArrowRightIcon className="size-5" />
                </motion.button>
            </form>
        </div>
    );
}