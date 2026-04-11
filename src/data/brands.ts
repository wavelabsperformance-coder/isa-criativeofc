export interface BrandImage {
  src: string;
  alt: string;
  description?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  images: BrandImage[];
}

export const brands: Brand[] = [
  {
    id: "vick",
    name: "Vick",
    logo: "/images/brands/vick-logo.jpg",
    description: "Motion graphics and animated content for Vick's seasonal campaigns.",
    images: [
      { src: "/images/brands/vick-01.jpg", alt: "Vick campaign visual 1", description: "Winter campaign hero" },
      { src: "/images/brands/vick-02.jpg", alt: "Vick campaign visual 2", description: "Social media ad" },
      { src: "/images/brands/vick-03.jpg", alt: "Vick campaign visual 3" },
      { src: "/images/brands/vick-04.jpg", alt: "Vick campaign visual 4" },
      { src: "/images/brands/vick-05.jpg", alt: "Vick campaign visual 5" },
    ],
  },
  {
    id: "cebion",
    name: "Cebion",
    logo: "/images/brands/cebion-logo.jpg",
    description: "Visual content and animation for Cebion's digital presence.",
    images: [
      { src: "/images/brands/cebion-01.jpg", alt: "Cebion visual 1" },
      { src: "/images/brands/cebion-02.jpg", alt: "Cebion visual 2" },
      { src: "/images/brands/cebion-03.jpg", alt: "Cebion visual 3" },
      { src: "/images/brands/cebion-04.jpg", alt: "Cebion visual 4" },
      { src: "/images/brands/cebion-05.jpg", alt: "Cebion visual 5" },
    ],
  },
  {
    id: "always",
    name: "Always",
    logo: "/images/brands/always-logo.jpg",
    description: "Creative video editing and motion design for Always campaigns.",
    images: [
      { src: "/images/brands/always-01.jpg", alt: "Always visual 1" },
      { src: "/images/brands/always-02.jpg", alt: "Always visual 2" },
      { src: "/images/brands/always-03.jpg", alt: "Always visual 3" },
      { src: "/images/brands/always-04.jpg", alt: "Always visual 4" },
      { src: "/images/brands/always-05.jpg", alt: "Always visual 5" },
    ],
  },
  {
    id: "pampers",
    name: "Pampers",
    logo: "/images/brands/pampers-logo.jpg",
    description: "3D animation and product visualization for Pampers.",
    images: [
      { src: "/images/brands/pampers-01.jpg", alt: "Pampers visual 1" },
      { src: "/images/brands/pampers-02.jpg", alt: "Pampers visual 2" },
      { src: "/images/brands/pampers-03.jpg", alt: "Pampers visual 3" },
      { src: "/images/brands/pampers-04.jpg", alt: "Pampers visual 4" },
      { src: "/images/brands/pampers-05.jpg", alt: "Pampers visual 5" },
    ],
  },
  {
    id: "nestle",
    name: "Nestlé",
    logo: "/images/brands/nestle-logo.jpg",
    description: "Animated social content for Nestlé Materna and Nestlé Moça.",
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
    logo: "/images/brands/carrefour-logo.jpg",
    description: "Promotional videos and motion graphics for Carrefour.",
    images: [
      { src: "/images/brands/carrefour-01.jpg", alt: "Carrefour visual 1" },
      { src: "/images/brands/carrefour-02.jpg", alt: "Carrefour visual 2" },
      { src: "/images/brands/carrefour-03.jpg", alt: "Carrefour visual 3" },
      { src: "/images/brands/carrefour-04.jpg", alt: "Carrefour visual 4" },
      { src: "/images/brands/carrefour-05.jpg", alt: "Carrefour visual 5" },
    ],
  },
  {
    id: "oral-b",
    name: "Oral-B",
    logo: "/images/brands/oral-b-logo.jpg",
    description: "Product animation and video editing for Oral-B.",
    images: [
      { src: "/images/brands/oral-b-01.jpg", alt: "Oral-B visual 1" },
      { src: "/images/brands/oral-b-02.jpg", alt: "Oral-B visual 2" },
      { src: "/images/brands/oral-b-03.jpg", alt: "Oral-B visual 3" },
      { src: "/images/brands/oral-b-04.jpg", alt: "Oral-B visual 4" },
      { src: "/images/brands/oral-b-05.jpg", alt: "Oral-B visual 5" },
    ],
  },
  {
    id: "sonozz",
    name: "Sonozz",
    logo: "/images/brands/sonozz-logo.jpg",
    description: "Creative video content and VFX for Sonozz.",
    images: [
      { src: "/images/brands/sonozz-01.jpg", alt: "Sonozz visual 1" },
      { src: "/images/brands/sonozz-02.jpg", alt: "Sonozz visual 2" },
      { src: "/images/brands/sonozz-03.jpg", alt: "Sonozz visual 3" },
      { src: "/images/brands/sonozz-04.jpg", alt: "Sonozz visual 4" },
      { src: "/images/brands/sonozz-05.jpg", alt: "Sonozz visual 5" },
    ],
  },
];
