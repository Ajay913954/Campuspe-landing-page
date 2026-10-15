"use client";

export default function Footer() {
  return (
    <footer className="footer-site" id="footer" aria-label="Site footer">
      <div className="footer-site__inner">
        
        {/* Main Grid: Brand + 5 Columns */}
        <div className="footer-main-grid">
          
          {/* Brand info with authentic CampusPe logo */}
          <div className="footer-brand-pane">
            <a href="#" className="footer-brand-link" aria-label="CampusPe Home">
              <img
                src="/logo_campuspe.png"
                alt="CampusPe"
                className="footer-brand-logo-img"
              />
            </a>
            <h4 className="footer-mission-title">
              From choosing a college to finding your next opportunity.
            </h4>
            <p className="footer-mission-desc">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {/* 1. For Students */}
          <div className="footer-nav-col">
            <h5 className="footer-col-title">For Students</h5>
            <ul className="footer-links-list">
              <li><a href="#colleges">Explore Colleges</a></li>
              <li><a href="#jobs">Find Opportunities</a></li>
              <li><a href="#jobs">Internships</a></li>
              <li><a href="#jobs">Full-time Jobs</a></li>
              <li><a href="#jobs">Part-time &amp; Gig</a></li>
              <li><a href="#resume-scanner">Application Tracker</a></li>
            </ul>
          </div>

          {/* 2. For Colleges */}
          <div className="footer-nav-col">
            <h5 className="footer-col-title">For Colleges</h5>
            <ul className="footer-links-list">
              <li><a href="#colleges">List Your College</a></li>
              <li><a href="#colleges">Admissions</a></li>
              <li><a href="#colleges">Fee Collection</a></li>
              <li><a href="#colleges">Placements</a></li>
            </ul>
          </div>

          {/* 3. For Employers */}
          <div className="footer-nav-col">
            <h5 className="footer-col-title">For Employers</h5>
            <ul className="footer-links-list">
              <li><a href="#employers">Post a Job</a></li>
              <li><a href="#employers">Find Talent</a></li>
              <li><a href="#employers">Campus Hiring</a></li>
            </ul>
          </div>

          {/* 4. Company */}
          <div className="footer-nav-col">
            <h5 className="footer-col-title">Company</h5>
            <ul className="footer-links-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          {/* 5. Legal & Policies */}
          <div className="footer-nav-col footer-nav-col--legal">
            <h5 className="footer-col-title">Legal &amp; Policies</h5>
            <ul className="footer-links-list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms &amp; Conditions</a></li>
              <li><a href="#refund">Refund &amp; Cancellation Policy</a></li>
              <li><a href="#cookie">Cookie Policy</a></li>
              <li><a href="#grievance">Grievance Redressal</a></li>
              <li><a href="#disclaimer">Job &amp; Internship Disclaimer</a></li>
              <li>
                <a href="#policies" className="view-all-policies-link">
                  View all policies →
                </a>
              </li>
            </ul>

            {/* Separate policy callout box from Figma */}
            <div className="footer-policy-box">
              Separate user, institution and employer terms can live inside the full Policies page.
            </div>
          </div>

        </div>

        {/* Contact info and audience pill row */}
        <div className="footer-contact-row">
          <div className="footer-contact-pills">
            <a href="mailto:contactus@campuspe.com" className="footer-contact-pill">
              <span className="pill-icon">✉</span>
              <span>contactus@campuspe.com</span>
            </a>
            <a href="tel:+916362606464" className="footer-contact-pill">
              <span className="pill-icon">📞</span>
              <span>+91 6362606464</span>
            </a>
          </div>

          <div className="footer-audience-indicator">
            <span className="green-status-dot" />
            <span className="audience-text">Students • Colleges • Employers</span>
          </div>
        </div>

        {/* Bottom copyright and social media links */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-text">
            © 2026 CampusPe Technologies Pvt. Ltd. Privacy Terms Grievance
          </div>

          <div className="footer-social-icons" aria-label="Social media links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C10.556 0 9 1.444 9 4.667V8z"/>
              </svg>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Radiant ambient bottom glow */}
      <div className="footer-radiant-glow" aria-hidden="true" />
    </footer>
  );
}
