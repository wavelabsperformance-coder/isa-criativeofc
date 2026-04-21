import { useRef, useEffect } from "react";

interface VideoPreviewProps {
  video?: string;
  poster: string; // 👈 AGORA OBRIGATÓRIO
  alt: string;
  className?: string;
}

const VideoPreview = ({ video, poster, alt, className = "" }: VideoPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1;
    }
  }, []);

  const handleMouseEnter = () => {
    if (!videoRef.current) return;
    videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0.1;
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {video && (
        <video
          ref={videoRef}
          src={video}
          poster={poster} // 👈 ESSENCIAL PRA IMAGEM PARADA
          muted
          loop
          playsInline
          preload="metadata" // 👈 melhor performance
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default VideoPreview;