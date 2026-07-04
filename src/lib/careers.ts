export type CareerOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "lead-platform-engineer",
    title: "Lead Platform Engineer",
    department: "Engineering",
    location: "Colombo, Sri Lanka · Hybrid",
    type: "Full-time",
    summary:
      "Own architecture and delivery for scalable platforms—partnering with consultants and product teams to turn strategy into production-ready systems.",
    responsibilities: [
      "Design and build cloud-native services, APIs, and data layers aligned with enterprise architecture standards",
      "Lead technical decisions across stack, patterns, and trade-offs—balancing speed, security, and long-term maintainability",
      "Mentor engineers through code review, pairing, and clear documentation",
      "Collaborate with advisors and stakeholders to translate business requirements into technical roadmaps",
      "Establish engineering practices: CI/CD, observability, testing, and release discipline",
    ],
    requirements: [
      "5+ years building production web or platform systems (TypeScript/Node, .NET, Java, or similar)",
      "Strong experience with cloud platforms (AWS, Azure, or GCP) and container orchestration",
      "Solid grasp of solution architecture, API design, and database modeling",
      "Comfort owning features end-to-end in async, cross-functional teams",
      "Clear written and verbal communication with technical and non-technical audiences",
    ],
    niceToHave: [
      "Experience in consulting, product, or multi-tenant SaaS environments",
      "Familiarity with AI/ML integration patterns and event-driven architecture",
    ],
  },
  {
    id: "platform-engineer",
    title: "Platform Engineer",
    department: "Engineering",
    location: "Colombo, Sri Lanka · Hybrid",
    type: "Full-time",
    summary:
      "Build and ship reliable product features across our platform stack—focused on clean code, user impact, and continuous learning.",
    responsibilities: [
      "Develop frontend and backend features using modern frameworks and component-driven UI",
      "Write tested, maintainable code and participate in design and sprint ceremonies",
      "Integrate third-party services, internal APIs, and authentication flows",
      "Monitor performance and fix issues with support from senior engineers",
      "Contribute to internal libraries, tooling, and engineering culture",
    ],
    requirements: [
      "2+ years professional software development experience",
      "Proficiency in at least one modern stack (e.g. React/Next.js, Node, or equivalent)",
      "Understanding of REST APIs, Git workflows, and basic cloud deployment concepts",
      "Growth mindset—open to feedback and eager to deepen architecture skills",
      "Degree in CS/Engineering or equivalent practical experience",
    ],
    niceToHave: [
      "Exposure to TypeScript, Tailwind, or design systems",
      "Side projects or open-source contributions",
    ],
  },
  {
    id: "senior-cloud-platform-engineer",
    title: "Senior Cloud & Reliability Engineer",
    department: "Platform Operations",
    location: "Colombo, Sri Lanka · Remote-friendly",
    type: "Full-time",
    summary:
      "Design resilient infrastructure and delivery pipelines that keep our platforms secure, observable, and cost-efficient at scale.",
    responsibilities: [
      "Build and maintain IaC, Kubernetes/Docker workloads, and multi-environment CI/CD pipelines",
      "Implement monitoring, alerting, SLOs, and incident response practices",
      "Partner with engineering on security hardening, secrets management, and compliance readiness",
      "Optimize cloud spend and performance without compromising reliability",
      "Document runbooks and automate toil across deployments and operations",
    ],
    requirements: [
      "4+ years in DevOps, SRE, or cloud infrastructure roles",
      "Hands-on with Terraform or Pulumi, Docker, and at least one major cloud provider",
      "Experience with GitHub Actions, GitLab CI, or similar pipeline tooling",
      "Understanding of networking, IAM, and zero-trust security principles",
      "Calm under pressure during incidents with strong troubleshooting skills",
    ],
    niceToHave: [
      "Certifications (AWS/Azure/GCP) or experience in regulated industries",
      "Knowledge of platform engineering patterns and internal developer portals",
    ],
  },
  {
    id: "brand-social-growth-strategist",
    title: "Brand & Social Growth Strategist",
    department: "Marketing & Brand",
    location: "Colombo, Sri Lanka · Hybrid",
    type: "Full-time",
    summary:
      "Shape how nZO shows up digitally—building authority, demand, and trust with executives through strategic content and social presence.",
    responsibilities: [
      "Own social strategy across LinkedIn and relevant B2B channels aligned with consulting positioning",
      "Plan and execute content calendars: thought leadership, case narratives, events, and employer brand",
      "Collaborate with leadership and advisors to translate expertise into compelling stories",
      "Track engagement, pipeline influence, and brand metrics—iterate based on data",
      "Maintain premium visual and tonal standards consistent with an executive advisory brand",
    ],
    requirements: [
      "3+ years in B2B marketing, brand, or social strategy (tech or professional services preferred)",
      "Portfolio demonstrating strategic content—not just posting, but narrative and audience building",
      "Strong writing and editing skills for executive and LinkedIn-native formats",
      "Comfort with analytics tools and basic design collaboration (Figma, Canva, or agency workflows)",
      "Understanding of technology consulting or enterprise buyer journeys",
    ],
    niceToHave: [
      "Experience marketing to CEOs, founders, or enterprise decision-makers",
      "Video, podcast, or webinar production coordination",
    ],
  },
];
