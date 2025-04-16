import { ClassPageProps } from './class-components';
import type { SEOMetadata, ImageAsset, RichText } from './cms-types'; // Estes tipos representariam as estruturas do seu CMS específico

/**
 * Adaptador para converter dados do CMS para as interfaces TypeScript do site
 * Este arquivo serviria como uma camada intermediária entre seu CMS e os componentes do site
 */

/**
 * Interface que representa a estrutura de dados da classe no CMS
 * Esta é uma representação hipotética - adapte conforme seu CMS específico
 */
export interface CMSClassEntry {
  id: string;
  slug: string;
  title: string;
  coverImage: ImageAsset;
  date: string;
  time: string;
  isVirtual: boolean;
  isFree: boolean;
  description: RichText[];
  topics: {
    title: string;
    description: string;
  }[];
  instructor: {
    name: string;
    title: string;
    avatar: ImageAsset;
    bio: RichText[];
    twitterHandle?: string;
    linkedinUrl?: string;
  };
  availableSpots: number;
  totalSpots: number;
  relatedClasses: {
    sys: {
      id: string;
    }
  }[];
  seo: SEOMetadata;
}

/**
 * Interface que representa a estrutura completa de resposta do CMS
 * com classes relacionadas incluídas
 */
export interface CMSClassWithRelated {
  mainClass: CMSClassEntry;
  relatedClasses: CMSClassEntry[];
}

/**
 * Converte um objeto de texto rico do CMS para string simples
 */
function richTextToString(richText: RichText[]): string {
  // Implementação dependente do seu CMS específico
  // Exemplo simples:
  return richText.map(block => block.text || '').join(' ');
}

/**
 * Converte uma matriz de texto rico do CMS para um array de strings
 */
function richTextToStringArray(richText: RichText[]): string[] {
  // Implementação dependente do seu CMS específico
  // Exemplo simples:
  return richText.map(block => block.text || '');
}

/**
 * Converte o URL de uma imagem do CMS para o formato esperado pelo site
 */
function formatImageUrl(image: ImageAsset): string {
  // Implemente lógica específica para formatação de URL
  // Ex: adicionar parâmetros de otimização, CDN, etc.
  return `${image.url}?w=800&q=80`;
}

/**
 * Adapta os dados do CMS para o formato esperado pelos componentes do site
 */
export function adaptClassDataFromCMS(data: CMSClassWithRelated): ClassPageProps {
  const { mainClass, relatedClasses } = data;
  
  return {
    navbar: {
      logo: {
        text: "AICADEMY", // Poderia vir de configurações globais do CMS
        link: "index.html"
      },
      links: [
        { text: "Home", url: "index.html" },
        { text: "Classes", url: "#", isActive: true },
        { text: "Experts", url: "#" },
        { text: "About", url: "#" }
      ],
      ctaButton: {
        text: "Join Free",
        url: "#"
      }
    },
    cover: {
      image: {
        src: formatImageUrl(mainClass.coverImage),
        alt: mainClass.title
      },
      height: {
        mobile: "300px",
        desktop: "400px"
      }
    },
    header: {
      title: mainClass.title,
      date: {
        text: mainClass.date,
        icon: { name: "calendar" }
      },
      time: {
        text: mainClass.time,
        icon: { name: "clock" }
      },
      badges: [
        ...(mainClass.isVirtual ? [{ text: "Virtual", type: "virtual" as const }] : []),
        ...(mainClass.isFree ? [{ text: "Grátis", type: "free" as const }] : [{ text: "Premium", type: "premium" as const }])
      ]
    },
    description: {
      paragraphs: richTextToStringArray(mainClass.description)
    },
    topics: {
      sectionTitle: "O que você vai aprender",
      topics: mainClass.topics.map((topic, index) => ({
        number: index + 1,
        title: topic.title,
        description: topic.description
      }))
    },
    instructor: {
      sectionTitle: "Sobre o Instrutor",
      instructor: {
        name: mainClass.instructor.name,
        title: mainClass.instructor.title,
        avatar: {
          src: formatImageUrl(mainClass.instructor.avatar),
          alt: mainClass.instructor.name
        },
        description: richTextToStringArray(mainClass.instructor.bio),
        socialLinks: {
          twitter: mainClass.instructor.twitterHandle ? `https://twitter.com/${mainClass.instructor.twitterHandle}` : undefined,
          linkedin: mainClass.instructor.linkedinUrl
        }
      }
    },
    registration: {
      title: "Reserve seu lugar",
      availableSpots: {
        current: mainClass.availableSpots,
        total: mainClass.totalSpots
      },
      buttonText: "Inscrever-se Gratuitamente",
      disclaimerText: "Ao se inscrever, você receberá um e-mail de confirmação com o link para acessar a aula ao vivo."
    },
    relatedClasses: {
      sectionTitle: "Classes relacionadas",
      classes: relatedClasses.map(relClass => ({
        coverImage: {
          src: formatImageUrl(relClass.coverImage),
          alt: relClass.title
        },
        title: relClass.title,
        date: relClass.date,
        availableSpots: relClass.availableSpots,
        buttonText: "Participar",
        url: `/class-${relClass.slug}.html`
      }))
    },
    footer: {
      logo: {
        text: "AICADEMY",
        link: "#"
      },
      copyright: "© 2025 AICADEMY. Todos os direitos reservados."
    },
    metaData: {
      title: `${mainClass.title} | AICADEMY`,
      description: richTextToString(mainClass.description.slice(0, 1))
    },
    theme: {
      primaryColor: "#D0EC1A",
      darkColor: "#121212",
      darkerColor: "#1A1A1A",
      borderColor: "#1F2937",
      textColors: {
        light: "#FFFFFF",
        muted: "#D1D5DB",
        gray: "#9CA3AF",
        dimmed: "#A0A0A0"
      }
    }
  };
}

