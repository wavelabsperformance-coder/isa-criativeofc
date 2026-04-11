import AnimatedSection from "@/components/AnimatedSection";

const Terms = () => (
  <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
    <div className="container mx-auto px-4 max-w-3xl">
      <AnimatedSection>
        <h1 className="font-display text-4xl font-bold mb-8">Terms of Use</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
          <p>Last updated: {new Date().getFullYear()}</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">1. Acceptance of Terms</h2>
          <p>By accessing this website, you agree to these terms. If you do not agree, please do not use the site.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">2. Intellectual Property</h2>
          <p>All content on this website, including videos, images, animations and text, is owned by ISA Creative Edits & Animation and protected by copyright law.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">3. Use of Content</h2>
          <p>You may not reproduce, distribute or create derivative works from our content without prior written permission.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">4. Limitation of Liability</h2>
          <p>We are not liable for any damages arising from the use of this website or the information provided herein.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">5. Changes</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of updated terms.</p>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default Terms;
