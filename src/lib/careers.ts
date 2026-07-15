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
    id: "software-engineer",
    title: "Software Engineer",
    department: "Engineering",
    location: "Colombo / Galle, Sri Lanka · Hybrid",
    type: "Full-time",
    summary:
      "Build production-grade web applications and intelligent features—shipping clean Next.js products, integrating payments and third-party APIs, and applying ML and data science where it creates real business value.",
    responsibilities: [
      "Design, develop, and maintain full-stack features with a strong focus on Next.js and modern TypeScript/React patterns",
      "Integrate payment gateways and third-party APIs with secure auth, error handling, retry logic, and clear observability",
      "Apply machine learning, model training, and data science practices to product features—from data preparation through evaluation and deployment support",
      "Write clean, well-structured code grounded in solid programming fundamentals: complexity, data structures, and maintainable design",
      "Collaborate with advisors and product stakeholders to turn requirements into reliable, tested releases",
      "Participate in code reviews, documentation, and continuous improvement of engineering standards",
    ],
    requirements: [
      "Solid programming fundamentals and a demonstrated commitment to clean, readable, maintainable code",
      "Hands-on experience with Next.js (App Router familiarity preferred) and modern frontend/backend JavaScript or TypeScript",
      "Practical experience integrating payment gateways and third-party APIs in production or substantial project work",
      "Foundational skills in machine learning, model training, and data science—including data preprocessing, experimentation, and evaluating model quality",
      "Comfort with Git, REST APIs, and debugging across application and integration layers",
      "Degree in Computer Science, Data Science, Software Engineering, or equivalent practical experience",
    ],
    niceToHave: [
      "Exposure to cloud deployment (AWS, Azure, or GCP) and CI/CD pipelines",
      "Experience with Python ML stacks (e.g. scikit-learn, PyTorch, or TensorFlow) alongside JavaScript/TypeScript product work",
      "Familiarity with Stripe, PayHere, or similar payment providers in Sri Lanka or regional markets",
    ],
  },
  {
    id: "platform-engineer",
    title: "Platform Engineer",
    department: "Engineering",
    location: "Colombo / Galle, Sri Lanka · Hybrid",
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
    id: "brand-social-growth-strategist",
    title: "Brand & Social Growth Strategist",
    department: "Marketing & Brand",
    location: "Colombo / Galle, Sri Lanka · Hybrid",
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
  {
    id: "engineering-intern",
    title: "Engineering Intern",
    department: "Engineering",
    location: "Colombo / Galle, Sri Lanka · Hybrid",
    type: "Internship",
    summary:
      "A hands-on internship for learners ready to grow in software engineering and platform engineering—coding real features, supporting deployments, and learning how products ship in a consulting-led technology company.",
    responsibilities: [
      "Contribute to software engineering tasks: feature development, bug fixes, and UI/API improvements under mentorship",
      "Support platform engineering workstreams—environments, basic infrastructure tasks, and release readiness",
      "Write and review code following team standards for clarity, structure, and testing basics",
      "Assist with deployment activities: build checks, staging releases, configuration, and documentation of steps",
      "Learn and apply development workflows: Git, pull requests, code review, and issue tracking",
      "Collaborate with engineers and advisors; communicate progress, blockers, and what you are learning",
    ],
    requirements: [
      "Willingness to learn and work across software engineering and platform engineering—not only one narrow tech skill",
      "Foundational coding ability in at least one language (JavaScript/TypeScript, Python, Java, or similar)",
      "Basic understanding of how web applications are built, tested, and deployed",
      "Curiosity, reliability, and clear communication; comfortable asking questions and taking feedback",
      "Currently pursuing or recently completed a degree/diploma in CS, IT, Software Engineering, or a related field",
    ],
    niceToHave: [
      "Personal projects, coursework, or GitHub samples showing coding or simple deployments",
      "Familiarity with React/Next.js, Node, Docker, or any cloud console (AWS/Azure/GCP)",
      "Interest in both product features and how systems run in production",
    ],
  },
];
