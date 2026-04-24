export interface GalleryItem {
  id: string;
  video: string;
  poster?: string;
  alt: string;
  description?: string;
}

// 🔥 MESMA FUNÇÃO DOS PROJECTS
const getVideoUrl = (id: string) =>
  `https://res.cloudinary.com/dyk5dikcw/video/upload/f_auto,q_auto/${id}.mp4`;

export const galleryItems: GalleryItem[] = [
  // CLUB
  { id: "g1", video: getVideoUrl("video-01_bqxoye"), alt: "Video 1", description: "ARNIE - SPRINGBREAK" },
  { id: "g2", video: getVideoUrl("video-05_l8q4lm"), alt: "Video 5", description: "DAER W/ NIC LOVE ISLAND HOST PARTY" },
  { id: "g3", video: getVideoUrl("video-10_h4h9em"), alt: "Video 10", description: "ZMM EVENTS COLLEGE TOUR 2025" },
  { id: "g15", video: getVideoUrl("video-15_n1mqrn"), alt: "Video 15", description: "SIGMA CHI FSU NOIZU 2024" },

  // WEDDING
  { id: "g4", video: getVideoUrl("video-01_uwpxcf"), alt: "Wedding 1", description: "OPULENCE WEDDING FOUR SEASONS" },
  { id: "g5", video: getVideoUrl("video-03_ge4kqv"), alt: "Wedding 3", description: "CERIMÔNIA GABRIEL E GABRIELA" },

  // SPONSORS
  { id: "g6", video: getVideoUrl("video-01_xsgpld"), alt: "Sponsors 1", description: "WPB 123 W/ STRYDE RUN CLUB" },
  { id: "g7", video: getVideoUrl("video-03_mz49ip"), alt: "Sponsors 3", description: "MAGIC MIND" },

  // FOOD
  { id: "g8", video: getVideoUrl("video-01_c2slg2"), alt: "Food 1", description: "AKIRA BACK BRUNCH SHOOT 2024 - PART 1" },

  // MOTION
  { id: "g9", video: getVideoUrl("video-01_wal75u"), alt: "Motion 1", description: "MOTION VOL1" },

  // VFX
  { id: "g10", video: getVideoUrl("video-02_mwiufh"), alt: "VFX 2", description: "VFX VOL2" },

  // SOCIAL / CREATIVE
  { id: "g11", video: getVideoUrl("video-01_yk03me"), alt: "Criative 1", description: "THE CARTER COLLECTIVE" },
  { id: "g12", video: getVideoUrl("video-05_ckztgg"), alt: "Criative 5", description: "VICK - VAPORUB IN THE COLD" },
  { id: "g13", video: getVideoUrl("video-07_dkfwrx"), alt: "Criative 8", description: "ALWAYS" },

  // TRAVEL
  { id: "g14", video: getVideoUrl("video-01_eb9qcsel1"), alt: "Travel 1", description: "SPAIN TRIP SUMMER 2023" },
];