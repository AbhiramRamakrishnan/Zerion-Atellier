const VisionSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-charcoal-light/50 to-transparent" />
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <p className="text-caption">Vision</p>
            <h2 className="text-editorial-lg text-foreground">
              Built for <span className="text-gradient-navy">Impact</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="line-accent-long" />
          </div>

          <blockquote className="space-y-6">
            <p className="text-editorial-md text-foreground/90 italic font-serif">
              "Zerion Atelier is not built for volume — it is built for impact."
            </p>
          </blockquote>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 border border-border bg-card/50 space-y-4 text-left">
              <h3 className="text-lg font-serif text-foreground">Becoming a Trusted Force</h3>
              <p className="text-body">
                Establishing Zerion Atelier as the definitive name in luxury entertainment 
                and stage production across India and beyond.
              </p>
            </div>
            <div className="p-8 border border-border bg-card/50 space-y-4 text-left">
              <h3 className="text-lg font-serif text-foreground">Connecting Excellence</h3>
              <p className="text-body">
                Bridging elite talent with iconic stages through precision, discretion, 
                and uncompromising professional standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
