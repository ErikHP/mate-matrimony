import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Calendar,
  Shield,
  CheckCircle,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import facebookIcon from "@assets/facebook_1766684978176.png";
import tiktokIcon from "@assets/tiktok_1766449687355.png";
import instagramIcon from "@assets/instagram_1766449679563.png";
import youtubeIcon from "@assets/youtube_1766449193328.png";

const socialLinks = [
  {
    name: "Facebook",
    icon: facebookIcon,
    url: "https://www.facebook.com/share/17qew57xXa/?mibextid=wwXIfr",
  },
  {
    name: "TikTok",
    icon: tiktokIcon,
    url: "https://www.tiktok.com/@mate.matrimony?_r=1&_t=ZT-92KQ904Okpx",
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    url: "https://www.instagram.com/matematrimony_usa?igsh=ZG04Z28wd3d2emIw&utm_source=qr",
  },
  {
    name: "YouTube",
    icon: youtubeIcon,
    url: "https://youtube.com/@matematrimony?si=u8tYgk12J6RuV0I2",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-2 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
              data-testid="text-about-title"
            >
              Greetings from MATE!
            </h1>
            <p className="text-2xl text-muted-foreground italic">
              As-salamu alaikum
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-12">
              <p className="text-lg text-foreground mb-6">
                My name is <strong>Zafar Choudhury</strong>, and I'm with MATE.
                You can connect with me professionally on{" "}
                <a
                  href="https://www.linkedin.com/in/zafarchoudhury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
                .
              </p>
              <p className="text-lg text-foreground mb-6">
                My wife and I founded MATE, an organization that helps single
                Muslims get married. We are <strong>NOT matchmakers</strong>—I
                want to be very clear about that. We don't do any matchmaking.
                Instead, we screen and qualify well-educated singles, invite
                them to live, in-person events, and offer them access to our
                extensive database. We <strong>ONLY</strong> work with singles
                in North America—no overseas profiles are accepted at this time.
              </p>
              <p className="text-lg text-foreground mb-6">
                My wife and I have been married for over two decades, and we
                have three children. As educated professionals, we run MATE as a
                passion project with the support of dedicated volunteers, paid
                staff, and local imams across the U.S. and Canada. While we are
                based in Austin, Texas, our chapters are active throughout North
                America.
              </p>
              <p className="text-lg text-foreground">
                Through our live events and online platform, we average{" "}
                <strong>three marriages per month</strong>, with most
                participants matching and getting married within 6 to 12 months.{" "}
                <em>Alhamdulillah</em>, our success rate is very high! You can
                see testimonials, stories, and pictures from successful matches
                on our Instagram and Facebook pages.
              </p>
            </div>

            <h2
              className="text-3xl font-heading font-bold text-primary mb-8 text-center"
              data-testid="text-requirements-title"
            >
              Important Information for Prospective Members
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Please read the following requirements carefully, as they will
              address many common questions:
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Membership Fee
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          All members must pay an annual fee of{" "}
                          <strong>$250</strong>, which covers 12 months from the
                          date of registration.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        This fee provides access to thousands of high-quality
                        profiles and pictures through our app, private Facebook
                        group, Discord server, Telegram, and WhatsApp.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        The fee helps cover background checks and operational
                        costs.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        If you're interested in investing or donating to support
                        our mission, we'd love to hear from you!
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Live Events
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          Our live events are hosted in various cities and are
                          highly anticipated.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          Tickets start at <strong>$25</strong> and must be
                          purchased separately online or at the door.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        Members get early access, discounted tickets, priority
                        registration, preferred seating, and exclusive
                        merchandise.
                      </li>
                      <li className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        Parents/guardians/relatives may attend events only with
                        their children—not on their behalf.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Bios and Photos
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          Members must submit their bio and pictures within{" "}
                          <strong>48 hours</strong> of joining.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          Our data shows that profiles with pictures receive a{" "}
                          <strong>67% higher response rate</strong>.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Inclusivity
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        We welcome individuals of all ages, ethnicities, and
                        backgrounds.
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        This includes those with special needs,
                        converts/reverts, single parents, veterans, divorcees,
                        and widows.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Marital Status Verification
                    </h3>
                    <p className="text-muted-foreground">
                      Divorced members must be legally and Islamically divorced.
                      We do not accept individuals who are only separated or
                      taking a "hiatus" from their marriage.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Profile Picture and Name
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        Members must provide a profile picture and have at least
                        their first name visible to all members.
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        On platforms like our app, WhatsApp, or Facebook, you
                        must upload a real photo or an AI-generated likeness
                        before gaining access.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">7</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Background Checks
                    </h3>
                    <p className="text-muted-foreground">
                      For the safety and security of all members, we conduct
                      background checks, credit checks, and reference checks.
                      Participation is contingent on passing these checks.{" "}
                      <strong>No exceptions will be made.</strong>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Ready to Join MATE?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you're comfortable with these terms, please respond via email
              with:
            </p>
            <div className="bg-white rounded-xl p-6 shadow-md border border-border mb-8 inline-block">
              <p className="text-xl font-semibold text-primary italic">
                "I accept and I acknowledge."
              </p>
            </div>
            <p className="text-muted-foreground mb-8">
              We will then begin the process of welcoming you to MATE!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
              <p className="text-lg text-foreground mb-4">
                Thank you for your interest in MATE!
              </p>
              <p className="text-lg text-foreground mb-6">
                Sincerely,
                <br />
                <strong>Zafar Choudhury</strong>
                <br />
                Co-Founder, MATE
              </p>

              <div className="mb-6">
                <a href="mailto:zafarlovesrecruiting@gmail.com?subject=MATE%20Membership%20Interest">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                    data-testid="button-email-accept"
                  >
                    <Mail className="mr-2 w-5 h-5" /> Send Email to Join
                  </Button>
                </a>
              </div>

              <div className="border-t border-border pt-6 mt-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Contact Information
                </h3>
                <p className="text-2xl font-heading font-bold text-primary mb-4">
                  Connecting Hearts, Guided By Faith
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <a
                    href="tel:+15129131811"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" /> 512-913-1811
                  </a>
                  <a
                    href="https://chat.whatsapp.com/KR7vIehnKFn2ta6CT17Tt3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Group
                  </a>
                </div>

                <div className="flex justify-center gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary transition-all"
                      data-testid={`link-about-social-${link.name.toLowerCase()}`}
                      aria-label={`Follow us on ${link.name}`}
                    >
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="w-6 h-6 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
