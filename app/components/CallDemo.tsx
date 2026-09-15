"use client";

const Spark = () => (
  <svg className="spark" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" />
  </svg>
);

export default function CallDemo() {
  return (
    <>
      <div>
        <h1>Your phone, answered. Every call, every time.</h1>
        <p className="lede">
          Sorcera is an AI voice agent for your restaurant&apos;s phone line.
          It picks up on the first ring, takes the order, and drops it into
          Toast, Square, Clover, or Brisque as if your own staff typed it.
        </p>
        <div className="hero-ctas">
          <a className="btn primary" href="#contact-form">
            Contact us
          </a>
        </div>
        <div className="trust">
          <span>
            <i></i>Live in a day
          </span>
          <span>
            <i></i>No new hardware
          </span>
          <span>
            <i></i>Month to month
          </span>
          <span>
            <i></i>First month money-back
          </span>
        </div>
      </div>

      <div className="call play" id="call" aria-label="Sample phone order">
        <p className="call-head">
          <strong>Zesto Pizza</strong>
          <span className="live">
            <i></i>On the line
          </span>
        </p>
        <div className="line sorcera">
          <span className="avatar">
            <Spark />
          </span>
          <span className="bubble">
            Zesto Pizza, this is Sorcera. What can I get started for you?
          </span>
        </div>
        <div className="line caller">
          <span className="avatar">S</span>
          <span className="bubble">
            Two salmon bowls and an order of fries. Pickup around seven.
          </span>
        </div>
        <div className="line sorcera">
          <span className="avatar">
            <Spark />
          </span>
          <span className="bubble">
            Two salmon bowls, one fries, ready at 7:00. Anything to change on
            the bowls?
          </span>
        </div>
        <div className="line caller">
          <span className="avatar">S</span>
          <span className="bubble">No onions on one. Under Sam.</span>
        </div>
        <div className="line sorcera">
          <span className="avatar">
            <Spark />
          </span>
          <span className="bubble">
            Got it, Sam. $38.50 at pickup. See you at seven.
          </span>
        </div>
        <div className="ticket" aria-live="polite">
          <div className="ticket-top">
            <strong>
              <span className="check">
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 6.5l2.6 2.5L10 3.5" />
                </svg>
              </span>
              Sent to the kitchen
            </strong>
            <span className="badge">Toast</span>
          </div>
          <div className="ticket-body">
            <div className="ticket-row">
              <span>2 × Salmon bowl, one no onions</span>
              <span>$33.00</span>
            </div>
            <div className="ticket-row">
              <span>1 × Fries</span>
              <span>$5.50</span>
            </div>
            <div className="ticket-row total">
              <span>Total at pickup</span>
              <span>$38.50</span>
            </div>
            <div className="ticket-meta">
              <span>Pickup 7:00 PM</span>
              <span>Sam</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
