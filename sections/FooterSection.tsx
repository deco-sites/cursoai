import { JSX } from "preact";

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialMedia {
  type: "facebook" | "instagram" | "email" | "linkedin";
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface FooterSectionProps {
  companyName?: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  companyDescription?: string;
  socialMedia?: SocialMedia[];
  sections?: FooterSection[];
  contactInfo?: ContactInfo;
  legalLinks?: FooterLink[];
  copyrightText?: string;
  poweredByText?: string;
}

export default function FooterSection({
  companyName = "AICADEMY",
  companyLogo = "",
  companyLogoAlt = "Logo da empresa",
  companyDescription = "AICADEMY é uma plataforma pioneira de educação em inteligência artificial que conecta você às habilidades do futuro através de aulas ao vivo conduzidas por especialistas líderes da indústria.",
  socialMedia = [
    { type: "facebook", href: "#" },
    { type: "instagram", href: "#" },
    { type: "email", href: "#" },
    { type: "linkedin", href: "#" },
  ],
  sections = [
    {
      title: "Links Rápidos",
      links: [
        { text: "Home", href: "#" },
        { text: "Cursos", href: "#" },
        { text: "Live Classes", href: "#" },
        { text: "Comunidade", href: "#" },
        { text: "Especialistas", href: "#" },
        { text: "Certificações", href: "#" },
      ]
    },
    {
      title: "Recursos",
      links: [
        { text: "Blog", href: "#" },
        { text: "Podcast IA em Foco", href: "#" },
        { text: "Relatórios de Tendências", href: "#" },
        { text: "Guias de Implementação", href: "#" },
        { text: "Webinars Gratuitos", href: "#" },
        { text: "Ferramentas", href: "#" },
      ]
    }
  ],
  contactInfo = {
    address: "Av. Paulista, 1578, São Paulo - SP, 01310-200",
    phone: "+55 (11) 4002-8922",
    email: "contato@aicademy.com.br"
  },
  legalLinks = [
    { text: "Termos de Uso", href: "#" },
    { text: "Política de Privacidade", href: "#" },
    { text: "Cookies", href: "#" },
  ],
  copyrightText = "© 2025 AICADEMY. Todos os direitos reservados.",
  poweredByText = "Powered by deco.ai and Carcará | Acreditado pelo Conselho Global de IA (GCAI) | ISO/IEC 42001:2023",
}: FooterSectionProps): JSX.Element {
  const renderSocialIcon = (type: SocialMedia["type"]) => {
    switch (type) {
      case "facebook":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3087 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1921C13.9499 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        );
      case "instagram":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8C2 4.68629 4.68629 2 8 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 6.5L17.511 6.489" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        );
      case "email":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 15L21 9M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        );
      case "linkedin":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer class="w-full relative overflow-visible pt-20 pb-8">
      <div class="bg-gradient-glow">
        <div class="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-70"></div>
        <div class="absolute top-0 left-[20%] w-[600px] h-[600px] bg-[#D0EC1A]/[0.03] rounded-full blur-[100px] opacity-40"></div>
        <div class="absolute bottom-0 right-[15%] w-[500px] h-[500px] bg-[#00FF99]/[0.02] rounded-full blur-[100px] opacity-50"></div>
      </div>
      
      <div class="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Footer Top */}
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & About */}
          <div class="md:col-span-1">
            <a href="#" class="inline-block">
              {companyLogo ? (
                <img 
                  src={companyLogo} 
                  alt={companyLogoAlt || companyName} 
                  class="h-10 max-w-[180px] object-contain mb-2"
                />
              ) : (
                <span class="text-[#D0EC1A] font-montserrat font-bold text-2xl">{companyName}</span>
              )}
            </a>
            <p class="text-[#A0A0A0] mt-4 text-sm">
              {companyDescription}
            </p>
            <div class="flex mt-6 space-x-4">
              {socialMedia.map((social) => (
                <a key={social.type} href={social.href} class="text-[#D1D5DB] hover:text-[#D0EC1A] transition-colors">
                  {renderSocialIcon(social.type)}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links & Resources */}
          {sections.map((section, index) => (
            <div class="md:col-span-1" key={`section-${index}`}>
              <h3 class="font-montserrat font-semibold text-white mb-6">{section.title}</h3>
              <ul class="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={`link-${index}-${linkIndex}`}>
                    <a href={link.href} class="text-[#A0A0A0] hover:text-[#D0EC1A] transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Column 4: Contact */}
          <div class="md:col-span-1">
            <h3 class="font-montserrat font-semibold text-white mb-6">Contato</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-[#A0A0A0]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="min-w-[18px] mt-1">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span dangerouslySetInnerHTML={{ __html: contactInfo.address.replace(', ', ',<br>') }}></span>
              </li>
              <li class="flex items-center gap-3 text-[#A0A0A0]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{contactInfo.phone}</span>
              </li>
              <li class="flex items-center gap-3 text-[#A0A0A0]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5H3V19H21V5Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 5L12 14L21 5" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{contactInfo.email}</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div class="mt-6">
              <form class="flex gap-2">
                <input type="email" placeholder="Seu e-mail" class="bg-[#1A1A1A]/60 border border-[#1F2937] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D0EC1A] w-full" />
                <button type="submit" class="bg-[#D0EC1A] text-[#121212] p-2 rounded-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div class="border-t border-[#1F2937] pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-[#9CA3AF] text-sm mb-4 md:mb-0">
              {copyrightText}
            </div>
            
            <div class="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <a key={`legal-${index}`} href={link.href} class="text-[#9CA3AF] hover:text-[#D0EC1A] transition-colors text-sm">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          
          <div class="mt-6 text-center text-[#9CA3AF] text-xs">
            <p dangerouslySetInnerHTML={{ __html: poweredByText.replace('deco.ai', '<span class="text-[#D0EC1A]">deco.ai</span>').replace('Carcará', '<span class="text-[#D0EC1A]">Carcará</span>') }}></p>
          </div>
        </div>
      </div>
    </footer>
  );
} 