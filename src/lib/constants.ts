export const SITE = {
  name: "nZO Innovations (Pvt) Ltd",
  shortName: "nZO Innovations",
  brandName: "n Zero One Innovations",
  logoIcon: "/nzo-icon.png",
  logoFull: "/nzo-logo-full.png",
  tagline:
    "We don't just build software. We design the right solution for your business growth.",
  description:
    "Technology consulting and solution advisory helping startups, SMEs, and enterprises drive digital transformation through strategy, architecture, and AI.",
  url: "https://nzoinnovations.com",
  email: "hello@nzoinnovations.com",
  phone: "+94 77 363 8063",
  address: "46 Lighthouse St, Galle 80000",
  linkedin: "https://www.linkedin.com/company/114184182/",
  facebook: "https://facebook.com/nzoinnovations",
} as const;

export const LOGO_MARK = {
  width: 36,
  height: 36,
  borderRadius: 8,
  export1x: { width: 36, height: 36 },
  export2x: { width: 72, height: 72 },
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Our Approach", href: "/approach" },
  { label: "Products", href: "/products" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const TRUST_PILLARS = [
  { title: "Business-first thinking", description: "Every recommendation starts with your business goals, not technology trends.", icon: "Target" },
  { title: "Enterprise architecture", description: "Scalable, secure foundations designed for long-term growth.", icon: "Layers" },
  { title: "AI strategy", description: "Practical AI adoption aligned with measurable business outcomes.", icon: "Brain" },
  { title: "Cloud modernization", description: "Vendor-neutral cloud strategies that reduce cost and increase agility.", icon: "Cloud" },
  { title: "Digital transformation", description: "End-to-end guidance from strategy through implementation.", icon: "RefreshCw" },
  { title: "Platform consulting", description: "Platform design that connects products, data, and operations.", icon: "LayoutGrid" },
] as const;

export const SERVICES = [
  { title: "Technology Consulting", description: "Strategic guidance to align technology investments with business priorities and growth objectives." },
  { title: "Solution Architecture", description: "End-to-end solution design that balances performance, scalability, and time-to-market." },
  { title: "Digital Transformation", description: "Comprehensive roadmaps to modernize operations, customer experience, and digital capabilities." },
  { title: "Enterprise Architecture", description: "Governance frameworks and reference architectures for complex, multi-system environments." },
  { title: "AI Adoption Strategy", description: "Responsible AI integration-from use case identification to production deployment planning." },
  { title: "Cloud Strategy", description: "Cloud-native architecture, migration planning, and cost optimization across providers." },
  { title: "Platform Design", description: "API-first platform strategies that enable ecosystems, integrations, and product velocity." },
  { title: "Technology Assessment", description: "Independent evaluation of your current stack, capabilities, and technical debt." },
  { title: "Architecture Review", description: "Expert review of existing designs to identify risks, gaps, and improvement opportunities." },
  { title: "System Modernization", description: "Legacy system transformation with minimal disruption and maximum business continuity." },
  { title: "Technical Due Diligence", description: "Investor-grade technical assessments for M&A, funding rounds, and strategic partnerships." },
  { title: "Technology Roadmapping", description: "Multi-year technology plans aligned with business milestones and market opportunities." },
] as const;

export const INDUSTRIES = [
  { name: "Healthcare", description: "HIPAA-aware systems, patient platforms, and clinical workflow optimization." },
  { name: "Finance", description: "Secure fintech architecture, compliance frameworks, and digital banking strategy." },
  { name: "Manufacturing", description: "IoT integration, supply chain platforms, and operational technology modernization." },
  { name: "Education", description: "Learning platforms, institutional systems, and EdTech strategy advisory." },
  { name: "Government", description: "Citizen services, digital governance, and secure public sector architecture." },
  { name: "Travel", description: "Booking platforms, loyalty systems, and hospitality technology strategy." },
  { name: "Retail", description: "Omnichannel commerce, inventory systems, and customer experience platforms." },
  { name: "Logistics", description: "Fleet management, warehouse systems, and supply chain visibility platforms." },
  { name: "Entertainment", description: "Streaming infrastructure, content platforms, and audience engagement systems." },
] as const;

export const APPROACH_STEPS = [
  { step: "01", title: "Understand Business", description: "Deep discovery of your vision, market, operations, and growth objectives." },
  { step: "02", title: "Analyze Challenges", description: "Identify constraints, risks, and opportunities across people, process, and technology." },
  { step: "03", title: "Design Solution", description: "Craft vendor-neutral strategies aligned with measurable business outcomes." },
  { step: "04", title: "Build Architecture", description: "Define scalable, secure reference architectures and integration patterns." },
  { step: "05", title: "Implement", description: "Guide execution with governance, quality standards, and milestone tracking." },
  { step: "06", title: "Optimize", description: "Continuous improvement through performance monitoring and strategic refinement." },
] as const;

export const WHY_NZO = [
  { title: "Business-first mindset", description: "We speak the language of CEOs and founders-not just developers." },
  { title: "Vendor-neutral recommendations", description: "Unbiased advice focused on your success, not vendor partnerships." },
  { title: "Scalable architecture", description: "Systems designed to grow from startup to enterprise without rewrites." },
  { title: "Security by design", description: "Enterprise-grade security embedded from strategy through implementation." },
  { title: "Enterprise experience", description: "Proven track record with startups, SMEs, enterprises, and government." },
  { title: "AI-ready systems", description: "Future-proof architectures prepared for intelligent automation and AI." },
  { title: "Long-term technology partner", description: "We stay engaged beyond the initial engagement as your trusted advisor." },
] as const;

export const PRODUCTS = [
  { name: "nZO Platform Suite", category: "Enterprise Platform", description: "Integrated business platform for operations, analytics, and customer engagement.", status: "coming-soon" as const },
  { name: "InsightAI", category: "AI Analytics", description: "Executive intelligence layer that transforms business data into strategic decisions.", status: "coming-soon" as const },
  { name: "ConnectHub", category: "Integration Platform", description: "API-first integration hub for connecting enterprise systems and third-party services.", status: "coming-soon" as const },
  { name: "SecureVault", category: "Security & Compliance", description: "Compliance and security monitoring platform for regulated industries.", status: "coming-soon" as const },
] as const;

export const INSIGHTS = [
  { slug: "technology-decisions-before-code", title: "Why Technology Decisions Must Come Before Code", excerpt: "The most expensive mistake in digital transformation is building before strategizing.", category: "Business Strategy", date: "2026-03-15", readTime: "6 min read" },
  { slug: "enterprise-architecture-startups", title: "Enterprise Architecture for Startups: Not Too Early", excerpt: "Startups that invest in architecture early scale faster and raise with confidence.", category: "Architecture", date: "2026-02-28", readTime: "8 min read" },
  { slug: "ai-adoption-roadmap-2026", title: "The Executive's Guide to AI Adoption in 2026", excerpt: "Beyond the hype: a structured approach to identifying, prioritizing, and deploying AI that delivers ROI.", category: "AI", date: "2026-02-10", readTime: "10 min read" },
  { slug: "cloud-strategy-vendor-neutral", title: "Building a Vendor-Neutral Cloud Strategy", excerpt: "How to architect for portability, optimize costs, and avoid lock-in across AWS, Azure, and GCP.", category: "Technology", date: "2026-01-22", readTime: "7 min read" },
  { slug: "digital-transformation-sri-lanka", title: "Digital Transformation in Sri Lanka: A Strategic Outlook", excerpt: "Market trends, opportunities, and how local enterprises can compete globally through technology.", category: "Digital Transformation", date: "2026-01-08", readTime: "9 min read" },
  { slug: "platform-strategy-product-velocity", title: "Platform Strategy: Accelerating Product Velocity", excerpt: "How platform thinking enables faster product launches, better integrations, and ecosystem growth.", category: "Architecture", date: "2025-12-18", readTime: "6 min read" },
  { slug: "legacy-modernization-without-disruption", title: "Legacy Modernization Without Business Disruption", excerpt: "Replace constraints-not revenue engines-with strangler patterns and risk-sequenced migration.", category: "Technology", date: "2026-03-01", readTime: "8 min read" },
  { slug: "microservices-vs-modular-monolith", title: "Microservices vs. Modular Monoliths: An Executive Guide", excerpt: "Choose architecture for your team topology and scale-not conference trends.", category: "Architecture", date: "2026-02-20", readTime: "9 min read" },
  { slug: "responsible-ai-governance-regulated", title: "Governance First: Responsible AI for Regulated Industries", excerpt: "Operational AI controls that satisfy regulators and accelerate production deployment.", category: "AI", date: "2026-02-05", readTime: "8 min read" },
  { slug: "measuring-digital-transformation-roi", title: "Measuring Digital Transformation ROI Beyond IT Metrics", excerpt: "Outcome metrics boards care about-linked to revenue, cost, risk, and customer experience.", category: "Digital Transformation", date: "2026-01-18", readTime: "7 min read" },
  { slug: "technical-due-diligence-investors", title: "Technical Due Diligence: What Investors Should Ask", excerpt: "Surface architecture risk, hidden debt, and scalability limits before valuation is set.", category: "Business Strategy", date: "2026-01-05", readTime: "10 min read" },
  { slug: "api-first-integration-strategy", title: "API-First Integration Strategy for Enterprise Ecosystems", excerpt: "Treat APIs as products-with lifecycle, SLAs, and governance that scale partnerships.", category: "Architecture", date: "2025-12-28", readTime: "6 min read" },
  { slug: "zero-trust-for-growing-enterprises", title: "Zero Trust for Growing Enterprises", excerpt: "Continuous verification and least privilege without paralyzing productivity.", category: "Technology", date: "2025-12-10", readTime: "7 min read" },
  { slug: "data-strategy-before-ai", title: "Data Strategy Before AI: The Prerequisite Leaders Skip", excerpt: "Trustworthy, governed data-not models-is the real AI moat.", category: "AI", date: "2025-11-22", readTime: "8 min read" },
] as const;

export const STATS = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Industries Served", value: 9, suffix: "" },
  { label: "Enterprise Clients", value: 5, suffix: "+" },
  { label: "Strategic Engagements", value: 10, suffix: "+" },
] as const;

export const SEO_KEYWORDS = [
  "Technology Consulting Sri Lanka",
  "Digital Transformation Sri Lanka",
  "Solution Architecture",
  "Enterprise Architecture",
  "AI Consulting",
  "Platform Strategy",
  "Technology Advisory",
  "Business Technology Consultant",
] as const;
