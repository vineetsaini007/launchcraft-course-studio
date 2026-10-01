import { ArrowRight, Play, Quote, Star } from "lucide-react";
import { testimonials } from "../data/course";

export function Hero({ onRegister }: { onRegister: () => void }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">4-WEEK LIVE LAUNCH STUDIO · COHORT 06</p>
          <h1>
            Build the launch <em>people remember.</em>
          </h1>
          <p className="dek">
            Turn what you know into a focused offer, a campaign with a point of
            view, and a launch you can repeat.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={onRegister}>
              Reserve your seat <ArrowRight />
            </button>
            <a href="#curriculum">
              <Play />
              See the curriculum
            </a>
          </div>
          <div className="proof">
            <div className="faces">
              <span>NP</span>
              <span>ML</span>
              <span>ER</span>
            </div>
            <p>
              <b>4.9/5</b> from 180+ independent creatives
            </p>
          </div>
        </div>
        <div className="hero-art">
          <div className="sticker">
            LIVE
            <br />
            OCT 12
          </div>
          <div className="launch-card">
            <span>FROM EXPERTISE</span>
            <b>TO OFFER</b>
            <i>04 WEEKS</i>
          </div>
          <p>Strategy, story, system, ship.</p>
        </div>
      </section>
      <section className="ticker">
        <div>
          POSITIONING ✦ OFFER DESIGN ✦ CAMPAIGN STORY ✦ LAUNCH SYSTEM ✦
          POSITIONING ✦ OFFER DESIGN ✦ CAMPAIGN STORY ✦
        </div>
      </section>
    </>
  );
}

export function Outcomes() {
  return (
    <section className="outcomes" id="outcomes">
      <div>
        <p className="eyebrow">WHAT CHANGES</p>
        <h2>Leave with a launch system, not launch anxiety.</h2>
      </div>
      <div className="outcome-grid">
        <article>
          <b>01</b>
          <h3>A sharper offer</h3>
          <p>
            Name the specific outcome, scope the work, and price it with
            conviction.
          </p>
        </article>
        <article>
          <b>02</b>
          <h3>A useful story</h3>
          <p>
            Build messaging around the real tension your audience already feels.
          </p>
        </article>
        <article>
          <b>03</b>
          <h3>A repeatable launch</h3>
          <p>
            Use a campaign rhythm you can adapt instead of rebuilding every
            time.
          </p>
        </article>
      </div>
    </section>
  );
}

export function Instructor() {
  return (
    <section className="instructor" id="instructor">
      <div className="portrait">
        <img
          src="/maya-chen.jpg"
          alt="Maya Chen, fictional LaunchCraft instructor"
        />
        <div>
          12 YEARS
          <br />
          BUILDING LAUNCHES
        </div>
      </div>
      <div className="bio">
        <p className="eyebrow">YOUR INSTRUCTOR</p>
        <h2>Maya Chen turns good work into clear offers.</h2>
        <p>
          After a decade leading campaigns for independent studios and
          category-defining products, Maya built LaunchCraft to teach the
          strategic decisions behind launches that feel focused, generous, and
          unmistakably yours.
        </p>
        <blockquote>
          “A launch works when the story, offer, and timing all point in the
          same direction.”
        </blockquote>
        <div className="stats">
          <span>
            <b>46</b> launches led
          </span>
          <span>
            <b>$8.4m</b> client revenue
          </span>
          <span>
            <b>6</b> cohorts taught
          </span>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="testimonials">
      <p className="eyebrow">FROM THE STUDIO</p>
      <div className="quote-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name}>
            <Quote />
            <div className="stars">
              {[1, 2, 3, 4, 5].map((index) => (
                <Star key={index} />
              ))}
            </div>
            <p>“{testimonial.quote}”</p>
            <footer>
              <b>{testimonial.name}</b>
              <span>{testimonial.role}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
