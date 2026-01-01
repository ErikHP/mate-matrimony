import logoImage from "@assets/MATE_Logo_nobg_1765810147707.png";
import facebookIcon from "@assets/facebook_1766684978176.png";
import tiktokIcon from "@assets/tiktok_1766449687355.png";
import instagramIcon from "@assets/instagram_1766449679563.png";
import youtubeIcon from "@assets/youtube_1766449193328.png";
import playStoreLogoImage from "@assets/google-play_1766684671011.png";
import appStoreLogoImage from "@assets/app-store_1766684674097.png";

export function Footer() {
  const socialLinks = [
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
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                 <img src={logoImage} alt="MATE Matrimony" className="h-8 w-auto object-contain" />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-white/90">
              Connecting hearts, guided by faith. We are dedicated to helping singles find their perfect match in a safe and respectful environment.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all cursor-pointer"
                  data-testid={`link-social-${link.name.toLowerCase()}`}
                  aria-label={`Follow us on ${link.name}`}
                >
                  <img src={link.icon} alt={link.name} className="w-6 h-6 object-contain" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6" data-testid="text-footer-company">Company</h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li><a href="/about" className="hover:text-white hover:underline transition-colors" data-testid="link-footer-about">About Us</a></li>
              <li><a href="/#success-stories" className="hover:text-white hover:underline transition-colors" data-testid="link-footer-stories">Success Stories</a></li>
              <li><a href="/careers" className="hover:text-white hover:underline transition-colors" data-testid="link-footer-careers">Careers</a></li>
              <li><a href="/#cta" className="hover:text-white hover:underline transition-colors" data-testid="link-footer-contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6" data-testid="text-footer-legal">Legal</h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li><a href="#" className="hover:text-white hover:underline transition-colors" data-testid="link-footer-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-colors" data-testid="link-footer-terms">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-colors" data-testid="link-footer-cookies">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-colors" data-testid="link-footer-safety">Safety Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6" data-testid="text-footer-app">Get the App</h4>
            <p className="text-sm mb-4 text-white/90" data-testid="text-footer-app-availability">Available on iOS and Android.<br /><span className="text-xs">Coming Soon</span></p>
            <div className="space-y-3">
              <div className="h-10 w-32 bg-black/20 rounded-lg flex items-center justify-center border border-white/20 cursor-pointer hover:bg-black/30 transition-colors gap-2" data-testid="button-app-store">
                <img src={appStoreLogoImage} alt="App Store" className="w-5 h-5 object-contain" />
                <span className="text-xs font-bold text-white">App Store</span>
              </div>
              <div className="h-10 w-32 bg-black/20 rounded-lg flex items-center justify-center border border-white/20 cursor-pointer hover:bg-black/30 transition-colors gap-2" data-testid="button-google-play">
                <img src={playStoreLogoImage} alt="Play Store" className="w-5 h-5 object-contain" />
                <span className="text-xs font-bold text-white">Play Store</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/80">
          <p>&copy; 2025 MATE Matrimony. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Made with love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}