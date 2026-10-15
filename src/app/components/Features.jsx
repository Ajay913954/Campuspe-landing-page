"use client";

const features = [
  {
    id: "feat-ai-matching",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: "AI-Powered Matching",
    description: "Our ML algorithm analyzes skills, preferences and opportunities to connect the right students with the right companies.",
    color: "#1677f9",
    bg: "#eef4ff",
  },
  {
    id: "feat-resume",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "AI Resume Builder",
    description: "Create ATS-optimized resumes in minutes with AI-guided suggestions tailored to your target roles.",
    color: "#8b5cf6",
    bg: "#f3eeff",
  },
  {
    id: "feat-placement",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: "Campus Placement Portal",
    description: "End-to-end placement management for colleges — drive letters, shortlists, schedules and analytics in one place.",
    color: "#10b981",
    bg: "#edfdf5",
  },
  {
    id: "feat-network",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "College-Employer Network",
    description: "Expand your hiring reach with 500+ partner colleges or grow your placement rate with 1200+ companies.",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    id: "feat-analytics",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Real-Time Analytics",
    description: "Track applications, placement rates, hiring pipeline and student performance metrics with live dashboards.",
    color: "#ef4444",
    bg: "#fef2f2",
  },
  {
    id: "feat-interview",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.882v6.236a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"/>
      </svg>
    ),
    title: "AI Interview Prep",
    description: "Practice with AI-powered mock interviews, get instant feedback on communication, content and confidence.",
    color: "#06b6d4",
    bg: "#ecfeff",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features" aria-label="Platform features">
      <div className="section-heading">
        <span className="section-label">POWERFUL FEATURES</span>
        <h2>
          Everything you need to{" "}
          <span>succeed on campus.</span>
        </h2>
        <p>
          From AI resume building to real-time placement analytics, CampusPe gives
          every stakeholder the tools they need to thrive.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feat) => (
          <article
            className="feature-card"
            key={feat.id}
            id={feat.id}
            style={{ "--feat-color": feat.color, "--feat-bg": feat.bg }}
          >
            <div className="feature-icon" aria-hidden="true" style={{ background: feat.bg, color: feat.color }}>
              {feat.icon}
            </div>
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
            <div className="feature-tag" style={{ color: feat.color, background: feat.bg }}>
              Learn more →
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
