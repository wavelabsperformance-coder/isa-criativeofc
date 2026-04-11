export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  { id: "b1", title: "How I Edit Videos for Major Brands", description: "A deep dive into my editing workflow and creative process.", image: "/images/blog-01.jpg", link: "#" },
  { id: "b2", title: "VFX Breakdown: Neon Dreams", description: "Behind the scenes of the most complex VFX project I've done.", image: "/images/blog-02.jpg", link: "#" },
  { id: "b3", title: "Color Grading Tips for Social Media", description: "How to make your content stand out with professional color grading.", image: "/images/blog-03.jpg", link: "#" },
  { id: "b4", title: "Motion Design Trends 2025", description: "What's trending in motion graphics and how to stay ahead.", image: "/images/blog-04.jpg", link: "#" },
  { id: "b5", title: "From Advertising to Freelance", description: "My journey from ad agency to independent creative.", image: "/images/blog-05.jpg", link: "#" },
  { id: "b6", title: "Building a YouTube Channel Package", description: "Step by step: creating a complete visual identity for creators.", image: "/images/blog-06.jpg", link: "#" },
  { id: "b7", title: "The Power of Storytelling in Ads", description: "Why narrative-driven content outperforms generic ads.", image: "/images/blog-07.jpg", link: "#" },
  { id: "b8", title: "Tools I Use Every Day", description: "My go-to software, plugins and hardware for professional editing.", image: "/images/blog-08.jpg", link: "#" },
  { id: "b9", title: "Working with International Clients", description: "Tips for managing remote creative projects across time zones.", image: "/images/blog-09.jpg", link: "#" },
  { id: "b10", title: "Animation for Social Media", description: "How animated content drives 3x more engagement.", image: "/images/blog-10.jpg", link: "#" },
];
