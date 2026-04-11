import { MessageCircle, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const WHATSAPP_URL = "https://wa.me/?text=Hello%2C%20I%27d%20like%20to%20start%20a%20project.";
const LINKEDIN_URL = "https://www.linkedin.com/in/isabelle-carvalho/";

const Contact = () => (
  <div className="relative z-10 flex min-h-screen items-center pt-20">
    <div className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</p>
          <h1 className="font-display text-4xl font-bold md:text-5xl mb-6">
            Let's create something{" "}
            <span className="text-gradient">extraordinary.</span>
          </h1>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Ready to elevate your brand with premium video editing, VFX or animation? Get in touch and let's discuss your project.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Contact via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://www.instagram.com/isabelle_carvalhoo/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" /> View on Instagram
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-foreground text-foreground hover:bg-foreground hover:text-background">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" /> Connect on LinkedIn
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </div>
);

export default Contact;
