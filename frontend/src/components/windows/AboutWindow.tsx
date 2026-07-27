import { aboutData } from "../../data/about";

export default function AboutWindow() {
  return (
    <div className="space-y-4">
      <p className="text-text-muted"># whoami</p>

      <div>
        <h2 className="text-hypr font-semibold">{aboutData.name}</h2>
        <p className="text-text-muted text-xs mt-0.5">
          {aboutData.role} · {aboutData.location}
        </p>
      </div>

      <div className="space-y-1">
        {aboutData.bio.map((line, i) =>
          line === "" ? <div key={i} className="h-2" /> : <p key={i}>{line}</p>,
        )}
      </div>

      <div>
        <p className="text-text-muted mb-2"># stack</p>
        <div className="flex flex-wrap gap-2">
          {aboutData.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-1 rounded border border-border bg-surface-hi text-text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
