const reasons = [
  {
    title: "Trusted Networks",
    description: "Access to verified, professional relationships cultivated over years.",
  },
  {
    title: "Confidential Processes",
    description: "Discretion is not an option — it's our foundation.",
  },
  {
    title: "Discipline-Driven Execution",
    description: "No shortcuts, no compromises, no excuses.",
  },
  {
    title: "High-End Aesthetic Standards",
    description: "Every detail reflects refined taste and precision.",
  },
  {
    title: "One-Point Control",
    description: "Single accountability for complex, multi-faceted productions.",
  },
];

const WhySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Title */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-caption">The Difference</p>
            <h2 className="text-editorial-lg text-foreground">
              Why <span className="text-gradient-navy">Zerion</span> Atelier
            </h2>
            <div className="line-accent" />
            <p className="text-body">
              From concept to curtain call, we operate with precision, discretion, and reliability. 
              Our clients value us for our trusted networks, transparent processes, and ability to 
              deliver complex productions without compromise.
            </p>
          </div>

          {/* Right Column - Reasons */}
          <div className="lg:col-span-3 space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-card border border-border hover:border-primary/50 transition-colors duration-500"
              >
                <span className="text-primary font-serif text-xl flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
