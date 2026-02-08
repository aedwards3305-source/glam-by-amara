import {
  PiInstagramLogo,
  PiTiktokLogo,
  PiPinterestLogo,
  PiHeart,
} from "react-icons/pi";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl tracking-wide">
              Diamond <span className="text-blush-400 italic">Beauty Makeup</span>
            </span>
            <p className="font-body text-gray-400 text-sm leading-relaxed mt-4 max-w-xs">
              Luxury makeup artistry for weddings, editorials, and life&apos;s
              most beautiful moments. Based in Springfield, VA — serving the DMV area and beyond.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-body text-sm text-gray-400 hover:text-blush-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg mb-4">Follow Me</h4>
            <div className="flex gap-3">
              {[
                { Icon: PiInstagramLogo, label: "Instagram" },
                { Icon: PiTiktokLogo, label: "TikTok" },
                { Icon: PiPinterestLogo, label: "Pinterest" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-blush-400 hover:text-blush-400 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-gray-400 mt-6">
              hello@diamondbeautymakeup.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Diamond Beauty Makeup. All rights
            reserved.
          </p>
          <p className="font-body text-xs text-gray-500 flex items-center gap-1">
            Made with <PiHeart className="w-3 h-3 text-blush-400" /> by Osprey
            Software
          </p>
        </div>
      </div>
    </footer>
  );
}
