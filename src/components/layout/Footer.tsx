import SocialLinks from '../SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Top row: Logo and Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-lg font-serif tracking-tight">
                <span className="text-gradient-navy">Zerion</span>{" "}
                <span className="text-foreground">Atelier</span>
              </span>
            </div>

            {/* Social Links */}
            <SocialLinks className="gap-5" iconSize={18} />
          </div>

          {/* Bottom row: Tagline and Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 pt-6 border-t border-border/50">
            {/* Tagline */}
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Entertainment · Stage Production · Artist Representation
            </p>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © 2026 Zerion Atelier. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
