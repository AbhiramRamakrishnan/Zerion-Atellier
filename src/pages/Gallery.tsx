import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "",
    category: "",
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop",
  },
  // {
  //   id: 2,
  //   type: "image",
  //   title: "Corporate Event Lighting",
  //   category: "Corporate",
  //   src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop",
  // },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
              Visual Showcase
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              Gallery
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated collection of our finest work, capturing the essence of unforgettable experiences we've created.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs uppercase tracking-wider text-primary mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
