import { ArrowRight, Check } from "lucide-react";
import Countdown from "./Countdown";

export default function Pricing({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="pricing" id="pricing">
      <div>
        <p className="eyebrow">COHORT 06 ENROLLMENT</p>
        <h2>Your next launch starts here.</h2>
        <p>
          Enrollment closes when the timer hits zero or the 24-seat studio
          fills.
        </p>
        <Countdown />
      </div>
      <article className="price-card">
        <span>LAUNCHCRAFT LIVE</span>
        <h3>
          $790 <small>or 2 × $415</small>
        </h3>
        <ul>
          <li>
            <Check />4 live strategy workshops
          </li>
          <li>
            <Check />4 implementation labs
          </li>
          <li>
            <Check />
            Personal offer feedback
          </li>
          <li>
            <Check />
            Templates and campaign system
          </li>
          <li>
            <Check />
            Lifetime lesson access
          </li>
        </ul>
        <button className="primary" onClick={onRegister}>
          Reserve your seat <ArrowRight />
        </button>
        <small>Frontend demonstration—no payment will be processed.</small>
      </article>
    </section>
  );
}
