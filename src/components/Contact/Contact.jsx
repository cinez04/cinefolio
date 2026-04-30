// src/components/Contact/Contact.jsx
import "./Contact.css";
import CONFIG from "../../data/config";

export default function Contact() {
  const { socials } = CONFIG;

  return (
    <section className="section" id="contact">
      <div className="contact-wrap">
        <div className="contact-left">
          <h2>Let's Connect ✨</h2>
          <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        </div>

        <div className="social-links">
          {/* ✏️ EDIT SOCIAL LINKS IN src/data/config.js → CONFIG.socials */}

          {socials.github && (
            <a href={socials.github} target="_blank" rel="noreferrer" className="social-btn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.55v-2.1c-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.96 10.96 0 012.87-.39c.97.005 1.95.13 2.87.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.68 5.38-5.24 5.67.41.36.78 1.06.78 2.13v3.17c0 .3.21.66.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
              </svg>
              GitHub
            </a>
          )}

          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="social-btn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
              </svg>
              LinkedIn
            </a>
          )}

          {socials.behance && (
            <a href={socials.behance} target="_blank" rel="noreferrer" className="social-btn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7V5h7v2zM1 5h6.5c1.77 0 3.5 1.23 3.5 3.5C11 10.28 10.28 11 9 11.5c1.56.5 2.5 1.72 2.5 3.5C11.5 17.5 9.5 19 7 19H1V5zm2 5.5h3.5c.83 0 1.5-.67 1.5-1.5S7.33 7.5 6.5 7.5H3V10.5zm0 6H7c.94 0 1.5-.67 1.5-1.5S8 13.5 7 13.5H3V16.5zM14 13.5c.1 1.39 1.22 2.28 2.62 2.28 1.17 0 2-.5 2.38-1.28H22c-.67 2.39-2.78 4-5.38 4C13.5 18.5 12 16.22 12 13.5c0-2.72 1.78-5 4.62-5 2.89 0 4.88 2.17 4.88 5H14zm4.62-2c-.1-1.17-1-2-2.12-2s-2 .83-2.12 2h4.24z"/>
              </svg>
              Behance
            </a>
          )}

          {socials.email && (
            <a href={`mailto:${socials.email}`} className="social-btn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
