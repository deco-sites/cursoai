import { JSX } from "preact";

export interface RelatedClassProps {
  image: string;
  title: string;
  date: string;
  availableSpots?: number;
  link: string;
}

export default function RelatedClass({
  image,
  title,
  date,
  availableSpots,
  link,
}: RelatedClassProps): JSX.Element {
  return (
    <div class="class-card bg-[#1A1A1A] border border-[#1F2937] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#D0EC1A] hover:shadow-lg hover:shadow-[#D0EC1A]/10 hover:-translate-y-1 group">
      <div class="h-[160px] relative overflow-hidden">
        <img src={image} alt={title} class="w-full h-full object-cover" />
        {availableSpots && (
          <div class="absolute top-0 right-0 m-3">
            <span class="bg-[#1A1A1A]/80 text-[#D0EC1A] text-xs font-medium px-2 py-1 rounded">{availableSpots} vagas</span>
          </div>
        )}
        <div class="absolute inset-0 bg-[#D0EC1A]/0 opacity-0 group-hover:bg-[#D0EC1A]/10 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
      
      <div class="p-5">
        <h3 class="font-montserrat text-lg text-white mb-2 leading-tight">
          {title}
        </h3>
        
        <div class="flex items-center gap-2 mb-4">
          <div class="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span class="text-[#9CA3AF] text-sm">{date}</span>
          </div>
        </div>
        
        <a href={link} class="block text-center bg-[#1A1A1A] border border-[#D0EC1A] text-[#D0EC1A] py-2 rounded-md font-medium transition-colors hover:bg-[#D0EC1A] hover:text-[#121212]">
          Participar
        </a>
      </div>
    </div>
  );
} 