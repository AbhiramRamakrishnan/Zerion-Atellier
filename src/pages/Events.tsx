import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const events = [
  {
    id: 1,
    title: "COMING SOON",
    status: "upcoming",
    date: "",
    venue: "",
    description: "Stay tuned for our next big event! Details will be revealed soon.",
  },
  // {
  //   id: 2,
  //   title: "Corporate Gala Night",
  //   status: "active",
  //   date: "January 8-10, 2024",
  //   venue: "Grand Ballroom",
  //   description: "Exclusive corporate event with premium stage production.",
  // },
];

const statusColors = {
  past: "bg-muted text-muted-foreground",
  active: "bg-primary text-primary-foreground",
  upcoming: "bg-accent text-accent-foreground",
};

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              Events & Productions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our past, active, and upcoming events that showcase our commitment to excellence in stage production.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full ${
                          statusColors[event.status as keyof typeof statusColors]
                        }`}
                      >
                        {event.status}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-serif mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h2>
                    <p className="text-muted-foreground mb-2">{event.description}</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-foreground">Venue:</span> {event.venue}
                    </p>
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

export default Events;
