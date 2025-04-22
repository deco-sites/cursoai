import { JSX } from "preact";
import ClassTopic, { ClassTopicProps } from "./ClassTopic.tsx";
import ClassBadge from "./ClassBadge.tsx";
import ClassInstructor, { ClassInstructorProps } from "./ClassInstructor.tsx";

export interface ClassDetailsProps {
  title: string;
  date: string;
  time: string;
  description: string[];
  topics: Omit<ClassTopicProps, 'key'>[];
  instructor: ClassInstructorProps;
  badges?: {
    virtual?: string;
    free?: string;
  };
}

export default function ClassDetails({
  title,
  date,
  time,
  description,
  topics = [],
  instructor,
  badges = {},
}: ClassDetailsProps): JSX.Element {
  return (
    <div class="flex-1">
      <h1 class="font-montserrat text-3xl md:text-4xl text-white mb-6">{title}</h1>
      
      <div class="flex flex-wrap gap-4 mb-8">
        {/* Date */}
        <div class="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span class="text-[#D1D5DB]">{date}</span>
        </div>
        
        {/* Time */}
        <div class="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span class="text-[#D1D5DB]">{time}</span>
        </div>
        
        {/* Badges */}
        {badges.virtual && (
          <ClassBadge type="virtual" text={badges.virtual} />
        )}
        
        {badges.free && (
          <ClassBadge type="free" text={badges.free} />
        )}
      </div>
      
      <div class="prose prose-invert max-w-none mb-8">
        {description.map((paragraph, index) => (
          <p key={index} class={`text-[#D1D5DB] ${index === 0 ? 'text-lg mb-4' : 'mb-8'}`}>
            {paragraph}
          </p>
        ))}
      </div>
      
      {/* Topics */}
      {topics.length > 0 && (
        <div class="mb-10">
          <h2 class="text-2xl mb-6 font-montserrat text-white">O que você vai aprender</h2>
          
          <div class="grid md:grid-cols-2 gap-x-6 gap-y-4">
            {topics.map((topic, index) => (
              <ClassTopic
                key={index}
                {...topic}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Instructor */}
      <ClassInstructor {...instructor} />
    </div>
  );
} 