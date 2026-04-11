import { MessageCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const WHATSAPP_URL = "https://wa.me/?text=Hello%2C%20I%27d%20like%20to%20start%20a%20project.";
const LINKEDIN_URL = "https://www.linkedin.com/in/isabelle-carvalho/";

const softwareTools = [
  { name: "After Effects", logo: "/images/software/after-effects.jpg", desc: "Motion & VFX" },
  { name: "Premiere Pro", logo: "/images/software/premiere.jpg", desc: "Video Editing" },
  { name: "Photoshop", logo: "/images/software/photoshop.jpg", desc: "Image Editing" },
  { name: "Illustrator", logo: "/images/software/illustrator.jpg", desc: "Vector Design" },
  { name: "Cinema 4D", logo: "/images/software/cinema4d.jpg", desc: "3D Modeling" },
  { name: "Blender", logo: "/images/software/blender.jpg", desc: "3D & Animation" },
  { name: "DaVinci Resolve", logo: "/images/software/davinci.jpg", desc: "Color Grading" },
];

const AboutMe = () => (
  <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
    <div className="container mx-auto px-4">
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
        {/* Photo Card */}
        <AnimatedSection>
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
            <img
              src="/images/isa.jpg"
              alt="Isa — Creative Editor and Animator"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection delay={0.2}>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">About Me</p>
          <h1 className="font-display text-4xl font-bold md:text-5xl mb-6">
            Hi there! I'm <span className="text-gradient">Isa.</span>
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A video editor specializing in visual effects and animation. I create high-impact visual content for marketing campaigns, music videos, YouTube channels and social media.
            </p>
            <p>
              With a background in advertising, I bring a strategic and creative approach to every project. I combine technical expertise with artistic vision to deliver content that truly stands out.
            </p>
            <p>
              I've had the privilege of working with leading brands and talented creators worldwide, helping them communicate their stories through compelling visuals.
            </p>
            <p className="text-foreground font-medium">Let's collaborate on your next project.</p>
          </div>

          {/* Software Tools */}
          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">Tools & Software</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {softwareTools.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex items-center gap-3 rounded-sm border border-border p-3 transition-all duration-300 hover:border-foreground/30 hover:bg-secondary"
                >
                  <div className="h-10 w-10 shrink-0 rounded-sm bg-secondary p-1.5 flex items-center justify-center">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">{tool.name}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-3">
            <Button asChild className="gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> Get in Touch
              </a>
            </Button>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-sm border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </div>
);

export default AboutMe;
