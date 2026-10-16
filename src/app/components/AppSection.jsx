"use client";

export default function AppSection() {
  return (
    <section className="app-section" id="app-interface" aria-label="CampusPe Mobile App Showcase">
      <div className="app-section__inner">
        
        {/* Section Heading in Blue */}
        <h2 className="app-section__title">
          Checkout Our App Interface Look
        </h2>

        {/* Description */}
        <p className="app-section__desc">
          Experience the power of a unified campus ecosystem right in your pocket. <strong>CampusPe</strong> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
        </p>

        {/* All 5 Phones Showcase Image */}
        <div className="app-showcase-image-wrap">
          <img
            src="/app_interface_mockup.png"
            alt="CampusPe Mobile App 5 Interfaces"
            className="app-showcase-mockup-img"
          />
        </div>

        {/* 5 Indicator Dots */}
        <div className="app-dots-row" role="tablist" aria-label="App screen indicators">
          {[0, 1, 2, 3, 4].map((idx) => (
            <span
              key={idx}
              className={`app-dot-indicator ${idx === 2 ? "app-dot-indicator--active" : ""}`}
              aria-label={`Screen ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
