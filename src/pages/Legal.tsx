import AnimatedSection from "@/components/AnimatedSection";

const Legal = () => (
  <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32">
    <div className="container mx-auto px-4 max-w-3xl">
      <AnimatedSection>
        <h1 className="font-display text-4xl font-bold mb-8">Legal Notice</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
          <p>Last updated: {new Date().getFullYear()}</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">Website Owner</h2>
          <p>ISA Creative Edits & Animation<br />Professional video editing, VFX and animation services.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">Contact</h2>
          <p>For business inquiries, please contact via WhatsApp or Instagram.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">Disclaimer</h2>
          <p>The information on this website is provided for general purposes only. While we strive to keep information current and accurate, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the content.</p>
          <h2 className="text-foreground font-heading text-xl font-semibold mt-8">External Links</h2>
          <p>This website may contain links to external sites. We are not responsible for the content or privacy practices of those sites.</p>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default Legal;
