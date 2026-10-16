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

          <a href="#explore-colleges" className="discovery-cta-btn" id="btn-college-list">
            <span>Explore Colleges</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Column: 4 Cards */}
        <div className="discovery-right">
          <div className="wf-cards-stack">
            {/* Card 01 */}
            <div className="wf-card">
              <div className="wf-card-main-col">
                <div className="wf-card-header-row">
                  <span className="wf-num-badge">01</span>
                  <h3 className="wf-card-title-inline">Build your college profile</h3>
                </div>
                <p className="wf-card-desc">
                  Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--naac-ready">
                  <span className="wf-icon-check">✓</span> NAAC A++ Ready
                </span>
                <span className="wf-badge wf-badge--subtle-outline">Verified</span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="wf-card">
              <div className="wf-card-main-col">
                <div className="wf-card-header-row">
                  <span className="wf-num-badge">02</span>
                  <h3 className="wf-card-title-inline">Students discover and connect</h3>
                </div>
                <p className="wf-card-desc">
                  Students searching for colleges can discover your profile, explore your courses and fee structures and connect directly with your admissions team.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--blue-outline">
                  Connect with students
                </span>
                <span className="wf-badge-sub-text wf-badge-sub-text--green">
                  98% Match
                </span>
              </div>
            </div>

            {/* Card 03 */}
            <div className="wf-card">
              <div className="wf-card-main-col">
                <div className="wf-card-header-row">
                  <span className="wf-num-badge">03</span>
                  <h3 className="wf-card-title-inline">Connect with recruiters for placements</h3>
                </div>
                <p className="wf-card-desc">
                  Connect directly with companies looking to hire from your campus. Share student batches and verify placement metrics.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--purple-outline">
                  Active Recruiters
                </span>
                <span className="wf-badge-sub-text wf-badge-sub-text--purple">
                  3.2x Placement Growth
                </span>
              </div>
            </div>

            {/* Card 04 */}
            <div className="wf-card">
              <div className="wf-card-main-col">
                <div className="wf-card-header-row">
                  <span className="wf-num-badge">04</span>
                  <h3 className="wf-card-title-inline">Track placements in real time</h3>
                </div>
                <p className="wf-card-desc">
                  Track applications, offers and placements across batches in one simple, clean dashboard.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge-red-dot-tag">
                  <span className="red-dot" /> PLACEMENT ANALYTICS
                </span>
                <span className="wf-badge wf-badge--solid-blue-pill">
                  Real-time data • Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
