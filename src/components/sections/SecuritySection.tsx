const securityFeatures = [
  {
    title: "Professionally Trained Teams",
    description: "Elite bouncer personnel with comprehensive security training and crowd management expertise.",
  },
  {
    title: "Crowd Psychology Awareness",
    description: "Understanding group dynamics to prevent incidents before they occur.",
  },
  {
    title: "Zero-Tolerance Safety Protocols",
    description: "Uncompromising standards that protect artists, guests, and staff.",
  },
  {
    title: "Authority Coordination",
    description: "Seamless collaboration with local authorities and emergency services.",
  },
];

const SecuritySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-caption">Security & Control</p>
              <h2 className="text-editorial-lg text-foreground">
                The Invisible <span className="text-gradient-navy">Shield</span>
              </h2>
            </div>
            
            <div className="line-accent" />
            
            <p className="text-body-lg">
              Security is not an afterthought — it's an invisible but critical layer 
              woven into every production. Our professionally trained teams operate 
              with military precision while maintaining the ambiance of your event.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="grid gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 border-l-2 border-primary/30 hover:border-primary bg-card/30 transition-all duration-500"
              >
                <h3 className="text-foreground font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
