"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { CgClose, CgMenu } from "react-icons/cg";
import Image from "next/image";
import Typo from "../ui/Typo";

const navLinks = [
  { href: "/#index", label: "Index" },
  { href: "/#features", label: "Features" },
  { href: "/#kits", label: "Kits" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#testimonials", label: "Testimonials" },
];

const socialLinks = [
  { href: "https://twitter.com/clicbot", label: "Twitter" },
  { href: "https://www.instagram.com/clicbot/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/clicbot/", label: "Linkedin" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(-1);

  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 40);
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <header>
        <div className="w-full px-8 h-24 flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="fixed left-8 flex items-center gap-2 group z-50"
          >
            <Image
              src="/logo.svg"
              alt="Clicbot Logo"
              width={40}
              height={40}
              className="w-auto h-12"
            />
          </Link>
          <div className="fixed right-8 flex flexr items-center gap-2 z-50">
            <Link href="/pricing" className=" text-sm">
              <Button variant="1" text="Pricing" className="text-sm" />
            </Link>
            <Button
              variant="2"
              text="menu"
              icon={menuOpen ? <CgClose /> : <CgMenu />}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 w-1/3 pt-25 h-full z-40 bg-clicbot-black text-white px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-2 pt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(-1)}
                >
                  <Link
                    href={link.href}
                    className="flex justify-center items-center gap-4 py-4 duration-500"
                    style={{
                      opacity:
                        hoveredLink !== i && hoveredLink > -1 ? "0.1" : "1",
                    }}
                  >
                    <Typo className="text-clicbot-accent">00{i + 1}.</Typo>
                    <Typo tag="h1" className="text-xl">
                      {link.label}
                    </Typo>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-between absolute bottom-5 left-0 w-full px-10"
            >
              {socialLinks.map((link, i) => (
                <Link
                  href={link.href}
                  key={i}
                  className="flex items-center gap-4 py-4 duration-500"
                >
                  <Typo className=" text-clicbot-gray-500 hover:text-clicbot-accent text-sm duration-300">
                    {link.label}
                  </Typo>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
