import { Button } from "@/components/ui/button";
import playStoreLogoImage from "@assets/google-play_1766684671011.png";
import appStoreLogoImage from "@assets/app-store_1766684674097.png";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 shadow-2xl border border-border relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-red-400 to-primary" />
           <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
           <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
           
           <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 relative z-10">Start Your Story Today</h2>
           <p className="text-lg text-muted-foreground mb-8 relative z-10">Join millions of singles finding their perfect match.</p>
           
           <div className="mb-8 p-6 bg-primary/5 rounded-2xl relative z-10">
             <p className="text-sm md:text-base text-foreground mb-4 font-semibold">Get in touch with Us</p>
             <div className="space-y-2 text-sm md:text-base text-muted-foreground">
               <p><a href="tel:+15129131811" className="text-primary hover:underline">512-913-1811</a> (Call or Text)</p>
               <p><a href="mailto:matematrimonyusa@gmail.com" className="text-primary hover:underline">matematrimonyusa@gmail.com</a></p>
             </div>
           </div>
           
           <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-10">
             {/* Play Store Button */}
             <motion.div
               className="flex flex-col items-center"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-3 hover:bg-gradient-to-br hover:from-primary/20 hover:to-primary/10 transition-all cursor-pointer" data-testid="button-android-cta">
                 <img src={playStoreLogoImage} alt="Play Store" className="w-20 h-20 object-contain" />
               </div>
               <p className="text-sm font-semibold text-foreground">Play Store</p>
               <p className="text-xs text-muted-foreground">Coming Soon</p>
             </motion.div>

             {/* App Store Button */}
             <motion.div
               className="flex flex-col items-center"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-3 hover:bg-gradient-to-br hover:from-primary/20 hover:to-primary/10 transition-all cursor-pointer" data-testid="button-ios-cta">
                 <img src={appStoreLogoImage} alt="App Store" className="w-20 h-20 object-contain rounded-lg" />
               </div>
               <p className="text-sm font-semibold text-foreground">App Store</p>
               <p className="text-xs text-muted-foreground">Coming Soon</p>
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}