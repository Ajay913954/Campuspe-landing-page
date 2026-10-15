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

  const handleDemoUpload = () => {
    setFileName("Sample_Resume.pdf");
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
        
        {/* Top Tag */}
        <div className="resume-tag-pill">
          <span className="sparkle">✦</span>
          <span className="tag-bold">TRY IT LIVE</span>
          <span className="tag-ver">v2.4 AI Engine</span>
        </div>

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
            <div className="badge-bolt-circle">⚡</div>
            <div>
              <div className="badge-rate-val">98% Match Rate</div>
              <div className="badge-rate-sub">AI semantic rank</div>
            </div>
          </div>

          {/* Main Upload Box */}
          <div className="resume-upload-card">
            {!fileName && !analyzed && (
              <div
                className="upload-dropzone"
                onClick={() => document.getElementById("resume-input")?.click()}
              >
                <input
                  type="file"
                  id="resume-input"
                  accept=".pdf,.doc,.docx"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <h3 className="dropzone-title">Upload your resume</h3>
                <p className="dropzone-sub">
                  PDF, DOC, or DOCX • Up to 10MB • We&apos;ll use it to understand your skills and experience.
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
                    <span>Upload resume</span>
                    <span className="upload-arrow">↑</span>
                  </button>
                </div>

                <div className="dropzone-or-text">or drag and drop your file here</div>

                <div className="dropzone-format-pills">
                  <span className="fmt-pill">PDF</span>
                  <span className="fmt-pill">DOC</span>
                  <span className="fmt-pill">DOCX</span>
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
                  <span>98% Match Rate</span> • <span>12 matching roles found</span>
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
            <span className="green-dot-pulse" />
            <div>
              <div className="badge-ats-val">ATS Compliant</div>
              <div className="badge-ats-sub">Standardized parser</div>
            </div>
          </div>

        </div>

        {/* 4 Feature Cards Below Upload */}
        <div className="resume-metrics-row">
          <div className="resume-metric-card">
            <div className="metric-check-circle">✓</div>
            <div>
              <div className="metric-card-title">Resume analyzed</div>
              <div className="metric-card-sub">Ready in 4s</div>
            </div>
          </div>

          <div className="resume-metric-card">
            <div className="metric-check-circle">✓</div>
            <div>
              <div className="metric-card-title">Skills matched</div>
              <div className="metric-card-sub">Deep taxonomy</div>
            </div>
          </div>

          <div className="resume-metric-card">
            <div className="metric-check-circle">✓</div>
            <div>
              <div className="metric-card-title">Experience matched</div>
              <div className="metric-card-sub">Contextual seniority</div>
            </div>
          </div>

          <div className="resume-metric-card">
            <div className="metric-check-circle">✓</div>
            <div>
              <div className="metric-card-title">1,000+ sources searched</div>
              <div className="metric-card-sub">Real-time aggregators</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
