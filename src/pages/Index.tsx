import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import VideoPreview from "@/components/VideoPreview";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projects } from "@/data/projects";
import { brands } from "@/data/brands";

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

const faqItems = [
  {
    question: "What services do you offer?",
    answer: "I specialize in video editing, visual effects (VFX), motion graphics, and 2D/3D animation for campaigns, music videos, YouTube channels, and social media content.",
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Turnaround depends on the project scope. A short social media edit can take 2–3 days, while a full campaign or music video may take 1–3 weeks. I always provide a timeline before starting.",
  },
  {
    question: "How do we start a project together?",
    answer: "Simply reach out via WhatsApp or LinkedIn with a brief description of your project. We'll schedule a quick call to discuss your vision, timeline, and budget.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! I work with clients worldwide. All communication and delivery can be done remotely with seamless collaboration tools.",
  },
  {
    question: "What formats and files do you deliver?",
    answer: "I deliver in any format you need — MP4, MOV, ProRes, WebM, GIF, and more. Files are optimized for the platform they'll be published on (Instagram, YouTube, TikTok, etc.).",
  },
];

const Index = () => (
  <div className="relative z-10">
    {/* HERO WITH TEMPLATE */}
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0">
        <img src="/images/home-template.jpg" alt="" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Video Editing · VFX · Animation
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Creative edits that{" "}
          <span className="text-gradient">elevate brands.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-6 text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Video editing, VFX & animation for campaigns, music videos and digital content.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link to="/portfolio">View Portfolio <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Contact via WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 1 }} className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>

    {/* ABOUT */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">About</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl mb-6">
              Hi there! I'm <span className="text-gradient">Isa.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A video editor specializing in visual effects and animation. I create high-impact visual content for marketing campaigns, music videos, YouTube channels and social media.
              </p>
              <p>
                With a background in advertising, I bring a strategic and creative approach to every project.
              </p>
              <p className="text-foreground font-medium">Let's collaborate on your next project.</p>
            </div>

            {/* Software tools inline */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {softwareTools.map((tool) => (
                <div key={tool.name} className="group relative flex items-center gap-2">
                  <div className="h-10 w-10 md:h-11 md:w-11 rounded-sm bg-secondary p-1.5 flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    <img src={tool.logo} alt={tool.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xs font-semibold leading-tight">{tool.name}</p>
                    <p className="text-[10px] text-muted-foreground leading-tight">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Button asChild variant="outline" className="gap-2">
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
          <AnimatedSection delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
              <img src="/images/isa.jpg" alt="Isa — Creative Editor and Animator" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* BRANDS */}
    <section className="border-y border-border py-16 md:py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-10">
            Trusted by Leading Brands
          </p>
        </AnimatedSection>
        <InfiniteCarousel items={brands.map((b) => ({ name: b.name, logo: b.logo, id: b.id }))} />
      </div>
    </section>

    {/* PORTFOLIO GRID (6 items, vertical 9:16) */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Selected Work</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Portfolio</h2>
            </div>
            <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.08}>
              <Link to={`/portfolio/${p.id}`} className="group block">
                <div className="aspect-[9/16] overflow-hidden rounded-sm bg-secondary">
                  <VideoPreview thumbnail={p.thumbnail} video={p.video} alt={p.title} className="h-full w-full" />
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.category}</p>
                  <h3 className="mt-1 font-heading font-semibold">{p.title}</h3>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="border-t border-border py-24 md:py-32">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2 text-center">FAQ</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl mb-12 text-center">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Index;
