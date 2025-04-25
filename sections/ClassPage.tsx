import { JSX } from "preact";
import ClassCover from "./ClassCover.tsx";
import ClassDetails, { ClassDetailsProps } from "./ClassDetails.tsx";
import FormEmbed, { FormEmbedProps } from "./FormEmbed.tsx";
import RelatedClasses, { RelatedClassesProps } from "./RelatedClasses.tsx";

export interface ClassPageProps {
  coverImage: string;
  coverAlt?: string;
  details: ClassDetailsProps;
  formEmbed: FormEmbedProps;
  relatedClasses: RelatedClassesProps;
}

export default function ClassPage({
  coverImage,
  coverAlt,
  details,
  formEmbed,
  relatedClasses,
}: ClassPageProps): JSX.Element {
  return (
    <div class="w-full">
      {/* Class Cover Image */}
      <ClassCover image={coverImage} alt={coverAlt} />
      
      {/* Class Content */}
      <div class="max-w-6xl w-full mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          {/* Left Side - Class Info */}
          <ClassDetails {...details} />
          
          {/* Right Side - Form Embed */}
          <FormEmbed {...formEmbed} />
        </div>
        
        {/* Related Classes */}
        <RelatedClasses {...relatedClasses} />
      </div>
    </div>
  );
} 