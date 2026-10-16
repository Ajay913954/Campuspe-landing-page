"use client";
import { useState } from "react";

export default function Hero() {
  const [activeCard, setActiveCard] = useState("card-job");

  const cards = [
    {
      id: "card-college",
      badge: "Coming Soon",
      badgeType: "outline-blue",
      title: "College",
      desc: "Explore colleges, courses,fees, placements & more",
      features: [
        "Search by course, location, fees",
        "Connect directly with colleges",
        "Improve student placements",
      ],
      cta: "Join Waitlist",
      ctaIcon: "🔔",
      ctaType: "solid-blue",
    },
    {
      id: "card-job",
      badge: "Available Now",
      badgeType: "solid-blue",
      title: "I'm Looking for a Job",
      desc: "Upload your resume. We'll find jobs that fit you.",
      features: [
        "Jobs from 1000+ sources",
        "AI powered matching",
        "WhatsApp & email alerts",
      ],
      cta: "Explore Jobs",
      ctaIcon: "→",
      ctaType: "solid-blue",
      hasDocIllustration: true,
    },
    {
      id: "card-hiring",
      badge: "Coming Soon",
      badgeType: "outline-blue",
      title: "I'm Hiring",
      desc: "Connect with colleges and find candidates — from students to graduates.",
      features: [
        "Connect directly with colleges",
        "Find the right candidates",
        "Simplify your hiring",
      ],
      cta: "Join Waitlist",
      ctaIcon: "🔔",
      ctaType: "solid-blue",
      hasCodeIllustration: true,
    },
  ];

  const stats = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      value: "800+",
      label: "Students",
      bg: "#f3e8ff",
      color: "#9333ea",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
      value: "130+",
      label: "colleges",
      bg: "#e0f2fe",
      color: "#0284c7",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
        </svg>
      ),
      value: "100+",
      label: "jobs & internships",
      bg: "#dcfce7",
      color: "#16a34a",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      ),
      value: "100%",
      label: "Safe & Trusted",
      bg: "#ffedd5",
      color: "#ea580c",
    },
  ];

  return (
    <section className="hero" aria-label="CampusPe Hero Showcase">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-blob hero-bg-blob--1" />
        <div className="hero-bg-blob hero-bg-blob--2" />
        <div className="hero-bg-blob hero-bg-blob--3" />
      </div>

      <div className="hero-inner">
        {/* Top 3-Column Header matching Figma 1240px bounds */}
        <div className="hero-top-grid">
          
          {/* Left Column: WhatsApp Alert + Student Match Pill */}
          <div className="hero-side-column hero-side-column--left">
            <div className="hero-notif-card hero-notif-whatsapp">
              <div className="notif-header">
                <span className="notif-whatsapp-icon">💬</span>
                <span className="notif-title">WhatsApp Alert</span>
              </div>
              <div className="notif-sub-bold">Get notified on whatsapp</div>
              <div className="notif-detail">You&apos;ll get all important updates on your whatsapp</div>
            </div>

            <div className="hero-floating-badge hero-floating-badge--match">
              <div className="badge-avatars">
                <span className="badge-avatar" style={{ background: "#6366f1" }}>AK</span>
                <span className="badge-avatar" style={{ background: "#ec4899" }}>PR</span>
                <span className="badge-avatar" style={{ background: "#14b8a6" }}>SN</span>
              </div>
              <div>
                <div className="badge-text-main">🔥 142 students matched today</div>
                <div className="badge-text-sub">Just now • IIT, BITS, VIT</div>
              </div>
            </div>
          </div>

          {/* Center Column: Assistant Pill + Connect 10X Faster + Subtitle + Question */}
          <div className="hero-center-column">
            <div className="hero-assistant-pill">
              <span className="pill-robot-icon">🤖</span>
              <span>AI-Powered Campus Assistant</span>
            </div>

            <h1 className="hero-title">
              Connect <span className="hero-gradient-text">10X Faster.</span>
            </h1>

            <p className="hero-subtitle">
              One platform connecting students, colleges &amp; employers — faster.
            </p>

            <div className="hero-question-row">
              <span className="hero-sparkle" aria-hidden="true">✦</span>
              <h2>What are you looking for?</h2>
              <span className="hero-sparkle" aria-hidden="true">✦</span>
            </div>
          </div>

          {/* Right Column: Resume Builder + Recruiter Shortlist Pill */}
          <div className="hero-side-column hero-side-column--right">
            <div className="hero-notif-card hero-notif-resume">
              <div className="notif-header">
                <span className="notif-resume-icon">⚡</span>
                <span className="notif-title">Resume Builder</span>
              </div>
              <div className="notif-sub-bold">Build Your Resume</div>
              <div className="notif-detail">Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired</div>
            </div>

            <div className="hero-floating-badge hero-floating-badge--recruiter">
              <span className="badge-recruiter-icon">🏢</span>
              <div>
                <div className="badge-text-main">
                  <span style={{ color: "#0084ff", fontWeight: 700 }}>Radiant Info</span> shortlisted 8 interns
                </div>
                <div className="badge-text-sub">Verified recruiter • 2 days ago</div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Interactive Hero Cards directly below */}
        <div className="hero-cards" role="group" aria-label="Role selection cards">
          {cards.map((card) => {
            const isSelected = activeCard === card.id;
            return (
              <div
                className={`hero-card ${isSelected ? "hero-card--selected" : ""}`}
                key={card.id}
                id={card.id}
                onClick={() => setActiveCard(card.id)}
              >
                <div className="hero-card-top">
                  <div className="hero-card-role-icon">
                    {card.id === "card-college" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0084ff">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" />
                      </svg>
                    )}
                    {card.id === "card-job" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0084ff">
                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5l-7-3.5 7-3.5 7 3.5-7 3.5zM4 11v6l8 4 8-4v-6l-8 4-8-4z" />
                      </svg>
                    )}
                    {card.id === "card-hiring" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0084ff">
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                      </svg>
                    )}
                  </div>
                  <span className={`hero-card-pill hero-card-pill--${card.badgeType}`}>
                    {card.badge}
                  </span>
                </div>

                <div className="hero-card-body-row">
                  <div className="hero-card-info">
                    <h3 className="hero-card-title">{card.title}</h3>
                    <p className="hero-card-desc">{card.desc}</p>
                    <ul className="hero-card-features">
                      {card.features.map((f, i) => (
                        <li key={i}>
                          <span className="check-icon" aria-hidden="true">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {card.hasDocIllustration && (
                    <div className="hero-doc-illustration" aria-hidden="true">
                      <div className="doc-paper">
                        <div className="doc-line doc-line--1" />
                        <div className="doc-line doc-line--2" />
                        <div className="doc-line doc-line--3" />
                        <div className="doc-lens">🔍</div>
                      </div>
                    </div>
                  )}

                  {card.hasCodeIllustration && (
                    <div className="hero-code-illustration" aria-hidden="true">
                      <div className="code-box">
                        <span className="code-text">&lt;/&gt;</span>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href={card.id === "card-job" ? "#for-students" : "#colleges"}
                  className="hero-card-action-btn"
                  id={`${card.id}-action`}
                >
                  <span>{card.cta}</span>
                  <span className="btn-icon-symbol" aria-hidden="true">{card.ctaIcon}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* 4 Stats Box matching Figma bounds */}
        <div className="hero-stats-card" aria-label="Platform metrics">
          {stats.map((s, i) => (
            <div className="hero-stat-box" key={i}>
              <div
                className="hero-stat-icon-circle"
                style={{ background: s.bg, color: s.color }}
              >
                {s.icon}
              </div>
              <div className="hero-stat-text-group">
                <span className="hero-stat-val">{s.value}</span>
                <span className="hero-stat-lbl">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
