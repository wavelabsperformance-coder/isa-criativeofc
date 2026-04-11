import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Lightbox from "@/components/Lightbox";
import { brands } from "@/data/brands";

const BrandPage = () => {
  const { id } = useParams();
  const brand = brands.find((b) => b.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!brand) {
    return (
      <div className="relative z-10 flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Brand not found</h1>
          <Button asChild variant="outline">
            <Link to="/brands">Back to Brands</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <Link to="/brands" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Brands
          </Link>
          <div className="flex items-center gap-6 mb-8">
            <div className="h-16 w-16 rounded-sm bg-secondary p-2 flex items-center justify-center">
              <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-bold md:text-5xl">{brand.name}</h1>
              <p className="text-muted-foreground mt-1">{brand.description}</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brand.images.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div
                className="group relative overflow-hidden rounded-sm bg-secondary cursor-pointer"
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {item.description && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm">{item.description}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Lightbox
        images={brand.images}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageAspect="aspect-[4/5]"
      />
    </div>
  );
};

export default BrandPage;
