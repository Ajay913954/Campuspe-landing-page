"use client";

const employerCards = [
  {
    num: "01",
    tag: "INSTANT SETUP",
    title: "Post a role in minutes",
    badges: [
      { text: "✦ 5 Min Deployment", type: "green" },
      { text: "500+ Campus Network", type: "subtle" },
    ],
    desc: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
  },
  {
    num: "02",
    tag: "INSTANT SETUP",
    title: "Receive a matched shortlist",
    badges: [
      { text: "Zero-CV Clutter", type: "purple" },
      { text: "Tier 1-Tier 3 Parity", type: "subtle" },
    ],
    desc: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
  },
  {
    num: "03",
    tag: "INSTANT SETUP",
    title: "Connect with candidates directly",
    badges: [
      { text: "In-App Scheduling", type: "blue-outline" },
      { text: "1-Click Video / Chat", type: "subtle" },
    ],
    desc: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
  },
  {
    num: "04",
    tag: "INSTANT SETUP",
    title: "Reduce your time-to-hire",
    badges: [
      { text: "<2 DAYS", type: "blue-solid" },
      { text: "57% Faster Hiring", type: "green-text" },
    ],
    desc: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
  },
];

export default function EmployerSection() {
  return (
    <section className="feature-section feature-section--split" id="employers" aria-label="Employer Recruitment Section">
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
            <span className="text-blue">Start hiring the right people.</span>
          </h2>

          <p className="discovery-desc">
            Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
          </p>

          <a href="#post-job" className="discovery-cta-btn" id="btn-employer-post">
            <span>Post a Job</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Column: 4 Cards */}
        <div className="discovery-right">
          <div className="workflow-cards-stack">
            {employerCards.map((c) => (
              <div className="workflow-card" key={c.num}>
                <div className="workflow-card-header">
                  <div className="workflow-card-left">
                    <span className="workflow-num">{c.num}</span>
                    <span className="workflow-card-title-inline">{c.title}</span>
                    <span className="workflow-setup-tag">{c.tag}</span>
                  </div>
                  <div className="workflow-badges-row">
                    {c.badges.map((b, i) => (
                      <span key={i} className={`workflow-badge workflow-badge--${b.type}`}>
                        {b.text}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="workflow-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
