"use client";

const collegeCards = [
  {
    num: "01",
    tag: "VERIFIED PROFILE",
    title: "Build your college profile",
    badges: [
      { text: "NAAC A++ Ready", type: "green" },
      { text: "98% Match", type: "blue-outline" },
    ],
    desc: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
  },
  {
    num: "02",
    tag: "DIRECT ENROLL",
    title: "Students discover and connect",
    badges: [
      { text: "Direct Enquiries", type: "blue-subtle" },
      { text: "WHATSAPP / CHAT", type: "green-dot" },
    ],
    desc: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
  },
  {
    num: "03",
    tag: "CAMPUS RECRUITING",
    title: "Recruiters discover your College",
    badges: [
      { text: "500+ Hiring Partners", type: "purple" },
      { text: "Connect Directly", type: "blue-outline" },
    ],
    desc: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
  },
  {
    num: "04",
    tag: "LIVE HUD",
    title: "Track placements in real time",
    badges: [
      { text: "LIVE PLACEMENTS", type: "red-dot" },
      { text: "Students • Interviews • Offers", type: "blue-pill" },
    ],
    desc: "Track students, interviews, offers and placements from one centralized dashboard.",
  },
];

export default function CollegeSection() {
  return (
    <section className="feature-section feature-section--split" id="colleges" aria-label="College Discovery Section">
      <div className="discovery-container">
        
        {/* Left Column */}
        <div className="discovery-left">
          <div className="discovery-tag-pill">
            <span className="dot" aria-hidden="true" />
            <span>02 • FOR COLLEGES</span>
          </div>

          <h2 className="discovery-title">
            Get Discovered<br />
            by <span className="text-blue">Students and Recruiters.</span>
          </h2>

          <p className="discovery-desc">
            Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
          </p>

          <a href="#list-college" className="discovery-cta-btn" id="btn-college-list">
            <span>List Your College</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Column: 4 Cards */}
        <div className="discovery-right">
          <div className="workflow-cards-stack">
            {collegeCards.map((c) => (
              <div className="workflow-card" key={c.num}>
                <div className="workflow-card-header">
                  <div className="workflow-card-left">
                    <span className="workflow-num">{c.num}</span>
                    <span className="workflow-tag">{c.tag}</span>
                  </div>
                  <div className="workflow-badges-row">
                    {c.badges.map((b, i) => (
                      <span key={i} className={`workflow-badge workflow-badge--${b.type}`}>
                        {b.type.includes("dot") && <span className="inner-dot" />}
                        {b.text}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="workflow-card-title">{c.title}</h3>
                <p className="workflow-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
