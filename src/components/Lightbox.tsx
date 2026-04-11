import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxItem {
  src: string;
  alt: string;
  description?: string;
  video?: string;
}

interface LightboxProps {
  images: LightboxItem[];
  initialIndex: number;
  open: boolean;
  onClose: () => void;
  imageAspect?: string;
}

const Lightbox = ({ images, initialIndex, open, onClose, imageAspect = "aspect-[9/16]" }: LightboxProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, goPrev, goNext]);

  // Auto-play video when switching slides
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [index]);

  if (!open || images.length === 0) return null;

  const current = images[index];
  const isVideo = !!current.video;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="absolute top-4 left-4 z-10 text-white/50 text-sm font-mono">
            {index + 1} / {images.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 md:left-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 md:right-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStart === null) return;
              const diff = e.changedTouches[0].clientX - touchStart;
              if (Math.abs(diff) > 50) {
                diff > 0 ? goPrev() : goNext();
              }
              setTouchStart(null);
            }}
          >
            {isVideo ? (
              <video
                ref={videoRef}
                src={current.video}
                poster={current.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-[80vh] aspect-[9/16] object-cover rounded-sm"
              />
            ) : (
              <img
                src={current.src}
                alt={current.alt}
                className={`h-[80vh] ${imageAspect} object-cover rounded-sm`}
                draggable={false}
              />
            )}
            {current.description && (
              <p className="mt-3 text-white/70 text-sm text-center max-w-lg">
                {current.description}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
