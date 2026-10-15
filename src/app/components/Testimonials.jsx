const testimonials = [
  {
    id: "testi-1",
    name: "Priya Sharma",
    role: "Software Engineer @ Google",
    avatar: "PS",
    color: "#1677f9",
    stars: 5,
    quote:
      "CampusPe's AI resume builder helped me land my dream job at Google. The AI matching was spot-on — every application I sent through the platform got a callback!",
  },
  {
    id: "testi-2",
    name: "Prof. Rajesh Kumar",
    role: "Placement Officer, IIT Bombay",
    avatar: "RK",
    color: "#8b5cf6",
    stars: 5,
    quote:
      "Our placement rate jumped from 72% to 91% after we started using CampusPe. The employer network and real-time analytics make our job so much easier.",
  },
  {
    id: "testi-3",
    name: "Ananya Patel",
    role: "HR Head, Infosys",
    avatar: "AP",
    color: "#10b981",
    stars: 5,
    quote:
      "We hired 200+ interns in a single campus season through CampusPe. The AI filtering saved us weeks of manual screening. Highly recommend to any hiring team.",
  },
  {
    id: "testi-4",
    name: "Rohan Mehta",
    role: "Data Analyst @ Flipkart",
    avatar: "RM",
    color: "#f59e0b",
    stars: 5,
    quote:
      "The AI interview prep feature was a game changer. I went from bombing interviews to confidently cracking the Flipkart final round in just two weeks.",
  },
  {
    id: "testi-5",
    name: "Dr. Sunita Rao",
    role: "Dean, BITS Pilani",
    avatar: "SR",
    color: "#ef4444",
    stars: 5,
    quote:
      "CampusPe transformed our campus recruitment ecosystem. The seamless employer-college connection tool is something we wish we'd had for years.",
  },
  {
    id: "testi-6",
    name: "Arjun Nair",
    role: "Product Manager @ Swiggy",
    avatar: "AN",
    color: "#06b6d4",
    stars: 5,
    quote:
      "From a tier-2 college with no brand recall, CampusPe's platform put me directly in front of Swiggy's hiring manager. The platform truly bridges the gap.",
  },
];

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials" aria-label="Customer testimonials">
      <div className="section-heading">
        <span className="section-label">TESTIMONIALS</span>
        <h2>
          Loved by students, colleges{" "}
          <span>and employers.</span>
        </h2>
        <p>
          Hear directly from the people and institutions whose careers and campuses
          have been transformed by CampusPe.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article className="testimonial-card" key={t.id} id={t.id}>
            <Stars count={t.stars} />
            <blockquote>
              <p>&ldquo;{t.quote}&rdquo;</p>
            </blockquote>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                aria-hidden="true"
                style={{ background: t.color }}
              >
                {t.avatar}
              </div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
