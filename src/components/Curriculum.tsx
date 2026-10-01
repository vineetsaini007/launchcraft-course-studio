import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { modules } from "../data/course";

export default function Curriculum() {
  const [open, setOpen] = useState(0);
  return (
    <section className="curriculum" id="curriculum">
      <div className="section-intro">
        <p className="eyebrow">THE CURRICULUM</p>
        <h2>
          Four weeks.
          <br />
          One clear launch.
        </h2>
        <p>
          Live workshops on Tuesdays, implementation labs on Fridays, and
          feedback throughout.
        </p>
      </div>
      <div className="modules">
        {modules.map((module, index) => (
          <article
            className={open === index ? "active" : ""}
            key={module.number}
          >
            <button
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
            >
              <span>{module.number}</span>
              <h3>{module.title}</h3>
              <ChevronDown />
            </button>
            {open === index && (
              <div className="module-body">
                <p>{module.description}</p>
                <ul>
                  {module.lessons.map((lesson) => (
                    <li key={lesson}>
                      <Check />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
