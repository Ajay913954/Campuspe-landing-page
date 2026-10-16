"use client";

export default function CollegeSection() {
  return (
    <section
      className="feature-section feature-section--discovery"
      id="colleges"
      aria-label="College Discovery Section"
    >
      <div className="discovery-container">
        {/* Left Column */}
        <div className="discovery-left">
          <div className="discovery-tag-pill">
            <span className="dot" aria-hidden="true" />
            <span>02 • FOR COLLEGES</span>
          </div>

          <h2 className="discovery-title">
            Get Discovered<br />
            by <span className="text-blue">Students and<br />Recruiters.</span>
          </h2>

          <p className="discovery-desc">
            Put your college in front of students searching for the right course
            and recruiters looking for the right talent. CampusPe helps you
            build your presence, attract enquiries and connect with
            opportunities.
          </p>

          <a href="#list-college" className="discovery-cta-btn" id="btn-college-list">
            <span>List Your College</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Column: 4 Cards */}
        <div className="discovery-right">
          <div className="wf-cards-stack">
            {/* Card 01 */}
            <div className="wf-card">
              <div className="wf-card-body">
                <div className="wf-card-meta">
                  <span className="wf-num">01</span>
                  <span className="wf-tag">VERIFIED PROFILE</span>
                </div>
                <h3 className="wf-card-title">Build your college profile</h3>
                <p className="wf-card-desc">
                  Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--naac">
                  <svg className="wf-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <circle cx="8" cy="8" r="6" />
                    <polyline points="5.5 8 7 9.5 10.5 6" />
                  </svg>
                  NAAC A++ Ready
                </span>
                <span className="wf-badge wf-badge--match">98% Match</span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="wf-card">
              <div className="wf-card-body">
                <div className="wf-card-meta">
                  <span className="wf-num">02</span>
                  <span className="wf-tag">DIRECT ENROLL</span>
                </div>
                <h3 className="wf-card-title">Students discover and connect</h3>
                <p className="wf-card-desc">
                  Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--enquiries">
                  <svg className="wf-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <path d="M14 10.5a2 2 0 0 1-2 2H5l-3 3V3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7.5z" />
                  </svg>
                  Direct Enquiries
                </span>
                <span className="wf-badge wf-badge--whatsapp">
                  <span className="wf-badge-dot wf-badge-dot--green" />
                  WHATSAPP / CHAT
                </span>
                <span className="wf-card-subnote">Avg. response: &lt;15 min</span>
              </div>
            </div>

            {/* Card 03 */}
            <div className="wf-card">
              <div className="wf-card-body">
                <div className="wf-card-meta">
                  <span className="wf-num">03</span>
                  <span className="wf-tag">CAMPUS RECRUITING</span>
                </div>
                <h3 className="wf-card-title">Recruiters discover your College</h3>
                <p className="wf-card-desc">
                  Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--purple-icon">
                  <svg className="wf-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <rect x="2.5" y="4" width="11" height="9.5" rx="1.5" />
                    <path d="M5.5 4V2.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V4" />
                    <line x1="8" y1="8" x2="8" y2="10" />
                  </svg>
                  500+ Hiring Partners
                </span>
                <span className="wf-badge wf-badge--connect">
                  <svg className="wf-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <circle cx="8" cy="8" r="5" />
                    <line x1="8" y1="3" x2="8" y2="13" />
                    <line x1="3" y1="8" x2="13" y2="8" />
                  </svg>
                  Connect Directly
                </span>
              </div>
            </div>

            {/* Card 04 */}
            <div className="wf-card">
              <div className="wf-card-body">
                <div className="wf-card-meta">
                  <span className="wf-num">04</span>
                  <span className="wf-tag">LIVE HUD</span>
                </div>
                <h3 className="wf-card-title">Track placements in real time</h3>
                <p className="wf-card-desc">
                  Track students, interviews, offers and placements from one centralized dashboard.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--live">
                  <span className="wf-badge-dot wf-badge-dot--red" />
                  LIVE PLACEMENTS
                </span>
                <span className="wf-badge wf-badge--blue-solid">
                  Students · Interviews · Offers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
