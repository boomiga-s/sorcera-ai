const Spark = () => (
  <svg className="spark" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" />
  </svg>
);

export default function SiteNav() {
  return (
    <nav className="nav" aria-label="Main">
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle-input"
        aria-hidden="true"
      />
      <div className="wrap">
        <a className="wordmark" href="#top" aria-label="Sorcera home">
          Sorcera
          <Spark />
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#customers">Customers</a>
          <a href="#menus">Features</a>
          <a href="#faq">FAQ</a>
          <a className="btn primary small" href="#contact-form">
            Contact us
          </a>
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
          <a href="#how">
            <span>How it works</span>
          </a>
          <a href="#customers">
            <span>Customers</span>
          </a>
          <a href="#menus">
            <span>Features</span>
          </a>
          <a href="#faq">
            <span>FAQ</span>
          </a>
        </div>
        <div className="nav-mobile-foot">
          <a className="btn primary" href="#contact-form">
            Contact us
          </a>
          <p>Live in a day · No new hardware · Month to month</p>
        </div>
      </div>
    </nav>
  );
}
