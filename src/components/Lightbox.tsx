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
}

const Lightbox = ({
  images,
  initialIndex,
  open,
  onClose,
}: LightboxProps) => {
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;

      videoRef.current.play().catch(() => {
        videoRef.current!.muted = true;
        videoRef.current!.play().catch(() => {});
      });
    }
  }, [index, open]);

  if (!open || images.length === 0) return null;

  const current = images[index];
  const isVideo = !!current.video;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/90"
            onClick={onClose}
          />

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>

          {/* COUNTER */}
          <div className="absolute top-4 left-4 z-20 text-white/50 text-sm">
            {index + 1} / {images.length}
          </div>

          {/* PREV */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 z-20 text-white/60 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 z-20 text-white/60 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* CONTENT */}
          <motion.div
            key={index}
            className="relative z-10 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStart === null) return;

              const diff = e.changedTouches[0].clientX - touchStart;

              if (Math.abs(diff) > 40) {
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
                controls
                playsInline
                autoPlay
                className="max-h-[80vh] max-w-[95vw] object-contain rounded-sm bg-black"
              />
            ) : (
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[80vh] max-w-[95vw] object-contain rounded-sm"
                draggable={false}
              />
            )}

            {/* DESCRIÇÃO SEMPRE EMBAIXO */}
            {current.description && (
              <p className="mt-4 text-white/70 text-sm text-center max-w-xl">
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