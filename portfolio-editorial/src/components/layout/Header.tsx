import Navigation from "./Navigation";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { LinkedInIcon } from "@/components/ui/SocialIcons";

export default function Header() {
  return (
    <header className="relative border-b border-border">
      <div className="mx-auto grid min-h-20 w-full max-w-7xl grid-cols-[1fr_auto_auto] items-center px-6">
        <div className="justify-self-start">
          <span className="ml-0 font-heading text-2xl text-foreground md:ml-12">
            <a href="/" aria-label="ir al inicio">
              LOGO
            </a>
          </span>
        </div>

        <div className="mr-4 justify-self-end md:mr-12">
          <Navigation />
        </div>

        <div className="mr-0 flex items-center gap-4 justify-self-end md:mr-14">
          <a
          href="https://www.instagram.com/carinadacosta13/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          >
          <InstagramIcon />
          </a>
          
          <a
          href="https://www.linkedin.com/in/carina-da-costa-a2a5543b4/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          >
          <LinkedInIcon />
          </a>
        </div>
      </div>
    </header>
  );
}