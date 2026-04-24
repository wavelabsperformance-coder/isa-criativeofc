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

// 🔥 FUNÇÃO GLOBAL (NUNCA MAIS MUDA LINK NA MÃO)
const getVideoUrl = (id: string) =>
  `https://res.cloudinary.com/dyk5dikcw/video/upload/f_auto,q_auto/${id}.mp4`;

export const projects: Project[] = [
  {
    id: "club",
    title: "Club",
    description: "Club videos collection",
    video: getVideoUrl("video-01_bqxoye"),
    thumbnail: "",
    category: "Club",

    gallery: [
      { type: "video", video: getVideoUrl("video-01_bqxoye"), alt: "Video 1", description: "ARNIE - SPRINGBREAK" },
      { type: "video", video: getVideoUrl("video-02_wannmr"), alt: "Video 2", description: "WBP FOUR - PICKLE" },
      { type: "video", video: getVideoUrl("video-03_dvpkbg"), alt: "Video 3", description: "DAER W/SULLIVANKING NC" },
      { type: "video", video: getVideoUrl("video-04_ksw7xq"), alt: "Video 4", description: "DAER W/ NGHTMARE" },
      { type: "video", video: getVideoUrl("video-05_l8q4lm"), alt: "Video 5", description: "DAER W/ NIC LOVE ISLAND HOST PARTY" },
      { type: "video", video: getVideoUrl("video-06_z36odq"), alt: "Video 6", description: "DAER W/ ELI BROWN" },
      { type: "video", video: getVideoUrl("video-07_vacqkt"), alt: "Video 7", description: "DAER W/ TAPE B" },
      { type: "video", video: getVideoUrl("video-08_iizkyw"), alt: "Video 8", description: "STRAWBERRY MOON W/ AR:CO" },
      { type: "video", video: getVideoUrl("video-09_axlhe8"), alt: "Video 9", description: "PALM TREE CLUB MIAMI - MARCH RECAP" },
      { type: "video", video: getVideoUrl("video-10_h4h9em"), alt: "Video 10", description: "ZMM EVENTS COLLEGE TOUR 2025" },
      { type: "video", video: getVideoUrl("video-11_ujmbjy"), alt: "Video 11", description: "DAER W/ MAX STYLER" },
      { type: "video", video: getVideoUrl("video-12_sjpynf"), alt: "Video 12", description: "DAER W/ ALOK" },
      { type: "video", video: getVideoUrl("video-13_h486sl"), alt: "Video 13", description: "DAER NC w/ STEVE AOKI" },
      { type: "video", video: getVideoUrl("video-14_rpm0yn"), alt: "Video 14", description: "BONNIE X CLYDE" },
      { type: "video", video: getVideoUrl("video-15_n1mqrn"), alt: "Video 15", description: "SIGMA CHI FSU NOIZU 2024" },
      { type: "video", video: getVideoUrl("video-16_iaalq6"), alt: "Video 16", description: "DAER W/_ALEX_SENSATION" },
      { type: "video", video: getVideoUrl("video-17_usjwr4"), alt: "Video 17", description: "PALM TREE CLUB MIAMI - FEBRUARY RECAP" },
      { type: "video", video: getVideoUrl("video-18_bkk4az"), alt: "Video 18", description: "AFROJACK NEW YEAR 1" },
      { type: "video", video: getVideoUrl("video-19_b4bh7i"), alt: "Video 19", description: "BARSTOOL NASHVILLE 2024 - FRIDAY RECAP" },
      { type: "video", video: getVideoUrl("video-20_bosdj9"), alt: "Video 20", description: "DAER W/ KNIFE PARTY 2" },
      { type: "video", video: getVideoUrl("video-21_gvma72"), alt: "Video 21", description: "ROCKBAR W/ SIDEPIECE" },
    ]
  },


  {
    id: "Social Media",
    title: "Social Media",
    description: "Social Media",
    video: getVideoUrl("video-01_yk03me"),
    thumbnail: "",
    category: "Projetos",

    gallery: [
      { type: "video", video: getVideoUrl("video-01_yk03me"), alt: "Criative 1", description: "THE CARTER COLLECTIVE" },
      { type: "video", video: getVideoUrl("video-02_kgni7e"), alt: "Criative 2", description: "NUTRITION CHALLENGE" },
      { type: "video", video: getVideoUrl("video-03_kmwbb9"), alt: "Criative 3", description: "PAMPERS - EASTER" },
      { type: "video", video: getVideoUrl("video-04_axsjwi"), alt: "Criative 4", description: "VICK - THE COLD WEATHER" },
      { type: "video", video: getVideoUrl("video-05_ckztgg"), alt: "Criative 5", description: "VICK - VAPORUB IN THE COLD" },
      { type: "video", video: getVideoUrl("video-06_iuasmf"), alt: "Criative 6", description: "Cebion" },
      { type: "video", video: getVideoUrl("video-07_dkfwrx"), alt: "Criative 7", description: "ALWAYS" },
      { type: "video", video: getVideoUrl("video-08_qmbns6"), alt: "Criative 8", description: "ALWAYS" },
      { type: "video", video: getVideoUrl("video-09_gcigdt"), alt: "Criative 9", description: "ALWAYS" },
      { type: "video", video: getVideoUrl("video-10_tomzd3"), alt: "Criative 10", description: "ALWAYS" },
    ]
  }, 

  {
    id: "wedding",
    title: "Wedding",
    description: "Wedding",
    video: getVideoUrl("video-01_uwpxcf"),
    thumbnail: "",
    category: "Wedding",

    gallery: [
      { type: "video", video: getVideoUrl("video-01_uwpxcf"), alt: "Wedding 1", description: "OPULENCE WEDDING FOUR SEASONS" },
      { type: "video", video: getVideoUrl("video-02_a6q3it"), alt: "Wedding 2", description: "CERIMÔNIA" },
      { type: "video", video: getVideoUrl("video-03_ge4kqv"), alt: "Wedding 3", description: "CERIMÔNIA GABRIEL E GABRIELA" },
      { type: "video", video: getVideoUrl("video-04_mtsqw8"), alt: "Wedding 4", description: "DBOAT PARTY" },
    ]
  },

  {
    id: "sponsors",
    title: "Sponsors",
    description: "Sponsors",
    video: getVideoUrl("video-01_xsgpld"),
    thumbnail: "",
    category: "Sponsors",

    gallery: [
      { type: "video", video: getVideoUrl("video-01_xsgpld"), alt: "Sponsors 1", description: "WPB 123 W/ STRYDE RUN CLUB" },
      { type: "video", video: getVideoUrl("video-02_wewyym"), alt: "Sponsors 2", description: "R+CO" },
      { type: "video", video: getVideoUrl("video-03_mz49ip"), alt: "Sponsors 3", description: "MAGIC MIND" },
      { type: "video", video: getVideoUrl("video-04_i3vzlm"), alt: "Sponsors 4", description: "CENTINELA TEQUILA" },
      { type: "video", video: getVideoUrl("video-05_hpsgq1"), alt: "Sponsors 5", description: "CAROLINE NAVA PROMO" },
      { type: "video", video: getVideoUrl("video-06_k0cqdh"), alt: "Sponsors 6", description: "AFTER MOVIE - ALTINHA" },
    ]
  },

  {
    id: "food",
    title: "Food",
    description: "Food",
    video: getVideoUrl("video-01_c2slg2"),
    thumbnail: "",
    category: "Projetos",

    gallery: [
      { type: "video", video: getVideoUrl("video-01_c2slg2"), alt: "Food 1", description: "AKIRA BACK BRUNCH SHOOT 2024 - PART 1" },
      { type: "video", video: getVideoUrl("video-02_x0ei7t"), alt: "Food 2", description: "AKIRA BACK BRUNCH SHOOT 2024 - PART 2" },
      { type: "video", video: getVideoUrl("video-03_si6tof"), alt: "Food 3", description: "BRICKHOUSE DROP" },
    ]
  },

  
  {
    id: "travel",
    title: "Travel",
    description: "Travel videos",
    video: getVideoUrl("video-02_gxojf1"),
    thumbnail: "",
    category: "Projetos",

    gallery: [
      { type: "video", video: getVideoUrl("video-01_eb9qcsel1"), alt: "Travel 1", description: "SPAIN TRIP SUMMER 2023" },
      { type: "video", video: getVideoUrl("video-02_gxojf1"), alt: "Travel 2", description: "DAY OFF" },
    ]
  },

  {
    id: "motion",
    title: "Motion",
    description: "Motion videos",
    video: getVideoUrl("video-01_wal75u"),
    thumbnail: "",
    category: "Projetos",

    gallery: [
      { type: "video", video: getVideoUrl("video-01_wal75u"), alt: "Motion 1", description: "MOTION VOL1" },
      { type: "video", video: getVideoUrl("video-02_scviwn"), alt: "Motion 2", description: "MOTION VOL2" },
      { type: "video", video: getVideoUrl("video-03_tqzi75"), alt: "Motion 3", description: "MOTION VOL3" },
    ]
  },

  {
    id: "vfx",
    title: "VFX",
    description: "VFX videos",
    video: getVideoUrl("video-01_wq4pf2"),
    thumbnail: "",
    category: "Projetos",

    gallery: [
      { type: "video", video: getVideoUrl("video-01_wq4pf2"), alt: "VFX 1", description: "VFX VOL1" },
      { type: "video", video: getVideoUrl("video-02_mwiufh"), alt: "VFX 2", description: "VFX VOL2" },
      { type: "video", video: getVideoUrl("video-03_iac9u3"), alt: "VFX 3", description: "VFX VOL3" },
      { type: "video", video: getVideoUrl("video-04_uiexlx"), alt: "VFX 4", description: "VFX VOL4" },
    ]
  },


];