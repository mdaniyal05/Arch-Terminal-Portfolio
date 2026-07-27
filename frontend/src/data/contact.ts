export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "email",
    value: "dev@danilambda.com",
    href: "mailto:dev@danilambda.com",
  },
  {
    id: "github",
    label: "github",
    value: "github.com/mdaniyal05",
    href: "https://github.com/mdaniyal05",
  },
  {
    id: "linkedin",
    label: "linkedin",
    value: "linkedin.com/in/muhammad-daniyal-009b1631b",
    href: "https://linkedin.com/in/muhammad-daniyal-009b1631b",
  },
];
