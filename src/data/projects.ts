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
  video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-01_bqxoye.webm",
  thumbnail: "",
  category: "Club",

  gallery: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-01_bqxoye.webm",
      alt: "Video 1",
      description: "ARNIE - SPRINGBREAK"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-02_wannmr.webm",
      alt: "Video 2",
      description: "WBP FOUR - PICKLE"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-03_dvpkbg.webm",
      alt: "Video 3",
      description: "DAER W/SULLIVANKING NC"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-04_ksw7xq.webm",
      alt: "Video 4",
      description: "DAER W/ NGHTMARE"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-05_l8q4lm.webm",
      alt: "Video 5",
      description: "DAER W/ NIC LOVE ISLAND HOST PARTY"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-06_z36odq.webm",
      alt: "Video 6",
      description: "DAER W/ ELI BROWN"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-07_vacqkt.webm",
      alt: "Video 7",
      description: "DAER W/ TAPE B"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-08_iizkyw.webm",
      alt: "Video 8",
      description: "STRAWBERRY MOON W/ AR:CO"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-09_axlhe8.webm",
      alt: "Video 9",
      description: "PALM TREE CLUB MIAMI - MARCH RECAP"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-10_h4h9em.webm",
      alt: "Video 10",
      description: "ZMM EVENTS COLLEGE TOUR 2025"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-11_ujmbjy.webm",
      alt: "Video 11",
      description: "DAER W/ MAX STYLER"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-12_sjpynf.webm",
      alt: "Video 12",
      description: "DAER W/ ALOK"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-13_h486sl.webm",
      alt: "Video 13",
      description: "DAER NC w/ STEVE AOKI"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-14_rpm0yn.webm",
      alt: "Video 14",
      description: "BONNIE X CLYDE"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-15_n1mqrn.webm",
      alt: "Video 15",
      description: "SIGMA CHI FSU NOIZU 2024"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-16_iaalq6.webm",
      alt: "Video 16",
      description: "DAER W/_ALEX_SENSATION"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-17_usjwr4.webm",
      alt: "Video 17",
      description: "PALM TREE CLUB MIAMI - FEBRUARY RECAP"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-18_bkk4az.webm",
      alt: "Video 18",
      description: "AFROJACK NEW YEAR 1"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-19_b4bh7i.webm",
      alt: "Video 19",
      description: "BARSTOOL NASHVILLE 2024 - FRIDAY RECAP"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-20_bosdj9.webm",
      alt: "Video 20",
      description: "DAER W/ KNIFE PARTY 2"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Club/video-21_gvma72.webm",
      alt: "Video 21",
      description: "ROCKBAR W/ SIDEPIECE"
    },
  ]
},


  {
  id: "Social Media",
  title: "Social Media",
  description: "Social Media",
  video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/The%20Carter%20Collective.mp4",
  thumbnail: "",
  category: "Projetos",

  gallery: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/The%20Carter%20Collective.mp4",
      alt: "Criative 1",
      description: "THE CARTER COLLECTIVE"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/video-02_kgni7e.webm",
      alt: "Criative 2",
      description: "NUTRITION CHALLENGE"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/143_e_se_o_coelhinho_trouxesse.mp4",
      alt: "Criative 3",
      description: "PAMPERS - EASTER"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/50_Os%20sintomas%20da%20gripe%20chegaram%20com%20o%20frio_v2.mp4",
      alt: "Criative 4",
      description: "VICK - THE COLD WEATHER"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/51_vaporub_no_frio.mp4",
      alt: "Criative 5",
      description: "VICK - VAPORUB IN THE COLD"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/02_cebion%20pra%20levar.mp4",
      alt: "Criative 6",
      description: "Cebion"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/91_raio_x_necessaire.mp4",
      alt: "Criative 7",
      description: "ALWAYS"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/19_maquina_pegar_bichinhos.mp4",
      alt: "Criative 8",
      description: "ALWAYS"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/21_Que_look_posso_usar_sem_marcar%20_.mp4",
      alt: "Criative 9",
      description: "ALWAYS"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/escolhendo%20meu%20always%20.mp4",
      alt: "Criative 10",
      description: "ALWAYS"
    },
  // 🔥 TESTE CLOUDFLARE
  {
    type: "video",
    video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/Shisospicy%20Hype%20Reel%20Voiceover.mp4",
    alt: "Criative 11",
    description: "SHISOSPICY HYPE REEL VOICEOVER"
  },

   {
    type: "video",
    video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/Teste%20Vitor%20Jaci.mp4",
    alt: "Criative 11",
    description: "VITOR JACI"
  },
]
  }, 

 {
  id: "wedding",
  title: "Wedding",
  description: "Wedding",
  video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Wedding/video-01_uwpxcf.webm",
  thumbnail: "",
  category: "Wedding",

  gallery: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Wedding/video-01_uwpxcf.webm",
      alt: "Wedding 1",
      description: "OPULENCE WEDDING FOUR SEASONS"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Wedding/video-02_a6q3it.webm",
      alt: "Wedding 2",
      description: "CERIMÔNIA"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Wedding/video-03_ge4kqv.webm",
      alt: "Wedding 3",
      description: "CERIMÔNIA GABRIEL E GABRIELA"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Wedding/video-04_mtsqw8.webm",
      alt: "Wedding 4",
      description: "DBOAT PARTY"
    },
  ]
},

 {
  id: "sponsors",
  title: "Sponsors",
  description: "Sponsors",
  video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Sponsors/video-01_xsgpld.webm",
  thumbnail: "",
  category: "Sponsors",

  gallery: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Sponsors/video-01_xsgpld.webm",
      alt: "Sponsors 1",
      description: "WPB 123 W/ STRYDE RUN CLUB"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Sponsors/video-02_wewyym.webm",
      alt: "Sponsors 2",
      description: "R+CO"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Sponsors/video-03_mz49ip.webm",
      alt: "Sponsors 3",
      description: "MAGIC MIND"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Sponsors/video-04_i3vzlm.webm",
      alt: "Sponsors 4",
      description: "CENTINELA TEQUILA"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Sponsors/video-05_hpsgq1.webm",
      alt: "Sponsors 5",
      description: "CAROLINE NAVA PROMO"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Sponsors/video-06_k0cqdh.webm",
      alt: "Sponsors 6",
      description: "AFTER MOVIE - ALTINHA"
    },
  ]
},

 {
  id: "food",
  title: "Food",
  description: "Food",
  video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Food/video-02_x0ei7t.webm",
  thumbnail: "",
  category: "Projetos",

  gallery: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Food/video-01_c2slg2.webm",
      alt: "Food 1",
      description: "AKIRA BACK BRUNCH SHOOT 2024 - PART 1"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Food/video-02_x0ei7t.webm",
      alt: "Food 2",
      description: "AKIRA BACK BRUNCH SHOOT 2024 - PART 2"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Food/video-03_si6tof.webm",
      alt: "Food 3",
      description: "BRICKHOUSE DROP"
    },
  ]
},

  
{
  id: "travel",
  title: "Travel",
  description: "Travel videos",
  video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Travel/video-02_gxojf1.webm",
  thumbnail: "",
  category: "Projetos",

  gallery: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Travel/Spain%20Trip%20Summer%20202309.mp4",
      alt: "Travel 1",
      description: "SPAIN TRIP SUMMER 2023"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Travel/video-02_gxojf1.webm",
      alt: "Travel 2",
      description: "DAY OFF"
    },
  ]
},

{
  id: "motion",
  title: "Motion",
  description: "Motion videos",
  video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Motion/video-01_wal75u.webm",
  thumbnail: "",
  category: "Projetos",

  gallery: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Motion/video-01_wal75u.webm",
      alt: "Motion 1",
      description: "MOTION VOL1"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Motion/video-02_scviwn.webm",
      alt: "Motion 2",
      description: "MOTION VOL2"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Motion/video-03_tqzi75.webm",
      alt: "Motion 3",
      description: "MOTION VOL3"
    },
  ]
},

  {
  id: "vfx",
  title: "VFX",
  description: "VFX videos",
  video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/VFX/video-03_iac9u3.webm",
  thumbnail: "",
  category: "Projetos",

  gallery: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/VFX/video-01_wq4pf2.webm",
      alt: "VFX 1",
      description: "VFX VOL1"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/VFX/video-02_mwiufh.webm",
      alt: "VFX 2",
      description: "VFX VOL2"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/VFX/video-03_iac9u3.webm",
      alt: "VFX 3",
      description: "VFX VOL3"
    },

    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/VFX/video-04_uiexlx.webm",
      alt: "VFX 4",
      description: "VFX VOL4"
    },
  ]
},


];