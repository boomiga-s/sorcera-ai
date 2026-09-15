import Image from "next/image";
import CallDemo from "./components/CallDemo";
import { StepNumeral } from "./components/StepNumeral";
import NavScrollBg from "./components/NavScrollBg";
import SiteNav from "./components/SiteNav";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

const CUSTOMER_LOGOS = [
  { src: "/The pulao Company Logo.png", alt: "The Pulao Company" },
  { src: "/HBK Logo.png", alt: "House of Biryani and Kebabs" },
  { src: "/Frame 1160450186.png", alt: "Brisita House" },
  { src: "/Nawabi Hyderabad House Logo.png", alt: "Hyderabad House" },
  { src: "/The Monks Logo.png", alt: "The Monks" },
];

const Spark = () => (
  <svg className="spark" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <NavScrollBg />
      <SiteNav />

      <header className="hero dark" id="top">
        <div className="wrap">
          <CallDemo />
        </div>
      </header>

      <section className="customers light" id="customers">
        <div className="wrap">
          <p className="intro">Answering the phone at</p>
          <div className="logo-strip">
            {CUSTOMER_LOGOS.map((logo) => (
              <div className="logo-item" key={logo.alt}>
                <div className="logo-box">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="160px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="logo-name">{logo.alt}</span>
              </div>
            ))}
          </div>

          <div className="stats">
            <div className="stat-card stat-featured">
              <b>100%</b>
              <span>
                of calls picked up, including the ones that come in while the
                line is busy
              </span>
            </div>
            <div className="stat-card">
              <b>Every order</b>
              <span>
                lands straight in your POS the moment the caller hangs up —
                nothing retyped, nothing missed
              </span>
            </div>
            <div className="stat-card">
              <b>24/7</b>
              <span>
                on the line, including holidays, so the phone is never the
                reason you lose a sale
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt problem" id="problem">
        <div className="wrap">
          <div className="head">
            <h2>
              It&apos;s 7:40 on a Saturday
              <br />
              and the phone is ringing
              <br />
              again.
            </h2>
            <p className="lede">
              The line is out the door, six tickets are up, and the only
              person free
              <br />
              is the one on the grill. Nobody can pick up. Nobody should have
              to.
            </p>
          </div>
          <div className="pains">
            <div className="pain">
              <h3>A missed call is a missed order.</h3>
              <p>
                A caller who reaches voicemail doesn&apos;t call back. They
                open a delivery app and order from whoever picks up, and you
                earn nothing.
              </p>
            </div>
            <div className="pain">
              <h3>Your staff can&apos;t be in two places.</h3>
              <p>
                Every time someone stops plating to grab the phone, two tables
                wait, an order gets scribbled on a pad, and something gets
                keyed in wrong.
              </p>
            </div>
            <div className="pain">
              <h3>Callers won&apos;t hold.</h3>
              <p>
                Three rings, no answer, gone. On a weekend night that&apos;s
                most of your phone orders, and the busiest hour is exactly
                when it happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section light" id="how">
        <div className="wrap">
          <div className="head">
            <h2>Live before tomorrow&apos;s dinner service.</h2>
            <p className="lede">
              Keep your number, keep your register, keep your staff on the
              floor. Setup is a phone call and an afternoon.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-head">
                <StepNumeral n={1} />
                <h3>Forward your line.</h3>
              </div>
              <p>
                Same number your customers already know. Send every call to
                Sorcera, or only the ones your staff can&apos;t get to in
                three rings.
              </p>
            </div>
            <div className="step">
              <div className="step-head">
                <StepNumeral n={2} />
                <h3>Sorcera answers every call.</h3>
              </div>
              <p>
                Takes the order, books the table, quotes the catering tray,
                tells them you close at ten. From your menu, at your prices,
                in the caller&apos;s language.
              </p>
            </div>
            <div className="step">
              <div className="step-head">
                <StepNumeral n={3} />
                <h3>The order lands in your POS.</h3>
              </div>
              <p>
                Modifiers, pickup time, name, and payment status. It shows up
                on the kitchen screen like any other ticket, with nothing to
                retype.
              </p>
            </div>
          </div>
          <div className="registers">
            <em>Works with</em>
            <span>Toast</span>
            <span>Square</span>
            <span>Clover</span>
            <span>Brisque</span>
          </div>
        </div>
      </section>

      <section className="section alt" id="menus">
        <div className="wrap">
          <div className="head">
            <h2>Built for the way people actually order.</h2>
            <p className="lede">
              Callers don&apos;t read the menu. They ask for &quot;the chicken
              thing with the rice,&quot; change their mind twice, and want to
              know if you&apos;re open. Sorcera keeps up.
            </p>
          </div>
          <div className="timeline">
            <div className="tl-row right">
              <div className="tl-marker">
                <span className="tl-circle tl-circle-1">01</span>
                <span className="tl-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                </span>
              </div>
              <div className="tl-content">
                <h3>Says the food right.</h3>
                <p>
                  Pho, gnocchi, bulgogi, tikka masala. Pronounced the way your
                  regulars say it, not the way a spellchecker would.
                </p>
              </div>
            </div>
            <div className="tl-row left">
              <div className="tl-marker">
                <span className="tl-circle tl-circle-2">02</span>
                <span className="tl-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                </span>
              </div>
              <div className="tl-content">
                <h3>Knows your modifiers.</h3>
                <p>
                  Spice level, no onions, sub fries for salad, gluten-free
                  bun, sauce on the side. Only the changes you&apos;ve
                  allowed.
                </p>
              </div>
            </div>
            <div className="tl-row right">
              <div className="tl-marker">
                <span className="tl-circle tl-circle-3">03</span>
                <span className="tl-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                </span>
              </div>
              <div className="tl-content">
                <h3>Speaks the caller&apos;s language.</h3>
                <p>
                  A caller who starts in English and finishes in Spanish
                  doesn&apos;t have to repeat anything. Sorcera switches
                  mid-call and follows.
                </p>
              </div>
            </div>
            <div className="tl-row left">
              <div className="tl-marker">
                <span className="tl-circle tl-circle-1">04</span>
                <span className="tl-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                </span>
              </div>
              <div className="tl-content">
                <h3>Handles the big orders.</h3>
                <p>
                  Catering trays, the office lunch for forty, a birthday with
                  two custom items. Captured, priced, and confirmed by text
                  before the caller hangs up.
                </p>
              </div>
            </div>
            <div className="tl-row right">
              <div className="tl-marker">
                <span className="tl-circle tl-circle-2">05</span>
                <span className="tl-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                </span>
              </div>
              <div className="tl-content">
                <h3>Hands off when it should.</h3>
                <p>
                  A caller who asks for a person is transferred to your
                  staff, with everything they&apos;ve said so far passed
                  along.
                </p>
              </div>
            </div>
            <div className="tl-row left">
              <div className="tl-marker">
                <span className="tl-circle tl-circle-3">06</span>
                <span className="tl-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                </span>
              </div>
              <div className="tl-content">
                <h3>Shows you every call.</h3>
                <p>
                  Recordings, transcripts, and a daily summary of what was
                  ordered, what was asked, and what people wanted that
                  isn&apos;t on the menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt testimonial" id="testimonial">
        <div className="wrap">
          <div className="head testimonial-head">
            <span className="eyebrow">What our customers say about us</span>
            <h2>Testimonials</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="section light" id="faq">
        <div className="wrap faq-wrap">
          <div className="head faq-intro">
            <span className="eyebrow">FAQ</span>
            <h2>Questions owners ask us.</h2>
          </div>
          <div className="faq">
            <details className="faq-card">
              <summary>
                <span>Can I keep my phone number?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div>
                Yes. You forward your existing line to Sorcera. Customers dial
                the number they&apos;ve always dialed and nothing changes for
                them.
              </div>
            </details>
            <details className="faq-card">
              <summary>
                <span>What happens when my menu or prices change?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div>
                Sorcera reads your menu from your POS. A price change or an
                86&apos;d item is live on the phone the moment it&apos;s live
                on your register.
              </div>
            </details>
            <details className="faq-card">
              <summary>
                <span>Does it handle special requests?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div>
                Substitutions, allergies, spice levels, and dietary versions
                are all handled. You decide which modifications are allowed,
                and Sorcera politely declines the rest.
              </div>
            </details>
            <details className="faq-card">
              <summary>
                <span>What if a caller wants a real person?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div>
                Sorcera transfers the call to whoever you name and tells them
                what the caller has already said. It takes the routine calls
                so your team is free for the ones that need them.
              </div>
            </details>
            <details className="faq-card">
              <summary>
                <span>Do I need new hardware or an app?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div>
                No hardware, no tablet on the counter, no app for your staff.
                You get a dashboard with recordings, transcripts, and
                settings.
              </div>
            </details>
            <details className="faq-card">
              <summary>
                <span>Which POS systems does it work with?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div>
                Toast, Square, Clover, and Brisque today. Orders appear in
                your POS exactly like any other order. If you run something
                else, ask and we&apos;ll tell you the timeline.
              </div>
            </details>
            <details className="faq-card">
              <summary>
                <span>Is there a contract?</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <div>
                Month to month. If it isn&apos;t answering your phone better
                than it was answered before, cancel and get your first month
                back.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section dark cta" id="book">
        <div className="wrap">
          <h2>Stop losing dinner to voicemail.</h2>
          <p className="lede">
            Every restaurant on Sorcera picks up every call and never retypes
            an order. Yours can by tomorrow night.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#contact-form">
              Contact us
            </a>
            <small>First month money-back. No setup fee.</small>
          </div>
        </div>
      </section>

      <section className="section light" id="contact-form">
        <div className="wrap">
          <div className="head contact-head">
            <span className="eyebrow">Contact us</span>
            <h2>Tell us about your restaurant.</h2>
            <p className="lede">
              We&apos;ll reach out to set up Sorcera on your line, usually
              within a day.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site">
        <div className="wrap">
          <div className="foot">
            <div>
              <a className="wordmark" href="#top">
                Sorcera
                <Spark />
              </a>
              <p>
                Every call answered, every order in your POS, no new
                hardware.
              </p>
            </div>
            <div>
              <strong>Sorcera</strong>
              <ul>
                <li>
                  <a href="#how">How it works</a>
                </li>
                <li>
                  <a href="#customers">Customers</a>
                </li>
                <li>
                  <a href="#menus">Features</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <strong>Talk to us</strong>
              <ul>
                <li>
                  <a href="#contact-form">Contact us</a>
                </li>
                <li>
                  <a href="#top">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 Sorcera. All rights reserved.</span>
            <span>
              <a href="#top">Privacy</a>
              &nbsp;&nbsp;&nbsp;
              <a href="#top">Terms</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

