"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
    quote:
      "Voice ordering makes it so much easier to keep up with calls during our busiest hours. We can focus on the restaurant while every order keeps moving.",
    name: "The Pulao Company",
    logo: "/The pulao Company Logo.png",
  },
  {
    quote:
      "We no longer have to worry about missing calls when the restaurant gets busy. Orders are handled quickly and our team can focus on serving guests.",
    name: "House of Biryani and Kebabs",
    logo: "/HBK Logo.png",
  },
  {
    quote:
      "Our phone orders are handled without interrupting the team. It has made the ordering experience faster and much more convenient for our customers.",
    name: "Brisita House",
    logo: "/Frame 1160450186.png",
  },
  {
    quote:
      "During peak hours, every phone call matters. Voice ordering helps us capture those orders while our staff stays focused on the customers in front of us.",
    name: "Hyderabad House",
    logo: "/Nawabi Hyderabad House Logo.png",
  },
  {
    quote:
      "The biggest difference is that customers don't have to wait for someone to answer the phone. Orders keep coming in even when we're busy.",
    name: "The Monks",
    logo: "/The Monks Logo.png",
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
          <span className="tc-avatar">
            <Image src={t.logo} alt={t.name} width={36} height={36} />
          </span>
          <div>
            <cite>{t.name}</cite>
            <span>Sorcera customer</span>
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
            key={t.name}
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
