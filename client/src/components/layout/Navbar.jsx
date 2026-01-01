import { Button } from "@/components/ui/button";
import logoImage from "@assets/MATE_Logo_nobg_1765810147707.png";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: "How it Works", href: "/#how-it-works" },
    { label: "Success Stories", href: "/#success-stories" },
    { label: "Events", href: "/#events" },
    { label: "Contact Us", href: "/#cta" }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };



  return (
    <motion.nav 
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 shadow-md" 
          : "bg-white/90 shadow-sm"
      } border-border`}
      animate={{
        y: scrolled ? 0 : 0,
        boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.1)" : "0 1px 2px rgba(0,0,0,0.05)"
      }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" data-testid="button-logo">
          <motion.div 
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={logoImage} alt="MATE Matrimony" className="h-14 w-auto object-contain" />
          </motion.div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-10 text-foreground/80 flex-1 justify-center">
          {menuItems.map((item) => (
            <motion.a 
              key={item.label}
              href={item.href} 
              className="text-lg font-medium hover:text-primary transition-colors whitespace-nowrap relative"
              whileHover={{ color: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
              data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Right Side - Get Started Button + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a href="/#cta">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-3 sm:px-6 shadow-md shadow-primary/20 text-xs lg:text-sm h-10" data-testid="button-get-started-navbar">
                Get Started
              </Button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 hover:bg-primary/5 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="sm:hidden border-t border-border bg-white/95 backdrop-blur-md overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="container mx-auto px-6 py-4 space-y-3">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-foreground/80 hover:text-primary font-medium transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 8, color: "hsl(var(--primary))" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}