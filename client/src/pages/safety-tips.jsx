import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, MessageCircle, AlertTriangle, DollarSign, UserCheck, MapPin, Heart, Flag, Scale, CheckCircle } from "lucide-react";

export default function SafetyTips() {
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4" data-testid="text-safety-tips-title">
              MATE Safety Tips
            </h1>
            <p className="text-lg text-muted-foreground">Comprehensive Legal Version – Terms of Service Aligned</p>
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
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                At MATE, we are committed to fostering a safe, respectful, and values-driven environment for Muslim singles seeking marriage and meaningful connections. While MATE implements reasonable safeguards and community standards, online interactions inherently involve risks. These Safety Tips are provided for informational purposes only and do not replace individual judgment or responsibility.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                By accessing or using the MATE platform (the "Platform"), you acknowledge that you are solely responsible for your interactions with other users, both online and offline.
              </p>
            </motion.div>

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
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">1. Personal Information Protection</h3>
                    <p className="text-muted-foreground mb-3">Users should exercise caution when sharing personal information. Do not disclose sensitive or confidential details, including but not limited to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                      <li>Home or work addresses</li>
                      <li>Financial or banking information</li>
                      <li>Government-issued identification</li>
                      <li>Login credentials or verification codes</li>
                    </ul>
                    <p className="text-muted-foreground font-medium">MATE will never request your password or financial information via messages.</p>
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
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">2. Platform-Based Communication</h3>
                    <p className="text-muted-foreground">
                      For your protection, we encourage users to communicate exclusively through MATE's in-platform messaging tools until sufficient trust has been established. Communications conducted outside the Platform may limit MATE's ability to review or investigate disputes or safety concerns.
                    </p>
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
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">3. Fraud and Suspicious Conduct Awareness</h3>
                    <p className="text-muted-foreground mb-3">Be alert to behaviors that may indicate fraud, deception, or malicious intent, including:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Requests for money, gifts, loans, or investments</li>
                      <li>Claims of urgent personal or financial emergencies</li>
                      <li>Attempts to quickly move conversations off the Platform</li>
                      <li>Inconsistent, vague, or evasive responses</li>
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
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">4. Prohibition on Financial Transactions</h3>
                    <p className="text-muted-foreground">
                      MATE does not facilitate financial transactions between users. Users should never send money, gift cards, cryptocurrency, or financial information to other users under any circumstances.
                    </p>
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
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">5. Identity Verification Disclaimer</h3>
                    <p className="text-muted-foreground">
                      Although MATE may implement moderation or verification tools, we do not guarantee the identity, background, or intentions of any user. Users are responsible for independently verifying information and exercising sound judgment.
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
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">6. In-Person Meetings</h3>
                    <p className="text-muted-foreground mb-3">If you decide to meet another user in person:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Meet in a public, well-lit location</li>
                      <li>Inform a trusted third party of your plans</li>
                      <li>Arrange independent transportation</li>
                      <li>Leave immediately if you feel uncomfortable or unsafe</li>
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
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">7. Respectful Conduct and Islamic Etiquette</h3>
                    <p className="text-muted-foreground">
                      MATE is intended for lawful, respectful, and marriage-oriented interactions consistent with Islamic values. Harassment, explicit content, hate speech, coercion, or abusive conduct is strictly prohibited.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Flag className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">8. Reporting and Enforcement</h3>
                    <p className="text-muted-foreground">
                      Users are encouraged to report any behavior that violates these Safety Tips, the Terms of Service, or community standards. MATE reserves the right to investigate and take appropriate action, including suspension or termination of accounts.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">9. Limitation of Liability</h3>
                    <p className="text-muted-foreground">
                      To the fullest extent permitted by law, MATE disclaims responsibility for user conduct, offline interactions, or damages arising from Platform use. Use of the Platform is at your own risk.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 bg-primary/10 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Quick Safety Tips</h2>
              <p className="text-center text-muted-foreground mb-6">(Short, User-Friendly Version)</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Protect your personal and financial information",
                  "Never send money or gifts to other users",
                  "Be cautious of users who rush trust or avoid transparency",
                  "Keep conversations on MATE until you feel comfortable",
                  "Meet in public places and tell someone you trust",
                  "Trust your instincts—leave if something feels wrong",
                  "Report suspicious or inappropriate behavior immediately"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 border-t border-border pt-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 text-center">Safety Guidance Rooted in Islamic Values</h2>
              <p className="text-center text-muted-foreground mb-6">(Faith-Aligned Language)</p>
              
              <div className="bg-primary/5 rounded-xl p-6 mb-6">
                <p className="text-muted-foreground text-center italic mb-4">
                  At MATE, we encourage interactions guided by <strong>akhlaq</strong> (good character), <strong>amanah</strong> (trustworthiness), and <strong>ihsan</strong> (respect and integrity).
                </p>
              </div>

              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Engage with sincerity and honest intentions",
                  "Maintain modesty, dignity, and respectful communication",
                  "Avoid private interactions that may lead to harm or discomfort",
                  "Involve family, guardians, or trusted advisors when appropriate",
                  "Do not engage in deception, manipulation, or financial requests"
                ].map((guidance, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{guidance}</span>
                  </li>
                ))}
              </ul>

              <p className="text-center text-muted-foreground mt-6 font-medium">
                Marriage is a serious covenant, and users are encouraged to act with responsibility, patience, and <strong>taqwa</strong> (God-consciousness) in all interactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 bg-gray-100 rounded-xl p-6"
            >
              <h2 className="text-xl font-bold text-primary mb-4 text-center">Your Safety Matters at MATE</h2>
              <p className="text-center text-muted-foreground mb-4">(Mobile App & Onboarding Safety Screen)</p>
              
              <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {[
                  "Keep personal and financial details private",
                  "Never send money or gifts",
                  "Watch for suspicious or pressured behavior",
                  "Use in-app messaging",
                  "Meet in public and tell someone you trust",
                  "Report concerns instantly"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6 italic">
                By continuing, you acknowledge that you are responsible for your interactions and agree to follow MATE's Safety Guidelines and Terms of Service.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
