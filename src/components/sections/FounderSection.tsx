const FounderSection = () => {
  return (
    <section className="section-padding bg-charcoal">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Left - Title */}
            <div className="md:col-span-1 space-y-4">
              <p className="text-caption">Leadership</p>
              <div className="line-accent" />
            </div>

            {/* Right - Content */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-editorial-md text-foreground">Mr. Mahajan MS</h2>
                <p className="text-primary text-sm uppercase tracking-wider">Founder & Director</p>
              </div>

              <p className="text-body">
                Leadership built on experience, patience, clarity, and long-term vision. 
                Under Mr. Mahajan MS's direction, Zerion Atelier has been established 
                with a singular focus: to create an entertainment and production company 
                that operates on principles of excellence rather than volume.
              </p>

              <blockquote className="border-l-2 border-primary pl-6 py-2 italic font-serif text-foreground/80">
                "True authority in this industry is earned through consistent delivery, 
                unwavering discretion, and the discipline to never compromise on quality."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
