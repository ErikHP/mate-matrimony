import { Card, CardContent } from "@/components/ui/card";
import patternImage from "@assets/generated_images/subtle_islamic_geometric_pattern_texture.png";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url(${patternImage})` }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">How MATE Works</h2>
          <p className="text-lg text-muted-foreground">Finding your partner should be simple and secure. We've optimized every step of the journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Create Profile",
              desc: "Download the App, sign up and set up your profile. Our detailed preferences help us understand exactly what you're looking for.",
            },
            {
              step: "02",
              title: "Connect",
              desc: "Browse compatible matches. Our smart algorithm suggests profiles that align with your values and lifestyle.",
            },
            {
              step: "03",
              title: "Interact",
              desc: "Start a conversation. Use our secure messaging to get to know your potential match safely.",
            }
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
              <CardContent className="p-8 relative h-full bg-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />
                <span className="relative text-6xl font-heading font-bold text-primary/10 mb-6 block">{item.step}</span>
                <h3 className="relative text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="relative text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}