import { useState } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Cpu,
  Globe,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import "./index.css";

import logo from "./assets/logo.png";
import founder from "./assets/founder.jpg";

type Theme = "obsidian" | "lime" | "midnight" | "arctic";

const WHATSAPP_NUMBER = "254741218948";

const whatsappMessage = encodeURIComponent(
  "Hi Pigeon Techies! I would like to discuss a project with you."
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const themes: { id: Theme; name: string }[] = [
  { id: "obsidian", name: "Obsidian" },
  { id: "lime", name: "Neon Lime" },
  { id: "midnight", name: "Midnight" },
  { id: "arctic", name: "Arctic" },
];

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Web Development",
    text: "Fast, modern and responsive websites built to make your brand stand out online.",
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Web Applications",
    text: "Powerful custom web applications designed around your business and your users.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Software Solutions",
    text: "Practical digital systems that simplify workflows and solve real business problems.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "UI / UX Design",
    text: "Clean interfaces and thoughtful user experiences that are easy to understand and use.",
  },
];

function App() {
  const [theme, setTheme] = useState<Theme>("obsidian");
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  return (
    <div className={`site theme-${theme}`}>
      <div className="noise" />

      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <span>NAIROBI · KENYA</span>

        <span className="top-status">
          <span className="status-dot" />
          DIGITAL STUDIO · ONLINE
        </span>
      </div>

      {/* ================= NAVIGATION ================= */}
      <header className="navbar">
        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Pigeon Techies" />
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#founder" onClick={() => setMenuOpen(false)}>
            Founder
          </a>

          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          {/* THEME PICKER */}
          <div className="theme-picker">
            <button
              className="theme-button"
              onClick={() => setThemeOpen(!themeOpen)}
              type="button"
            >
              <span className="theme-orb" />
              THEME
            </button>

            {themeOpen && (
              <div className="theme-menu">
                {themes.map((item) => (
                  <button
                    key={item.id}
                    className={theme === item.id ? "active" : ""}
                    onClick={() => {
                      setTheme(item.id);
                      setThemeOpen(false);
                    }}
                    type="button"
                  >
                    <span className={`theme-mini ${item.id}`} />

                    {item.name}

                    {theme === item.id && <Check size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="nav-cta">
            START A PROJECT
            <ArrowRight size={16} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero" id="home">
          <div className="hero-grid" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              PIGEON TECHIES / DIGITAL STUDIO
            </div>

            <h1>
              WE BUILD
              <br />
              <span>DIGITAL</span>
              <br />
              <strong>EXPERIENCES.</strong>
            </h1>

            <p className="hero-description">
              We create modern websites, applications and digital solutions
              for people and businesses ready to move forward.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="button button-primary">
                START A PROJECT
                <ArrowRight size={18} />
              </a>

              <a href="#work" className="button button-outline">
                EXPLORE OUR WORK
              </a>
            </div>
          </div>

          {/* HERO LOGO */}
          <div className="hero-logo">
            <div className="logo-ring ring-one" />
            <div className="logo-ring ring-two" />

            <img src={logo} alt="Pigeon Techies logo" />
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>

            <div className="scroll-line" />

            <span>PT / 001</span>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="intro section">
          <div className="section-label">
            <span>01</span>
            WHO WE ARE
          </div>

          <div className="intro-content">
            <h2>
              TECHNOLOGY
              <br />
              WITH <span>PURPOSE.</span>
            </h2>

            <div className="intro-copy">
              <p>
                Pigeon Techies is a digital technology studio focused on
                creating useful, beautiful and reliable digital experiences.
              </p>

              <p>
                From a simple business website to a custom digital platform,
                we combine design, technology and strategy to bring ideas to
                life.
              </p>

              <a href="#about" className="text-link">
                MORE ABOUT US
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="services section" id="services">
          <div className="section-heading">
            <div className="section-label">
              <span>02</span>
              WHAT WE DO
            </div>

            <h2>
              OUR
              <br />
              <span>SERVICES.</span>
            </h2>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.number}>
                  <div className="card-top">
                    <span>{service.number}</span>

                    <Icon size={27} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3>{service.title}</h3>

                    <p>{service.text}</p>
                  </div>

                  <div className="card-arrow">
                    <ArrowRight size={20} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ================= WORK / COMING SOON ================= */}
        <section className="work section" id="work">
          <div className="section-label">
            <span>03</span>
            OUR WORK
          </div>

          <div className="coming-soon">
            <div className="coming-soon-orbit">
              <div className="orbit orbit-1" />
              <div className="orbit orbit-2" />
              <div className="orbit-dot" />
            </div>

            <div className="coming-soon-content">
              <span className="coming-tag">PROJECTS / 001</span>

              <h2>
                COMING
                <br />
                <span>SOON.</span>
              </h2>

              <p>
                We're currently building something exciting. Our projects and
                digital creations will be showcased here soon.
              </p>

              <div className="coming-status">
                <span className="status-dot" />
                WORK IN PROGRESS
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOUNDER ================= */}
        <section className="founder section" id="founder">
          <div className="section-label">
            <span>04</span>
            THE FOUNDER
          </div>

          <div className="founder-grid">
            <div className="founder-image-wrap">
              <div className="founder-frame">
                <img
                  src={founder}
                  alt="Founder of Pigeon Techies"
                  className="founder-image"
                />
              </div>

              <div className="founder-label">
                <span>PIGEON TECHIES</span>
                <span>  FOUNDER </span>
              </div>
            </div>

            <div className="founder-content">
              <span className="founder-eyebrow">
                A MESSAGE FROM MESHACK OSULE
              </span>

              <h2>
                BUILDING
                <br />
                <span>THE FUTURE.</span>
              </h2>

              <blockquote>
                "Technology is not just about writing code. It is about
                turning ideas into solutions that make a real difference."
              </blockquote>

              <p>
                Welcome to Pigeon Techies. We started with a simple vision 
                to create modern digital solutions that help people and
                businesses bring their ideas to life.
              </p>

              <p>
                Every project is an opportunity to learn, create and build
                something meaningful. We're only getting started, and there's
                much more to come.
              </p>

              <div className="founder-signature">
                <strong>PIGEON TECHIES</strong>
                <span>  FOUNDER </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="about section" id="about">
          <div className="about-visual">
            <div className="about-circle">
              <Cpu size={100} strokeWidth={0.7} />
            </div>

            <div className="about-code">
              <span>BUILD</span>
              <span>CREATE</span>
              <span>DEPLOY</span>
            </div>
          </div>

          <div className="about-content">
            <div className="section-label">
              <span>05</span>
              ABOUT PIGEON TECHIES
            </div>

            <h2>
              SMALL TEAM.
              <br />
              <span>BIG IDEAS.</span>
            </h2>

            <p>
              We believe technology should make things easier, clearer and
              better. That's why every project starts with understanding the
              problem before writing the code.
            </p>

            <p>
              Our approach combines clean design, modern development and
              attention to detail to create digital products that are built
              for real people.
            </p>

            <div className="about-stats">
              <div>
                <strong>MESHACK OSULE</strong>
                <span>IDEAS → REALITY</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>ROOM TO GROW</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="process section" id="process">
          <div className="section-label">
            <span>06</span>
            HOW WE WORK
          </div>

          <h2>
            FROM IDEA
            <br />
            <span>TO LAUNCH.</span>
          </h2>

          <div className="process-grid">
            <div className="process-item">
              <span>01</span>
              <Zap />

              <h3>DISCOVER</h3>

              <p>
                We understand your goals, audience and project requirements.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>
              <Sparkles />

              <h3>DESIGN</h3>

              <p>
                We shape the visual direction and user experience.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>
              <Code2 />

              <h3>BUILD</h3>

              <p>
                We turn the approved concept into a responsive digital
                product.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>
              <Globe />

              <h3>LAUNCH</h3>

              <p>
                We test, refine and prepare your product for the real world.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact section" id="contact">
          <div className="contact-heading">
            <div className="section-label">
              <span>07</span>
              LET'S TALK
            </div>

            <h2>
              HAVE AN
              <br />
              <span>IDEA?</span>
            </h2>

            <p>
              Tell us what you're building. Let's turn the idea into something
              real.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              YOUR NAME

              <input
                type="text"
                placeholder="Enter your name"
              />
            </label>

            <label>
              EMAIL ADDRESS

              <input
                type="email"
                placeholder="you@example.com"
              />
            </label>

            <label>
              WHAT DO YOU NEED?

              <select defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>

                <option>Website</option>
                <option>Web Application</option>
                <option>Software Solution</option>
                <option>UI / UX Design</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              PROJECT DETAILS

              <textarea
                placeholder="Tell us a little about your project..."
                rows={5}
              />
            </label>

            <button
              type="submit"
              className="button button-primary submit-button"
            >
              SEND ENQUIRY
              <Send size={17} />
            </button>
          </form>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="final-cta">
          <div className="cta-logo">
            <img src={logo} alt="Pigeon Techies" />
          </div>

          <h2>
            LET'S BUILD
            <br />
            <span>SOMETHING.</span>
          </h2>

          <a href="#contact" className="button button-primary">
            START A CONVERSATION
            <ArrowRight size={18} />
          </a>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="footer-brand">
          <img src={logo} alt="Pigeon Techies" />

          <p>Digital technology. Built with purpose.</p>
        </div>

        <div className="footer-links">
          <a href="#home">HOME</a>
          <a href="#services">SERVICES</a>
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#founder">FOUNDER</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} PIGEON TECHIES
          </span>

          <span>NAIROBI · KENYA</span>
        </div>
      </footer>

      {/* ================= WHATSAPP ================= */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-button"
        aria-label="Chat with Pigeon Techies on WhatsApp"
      >
        <MessageCircle size={24} />
        <span>CHAT ON WHATSAPP</span>
      </a>
    </div>
  );
}

export default App;