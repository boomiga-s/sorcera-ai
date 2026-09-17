"use client";

import { useState } from "react";

const SMTP_API_BASE_URL = process.env.NEXT_PUBLIC_SMTP_API_BASE_URL;
const SMTP_LOCATION_ID = process.env.NEXT_PUBLIC_SMTP_LOCATION_ID;
const SMTP_PURPOSE = process.env.NEXT_PUBLIC_SMTP_PURPOSE || "CONTACT";

type FieldName = "name" | "restaurant" | "email" | "phone" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = { name: "", restaurant: "", email: "", phone: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_RE = /^\+?[\d\s\-().]+$/;

function validateField(field: FieldName, raw: string): string | undefined {
  const value = raw.trim();
  switch (field) {
    case "name":
      if (!value) return "Please enter your name.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      return;
    case "restaurant":
      if (!value) return "Please enter your restaurant name.";
      return;
    case "email":
      if (!value) return "Please enter your email.";
      if (!EMAIL_RE.test(value)) return "Please enter a valid email address.";
      return;
    case "phone": {
      if (!value) return "Please enter your phone number.";
      const digits = value.replace(/\D/g, "");
      if (!PHONE_CHARS_RE.test(value) || digits.length < 10 || digits.length > 15) {
        return "Please enter a valid phone number (10–15 digits).";
      }
      return;
    }
    case "message":
      if (!value) return "Please tell us a little about your restaurant.";
      if (value.length < 10) return "Message must be at least 10 characters.";
      return;
  }
}

function validateAll(values: Values): Errors {
  const errors: Errors = {};
  for (const field of Object.keys(values) as FieldName[]) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [submitError, setSubmitError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const field = e.target.name as FieldName;
    const value = e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    if (touched[field]) {
      setErrors((err) => ({ ...err, [field]: validateField(field, value) }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const field = e.target.name as FieldName;
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((err) => ({ ...err, [field]: validateField(field, values[field]) }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");

    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    setTouched({ name: true, restaurant: true, email: true, phone: true, message: true });
    const firstInvalid = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    if (!SMTP_API_BASE_URL || !SMTP_LOCATION_ID) {
      console.error(
        "ContactForm: NEXT_PUBLIC_SMTP_API_BASE_URL and NEXT_PUBLIC_SMTP_LOCATION_ID must be set."
      );
      setSubmitError("Something went wrong. Please try again later.");
      return;
    }

    const formData = new FormData();
    formData.append("locationId", SMTP_LOCATION_ID);
    formData.append("purpose", SMTP_PURPOSE);
    formData.append("firstName", values.name.trim());
    formData.append("email", values.email.trim());
    formData.append("contactNumber", values.phone.trim());
    formData.append("restaurantName", values.restaurant.trim());
    formData.append("message", values.message.trim());

    setStatus("sending");
    try {
      const response = await fetch(`${SMTP_API_BASE_URL}/api/send-email-smtp`, {
        method: "POST",
        body: formData,
      });
      const data: { success?: boolean; error?: string } = await response
        .json()
        .catch(() => ({}));

      if (!response.ok || !data.success) {
        setSubmitError(data.error || "We couldn't send your message. Please try again.");
        setStatus("idle");
        return;
      }
      setStatus("sent");
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-success" role="status">
        <h3>Thanks — we&apos;ve got it.</h3>
        <p>Someone from Sorcera will reach out shortly to get your line set up.</p>
      </div>
    );
  }

  function fieldProps(field: FieldName) {
    const error = touched[field] ? errors[field] : undefined;
    return {
      id: field,
      name: field,
      value: values[field],
      onChange: handleChange,
      onBlur: handleBlur,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${field}-error` : undefined,
    };
  }

  function fieldError(field: FieldName) {
    const error = touched[field] ? errors[field] : undefined;
    return error ? (
      <span className="field-error" id={`${field}-error`}>
        {error}
      </span>
    ) : null;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input {...fieldProps("name")} type="text" autoComplete="name" maxLength={100} />
        {fieldError("name")}
      </div>
      <div className="field">
        <label htmlFor="restaurant">Restaurant name</label>
        <input {...fieldProps("restaurant")} type="text" maxLength={150} />
        {fieldError("restaurant")}
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input {...fieldProps("email")} type="email" autoComplete="email" maxLength={254} />
          {fieldError("email")}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input {...fieldProps("phone")} type="tel" autoComplete="tel" maxLength={20} />
          {fieldError("phone")}
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">What&apos;s slowing your phone down?</label>
        <textarea {...fieldProps("message")} rows={4} maxLength={2000} />
        {fieldError("message")}
      </div>
      {submitError && (
        <p className="form-error" role="alert">
          {submitError}
        </p>
      )}
      <button className="btn primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send it over"}
      </button>
    </form>
  );
}
