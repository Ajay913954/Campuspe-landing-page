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
            Skip messy spreadsheets and lengthy campus visits. Hire verified
            students from accredited colleges across India on a single platform.
            CampusPe helps you discover, match and connect with vetted talent
            from colleges and beyond.
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
              <div className="wf-card-main-col">
                <div className="wf-card-header-row">
                  <span className="wf-num-badge">01</span>
                  <h3 className="wf-card-title-inline">Post a role in minutes</h3>
                  <span className="wf-tag-pill wf-tag-pill--blue">INSTANT SETUP</span>
                </div>
                <p className="wf-card-desc">
                  Define your role, required skills and preferred colleges. Your job is live and matching begins in minutes, not weeks.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--green-lightning">
                  ⚡ Hire in under 7 days
                </span>
                <span className="wf-badge wf-badge--subtle-gray">
                  Verified Candidates
                </span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="wf-card">
              <div className="wf-card-main-col">
                <div className="wf-card-header-row">
                  <span className="wf-num-badge">02</span>
                  <h3 className="wf-card-title-inline">Receive a matched shortlist</h3>
                  <span className="wf-tag-pill wf-tag-pill--purple">PRE-SCREENED ONLY</span>
                </div>
                <p className="wf-card-desc">
                  Get candidates ranked by skill fit, test scores and preferences, not just keywords and resumes.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--purple-solid">
                  100% Pre-Screened
                </span>
                <span className="wf-badge-sub-text wf-badge-sub-text--purple">
                  AI Rank: Top 10%
                </span>
              </div>
            </div>

            {/* Card 03 */}
            <div className="wf-card">
              <div className="wf-card-main-col">
                <div className="wf-card-header-row">
                  <span className="wf-num-badge">03</span>
                  <h3 className="wf-card-title-inline">Connect with candidates directly</h3>
                  <span className="wf-tag-pill wf-tag-pill--blue">INTERVIEW READY</span>
                </div>
                <p className="wf-card-desc">
                  Message and schedule interviews with candidates directly through the platform — no intermediate layers.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--blue-outline">
                  Direct Candidate Chat
                </span>
                <span className="wf-badge-sub-text wf-badge-sub-text--blue">
                  3-Day Response Avg
                </span>
              </div>
            </div>

            {/* Card 04 */}
            <div className="wf-card">
              <div className="wf-card-main-col">
                <div className="wf-card-header-row">
                  <span className="wf-num-badge">04</span>
                  <h3 className="wf-card-title-inline">Reduce your time to hire</h3>
                  <span className="wf-tag-pill wf-tag-pill--blue">ZERO NO-SHOWS</span>
                </div>
                <p className="wf-card-desc">
                  Verified test scores, prescreened candidates and direct communication shorten your hiring cycle significantly.
                </p>
              </div>
              <div className="wf-card-aside">
                <span className="wf-badge wf-badge--blue-box-bold">
                  7 DAYS
                </span>
                <span className="wf-badge-sub-text wf-badge-sub-text--green">
                  92% Interview Turnout
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
