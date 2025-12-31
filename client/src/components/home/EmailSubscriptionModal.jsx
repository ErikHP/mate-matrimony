import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import facebookIcon from "@assets/facebook_1766684978176.png";
import tiktokIcon from "@assets/tiktok_1766449687355.png";
import instagramIcon from "@assets/instagram_1766449679563.png";
import youtubeIcon from "@assets/youtube_1766449193328.png";

export function EmailSubscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "";
        const response = await fetch(`${apiUrl}/api/subscribe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        });
        if (response.ok) {
          setIsSubmitted(true);
          setEmail("");
          setTimeout(() => {
            setIsOpen(false);
            setIsSubmitted(false);
          }, 2000);
        }
      } catch (error) {
        console.error("Subscription error:", error);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg transition-colors z-10"
              data-testid="button-close-modal"
              aria-label="Close subscription modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Content */}
            <div className="p-8 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💌</span>
                </div>
              </div>

              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                    Join Our Community
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Subscribe to get updates about new matches, events, and exclusive offers delivered to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      data-testid="input-email-subscription"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-semibold rounded-lg"
                      data-testid="button-subscribe"
                    >
                      Subscribe Now
                    </Button>
                  </form>

                  <p className="text-xs text-gray-500 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-3">Follow us on social media</p>
                    <div className="flex justify-center gap-4">
                      {[
                        {
                          name: "Facebook",
                          icon: facebookIcon,
                          url: "https://www.facebook.com/share/17qew57xXa/?mibextid=wwXIfr"
                        },
                        {
                          name: "TikTok",
                          icon: tiktokIcon,
                          url: "https://www.tiktok.com/@mate.matrimony?_r=1&_t=ZT-92KQ904Okpx"
                        },
                        {
                          name: "Instagram",
                          icon: instagramIcon,
                          url: "https://www.instagram.com/matematrimony_usa?igsh=ZG04Z28wd3d2emIw&utm_source=qr"
                        },
                        {
                          name: "YouTube",
                          icon: youtubeIcon,
                          url: "https://youtube.com/@matematrimony?si=u8tYgk12J6RuV0I2"
                        }
                      ].map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 flex items-center justify-center hover:bg-primary transition-colors rounded-full"
                          data-testid={`link-social-${link.name.toLowerCase()}`}
                          aria-label={`Follow us on ${link.name}`}
                        >
                          <img src={link.icon} alt={link.name} className="w-6 h-6 object-contain" />
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-primary">Welcome!</h3>
                  <p className="text-gray-600">
                    Thank you for subscribing. Check your email for confirmation!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
