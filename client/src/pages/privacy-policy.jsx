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

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4" data-testid="text-privacy-policy-title">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">MATE – Muslim Matrimonial & Singles Platform</p>
            <p className="text-sm text-muted-foreground mt-2">Effective Date: 01/01/2026</p>
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
                Welcome to MATE. MATE is a Muslim matrimonial and singles platform designed to facilitate meaningful introductions consistent with Islamic values and ethical conduct. We are committed to protecting your privacy and handling personal data in a lawful, transparent, and secure manner.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy describes how we collect, use, disclose, store, and protect your personal information when you access or use our website, mobile applications, and related services (collectively, the "Services"). By accessing or using MATE, you acknowledge and agree to this Privacy Policy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">1.1 Personal Information</h3>
              <p className="text-muted-foreground mb-2">We may collect information that identifies or relates to you, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Gender</li>
                <li>Marital status</li>
                <li>Location (city, state, country)</li>
                <li>Profile photographs and user-generated content</li>
                <li>Religious, lifestyle, and compatibility preferences (e.g., level of religious practice, dietary preferences, family values)</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">1.2 Account and Profile Information</h3>
              <p className="text-muted-foreground mb-4">
                Information you voluntarily provide when creating or updating your account, such as education, profession, interests, family background, and partner preferences.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">1.3 Communications</h3>
              <p className="text-muted-foreground mb-4">
                Content of messages, inquiries, feedback, and communications exchanged with MATE or other users through the Services.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">1.4 Technical and Usage Information</h3>
              <p className="text-muted-foreground mb-4">
                Automatically collected data including IP address, device identifiers, browser type, operating system, usage logs, access times, and interaction data.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">1.5 Payment and Transaction Information</h3>
              <p className="text-muted-foreground">
                If you purchase paid features or subscriptions, payment-related information is processed securely by third-party payment processors. MATE does not store full payment card numbers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-2">We process personal information for the following purposes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide, operate, and maintain the Services</li>
                <li>To create, manage, and authenticate user accounts</li>
                <li>To facilitate matches, introductions, and communications</li>
                <li>To personalize content and recommendations</li>
                <li>To process payments and subscriptions</li>
                <li>To communicate service updates, security alerts, and administrative messages</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To conduct analytics, research, and platform improvements</li>
                <li>To prevent fraud, abuse, and violations of our Terms of Service</li>
                <li>To comply with legal obligations and enforce our rights</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">3. Legal Bases for Processing (GDPR)</h2>
              <p className="text-muted-foreground mb-2">Where applicable, we process personal data under one or more of the following legal bases:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Your explicit consent</li>
                <li>Performance of a contract</li>
                <li>Compliance with legal obligations</li>
                <li>Legitimate interests pursued by MATE, balanced against your privacy rights</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground">
                MATE uses cookies, pixels, and similar technologies to enable core functionality, analyze usage, and improve user experience. You may control cookies through your browser or device settings; however, disabling cookies may affect certain features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">5. How We Share Information</h2>
              <p className="text-muted-foreground mb-4 font-medium">We do not sell personal information. We may share information only in the following circumstances:</p>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">5.1 With Other Users</h3>
              <p className="text-muted-foreground mb-4">
                Profile information you choose to make visible may be shared with other registered users in accordance with your privacy and visibility settings.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">5.2 Service Providers</h3>
              <p className="text-muted-foreground mb-4">
                With vetted third-party service providers who perform functions such as hosting, analytics, customer support, identity verification, and payment processing, subject to contractual confidentiality and data protection obligations.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">5.3 Legal and Regulatory Requirements</h3>
              <p className="text-muted-foreground mb-4">
                When required by law, court order, or governmental authority, or to protect the rights, safety, or property of MATE, its users, or others.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">5.4 Business Transfers</h3>
              <p className="text-muted-foreground">
                In the event of a merger, acquisition, restructuring, or sale of assets, personal data may be transferred subject to appropriate safeguards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required by law. Account data may be retained for compliance, dispute resolution, and enforcement purposes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">7. Data Security</h2>
              <p className="text-muted-foreground">
                We implement reasonable administrative, technical, and physical safeguards designed to protect personal information. While we strive to use commercially acceptable means to protect data, no system is completely secure, and we cannot guarantee absolute security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">8. Your Rights and Choices</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">8.1 GDPR (EU/UK Users)</h3>
              <p className="text-muted-foreground mb-4">
                You may have the right to access, correct, delete, restrict, or object to processing of your personal data, as well as the right to data portability.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">8.2 CCPA/CPRA (California Residents)</h3>
              <p className="text-muted-foreground mb-4">
                You have the right to know what personal information we collect, request deletion, correct inaccurate data, and opt out of the sale or sharing of personal information (if applicable). MATE does not sell personal information.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">8.3 Exercising Your Rights</h3>
              <p className="text-muted-foreground">
                Requests may be submitted using the contact details below. We may verify your identity before fulfilling requests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">9. Account Deletion and Data Removal</h2>
              <p className="text-muted-foreground">
                You may request deletion of your account at any time through your account settings or by contacting us. Upon verification, we will delete or anonymize personal data, subject to legal and operational retention requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground">
                MATE is intended exclusively for individuals 18 years of age or older. We do not knowingly collect personal information from minors. If such information is identified, it will be deleted promptly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">11. International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries outside your jurisdiction. We implement appropriate safeguards to ensure compliance with applicable data protection laws.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">12. Faith-Based Platform Notice</h2>
              <p className="text-muted-foreground">
                MATE is a values-driven platform intended to support halal, respectful, and ethical interactions. Certain profile fields may relate to religious or lifestyle preferences, which are processed solely to facilitate compatibility and user intent, and not for discriminatory purposes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">13. Third-Party Links</h2>
              <p className="text-muted-foreground">
                The Services may contain links to third-party websites or services. We are not responsible for their privacy practices and encourage you to review their policies independently.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">14. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. Changes become effective upon posting with a revised effective date. Continued use of the Services constitutes acceptance of the updated policy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">15. Contact Information</h2>
              <p className="text-muted-foreground mb-6">For questions or requests regarding this Privacy Policy:</p>
              
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
                      data-testid={`link-privacy-social-${link.name.toLowerCase()}`}
                      aria-label={`Follow us on ${link.name}`}
                    >
                      <img src={link.icon} alt={link.name} className="w-6 h-6 object-contain" />
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6 italic text-center">
                This Privacy Policy is provided for general informational purposes only and does not constitute legal advice. Consult qualified legal counsel to ensure compliance with applicable laws.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
