"use client";

import { useEffect, useState } from "react";

const Spark = () => (
  <svg className="spark" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const TESTIMONIALS = [
  {
    quote: "We stopped losing Friday-night orders to a busy line.",
    name: "Restaurant owner",
    role: "Sorcera customer",
  },
  {
    quote:
      "Every order lands in the POS exactly as the caller said it — nothing lost in translation.",
    name: "General manager",
    role: "Sorcera customer",
  },
  {
    quote: "Our staff is back on the floor instead of running for the phone.",
    name: "Owner & operator",
    role: "Sorcera customer",
  },
  {
    quote: "Callers get a straight answer even at nine on a Friday night.",
    name: "Shift lead",
    role: "Sorcera customer",
  },
  {
    quote: "We haven't missed a catering order since we turned it on.",
    name: "Kitchen manager",
    role: "Sorcera customer",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const len = TESTIMONIALS.length;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, 3000);
    return () => clearInterval(id);
  }, [len]);

  function go(dir: 1 | -1) {
    setIndex((i) => (i + dir + len) % len);
  }

  const prevIndex = (index - 1 + len) % len;
  const nextIndex = (index + 1) % len;

  function renderCard(i: number, position: "side" | "center") {
    const t = TESTIMONIALS[i];
    return (
      <article
        className={`tc-card ${position}`}
        key={i}
        aria-hidden={position !== "center"}
      >
        <div className="tc-head">
          <span className="tc-avatar" aria-hidden="true">
            <Spark />
          </span>
          <div>
            <cite>{t.name}</cite>
            <span>{t.role}</span>
          </div>
        </div>
        <p>{t.quote}</p>
      </article>
    );
  }

  return (
    <div
      className="testimonial-carousel"
      role="region"
      aria-label="Customer testimonials"
      aria-live="polite"
    >
      <button
        type="button"
        className="tc-arrow left"
        aria-label="Previous testimonial"
        onClick={() => go(-1)}
      >
        <ChevronLeft />
      </button>

      <div className="tc-track">
        {renderCard(prevIndex, "side")}
        {renderCard(index, "center")}
        {renderCard(nextIndex, "side")}
      </div>

      <button
        type="button"
        className="tc-arrow right"
        aria-label="Next testimonial"
        onClick={() => go(1)}
      >
        <ChevronRight />
      </button>

      <div className="tc-dots">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.quote}
            type="button"
            className={i === index ? "active" : ""}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
