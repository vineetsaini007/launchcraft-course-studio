import { ArrowRight, Check, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function RegistrationDialog({
  onClose,
}: {
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const controls = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled]), input",
        ) ?? [],
      );
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose]);
  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-title"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close registration"
        >
          <X />
        </button>
        {step < 3 && (
          <div className="steps">
            <span className="active">1</span>
            <i />
            <span className={step >= 2 ? "active" : ""}>2</span>
          </div>
        )}
        {step === 1 ? (
          <>
            <p className="eyebrow">STEP 1 OF 2</p>
            <h2 id="register-title">Save your seat.</h2>
            <label>
              Name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your full name"
                autoFocus
              />
            </label>
            <label>
              Email
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                type="email"
              />
            </label>
            <button
              className="primary wide"
              onClick={() => setStep(2)}
              disabled={
                !name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
              }
            >
              Continue <ArrowRight />
            </button>
          </>
        ) : step === 2 ? (
          <>
            <p className="eyebrow">STEP 2 OF 2</p>
            <h2 id="register-title">What are you launching?</h2>
            <div className="goal-options">
              {[
                "A course or cohort",
                "A creative service",
                "A digital product",
                "Still deciding",
              ].map((option) => (
                <button
                  className={goal === option ? "selected" : ""}
                  onClick={() => setGoal(option)}
                  key={option}
                >
                  {option}
                  <Check />
                </button>
              ))}
            </div>
            <button
              className="primary wide"
              onClick={() => setStep(3)}
              disabled={!goal}
            >
              Complete registration <ArrowRight />
            </button>
          </>
        ) : (
          <div className="success">
            <span>
              <Check />
            </span>
            <p className="eyebrow">REGISTRATION PREVIEW</p>
            <h2 id="register-title">
              Welcome to the studio, {name.trim().split(" ")[0]}.
            </h2>
            <p>
              This is a simulated registration. No details were sent or stored,
              and no payment was processed.
            </p>
            <button className="primary wide" onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
