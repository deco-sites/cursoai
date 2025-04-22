import { useEffect } from "preact/hooks";

export default function FAQScript() {
  useEffect(() => {
    const faqToggles = document.querySelectorAll('.faq-toggle') as NodeListOf<HTMLButtonElement>;
    
    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', function(this: HTMLButtonElement) {
        const content = this.nextElementSibling as HTMLElement;
        const icon = this.querySelector('.faq-icon') as HTMLElement;
        const faqItem = this.closest('.faq-item') as HTMLElement;
        
        // Toggle visibility and height
        if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          content.style.maxHeight = content.scrollHeight + "px";
          icon.style.transform = 'rotate(45deg)';
          faqItem.classList.add('active');
        } else {
          content.style.maxHeight = "0px";
          setTimeout(() => {
            content.classList.add('hidden');
          }, 300);
          icon.style.transform = 'rotate(0deg)';
          faqItem.classList.remove('active');
        }
        
        // Close other FAQs
        faqToggles.forEach(otherToggle => {
          if (otherToggle !== toggle) {
            const otherContent = otherToggle.nextElementSibling as HTMLElement;
            const otherIcon = otherToggle.querySelector('.faq-icon') as HTMLElement;
            const otherFaqItem = otherToggle.closest('.faq-item') as HTMLElement;
            
            if (!otherContent.classList.contains('hidden')) {
              otherContent.style.maxHeight = "0px";
              setTimeout(() => {
                otherContent.classList.add('hidden');
              }, 300);
              otherIcon.style.transform = 'rotate(0deg)';
              otherFaqItem.classList.remove('active');
            }
          }
        });
      });
    });
  }, []);

  return null;
} 