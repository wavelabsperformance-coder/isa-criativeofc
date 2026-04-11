import AnimatedSection from "@/components/AnimatedSection";

const CookiePolicy = () => (
  <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
    <div className="container mx-auto px-4 max-w-3xl">
      <AnimatedSection>
        <h1 className="font-display text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
          <p>Last updated: {new Date().getFullYear()}</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help us understand how you use our site.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">2. Cookies We Use</h2>
          <p><strong>Essential cookies:</strong> Required for basic site functionality, such as remembering your cookie preferences.</p>
          <p><strong>Analytics cookies:</strong> Help us understand visitor behavior to improve the site experience.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">3. Managing Cookies</h2>
          <p>You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">4. Contact</h2>
          <p>For questions about our cookie practices, please reach out via our contact page.</p>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default CookiePolicy;
