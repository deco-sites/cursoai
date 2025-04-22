import { JSX } from "preact";
import LiveClassesScript from "./LiveClassesScript.tsx";

export interface Category {
  id: string;
  name: string;
}

export interface Instructor {
  name: string;
  role: string;
  description?: string;
  avatar?: string;
}

export interface ClassCard {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  categoryId: string;
  spotsLeft?: number;
  instructor: Instructor;
  link: string;
}

export interface LiveClassesProps {
  title?: string;
  subtitle?: string;
  categories?: Category[];
  cards?: ClassCard[];
  viewAllLink?: string;
}

export default function LiveClasses({
  title = "Próximas Live Classes",
  subtitle = "Join our expert-led live classes and master the skills that will define the future",
  categories = [
    { id: "all", name: "Todos" },
    { id: "ia-basico", name: "IA Básico" },
    { id: "marketing", name: "Marketing" },
    { id: "rh", name: "RH" },
    { id: "vendas", name: "Vendas" },
    { id: "financeiro", name: "Financeiro" },
  ],
  cards = [
    {
      id: "slide-1",
      title: "Deep Learning for Computer Vision",
      image: "/static/images/card1-image.jpg",
      date: "Abr 21, 2025",
      time: "6:30 PM - 7:00 PM",
      categoryId: "ia-basico",
      spotsLeft: 5,
      instructor: {
        name: "Guilherme Tavano",
        role: "Head na Carcará",
        description: "Atuou em projetos de ecommerce para Farm, ZeeDog, LiveMode.",
        avatar: "/static/images/avatar.jpg"
      },
      link: "#"
    },
    {
      id: "slide-2",
      title: "Building Enterprise AI Products",
      image: "/static/images/card2-image.jpg",
      date: "Abr 21, 2025",
      time: "6:30 PM - 7:00 PM",
      categoryId: "marketing",
      spotsLeft: 5,
      instructor: {
        name: "Guilherme Tavano",
        role: "Head na Carcará",
        description: "Atuou em projetos de ecommerce para Farm, ZeeDog, LiveMode.",
        avatar: "/static/images/avatar.jpg"
      },
      link: "class-enterprise-ai.html"
    }
  ],
  viewAllLink = "/all-classes",
}: LiveClassesProps): JSX.Element {
  return (
    <section className="w-full relative overflow-hidden pt-6 pb-16">
      <LiveClassesScript />
      
      <div className="bg-gradient-glow">
        <div className="absolute top-0 right-[15%] w-[500px] h-[500px] bg-[#D0EC1A]/[0.04] rounded-full blur-[80px] opacity-50"></div>
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-[#00FF99]/[0.03] rounded-full blur-[80px] opacity-40"></div>
      </div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 max-w-6xl mx-auto px-6 fade-in-section">
          <h2 className="font-montserrat text-3xl md:text-4xl text-white tracking-tighter mb-4">
            {title}
          </h2>
          
          <p className="text-[#A0A0A0] text-base max-w-lg">
            {subtitle}
          </p>
        </div>
        
        {/* Categories */}
        <div className="flex justify-center mb-8 max-w-6xl mx-auto px-6 fade-in-section delay-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button 
                className={`category-btn ${category.id === 'all' ? 'active' : ''} bg-[rgba(26,26,26,0.8)] text-[#9CA3AF] border border-[#1F2937] px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:border-[#D0EC1A] hover:text-[#D0EC1A] ${category.id === 'all' ? 'bg-[#D0EC1A] text-[#121212] border-[#D0EC1A]' : ''}`} 
                data-category={category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Class Cards Carousel - Sem limites de container */}
        <div className="relative carousel-wrapper overflow-hidden mb-8 w-full fade-in-section delay-2">
          {/* Carousel Container */}
          <div className="carousel-container py-4 flex overflow-x-auto scrollbar-hide gap-8 pl-[max(24px,calc((100vw-1152px)/2))] pr-[max(24px,calc((100vw-1152px)/2))]">
            {cards.map((card) => (
              <div className="class-card group snap-start w-[325px] md:w-[375px] flex-shrink-0 relative transition-all duration-300 hover:translate-y-[-5px]" id={card.id} data-category={card.categoryId}>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#D0EC1A]/0 rounded-xl blur-[15px] opacity-0 group-hover:bg-[#D0EC1A]/10 group-hover:opacity-100 transition-all duration-300 z-0"></div>
                
                <div className="relative z-10">
                  <div className="class-card-image h-[245px] w-full bg-cover bg-center rounded-t-xl relative" style={`background-image: url('${card.image}');`}>
                    {card.spotsLeft && (
                      <div className="class-card-badge absolute top-3 right-4 bg-[#374151] text-[#D1D5DB] text-xs font-bold py-1 px-2 rounded">{card.spotsLeft} spots left</div>
                    )}
                  </div>
                  
                  <div className="class-card-content p-6 bg-[#1A1A1A] border border-t-0 border-[#1F2937] rounded-b-xl group-hover:border-[#D0EC1A] transition-all duration-300">
                    <h3 className="font-montserrat text-xl text-white mb-2 leading-tight font-medium">
                      {card.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span className="text-[#9CA3AF] text-sm">{card.date}</span>
                      </div>
                      
                      <div className="w-1 h-1 rounded-full bg-[#9CA3AF]"></div>
                      
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span className="text-[#9CA3AF] text-sm">{card.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mb-6">
                      <div 
                        className="min-w-[75px] min-h-[75px] w-[75px] h-[75px] rounded-xl bg-cover bg-center overflow-hidden flex-shrink-0 border border-[#D0EC1A]" 
                        style={`background-image: url('${card.instructor.avatar}');`}
                      ></div>
                      <div>
                        <h4 className="text-[#D1D5DB] font-bold text-base">{card.instructor.name}</h4>
                        <div className="text-[#9CA3AF] text-sm">
                          <p>{card.instructor.role}</p>
                          {card.instructor.description && <p>{card.instructor.description}</p>}
                        </div>
                      </div>
                    </div>
                    
                    <hr className="border-[#1F2937] mb-6 group-hover:border-[#D0EC1A]/20 transition-all duration-300" />
                    
                    <a href={card.link} className="block text-center border border-[#D1D5DB] text-[#D1D5DB] py-2 rounded-md font-medium transition-colors hover:border-[#D0EC1A] hover:text-[#D0EC1A] group-hover:border-[#D0EC1A] group-hover:text-[#D0EC1A]">
                      Participar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Controls and View All - Agora abaixo dos cards */}
        <div className="flex justify-between items-center mt-4 mb-6 max-w-6xl mx-auto px-6 fade-in-section delay-3">
          <a href={viewAllLink} className="text-[#D0EC1A] hover:underline flex items-center gap-2 text-sm font-medium transition-colors">
            View all classes
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          
          <div className="flex gap-4">
            <button className="carousel-prev bg-[#1A1A1A] border border-[#1F2937] rounded-full p-2 text-white hover:border-[#D0EC1A] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button className="carousel-next bg-[#1A1A1A] border border-[#1F2937] rounded-full p-2 text-white hover:border-[#D0EC1A] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* CSS para esconder a barra de rolagem */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
} 