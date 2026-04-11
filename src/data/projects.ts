export interface ProjectImage {
  src: string;
  alt: string;
  description?: string;
  link?: string;
  type?: 'image' | 'video';
  video?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  video?: string;
  category: string;
  gallery: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "brand-campaign-vick",
    title: "Vick — Winter Campaign",
    description: "Full motion graphics package for Vick's seasonal campaign, including social media ads and animated product showcases.",
    thumbnail: "/images/portfolio-01.jpg",
    video: "/videos/portfolio-01.mp4",
    category: "Motion Graphics",
    gallery: [
      { src: "/images/portfolio-01.jpg", alt: "Vick campaign hero", description: "Main campaign visual" },
      { src: "/images/portfolio-02.jpg", alt: "Social ad variant A" },
      { src: "/images/portfolio-03.jpg", alt: "Social ad variant B", description: "Stories format" },
      { src: "/images/portfolio-04.jpg", alt: "Product animation frame" },
      { src: "/images/portfolio-05.jpg", alt: "Behind the scenes" },
      { src: "/images/portfolio-06.jpg", alt: "Color grading comparison" },
      { src: "/images/portfolio-07.jpg", alt: "Final export" },
      { src: "/images/portfolio-08.jpg", alt: "Storyboard" },
      { src: "/images/portfolio-09.jpg", alt: "Style frames" },
      { src: "/images/portfolio-10.jpg", alt: "Campaign results" },
    ],
  },
  {
    id: "music-video-edit",
    title: "Music Video — Neon Dreams",
    description: "Creative direction and VFX for an independent artist's music video with 2M+ views.",
    thumbnail: "/images/portfolio-02.jpg",
    video: "/videos/portfolio-02.mp4",
    category: "VFX",
    gallery: [
      { src: "/images/portfolio-02.jpg", alt: "Music video hero" },
      { src: "/images/portfolio-03.jpg", alt: "VFX breakdown" },
      { src: "/images/portfolio-04.jpg", alt: "Color grade" },
      { src: "/images/portfolio-05.jpg", alt: "Performance shot" },
      { src: "/images/portfolio-06.jpg", alt: "Compositing layer" },
      { src: "/images/portfolio-07.jpg", alt: "Before/after" },
      { src: "/images/portfolio-08.jpg", alt: "Final frame" },
      { src: "/images/portfolio-09.jpg", alt: "BTS" },
      { src: "/images/portfolio-10.jpg", alt: "Stills" },
      { src: "/images/portfolio-01.jpg", alt: "Poster" },
    ],
  },
  {
    id: "nestle-social",
    title: "Nestlé Moça — Social Content",
    description: "Animated social media content series for Nestlé Moça, driving engagement across Instagram and TikTok.",
    thumbnail: "/images/portfolio-03.jpg",
    video: "/videos/portfolio-03.mp4",
    category: "Animation",
    gallery: [
      { src: "/images/portfolio-03.jpg", alt: "Nestlé hero" },
      { src: "/images/portfolio-04.jpg", alt: "Reel 1" },
      { src: "/images/portfolio-05.jpg", alt: "Reel 2" },
      { src: "/images/portfolio-06.jpg", alt: "Stories" },
      { src: "/images/portfolio-07.jpg", alt: "Carousel" },
      { src: "/images/portfolio-08.jpg", alt: "Animation frame" },
      { src: "/images/portfolio-09.jpg", alt: "Style guide" },
      { src: "/images/portfolio-10.jpg", alt: "Moodboard" },
      { src: "/images/portfolio-01.jpg", alt: "Final post" },
      { src: "/images/portfolio-02.jpg", alt: "Engagement stats" },
    ],
  },
  {
    id: "carrefour-promo",
    title: "Carrefour — Promo Video",
    description: "High-energy promotional video for Carrefour's anniversary sale with dynamic typography and transitions.",
    thumbnail: "/images/portfolio-04.jpg",
    video: "/videos/portfolio-04.mp4",
    category: "Video Editing",
    gallery: [
      { src: "/images/portfolio-04.jpg", alt: "Promo hero" },
      { src: "/images/portfolio-05.jpg", alt: "Typography frame" },
      { src: "/images/portfolio-06.jpg", alt: "Transition detail" },
      { src: "/images/portfolio-07.jpg", alt: "Product shot" },
      { src: "/images/portfolio-08.jpg", alt: "End card" },
      { src: "/images/portfolio-09.jpg", alt: "Sound design" },
      { src: "/images/portfolio-10.jpg", alt: "Storyboard" },
      { src: "/images/portfolio-01.jpg", alt: "Edit timeline" },
      { src: "/images/portfolio-02.jpg", alt: "Export settings" },
      { src: "/images/portfolio-03.jpg", alt: "Final version" },
    ],
  },
  {
    id: "pampers-animation",
    title: "Pampers — Product Animation",
    description: "3D product animation showcasing Pampers' new line with soft, premium aesthetics.",
    thumbnail: "/images/portfolio-05.jpg",
    video: "/videos/portfolio-05.mp4",
    category: "3D Animation",
    gallery: [
      { src: "/images/portfolio-05.jpg", alt: "3D render hero" },
      { src: "/images/portfolio-06.jpg", alt: "Wireframe" },
      { src: "/images/portfolio-07.jpg", alt: "Texture detail" },
      { src: "/images/portfolio-08.jpg", alt: "Lighting setup" },
      { src: "/images/portfolio-09.jpg", alt: "Final render" },
      { src: "/images/portfolio-10.jpg", alt: "Compositing" },
      { src: "/images/portfolio-01.jpg", alt: "Alternate angle" },
      { src: "/images/portfolio-02.jpg", alt: "Package design" },
      { src: "/images/portfolio-03.jpg", alt: "Animation loop" },
      { src: "/images/portfolio-04.jpg", alt: "Campaign placement" },
    ],
  },
  {
    id: "youtube-channel-pack",
    title: "YouTube Channel Package",
    description: "Complete visual identity for a tech YouTube channel — intro, outro, lower thirds and transitions.",
    thumbnail: "/images/portfolio-06.jpg",
    video: "/videos/portfolio-06.mp4",
    category: "Motion Graphics",
    gallery: [
      { src: "/images/portfolio-06.jpg", alt: "Intro frame" },
      { src: "/images/portfolio-07.jpg", alt: "Outro" },
      { src: "/images/portfolio-08.jpg", alt: "Lower third" },
      { src: "/images/portfolio-09.jpg", alt: "Transition" },
      { src: "/images/portfolio-10.jpg", alt: "Thumbnail template" },
      { src: "/images/portfolio-01.jpg", alt: "Banner" },
      { src: "/images/portfolio-02.jpg", alt: "Logo animation" },
      { src: "/images/portfolio-03.jpg", alt: "Subscribe CTA" },
      { src: "/images/portfolio-04.jpg", alt: "Endscreen" },
      { src: "/images/portfolio-05.jpg", alt: "Full package" },
    ],
  },
];
