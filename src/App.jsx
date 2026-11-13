import { useState } from "react";
import content from "./content/ar.json";
import logo from "./design/brand/logo-horizontal.svg";
import lightLogo from "./design/brand/logo-horizontal-light.svg";
import teamImage from "./media/Smart Land Team.webp?w=480;960;1600&format=webp&as=srcset";
import introductionThumbnail from "./media/Introduction Thumbnail.webp?w=960&format=webp";
import secondThumbnail from "./media/Multimedia Thumbnail.webp?w=960&format=webp";
import MediaFrame from "./components/MediaFrame";
import SectionIntro from "./components/SectionIntro";

const introduction = "https://youtu.be/-V3EzPWmIJ8";
const secondIntroduction = "https://youtu.be/zhvyaZ7czhw";

const mediaFiles = import.meta.glob("./media/*.{avif,gif,jpeg,jpg,png,webp}", {
  eager: true,
  query: "?w=480;960;1600&format=webp&as=srcset",
  import: "default",
});
const getMedia = (fileName) => mediaFiles[`./media/${fileName}`];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container navigation">
        <a href="#home" aria-label={content.brand.name}>
          <img src={logo} className="logo" alt={content.brand.name} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <nav className={isOpen ? "is-open" : ""}>
          {content.navigation.map(([label, id]) => (
            <a href={`#${id}`} onClick={() => setIsOpen(false)} key={id}>
              {label}
            </a>
          ))}
          <a className="primary-button" href="#contact">
            {content.navigation.at(-1)[0]}
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const { hero } = content;
  return (
    <section id="home" className="hero">
      <div className="contours" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="container two-column">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>
            {hero.title}
            <br />
            <em>{hero.accent}</em>
          </h1>
          <p className="lead">{hero.description}</p>
          <p className="buttons">
            <a className="primary-button" href="#portfolio">
              {hero.projectsButton}
            </a>
            <a className="secondary-button" href="#multimedia">
              {hero.videoButton}
            </a>
          </p>
          <div className="figures">
            {hero.stats.map(([value, label]) => (
              <span key={label}>
                <b>{value}</b>
                {label}
              </span>
            ))}
          </div>
        </div>
        <MediaFrame
          src={introduction}
          thumbnail={introductionThumbnail}
          alt={hero.videoLabel}
          className="hero-image"
          type="video"
          sizes="(max-width: 960px) 100vw, 42vw"
        />
      </div>
    </section>
  );
}

function About() {
  const { about } = content;
  return (
    <section id="about" className="section white">
      <div className="container two-column">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p className="muted" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="principles">
            {about.principles.map(([title, text]) => (
              <article key={title}>
                <b>{title}</b>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </div>
        <aside className="about-card">
          <small>{about.cardLabel}</small>
          <h3>{about.cardTitle}</h3>
          <p>{about.cardText}</p>
          <MediaFrame srcSet={teamImage} alt={about.imageLabel} sizes="(max-width: 960px) 100vw, 42vw" />
        </aside>
      </div>
    </section>
  );
}

function Services() {
  const { services } = content;
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionIntro {...services} />
        <div className="grid services-grid">
          {services.items.map(([icon, title, text]) => (
            <article className="service-card" key={title}>
              <i>{icon}</i>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const { portfolio } = content;
  return (
    <section id="portfolio" className="section white">
      <div className="container">
        <SectionIntro {...portfolio} />
        <div className="grid projects-grid">
          {portfolio.items.map(
            ([title, category, subtitle, description, image]) => (
              <article className="project-card" key={title}>
                <MediaFrame srcSet={getMedia(image)} alt={title} sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw" />
                <div className="project-content">
                  <span>{category}</span>
                  <h3>{title}</h3>
                  <small>{subtitle}</small>
                  <p>{description}</p>
                  <footer>
                    {portfolio.status}
                    <button type="button">{portfolio.details}</button>
                  </footer>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Multimedia() {
  return (
    <section id="multimedia" className="section lagoon">
      <div className="container">
        <SectionIntro {...content.media} />
        <MediaFrame
          src={secondIntroduction}
          thumbnail={secondThumbnail}
          type="video"
          alt={content.media.label}
          className="video-placeholder"
        />
      </div>
    </section>
  );
}

function Stats() {
  const { stats } = content;
  return (
    <section id="stats" className="section white">
      <div className="container">
        <SectionIntro {...stats} />
        <div className="grid stats-grid">
          {stats.items.map(([value, label]) => (
            <article key={label}>
              <b>{value}</b>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const { contact } = content;
  const submit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  };
  return (
    <section id="contact" className="section">
      <div className="container contact-layout">
        <aside>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
          <ul>
            <li>{contact.address}</li>
            <li>
              <a href="mailto:contact@smartland-tech.com">
                contact@smartland-tech.com
              </a>
            </li>
            <li>
              <a dir="ltr" href="tel:+963110000000">
                +963 11 0000000
              </a>
            </li>
          </ul>
        </aside>
        <form onSubmit={submit}>
          <h3>{contact.formTitle}</h3>
          <label>
            {contact.name}
            <input required placeholder={contact.nameHint} />
          </label>
          <label>
            {contact.email}
            <input type="email" required placeholder="name@example.com" />
          </label>
          <label>
            {contact.subject}
            <input required placeholder={contact.subjectHint} />
          </label>
          <label>
            {contact.message}
            <textarea required rows="4" placeholder={contact.messageHint} />
          </label>
          <button className="primary-button" type="submit">
            {contact.send}
          </button>
          {sent && (
            <p className="success" role="status">
              {contact.success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <img src={lightLogo} className="logo" alt={content.brand.name} />
        <p>{content.footer}</p>
        <small>{content.copyright}</small>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Multimedia />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
