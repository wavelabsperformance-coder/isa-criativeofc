import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import VideoPreview from "@/components/VideoPreview";
import { projects } from "@/data/projects";

const Portfolio = () => (
  <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Portfolio</p>
        <h1 className="font-display text-4xl font-bold md:text-5xl mb-4">Selected Work</h1>
        <p className="text-muted-foreground max-w-xl mb-12">
          A curated collection of projects spanning motion graphics, VFX, animation and video editing.
        </p>
      </AnimatedSection>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <AnimatedSection key={p.id} delay={i * 0.08}>
            <Link to={`/portfolio/${p.id}`} className="group block">
              <div className="aspect-[9/16] overflow-hidden rounded-sm bg-secondary">
                <VideoPreview
                  thumbnail={p.thumbnail}
                  video={p.video}
                  alt={p.title}
                  className="h-full w-full"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.category}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
