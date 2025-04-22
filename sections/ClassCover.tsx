import { JSX } from "preact";

export interface ClassCoverProps {
  image: string;
  alt?: string;
}

export default function ClassCover({
  image,
  alt = "Class cover image",
}: ClassCoverProps): JSX.Element {
  return (
    <div class="w-full h-[300px] md:h-[400px] relative mb-8 overflow-hidden">
      <img src={image} alt={alt} class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
    </div>
  );
} 