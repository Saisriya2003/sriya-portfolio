export const profile = {
  name: "Pettem Sai Sriya",
  firstName: "Sai Sriya",
  role: "Full Stack Developer",
  company: "Handshake AI",
  availability: "Open to work",
  location: "Hyderabad, India",
  phone: "9921890019",
  email: "saisriyavarma@gmail.com",
  linkedin: "https://www.linkedin.com/in/saisriyavarma",
  github: "https://github.com/Saisriya2003",
  resume: "/Pettem_Sai_Sriya_Resume.pdf",
  resumeFile: "Pettem_Sai_Sriya_Resume.pdf",
  tagline:
    "I design and ship AI-aware web products — from responsive interfaces to reliable APIs — with a bias for clarity, performance, and craft.",
};

export const experience = [
  {
    role: "AI Evaluation Specialist",
    company: "Handshake AI",
    period: "Jul 2026 — Present",
    points: [
      "Design terminal-based benchmark tasks that evaluate coding agents on multi-step Linux, Git, Bash, and Python workflows.",
      "Build reproducible environments with automated validation so tasks score consistently across model runs and reviewers.",
      "Revise task specifications and graders after human review when an agent passes a check but misses the intended engineering behavior.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "GenAI Lakes",
    period: "Jul 2025 — Sep 2026",
    points: [
      "Designed and developed scalable full-stack web applications using modern frontend and backend technologies.",
      "Built responsive, user-centric interfaces while integrating secure RESTful APIs and backend services.",
      "Optimized application performance, database operations, and system reliability through debugging and testing.",
      "Collaborated with cross-functional teams to deliver AI-driven and web-based solutions aligned with business requirements.",
    ],
  },
  {
    role: "LLM Prompt Engineer",
    company: "Turing",
    period: "Aug 2025 — Jan 2026",
    points: [
      "Delivered high-quality multi-turn AI conversations focused on realistic user–assistant interactions and contextual accuracy.",
      "Designed and optimized prompt workflows to improve reasoning, instruction-following, and response consistency.",
      "Evaluated AI-generated outputs using quality guidelines for relevance, clarity, and conversational flow.",
      "Collaborated with AI communities and peer reviewers to refine prompts and maintain evolving workflow standards.",
    ],
  },
  {
    role: "Aether",
    company: "Outlier.ai",
    period: "May 2026 — Jun 2026",
    points: [
      "Recorded multilingual voice samples using predefined prompts to support AI model training.",
      "Followed strict quality and language guidelines to ensure accurate and consistent speech data.",
      "Contributed to improving AI models’ understanding of diverse languages, accents, and natural speech.",
    ],
  },
];

export const projects = [
  {
    title: "PulseBoard",
    subtitle: "Real-Time Team Collaboration Platform",
    period: "Sep 2026",
    tags: ["FastAPI", "Socket.IO", "React", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    link: "https://github.com/Saisriya2003/pulseboard",
    description:
      "One shared board, live for the whole team: workspaces, drag-and-drop kanban boards, labels, checklists, @mentions, reactions, and presence — with a four-role permission model enforced on the server.",
    highlights: [
      "Live updates and presence over Socket.IO; drag to any position, synced to everyone",
      "Board, list and calendar views; labels, checklists, @mentions, Insights charts, one-click demo sandbox",
      "Owner / admin / member / viewer roles, JWT auth, invitations, audit log",
      "30 Pytest integration tests in GitHub Actions; Docker Compose; Render blueprint",
    ],
  },
  {
    title: "Manager Monitoring Assistant",
    subtitle: "AI Status Call System",
    period: "2025",
    tags: ["React", "Node.js", "Express", "MongoDB", "Voice AI"],
    description:
      "An AI-powered status call system that automates employee and field-agent tracking through intelligent voice interactions, transcription, dashboards, and alerts.",
    highlights: [
      "Automated outbound calls and response transcription",
      "Activity monitoring dashboards and performance analytics",
      "Alerting, call logging, and operational reporting",
    ],
  },
  {
    title: "AI-Based RAG Application",
    subtitle: "Document Q&A",
    period: "2025",
    tags: ["Python", "FastAPI", "React", "PostgreSQL"],
    description:
      "A retrieval-augmented generation system that answers questions from documents with ingestion, embeddings, semantic search, and context-aware LLM responses.",
    highlights: [
      "Document ingestion and embedding pipeline",
      "Semantic search over knowledge sources",
      "LLM-backed, context-aware answers",
    ],
  },
  {
    title: "Fake Profile Identification",
    subtitle: "Online Social Networks",
    period: "Apr — May 2025",
    tags: ["AI/ML", "Neural Networks", "Python"],
    description:
      "A deep learning model that assesses the authenticity of friend requests using data from Facebook and other platforms, with sigmoid activation and backpropagation.",
    highlights: [
      "ANN-based authenticity scoring",
      "Trained across social-network datasets",
      "Team project focused on trust and safety",
    ],
  },
  {
    title: "AI Avatar Integration",
    subtitle: "Interactive Assistant",
    period: "2025",
    tags: ["React", "Avatar APIs"],
    description:
      "An interactive AI avatar for real-time user engagement, built for customer support and virtual-assistant scenarios.",
    highlights: [
      "Real-time user–avatar communication",
      "Support and assistant use cases",
      "Frontend integration with avatar APIs",
    ],
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "Java", "TypeScript", "SQL"],
  "Web & Frameworks": ["React", "HTML", "CSS", "Bootstrap", "FastAPI", "Node.js", "Express"],
  Databases: ["SQL", "PostgreSQL", "MongoDB"],
  "Developer Tools": ["Git", "GitHub", "VS Code", "Postman", "Ubuntu", "Jira"],
  Cloud: ["AWS", "GCP"],
  Focus: ["REST APIs", "GenAI", "RAG", "Prompt engineering", "AI evaluation"],
};

export const education = [
  {
    school: "Malla Reddy Institute of Technology and Science",
    degree: "B.Tech in Electronics & Communication Engineering",
    place: "Hyderabad, Telangana",
    period: "Nov 2021 — Aug 2025",
    score: "CGPA 7.6",
  },
  {
    school: "Telangana State Residential Junior College (Girls)",
    degree: "Intermediate",
    place: "Huzurabad, Telangana",
    period: "Jun 2019 — Jul 2021",
    score: "88%",
  },
  {
    school: "Trinity High School",
    degree: "Secondary School",
    place: "Mancherial, Telangana",
    period: "May 2018 — Jun 2019",
    score: "GPA 9.2",
  },
];

export const extras = {
  certifications: [
    "Foundational cloud badges from AWS and Google Cloud.",
    "Certifications in Generative AI, Prompt Engineering, and Machine Learning.",
    "Certifications in React.js, JavaScript, and Python Programming.",
    "Hands-on certifications in API Integration, Database Management, and Full-Stack Development.",
    "AICTE Frontend Development Internship — applied responsive UI and frontend skills on practical projects.",
  ],
  interests: ["Playing sports", "Art & craft", "Exploring new things"],
  sports: "Handball — state-level achievements",
};
