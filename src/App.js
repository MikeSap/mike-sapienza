import { useState } from "react";
import "./App.css";

const DEV_DATA = {
  bio: "Full-stack developer based in CA. I build web apps and tools — from browser-based audio sequencers to live event platforms. Comfortable across the stack: React, Ruby on Rails, PostgreSQL.",
  projects: [
    {
      name: "Staged",
      desc: "A platform for discovering and sharing live music events. React frontend backed by a Rails API.",
      stack: ["React", "Rails", "PostgreSQL"],
      url: "https://github.com/MikeSap/Staged_Frontend",
    },
    {
      name: "DCCCVIII",
      subtitle: "808",
      desc: "Browser-based drum machine and sequencer. Load samples, program beats, save songs — Rails backend for persistence.",
      stack: ["JavaScript", "Web Audio", "Rails"],
      url: "https://github.com/MikeSap/DCCCVIII",
    },
  ],
  contact: [
    { key: "GitHub", val: "github.com/MikeSap", href: "https://github.com/MikeSap" },
    { key: "Email", val: "hello@mikesapienza.com", href: "mailto:hello@mikesapienza.com" },
  ],
};

const SOUND_DATA = {
  bio: "FOH & monitor engineer with experience across touring, clubs, and festivals. Focused on clarity, dynamics, and making every room work.",
  touring: [
    "Your tour / artist here",
    "Your tour / artist here",
    "Your tour / artist here",
  ],
  venues: [
    "Venue name here",
    "Venue name here",
    "Venue name here",
  ],
  gear: [
    { cat: "Consoles", items: "DiGiCo SD, Avid VENUE S6L, Yamaha CL/QL series, Midas M32" },
    { cat: "PA systems", items: "L-Acoustics, d&b audiotechnik, Meyer Sound, JBL VTX" },
    { cat: "RF", items: "Shure Axient, Sennheiser 2000/6000 series, Lectrosonics" },
    { cat: "Outboard", items: "Lake / Galileo processing, BSS, standard studio dynamics" },
  ],
  contact: [
    { key: "Email", val: "hello@mikesapienza.com", href: "mailto:hello@mikesapienza.com" },
    { key: "Phone", val: "+1 (555) 000-0000", href: "tel:+15550000000" },
  ],
};

export default function App() {
  const [isSound, setIsSound] = useState(false);

  return (
    <div className="wrap">
      <nav className="nav">
        <span className="nav-name">Mike Sapienza</span>
        <div className="toggle-wrap">
          <span className={`toggle-label ${!isSound ? "active" : ""}`}>Dev</span>
          <label className="toggle">
            <input
              type="checkbox"
              checked={isSound}
              onChange={(e) => setIsSound(e.target.checked)}
            />
            <span className="toggle-track" />
            <span className="toggle-thumb" />
          </label>
          <span className={`toggle-label ${isSound ? "active" : ""}`}>Sound</span>
        </div>
      </nav>

      {!isSound ? (
        <div className="panel fade-in" key="dev">
          <div className="hero">
            <h1 className="hero-name">
              Software<br /><em>developer.</em>
            </h1>
            <p className="hero-bio">{DEV_DATA.bio}</p>
          </div>

          <div className="divider" />
          <p className="section-label">Projects</p>
          <div className="projects">
            {DEV_DATA.projects.map((p) => (
              <a key={p.name} className="project" href={p.url} target="_blank" rel="noreferrer">
                <div>
                  <div className="project-name">
                    {p.name}
                    {p.subtitle && <span className="project-subtitle">{p.subtitle}</span>}
                  </div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="pills">
                    {p.stack.map((s) => <span key={s} className="pill">{s}</span>)}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="divider" />
          <p className="section-label">Contact</p>
          <div>
            {DEV_DATA.contact.map((c) => (
              <a key={c.key} className="contact-row" href={c.href} target="_blank" rel="noreferrer">
                <span className="contact-key">{c.key}</span>
                <span className="contact-val">{c.val}</span>
                <span className="contact-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="panel fade-in" key="sound">
          <div className="hero">
            <h1 className="hero-name">
              Live sound<br /><em>engineer.</em>
            </h1>
            <p className="hero-bio">{SOUND_DATA.bio}</p>
          </div>

          <div className="divider" />
          <p className="section-label">Experience</p>
          <div className="sound-grid">
            <div className="sound-card">
              <div className="sound-card-label">Touring</div>
              <div className="sound-card-items">
                {SOUND_DATA.touring.map((t, i) => (
                  <div key={i} className="sound-item">{t}</div>
                ))}
              </div>
            </div>
            <div className="sound-card">
              <div className="sound-card-label">Venues &amp; shows</div>
              <div className="sound-card-items">
                {SOUND_DATA.venues.map((v, i) => (
                  <div key={i} className="sound-item">{v}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="divider" />
          <p className="section-label">Gear</p>
          <div className="gear-wrap">
            {SOUND_DATA.gear.map((g) => (
              <div key={g.cat} className="gear-row">
                <span className="gear-cat">{g.cat}</span>
                <span className="gear-items">{g.items}</span>
              </div>
            ))}
          </div>

          <div className="divider" />
          <p className="section-label">Contact</p>
          <div>
            {SOUND_DATA.contact.map((c) => (
              <a key={c.key} className="contact-row" href={c.href}>
                <span className="contact-key">{c.key}</span>
                <span className="contact-val">{c.val}</span>
                <span className="contact-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <footer className="footer">
        <span className="footer-copy">mikesapienza.com</span>
        <span className="footer-mode">{isSound ? "live sound engineer" : "software developer"}</span>
      </footer>
    </div>
  );
}
