"use client";
import { useState } from "react";

export default function MatchSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const steps = [
    {
      num: "01",
      title: "Set your preferences",
      badge: "Smart Profile",
      desc: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.",
    },
    {
      num: "02",
      title: "Discover relevant opportunities",
      badge: "AI Ranked",
      desc: "Explore colleges and career opportunities matched to your profile, interests and goals",
    },
    {
      num: "03",
      title: "Get notified when something fits",
      badge: "Instant Alerts",
      desc: "Get notified when a relevant college or new opportunity is found, so you can act early.",
    },
  ];

  const filters = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];

  const feedItems = [
    {
      id: "iim-b",
      category: "Colleges",
      logoType: "iim",
      title: "IIM Bangalore",
      badge: "Top College",
      badgeType: "purple",
      meta: "MBA  •  Bengaluru  •  ₹ 3L+",
      desc: "India's premier management institute with global exposer...",
      actionLabel: "View Details",
      actionHref: "#colleges",
    },
    {
      id: "google-intern",
      category: "Internships",
      logoType: "google",
      title: "Product Intern",
      badge: "Internship",
      badgeType: "blue",
      meta: "Bengaluru  •  Hybrid  •  ₹ 35K/mo",
      desc: "Work on real products, learn from top engineers and build...",
      actionLabel: "Apply Now",
      actionHref: "#jobs",
    },
    {
      id: "notion-gig",
      category: "Freelance",
      logoType: "notion",
      title: "Marketing Gig",
      badge: "Freelance",
      badgeType: "green",
      meta: "Remote  •  Freelance  •  ₹ 10K - ₹ 25K",
      desc: "Create content and help with social media campaigns for...",
      actionLabel: "View Details",
      actionHref: "#gigs",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? feedItems
      : feedItems.filter((i) => i.category === activeFilter);

  return (
    <section className="feature-section feature-section--discovery" id="for-students" aria-label="Opportunity discovery">
      <div className="discovery-container">
        
        {/* Left Column */}
        <div className="discovery-left">
          <div className="discovery-tag-pill">
            <span className="dot" aria-hidden="true" />
            <span>01 • OPPORTUNITY DISCOVERY</span>
          </div>

          <h2 className="discovery-title">
            Stop searching.<br />
            <span className="text-blue">Start getting matched.</span>
          </h2>

          <p className="discovery-desc">
            Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.
          </p>

          <div className="discovery-steps-list">
            {steps.map((st) => (
              <div className="discovery-step-card" key={st.num}>
                <div className="step-num-box">{st.num}</div>
                <div className="step-content">
                  <div className="step-title-row">
                    <h3 className="step-name">{st.title}</h3>
                    <span className="step-pill-badge">{st.badge}</span>
                  </div>
                  <p className="step-desc-text">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#explore-opportunities" className="discovery-cta-btn" id="btn-explore-opps">
            <span>Explore opportunities</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Column: Authentic Opportunity Feed Card */}
        <div className="discovery-right">
          <div className="feed-window-card">
            
            {/* Header */}
            <div className="feed-header-top">
              <div className="feed-title-group">
                <div className="feed-lightning-icon">⚡</div>
                <div>
                  <h4 className="feed-header-title">CampusPe Opportunity Feed</h4>
                  <p className="feed-header-sub">Colleges &amp; opportunities matched to you</p>
                </div>
              </div>
              <div className="feed-badge-green">
                <span className="green-dot" />
                <span>12 new matches today</span>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="feed-filters-bar" role="tablist">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`feed-filter-btn ${activeFilter === f ? "feed-filter-btn--active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="feed-items-list">
              {(filteredItems.length > 0 ? filteredItems : feedItems).map((item) => (
                <div className="feed-item-card" key={item.id}>
                  <div className="feed-item-logo">
                    {item.logoType === "iim" && (
                      <div className="feed-avatar-iim" title="IIM Bangalore">
                        🏛️
                      </div>
                    )}
                    {item.logoType === "google" && (
                      <div className="feed-avatar-google" title="Google">
                        <svg width="22" height="22" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                        </svg>
                      </div>
                    )}
                    {item.logoType === "notion" && (
                      <div className="feed-avatar-notion" title="Notion">
                        <strong>N</strong>
                      </div>
                    )}
                  </div>

                  <div className="feed-item-body">
                    <div className="feed-item-title-row">
                      <strong className="feed-item-name">{item.title}</strong>
                      <span className={`feed-item-badge feed-item-badge--${item.badgeType}`}>
                        {item.badge}
                      </span>
                    </div>
                    <div className="feed-item-meta">{item.meta}</div>
                    <p className="feed-item-desc">{item.desc}</p>
                  </div>

                  <div className="feed-item-action">
                    <a href={item.actionHref} className="feed-item-btn">
                      {item.actionLabel}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="feed-footer-row">
              <a href="#all-matches" className="feed-view-all-link">
                View all matched opportunities →
              </a>
              <span className="feed-curated-tag">Curated for you • Updated daily</span>
            </div>
          </div>

          {/* Cursive Note with Curved Arrow */}
          <div className="feed-handwritten-note">
            <svg width="28" height="24" viewBox="0 0 32 32" fill="none" className="curly-arrow-icon" aria-hidden="true">
              <path d="M6 22 C6 14, 14 6, 26 10" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" />
              <polyline points="20 7 26 10 22 15" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="note-text">
              A mix of colleges, jobs, internships and gigs — all in one place.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
