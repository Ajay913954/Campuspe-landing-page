export default function CTA() {
  return (
    <section className="cta-section" id="get-started" aria-label="Call to action">
      <div className="cta-bg-decoration" aria-hidden="true">
        <div className="cta-circle cta-circle--1" />
        <div className="cta-circle cta-circle--2" />
      </div>

      <div className="cta-content">
        <span className="section-label cta-label">GET STARTED TODAY</span>
        <h2>
          Ready to transform your{" "}
          <span>campus experience?</span>
        </h2>
        <p>
          Join 50,000+ students, 500+ colleges and 1,200+ companies already using
          CampusPe to accelerate careers and campus placements.
        </p>

        <div className="cta-buttons">
          <a href="#students" className="cta-btn cta-btn--primary" id="cta-student">
            <span>🎓</span>
            I&apos;m a Student
          </a>
          <a href="#colleges" className="cta-btn cta-btn--secondary" id="cta-college">
            <span>🏛️</span>
            I&apos;m a College
          </a>
          <a href="#employers" className="cta-btn cta-btn--outline" id="cta-employer">
            <span>💼</span>
            I&apos;m an Employer
          </a>
        </div>

        <p className="cta-note">
          ✓ Free to get started &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ Setup in 5 minutes
        </p>
      </div>
    </section>
  );
}
