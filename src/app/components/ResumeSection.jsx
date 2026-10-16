"use client";
import { useState } from "react";

export default function ResumeSection() {
  const [fileName, setFileName] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        setAnalyzed(true);
      }, 1000);
    }
  };

  const handleSampleSelect = (type) => {
    setFileName(type === "Tech" ? "Senior_Frontend_Engineer.pdf" : "Marketing_Lead_Resume.pdf");
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 1000);
  };

  const resetUpload = () => {
    setFileName(null);
    setAnalyzed(false);
    setAnalyzing(false);
  };

  return (
    <section className="resume-section" id="resume-scanner" aria-label="Resume upload and analysis">
      <div className="resume-section__inner">
        
        {/* Headline */}
        <h2 className="resume-section__title">
          Upload your resume.<br />
          <span className="text-blue">Find jobs that fit.</span>
        </h2>
        <p className="resume-section__desc">
          Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.
        </p>

        {/* Upload Container with Floating Badges */}
        <div className="resume-card-stage">
          
          {/* Top Left Floating Badge */}
          <div className="resume-badge-float resume-badge-float--left" aria-hidden="true">
            <div className="badge-check-circle badge-check-circle--green">✓</div>
            <div>
              <div className="badge-rate-val">100% Verified Profile</div>
              <div className="badge-rate-sub">Direct recruiter reach</div>
            </div>
          </div>

          {/* Main Upload Box */}
          <div className="resume-upload-card">
            <input
              type="file"
              id="resume-input"
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            {!fileName && !analyzing && !analyzed && (
              <div
                className="upload-dropzone"
                onClick={() => document.getElementById("resume-input")?.click()}
              >
                <h3 className="dropzone-title">Upload your resume</h3>
                <p className="dropzone-sub">
                  Drag and drop your file here, or click to browse (PDF, DOCX up to 10MB)
                </p>

                <div className="dropzone-action-row">
                  <button
                    type="button"
                    className="upload-cta-btn"
                    id="btn-upload-resume"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById("resume-input")?.click();
                    }}
                  >
                    <span>Upload Resume</span>
                    <span className="upload-arrow">→</span>
                  </button>
                </div>

                <div className="dropzone-sample-row">
                  <span className="sample-label">or try with a sample resume:</span>
                  <div className="sample-chips">
                    <button
                      type="button"
                      className="sample-chip sample-chip--tech"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSampleSelect("Tech");
                      }}
                    >
                      Tech
                    </button>
                    <button
                      type="button"
                      className="sample-chip sample-chip--nontech"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSampleSelect("Non-Tech");
                      }}
                    >
                      Non-Tech
                    </button>
                  </div>
                </div>
              </div>
            )}

            {analyzing && (
              <div className="upload-analyzing-state">
                <div className="analyzing-spinner" />
                <h4>Analyzing {fileName}...</h4>
                <p>Matching your skills against 1,000+ real-time verified sources</p>
              </div>
            )}

            {analyzed && (
              <div className="upload-success-state">
                <div className="success-icon">✓</div>
                <h4>Resume Analyzed Successfully!</h4>
                <p className="success-name">{fileName}</p>
                <div className="success-metrics-pill">
                  <span>98% Match Rate</span> • <span>14 matching roles found</span>
                </div>
                <div className="success-actions">
                  <a href="#jobs" className="success-btn-explore">
                    View Matches →
                  </a>
                  <button type="button" className="success-btn-reset" onClick={resetUpload}>
                    Upload Another
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Right Floating Badge */}
          <div className="resume-badge-float resume-badge-float--right" aria-hidden="true">
            <div className="badge-briefcase-icon">💼</div>
            <div>
              <div className="badge-ats-val">+450+ Live Jobs</div>
              <div className="badge-ats-sub">Added today</div>
            </div>
          </div>

        </div>

        {/* 4 Feature Cards Below Upload */}
        <div className="resume-metrics-row">
          <div className="resume-metric-card">
            <div className="metric-check-circle metric-check-circle--green">✓</div>
            <div>
              <div className="metric-card-title">Instant ATS Score</div>
              <div className="metric-card-sub">Live evaluation</div>
            </div>
          </div>

          <div className="resume-metric-card">
            <div className="metric-check-circle metric-check-circle--blue">✓</div>
            <div>
              <div className="metric-card-title">Skill gap analysis</div>
              <div className="metric-card-sub">Role requirements</div>
            </div>
          </div>

          <div className="resume-metric-card">
            <div className="metric-check-circle metric-check-circle--purple">✓</div>
            <div>
              <div className="metric-card-title">Fast &amp; easy applied</div>
              <div className="metric-card-sub">One-tap workflows</div>
            </div>
          </div>

          <div className="resume-metric-card">
            <div className="metric-check-circle metric-check-circle--blue">✓</div>
            <div>
              <div className="metric-card-title">1000+ jobs live across India</div>
              <div className="metric-card-sub">Top verified companies</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
