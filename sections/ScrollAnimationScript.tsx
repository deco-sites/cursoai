import { useEffect } from "preact/hooks";

export default function ScrollAnimationScript() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15 // Elemento precisa estar 15% visível para ativar
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        // Quando o elemento está visível na tela
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Opcionalmente, desconecte o observer depois que o elemento for animado
          // observer.unobserve(entry.target);
        } else {
          // Opcional: remova a classe se o elemento sair da tela
          // entry.target.classList.remove('is-visible');
        }
      });
    };

    // Criar o observer
    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Selecionar todos os elementos com a classe fade-in-section
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    // Observar cada elemento
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    // Limpar o observer quando o componente for desmontado
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null;
} 