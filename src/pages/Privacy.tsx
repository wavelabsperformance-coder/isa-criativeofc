import AnimatedSection from "@/components/AnimatedSection";

const Privacy = () => (
  <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
    <div className="container mx-auto px-4 max-w-3xl">
      <AnimatedSection>
        <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
          <p>Last updated: {new Date().getFullYear()}</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as when you contact us via WhatsApp or social media. We may also collect usage data through cookies and analytics tools.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">2. How We Use Your Information</h2>
          <p>We use collected information to respond to inquiries, improve our services, and provide relevant content. We do not sell personal data to third parties.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">3. Data Protection</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">4. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">5. Contact</h2>
          <p>For privacy-related inquiries, please reach out via our contact page.</p>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default Privacy;
