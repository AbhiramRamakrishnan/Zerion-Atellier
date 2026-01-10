import artistDistribution from "@/assets/services/artist-distribution.jpg";
import stageManagement from "@/assets/services/stage-management.jpg";
import sfxDesign from "@/assets/services/sfx-design.jpg";
import creativeDirection from "@/assets/services/creative-direction.jpg";
import eventSecurity from "@/assets/services/event-security.jpg";
import industryAccess from "@/assets/services/industry-access.jpg";

const services = [
  {
    title: "Artist & Musical Band Distribution",
    description: "Strategic representation and placement across prestigious venues nationwide.",
    image: artistDistribution,
  },
  {
    title: "Large-Scale Stage Show Management",
    description: "End-to-end production oversight for high-stakes live entertainment.",
    image: stageManagement,
  },
  {
    title: "Stage SFX Design & Execution",
    description: "Technical effects engineering that transforms performances.",
    image: sfxDesign,
  },
  {
    title: "Stage Designing & Creative Direction",
    description: "Architectural concepts and visual narratives for every production.",
    image: creativeDirection,
  },
  {
    title: "Professional Event Security",
    description: "Trained teams with crowd psychology expertise and safety protocols.",
    image: eventSecurity,
  },
  {
    title: "Industry Access & Networking",
    description: "Confidential pathways to film & music professionals.",
    image: industryAccess,
  },
];

const ServicesSection = () => {
  return (
    <section id="capabilities" className="section-padding bg-charcoal-dark">
      <div className="section-container">
        <div className="max-w-xl mb-20">
          <p className="text-caption mb-4">Core Capabilities</p>
          <h2 className="text-editorial-lg text-foreground">
            Precision <span className="text-gradient-navy">Crafted</span> Services
          </h2>
          <div className="line-accent mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-72 lg:h-80 overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                <span className="text-caption text-primary/70 mb-3">
                  0{index + 1}
                </span>
                <h3 className="text-xl lg:text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-sm text-steel-light max-w-md leading-relaxed">
                  {service.description}
                </p>
                
                {/* Subtle line accent on hover */}
                <div className="w-0 h-px bg-primary mt-6 group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
