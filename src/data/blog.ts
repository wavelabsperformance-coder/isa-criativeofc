export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  external?: boolean; // 🔥 NOVO: define se abre em nova aba
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Burger King launches exclusive desserts in partnership with Nestlé's Moça.s",
    description: "A deep dive into my editing workflow and creative process.",
    image: "/images/burguer.webp",
    link: "https://gkpb.com.br/162572/burger-king-moca-lancamento/", // 🔥 página interna
  },
  {
    id: "b2",
    title: "Vick is the #1 remedy for relieving colds and flu, and SonoZzZ during BBB.",
    description: "Behind the scenes of the most complex VFX project I've done.",
    image: "/images/vick.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7047223159338545152/", // 🔥 externo
    external: true,
  },
  {
    id: "b3",
    title: "The SonoZzz brand launches BlackOut patches to improve sleep quality.",
    description: "How to make your content stand out with professional color grading.",
    image: "/images/sonozz.jpg",
    link: "https://marcasmais.com.br/minforma/noticias/comunicacao/a-marca-sonozzz-lanca-adesivos-blackout-para-melhorar-a-qualidade-do-sono/",
  },
  {
    id: "b4",
    title: "With the Olympics in mind, Vick selects Gabi Portilho.",
    description: "What's trending in motion graphics and how to stay ahead.",
    image: "/images/vick-gabi.png",
    link: "https://clubedecriacao.com.br/ultimas/respire-fundo/",
  },
  {
    id: "b5",
    title: "Always presents its biggest initiative in recent years.",
    description: "My journey from ad agency to independent creative.",
    image: "/images/always-blog.webp",
    link: "https://www.promoview.com.br/always-maior-iniciativa-ultimos-anos/",
  },
  {
    id: "b6",
    title: "Always launches movement to combat period poverty.",
    description: "Step by step: creating a complete visual identity for creators.",
    image: "/images/always-menina.webp",
    link: "https://www.meioemensagem.com.br/marketing/always-lanca-movimento-pelo-combate-a-pobreza-menstrual",
  },
  
];