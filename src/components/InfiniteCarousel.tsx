import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface CarouselItem {
  name: string;
  logo: string;
  id: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
}

const InfiniteCarousel = ({ items }: InfiniteCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const isHovered = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let pos = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isDragging.current && !isHovered.current) {
        pos += speed;
        const half = el.scrollWidth / 2;
        if (pos >= half) pos = 0;
        el.scrollLeft = pos;
      } else {
        pos = el.scrollLeft;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const doubled = [...items, ...items];

  return (
    <div
      ref={scrollRef}
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={(e) => { handleMouseUp(); isHovered.current = false; }}
      onMouseEnter={() => { isHovered.current = true; }}
    >
      <div className="flex items-center gap-10 md:gap-16 whitespace-nowrap py-2">
        {doubled.map((item, i) => (
          <Link
            key={`${item.id}-${i}`}
            to={`/brands/${item.id}`}
            className="group flex flex-col items-center gap-2 shrink-0"
            onClick={(e) => {
              if (isDragging.current) e.preventDefault();
            }}
          >
            <div className="h-12 w-20 md:h-14 md:w-24 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
