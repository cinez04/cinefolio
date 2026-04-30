// src/hooks/useScrollReveal.js
import { useState, useEffect } from "react";

/**
 * Custom hook that observes elements with [data-reveal-id]
 * and adds "visible" class when they enter the viewport.
 */
export function useScrollReveal() {
  const [visible, setVisible] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, entry.target.dataset.revealId]));
          }
        });
      },
      { threshold: 0.12 }
    );

    const els = document.querySelectorAll("[data-reveal-id]");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /**
   * Returns props to spread onto a reveal element.
   * @param {string} id   - unique identifier
   * @param {number} delay - animation delay in ms
   */
  const revealProps = (id, delay = 0) => ({
    className: `reveal${visible.has(id) ? " visible" : ""}`,
    "data-reveal-id": id,
    style: { transitionDelay: `${delay}ms` },
  });

  return { revealProps, visible };
}
