"use client";

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Building2,
  Users,
  Briefcase,
  Newspaper,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems = ["Features", "Pricing", "Landlords", "Tenants", "Contact",];

  const aboutSubItems = [
  {
    label: "About Qejafiti",
    path: "/about",
    description: "Learn about our mission and vision.",
    icon: Building2,
  },
  {
    label: "Our Team",
    path: "/team",
    description: "Meet the people building Qejafiti.",
    icon: Users,
  },
  {
    label: "Careers",
    path: "/careers",
    description: "Join our growing team.",
    icon: Briefcase,
  },
  {
    label: "Blog",
    path: "/blog",
    description: "Product updates and rental insights.",
    icon: Newspaper,
  },
  {
    label: "Security",
    path: "/security",
    description: "How we protect your data.",
    icon: ShieldCheck,
  },
];

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setAboutOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setAboutOpen(false), 150);
  };

  return (
    <nav className="bg-[#111] text-white shadow-lg">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12 xl:px-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-white">
          Rental<span className="text-green-500">MS</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-10 text-lg font-semibold md:flex">
          {navItems.slice(0, 4).map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-300 transition-colors duration-200 hover:text-lime-300"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* About mega-dropdown */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setAboutOpen((prev) => !prev)}
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 text-gray-300 transition-colors duration-200 hover:text-lime-300"
            >
              About
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${aboutOpen ? "rotate-180 text-lime-300" : ""}`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute left-1/2 top-full z-50 mt-4 w-[640px] -translate-x-1/2 origin-top transition-all duration-200 ease-out ${
                aboutOpen
                  ? "translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-2xl shadow-black/50">
                <div className="grid grid-cols-5">
                  {/* Links grid */}
                  <div className="col-span-3 grid grid-cols-1 gap-1 p-4">
                    {aboutSubItems.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={() => setAboutOpen(false)}
                          className="group flex items-start gap-4 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-white/5"
                        >
                          <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-lime-300 transition-colors duration-200 group-hover:bg-green-500/10">
                            <Icon size={18} strokeWidth={2} />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-base font-semibold text-white transition-colors duration-200 group-hover:text-lime-300">
                              {sub.label}
                            </span>
                            <span className="mt-0.5 text-sm font-normal text-gray-400">
                              {sub.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Featured / CTA panel */}
                  <div className="col-span-2 flex flex-col justify-between bg-gradient-to-br from-green-500/10 via-white/5 to-transparent p-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-lime-300">
                         Why Qejafiti
                      </p>
                      <p className="mt-3 text-lg font-bold leading-snug text-white">
                        Smarter rental management for everyon
                      </p>
                      <p className="mt-2 text-sm font-normal leading-relaxed text-gray-400">
                        Manage properties, tenants, rent collection, maintenance,
                        and reporting from one modern platform.
                      </p>
                    </div>
                    <Link
                      to="/who-we-are"
                      onClick={() => setAboutOpen(false)}
                      className="mt-6 flex items-center gap-2 text-sm font-bold text-lime-300 transition-colors duration-200 hover:text-lime-200"
                    >
                      Learn more about us
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {navItems.slice(4).map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-300 transition-colors duration-200 hover:text-lime-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/get-started">
            <Button
              size="lg"
              className="rounded-xl bg-green-500 px-8 py-4 font-bold text-black shadow-lg transition-all duration-200 hover:bg-lime-400"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg p-3 text-3xl text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-lime-300"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#111] px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            {navItems.slice(0, 4).map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 transition-colors duration-200 hover:text-lime-300"
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* About accordion (mobile) */}
            <li>
              <button
                type="button"
                onClick={() => setMobileAboutOpen((prev) => !prev)}
                aria-expanded={mobileAboutOpen}
                className="flex w-full items-center justify-between text-gray-300 transition-colors duration-200 hover:text-lime-300"
              >
                About
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180 text-lime-300" : ""}`}
                />
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileAboutOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <ul className="flex min-h-0 flex-col gap-1 border-l border-white/10 pl-4">
                  {aboutSubItems.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <li key={sub.label}>
                        <Link
                          to={sub.path}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileAboutOpen(false);
                          }}
                          className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-base font-medium text-gray-400 transition-colors duration-200 hover:bg-white/5 hover:text-lime-300"
                        >
                          <Icon size={16} className="flex-shrink-0" />
                          {sub.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            {navItems.slice(4).map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 transition-colors duration-200 hover:text-lime-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link to="/get-started">
              <Button
                size="lg"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-xl bg-green-500 px-8 py-4 font-bold text-black shadow-lg transition-all duration-200 hover:bg-lime-400"
              >
                Start Trading
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;