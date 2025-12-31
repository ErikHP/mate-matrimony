import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, DollarSign, ArrowRight, Calendar } from "lucide-react";

export function Events() {
  return (
    <section id="events" className="py-24 bg-gradient-to-br from-primary/5 to-transparent">
      <EventsContent />
    </section>
  );
}

function EventsContent() {
  const events = [
    {
      location: "Dallas, Texas",
      date: "January 17, 2026",
      price: "$75.00",
      originalPrice: null,
      url: "https://matematrimony.squarespace.com/events/p/dallas-texas",
      image: "https://images.squarespace-cdn.com/content/v1/6613384deb96d50461d5f527/5aadda88-0447-4406-a721-fc2f95e4b8ba/Dallas+MOTW.jpg"
    },
    {
      location: "Cincinnati, Ohio",
      date: "January 24, 2026",
      price: "$75.00",
      originalPrice: null,
      url: "https://matematrimony.squarespace.com/events/p/cincinnati-ohio",
      image: "https://images.squarespace-cdn.com/content/v1/6613384deb96d50461d5f527/e968365d-b57d-4efb-82c4-a0627bf3cb03/Cincinnati+event+1.jpg"
    },
    {
      location: "Pasadena, California",
      date: "February 14, 2026",
      price: "$80.00",
      originalPrice: "$100.00",
      url: "https://matematrimony.squarespace.com/events/p/pasadena",
      image: "https://images.squarespace-cdn.com/content/v1/6613384deb96d50461d5f527/9662a4e8-fad0-4143-90c2-b297b43b7d31/PASADENA%2C+2026.jpg"
    },
    {
      location: "Sacramento/San Jose, California",
      date: "February 21, 2026",
      price: "$80.00",
      originalPrice: "$100.00",
      url: "https://matematrimony.squarespace.com/events/p/sacramentosan-jose-california",
      image: "https://images.squarespace-cdn.com/content/v1/6613384deb96d50461d5f527/6e8fbaca-a845-4176-90bf-4bfc4e52c549/SAN+JOSE+EVENT.jpg"
    },
    {
      location: "Houston, Texas",
      date: "April 11, 2026",
      price: "$75.00",
      originalPrice: null,
      url: "https://matematrimony.squarespace.com/events/p/houston",
      image: "https://images.squarespace-cdn.com/content/v1/6613384deb96d50461d5f527/8aa6889b-8a4f-4c70-a0ef-7b339184fa6b/Houston+2026.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-lg md:text-xl mb-2 block" data-testid="text-events-label">
            Community Events
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6" data-testid="text-events-title">
            Meet Our Community
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl" data-testid="text-events-description">
            Join us at exclusive MATE Matrimony events across the country. Network, connect, and find your perfect match in person!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((event, i) => (
            <motion.a
              key={i}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              data-testid={`card-event-${i}`}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.location}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {event.originalPrice && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    Sale
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-foreground/70 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">{event.location}</h3>
                </div>

                <div className="flex items-center gap-2 text-foreground/70 mb-6">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">{event.date}</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">{event.price}</span>
                  </div>
                  {event.originalPrice && (
                    <span className="text-sm text-foreground/50 line-through">
                      {event.originalPrice}
                    </span>
                  )}
                </div>

                {/* Button */}
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 text-base" data-testid={`button-get-tickets-${event.location}`}>
                  Get Tickets <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    );
  }
