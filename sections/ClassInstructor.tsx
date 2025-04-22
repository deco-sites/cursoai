import { JSX } from "preact";

export interface SocialLink {
  type: "twitter" | "linkedin";
  href: string;
}

export interface ClassInstructorProps {
  name: string;
  role: string;
  avatar: string;
  bio: string[];
  socialLinks?: SocialLink[];
}

export default function ClassInstructor({
  name,
  role,
  avatar,
  bio,
  socialLinks = [],
}: ClassInstructorProps): JSX.Element {
  return (
    <div class="border-t border-[#1F2937] pt-8">
      <h2 class="text-2xl mb-6 font-montserrat text-white">Sobre o Instrutor</h2>
      
      <div class="flex flex-col md:flex-row items-start gap-6">
        <div class="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 border-2 border-[#D0EC1A]">
          <img src={avatar} alt={name} class="w-full h-full object-cover" />
        </div>
        
        <div>
          <h3 class="text-xl text-white mb-2 font-montserrat">{name}</h3>
          <p class="text-[#D0EC1A] font-medium mb-2">{role}</p>
          
          {bio.map((paragraph, index) => (
            <p key={index} class="text-[#D1D5DB] mb-4">
              {paragraph}
            </p>
          ))}
          
          {socialLinks.length > 0 && (
            <div class="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} class="text-[#9CA3AF] hover:text-[#D0EC1A] transition-colors">
                  {link.type === "twitter" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.5 5.77344C21.7271 6.10938 20.8978 6.32813 20.0278 6.42969C20.9241 5.90625 21.6094 5.07031 21.9362 4.07813C21.1069 4.56641 20.1905 4.91797 19.2159 5.11719C18.4297 4.28516 17.3097 3.75 16.0767 3.75C13.7282 3.75 11.8282 5.65 11.8282 7.99219C11.8282 8.31641 11.8584 8.62891 11.923 8.92578C8.34883 8.74609 5.19086 7.05859 3.06578 4.55859C2.71132 5.16797 2.50835 5.90625 2.50835 6.6875C2.50835 8.16797 3.25398 9.47656 4.38016 10.2188C3.67609 10.2031 2.99281 10.0156 2.39438 9.7075V9.75781C2.39438 11.7891 3.85046 13.4844 5.79321 13.8672C5.44766 13.9609 5.07617 14.0078 4.69273 14.0078C4.4216 14.0078 4.15657 13.9922 3.89765 13.9375C4.43766 15.6016 5.97094 16.8203 7.79899 16.8516C6.38399 17.9844 4.61265 18.6563 2.69039 18.6563C2.35476 18.6563 2.02694 18.6406 1.69922 18.6016C3.54961 19.7969 5.7459 20.4844 8.11172 20.4844C16.0674 20.4844 20.3794 14.0781 20.3794 8.51172C20.3794 8.33203 20.3752 8.15625 20.367 7.98047C21.2052 7.38672 21.9375 6.63281 22.5 5.77344Z"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.25 3H3.75C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25V3.75C21 3.33579 20.6642 3 20.25 3ZM8.25 18.75H5.25V9.75H8.25V18.75ZM6.75 8.25C5.91 8.25 5.25 7.59 5.25 6.75C5.25 5.91 5.91 5.25 6.75 5.25C7.59 5.25 8.25 5.91 8.25 6.75C8.25 7.59 7.59 8.25 6.75 8.25ZM18.75 18.75H15.75V14.25C15.75 12.591 14.409 11.25 12.75 11.25C11.091 11.25 9.75 12.591 9.75 14.25V18.75H6.75V9.75H9.75V11.25C10.2468 10.2468 11.8125 9 13.125 9C16.1603 9 18.75 11.5897 18.75 14.625V18.75Z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 