import { JSX } from "preact";

export interface HeroProps {
  eyebrow?: string;
  title?: JSX.Element | string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  powerBadges?: Array<{
    text: string;
  }>;
}

export default function Hero({
  eyebrow = "NOVA TURMA",
  title = <><span className="font-inter">Assuma o controle do seu</span> <span className="font-['Crimson_Pro'] italic font-medium">futuro</span> <span className="font-inter">na era da Inteligência Artificial</span></>,
  description = " Dos fundamentos à construção de AI Agents, aprenda com especialistas que estão construindo o futuro. Seja você iniciante ou programador profissional, domine a inteligência artificial e crie soluções de AI que entendam, raciocinem e ajam.",
  primaryCta = {
    text: "Participar da comunidade",
    href: "#",
  },
  secondaryCta = {
    text: "Veja as Próximas Aulas",
    href: "#",
  },
  powerBadges = [
    { text: "deco.chat" },
    { text: "Carcará" },
  ],
}: HeroProps): JSX.Element {
  return (
    <main className="max-w-6xl w-full min-h-[80vh] flex flex-col items-center justify-center pt-40 pb-16 px-6 mx-auto relative z-10">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
        <div className="eyebrow mb-4 relative inline-flex items-center text-[#D0EC1A] text-sm font-medium tracking-wider uppercase bg-[rgba(208,236,26,0.1)] px-3 py-1.5 rounded-full fade-in-section">
          <div className="w-1.5 h-1.5 bg-[#D0EC1A] rounded-full mr-2"></div>
          {eyebrow}
        </div>

        <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tighter mb-6 w-full fade-in-section delay-1">
          {title}
        </h1>
        
        <p className="text-[#D1D5DB] text-lg mb-12 max-w-3xl mx-auto fade-in-section delay-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12 justify-center fade-in-section delay-3">
          <a href={primaryCta.href} className="flex items-center gap-2 bg-[#D0EC1A] text-[#121212] px-6 py-3 rounded-md font-medium text-base transition-transform duration-300 hover:transform hover:scale-105">
            {primaryCta.text}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <a href={secondaryCta.href} className="flex items-center border border-[#D0EC1A] text-[#D0EC1A] px-6 py-3 rounded-md font-medium text-base transition-colors duration-300 hover:bg-[rgba(208,236,26,0.1)]">
            {secondaryCta.text}
          </a>
        </div>
        
        {powerBadges && powerBadges.length > 0 && (
          <div className="flex items-center justify-center text-sm fade-in-section delay-4">
            <span className="text-[#D0EC1A] font-bold">Powered by:</span>
            {powerBadges.map((badge, index) => (
              <>
                <span className="text-[#9CA3AF] font-bold ml-2">{badge.text}</span>
                {index < powerBadges.length - 1 && <span className="text-[#9CA3AF] mx-2">•</span>}
              </>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 