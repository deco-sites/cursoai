import { JSX } from "preact";

export interface Benefit {
  icon?: JSX.Element;
  iconUrl?: string;
  iconAlt?: string;
  title: string;
  description: string;
}

export interface BenefitsProps {
  title?: string;
  subtitle?: string;
  benefits?: Benefit[];
}

export default function Benefits({
  title = "Inteligência Artificial não é o futuro — é o agora!",
  subtitle = "Qualquer pessoa pode resolver problemas e automatizar o trabalho com IA",
  benefits = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#D0EC1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 17v-6M12 7h.01" />
          <path d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0z" />
        </svg>
      ),
      title: "Aprenda o que está sendo usado agora!",
      description: "Nosso conteúdo evolui com o mercado. A cada semana, algo novo. Porque é assim que a inteligência artificial se move."
    },
    {
      iconUrl: "/static/icons/forum.svg",
      iconAlt: "Ícone de fórum",
      title: "Ambiente de aprendizado ativo",
      description: "Aulas ao vivo, troca entre participantes, discussões abertas e exercícios hands-on. Interação direta com os especialistas."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#D0EC1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Dos fundamentos à criação de agentes inteligentes",
      description: "Fundamentos sólidos, aplicações práticas e construção de agentes com lógica, memória e ação."
    },
    {
      iconUrl: "/static/icons/play_lesson.svg",
      iconAlt: "Ícone de aula",
      title: "Flexibilidade de Horário",
      description: "Aulas ao vivo, práticas e objetivas. Gravadas para assistir depois, se quiser revisar ou não conseguir ao vivo."
    }
  ],
}: BenefitsProps): JSX.Element {
  return (
    <section className="w-full py-16 relative">
      <div className="bg-gradient-glow">
        <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-[#D0EC1A]/[0.03] rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 right-[15%] w-[500px] h-[500px] bg-[#00FF99]/[0.03] rounded-full blur-[100px] opacity-50"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 fade-in-section">
          <h2 className="font-montserrat text-3xl md:text-4xl text-white tracking-tighter mb-4">
            {title}
          </h2>
          
          <p className="text-[#A0A0A0] text-base max-w-lg">
            {subtitle}
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`bg-[#1A1A1A] border border-[#1F2937] rounded-xl p-6 hover:border-[#D0EC1A] transition-all duration-300 fade-in-section delay-${index + 1}`}>
              <div className="bg-[#121212]/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon ? (
                  benefit.icon
                ) : benefit.iconUrl ? (
                  <img 
                    src={benefit.iconUrl} 
                    alt={benefit.iconAlt || `Ícone para ${benefit.title}`} 
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <div className="w-10 h-10 bg-[#D0EC1A]/20 rounded-full"></div>
                )}
              </div>
              <h3 className="font-montserrat text-xl text-white mb-3">{benefit.title}</h3>
              <p className="text-[#A0A0A0]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 