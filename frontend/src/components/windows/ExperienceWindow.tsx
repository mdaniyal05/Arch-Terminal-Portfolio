import { experience } from "../../data/experience";

export default function ExperienceWindow() {
  return (
    <div className="space-y-5">
      <p className="text-text-muted"># cat experience.log</p>

      {experience.map((entry) => (
        <div key={entry.id} className="border-l-2 border-arch/40 pl-4">
          <div className="flex items-baseline justify-between flex-wrap gap-x-2">
            <h3 className="text-hypr font-semibold">
              {entry.role} <span className="text-text-muted">@</span>{" "}
              {entry.company}
            </h3>
            <span className="text-xs text-text-muted whitespace-nowrap">
              {entry.period}
            </span>
          </div>
          <p className="text-xs text-text-muted mt-0.5">{entry.location}</p>

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
