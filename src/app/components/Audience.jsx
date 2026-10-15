
const audiences = [
  {
    id: "students",
    number: "01",
    icon: "🎓",
    title: "For Students",
    description:
      "Discover internships, jobs, career opportunities and build your professional future.",
    link: "Explore opportunities",
  },
  {
    id: "colleges",
    number: "02",
    icon: "🏫",
    title: "For Colleges",
    description:
      "Connect students with opportunities and manage your campus ecosystem in one place.",
    link: "Explore college solutions",
  },
  {
    id: "employers",
    number: "03",
    icon: "💼",
    title: "For Employers",
    description:
      "Discover skilled talent, connect with campuses and simplify recruitment.",
    link: "Explore hiring solutions",
  },
];

export default function Audience() {
  return (
    <section className="audience-section" id="audience">
      <div className="section-heading">
        <span className="section-label">ONE PLATFORM, THREE EXPERIENCES</span>

        <h2>
          Built for everyone in the{" "}
          <span>campus ecosystem.</span>
        </h2>

        <p>
          Whether you're learning, educating or hiring,
          CampusPe brings everyone together.
        </p>
      </div>

      <div className="audience-grid">
        {audiences.map((item) => (
          <article
            className="audience-card"
            id={item.id}
            key={item.id}
          >
            <div className="audience-card-top">
              <span className="audience-icon">{item.icon}</span>
              <span className="audience-number">{item.number}</span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a href="#get-started">
              {item.link} <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
