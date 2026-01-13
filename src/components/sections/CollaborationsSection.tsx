import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/collaborators/img1.jpeg";

type Collaboration = {
  title: string;
  description: string;
  image: string;
  href: string; // Added href property
};

const collaborations: Collaboration[] = [
  { 
    title: "KAANTHA", 
    description: "Alternative rock band known for live energy.", 
    image: img1,
    href: "/artist/kaantha" // Example path
  },
  // Add other bands here...
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
        
        {/* Header */}
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

        {/* Carousel Wrapper */}
        <div className="relative px-4 sm:px-0 group"> {/* Added group here for button hover logic */}
          
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-6"> 
              {collaborations.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_75%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  {/* WRAPPED IN ANCHOR TAG */}
                  {/* ... inside the map function ... */}
                  <a 
                    href={item.href}
                    className="block group/card relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 h-full 
                              min-h-[500px] md:min-h-[550px]" // Forces a taller minimum height
                  >
                    {/* Aspect ratio changed from 4/3 to 3/4 for a taller portrait look */}
                    <div className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover grayscale-[50%] group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="p-6 md:p-8 space-y-4"> {/* Increased padding for better breathing room */}
                      <h3 className="text-xl md:text-2xl font-serif text-foreground tracking-tight group-hover/card:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="h-[1px] w-8 bg-primary/30 group-hover/card:w-12 group-hover/card:bg-primary transition-all duration-500" />
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
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