import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { brands } from "@/data/brands";

const BrandPortfolio = () => (
  <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
    <div className="container mx-auto px-4">
      <AnimatedSection>
     
        <h1 className="font-display text-4xl font-bold md:text-5xl mb-4">Social Media</h1>
        <p className="text-muted-foreground max-w-xl mb-12">
          Creative work delivered for leading brands across multiple industries.
        </p>
      </AnimatedSection>
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {brands.map((brand, i) => (
          <AnimatedSection key={brand.id} delay={i * 0.08}>
            <Link to={`/brands/${brand.id}`} className="group block text-center">
              <div className="aspect-square overflow-hidden rounded-sm bg-secondary p-6 flex items-center justify-center transition-all duration-300 group-hover:bg-accent">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 font-heading text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {brand.name}
              </h3>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default BrandPortfolio;
