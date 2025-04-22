import { JSX } from "preact";
import RelatedClass, { RelatedClassProps } from "./RelatedClass.tsx";

export interface RelatedClassesProps {
  title?: string;
  classes: Omit<RelatedClassProps, 'key'>[];
}

export default function RelatedClasses({
  title = "Classes relacionadas",
  classes = [],
}: RelatedClassesProps): JSX.Element {
  return (
    <div class="border-t border-[#1F2937] pt-10 mb-16">
      <h2 class="text-2xl mb-8 font-montserrat text-white">{title}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem, index) => (
          <RelatedClass 
            key={index} 
            {...classItem} 
          />
        ))}
      </div>
    </div>
  );
} 