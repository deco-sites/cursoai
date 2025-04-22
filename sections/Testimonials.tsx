import { JSX } from "preact";

export interface Testimonial {
  text: string;
  author: {
    initials: string;
    name: string;
    role: string;
  };
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

export default function Testimonials({
  title = "O que nossos participantes estão dizendo",
  subtitle = "Depoimentos de alunos que transformaram suas carreiras com a AICADEMY",
  testimonials = [
    {
      text: "As aulas ao vivo foram um divisor de águas na minha carreira. Consegui implementar soluções de IA no meu trabalho logo após o primeiro mês de curso. O retorno sobre o investimento foi imediato e minha produtividade aumentou significativamente.",
      author: {
        initials: "MC",
        name: "Matheus Costa",
        role: "Product Manager @ Nubank"
      }
    },
    {
      text: "A qualidade do conteúdo e dos instrutores é excepcional.",
      author: {
        initials: "CR",
        name: "Carolina Ribeiro",
        role: "Data Manager @ iFood"
      }
    },
    {
      text: "A rede de contatos que construí na comunidade AICADEMY foi tão valiosa quanto o conteúdo em si. Já recebi três propostas de emprego através dos colegas que conheci aqui. O networking é um dos grandes diferenciais do programa.",
      author: {
        initials: "RO",
        name: "Rafael Oliveira",
        role: "AI Engineer @ Loft"
      }
    },
    {
      text: "Como CEO, precisava entender o potencial da IA para o nosso negócio. O curso executivo da AICADEMY me deu exatamente a visão estratégica que eu precisava para implementar soluções que transformaram completamente nossa operação.",
      author: {
        initials: "LM",
        name: "Luciana Mendes",
        role: "CEO @ TechStart"
      }
    },
    {
      text: "Os projetos práticos foram fundamentais para consolidar o aprendizado. Hoje lidero a implementação de IA generativa em toda a nossa operação de marketing, aumentando nossa conversão em mais de 230% em apenas três meses.",
      author: {
        initials: "FM",
        name: "Felipe Moreira",
        role: "CMO @ RD Station"
      }
    },
    {
      text: "A oportunidade de fazer networking com profissionais de grandes empresas durante as aulas me abriu portas que eu nem imaginava.",
      author: {
        initials: "GS",
        name: "Gabriel Santos",
        role: "ML Engineer @ Amazon"
      }
    },
    {
      text: "Como profissional de RH, o curso de IA para Recursos Humanos mudou completamente nossa abordagem de recrutamento e seleção.",
      author: {
        initials: "AM",
        name: "Amanda Martins",
        role: "Head of HR @ Stone"
      }
    }
  ],
}: TestimonialsProps): JSX.Element {
  // Create three equally distributed columns
  const testimonialColumns: Array<Array<Testimonial>> = [[], [], []];
  testimonials.forEach((testimonial, index) => {
    testimonialColumns[index % 3].push(testimonial);
  });

  return (
    <section class="w-full relative overflow-visible py-16">
      {/* Gradiente unificado no fundo */}
      <div class="bg-gradient-glow">
        <div class="absolute inset-0 bg-gradient-to-b from-[#D0EC1A]/[0.03] to-transparent opacity-70"></div>
        <div class="absolute top-[-20%] right-[10%] w-[600px] h-[600px] bg-[#D0EC1A]/[0.04] rounded-full blur-[100px] opacity-50"></div>
        <div class="absolute bottom-[-20%] left-[5%] w-[500px] h-[500px] bg-[#D0EC1A]/[0.03] rounded-full blur-[80px] opacity-60"></div>
      </div>
      
      <div class="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="font-montserrat text-3xl md:text-4xl text-white tracking-tighter mb-4">
            {title}
          </h2>
          
          <p class="text-[#A0A0A0] text-base max-w-lg">
            {subtitle}
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialColumns.map((column, columnIndex) => (
            <div class="space-y-8" key={`column-${columnIndex}`}>
              {column.map((testimonial, testimonialIndex) => (
                <div class="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#1F2937] rounded-xl p-6" key={`testimonial-${columnIndex}-${testimonialIndex}`}>
                  <p class="text-[#D1D5DB] mb-6 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[#D0EC1A] flex items-center justify-center text-[#121212] font-bold">
                      {testimonial.author.initials}
                    </div>
                    <div>
                      <h4 class="text-white font-medium text-sm">{testimonial.author.name}</h4>
                      <p class="text-[#9CA3AF] text-xs">{testimonial.author.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 