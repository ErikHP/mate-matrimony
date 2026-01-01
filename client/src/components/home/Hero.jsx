import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/minimalist_muslim_couple_portrait_with_clean_background.png";
import heroImageMobile from "@assets/generated_images/mobile_optimized_muslim_couple_portrait_vertical_format.png";

export function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroImage} />
          <img 
            src={heroImageMobile} 
            alt="Happy Couple" 
            className="w-full h-full object-cover md:object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent mix-blend-multiply opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 px-6 flex items-center justify-center">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-white max-w-2xl text-center"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6 font-medium tracking-wider uppercase text-xs md:text-sm lg:text-xl justify-center px-4 py-3 md:px-6 md:py-4 rounded-full bg-black/30 backdrop-blur-md">
            <span className="w-8 h-[2px] bg-white md:w-12 lg:w-16"></span>
            <span>Trusted • Proven • Secure</span>
            <span className="w-8 h-[2px] bg-white md:w-12 lg:w-16"></span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-white drop-shadow-md">
            Find Your <br/>
            <span className="italic">Perfect Mate</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-xl font-medium mx-auto">
            The most trusted matrimonial service for those serious about marriage. 
            Start your journey to forever today.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cta" data-testid="link-hero-cta" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg font-bold rounded-full shadow-lg" data-testid="button-start-journey">
                Start Your Journey
              </Button>
            </a>
            <a href="#events" data-testid="link-hero-events" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/15 h-14 px-8 text-lg font-medium rounded-full backdrop-blur-sm" data-testid="button-upcoming-events">
                Upcoming Events
              </Button>
            </a>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-12 flex items-center gap-8 text-white justify-center flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7" />
              <span className="text-base md:text-lg font-medium">Verified Profiles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7" />
              <span className="text-base md:text-lg font-medium">Privacy Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7" />
              <span className="text-base md:text-lg font-medium">Family Friendly</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}