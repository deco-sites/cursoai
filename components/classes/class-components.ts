// Interfaces TypeScript para componentes da página de detalhe de classe
// Estas interfaces permitem edição via CMS mantendo type safety

// TIPOS BÁSICOS REUTILIZÁVEIS
// --------------------------------------

/**
 * Representa uma imagem que pode ser gerenciada via CMS
 */
export interface CMSImage {
  src: string; 
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Representa um link com texto e URL
 */
export interface CMSLink {
  text: string;
  url: string;
  isExternal?: boolean;
}

/**
 * Representa um ícone SVG
 */
export interface CMSIcon {
  name: string; // Identificador para o ícone (usado para mapear para o componente correto)
  color?: string;
  size?: number;
}

/**
 * Representa dados básicos de instrutor
 */
export interface CMSInstructor {
  name: string;
  title: string;
  avatar: CMSImage;
  description: string[];
  additionalInfo?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

// TIPOS DE COMPONENTES DA PÁGINA
// --------------------------------------

/**
 * Representa a navegação do site
 */
export interface NavbarProps {
  logo: {
    text: string;
    link: string;
  };
  links: {
    text: string;
    url: string;
    isActive?: boolean;
  }[];
  ctaButton: {
    text: string;
    url: string;
  };
}

/**
 * Representa a imagem de capa da classe
 */
export interface ClassCoverProps {
  image: CMSImage;
  overlayGradient?: {
    fromColor: string;
    toColor: string;
    opacity?: number;
  };
  height?: {
    mobile: string; // ex: "300px"
    desktop: string; // ex: "400px"
  };
}

/**
 * Representa o cabeçalho/informações principais da classe
 */
export interface ClassHeaderProps {
  title: string;
  date: {
    text: string;
    icon: CMSIcon;
  };
  time: {
    text: string;
    icon: CMSIcon;
  };
  badges: {
    text: string;
    type: "virtual" | "free" | "premium" | "custom";
    customColor?: string;
    customBgColor?: string;
  }[];
}

/**
 * Representa a descrição da classe
 */
export interface ClassDescriptionProps {
  paragraphs: string[];
}

/**
 * Representa um tópico individual da classe
 */
export interface ClassTopicProps {
  number: number;
  title: string;
  description: string;
}

/**
 * Representa a seção de tópicos da classe
 */
export interface ClassTopicsProps {
  sectionTitle: string;
  topics: ClassTopicProps[];
}

/**
 * Representa a seção de instrutor
 */
export interface ClassInstructorProps {
  sectionTitle: string;
  instructor: CMSInstructor;
}

/**
 * Representa o bloco de inscrição/registro para a classe
 */
export interface ClassRegistrationProps {
  title: string;
  availableSpots: {
    current: number;
    total: number;
  };
  buttonText: string;
  disclaimerText: string;
}

/**
 * Representa um card de classe relacionada
 */
export interface RelatedClassCardProps {
  coverImage: CMSImage;
  title: string;
  date: string;
  availableSpots: number;
  buttonText: string;
  url: string;
}

/**
 * Representa a seção de classes relacionadas
 */
export interface RelatedClassesProps {
  sectionTitle: string;
  classes: RelatedClassCardProps[];
}

/**
 * Representa o rodapé da página
 */
export interface FooterProps {
  logo: {
    text: string;
    link: string;
  };
  copyright: string;
  links?: {
    title: string;
    items: CMSLink[];
  }[];
}

/**
 * Propriedades completas da página de detalhes da classe
 */
export interface ClassPageProps {
  navbar: NavbarProps;
  cover: ClassCoverProps;
  header: ClassHeaderProps;
  description: ClassDescriptionProps;
  topics: ClassTopicsProps;
  instructor: ClassInstructorProps;
  registration: ClassRegistrationProps;
  relatedClasses: RelatedClassesProps;
  footer: FooterProps;
  metaData?: {
    title: string;
    description: string;
    ogImage?: string;
  };
  theme?: {
    primaryColor: string;
    darkColor: string;
    darkerColor: string;
    borderColor: string;
    textColors: {
      light: string;
      muted: string;
      gray: string;
      dimmed: string;
    };
  };
}

// EXEMPLO DE USO
// --------------------------------------

/**
 * Exemplo de dados que seriam exportados por um CMS para a página de classe
 */
export const sampleClassPageData: ClassPageProps = {
  navbar: {
    logo: {
      text: "AICADEMY",
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
      src: "images/card2-image.jpg",
      alt: "Building Enterprise AI Products"
    },
    height: {
      mobile: "300px",
      desktop: "400px"
    }
  },
  header: {
    title: "Building Enterprise AI Products",
    date: {
      text: "21 de Abril, 2025",
      icon: { name: "calendar" }
    },
    time: {
      text: "18:30 - 20:00",
      icon: { name: "clock" }
    },
    badges: [
      { text: "Virtual", type: "virtual" },
      { text: "Grátis", type: "free" }
    ]
  },
  description: {
    paragraphs: [
      "Aprenda como construir produtos de IA escaláveis para empresas. Nesta aula, vamos abordar desde a ideação até a implementação e métricas de sucesso para produtos de IA em ambientes corporativos.",
      "Ideal para product managers, designers e desenvolvedores que querem criar produtos de IA que realmente resolvem problemas empresariais e geram valor mensurável."
    ]
  },
  topics: {
    sectionTitle: "O que você vai aprender",
    topics: [
      {
        number: 1,
        title: "Fundamentos de Produtos de IA",
        description: "Como produtos de IA diferem de produtos tradicionais e quais habilidades são necessárias para desenvolvê-los."
      },
      {
        number: 2,
        title: "Pesquisa e Validação",
        description: "Técnicas para validar casos de uso de IA e garantir que estamos resolvendo problemas reais."
      },
      {
        number: 3,
        title: "Infraestrutura Escalável",
        description: "Arquiteturas para construir soluções de IA que escalam para milhares ou milhões de usuários."
      },
      {
        number: 4,
        title: "Métricas e Otimização",
        description: "Como definir e monitorar métricas relevantes para produtos de IA e otimizar continuamente."
      },
      {
        number: 5,
        title: "Ética e Governança",
        description: "Princípios éticos e práticas de governança para produtos de IA responsáveis."
      },
      {
        number: 6,
        title: "Casos de Uso Reais",
        description: "Estudos de caso de produtos de IA empresariais de sucesso e lições aprendidas."
      }
    ]
  },
  instructor: {
    sectionTitle: "Sobre o Instrutor",
    instructor: {
      name: "Guilherme Tavano",
      title: "Head na Carcará",
      avatar: {
        src: "images/avatar.jpg",
        alt: "Guilherme Tavano"
      },
      description: [
        "Com mais de 10 anos de experiência em produtos digitais, Guilherme liderou a implementação de soluções de IA para diversas empresas Fortune 500. Especialista em transformar ideias complexas em produtos intuitivos e escaláveis.",
        "Atuou em projetos de e-commerce para Farm, ZeeDog, LiveMode e outras grandes marcas, sempre com foco em experiências personalizadas potencializadas por IA."
      ],
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      }
    }
  },
  registration: {
    title: "Reserve seu lugar",
    availableSpots: {
      current: 5,
      total: 30
    },
    buttonText: "Inscrever-se Gratuitamente",
    disclaimerText: "Ao se inscrever, você receberá um e-mail de confirmação com o link para acessar a aula ao vivo."
  },
  relatedClasses: {
    sectionTitle: "Classes relacionadas",
    classes: [
      {
        coverImage: {
          src: "images/card1-image.jpg",
          alt: "Deep Learning for Computer Vision"
        },
        title: "Deep Learning for Computer Vision",
        date: "Abr 21, 2025",
        availableSpots: 5,
        buttonText: "Participar",
        url: "#"
      },
      {
        coverImage: {
          src: "images/card3-image.jpg",
          alt: "How to use AI to 10x your productivity"
        },
        title: "How to use AI to 10x your productivity",
        date: "Abr 21, 2025",
        availableSpots: 5,
        buttonText: "Participar",
        url: "#"
      },
      {
        coverImage: {
          src: "images/card1-image.jpg",
          alt: "Introduction to AI Agents"
        },
        title: "Introduction to AI Agents",
        date: "Abr 28, 2025",
        availableSpots: 3,
        buttonText: "Participar",
        url: "#"
      }
    ]
  },
  footer: {
    logo: {
      text: "AICADEMY",
      link: "#"
    },
    copyright: "© 2025 AICADEMY. Todos os direitos reservados."
  },
  metaData: {
    title: "Building Enterprise AI Products | AICADEMY",
    description: "Aprenda como construir produtos de IA escaláveis para empresas com especialistas do setor."
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