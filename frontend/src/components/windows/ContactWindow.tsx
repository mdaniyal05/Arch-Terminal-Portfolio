import { Mail, ExternalLink } from "lucide-react";
import { contactLinks } from "../../data/contact";

export default function ContactWindow() {
  return (
    <div className="space-y-4">
      <p className="text-text-muted"># cat contact.md</p>

      <div className="space-y-2">
        {contactLinks.map((link) => {
          const Icon = link.id === "email" ? Mail : ExternalLink;
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded border border-border hover:border-arch/50 hover:bg-surface-hi/50 transition-colors"
            >
              <Icon size={16} />
              <span className="text-text-muted w-16 text-xs uppercase tracking-wide">
                {link.label}
              </span>
              <span className="text-text-primary text-sm">{link.value}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
