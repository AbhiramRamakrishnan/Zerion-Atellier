const PromiseSection = () => {
  const promises = [
    "No overpromising",
    "No shortcuts",
    "No compromise on quality",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light/30 via-transparent to-charcoal-light/30" />
      
      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <p className="text-caption">The Promise</p>
            <h2 className="text-editorial-lg text-foreground">
              Our <span className="text-gradient-navy">Commitment</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="line-accent-long" />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-center gap-4">
                {index > 0 && (
                  <div className="hidden md:block w-px h-8 bg-border" />
                )}
                <span className="text-xl font-serif text-foreground">{promise}</span>
              </div>
            ))}
          </div>

          <p className="text-body max-w-xl mx-auto">
            Every project we undertake reflects our fundamental belief: true excellence 
            cannot be rushed, shortcuts lead to failure, and quality is the only 
            currency that matters in this industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
