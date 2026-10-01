import { useState } from "react";
import Curriculum from "./components/Curriculum";
import Header from "./components/Header";
import {
  Hero,
  Instructor,
  Outcomes,
  Testimonials,
} from "./components/LandingSections";
import Pricing from "./components/Pricing";
import RegistrationDialog from "./components/RegistrationDialog";

export default function App() {
  const [registering, setRegistering] = useState(false);
  const onRegister = () => setRegistering(true);
  return (
    <>
      <Header onRegister={onRegister} />
      <main id="top">
        <Hero onRegister={onRegister} />
        <Outcomes />
        <Curriculum />
        <Instructor />
        <Testimonials />
        <Pricing onRegister={onRegister} />
      </main>
      <footer className="site-footer">
        <a className="logo" href="#top">
          LAUNCH<span>CRAFT</span>
        </a>
        <p>Fictional course experience created as a portfolio demonstration.</p>
        <span>© 2026 LaunchCraft</span>
      </footer>
      {registering && (
        <RegistrationDialog onClose={() => setRegistering(false)} />
      )}
    </>
  );
}
