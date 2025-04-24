import Navbar from "./sections/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import Benefits from "./sections/Benefits.tsx";
import LiveClasses from "./sections/LiveClasses.tsx"; 
import Testimonials from "./sections/Testimonials.tsx";
import FAQ from "./sections/FAQ.tsx";
import FooterSection from "./sections/FooterSection.tsx";
import AboutUs from "./sections/AboutUs.tsx";
import ScrollAnimationScript from "./sections/ScrollAnimationScript.tsx";
import "./style.css";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#121212] overflow-x-hidden">
      {/* Script para animações de scroll */}
      <ScrollAnimationScript />
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#D0EC1A]/[0.05] rounded-full blur-[120px] -translate-y-1/4 -translate-x-1/3 opacity-70"></div>
        <div className="absolute top-[30%] right-0 w-[600px] h-[600px] bg-[#D0EC1A]/[0.06] rounded-full blur-[100px] translate-x-1/4 opacity-60"></div>
        <div className="absolute top-[60%] left-[20%] w-[500px] h-[500px] bg-[#00FF99]/[0.04] rounded-full blur-[90px] opacity-50"></div>
        <div className="absolute bottom-0 right-[10%] w-[700px] h-[700px] bg-[#D0EC1A]/[0.05] rounded-full blur-[110px] translate-y-1/3 opacity-60"></div>
      </div>

      <Navbar
        logo={{
          type: "text",
          content: "AICADEMY",
          href: "/",
        }}
        links={[
          { text: "Home", href: "#" },
          { text: "Classes", href: "#classes" },
          { text: "About", href: "#about" },
          { text: "FAQ", href: "#faq" },
        ]}
        ctaText="Inscrever-se"
        ctaHref="#"
      />

      <Hero
        eyebrow="NOVA TURMA"
        title={<><span className="font-inter">Aprenda Inteligência Artificial com quem está</span> <span className="font-['Crimson_Pro'] italic font-medium">construindo</span> <span className="font-inter">o futuro!</span></>}
        description="Aprenda os fundamentos da IA, aplicações práticas e crie os seus próprios agentes de IA através de aulas interativas ao vivo com especialistas."
        primaryCta={{
          text: "Ver próximas aulas",
          href: "#classes",
        }}
        secondaryCta={{
          text: "Entrar em contato",
          href: "#contact",
        }}
        powerBadges={[
          { text: "deco.ai" },
          { text: "Carcará" },
        ]}
      />

      <Benefits
        title="Por que aprender com a AICADEMY"
        subtitle="Nossa plataforma oferece vantagens exclusivas para acelerar seu aprendizado em IA"
        benefits={[
          {
            iconUrl: "/static/icons/library_books.svg",
            iconAlt: "Livros e recursos de aprendizado",
            title: "Conhecimento Especializado",
            description: "Aprenda com profissionais que estão criando as tecnologias de IA mais avançadas do mercado."
          },
          {
            iconUrl: "/static/icons/forum.svg",
            iconAlt: "Fórum de discussão",
            title: "Flexibilidade de Horários",
            description: "Aulas ao vivo em horários convenientes e acesso permanente às gravações para estudar quando quiser."
          },
          {
            iconUrl: "/static/icons/construction.svg",
            iconAlt: "Ferramentas de construção",
            title: "Comunidade Ativa",
            description: "Faça parte de uma comunidade exclusiva de alunos e profissionais para networking e troca de experiências."
          },
          {
            iconUrl: "/static/icons/play_lesson.svg",
            iconAlt: "Reproduzir aula",
            title: "Projetos Práticos",
            description: "Desenvolva projetos reais com feedback de especialistas para construir um portfólio impressionante."
          }
        ]}
      />

      <div id="classes">
        <LiveClasses 
          viewAllLink="/classes"
        />
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <Testimonials />

      <div id="faq">
        <FAQ />
      </div>

      <FooterSection 
        companyLogo="/static/images/aicademy-logo.svg"
        companyLogoAlt="AICADEMY Logo"
        companyDescription="Transformando conhecimento em inteligência artificial com uma plataforma inovadora de educação focada nas tecnologias que estão moldando o futuro."
        sections={[
          {
            title: "Cursos",
            links: [
              { text: "IA Básico", href: "#" },
              { text: "Machine Learning", href: "#" },
              { text: "Deep Learning", href: "#" },
              { text: "NLP", href: "#" },
            ]
          },
          {
            title: "Recursos",
            links: [
              { text: "Blog", href: "#" },
              { text: "Comunidade", href: "#" },
              { text: "Eventos", href: "#" },
              { text: "FAQ", href: "#" },
            ]
          },
          {
            title: "Empresa",
            links: [
              { text: "Sobre nós", href: "#" },
              { text: "Nossa equipe", href: "#" },
              { text: "Contato", href: "#" },
              { text: "Carreiras", href: "#" },
            ]
          }
        ]}
        contactInfo={{
          address: "São Paulo, SP",
          phone: "+55 11 9999-9999",
          email: "contato@aicademy.com"
        }}
        socialMedia={[
          { type: "facebook", href: "#" },
          { type: "instagram", href: "#" },
          { type: "linkedin", href: "#" },
          { type: "email", href: "mailto:contato@aicademy.com" }
        ]}
      />
    </div>
  );
} 