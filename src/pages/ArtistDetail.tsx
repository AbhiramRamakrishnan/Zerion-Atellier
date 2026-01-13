import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Instagram, Youtube, Music } from "lucide-react";
import { collaborations } from "@/data/collaborations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const ArtistDetail = () => {
  const { slug } = useParams();
  const artist = collaborations.find((a) => a.slug === slug);

  if (!artist) return <div className="h-screen bg-background" />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          {/* Simple Navigation */}
          <Link to="/" className="inline-flex items-center gap-2 text-caption hover:text-white transition-colors mb-12 group fade-in-up">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Atelier
          </Link>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Image Section */}
            <div className="lg:col-span-7 fade-in-up">
              <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] overflow-hidden border border-border">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover grayscale-[30%]" 
                />
              </div>
            </div>

            {/* Narrative Section */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4 fade-in-up-delayed">
                <p className="text-caption">{artist.category}</p>
                <h1 className="text-editorial-xl text-gradient-navy uppercase tracking-tighter">
                  {artist.name}
                </h1>
                <div className="line-accent" />
              </div>

              <div className="space-y-6 fade-in-up-delayed-2">
                <p className="text-body-lg italic text-foreground/90 font-serif">
                  "{artist.tagline}"
                </p>
                <p className="text-body leading-relaxed text-muted-foreground">
                  {artist.description}
                </p>
              </div>

              {/* Social & Booking CTA */}
              <div className="pt-8 border-t border-border flex flex-wrap items-center gap-8 fade-in-up-delayed-3">
                <div className="flex gap-6 text-muted-foreground">
                  <a href={artist.links.instagram} className="hover:text-primary transition-colors"><Instagram size={22} /></a>
                  <a href={artist.links.youtube} className="hover:text-primary transition-colors"><Youtube size={22} /></a>
                  <a href={artist.links.spotify} className="hover:text-primary transition-colors"><Music size={22} /></a>
                </div>
                <Button variant="hero" className="px-8" asChild>
                  <a href="mailto:zerionnetworkofficial@gmail.com">Request Representation</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Personnel Grid - Purely Artist Focused */}
          <div className="mt-32 space-y-12 fade-in-up-delayed-3">
            <div className="text-center">
              <p className="text-caption mb-2">The Musicians</p>
              <h2 className="text-editorial-md uppercase tracking-widest">The Collective</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {artist.lineup?.map((member) => (
                <div key={member.name} className="p-8 bg-card/10 border border-border/50 hover:border-primary/40 transition-all group">
                  <p className="text-primary text-[10px] uppercase tracking-[0.2em] mb-3">{member.role}</p>
                  <h4 className="font-serif text-xl text-white mb-4 group-hover:text-primary transition-colors">{member.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtistDetail;