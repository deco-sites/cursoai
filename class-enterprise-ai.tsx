import ClassPage from "./sections/ClassPage.tsx";

export default function EnterpriseAIPage() {
  return (
    <ClassPage
      coverImage="/static/images/card2-image.jpg"
      coverAlt="Building Enterprise AI Products"
      details={{
        title: "Building Enterprise AI Products",
        date: "21 de Abril, 2025",
        time: "18:30 - 20:00",
        description: [
          "Aprenda como construir produtos de IA escaláveis para empresas. Nesta aula, vamos abordar desde a ideação até a implementação e métricas de sucesso para produtos de IA em ambientes corporativos.",
          "Ideal para product managers, designers e desenvolvedores que querem criar produtos de IA que realmente resolvem problemas empresariais e geram valor mensurável."
        ],
        badges: {
          virtual: "Virtual",
          free: "Grátis"
        },
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
        ],
        instructor: {
          name: "Guilherme Tavano",
          role: "Head na Carcará",
          avatar: "/static/images/avatar.jpg",
          bio: [
            "Com mais de 10 anos de experiência em produtos digitais, Guilherme liderou a implementação de soluções de IA para diversas empresas Fortune 500. Especialista em transformar ideias complexas em produtos intuitivos e escaláveis.",
            "Atuou em projetos de e-commerce para Farm, ZeeDog, LiveMode e outras grandes marcas, sempre com foco em experiências personalizadas potencializadas por IA."
          ],
          socialLinks: [
            { type: "twitter", href: "#" },
            { type: "linkedin", href: "#" }
          ]
        }
      }}
      formEmbed={{
        title: "Reserve seu lugar",
        formUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
        disclaimer: "Ao se inscrever, você receberá um e-mail de confirmação com o link para acessar a aula ao vivo."
      }}
      relatedClasses={{
        title: "Classes relacionadas",
        classes: [
          {
            image: "/static/images/card1-image.jpg",
            title: "Deep Learning for Computer Vision",
            date: "Abr 21, 2025",
            availableSpots: 5,
            link: "#"
          },
          {
            image: "/static/images/card3-image.jpg",
            title: "How to use AI to 10x your productivity",
            date: "Abr 21, 2025", 
            availableSpots: 5,
            link: "#"
          },
          {
            image: "/static/images/card1-image.jpg", 
            title: "Introduction to AI Agents",
            date: "Abr 28, 2025",
            availableSpots: 3,
            link: "#"
          }
        ]
      }}
    />
  );
} 