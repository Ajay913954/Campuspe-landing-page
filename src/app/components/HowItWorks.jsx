"use client";
import { useState } from "react";

const tabs = [
  {
    id: "students",
    label: "For Students",
    icon: "🎓",
    steps: [
      {
        num: "01",
        title: "Create Your Profile",
        desc: "Sign up and build your academic profile with skills, projects and achievements.",
      },
      {
        num: "02",
        title: "Get AI-Matched",
        desc: "Our AI analyzes your profile and matches you with the most relevant internships and jobs.",
      },
      {
        num: "03",
        title: "Build & Apply",
        desc: "Use the AI Resume Builder to craft the perfect resume and apply with one click.",
      },
      {
        num: "04",
        title: "Get Placed",
        desc: "Prepare with AI mock interviews, ace them, and land your dream opportunity.",
      },
    ],
  },
  {
    id: "colleges",
    label: "For Colleges",
    icon: "🏛️",
    steps: [
      {
        num: "01",
        title: "Onboard Your Campus",
        desc: "Register your institution and import student data in bulk with our easy setup wizard.",
      },
      {
        num: "02",
        title: "Connect with Employers",
        desc: "Access our network of 1200+ hiring companies and invite them for campus drives.",
      },
      {
        num: "03",
        title: "Manage Placements",
        desc: "Track all placement drives, shortlists, and offer letters from a centralized dashboard.",
      },
      {
        num: "04",
        title: "Measure Outcomes",
        desc: "Get real-time analytics on placement rates, salary trends and department performance.",
      },
    ],
  },
  {
    id: "employers",
    label: "For Employers",
    icon: "💼",
    steps: [
      {
        num: "01",
        title: "Post Your Requirements",
        desc: "Share your hiring needs, required skills and role details to begin the search.",
      },
      {
        num: "02",
        title: "AI Talent Discovery",
        desc: "Our AI surfaces the top-matching candidates from 500+ partner campuses instantly.",
      },
      {
        num: "03",
        title: "Schedule & Interview",
        desc: "Manage interview schedules, conduct virtual assessments and collect feedback in one place.",
      },
      {
        num: "04",
        title: "Hire With Confidence",
        desc: "Extend offers, track acceptance rates and build long-term campus relationships.",
      },
    ],
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("students");
  const current = tabs.find((t) => t.id === activeTab);

  return (
    <section className="how-section" id="how-it-works" aria-label="How it works">
      <div className="section-heading">
        <span className="section-label">HOW IT WORKS</span>
        <h2>
          Simple steps to{" "}
          <span>get started.</span>
        </h2>
        <p>
          Whether you&apos;re a student looking for opportunities, a college managing placements,
          or a company hiring top talent — it only takes a few steps.
        </p>
      </div>

      <div className="how-tabs" role="tablist" aria-label="User type tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            className={`how-tab${activeTab === tab.id ? " how-tab--active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span aria-hidden="true">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="how-steps"
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {current.steps.map((step) => (
          <div className="how-step" key={step.num}>
            <div className="how-step-num" aria-hidden="true">{step.num}</div>
            <div className="how-step-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
