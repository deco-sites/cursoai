import { JSX } from "preact";

export interface ClassRegistrationProps {
  formEmbedUrl?: string;
  formHtmlEmbed?: string;
}

export default function ClassRegistration({
  formEmbedUrl,
  formHtmlEmbed,
}: ClassRegistrationProps): JSX.Element {
  return (
    <div class="w-full md:w-[350px] flex-shrink-0">
      <div class="bg-[#1A1A1A] border border-[#1F2937] rounded-xl p-6 sticky top-24">
        <h3 class="text-xl text-white mb-6 font-montserrat">Reserve seu lugar</h3>
        
        {formHtmlEmbed ? (
          <div 
            class="form-html-embed-container" 
            dangerouslySetInnerHTML={{ __html: formHtmlEmbed }}
          />
        ) : formEmbedUrl ? (
          <div class="form-embed-container">
            <iframe 
              src={formEmbedUrl} 
              width="100%" 
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style="border: none; max-width: 100%;" 
              allowFullScreen
            >
              Carregando...
            </iframe>
          </div>
        ) : (
          <div class="text-center text-[#D1D5DB]">
            Formulário de inscrição não disponível.
          </div>
        )}
      </div>
    </div>
  );
} 