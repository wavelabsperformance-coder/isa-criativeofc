import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Lightbox from "@/components/Lightbox";
import VideoPreview from "@/components/VideoPreview";
import { galleryItems } from "@/data/gallery";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // ✅ AGORA PASSANDO DESCRIPTION PRO LIGHTBOX
  const lightboxItems = galleryItems.map((item) => ({
    src: item.video ?? "",
    alt: item.alt,
    description: item.description, // 👈 ESSENCIAL
    video: item.video,
  }));

  return (
    <div className="relative z-10 pt-24 pb-24">
      <div className="container mx-auto px-4">

        <h1 className="text-4xl font-bold mb-10">Gallery</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              
              <div className="flex flex-col">

                <div
                  className="overflow-hidden rounded-sm bg-secondary cursor-pointer"
                  onClick={() => {
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                >
                  <VideoPreview
                    video={item.video}
                    poster={item.video}
                    alt={item.alt}
                    className="aspect-[9/16] w-full"
                  />
                </div>

                {/* ✅ TROCA ALT POR DESCRIPTION */}
                {item.description && (
                  <div className="mt-3 px-1">
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                )}

              </div>

            </AnimatedSection>
          ))}
        </div>
      </div>

      <Lightbox
        images={lightboxItems}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default Gallery;