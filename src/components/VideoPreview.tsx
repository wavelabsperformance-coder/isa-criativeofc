import { useRef, useState } from "react";

interface VideoPreviewProps {
  thumbnail: string;
  video?: string;
  alt: string;
  className?: string;
}

const VideoPreview = ({ thumbnail, video, alt, className = "" }: VideoPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && video) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={thumbnail}
        alt={alt}
        className={`h-full w-full object-cover transition-all duration-500 ${
          isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
        }`}
        loading="lazy"
      />
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

export default VideoPreview;
