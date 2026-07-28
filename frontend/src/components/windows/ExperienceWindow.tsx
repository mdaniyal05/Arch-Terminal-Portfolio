import { experience } from "../../data/experience";

export default function ExperienceWindow() {
  return (
    <div className="space-y-5">
      <p className="text-text-muted"># cat experience.log</p>

      {experience.map((entry) => (
        <div key={entry.id}>
          <h3 className="text-hypr font-semibold">
            {entry.role} <span className="text-text-muted">@</span>{" "}
            {entry.company}
          </h3>
          <p className="text-xs text-text-muted mt-0.5">
            {entry.period} · {entry.location}
          </p>

          <ul className="mt-2 space-y-1">
            {entry.highlights.map((h, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-success">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
