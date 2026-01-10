const productionPhases = [
  {
    phase: "Concept",
    title: "Concept Development",
    description: "Strategic vision and creative ideation tailored to your objectives.",
  },
  {
    phase: "Design",
    title: "Technical Planning & Stage Engineering",
    description: "Architectural precision meets innovative design solutions.",
  },
  {
    phase: "Create",
    title: "Lighting, SFX & Visual Design",
    description: "Immersive environments crafted through cutting-edge technology.",
  },
  {
    phase: "Execute",
    title: "On-Ground Execution & Show Control",
    description: "Flawless delivery with real-time production management.",
  },
  {
    phase: "Secure",
    title: "Risk Management & Crowd Security",
    description: "Comprehensive safety protocols and professional security deployment.",
  },
];

const ProductionSection = () => {
  return (
    <section className="section-padding bg-charcoal relative">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <p className="text-caption">Production Excellence</p>
          <h2 className="text-editorial-lg text-foreground">
            From <span className="text-gradient-navy">Concept</span> to Curtain Call
          </h2>
          <div className="flex justify-center mt-6">
            <div className="line-accent-long" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {productionPhases.map((item, index) => (
              <div key={index} className="relative group">
                {/* Dot on timeline */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-primary bg-charcoal rounded-full group-hover:bg-primary transition-colors duration-300 z-10" />
                
                {/* Content Card */}
                <div className={`p-6 space-y-4 ${index % 2 === 0 ? 'lg:pb-24' : 'lg:pt-24'}`}>
                  <span className="text-caption text-primary/60">{item.phase}</span>
                  <h3 className="text-lg font-serif text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
