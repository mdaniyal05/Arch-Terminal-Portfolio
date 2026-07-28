export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer (Internship)",
    company: "Wolke Consultancy",
    period: "DEC 2025 - MAR 2026",
    location: "Karachi, Pakistan (On-Site)",
    highlights: [
      "Promoted to Junior Software Engineer within 2 months of internship, recognized for resolving 15+ critical bugs (90% fix accuracy), delivering all tasks ahead of schedule, and translating 10+ customer pain points into implemented features across LMS, CRM, and SAAS platforms.",
    ],
  },
  {
    id: "exp-2",
    role: "Junior Software Engineer (Full Time)",
    company: "Wolke Consultancy",
    period: "MAR 2026 - JULY 2026",
    location: "Karachi, Pakistan (On-Site)",
    highlights: [
      "Developed and maintained full stack applications using MERN and PERN stacks for LMS, CRM, and SaaS products; implemented business logic that improved process efficiency by 30% and maintained 95% code quality through rigorous testing and 5+ iterative feedback cycles per feature.",
      "Collaborated with a team of 4 engineers to resolve 10+ complex technical issues across multiple SaaS environments, reducing average resolution time by 25% and achieving 100% on time delivery for sprint milestones, including CRM and LMS modules.",
      "Designed and deployed AI powered automation that streamlined internal workflows, reducing manual effort by 35% and achieved 95% accuracy in automated task processing.",
    ],
  },
];
