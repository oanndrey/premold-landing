'use client'
import SectionTitle from "@/components/SectionTitle";
import { pricingData } from "@/data/pricing"; // Certifique-se que o caminho está correto
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
    return (
        <section id="plans" className="py-20 px-4 md:px-10 lg:px-16 xl:px-20">
            <SectionTitle
                text1="Planos e Preços"
                text2="Escolha o ideal para sua fábrica"
                text3="Comece pequeno e cresça com a gente. Temos uma condição especial para clientes Hiwston."
            />

            {/* ALTERAÇÃO AQUI: 
                - grid-cols-1 (Mobile)
                - md:grid-cols-2 (Tablet - fica 2 em cima, 2 embaixo)
                - xl:grid-cols-4 (Desktop Grande - fica os 4 lado a lado)
                - gap-6 (Diminuí um pouco o espaçamento para caber melhor os 4)
                - max-w-[1600px] (Aumentei a largura máxima para dar respiro aos 4 cards)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16 max-w-[1600px] mx-auto">
                {pricingData.map((plan, index) => {
                    // Lógica de Estilização
                    const isHiwston = plan.isHiwston;
                    
                    // Definição de Cores e Bordas
                    const containerClasses = isHiwston
                        ? "border-blue-500/50 bg-slate-900/40 shadow-xl shadow-blue-900/10 hover:border-blue-400"
                        : plan.mostPopular 
                            ? "border-red-500/50 bg-slate-900/40 shadow-xl shadow-red-900/10 hover:border-red-400"
                            : "border-slate-800 bg-slate-900/20 hover:border-slate-700";

                    const titleColor = isHiwston ? "text-blue-400" : (plan.mostPopular ? "text-red-400" : "text-white");
                    const checkColor = isHiwston ? "text-blue-500" : "text-red-500";

                    const buttonStyle = isHiwston
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-900/20"
                        : plan.mostPopular
                            ? "bg-red-600 hover:bg-red-700 text-white shadow-red-900/20"
                            : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700";

                    const buttonText = isHiwston 
                        ? "Ativar meu Plano" 
                        : (plan.price === 0 ? "Falar com Vendas" : "Começar Teste Grátis");

                    // Descrições baseadas no plano (já que não vem do data)
                    const getDescription = () => {
                        if (isHiwston) return "Exclusivo para clientes que já utilizam soluções Hiwston Tecnologia.";
                        if (plan.name === "Essencial") return "Para fábricas que buscam profissionalizar a gestão básica.";
                        if (plan.name === "Pro") return "Controle total de produção e financeiro para sua fábrica.";
                        return "Para grandes indústrias com múltiplas plantas e processos complexos.";
                    };

                    return (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl p-6 border flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${containerClasses}`}
                        >
                            {/* Badges */}
                            {isHiwston && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-blue-900/50 whitespace-nowrap">
                                    Cliente Hiwston
                                </div>
                            )}
                            
                            {!isHiwston && plan.mostPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-red-900/50 whitespace-nowrap">
                                    Mais Popular
                                </div>
                            )}

                            <div className="mb-4">
                                <h3 className={`text-xl font-bold ${titleColor}`}>
                                    {plan.name}
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm mt-2 min-h-[40px] leading-relaxed">
                                    {getDescription()}
                                </p>
                            </div>

                            <div className="mb-6 flex items-baseline gap-1">
                                {typeof plan.price === 'number' && plan.price > 0 ? (
                                    <>
                                        <span className="text-sm font-medium text-slate-400">R$</span>
                                        <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                                    </>
                                ) : (
                                    <span className="text-3xl sm:text-4xl font-bold text-white">
                                        {plan.price === 0 ? "Sob Consulta" : plan.price}
                                    </span>
                                )}
                                
                                {plan.period && (
                                    <span className="text-slate-500 font-medium text-sm">
                                        /{plan.period === "custom" ? "" : plan.period}
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm">
                                        <CheckIcon className={`size-4 sm:size-5 shrink-0 ${checkColor}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-semibold text-sm sm:text-base transition-all active:scale-95 ${buttonStyle}`}>
                                {buttonText}
                            </button>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}