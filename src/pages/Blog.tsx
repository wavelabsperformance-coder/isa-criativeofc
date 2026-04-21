import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/data/blog";

const isExternal = (url: string) => url.startsWith("http");

const Blog = () => (
  <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
    <div className="container mx-auto px-4">
      
      <AnimatedSection>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Blog & Projects
        </p>

        <h1 className="font-display text-4xl font-bold md:text-5xl mb-4">
          Insights & Work
        </h1>

        <p className="text-muted-foreground max-w-xl mb-12">
          Articles, case studies and project highlights.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, i) => (
          <AnimatedSection key={post.id} delay={i * 0.06}>
            
            {isExternal(post.link) ? (
              // 🔗 LINK EXTERNO
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <CardContent post={post} />
              </a>
            ) : (
              // 🔥 LINK INTERNO (CORRETO)
              <Link to={post.link} className="group block">
                <CardContent post={post} />
              </Link>
            )}

          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

// 🔥 COMPONENTE SEPARADO PRA LIMPAR O CÓDIGO
const CardContent = ({ post }: any) => (
  <>
    <div className="aspect-video overflow-hidden rounded-sm bg-secondary">
      <img
        src={post.image}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div className="mt-4">
      <h3 className="font-heading font-semibold flex items-center gap-2 group-hover:text-muted-foreground transition-colors">
        {post.title}
        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>

      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
        {post.description}
      </p>
    </div>
  </>
);

export default Blog;