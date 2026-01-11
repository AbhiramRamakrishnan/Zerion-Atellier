const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-charcoal">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-caption">The Brand</p>
              <h2 className="text-editorial-lg text-foreground">
                Authority Through <span className="text-gradient-navy">Precision</span>
              </h2>
            </div>
            
            <div className="line-accent" />
            
            {/* Changed from text-body-lg to custom brightness */}
            <p className="text-lg md:text-xl leading-relaxed text-white/90 font-sans">
              At Zerion Atelier, we curate experiences — not just events. Founded by Mr. Mahajan MS 
              and officially established in 2026, Zerion Atelier is a Kerala-based, India-rooted 
              entertainment and stage production company with a refined national and international network.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:pt-16">
            {/* Changed from text-body to custom brightness */}
            <p className="text-base leading-relaxed text-white/70 font-sans">
              We specialize in artist and musical band distribution, large-scale stage show management, 
              bespoke stage & SFX design, and elite event security solutions. Our approach blends 
              creative excellence with disciplined execution, ensuring every production meets the 
              highest professional standards.
            </p>
            
            <p className="text-base leading-relaxed text-white/70 font-sans">
              With strong access to leading artists and musical bands across India, and structured 
              international industry connections — including collaborations within the global music 
              ecosystem — Zerion Atelier offers clients a seamless and confidential pathway to 
              world-class talent.
            </p>

            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <p className="text-2xl font-serif text-primary">2026</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Established</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-serif text-primary">India</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Rooted</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-serif text-primary">Global</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Connected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
