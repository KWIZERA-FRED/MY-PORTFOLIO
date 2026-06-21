import { useState, useEffect, useRef } from "react";
import "./Portfolio_style.css";
import freddyPhoto from "./assets/freddy.jpeg";

const PROJECTS = [
  {
    id: "01",
    name: "Online Event Manager",
    tag: "full_stack",
    description:
      "A comprehensive event management system with role-based access control across multiple user types — organizers, attendees, and admins each see exactly what they need, nothing more.",
    stack: ["Python", "Flask", "MySQL", "JavaScript"],
    highlight: "Scalable RBAC architecture",
    link: "https://github.com/KWIZERA-FRED/Online-Event-Manager",
  },
  {
    id: "02",
    name: "Golden Men's Fashion",
    tag: "e_commerce",
    description:
      "An e-commerce storefront for classic men's fashion, built with an emphasis on clean product browsing and a checkout flow that doesn't get in the customer's way.",
    stack: ["JavaScript", "HTML", "CSS"],
    highlight: "Full storefront + cart logic",
    link: "https://github.com/KWIZERA-FRED/Golden-Men-s-Fashion",
  },
  {
    id: "03",
    name: "SwiftStore",
    tag: "no_code",
    description:
      "A live e-commerce store built on Wix — proof that I can move fast on no-code platforms when speed-to-market matters more than custom infrastructure.",
    stack: ["Wix", "No-Code"],
    highlight: "Shipped & live",
    link: "https://github.com/KWIZERA-FRED/SwiftStore-no-code",
  },
  {
    id: "04",
    name: "Fitness Tracker — Figma",
    tag: "ui_design",
    description:
      "A complete UI/UX design for a fitness tracking app, from wireframes to a polished interactive prototype — the design groundwork before any code gets written.",
    stack: ["Figma", "UI/UX"],
    highlight: "End-to-end prototype",
    link: "https://github.com/KWIZERA-FRED/Fitness-Tracking-App-Figma-Design",
  },
];

const STACK_GROUPS = [
  {
    label: "frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "React Native"],
  },
  {
    label: "backend",
    items: ["Python", "Flask", "Java", "PHP"],
  },
  {
    label: "data",
    items: ["MySQL"],
  },
  {
    label: "design / no-code",
    items: ["Figma", "Wix"],
  },
];

const CONTACT = {
  github: "https://github.com/KWIZERA-FRED",
  linkedin: "https://www.linkedin.com/in/kwizera-iyera-263494418",
  whatsapp: "+250733109595",
  phone: "+250793246521",
  email: "kwiziyera@gmail.com",
};

// ---------------------------------------------------------------------------
// HOOK — reveal-on-scroll
// ---------------------------------------------------------------------------

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SIGNATURE ELEMENT — animated request pipeline (Client -> React -> Flask -> MySQL)
// ---------------------------------------------------------------------------

