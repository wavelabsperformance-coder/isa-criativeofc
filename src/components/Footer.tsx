import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-bold mb-3">ISA Creative</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Video editing, VFX & animation for campaigns, music videos and digital content.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Pages</h4>
          <div className="flex flex-col gap-2">
            <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
            <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Use</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
            <Link to="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Legal Notice</Link>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ISA Creative Edits & Animation. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/isabelle_carvalhoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/isabelle-carvalho/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
