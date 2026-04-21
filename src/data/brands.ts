export interface BrandImage {
  src: string;
  alt: string;
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
      { src: "/images/brands/pampers-01.png", alt: "Pampers visual 1" },
      { src: "/images/brands/pampers-02.png", alt: "Pampers visual 2" },
      { src: "/images/brands/pampers-03.png", alt: "Pampers visual 3" },
      { src: "/images/brands/pampers-04.png", alt: "Pampers visual 4" },
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
      { src: "/images/brands/vick-01.jpg", alt: "Vick campaign visual 1" },
      { src: "/images/brands/vick-02.jpg", alt: "Vick campaign visual 2" },
      { src: "/images/brands/vick-03.jpg", alt: "Vick campaign visual 3" },
      { src: "/images/brands/vick-04.jpg", alt: "Vick campaign visual 4" },
      { src: "/images/brands/vick-05.jpg", alt: "Vick campaign visual 5" },
    ],
  },

  {
    id: "nestle",
    name: "Nestlé",
    logo: "/images/brands/nestle-logo.png",
    images: [
      { src: "/images/brands/nestle-01.jpg", alt: "Nestlé visual 1" },
      { src: "/images/brands/nestle-02.jpg", alt: "Nestlé visual 2" },
      { src: "/images/brands/nestle-03.jpg", alt: "Nestlé visual 3" },
      { src: "/images/brands/nestle-04.jpg", alt: "Nestlé visual 4" },
      { src: "/images/brands/nestle-05.jpg", alt: "Nestlé visual 5" },
    ],
  },

  {
    id: "carrefour",
    name: "Carrefour",
    logo: "/images/brands/carrefour-logo.png",
    images: [
      { src: "/images/brands/carrefour-01.jpg", alt: "Carrefour visual 1" },
      { src: "/images/brands/carrefour-02.jpg", alt: "Carrefour visual 2" },
      { src: "/images/brands/carrefour-03.jpg", alt: "Carrefour visual 3" },
      { src: "/images/brands/carrefour-04.jpg", alt: "Carrefour visual 4" },
      { src: "/images/brands/carrefour-05.jpg", alt: "Carrefour visual 5" },
    ],
  },

  {
    id: "cebion",
    name: "Cebion",
    logo: "/images/brands/cebion-logo.png",
    images: [
      { src: "/images/brands/cebion-01.jpg", alt: "Cebion visual 1" },
      { src: "/images/brands/cebion-02.jpg", alt: "Cebion visual 2" },
      { src: "/images/brands/cebion-03.jpg", alt: "Cebion visual 3" },
      { src: "/images/brands/cebion-04.jpg", alt: "Cebion visual 4" },
      { src: "/images/brands/cebion-05.jpg", alt: "Cebion visual 5" },
    ],
  },

  {
    id: "sonozz",
    name: "Sonozz",
    logo: "/images/brands/sonozz-logo.png",
    images: [
      { src: "/images/brands/sonozz-01.jpg", alt: "Sonozz visual 1" },
      { src: "/images/brands/sonozz-02.jpg", alt: "Sonozz visual 2" },
      { src: "/images/brands/sonozz-03.jpg", alt: "Sonozz visual 3" },
      { src: "/images/brands/sonozz-04.jpg", alt: "Sonozz visual 4" },
      { src: "/images/brands/sonozz-05.jpg", alt: "Sonozz visual 5" },
    ],
  },
];