import { JSX } from "preact";
import FAQScript from "./FAQScript.tsx";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  ctaText?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

export default function FAQ({
  title = "Perguntas Frequentes",
  subtitle = "Tire suas dúvidas sobre a AICADEMY e nossos cursos",
  faqs = [
    {
      question: "Como funcionam as aulas ao vivo?",
      answer: "As aulas ao vivo acontecem pela nossa plataforma proprietária em horários pré-agendados. Você pode interagir com o instrutor e outros alunos em tempo real. Todas as aulas ficam gravadas para acesso posterior."
    },
    {
      question: "Preciso ter conhecimento prévio em IA?",
      answer: "Não necessariamente. Temos cursos para todos os níveis, desde iniciantes até especialistas. Recomendamos que verifique os pré-requisitos específicos de cada curso antes de se inscrever."
    },
    {
      question: "Os certificados são reconhecidos pelo mercado?",
      answer: "Sim, nossos certificados são amplamente reconhecidos no mercado. A AICADEMY é credenciada pelo Conselho Global de IA e nossos cursos seguem os padrões internacionais da ISO/IEC 42001:2023."
    },
    {
      question: "Qual a carga horária dos cursos?",
      answer: "A carga horária varia de acordo com cada curso. Em média, nossos cursos intensivos têm duração de 8 semanas com 4 horas de aulas ao vivo por semana, mais atividades práticas e projetos."
    },
    {
      question: "Como é feito o pagamento?",
      answer: "Oferecemos múltiplas opções de pagamento: cartão de crédito (parcelado em até 12x), boleto bancário, PIX e transferência bancária. Também temos programas de bolsas parciais e parcerias com empresas."
    },
    {
      question: "Posso cancelar minha inscrição?",
      answer: "Sim, oferecemos garantia de 15 dias. Se você não estiver satisfeito com o conteúdo, pode solicitar reembolso total dentro deste período, sem questionamentos."
    }
  ],
  ctaLabel = "Não encontrou o que procurava?",
  ctaText = "Entre em Contato",
  ctaLink = "#",
}: FAQProps): JSX.Element {
  return (
    <section class="w-full relative overflow-visible py-16">
      <FAQScript />
      
      <div class="bg-gradient-glow">
        <div class="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-[#D0EC1A]/[0.03] rounded-full blur-[100px] opacity-40"></div>
        <div class="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-[#00FF99]/[0.02] rounded-full blur-[90px] opacity-30"></div>
      </div>
      
      <div class="container max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="font-montserrat text-3xl md:text-4xl text-white tracking-tighter mb-4">
            {title}
          </h2>
          
          <p class="text-[#A0A0A0] text-base max-w-lg">
            {subtitle}
          </p>
        </div>
        
        {/* FAQ Items */}
        <div class="space-y-0">
          {faqs.map((faq, index) => (
            <div class="faq-item border-b border-[#1F2937] py-6" key={`faq-${index}`}>
              <button class="faq-toggle w-full flex items-center justify-between text-left">
                <h3 class="font-montserrat text-lg text-white">{faq.question}</h3>
                <svg class="faq-icon w-5 h-5 text-[#D0EC1A] transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="faq-content hidden overflow-hidden max-h-0 transition-all duration-300 mt-4">
                <p class="text-[#D1D5DB]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Question CTA */}
        <div class="mt-12 text-center">
          <p class="text-[#D1D5DB] mb-6">{ctaLabel}</p>
          <a href={ctaLink} class="inline-flex items-center gap-2 bg-[#D0EC1A] text-[#121212] px-6 py-3 rounded-md font-medium text-base">
            {ctaText}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 