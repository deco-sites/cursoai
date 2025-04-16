import React from 'react';
import { ClassPageProps } from './class-components';

/**
 * Componente para renderizar a barra de navegação
 */
const Navbar: React.FC<{ data: ClassPageProps['navbar'] }> = ({ data }) => (
  <header className="fixed top-0 left-0 w-full z-50 transition-transform duration-300" id="navbar">
    <div className="container max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <a href={data.logo.link} className="text-primary font-montserrat font-bold text-2xl">
        {data.logo.text}
      </a>
      
      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {data.links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            className={`${link.isActive ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}
          >
            {link.text}
          </a>
        ))}
      </nav>
      
      {/* CTA Button */}
      <a 
        href={data.ctaButton.url} 
        className="hidden md:flex items-center gap-2 bg-primary text-dark px-4 py-2 rounded-md font-medium text-sm"
      >
        {data.ctaButton.text}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  </header>
);

/**
 * Componente para renderizar a imagem de capa
 */
const ClassCover: React.FC<{ data: ClassPageProps['cover'] }> = ({ data }) => (
  <div 
    className="w-full relative mb-8 overflow-hidden" 
    style={{
      height: { 
        mobile: data.height?.mobile || "300px",
        desktop: data.height?.desktop || "400px"
      }[window.innerWidth < 768 ? 'mobile' : 'desktop']
    }}
  >
    <img src={data.image.src} alt={data.image.alt} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
  </div>
);

/**
 * Componente para renderizar o cabeçalho da classe
 */
const ClassHeader: React.FC<{ data: ClassPageProps['header'] }> = ({ data }) => (
  <div className="mb-8">
    <h1 className="font-montserrat text-3xl md:text-4xl text-white mb-6">{data.title}</h1>
    
    <div className="flex flex-wrap gap-4 mb-8">
      {/* Date */}
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span className="text-text-muted">{data.date.text}</span>
      </div>
      
      {/* Time */}
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span className="text-text-muted">{data.time.text}</span>
      </div>
      
      {/* Badges */}
      {data.badges.map((badge, index) => (
        <span 
          key={index} 
          className={`badge badge-${badge.type}`}
          style={badge.type === 'custom' ? { 
            color: badge.customColor, 
            backgroundColor: badge.customBgColor 
          } : {}}
        >
          {badge.text}
        </span>
      ))}
    </div>
  </div>
);

/**
 * Componente para renderizar a descrição da classe
 */
const ClassDescription: React.FC<{ data: ClassPageProps['description'] }> = ({ data }) => (
  <div className="prose prose-invert max-w-none mb-8">
    {data.paragraphs.map((paragraph, index) => (
      <p key={index} className={`text-text-muted ${index === 0 ? 'text-lg mb-4' : 'mb-8'}`}>
        {paragraph}
      </p>
    ))}
  </div>
);

/**
 * Componente para renderizar os tópicos da classe
 */
const ClassTopics: React.FC<{ data: ClassPageProps['topics'] }> = ({ data }) => (
  <div className="mb-10">
    <h2 className="text-2xl mb-6">{data.sectionTitle}</h2>
    
    <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
      {data.topics.map((topic) => (
        <div key={topic.number} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
            <span className="text-primary">{topic.number}</span>
          </div>
          <div>
            <h3 className="text-white font-medium text-lg mb-1">{topic.title}</h3>
            <p className="text-text-muted">{topic.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/**
 * Componente para renderizar as informações do instrutor
 */
const ClassInstructor: React.FC<{ data: ClassPageProps['instructor'] }> = ({ data }) => (
  <div className="border-t border-border pt-8">
    <h2 className="text-2xl mb-6">{data.sectionTitle}</h2>
    
    <div className="flex flex-col md:flex-row items-start gap-6">
      <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 border-2 border-primary">
        <img src={data.instructor.avatar.src} alt={data.instructor.avatar.alt} className="w-full h-full object-cover" />
      </div>
      
      <div>
        <h3 className="text-xl text-white mb-2">{data.instructor.name}</h3>
        <p className="text-primary font-medium mb-2">{data.instructor.title}</p>
        
        {data.instructor.description.map((paragraph, index) => (
          <p key={index} className="text-text-muted mb-4">{paragraph}</p>
        ))}
        
        <div className="flex items-center gap-4">
          {data.instructor.socialLinks?.twitter && (
            <a href={data.instructor.socialLinks.twitter} className="text-text-muted hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 5.77344C21.7271 6.10938 20.8978 6.32813 20.0278 6.42969C20.9241 5.90625 21.6094 5.07031 21.9362 4.07813C21.1069 4.56641 20.1905 4.91797 19.2159 5.11719C18.4297 4.28516 17.3097 3.75 16.0767 3.75C13.7282 3.75 11.8282 5.65 11.8282 7.99219C11.8282 8.31641 11.8584 8.62891 11.923 8.92578C8.34883 8.74609 5.19086 7.05859 3.06578 4.55859C2.71132 5.16797 2.50835 5.90625 2.50835 6.6875C2.50835 8.16797 3.25398 9.47656 4.38016 10.2188C3.67609 10.2031 2.99281 10.0156 2.39438 9.7075V9.75781C2.39438 11.7891 3.85046 13.4844 5.79321 13.8672C5.44766 13.9609 5.07617 14.0078 4.69273 14.0078C4.4216 14.0078 4.15657 13.9922 3.89765 13.9375C4.43766 15.6016 5.97094 16.8203 7.79899 16.8516C6.38399 17.9844 4.61265 18.6563 2.69039 18.6563C2.35476 18.6563 2.02694 18.6406 1.69922 18.6016C3.54961 19.7969 5.7459 20.4844 8.11172 20.4844C16.0674 20.4844 20.3794 14.0781 20.3794 8.51172C20.3794 8.33203 20.3752 8.15625 20.367 7.98047C21.2052 7.38672 21.9375 6.63281 22.5 5.77344Z"/>
              </svg>
            </a>
          )}
          
          {data.instructor.socialLinks?.linkedin && (
            <a href={data.instructor.socialLinks.linkedin} className="text-text-muted hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 3H3.75C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25V3.75C21 3.33579 20.6642 3 20.25 3ZM8.25 18.75H5.25V9.75H8.25V18.75ZM6.75 8.25C5.91 8.25 5.25 7.59 5.25 6.75C5.25 5.91 5.91 5.25 6.75 5.25C7.59 5.25 8.25 5.91 8.25 6.75C8.25 7.59 7.59 8.25 6.75 8.25ZM18.75 18.75H15.75V14.25C15.75 12.591 14.409 11.25 12.75 11.25C11.091 11.25 9.75 12.591 9.75 14.25V18.75H6.75V9.75H9.75V11.25C10.2468 10.2468 11.8125 9 13.125 9C16.1603 9 18.75 11.5897 18.75 14.625V18.75Z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

/**
 * Componente para renderizar o bloco de registro
 */
const ClassRegistration: React.FC<{ data: ClassPageProps['registration'] }> = ({ data }) => (
  <div className="bg-darker border border-border rounded-xl p-6 sticky top-24">
    <h3 className="text-xl text-white mb-6">{data.title}</h3>
    
    <div className="mb-6">
      <div className="flex justify-between text-text-muted mb-2">
        <span>Vagas disponíveis:</span>
        <span>{data.availableSpots.current} de {data.availableSpots.total}</span>
      </div>
      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
        <div 
          className="bg-primary h-full rounded-full" 
          style={{ width: `${(data.availableSpots.current / data.availableSpots.total) * 100}%` }}
        ></div>
      </div>
    </div>
    
    <button className="w-full bg-primary text-dark py-3 rounded-md font-medium mb-4">
      {data.buttonText}
    </button>
    
    <p className="text-text-gray text-sm text-center">{data.disclaimerText}</p>
  </div>
);

/**
 * Componente para renderizar um card de classe relacionada
 */
const RelatedClassCard: React.FC<{ data: ClassPageProps['relatedClasses']['classes'][0] }> = ({ data }) => (
  <div className="class-card bg-darker border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
    <div className="h-[160px] relative overflow-hidden">
      <img src={data.coverImage.src} alt={data.coverImage.alt} className="w-full h-full object-cover" />
      <div className="absolute top-0 right-0 m-3">
        <span className="bg-darker/80 text-primary text-xs font-medium px-2 py-1 rounded">{data.availableSpots} vagas</span>
      </div>
    </div>
    
    <div className="p-5">
      <h3 className="font-montserrat text-lg text-white mb-2 leading-tight">
        {data.title}
      </h3>
      
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span className="text-text-gray text-sm">{data.date}</span>
        </div>
      </div>
      
      <a 
        href={data.url} 
        className="block text-center bg-darker border border-primary text-primary py-2 rounded-md font-medium hover:bg-primary hover:text-dark transition-colors"
      >
        {data.buttonText}
      </a>
    </div>
  </div>
);

/**
 * Componente para renderizar a seção de classes relacionadas
 */
const RelatedClasses: React.FC<{ data: ClassPageProps['relatedClasses'] }> = ({ data }) => (
  <div className="border-t border-border pt-10 mb-16">
    <h2 className="text-2xl mb-8">{data.sectionTitle}</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.classes.map((classData, index) => (
        <RelatedClassCard key={index} data={classData} />
      ))}
    </div>
  </div>
);

/**
 * Componente para renderizar o rodapé
 */
const Footer: React.FC<{ data: ClassPageProps['footer'] }> = ({ data }) => (
  <footer className="w-full bg-darker mt-auto py-8">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href={data.logo.link} className="text-primary font-montserrat font-bold text-2xl">
            {data.logo.text}
          </a>
        </div>
        
        <div className="text-text-gray text-sm">
          {data.copyright}
        </div>
      </div>
    </div>
  </footer>
);

/**
 * Componente principal que renderiza toda a página de classe
 */
const ClassPage: React.FC<{ data: ClassPageProps }> = ({ data }) => {
  React.useEffect(() => {
    // Atualizar título e metadados da página
    if (data.metaData) {
      document.title = data.metaData.title;
      
      // Opcional: atualizar meta tags
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', data.metaData.description);
      }
    }
    
    // Código do navbar para esconder/mostrar ao rolar
    const navbar = document.getElementById('navbar');
    if (navbar) {
      let lastScrollY = window.scrollY;
      
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          navbar.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up
          navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Limpar listener ao desmontar
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [data.metaData]);
  
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-x-hidden pt-24 bg-unified"
      style={{ 
        backgroundColor: data.theme?.darkColor || '#121212',
        color: data.theme?.textColors?.light || 'white',
        '--color-primary': data.theme?.primaryColor || '#D0EC1A',
        '--color-darker': data.theme?.darkerColor || '#1A1A1A',
        '--color-border': data.theme?.borderColor || '#1F2937',
      } as React.CSSProperties}
    >
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/[0.05] rounded-full blur-[120px] -translate-y-1/4 -translate-x-1/3 opacity-70"></div>
        <div className="absolute top-[30%] right-0 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[100px] translate-x-1/4 opacity-60"></div>
        <div className="absolute top-[60%] left-[20%] w-[500px] h-[500px] bg-[#00FF99]/[0.04] rounded-full blur-[90px] opacity-50"></div>
        <div className="absolute bottom-0 right-[10%] w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[110px] translate-y-1/3 opacity-60"></div>
      </div>
      
      <Navbar data={data.navbar} />
      
      <ClassCover data={data.cover} />
      
      <div className="max-w-6xl w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          {/* Left Side - Class Info */}
          <div className="flex-1">
            <ClassHeader data={data.header} />
            <ClassDescription data={data.description} />
            <ClassTopics data={data.topics} />
            <ClassInstructor data={data.instructor} />
          </div>
          
          {/* Right Side - Registration */}
          <div className="w-full md:w-[350px] flex-shrink-0">
            <ClassRegistration data={data.registration} />
          </div>
        </div>
        
        <RelatedClasses data={data.relatedClasses} />
      </div>
      
      <Footer data={data.footer} />
    </div>
  );
};

export default ClassPage; 