"use client";

export default function DownloadSection() {
  return (
    <section className="download-section" id="download-app" aria-label="Download CampusPe Mobile App">
      <div className="download-section__inner">
        
        {/* Left Column: Text & Store Buttons */}
        <div className="download-content">
          <h2 className="download-title">Download App Now</h2>
          <p className="download-desc">
            Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you&apos;re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection.Your career doesn&apos;t start at graduation—it starts here.
          </p>

          <div className="download-buttons">
            {/* Google Play Button */}
            <a
              href="#google-play"
              className="store-btn store-btn--google"
              id="btn-google-play"
              aria-label="Get it on Google Play"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="store-icon" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.378-.346-.61-.84-.61-1.406V3.22c0-.566.232-1.06.61-1.406z" fill="#00C3FF" />
                <path d="M17.345 8.448L13.792 12l3.553 3.552 4.02-2.32c1.14-.66 1.14-1.744 0-2.404l-4.02-2.38z" fill="#FFC107" />
                <path d="M3.609 22.186L13.792 12 17.345 15.552 7.321 21.338c-1.12.646-2.58.625-3.712-.152z" fill="#FF3A44" />
                <path d="M3.609 1.814C4.741 1.037 6.201 1.016 7.321 1.662l10.024 5.786L13.792 12 3.609 1.814z" fill="#00E676" />
              </svg>
              <div className="store-btn__text">
                <span className="store-sub">GET IT ON</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>

            {/* Apple App Store Button */}
            <a
              href="#app-store"
              className="store-btn store-btn--apple"
              id="btn-app-store"
              aria-label="Download on the App Store"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="store-icon" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-.91.04-2.02.61-2.67 1.37-.58.67-1.09 1.76-.95 2.81 1.02.08 2.06-.5 2.68-1.27z"/>
              </svg>
              <div className="store-btn__text">
                <span className="store-sub">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Isometric Phones Image */}
        <div className="download-visual">
          <img
            src="/download_phones_mockup.png"
            alt="CampusPe Mobile App on iOS and Android devices"
            className="download-mockup-img"
          />
        </div>

      </div>
    </section>
  );
}
