export interface BrandImage {
  src?: string;
  video?: string;
  alt: string;
  type?: "image" | "video";
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  images: BrandImage[];
}

export const brands: Brand[] = [
  {
  id: "pampers",
  name: "Pampers",
  logo: "/images/brands/pampers-logo.png",

  images: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/143_e_se_o_coelhinho_trouxesse.mp4",
      alt: "Pampers video 1"
    },
  ],
},

  {
    id: "oral-b",
    name: "Oral-B",
    logo: "/images/brands/oral-b-logo.png",
    images: [
      { src: "/images/brands/oralb-01.png", alt: "Oral-B Vol 1" },
      { src: "/images/brands/oralb-02.png", alt: "Oral-B Vol 2" },
      { src: "/images/brands/oralb-03.png", alt: "Oral-B Vol 3" },
      { src: "/images/brands/oralb-04.png", alt: "Oral-B Vol 4" },
    ],
  },

  {
  id: "always",
  name: "Always",
  logo: "/images/brands/always-logo.png",

  images: [
    // 🔥 VIDEOS
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/19_maquina_pegar_bichinhos.mp4",
      alt: "Always video 1"
    },
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/21_Que_look_posso_usar_sem_marcar%20_.mp4",
      alt: "Always video 2"
    },
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/escolhendo%20meu%20always%20.mp4",
      alt: "Always video 3"
    },
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/91_raio_x_necessaire.mp4",
      alt: "Always video 4"
    },

    // 🔥 IMAGES
    { src: "/images/brands/always-04.png", alt: "Always visual 4" },
    { src: "/images/brands/always-05.png", alt: "Always visual 5" },
    { src: "/images/brands/always-06.png", alt: "Always visual 6" },
    { src: "/images/brands/always-07.png", alt: "Always visual 7" },
    { src: "/images/brands/always-08.png", alt: "Always visual 8" },
    { src: "/images/brands/always-09.png", alt: "Always visual 9" },
    { src: "/images/brands/always-10.png", alt: "Always visual 10" },
    { src: "/images/brands/always-11.png", alt: "Always visual 11" },
    { src: "/images/brands/always-12.png", alt: "Always visual 12" },
    { src: "/images/brands/always-13.png", alt: "Always visual 13" },
    { src: "/images/brands/always-14.png", alt: "Always visual 14" },
    { src: "/images/brands/always-01.png", alt: "Always visual 1" },
    { src: "/images/brands/always-02.png", alt: "Always visual 2" },
    { src: "/images/brands/always-03.png", alt: "Always visual 3" },
  ],
},

  {
  id: "vick",
  name: "Vick",
  logo: "/images/brands/vick-logo.png",

  images: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/51_vaporub_no_frio.mp4",
      alt: "Vick video 1"
    },
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/50_Os%20sintomas%20da%20gripe%20chegaram%20com%20o%20frio_v2.mp4",
      alt: "Vick video 2"
    },
  ],
},

  {
    id: "nestle",
    name: "Nestlé",
    logo: "/images/brands/nestle-logo.png",
    images: [
      { src: "/images/brands/nestle-logo.png", alt: "Nestlé visual 1" },
    ],
  },

  {
    id: "carrefour",
    name: "Carrefour",
    logo: "/images/brands/carrefour-logo.png",
    images: [
      { src: "/images/brands/carrefour-logo.png", alt: "Carrefour visual 1" },
  
    ],
  },

  {
  id: "cebion",
  name: "Cebion",
  logo: "/images/brands/cebion-logo.png",

  images: [
    {
      type: "video",
      video: "https://pub-4ef6c47fc71b4277837d1ec9db4eb871.r2.dev/Social%20Media/02_cebion%20pra%20levar.mp4",
      alt: "Cebion visual 1"
    },
  ],
},

  {
    id: "sonozz",
    name: "Sonozz",
    logo: "/images/brands/sonozz-logo.webp",
    images: [
      { src: "/images/brands/sonozz-logo.webp", alt: "Sonozz visual 1" },

    ],
  },
];