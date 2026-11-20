import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-clicbot-black text-clicbot-white">
      <div className="max-w-350 mx-auto px-6 lg: md:px-12">
        {/* Top bar */}
        <div className="py-16 lg: md:py-24 grid grid-cols-1 lg: md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg: md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-8 h-8 bg-clicbot-accent rounded-sm flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="2" width="10" height="7" rx="1" fill="white" />
                  <circle cx="5.5" cy="5.5" r="1" fill="#0057ff" />
                  <circle cx="10.5" cy="5.5" r="1" fill="#0057ff" />
                  <rect
                    x="6"
                    y="10"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="white"
                  />
                  <rect
                    x="2"
                    y="10"
                    width="2"
                    height="3"
                    rx="0.5"
                    fill="white"
                  />
                  <rect
                    x="12"
                    y="10"
                    width="2"
                    height="3"
                    rx="0.5"
                    fill="white"
                  />
                </svg>
              </div>
              <span
                className="font-display text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Clicbot
              </span>
            </Link>
            <p className="text-clicbot-gray-300 text-sm leading-relaxed max-w-xs">
              ClicBot is a modular robot kit made by KEYi Tech — 11
              click-together modules, 1000+ possible robots, and one mission:
              make building irresistible.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {["Facebook", "Instagram", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-clicbot-gray-700 flex items-center justify-center hover:border-clicbot-accent hover:text-clicbot-accent transition-colors text-clicbot-gray-500 capitalize text-xs font-mono"
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-mono uppercase tracking-widest text-clicbot-gray-500 mb-5">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-clicbot-gray-300 hover:text-clicbot-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-clicbot-gray-700 py-6 flex justify-center">
          <p className="text-xs text-clicbot-gray-500 font-mono">
            © {new Date().getFullYear()} Clicbot Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
