"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 500);
  }

  if (status === "sent") {
    return (
      <div className="contact-success">
        <h3>Thanks — we&apos;ve got it.</h3>
        <p>Someone from Sorcera will reach out shortly to get your line set up.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="restaurant">Restaurant name</label>
        <input id="restaurant" name="restaurant" type="text" required />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">What&apos;s slowing your phone down?</label>
        <textarea id="message" name="message" rows={4} />
      </div>
      <button className="btn primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send it over"}
      </button>
    </form>
  );
}
