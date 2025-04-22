import { useEffect } from "preact/hooks";

export default function NavbarScript() {
  useEffect(() => {
    const navbar = document.getElementById('navbar') as HTMLElement;
    if (!navbar) return;
    
    let lastScrollY = window.scrollY;
    const scrollThreshold = 10; // Quantidade mínima de pixels para acionar o efeito
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Verifica se a diferença é significativa
      if (Math.abs(currentScrollY - lastScrollY) <= scrollThreshold) {
        return;
      }
      
      // Ajuste simples: desaparece ao rolar para baixo, aparece ao rolar para cima
      if (currentScrollY > lastScrollY) {
        // Scrolling down - oculta
        navbar.classList.add('navbar-hidden');
      } else {
        // Scrolling up - mostra
        navbar.classList.remove('navbar-hidden');
      }
      
      // Atualiza a última posição de scroll
      lastScrollY = currentScrollY;
    };
    
    // Usa throttle para melhorar performance
    let isScrolling = false;
    
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          handleScroll();
          isScrolling = false;
        });
        isScrolling = true;
      }
    }, { passive: true });
    
    // Execute uma vez para configurar o estado inicial
    handleScroll();
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
} 