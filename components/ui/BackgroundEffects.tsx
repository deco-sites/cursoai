import { JSX } from "preact";

export interface BackgroundEffectsProps {
  className?: string;
}

export default function BackgroundEffects({ className = "" }: BackgroundEffectsProps): JSX.Element {
  return (
    <div class={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradientes principais em posições estratégicas */}
      <div class="absolute top-0 left-0 w-[800px] h-[800px] bg-[#D0EC1A]/[0.05] rounded-full blur-[120px] -translate-y-1/4 -translate-x-1/3 opacity-70"></div>
      <div class="absolute top-[30%] right-0 w-[600px] h-[600px] bg-[#D0EC1A]/[0.06] rounded-full blur-[100px] translate-x-1/4 opacity-60"></div>
      <div class="absolute top-[60%] left-[20%] w-[500px] h-[500px] bg-[#00FF99]/[0.04] rounded-full blur-[90px] opacity-50"></div>
      <div class="absolute bottom-0 right-[10%] w-[700px] h-[700px] bg-[#D0EC1A]/[0.05] rounded-full blur-[110px] translate-y-1/3 opacity-60"></div>
    </div>
  );
} 