"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#colleges", label: "Colleges" },
    { href: "#employers", label: "Employers" },
    { href: "#jobs", label: "Jobs" },
    { href: "#blogs", label: "Blogs" },
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#" className="brand-link" aria-label="CampusPe Home">
          <img
            src="/logo_campuspe.png"
            alt="CampusPe"
            className="brand-logo-img"
          />
        </a>

        <nav className="nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link-item">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#signin" className="nav-signin-btn" id="nav-signin">
            Sign In
          </a>
          <a href="#signup" className="nav-signup-btn" id="nav-signup">
            Sign Up
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          id="nav-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <nav>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu-actions">
            <a href="#signin" className="nav-signin-btn" onClick={() => setMenuOpen(false)}>
              Sign In
            </a>
            <a href="#signup" className="nav-signup-btn" onClick={() => setMenuOpen(false)}>
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
