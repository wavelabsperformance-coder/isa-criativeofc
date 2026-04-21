export interface GalleryItem {
  id: string;
  video: string;
  poster?: string;
  alt: string;
  description?: string;
}

export const galleryItems: GalleryItem[] = [
  // CLUB
  { id: "g1", video: "/videos/club/video-01.mp4", alt: "Video 1", description: "ARNIE - SPRINGBREAK" },
  { id: "g2", video: "/videos/club/video-05.mp4", alt: "Video 5", description: "DAER W/ NIC LOVE ISLAND HOST PARTY" },
  { id: "g3", video: "/videos/club/video-10.mp4", alt: "Video 10", description: "ZMM EVENTS COLLEGE TOUR 2025" },
  { id: "g15", video: "/videos/club/video-15.mp4", alt: "Video 15", description: "SIGMA CHI FSU NOIZU 2024" },

  // WEDDING
  { id: "g4", video: "/videos/wedding/video-01.mp4", alt: "Wedding 1", description: "OPULENCE WEDDING FOUR SEASONS" },
  { id: "g5", video: "/videos/wedding/video-03.mp4", alt: "Wedding 3", description: "CERIMÔNIA GABRIEL E GABRIELA" },

  // SPONSORS
  { id: "g6", video: "/videos/sponsors/video-01.mp4", alt: "Sponsors 1", description: "WPB 123 W/ STRYDE RUN CLUB" },
  { id: "g7", video: "/videos/sponsors/video-03.mp4", alt: "Sponsors 3", description: "MAGIC MIND" },

  // FOOD
  { id: "g8", video: "/videos/food/video-01.mp4", alt: "Food 1", description: "AKIRA BACK BRUNCH SHOOT 2024 - PART 1" },

  // MOTION
  { id: "g9", video: "/videos/motion/video-01.mp4", alt: "Motion 1", description: "MOTION VOL1" },

  // VFX
  { id: "g10", video: "/videos/vfx/video-02.mp4", alt: "VFX 2", description: "VFX VOL2" },

  // SOCIAL / CREATIVE
  
  { id: "g11", video: "/videos/criative/video-01.mp4", alt: "criative 1", description: "THE CARTER COLLECTIVE" },
  { id: "g12", video: "/videos/criative/video-05.mp4", alt: "criative 5", description: "VICK - VAPORUB IN THE COLD" },
  { id: "g13", video: "/videos/criative/video-07.mp4", alt: "criative 8", description: "ALWAYS" },

  // TRAVEL
  { id: "g14", video: "/videos/travel/video-01.mp4", alt: "Travel 1", description: "SPAIN TRIP SUMMER 2023" },
];