/**
 * Exemplo de como usar o adaptador com dados de um CMS
 */
export async function fetchClassPageData(slug: string): Promise<ClassPageProps> {
  try {
    // Exemplo: buscar dados do seu CMS (Contentful, Sanity, Strapi, etc.)
    // const response = await fetchFromCMS(`
    //   query GetClassPage($slug: String!) {
    //     classCollection(where: { slug: $slug }, limit: 1) {
    //       items {
    //         ...ClassFields
    //       }
    //     }
    //   }
    // `, { slug });
    
    // Simulando dados de resposta do CMS
    const cmsData: CMSClassWithRelated = await mockCMSResponse(slug);
    
    // Adaptar dados do CMS para o formato dos componentes
    return adaptClassDataFromCMS(cmsData);
  } catch (error) {
    console.error('Erro ao buscar dados da classe:', error);
    throw error;
  }
}

/**
 * Mock de resposta do CMS para desenvolvimento
 * Na implementação real, isso seria substituído por chamadas reais à API do CMS
 */
async function mockCMSResponse(slug: string): Promise<CMSClassWithRelated> {
  // Simular tempo de resposta de API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    mainClass: {
      id: "1",
      slug: "building-enterprise-ai-products",
      title: "Building Enterprise AI Products",
      coverImage: { 
        url: "images/card2-image.jpg",
        width: 800,
        height: 600
      },
      date: "21 de Abril, 2025",
      time: "18:30 - 20:00",
      isVirtual: true,
      isFree: true,
      description: [
        { type: "paragraph", text: "Aprenda como construir produtos de IA escaláveis para empresas. Nesta aula, vamos abordar desde a ideação até a implementação e métricas de sucesso para produtos de IA em ambientes corporativos." },
        { type: "paragraph", text: "Ideal para product managers, designers e desenvolvedores que querem criar produtos de IA que realmente resolvem problemas empresariais e geram valor mensurável." }
      ],
      topics: [
        { title: "Fundamentos de Produtos de IA", description: "Como produtos de IA diferem de produtos tradicionais e quais habilidades são necessárias para desenvolvê-los." },
        { title: "Pesquisa e Validação", description: "Técnicas para validar casos de uso de IA e garantir que estamos resolvendo problemas reais." },
        { title: "Infraestrutura Escalável", description: "Arquiteturas para construir soluções de IA que escalam para milhares ou milhões de usuários." },
        { title: "Métricas e Otimização", description: "Como definir e monitorar métricas relevantes para produtos de IA e otimizar continuamente." },
        { title: "Ética e Governança", description: "Princípios éticos e práticas de governança para produtos de IA responsáveis." },
        { title: "Casos de Uso Reais", description: "Estudos de caso de produtos de IA empresariais de sucesso e lições aprendidas." }
      ],
      instructor: {
        name: "Guilherme Tavano",
        title: "Head na Carcará",
        avatar: { 
          url: "images/avatar.jpg",
          width: 300,
          height: 300
        },
        bio: [
          { type: "paragraph", text: "Com mais de 10 anos de experiência em produtos digitais, Guilherme liderou a implementação de soluções de IA para diversas empresas Fortune 500. Especialista em transformar ideias complexas em produtos intuitivos e escaláveis." },
          { type: "paragraph", text: "Atuou em projetos de e-commerce para Farm, ZeeDog, LiveMode e outras grandes marcas, sempre com foco em experiências personalizadas potencializadas por IA." }
        ],
        twitterHandle: "guilhermetavano",
        linkedinUrl: "https://linkedin.com/in/guilhermetavano"
      },
      availableSpots: 5,
      totalSpots: 30,
      relatedClasses: [
        { sys: { id: "2" } },
        { sys: { id: "3" } },
        { sys: { id: "4" } }
      ],
      seo: {
        title: "Building Enterprise AI Products | AICADEMY",
        description: "Aprenda como construir produtos de IA escaláveis para empresas com especialistas do setor.",
        keywords: "AI products, enterprise AI, product management, AI development"
      }
    },
    relatedClasses: [
      {
        id: "2",
        slug: "deep-learning-for-computer-vision",
        title: "Deep Learning for Computer Vision",
        coverImage: { 
          url: "images/card1-image.jpg",
          width: 800,
          height: 600
        },
        date: "Abr 21, 2025",
        time: "14:00 - 15:30",
        isVirtual: true,
        isFree: true,
        description: [{ type: "paragraph", text: "Aprenda fundamentos de visão computacional com deep learning." }],
        topics: [],
        instructor: {
          name: "Ana Silva",
          title: "Computer Vision Specialist",
          avatar: { 
            url: "images/avatar.jpg",
            width: 300,
            height: 300
          },
          bio: []
        },
        availableSpots: 5,
        totalSpots: 25,
        relatedClasses: [],
        seo: {
          title: "",
          description: "",
          keywords: ""
        }
      },
      {
        id: "3",
        slug: "ai-productivity",
        title: "How to use AI to 10x your productivity",
        coverImage: { 
          url: "images/card3-image.jpg",
          width: 800,
          height: 600
        },
        date: "Abr 21, 2025",
        time: "10:00 - 11:30",
        isVirtual: true,
        isFree: true,
        description: [{ type: "paragraph", text: "Técnicas práticas para utilizar IA no dia-a-dia." }],
        topics: [],
        instructor: {
          name: "Pedro Alves",
          title: "Productivity Expert",
          avatar: { 
            url: "images/avatar.jpg",
            width: 300,
            height: 300
          },
          bio: []
        },
        availableSpots: 5,
        totalSpots: 40,
        relatedClasses: [],
        seo: {
          title: "",
          description: "",
          keywords: ""
        }
      },
      {
        id: "4",
        slug: "intro-ai-agents",
        title: "Introduction to AI Agents",
        coverImage: { 
          url: "images/card1-image.jpg",
          width: 800,
          height: 600
        },
        date: "Abr 28, 2025",
        time: "9:00 - 10:30",
        isVirtual: true,
        isFree: false,
        description: [{ type: "paragraph", text: "Aprenda a criar e utilizar agentes de IA para automatizar tarefas." }],
        topics: [],
        instructor: {
          name: "Carlos Mendes",
          title: "AI Lead",
          avatar: { 
            url: "images/avatar.jpg",
            width: 300,
            height: 300
          },
          bio: []
        },
        availableSpots: 3,
        totalSpots: 20,
        relatedClasses: [],
        seo: {
          title: "",
          description: "",
          keywords: ""
        }
      }
    ]
  };
} 