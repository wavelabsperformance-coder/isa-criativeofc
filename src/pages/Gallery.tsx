import AnimatedSection from "@/components/AnimatedSection";
import { galleryItems } from "@/data/gallery";

const Gallery = () => (
  <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Gallery</p>
        <h1 className="font-display text-4xl font-bold md:text-5xl mb-4">Visual Showcase</h1>
        <p className="text-muted-foreground max-w-xl mb-12">
          A quick look at selected frames, stills and creative work.
        </p>
      </AnimatedSection>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryItems.map((item, i) => (
          <AnimatedSection key={item.id} delay={i * 0.05}>
            <div className="mb-4 break-inside-avoid">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-sm">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="group overflow-hidden rounded-sm">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
