import Link from "next/link";

const Spark = () => (
  <svg className="spark" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" />
  </svg>
);

export default function SiteNav({
  contactHref = "/contact",
}: {
  contactHref?: string;
}) {
  return (
    <nav className="nav" aria-label="Main">
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle-input"
        aria-hidden="true"
      />
      <div className="wrap">
        <Link className="wordmark" href="/#top" aria-label="Sorcera home">
          Sorcera
          <Spark />
        </Link>
        <div className="nav-links">
          <Link href="/#how">How it works</Link>
          <Link href="/#customers">Customers</Link>
          <Link href="/#menus">Features</Link>
          <Link href="/#faq">FAQ</Link>
          <Link className="btn primary small" href={contactHref}>
            Contact us
          </Link>
        </div>
        <label
          htmlFor="nav-toggle"
          className="nav-toggle"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <label
        htmlFor="nav-toggle"
        className="nav-backdrop"
        aria-hidden="true"
      ></label>
      <div className="nav-mobile-panel" id="nav-mobile-panel">
        <div className="nav-mobile-head">
          <span className="wordmark">
            Sorcera
            <Spark />
          </span>
        </div>
        <div className="nav-mobile-links">
          <Link href="/#how">
            <span>How it works</span>
          </Link>
          <Link href="/#customers">
            <span>Customers</span>
          </Link>
          <Link href="/#menus">
            <span>Features</span>
          </Link>
          <Link href="/#faq">
            <span>FAQ</span>
          </Link>
        </div>
        <div className="nav-mobile-foot">
          <Link className="btn primary" href={contactHref}>
            Contact us
          </Link>
          <p>Live in a day · No new hardware · Month to month</p>
        </div>
      </div>
    </nav>
  );
}
