'use client'
import SectionTitle from "@/components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon, Building2Icon, PhoneIcon, FileTextIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactSection() {
    // Estado para guardar os dados do formulário
    const [formData, setFormData] = useState({
        name: '',
        factory: '',
        cnpj: '',
        phone: '',
        email: '',
        message: ''
    });

    // Função de Máscara para Telefone
    const maskPhone = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            .replace(/(\d)(\d{4})$/, "$1-$2");
    };

    // Função de Máscara para CNPJ
    const maskCNPJ = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/, "$1.$2")
            .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
            .replace(/\.(\d{3})(\d)/, ".$1/$2")
            .replace(/(\d{4})(\d)/, "$1-$2");
    };

    // Atualiza o estado e aplica máscaras quando necessário
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === 'phone') {
            formattedValue = maskPhone(value);
        } else if (name === 'cnpj') {
            formattedValue = maskCNPJ(value);
        }

        setFormData(prev => ({ ...prev, [name]: formattedValue }));
    };

    // Envia para o WhatsApp com emojis seguros (Unicode)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Códigos Unicode dos Emojis (Para não bugar nunca)
        const rocket = '\u{1F680}';
        const user = '\u{1F464}';
        const factory = '\u{1F3ED}';
        const doc = '\u{1F4C4}';
        const phone = '\u{1F4F1}';
        const emailIcon = '\u{1F4E7}';
        const memo = '\u{1F4DD}';
        const link = '\u{1F517}';

        // Montagem da mensagem
        const text = 
`*NOVA SOLICITAÇÃO - SITE PREMOLD*
-----------------------------------
*Cliente:* ${formData.name}
*Fábrica:* ${formData.factory}
*CNPJ:* ${formData.cnpj || "Não informado"}
*WhatsApp:* ${formData.phone}
*E-mail:* ${formData.email}

*Mensagem:*
"Gostaria de agendar uma demonstração e conhecer mais sobre o sistema."

-----------------------------------
*Origem:* Formulário de Contato do Site`;

        // Codificação da URL e envio
        const phoneNumber = "5588997414191";
        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        // Abre em nova aba
        window.open(url, '_blank');
    };

    return (
        <div id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <SectionTitle 
                text1="Contato" 
                text2="Agende uma Demonstração" 
                text3="Pronto para levar sua fábrica ao próximo nível? Nossa equipe técnica está pronta para mostrar como o Premold pode otimizar sua produção." 
            />
            
            <form onSubmit={handleSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full'>
                
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
                        <input 
                            name='name' 
                            value={formData.name} 
                            onChange={handleChange} 
                            required
                            type="text" 
                            placeholder='Ex: João Silva' 
                            className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600' 
                        />
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
                        <input 
                            name='factory' 
                            value={formData.factory} 
                            onChange={handleChange}
                            required 
                            type="text" 
                            placeholder='Ex: Premoldados Horizonte' 
                            className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600' 
                        />
                    </div>
                </motion.div>

                {/* --- CNPJ (COM MÁSCARA) --- */}
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium text-sm'>CNPJ da Fábrica</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 bg-slate-900/50 focus-within:border-red-500 transition-colors'>
                        <FileTextIcon className='size-5 text-slate-500' />
                        <input 
                            name='cnpj' 
                            value={formData.cnpj} 
                            onChange={handleChange}
                            maxLength={18} 
                            type="text" 
                            placeholder='00.000.000/0001-00' 
                            className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600' 
                        />
                    </div>
                </motion.div>

                {/* --- TELEFONE (COM MÁSCARA) --- */}
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium text-sm'>Telefone / WhatsApp</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 bg-slate-900/50 focus-within:border-red-500 transition-colors'>
                        <PhoneIcon className='size-5 text-slate-500' />
                        <input 
                            name='phone' 
                            value={formData.phone} 
                            onChange={handleChange}
                            maxLength={15} 
                            required
                            type="tel" 
                            placeholder='(00) 90000-0000' 
                            className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600' 
                        />
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
                        <input 
                            name='email' 
                            value={formData.email} 
                            onChange={handleChange}
                            required
                            type="email" 
                            placeholder='joao@suafabrica.com.br' 
                            className='w-full p-3 bg-transparent outline-none placeholder:text-slate-600' 
                        />
                    </div>
                </motion.div>

                {/* Campo: Mensagem/Necessidade */}
                <motion.div className='sm:col-span-2'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <div className="flex justify-between items-end mb-2">
                        <p className='font-medium text-sm'>Como podemos ajudar?</p>
                        <span className="text-xs text-slate-500 font-light">(Opcional)</span>
                    </div>
                    <textarea 
                        name='message' 
                        value={formData.message} 
                        onChange={handleChange}
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