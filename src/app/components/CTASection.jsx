"use client";

export default function CTASection() {
  return (
    <section className="cta-wrapper" aria-label="Support and Call to Action">
      
      {/* 1. Still have questions? Glass Card using CTA.png visual or interactive layer */}
      <div className="glass-support-container">
        <div className="glass-support-card">
          <h2 className="glass-support-title">Still have questions?</h2>
          <p className="glass-support-desc">
            Our support team is here to help you succeed. Get in touch anytime.
          </p>

          <div className="glass-support-actions">
            <a
              href="mailto:contactus@campuspe.com"
              className="support-pill support-pill--primary"
              id="btn-contact-support"
            >
              <span className="pill-label">Contact Support</span>
              <span className="pill-circle pill-circle--white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </a>

            <a
              href="tel:+916362606464"
              className="support-pill support-pill--outline"
              id="btn-schedule-call"
            >
              <span className="pill-label">Schedule a Call</span>
              <span className="pill-circle pill-circle--blue">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Ready for what's next? Card */}
      <div className="ready-next-container">
        <div className="ready-next-card">
          <div className="ready-next-text">
            <h3>Ready for what&apos;s next?</h3>
            <p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p>
          </div>

          <div className="ready-next-actions">
            <a href="#colleges" className="ready-btn ready-btn--primary" id="btn-explore-colleges">
              <span>Explore Colleges</span> <span className="arrow">→</span>
            </a>
            <a href="#jobs" className="ready-btn ready-btn--primary" id="btn-find-opps">
              <span>Find Opportunities</span> <span className="arrow">→</span>
            </a>
            <a href="#colleges" className="ready-btn ready-btn--outline" id="btn-list-college">
              <span>List Your College</span> <span className="arrow">→</span>
            </a>
            <a href="#employers" className="ready-btn ready-btn--outline" id="btn-post-job">
              <span>Post a Job</span> <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
