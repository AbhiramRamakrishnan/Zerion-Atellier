import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Collaboration = {
  title: string;
  description: string;
  image: string;
};

const collaborations: Collaboration[] = [
  { title: "Echo Pulse", description: "Alternative rock band known for live energy.", image: "/images/band1.jpg" },
//   { title: "Neon Tribe", description: "Electronic fusion collective.", image: "/images/band2.jpg" },
//   { title: "Rhythm Syndicate", description: "Percussion-focused performance group.", image: "/images/band3.jpg" },
//   { title: "Midnight Strings", description: "Indie acoustic ensemble.", image: "/images/band4.jpg" },
//   { title: "Solaris Duo", description: "Ambient electronic producers.", image: "/images/band5.jpg" },
];

export default function CollaborationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
    }, 
    [
      Autoplay({ 
        delay: 4000, 
        stopOnInteraction: false, 
        stopOnMouseEnter: true, 
      })
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section-padding bg-charcoal overflow-hidden">
      <div className="section-container">
        
        {/* Header - Editorial Style */}
        <div className="mb-16 space-y-6 max-w-4xl">
          <div className="space-y-4">
            <p className="text-caption">Artist & Band Collaborations</p>
            <h2 className="text-editorial-lg text-foreground">
              Curated Talent. <span className="text-gradient-navy">Trusted Associations.</span>
            </h2>
          </div>
          
          <div className="line-accent w-24" />
          
          <p className="text-body-lg text-white/70 max-w-2xl">
            Zerion Atelier collaborates with select bands and performance groups
            that meet our standards of discipline and stage excellence.
          </p>
        </div>

        {/* Carousel Wrapper - Relative for Absolute Buttons */}
        <div className="relative px-4 sm:px-0">
          
          {/* Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-6"> 
              {collaborations.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_75%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <div className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500 h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-serif text-foreground tracking-tight">
                        {item.title}
                      </h3>
                      <div className="h-[1px] w-8 bg-primary/30 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Navigation Buttons */}
          {/* Left Button */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-20
                       w-12 h-12 rounded-full border border-white/10 bg-charcoal/60 backdrop-blur-md
                       flex items-center justify-center hover:bg-white hover:text-charcoal 
                       transition-all duration-300 shadow-2xl opacity-0 group-hover:opacity-100 lg:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Button */}
          <button
            onClick={scrollNext}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-20
                       w-12 h-12 rounded-full border border-white/10 bg-charcoal/60 backdrop-blur-md
                       flex items-center justify-center hover:bg-white hover:text-charcoal 
                       transition-all duration-300 shadow-2xl opacity-0 group-hover:opacity-100 lg:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
          
        </div>
      </div>
    </section>
  );
}