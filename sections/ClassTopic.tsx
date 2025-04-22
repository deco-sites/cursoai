import { JSX } from "preact";

export interface ClassTopicProps {
  number: number | string;
  title: string;
  description: string;
}

export default function ClassTopic({
  number,
  title,
  description,
}: ClassTopicProps): JSX.Element {
  return (
    <div class="flex items-start gap-3">
      <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#D0EC1A]/10 flex items-center justify-center mt-1">
        <span class="text-[#D0EC1A]">{number}</span>
      </div>
      <div>
        <h3 class="text-white font-medium text-lg mb-1">{title}</h3>
        <p class="text-[#D1D5DB]">{description}</p>
      </div>
    </div>
  );
} 