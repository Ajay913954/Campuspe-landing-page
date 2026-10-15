const stats = [
  { value: "50K+", label: "Students Placed", icon: "🎓", color: "#1677f9" },
  { value: "500+", label: "Partner Colleges", icon: "🏛️", color: "#8b5cf6" },
  { value: "1200+", label: "Hiring Companies", icon: "💼", color: "#10b981" },
  { value: "98%", label: "Satisfaction Rate", icon: "⭐", color: "#f59e0b" },
];

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Platform statistics">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-icon" style={{ "--stat-color": stat.color }} aria-hidden="true">
              {stat.icon}
            </div>
            <div className="stat-value" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
