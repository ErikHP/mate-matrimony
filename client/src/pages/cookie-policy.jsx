import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function CookiePolicy() {
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4" data-testid="text-cookie-policy-title">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground">MATE – Muslim Matrimonial & Singles Platform</p>
            <p className="text-sm text-muted-foreground mt-2">Last Updated: 01/01/2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-muted-foreground leading-relaxed">
                This Cookie Policy explains how MATE ("MATE," "we," "us," or "our") uses cookies and similar tracking technologies when you access or use our website, mobile applications, and related services (collectively, the "Services").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This Cookie Policy forms part of our Privacy Policy and Terms of Service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1.1 What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files stored on your device when you visit a website or use an application. Cookies enable recognition of your device, enhance functionality, and improve user experience.
              </p>
              <p className="text-muted-foreground">Cookies may be:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li><strong>Session Cookies</strong> (deleted when you close your browser); or</li>
                <li><strong>Persistent Cookies</strong> (stored for a defined duration).</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1.2 Categories of Cookies Used</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">a. Strictly Necessary Cookies</h3>
                  <p className="text-muted-foreground mb-2">Required for core functionality, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>User authentication and account security</li>
                    <li>Fraud detection and abuse prevention</li>
                    <li>Session management</li>
                    <li>Compliance with legal obligations</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2 italic">Legal basis: Contractual necessity and legitimate interest.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">b. Analytics & Performance Cookies</h3>
                  <p className="text-muted-foreground">Used to understand platform usage and improve performance. Data is aggregated and anonymized where feasible.</p>
                  <p className="text-sm text-muted-foreground mt-2 italic">Legal basis: User consent (where required).</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">c. Functional Cookies</h3>
                  <p className="text-muted-foreground mb-2">Enable enhanced personalization, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Language and region preferences</li>
                    <li>Profile settings</li>
                    <li>Saved matchmaking preferences</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2 italic">Legal basis: User consent or legitimate interest.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">d. Advertising & Targeting Cookies</h3>
                  <p className="text-muted-foreground">May be used to deliver relevant advertisements and measure marketing effectiveness.</p>
                  <p className="text-sm text-muted-foreground mt-2 italic">Legal basis: Explicit consent (opt-in).</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1.3 Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                Cookies may be placed by vetted third parties such as analytics providers, security services, or payment processors. These parties process data under their own privacy policies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1.4 Similar Technologies</h2>
              <p className="text-muted-foreground mb-2">We may also use:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Web beacons / pixels</li>
                <li>SDKs (for mobile apps)</li>
                <li>Device identifiers</li>
              </ul>
              <p className="text-muted-foreground mt-2">These technologies serve purposes similar to cookies.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1.5 User Choices & Cookie Control</h2>
              <p className="text-muted-foreground mb-2">You may manage cookies by:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Using our cookie preference manager (where available)</li>
                <li>Adjusting browser or device settings</li>
                <li>Withdrawing consent at any time</li>
              </ul>
              <p className="text-muted-foreground mt-4 font-medium">Disabling cookies may limit platform functionality.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1.6 Jurisdictional Compliance</h2>
              <p className="text-muted-foreground mb-2">MATE complies with applicable data protection laws, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>GDPR & UK GDPR</li>
                <li>CCPA/CPRA</li>
                <li>GCC data protection principles (where applicable)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1.7 Updates</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy periodically. Continued use of the Services constitutes acceptance of updates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1.8 Contact</h2>
              <p className="text-muted-foreground">
                Email: <a href="mailto:privacy@matematrimony.com" className="text-primary hover:underline">privacy@matematrimony.com</a>
              </p>
              <p className="text-muted-foreground">
                Website: <a href="https://matematrimony.com" className="text-primary hover:underline">www.matematrimony.com</a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">2. Cookie Consent Banner Language</h2>
              <div className="bg-gray-100 rounded-xl p-6 mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">Short Banner (EU / UK / GCC)</h3>
                <p className="text-muted-foreground italic">
                  "We use cookies to ensure essential functionality, analyze usage, and personalize your experience. You may accept all cookies, reject non-essential cookies, or manage your preferences."
                </p>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">Preferences Modal Categories</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Strictly Necessary (Always On)</li>
                <li>Analytics & Performance</li>
                <li>Functionality</li>
                <li>Advertising & Marketing</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">Consent Logging Clause</h3>
              <p className="text-muted-foreground">
                Your consent choices are recorded and may be updated at any time through your account settings or browser controls.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">3. Mobile App Tracking Addendum</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">Mobile-Specific Data Collection</h3>
              <p className="text-muted-foreground mb-2">In addition to cookies, the MATE mobile app may collect:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Device identifiers (IDFA, GAID)</li>
                <li>App interaction events</li>
                <li>Crash logs and performance metrics</li>
                <li>Push notification tokens</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">Mobile Consent</h3>
              <p className="text-muted-foreground mb-2">Where required by law, users will be prompted to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Grant or deny tracking permissions</li>
                <li>Opt in or out of targeted advertising</li>
                <li>Control notifications via device settings</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-2">Cross-Platform Data Use</h3>
              <p className="text-muted-foreground">
                Data collected via mobile apps and websites may be combined to maintain account continuity and improve matchmaking services.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
