import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Lightbox from "@/components/Lightbox";
import VideoPreview from "@/components/VideoPreview";
import { projects } from "@/data/projects";

const WHATSAPP_URL =
  "https://wa.me/?text=Hello%2C%20I%27d%20like%20to%20start%20a%20project.";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return (
      <div className="relative z-10 flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4">
            Project not found
          </h1>
          <Button asChild variant="outline">
            <Link to="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  const lightboxImages = project.gallery.map((item) => ({
    ...item,
    src: item.src ?? "",
  }));

  return (
    <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <AnimatedSection>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          {/* 🔥 TÍTULO PREMIUM */}
          <h1 className="
            font-display 
            text-5xl 
            md:text-6xl 
            lg:text-7xl 
            font-semibold 
            tracking-tight 
            leading-[1.05] 
            mb-12
          ">
            {project.title}
          </h1>

          <Button asChild className="gap-2 mb-20">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Start a Similar Project
            </a>
          </Button>
        </AnimatedSection>

        {/* GALLERY */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              
              <div className="flex flex-col">
                
                {/* VIDEO / IMAGE */}
                <div
                  className="overflow-hidden rounded-sm bg-secondary cursor-pointer group"
                  onClick={() => {
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                >
                  {item.video ? (
                    <VideoPreview
                      video={item.video}
                      poster={item.src}
                      alt={item.alt}
                      className="aspect-[9/16] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* DESCRIÇÃO DO VÍDEO (mantida) */}
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

      {/* LIGHTBOX */}
      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default ProjectPage;