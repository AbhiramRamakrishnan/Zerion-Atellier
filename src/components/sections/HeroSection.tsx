import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stage.jpg";
const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Elite stage production with dramatic lighting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          {/* Caption */}
          <p className="text-caption fade-in-up">
            Entertainment · Stage Production · Artist Representation
          </p>

          {/* Main Title */}
          <h1 className="text-editorial-xl fade-in-up-delayed">
            <span className="text-gradient-gold font-sans">Zerion</span>{" "}
            <span className="text-foreground font-sans">Atelier</span>
          </h1>

          {/* Tagline */}
          <p className="text-body-lg max-w-2xl mx-auto fade-in-up-delayed-2 text-base">
            We curate experiences — not just events. Precision-crafted stage productions 
            and elite artist representation for those who demand excellence.
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center fade-in-up-delayed-2">
            <div className="line-accent-long" />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 fade-in-up-delayed-3">
            <Button variant="hero" asChild>
              <a href="#capabilities">Discover Zerion Atelier</a>
            </Button>
            <Button variant="minimal" asChild>
              <a href="#contact">Begin a Conversation</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up-delayed-3">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>;
};
export default HeroSection;