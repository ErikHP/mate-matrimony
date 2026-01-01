import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import facebookIcon from "@assets/facebook_1766684978176.png";
import tiktokIcon from "@assets/tiktok_1766449687355.png";
import instagramIcon from "@assets/instagram_1766449679563.png";
import youtubeIcon from "@assets/youtube_1766449193328.png";

const socialLinks = [
  { name: "Facebook", icon: facebookIcon, url: "https://www.facebook.com/share/17qew57xXa/?mibextid=wwXIfr" },
  { name: "TikTok", icon: tiktokIcon, url: "https://www.tiktok.com/@mate.matrimony?_r=1&_t=ZT-92KQ904Okpx" },
  { name: "Instagram", icon: instagramIcon, url: "https://www.instagram.com/matematrimony_usa?igsh=ZG04Z28wd3d2emIw&utm_source=qr" },
  { name: "YouTube", icon: youtubeIcon, url: "https://youtube.com/@matematrimony?si=u8tYgk12J6RuV0I2" }
];

export default function TermsOfService() {
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4" data-testid="text-terms-title">
              Terms of Service & Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">MATE – Muslim Matrimonial & Singles Platform</p>
            <p className="text-sm text-muted-foreground mt-2">Last Updated: January 1, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to MATE ("MATE," "we," "us," or "our"), a Muslim matrimonial and singles platform designed to facilitate halal, respectful, and marriage-focused connections. This document includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li><strong>Part A:</strong> Terms of Service</li>
                <li><strong>Part B:</strong> Privacy Policy</li>
                <li><strong>Part C:</strong> Plain-English Summary (Non-Legal)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed font-medium">
                By accessing or using MATE's website, mobile applications, or related services (collectively, the "Services"), you agree to be legally bound by this document.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">PART A – TERMS OF SERVICE</h2>
              
              <div className="space-y-8">
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">1. Eligibility and Halal Intent</h3>
                  <p className="text-muted-foreground mb-4">By using MATE, you represent and warrant that:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>You are at least 18 years of age (or the age of legal majority in your jurisdiction, if higher).</li>
                    <li>You have the legal capacity to enter into a binding agreement.</li>
                    <li>You are using the Services solely for sincere matrimonial purposes, with the intention of pursuing marriage in a manner consistent with Islamic principles.</li>
                    <li>You are not prohibited from using the Services under any applicable laws.</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-medium">
                    MATE is not a dating or casual-relationship platform. Users engaging in conduct inconsistent with halal matrimonial intent may have their accounts restricted or terminated.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">2. Account Registration and Accuracy</h3>
                  <p className="text-muted-foreground mb-2">
                    You agree to provide truthful, accurate, and complete information and to keep your profile current. Misrepresentation of marital status, identity, age, or intentions is strictly prohibited.
                  </p>
                  <p className="text-muted-foreground">
                    You are responsible for safeguarding your login credentials and all activity conducted under your account.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">3. Islamic Conduct, Wali & Guardian Involvement</h3>
                  <p className="text-muted-foreground mb-4">
                    MATE is designed to support Islamic values, including modesty, respect, and family involvement. By using the Services, you acknowledge and agree that:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>MATE encourages the involvement of a wali, guardian, or family representative, where appropriate and desired by the user.</li>
                    <li>Certain features may allow users to invite or grant limited visibility or access to a wali or trusted guardian.</li>
                    <li>All interactions should remain respectful, modest, and appropriate.</li>
                    <li>Any attempt to exploit, manipulate, pressure, or deceive another user is strictly prohibited.</li>
                    <li>MATE does not verify or guarantee the religious compliance, intentions, or character of any user.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">4. Community Standards and Prohibited Conduct</h3>
                  <p className="text-muted-foreground mb-2">You agree not to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Harass, threaten, abuse, shame, or intimidate other users.</li>
                    <li>Share sexually explicit, obscene, or inappropriate content.</li>
                    <li>Use the Services for casual dating, hookups, solicitation, or commercial activity.</li>
                    <li>Circumvent safeguards, impersonate others, or create fraudulent accounts.</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    MATE reserves the right to moderate content and enforce community standards at its sole discretion.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">5. User Content and License</h3>
                  <p className="text-muted-foreground mb-2">
                    You retain ownership of your content but grant MATE a non-exclusive, worldwide, royalty-free license to host, display, and use such content solely to operate and improve the Services.
                  </p>
                  <p className="text-muted-foreground">
                    You represent that your content does not violate any laws or third-party rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">6. Matchmaking Disclaimer</h3>
                  <p className="text-muted-foreground mb-2">MATE provides a technology platform only. We do not:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Guarantee matches, compatibility, or marriage outcomes.</li>
                    <li>Conduct background, criminal, or religious verification checks unless explicitly stated.</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">All interactions and decisions are solely between users.</p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">7. Payments and Subscriptions</h3>
                  <p className="text-muted-foreground mb-2">If paid features are offered:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Fees are disclosed prior to purchase.</li>
                    <li>Payments are processed by third-party providers.</li>
                    <li>All sales are final and non-refundable, except where required by law.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">8. App Store Compliance (Apple & Google)</h3>
                  <p className="text-muted-foreground mb-2">If you access MATE via the Apple App Store or Google Play:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>These Terms are an agreement between you and MATE, not Apple or Google.</li>
                    <li>Apple and Google have no responsibility for the Services or support.</li>
                    <li>Any claims related to the app must be directed to MATE.</li>
                    <li>You must comply with applicable App Store terms and policies.</li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">9. Termination</h3>
                  <p className="text-muted-foreground">
                    MATE may suspend or terminate accounts at its discretion for violations of these Terms or conduct inconsistent with Islamic or community standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">10. Disclaimers and Limitation of Liability</h3>
                  <p className="text-muted-foreground mb-2 uppercase font-medium">
                    THE SERVICES ARE PROVIDED ON AN "AS IS" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, MATE DISCLAIMS ALL WARRANTIES.
                  </p>
                  <p className="text-muted-foreground uppercase font-medium">
                    MATE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE PRECEDING SIX (6) MONTHS.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">11. Governing Law</h3>
                  <p className="text-muted-foreground">
                    These Terms are governed by the laws of the State of Texas, USA, without regard to conflict-of-law principles.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">PART B – PRIVACY POLICY</h2>
              
              <div className="space-y-8">
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">1. Information We Collect</h3>
                  <p className="text-muted-foreground mb-2">We may collect:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Account information (name, email, age, marital preferences)</li>
                    <li>Profile content and photos</li>
                    <li>Messages and interactions (stored securely)</li>
                    <li>Device, log, and usage data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">2. How We Use Information</h3>
                  <p className="text-muted-foreground mb-2">Your information is used to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Operate and improve the Services</li>
                    <li>Facilitate introductions and communication</li>
                    <li>Provide support and security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">3. Sharing of Information</h3>
                  <p className="text-muted-foreground mb-2">We do not sell personal data. We may share information:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>With other users, as controlled by your privacy settings</li>
                    <li>With service providers (hosting, payments)</li>
                    <li>When required by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">4. Data Security</h3>
                  <p className="text-muted-foreground">
                    We implement reasonable administrative, technical, and organizational safeguards. However, no system is 100% secure.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">5. Your Rights</h3>
                  <p className="text-muted-foreground">
                    Depending on your jurisdiction, you may request access, correction, or deletion of your personal data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">6. Data Retention</h3>
                  <p className="text-muted-foreground">
                    We retain information as long as necessary to provide Services or comply with legal obligations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">PART C – PLAIN-ENGLISH SUMMARY (NOT LEGAL)</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">What is MATE?</h3>
                  <p className="text-muted-foreground">A Muslim matrimonial platform for people sincerely seeking marriage.</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">What's expected of users?</h3>
                  <p className="text-muted-foreground">Be honest, respectful, modest, and serious about marriage. Casual dating is not allowed.</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Can families be involved?</h3>
                  <p className="text-muted-foreground">Yes. MATE supports wali or guardian involvement if users choose.</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Does MATE guarantee marriage?</h3>
                  <p className="text-muted-foreground">No. We help you connect, but outcomes are up to you.</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Is my data safe?</h3>
                  <p className="text-muted-foreground">We take privacy seriously and don't sell your information.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8"
            >
              <div className="bg-primary/5 rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">MATE</h3>
                <p className="text-lg text-foreground mb-4">Connecting Hearts, Guided By Faith</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <a href="tel:+15129131811" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" /> 512-913-1811
                  </a>
                  <a href="https://chat.whatsapp.com/KR7vIehnKFn2ta6CT17Tt3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
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
                      data-testid={`link-terms-social-${link.name.toLowerCase()}`}
                      aria-label={`Follow us on ${link.name}`}
                    >
                      <img src={link.icon} alt={link.name} className="w-6 h-6 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
