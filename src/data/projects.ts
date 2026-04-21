export interface ProjectImage {
  src?: string;
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
    id: "club",
    title: "Club",
    description: "Club videos collection",
    video: "/videos/club/video-01.mp4",
    thumbnail: "",
    category: "Club",

    gallery: [
      { type: "video", video: "/videos/club/video-01.mp4", alt: "Video 1", description: "ARNIE - SPRINGBREAK" },
      { type: "video", video: "/videos/club/video-02.mp4", alt: "Video 2", description: "WBP FOUR - PICKLE" },
      { type: "video", video: "/videos/club/video-03.mp4", alt: "Video 3", description: "DAER W/SULLIVANKING NC" },
      { type: "video", video: "/videos/club/video-04.mp4", alt: "Video 4", description: "DAER W/ NGHTMARE" },
      { type: "video", video: "/videos/club/video-05.mp4", alt: "Video 5", description: "DAER W/ NIC LOVE ISLAND HOST PARTY" },
      { type: "video", video: "/videos/club/video-06.mp4", alt: "Video 6", description: "DAER W/ ELI BROWN" },
      { type: "video", video: "/videos/club/video-07.mp4", alt: "Video 7", description: "DAER W/ TAPE B" },
      { type: "video", video: "/videos/club/video-08.mp4", alt: "Video 8", description: "STRAWBERRY MOON W/ AR:CO" },
      { type: "video", video: "/videos/club/video-09.mp4", alt: "Video 9", description: "PALM TREE CLUB MIAMI - MARCH RECAP" },
      { type: "video", video: "/videos/club/video-10.mp4", alt: "Video 10", description: "ZMM EVENTS COLLEGE TOUR 2025" },
      { type: "video", video: "/videos/club/video-11.mp4", alt: "Video 11", description: "DAER W/ MAX STYLER" },
      { type: "video", video: "/videos/club/video-12.mp4", alt: "Video 12", description: "DAER W/ ALOK" },
      { type: "video", video: "/videos/club/video-13.mp4", alt: "Video 13", description: "DAER NC w/ STEVE AOKI" },
      { type: "video", video: "/videos/club/video-14.mp4", alt: "Video 14", description: "BONNIE X CLYDE" },
      { type: "video", video: "/videos/club/video-15.mp4", alt: "Video 15", description: "SIGMA CHI FSU NOIZU 2024" },
      { type: "video", video: "/videos/club/video-16.mp4", alt: "Video 16", description: "DAER W/_ALEX_SENSATION" },
      { type: "video", video: "/videos/club/video-17.mp4", alt: "Video 17", description: "PALM TREE CLUB MIAMI - FEBRUARY RECAP" },
      { type: "video", video: "/videos/club/video-18.mp4", alt: "Video 18", description: "AFROJACK NEW YEAR 1" },
      { type: "video", video: "/videos/club/video-19.mp4", alt: "Video 19", description: "BARSTOOL NASHVILLE 2024 - FRIDAY RECAP" },
      { type: "video", video: "/videos/club/video-20.mp4", alt: "Video 20", description: "DAER W/ KNIFE PARTY 2" },
      { type: "video", video: "/videos/club/video-21.mp4", alt: "Video 21", description: "ROCKBAR W/ SIDEPIECE" },
    ]
  },

  {
    id: "wedding",
    title: "Wedding",
    description: "Wedding",
    video: "/videos/wedding/video-01.mp4",
    thumbnail: "",
    category: "Wedding",

    gallery: [
      { type: "video", video: "/videos/wedding/video-01.mp4", alt: "Wedding 1", description: "OPULENCE WEDDING FOUR SEASONS" },
      { type: "video", video: "/videos/wedding/video-02.mp4", alt: "Wedding 2", description: "CERIMÔNIA" },
      { type: "video", video: "/videos/wedding/video-03.mp4", alt: "Wedding 3", description: "CERIMÔNIA GABRIEL E GABRIELA" },
      { type: "video", video: "/videos/wedding/video-04.mp4", alt: "Wedding 4", description: "DBOAT PARTY" },
     
    ]
  },

  {
    id: "sponsors",
    title: "Sponsors",
    description: "Sponsors",
    video: "/videos/sponsors/video-01.mp4",
    thumbnail: "",
    category: "Sponsors",

    gallery: [
      { type: "video", video: "/videos/sponsors/video-01.mp4", alt: "Sponsors 1", description: "WPB 123 W/ STRYDE RUN CLUB" },
      { type: "video", video: "/videos/sponsors/video-02.mp4", alt: "Sponsors 2", description: "Produto em destaque" },
      { type: "video", video: "/videos/sponsors/video-03.mp4", alt: "Sponsors 3", description: "MAGIC MIND" },
      { type: "video", video: "/videos/sponsors/video-04.mp4", alt: "Sponsors 4", description: "CENTINELA TEQUILA" },
      { type: "video", video: "/videos/sponsors/video-05.mp4", alt: "Sponsors 5", description: "CAROLINE NAVA PROMO" },
      { type: "video", video: "/videos/sponsors/video-06.mp4", alt: "Sponsors 6", description: "AFTER MOVIE - ALTINHA" },
    ]
  },

  {
    id: "food",
    title: "Food",
    description: "Food",
    video: "/videos/food/video-01.mp4",
    thumbnail: "",
    category: "Projetos",

    gallery: [
      { type: "video", video: "/videos/food/video-01.mp4", alt: "Food 1", description: "AKIRA BACK BRUNCH SHOOT 2024 - PART 1" },
      { type: "video", video: "/videos/food/video-02.mp4", alt: "Food 2", description: "AKIRA BACK BRUNCH SHOOT 2024 - PART 2" },
      { type: "video", video: "/videos/food/video-03.mp4", alt: "Food 3", description: "BRICKHOUSE DROP" },
    ]
  },

  {
    id: "motion",
    title: "Motion",
    description: "Motion videos",
    video: "/videos/motion/video-01.mp4",
    thumbnail: "",
    category: "Projetos",

    gallery: [
      { type: "video", video: "/videos/motion/video-01.mp4", alt: "Motion 1", description: "MOTION VOL1" },
      { type: "video", video: "/videos/motion/video-02.mp4", alt: "Motion 2", description: "MOTION VOL2" },
      { type: "video", video: "/videos/motion/video-03.mp4", alt: "Motion 3", description: "OTION VOL3" },
    ]
  },

  {
    id: "vfx",
    title: "VFX",
    description: "VFX videos",
    video: "/videos/vfx/video-03.mp4",
    thumbnail: "",
    category: "Projetos",

    gallery: [
      { type: "video", video: "/videos/vfx/video-01.mp4", alt: "VFX 1", description: "VFX VOL1" },
      { type: "video", video: "/videos/vfx/video-02.mp4", alt: "VFX 2", description: "VFX VOL2" },
      { type: "video", video: "/videos/vfx/video-03.mp4", alt: "VFX 3", description: "VFX VOL3" },
      { type: "video", video: "/videos/vfx/video-04.mp4", alt: "VFX 4", description: "VFX VOL4" },
    ]
  },

  {
    id: "Social Media",
    title: "Social Media",
    description: "Social Media",
    video: "/videos/criative/video-01.mp4",
    thumbnail: "", 
    category: "Projetos",

    gallery: [
      { type: "video", video: "/videos/criative/video-01.mp4", alt: "Criative 1", description: "THE CARTER COLLECTIVE"},
      { type: "video", video: "/videos/criative/video-02.mp4", alt: "Criative 2", description: "NUTRITION CHALLENGE" },
      { type: "video", video: "/videos/criative/video-03.mp4", alt: "Criative 3", description: "PAMPERS - EASTER" },
      { type: "video", video: "/videos/criative/video-04.mp4", alt: "Criative 4", description: "VICK - THE COLD WEATHER " },
      { type: "video", video: "/videos/criative/video-05.mp4", alt: "Criative 5", description: "VICK - VAPORUB IN THE COLD" },
      { type: "video", video: "/videos/criative/video-06.mp4", alt: "Criative 6", description: "Cebion" },
      { type: "video", video: "/videos/criative/video-07.mp4", alt: "Criative 7", description: "ALWAYS" },
      { type: "video", video: "/videos/criative/video-08.mp4", alt: "Criative 8", description: "ALWAYS" },
      { type: "video", video: "/videos/criative/video-09.mp4", alt: "Criative 9", description: "ALWAYS" },
      { type: "video", video: "/videos/criative/video-10.mp4", alt: "Criative 10", description: "ALWAYS" },
    ]
  },

  {
    id: "travel",
    title: "Travel",
    description: "Travel videos",
    video: "/videos/travel/video-01.mp4",
    thumbnail: "",
    category: "Projetos",

    gallery: [
      { type: "video", video: "/videos/travel/video-01.mp4", alt: "Travel 1", description: "SPAIN TRIP SUMMER 2023" },
      { type: "video", video: "/videos/travel/video-02.mp4", alt: "Travel 2", description: "DAY OFF" },
    ]
  },
];