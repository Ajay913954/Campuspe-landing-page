"use client";

const partnerLogos = [
  {
    name: "GINSERV Nurturing Ventures",
    src: "/partners/ginserv.png",
    height: 44,
  },
  {
    name: "Startup Karnataka",
    src: "/partners/startup_karnataka.png",
    height: 40,
  },
  {
    name: "Visvesvaraya Technological University",
    src: "/partners/karnataka_govt.png",
    height: 48,
  },
  {
    name: "TalentSpotify",
    src: "/partners/talentspotify.png",
    height: 44,
  },
  {
    name: "Radiant Info",
    src: "/partners/radiant_info.png",
    height: 42,
  },
  {
    name: "DPIIT #startupindia",
    src: "/partners/dpiit_startupindia.png",
    height: 40,
  },
];

function PartnerItems() {
  return (
    <>
      {partnerLogos.map((p, idx) => (
        <div key={idx} className="partner-logo-item" title={p.name}>
          <img
            src={p.src}
            alt={p.name}
            className="partner-logo-img"
            style={{ height: `${p.height}px` }}
          />
        </div>
      ))}
    </>
  );
}

export default function Partners() {
  return (
    <section className="partners-section" aria-label="Partner organizations">
      <h3 className="partners-heading">Trusted by partners across India</h3>
      <div className="partners-marquee-container">
        <div className="partners-marquee-track">
          <div className="partners-marquee-group">
            <PartnerItems />
            <PartnerItems />
          </div>
          <div className="partners-marquee-group" aria-hidden="true">
            <PartnerItems />
            <PartnerItems />
          </div>
        </div>
      </div>
    </section>
  );
}
