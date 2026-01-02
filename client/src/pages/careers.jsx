import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Briefcase, Users, Mic, Edit, Megaphone, Bug, Headphones, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobOpenings = [
  { title: "Community Manager / Moderator", icon: Users },
  { title: "Event Coordinator (Virtual & In-Person)", icon: Mic },
  { title: "Matchmaking Advisor (Non-counseling)", icon: Users },
  { title: "Content Writer / Editor", icon: Edit },
  { title: "Social Media & Marketing Associate", icon: Megaphone },
  { title: "App & Website QA Testers", icon: Bug },
  { title: "Customer Support Representative", icon: Headphones },
  { title: "Volunteer Ambassadors (City-based)", icon: MapPin },
];

export default function Careers() {
  const scrollToJobs = () => {
    document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6" data-testid="text-careers-title">
              Build Your Future While Finding Your Match
            </h1>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-careers-intro">
              At MATE, we believe stability, growth, and purpose go hand-in-hand with building a meaningful life and marriage. Explore career opportunities, professional growth resources, and Muslim-friendly employers—all curated for our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToJobs}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                data-testid="button-explore-jobs"
              >
                Explore Jobs <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                data-testid="button-upgrade-premium"
              >
                <Sparkles className="mr-2 w-5 h-5" /> Contact For Opportunities
              </Button>
            </div>
                      </motion.div>
        </div>
      </section>

      <section id="job-listings" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4" data-testid="text-openings-title">
              Current Openings
            </h2>
            <p className="text-muted-foreground">Join our team and make a difference in the Muslim community</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/5 rounded-xl p-6 hover:bg-primary/10 transition-all cursor-pointer group"
                data-testid={`card-job-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <job.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-border">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center" data-testid="text-hub-title">
                Welcome to the MATE Career Hub
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                At MATE, we believe that finding the right partner goes hand-in-hand with building a stable, fulfilling life. Our Career Hub connects members with professional opportunities, community-minded employers, and resources to grow your skills and advance your career—all while aligning with Islamic values.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" /> Explore Opportunities
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Jobs from Muslim-friendly and values-aligned employers
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Remote, flexible, and family-friendly positions
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Internships, apprenticeships, and early career roles
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Entrepreneurship and business opportunities
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" /> Resources for Your Growth
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Career coaching & mentorship
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Resume and LinkedIn review
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Professional development webinars
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Networking & hiring events
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-primary mb-2">Our Commitment</h3>
                <p className="text-sm text-muted-foreground">
                  MATE provides this platform as a community resource. While we strive to maintain high-quality, legitimate listings, members are responsible for verifying all information and ensuring that roles meet their personal and religious standards.
                </p>
              </div>

              <p className="text-center text-lg text-foreground font-medium">
                Start exploring today and take the next step in both your career and your life journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
