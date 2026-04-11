export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  link?: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "/images/gallery-01.jpg", alt: "Creative edit showcase 1" },
  { id: "g2", src: "/images/gallery-02.jpg", alt: "VFX composition" },
  { id: "g3", src: "/images/gallery-03.jpg", alt: "Motion design frame" },
  { id: "g4", src: "/images/gallery-04.jpg", alt: "Color grading work" },
  { id: "g5", src: "/images/gallery-05.jpg", alt: "Animation still" },
  { id: "g6", src: "/images/gallery-06.jpg", alt: "Campaign visual" },
  { id: "g7", src: "/images/gallery-07.jpg", alt: "Social media content" },
  { id: "g8", src: "/images/gallery-08.jpg", alt: "Product animation" },
  { id: "g9", src: "/images/gallery-09.jpg", alt: "Typography motion" },
  { id: "g10", src: "/images/gallery-10.jpg", alt: "Brand identity motion" },
  { id: "g11", src: "/images/gallery-11.jpg", alt: "Experimental VFX" },
  { id: "g12", src: "/images/gallery-12.jpg", alt: "Cinematic grade" },
];
