const NetworkSection = () => {
  const networkItems = [
    "National Top-Tier Artist Access",
    "Structured Professional Networks",
    "International Music Industry Collaborations",
    "Film & Entertainment Partnerships",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-caption">Artist & Talent Network</p>
              <h2 className="text-editorial-lg text-foreground">
                Access to <span className="text-gradient-navy">Excellence</span>
              </h2>
            </div>
            
            <div className="line-accent" />
            
            <p className="text-body-lg">
              Zerion Atelier maintains privileged relationships with India's most sought-after 
              performers and emerging talents. Our structured international connections within 
              the global music ecosystem ensure seamless access to world-class artists.
            </p>

            <p className="text-body">
              Every collaboration is handled with absolute discretion, ensuring both artists 
              and clients receive the confidentiality and professionalism they expect.
            </p>
          </div>

          {/* Right Content - Network List */}
          <div className="space-y-6">
            {networkItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-6 border-l-2 border-primary/30 hover:border-primary bg-card/30 hover:bg-card/50 transition-all duration-500"
              >
                <span className="text-primary font-serif text-2xl">0{index + 1}</span>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
