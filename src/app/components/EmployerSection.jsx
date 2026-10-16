"use client";

export default function EmployerSection() {
  return (
    <section
      className="feature-section feature-section--discovery"
      id="employers"
      aria-label="Employer Recruitment Section"
    >
      <div className="discovery-container">
        {/* Left Column */}
        <div className="discovery-left">
          <div className="discovery-tag-pill">
            <span className="dot" aria-hidden="true" />
            <span>03 • FOR EMPLOYERS</span>
          </div>

          <h2 className="discovery-title">
            Stop running<br />
            campus drives.<br />
            <span className="text-blue">Start hiring the right<br />people.</span>
          </h2>

          <p className="discovery-desc">
            Post a role in minutes and reach relevant candidates without the
            time, travel and coordination of traditional hiring. CampusPe helps
            you discover, match and connect with talent from colleges and beyond.
          </p>

          <a href="#post-job" className="discovery-cta-btn" id="btn-employer-post">
            <span>Post a Job</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Column: 4 Cards */}
        <div className="discovery-right">
          <div className="wf-cards-stack">
            {/* Card 01 */}
            <div className="wf-card">
              <div className="wf-card-body">
                <div className="wf-card-meta wf-card-meta--inline">
                  <span className="wf-num">01</span>
                  <h3 className="wf-card-title-inline">Post a role in minutes</h3>
                  <span className="wf-setup-tag">INSTANT SETUP</span>
                </div>
                <p className="wf-card-desc">
                  Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--lightning">
                  <svg className="wf-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <polygon points="9 1.5 3 9 7.5 9 6.5 14.5 13 7 8.5 7 9 1.5" />
                  </svg>
                  5 Min Deployment
                </span>
                <span className="wf-badge wf-badge--subtle">
                  500+ Campus Network
                </span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="wf-card">
              <div className="wf-card-body">
                <div className="wf-card-meta wf-card-meta--inline">
                  <span className="wf-num">02</span>
                  <h3 className="wf-card-title-inline">Receive a matched shortlist</h3>
                  <span className="wf-setup-tag">INSTANT SETUP</span>
                </div>
                <p className="wf-card-desc">
                  Get candidates matched to your role by skills, experience, location and hiring requirements.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--refresh">
                  <svg className="wf-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M14 6.5a6 6 0 1 0-1.5 5.5" />
                    <polyline points="14 3 14 6.5 10.5 6.5" />
                  </svg>
                  Zero CV Clutter
                </span>
                <span className="wf-badge wf-badge--subtle">
                  Tier 1–Tier 3 Parity
                </span>
              </div>
            </div>

            {/* Card 03 */}
            <div className="wf-card">
              <div className="wf-card-body">
                <div className="wf-card-meta wf-card-meta--inline">
                  <span className="wf-num">03</span>
                  <h3 className="wf-card-title-inline">Connect with candidates directly</h3>
                  <span className="wf-setup-tag">INSTANT SETUP</span>
                </div>
                <p className="wf-card-desc">
                  Message, schedule interviews, and move candidates through your pipeline — all in one place.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--chat">
                  <svg className="wf-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M14 10.5a2 2 0 0 1-2 2H5l-3 3V3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7.5z" />
                  </svg>
                  In-App Scheduling
                </span>
                <span className="wf-badge wf-badge--subtle">
                  1-Click Video / Chat
                </span>
              </div>
            </div>

            {/* Card 04 */}
            <div className="wf-card">
              <div className="wf-card-body">
                <div className="wf-card-meta wf-card-meta--inline">
                  <span className="wf-num">04</span>
                  <h3 className="wf-card-title-inline">Reduce your time-to-hire</h3>
                  <span className="wf-setup-tag">INSTANT SETUP</span>
                </div>
                <p className="wf-card-desc">
                  Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--days">
                  &lt;2 DAYS
                </span>
                <span className="wf-badge wf-badge--faster">
                  57% Faster Hiring
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
