const clientProfiles = [
  "Corporate Brands",
  "Government & Public Events",
  "Cultural Festivals",
  "International Collaborations",
  "Film & Music Industry Partners",
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-charcoal">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <p className="text-caption">Client Profiles</p>
            <h2 className="text-editorial-lg text-foreground">
              Who We <span className="text-gradient-navy">Serve</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="line-accent-long" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientProfiles.map((client, index) => (
              <div
                key={index}
                className="p-6 border border-border text-center hover:border-primary hover:bg-card/50 transition-all duration-500"
              >
                <span className="text-foreground font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
