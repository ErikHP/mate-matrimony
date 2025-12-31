import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import story1 from "@assets/generated_images/southeast_asian_muslim_couple.png";
import story2 from "@assets/generated_images/african_muslim_couple.png";
import story3 from "@assets/generated_images/middle_eastern_muslim_couple.png";

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-white/80 font-medium tracking-wider uppercase text-lg md:text-xl mb-2 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">They Found Forever</h2>
          </div>
          {/* <Button variant="outline" className="border-white text-primary bg-white hover:bg-white/90 rounded-full px-8">
            Read More Stories <ArrowRight className="w-4 h-4 ml-2" />
          </Button> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              names: "Hassan & Aisha",
              location: "New York, USA",
              quote: "MATE made our dream of finding a compatible partner come true. We got married last year!",
              image: story1,
              objectPosition: "object-contain"
            },
            {
              names: "Karim & Noor",
              location: "California, USA",
              quote: "Beautiful memories started here. We connected instantly and knew it was meant to be.",
              image: story2,
              objectPosition: "object-contain"
            },
            {
              names: "Adnan & Leila",
              location: "Texas, USA",
              quote: "A platform that respects our values and beliefs. Found my perfect match with MATE!",
              image: story3,
              objectPosition: "object-contain"
            }
          ].map((story, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden"
            >
              <div className="w-full aspect-square overflow-hidden bg-white/5">
                <img src={story.image} alt={story.names} className={`w-full h-full ${story.objectPosition} object-center transition-transform duration-700 hover:scale-110`} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-lg italic text-white/90 mb-6">"{story.quote}"</p>
                <div>
                  <h4 className="font-bold text-xl font-heading">{story.names}</h4>
                  <span className="text-sm text-white/70">{story.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}