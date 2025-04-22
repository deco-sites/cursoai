import { useEffect } from "preact/hooks";

export default function LiveClassesScript() {
  useEffect(() => {
    const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
    const prevButton = document.querySelector('.carousel-prev') as HTMLButtonElement;
    const nextButton = document.querySelector('.carousel-next') as HTMLButtonElement;
    const cards = document.querySelectorAll('.class-card') as NodeListOf<HTMLElement>;
    const categoryButtons = document.querySelectorAll('.category-btn') as NodeListOf<HTMLButtonElement>;
    const gap = 32; // 8px gap
    
    if (!carouselContainer || !prevButton || !nextButton || !cards.length) return;
    
    // Current slide index
    let currentIndex = 0;
    
    // Number of cards visible at once (will depend on screen size)
    let visibleCards = Math.floor((window.innerWidth - 48) / (cards[0].offsetWidth + gap));
    if (visibleCards < 1) visibleCards = 1;
    
    // Number of slides
    let slideCount = cards.length - visibleCards + 1;
    
    // Function to get card width including gap
    function getCardWidth(): number {
      return cards[0].offsetWidth + gap;
    }
    
    // Add click event for previous button
    prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        scrollToSlide(currentIndex);
      }
    });
    
    // Add click event for next button
    nextButton.addEventListener('click', function() {
      if (currentIndex < slideCount - 1) {
        currentIndex++;
        scrollToSlide(currentIndex);
      }
    });
    
    // Scroll to specific slide
    function scrollToSlide(index: number): void {
      const scrollPosition = index * getCardWidth();
      carouselContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
    
    // Category filtering
    categoryButtons.forEach(button => {
      button.addEventListener('click', function(this: HTMLButtonElement) {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // Show/hide cards based on category
        cards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
            card.classList.add('flex-shrink-0');
          } else {
            card.classList.add('hidden');
            card.classList.remove('flex-shrink-0');
          }
        });
        
        // Reset carousel position
        currentIndex = 0;
        carouselContainer.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
        
        // Recalculate visible cards and slideCount based on filtered cards
        const visibleCardsCount = document.querySelectorAll('.class-card:not(.hidden)').length;
        slideCount = Math.max(0, visibleCardsCount - visibleCards + 1);
        
        // Update button states
        updateButtonStates();
      });
    });
    
    // Update button states initially
    updateButtonStates();
    
    // Update button states when scrolling
    carouselContainer.addEventListener('scroll', function() {
      const scrollPosition = carouselContainer.scrollLeft;
      currentIndex = Math.round(scrollPosition / getCardWidth());
      updateButtonStates();
    });
    
    // Update visible cards on window resize
    window.addEventListener('resize', function() {
      visibleCards = Math.floor((window.innerWidth - 48) / (cards[0].offsetWidth + gap));
      if (visibleCards < 1) visibleCards = 1;
      
      // Count visible cards
      const visibleCardsCount = document.querySelectorAll('.class-card:not(.hidden)').length;
      
      // Update total slides count
      const newSlideCount = Math.max(0, visibleCardsCount - visibleCards + 1);
      
      // Adjust current index if needed
      if (currentIndex >= newSlideCount) {
        currentIndex = Math.max(0, newSlideCount - 1);
        scrollToSlide(currentIndex);
      }
      
      slideCount = newSlideCount;
      updateButtonStates();
      
      // Fix any horizontal overflow issues
      document.body.style.overflowX = 'hidden';
    });
    
    // Update button visual states
    function updateButtonStates(): void {
      prevButton.classList.toggle('opacity-50', currentIndex === 0);
      nextButton.classList.toggle('opacity-50', currentIndex >= slideCount - 1 || slideCount <= 1);
      
      // Disable buttons if no slides to navigate
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= slideCount - 1 || slideCount <= 1;
    }
    
    // Initial check to fix any horizontal overflow
    document.body.style.overflowX = 'hidden';
  }, []);

  return null;
} 