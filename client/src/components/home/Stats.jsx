import { Heart, Shield, Users, Globe } from "lucide-react";

export function Stats() {
  return (
    <section className="py-12 bg-white border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "25K+", label: "Active Members", icon: Users },
            { number: "15K+", label: "Success Stories", icon: Heart },
            { number: "100%", label: "Verified Profiles", icon: Shield },
            { number: "50+", label: "Ethnicities", icon: Globe },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-bold text-primary font-heading mb-1">
                {stat.number}
              </h4>
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