function RequestPipeline() {
  const nodes = [
    { label: "Client", sub: "browser" },
    { label: "React", sub: "UI layer" },
    { label: "Flask", sub: "API" },
    { label: "MySQL", sub: "data" },
  ];

  return (
    <div className="pipeline" role="img" aria-label="Request flow from client through React, Flask, to MySQL">
      <div className="pipeline__track">
        {nodes.map((n, i) => (
          <div className="pipeline__node-wrap" key={n.label}>
            <div className="pipeline__node">
              <span className="pipeline__node-label">{n.label}</span>
              <span className="pipeline__node-sub">{n.sub}</span>
            </div>
            {i < nodes.length - 1 && (
              <div className="pipeline__wire">
                <span className="pipeline__packet" style={{ animationDelay: `${i * 0.9}s` }} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pipeline__caption">// request → response, round trip</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1600);
    } catch {
      setCopiedField(null);
    }
  };

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#stack", label: "Stack" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="page">
      {/* ---------------- NAV ---------------- */}
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          <a href="#top" className="nav__mark">
            KIF<span className="nav__mark-dot">.</span>
          </a>
          <nav className="nav__links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="nav__cta" href="#contact">
            Let's talk
          </a>
          <button
            className="nav__burger"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {navOpen && (
          <div className="nav__mobile">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setNavOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setNavOpen(false)}>
              Let's talk
            </a>
          </div>
        )}
      </header>

      <main id="top">
        {/* ---------------- HERO ---------------- */}
        <section className="hero">
          <div className="hero__inner">
            <Reveal>
              <p className="eyebrow">// Kwizera Iyera Fred · Fullstack Software Engineer</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hero__title">
                I build the parts
                <br />
                users never see —
                <br />
                <span className="hero__accent">and rarely break.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hero__sub">
                Fullstack developer with a deep pull toward backend infrastructure: the
                APIs, databases, and request pipelines that keep an interface honest.
                Comfortable across the whole stack, most at home where the logic lives.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero__actions">
                <a href="#work" className="btn btn--primary">
                  View work
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero__visual-wrap">
            <RequestPipeline />
          </Reveal>
        </section>

        {/* ---------------- WORK ---------------- */}
        <section id="work" className="section">
          <Reveal>
            <p className="eyebrow">// 01_work</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section__title">Selected projects</h2>
          </Reveal>

          <div className="projects">
            {PROJECTS.map((p, i) => (
              <Reveal delay={i * 90} key={p.id}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project"
                >
                  <div className="project__head">
                    <span className="project__id">{p.id}</span>
                    <span className="project__tag">{p.tag}</span>
                  </div>
                  <h3 className="project__name">{p.name}</h3>
                  <p className="project__desc">{p.description}</p>
                  <div className="project__stack">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="project__foot">
                    <span className="project__highlight">{p.highlight}</span>
                    <span className="project__arrow">↗</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- STACK ---------------- */}
        <section id="stack" className="section section--alt">
          <Reveal>
            <p className="eyebrow">// 02_stack</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section__title">Tools of the trade</h2>
          </Reveal>

          <div className="stack-grid">
            {STACK_GROUPS.map((group, i) => (
              <Reveal delay={i * 80} key={group.label} className="stack-col">
                <p className="stack-col__label">{group.label}</p>
                <ul className="stack-col__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section id="about" className="section">
          <div className="about">
            <Reveal>
              <p className="eyebrow">// 03_about</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="section__title">A bit about how I work</h2>
            </Reveal>

            <div className="about__body">
              <Reveal delay={100} className="about__photo-wrap">
                <img
                  src={freddyPhoto}
                  alt="Kwizera Iyera Fred"
                  className="about__photo"
                />
              </Reveal>

              <div className="about__copy">
                <Reveal delay={140}>
                  <p className="about__text">
                    I'm a fullstack developer, but if you ask where my attention drifts
                    first, it's the backend — the schema design, the API contracts, the
                    quiet infrastructure that decides whether an app holds up under real
                    use. I like that the frontend tells you when something's wrong; the
                    backend just has to be right.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p className="about__text">
                    That said, I move comfortably across the full stack — from pixel-level
                    work in Figma and React, to no-code builds in Wix when speed matters
                    more than control, to relational data modeling in MySQL. I'd rather
                    ship something solid than something merely shiny.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="section section--contact">
          <Reveal>
            <p className="eyebrow eyebrow--inverse">// 04_contact</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section__title section__title--inverse">
              Open to backend-heavy fullstack roles.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="contact__sub">
              The fastest way to reach me is WhatsApp or a direct call. Email works too.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="contact-grid">
              <a
                className="contact-card"
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-card__label">GitHub</span>
                <span className="contact-card__value">KWIZERA-FRED ↗</span>
              </a>

              <a
                className="contact-card"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-card__label">LinkedIn</span>
                <span className="contact-card__value">kwizera-iyera ↗</span>
              </a>

              <a className="contact-card" href={`mailto:${CONTACT.email}`}>
                <span className="contact-card__label">Email</span>
                <span className="contact-card__value">{CONTACT.email}</span>
              </a>

              <button
                className="contact-card contact-card--button"
                onClick={() => handleCopy(CONTACT.whatsapp, "whatsapp")}
              >
                <span className="contact-card__label">WhatsApp</span>
                <span className="contact-card__value">
                  {copiedField === "whatsapp" ? "Copied ✓" : CONTACT.whatsapp}
                </span>
              </button>

              <button
                className="contact-card contact-card--button"
                onClick={() => handleCopy(CONTACT.phone, "phone")}
              >
                <span className="contact-card__label">Phone</span>
                <span className="contact-card__value">
                  {copiedField === "phone" ? "Copied ✓" : CONTACT.phone}
                </span>
              </button>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <span>Kwizera Iyera Fred — built with React.</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
