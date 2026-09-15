"use client";

import { useEffect } from "react";

export default function NavScrollBg() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 8) {
        nav?.classList.add("nav-scrolled");
      } else {
        nav?.classList.remove("nav-scrolled");
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const toggle = document.getElementById(
      "nav-toggle"
    ) as HTMLInputElement | null;
    const panel = document.getElementById("nav-mobile-panel");
    if (!toggle || !panel) return;

    function close() {
      toggle!.checked = false;
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    panel.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).closest("a")) close();
    });
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}
