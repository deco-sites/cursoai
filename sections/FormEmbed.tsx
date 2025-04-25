import { JSX } from "preact";

export interface FormEmbedProps {
  title?: string;
  formUrl?: string;
  formHtml?: string;
  disclaimer?: string;
  width?: string;
  height?: string;
}

export default function FormEmbed({
  title = "Inscreva-se",
  formUrl,
  formHtml,
  disclaimer,
  width = "100%",
  height = "500px",
}: FormEmbedProps): JSX.Element {
  return (
    <div class="w-full md:w-[350px] flex-shrink-0">
      <div class="bg-[#1A1A1A] border border-[#1F2937] rounded-xl p-6 sticky top-24">
        {title && (
          <h3 class="text-xl text-white mb-6 font-montserrat">{title}</h3>
        )}
        
        {formHtml ? (
          <div 
            class="form-html-embed mb-4" 
            dangerouslySetInnerHTML={{ __html: formHtml }}
          />
        ) : formUrl ? (
          <div class="form-embed-container mb-4">
            <iframe 
              src={formUrl} 
              width={width}
              height={height}
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
          <div class="text-[#9CA3AF] text-center mb-4">
            Adicione um URL do formulário ou código HTML para exibir o formulário
          </div>
        )}
        
        {disclaimer && (
          <p class="text-[#9CA3AF] text-sm text-center">
            {disclaimer}
          </p>
        )}
      </div>
    </div>
  );
} 