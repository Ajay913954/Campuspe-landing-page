"use client";
import { useState } from "react";

export default function AppSection() {
  const [activeDot, setActiveDot] = useState(2); // Center active by default

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

        {/* Showcase Image of the 5 Phones */}
        <div className="app-showcase-image-wrap">
          <img
            src="/app_interface_mockup.png"
            alt="CampusPe Mobile App 5 Interfaces"
            className="app-showcase-mockup-img"
          />
        </div>

        {/* 5 Pagination Dots */}
        <div className="app-dots-row" role="tablist" aria-label="App screen indicators">
          {[0, 1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              type="button"
              className={`app-dot-btn ${activeDot === idx ? "app-dot-btn--active" : ""}`}
              onClick={() => setActiveDot(idx)}
              aria-label={`View app screen ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
