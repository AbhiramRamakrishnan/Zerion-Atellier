import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Ensure this path matches your file structure
import img1 from "@/assets/collaborators/img1.jpeg";

type Collaboration = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const collaborations: Collaboration[] = [
  { 
    title: "KAANTHA", 
    description: "An Alternative, Indie Folk collective redefining the modern Malayalam groove with power-packed live energy.", 
    image: img1,
    href: "/artist/kaantha" 
  },
  // Add other bands here...
];

export default function CollaborationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      skipSnaps: false,
    }, 
    [
      Autoplay({ 
        delay: 5000, 
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
    <section className="section-padding bg-charcoal-dark overflow-hidden">
      <div className="section-container">
        
        {/* Header - Aligned for wider card layout */}
        <div className="mb-20 space-y-6">
          <div className="space-y-4">
            <p className="text-caption">Artist Representation</p>
            <h2 className="text-editorial-lg text-foreground">
              Curated Talent. <span className="text-gradient-navy">Elite Execution.</span>
            </h2>
          </div>
          <div className="line-accent w-24" />
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            We bridge the gap between world-class talent and iconic stages, 
            ensuring every collaboration meets the Zerion standard of precision.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group">
          
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-8"> 
              {collaborations.map((item, index) => (
                <div 
                  key={index} 
                  // MOBILE: 90% (Show hint of next) | TABLET: 70% | DESKTOP: 50% (Wide Feature)
                  className="flex-[0_0_90%] min-w-0 pl-8 sm:flex-[0_0_70%] lg:flex-[0_0_50%]"
                >
                  <Link 
                    to={item.href}
                    className="block group/card relative bg-card/30 border border-white/5 overflow-hidden transition-all duration-700 hover:border-primary/40 h-full min-h-[550px] md:min-h-[650px]"
                  >
                    {/* Wider Cinematic Aspect Ratio */}
                    <div className="relative aspect-[16/10] md:aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain grayscale-[40%] group-hover/card:grayscale-0 transition-all duration-1000 group-hover/card:scale-105"
                        loading="lazy"
                      />
                      {/* Sophisticated Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-80" />
                    </div>
                    
                    <div className="p-8 md:p-12 space-y-6">
                      <div className="space-y-2">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">Featured Artist</p>
                        <h3 className="text-3xl md:text-4xl font-serif text-foreground tracking-tight group-hover/card:text-gradient-navy transition-all duration-500">
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="h-px w-12 bg-primary/30 group-hover/card:w-24 group-hover/card:bg-primary transition-all duration-700" />
                      
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md line-clamp-3 font-light">
                        {item.description}
                      </p>

                      <div className="pt-4 flex items-center gap-2 text-caption text-primary opacity-0 group-hover/card:opacity-100 translate-y-4 group-hover/card:translate-y-0 transition-all duration-500">
                        View Portfolio <ChevronRight size={14} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Hidden on mobile, visible on hover/desktop */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <button
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-white/10 bg-charcoal-dark/80 backdrop-blur-xl
                         flex items-center justify-center text-white hover:bg-primary hover:border-primary
                         transition-all duration-500 pointer-events-auto shadow-2xl 
                         opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border border-white/10 bg-charcoal-dark/80 backdrop-blur-xl
                         flex items-center justify-center text-white hover:bg-primary hover:border-primary
                         transition-all duration-500 pointer-events-auto shadow-2xl
                         opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}