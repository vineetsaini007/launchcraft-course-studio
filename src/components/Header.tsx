import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ onRegister }: { onRegister: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <a className="logo" href="#top">
        LAUNCH<span>CRAFT</span>
      </a>
      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "open" : ""} aria-label="Main navigation">
        <a href="#outcomes" onClick={() => setOpen(false)}>
          Outcomes
        </a>
        <a href="#curriculum" onClick={() => setOpen(false)}>
          Curriculum
        </a>
        <a href="#instructor" onClick={() => setOpen(false)}>
          Instructor
        </a>
        <a href="#pricing" onClick={() => setOpen(false)}>
          Pricing
        </a>
      </nav>
      <button className="nav-cta" onClick={onRegister}>
        Join the studio
      </button>
    </header>
  );
}
