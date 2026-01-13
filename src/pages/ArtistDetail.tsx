import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Instagram, Youtube, Music, ShieldCheck, Zap } from "lucide-react";
import { collaborations } from "@/data/collaborations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const ArtistDetail = () => {
  const { slug } = useParams();
  const artist = collaborations.find((a) => a.slug === slug);

  if (!artist) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-caption hover:text-white transition-colors mb-12 group fade-in-up">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Atelier
          </Link>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Visual Column */}
            <div className="lg:col-span-7 fade-in-up">
              <div className="relative aspect-[4/5] overflow-hidden border border-border">
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover grayscale-[20%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4 fade-in-up-delayed">
                <p className="text-caption">{artist.category}</p>
                <h1 className="text-editorial-xl text-gradient-navy uppercase tracking-tighter">{artist.name}</h1>
                <div className="line-accent" />
              </div>

              <p className="text-body-lg italic fade-in-up-delayed-2">"{artist.tagline}"</p>
              
              <div className="space-y-6 text-body fade-in-up-delayed-2">
                <p>{artist.description}</p>
              </div>

              {/* Technical Specifications (The 'Zerion' Touch) */}
              <div className="p-8 border border-border bg-card/30 space-y-6 fade-in-up-delayed-3">
                <h3 className="text-caption text-white">Production Specs</h3>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Zap size={16} className="text-primary" />
                    <span className="text-muted-foreground">SFX: {artist.specs.sfx}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <ShieldCheck size={16} className="text-primary" />
                    <span className="text-muted-foreground">Security: {artist.specs.security}</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <div className="flex gap-4">
                    <a href={artist.links.instagram} className="hover:text-primary transition-colors"><Instagram size={18} /></a>
                    <a href={artist.links.youtube} className="hover:text-primary transition-colors"><Youtube size={18} /></a>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="mailto:zerionnetworkofficial@gmail.com">Request Booking</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtistDetail;