import { JSX } from "preact";

export interface AboutUsProps {
  image?: string;
  alt?: string;
}

export default function AboutUs({
  image = "/static/images/quem_somos_card.png",
  alt = "Quem somos - Um time experiente em soluções enterprise"
}: AboutUsProps): JSX.Element {
  return (
    <section class="w-full flex justify-center items-center relative overflow-visible py-16">
      <div class="bg-gradient-glow">
        <div class="absolute top-[-10%] right-0 w-[400px] h-[400px] bg-[#00FF99]/[0.04] rounded-full blur-[70px] opacity-50"></div>
        <div class="absolute bottom-0 left-[5%] w-[450px] h-[450px] bg-[#D0EC1A]/[0.03] rounded-full blur-[80px] opacity-40"></div>
      </div>
      
      <div class="max-w-5xl mx-auto px-6 relative z-10">
        <div class="rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image} alt={alt} class="w-full h-auto" />
        </div>
      </div>
    </section>
  );
} 