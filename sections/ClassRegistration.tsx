import { JSX } from "preact";

export interface ClassRegistrationProps {
  availableSpots: number;
  totalSpots: number;
  buttonText?: string;
  disclaimer?: string;
}

export default function ClassRegistration({
  availableSpots,
  totalSpots,
  buttonText = "Inscrever-se Gratuitamente",
  disclaimer = "Ao se inscrever, você receberá um e-mail de confirmação com o link para acessar a aula ao vivo.",
}: ClassRegistrationProps): JSX.Element {
  const percentageFilled = (availableSpots / totalSpots) * 100;
  
  return (
    <div class="w-full md:w-[350px] flex-shrink-0">
      <div class="bg-[#1A1A1A] border border-[#1F2937] rounded-xl p-6 sticky top-24">
        <h3 class="text-xl text-white mb-6 font-montserrat">Reserve seu lugar</h3>
        
        <div class="mb-6">
          <div class="flex justify-between text-[#D1D5DB] mb-2">
            <span>Vagas disponíveis:</span>
            <span>{availableSpots} de {totalSpots}</span>
          </div>
          <div class="w-full h-2 bg-[#1F2937] rounded-full overflow-hidden">
            <div class="bg-[#D0EC1A] h-full rounded-full" style={`width: ${percentageFilled}%`}></div>
          </div>
        </div>
        
        <button class="w-full bg-[#D0EC1A] text-[#121212] py-3 rounded-md font-medium mb-4 transition-transform hover:scale-[1.02] active:scale-[0.98]">
          {buttonText}
        </button>
        
        <p class="text-[#9CA3AF] text-sm text-center">
          {disclaimer}
        </p>
      </div>
    </div>
  );
} 