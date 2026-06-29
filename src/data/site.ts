import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Compass,
  FileSearch,
  FileText,
  GraduationCap,
  MessagesSquare,
  Network,
  NotebookTabs,
  Presentation,
  Search,
  ShieldCheck,
  UserRoundSearch,
  Waypoints,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type HomeOutcome = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type JourneyStep = {
  title: string;
  description: string;
};

export type Capability = {
  title: string;
  whatItDoes: string;
  whyItMatters: string;
  outcome: string;
  icon: LucideIcon;
};

export type ActivationPlatform = {
  name: string;
  accentClass: string;
  logo: string;
  logoSrc: string;
  recommendation: string;
  mode: "gpt" | "prompt";
  status: "available" | "coming-soon";
  primaryLabel: string;
  secondaryLabel: string;
  description: string;
  webHref: string;
  appHref?: string;
  fallbackHref?: string;
  rating: number;
  promptRequired: boolean;
  steps: string[];
};

export type ToolResource = {
  name: string;
  logoSrc: string;
  logoTone: "color" | "white";
  access: string;
  purpose: string;
  bestUseCase: string;
  whyStudentsShouldUseIt: string;
  href: string;
};

export type PromptIdea = {
  title: string;
  text: string;
  category: string;
  inputHint?: string;
};

export type SpecializationPack = {
  name: string;
  focus: string;
  tools: string[];
  workflows: string[];
  targetRoles?: string[];
  coreSkills?: string[];
  portfolioIdeas?: string[];
  resumeKeywords?: string[];
  interviewThemes?: string[];
  learningPlan?: string[];
  commonMistakes?: string[];
  careerAdvice: string;
};

export type LearningCategory = {
  category: string;
  items: {
    name: string;
    note: string;
  }[];
};

export type DemoConversation = {
  title: string;
  studentContext: string;
  useCase: string;
  takeaway: string;
  messages: {
    speaker: "Student" | "CareerOS";
    text: string;
  }[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const careerOsGptUrl =
  "https://chatgpt.com/g/g-6a426101774c8191acc7ce794097d3ad-careeros";

export const manualPromptPath = "/careeros-claude-gemini-system-prompt.md";

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/activate", label: "Activate" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/resources", label: "Resources" },
  { href: "/demo", label: "Demo" },
  { href: "/faq", label: "FAQ" },
];

export const footerLinks = [
  { href: "/activate", label: "Activate Your AI Coach" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/resources", label: "Resources" },
  { href: "/demo", label: "Live Demo" },
];

export const homeOutcomes: HomeOutcome[] = [
  {
    title: "Resume Builder",
    description: "Draft sharper resumes aligned to roles, skills, and target outcomes.",
    icon: FileText,
  },
  {
    title: "Interview Coach",
    description: "Practice better answers, story structure, and placement readiness.",
    icon: MessagesSquare,
  },
  {
    title: "LinkedIn Optimizer",
    description: "Improve profile positioning so your value is visible quickly.",
    icon: UserRoundSearch,
  },
  {
    title: "Company Research",
    description: "Research firms, roles, and industries before applications or interviews.",
    icon: Search,
  },
  {
    title: "Learning Roadmaps",
    description: "Break broad career goals into focused weekly skill-building plans.",
    icon: GraduationCap,
  },
  {
    title: "Career Planning",
    description: "Turn uncertainty into a clear progression path and next-step plan.",
    icon: Compass,
  },
];

export const studentJourney: JourneyStep[] = [
  {
    title: "Student",
    description: "You arrive with goals, uncertainty, and placement pressure.",
  },
  {
    title: "Activate CareerOS",
    description: "Choose your AI platform and turn on your coaching workflow.",
  },
  {
    title: "Set your goals and context",
    description: "CareerOS starts coaching around your profile, strengths, and targets.",
  },
  {
    title: "Build your resume",
    description: "Create stronger role-aligned resumes without rewriting from scratch.",
  },
  {
    title: "Optimize LinkedIn",
    description: "Improve your narrative, keywords, and recruiter visibility.",
  },
  {
    title: "Prepare interviews",
    description: "Practice better answers, frameworks, and confidence loops.",
  },
  {
    title: "Land better opportunities",
    description: "Use CareerOS as a repeatable system, not a one-time chat.",
  },
];

export const valueComparison = [
  {
    title: "Generic AI",
    bullets: [
      "Starts every conversation from scratch",
      "Gives one-off answers without a coaching system",
      "Does not guide a repeatable resume or interview process",
      "Feels useful in moments, but not structured over time",
    ],
  },
  {
    title: "CareerOS",
    bullets: [
      "Starts with a career-focused coaching posture",
      "Helps structure resume, interview, and research workflows",
      "Supports weekly reflection and longer-term growth",
      "Feels like a practical AI coach students can keep using",
    ],
  },
];

export const capabilities: Capability[] = [
  {
    title: "ATS Resume Builder",
    whatItDoes: "Refines bullet points, role fit, and overall resume positioning.",
    whyItMatters: "Students often undersell work and fail to mirror job requirements clearly.",
    outcome: "A stronger, more targeted resume ready for applications.",
    icon: FileText,
  },
  {
    title: "LinkedIn Optimizer",
    whatItDoes: "Improves headlines, summaries, and experience framing.",
    whyItMatters: "A weak profile reduces discoverability and credibility with recruiters.",
    outcome: "A cleaner professional presence with better positioning.",
    icon: UserRoundSearch,
  },
  {
    title: "Mock Interview Coach",
    whatItDoes: "Simulates interview questions, follow-ups, and feedback loops.",
    whyItMatters: "Good candidates often struggle to convert preparation into confident delivery.",
    outcome: "More structured, persuasive, and interview-ready answers.",
    icon: MessagesSquare,
  },
  {
    title: "Company Research",
    whatItDoes: "Breaks down a company, role, industry, and current context quickly.",
    whyItMatters: "Preparation quality often decides interview performance and question depth.",
    outcome: "Smarter talking points and better-informed applications.",
    icon: Building2,
  },
  {
    title: "Job Description Analysis",
    whatItDoes: "Extracts skills, priorities, and hidden expectations from job descriptions.",
    whyItMatters: "Students often apply without understanding what the role is really optimizing for.",
    outcome: "Clear tailoring priorities for resumes, prep, and skill-building.",
    icon: FileSearch,
  },
  {
    title: "Career Roadmap",
    whatItDoes: "Turns a broad target role into milestones, skill themes, and execution steps.",
    whyItMatters: "Long-term career goals are rarely actionable without structure.",
    outcome: "A visible plan with short-term execution and long-term direction.",
    icon: Waypoints,
  },
  {
    title: "Weekly Career Review",
    whatItDoes: "Helps reflect on progress, blockers, wins, and next priorities.",
    whyItMatters: "Momentum drops when students cannot see what is improving week to week.",
    outcome: "Steadier progress and better self-management.",
    icon: ShieldCheck,
  },
  {
    title: "Networking Assistant",
    whatItDoes: "Drafts outreach messages for alumni, recruiters, peers, and mentors.",
    whyItMatters: "Students often know they should network but hesitate on what to say.",
    outcome: "Clearer outreach with less friction and better follow-through.",
    icon: Network,
  },
  {
    title: "Communication Coach",
    whatItDoes: "Improves email tone, clarity, persuasion, and professional writing.",
    whyItMatters: "Career progress depends heavily on how ideas and intent are communicated.",
    outcome: "Sharper writing across mail, messaging, and presentations.",
    icon: Presentation,
  },
  {
    title: "Learning Planner",
    whatItDoes: "Designs skill-building plans around roles, gaps, and available time.",
    whyItMatters: "Students often consume content without a pathway that matches career goals.",
    outcome: "A focused plan for building the right capabilities faster.",
    icon: NotebookTabs,
  },
];

export const activationPrompt = `CareerOS Claude/Gemini Manual Setup Prompt

The copy button uses the full CareerOS system prompt for Claude and Gemini.
It includes onboarding, career profile management, resume guidance, LinkedIn guidance, interview coaching, company research, job description analysis, learning roadmaps, networking, communication, and placement readiness rubrics.`;

export const activationPlatforms: ActivationPlatform[] = [
  {
    name: "ChatGPT",
    accentClass: "bg-white",
    logo: "CG",
    logoSrc: "/logo-chatgpt.svg",
    recommendation: "Live GPT",
    mode: "gpt",
    status: "available",
    primaryLabel: "Open CareerOS GPT",
    secondaryLabel: "Recommended path",
    description:
      "The full CareerOS experience. Students open the dedicated GPT and start guided onboarding immediately.",
    webHref: careerOsGptUrl,
    fallbackHref: careerOsGptUrl,
    rating: 5,
    promptRequired: false,
    steps: [
      "Tap Open CareerOS GPT",
      "Sign in to ChatGPT if needed",
      "Answer CareerOS onboarding questions",
    ],
  },
  {
    name: "Claude",
    accentClass: "bg-white",
    logo: "CL",
    logoSrc: "/logo-claude.svg",
    recommendation: "Prompt-based setup",
    mode: "prompt",
    status: "available",
    primaryLabel: "Open Claude",
    secondaryLabel: "Manual setup",
    description:
      "Use Claude when you want a manual prompt-based version of the CareerOS coaching workflow.",
    webHref: "https://claude.ai",
    appHref: "claude://",
    fallbackHref: "https://claude.ai",
    rating: 4,
    promptRequired: true,
    steps: [
      "Copy the CareerOS setup prompt",
      "Open Claude and start a new chat",
      "Paste the prompt and press send",
    ],
  },
  {
    name: "Gemini",
    accentClass: "bg-white",
    logo: "GM",
    logoSrc: "/logo-gemini.svg",
    recommendation: "Prompt-based setup",
    mode: "prompt",
    status: "available",
    primaryLabel: "Open Gemini",
    secondaryLabel: "Manual setup",
    description:
      "Best for students already inside the Google ecosystem who want a familiar daily workspace.",
    webHref: "https://gemini.google.com",
    appHref: "gemini://",
    fallbackHref: "https://gemini.google.com",
    rating: 4,
    promptRequired: true,
    steps: [
      "Copy the CareerOS setup prompt",
      "Open Gemini and start a new chat",
      "Paste the prompt and press send",
    ],
  },
];

export const activationSuccessFlow = [
  "Open CareerOS GPT",
  "Answer onboarding questions",
  "Create your Career Profile",
  "Start career coaching",
];

export const toolResources: ToolResource[] = [
  {
    name: "ChatGPT",
    logoSrc: "/logo-chatgpt.svg",
    logoTone: "white",
    access: "Free tier",
    purpose: "A primary workspace for CareerOS coaching and everyday career work.",
    bestUseCase: "Resume work, interview prep, reflection, and ongoing planning.",
    whyStudentsShouldUseIt: "It is the easiest daily driver for keeping CareerOS active over time.",
    href: careerOsGptUrl,
  },
  {
    name: "Claude",
    logoSrc: "/logo-claude.svg",
    logoTone: "color",
    access: "Free tier",
    purpose: "Long-form reasoning, writing refinement, and deeper thought partnership.",
    bestUseCase: "Narrative polishing, essays, behavioral answers, and strategic thinking.",
    whyStudentsShouldUseIt: "It helps students turn rough ideas into more deliberate output.",
    href: "https://claude.ai",
  },
  {
    name: "Gemini",
    logoSrc: "/logo-gemini.svg",
    logoTone: "color",
    access: "Free tier",
    purpose: "General-purpose AI with strong Google ecosystem alignment.",
    bestUseCase: "Students already working across Gmail, Docs, and the Google stack.",
    whyStudentsShouldUseIt: "It reduces friction when the rest of a student workflow already lives in Google.",
    href: "https://gemini.google.com",
  },
  {
    name: "Perplexity",
    logoSrc: "/logo-perplexity.svg",
    logoTone: "white",
    access: "Free tier",
    purpose: "Source-backed research for companies, industries, and current context.",
    bestUseCase: "Interview prep, employer research, and fast knowledge gathering.",
    whyStudentsShouldUseIt: "It helps students verify information instead of relying on vague summaries.",
    href: "https://www.perplexity.ai",
  },
  {
    name: "Canva",
    logoSrc: "/logo-canva.svg",
    logoTone: "white",
    access: "Free tier",
    purpose: "Visual packaging for resumes, portfolios, and event materials.",
    bestUseCase: "Portfolio boards, posters, simple design systems, and polished graphics.",
    whyStudentsShouldUseIt: "It gives non-designers enough polish to present work more credibly.",
    href: "https://www.canva.com",
  },
  {
    name: "Excalidraw AI",
    logoSrc: "/logo-excalidraw.svg",
    logoTone: "white",
    access: "Open source",
    purpose: "Quick visual thinking and framework sketching.",
    bestUseCase: "Case prep, strategic thinking, and workshop explanation.",
    whyStudentsShouldUseIt: "It helps students think clearly when text alone is too dense.",
    href: "https://excalidraw.com",
  },
  {
    name: "Grammarly",
    logoSrc: "/logo-grammarly.svg",
    logoTone: "white",
    access: "Free tier",
    purpose: "Writing correction and tone refinement across platforms.",
    bestUseCase: "Emails, outreach, assignments, and professional communication.",
    whyStudentsShouldUseIt: "It catches small quality issues that affect credibility disproportionately.",
    href: "https://www.grammarly.com",
  },
  {
    name: "Notion",
    logoSrc: "/logo-notion.svg",
    logoTone: "white",
    access: "Free tier",
    purpose: "Workspace support for organizing goals, notes, and execution.",
    bestUseCase: "Career planning dashboards, preparation hubs, and weekly review systems.",
    whyStudentsShouldUseIt: "It helps students keep AI output inside an organized personal operating system.",
    href: "https://www.notion.so",
  },
];

export const careerPrompts: PromptIdea[] = [
  {
    title: "Placement strategy",
    text: "I want to target [company/role]. Build me a placement strategy for the next 30 days. Break it into profile positioning, application priorities, networking actions, interview prep, and weekly milestones. Be specific about what I should do first and what I should stop wasting time on.",
    category: "Career planning",
    inputHint: "Add your target company, role, and any deadline you are working toward.",
  },
  {
    title: "Career direction",
    text: "I am confused between [option A], [option B], and [option C]. Help me compare them using interest, skill fit, market demand, learning curve, and long-term growth. Ask me only the minimum questions needed, then recommend the best near-term direction and explain why.",
    category: "Career planning",
    inputHint: "Add the roles or specializations you want to compare.",
  },
  {
    title: "Resume review",
    text: "Review my resume like a recruiter for [target role]. First score it on target fit, evidence quality, ATS readability, impact, and clarity. Then tell me the top improvements in priority order and explain exactly what to change in the weakest bullets.",
    category: "Resume",
    inputHint: "Paste your resume below this prompt.",
  },
  {
    title: "Resume tailoring",
    text: "Tailor my resume for this role without inventing anything. Use the JD, my resume, and my real experience to rewrite the weakest bullets, improve keyword alignment, and make the profile look more relevant to the role. If something is missing, call it out clearly instead of guessing.",
    category: "Resume",
    inputHint: "Paste the job description and your resume bullets.",
  },
  {
    title: "Achievement writing",
    text: "Help me convert these raw responsibilities into stronger achievement statements. Keep the facts truthful, add structure, and show impact, scope, method, and outcome where possible. Give me multiple rewrite options if the data is weak or incomplete.",
    category: "Resume",
    inputHint: "Paste your current bullet points or project notes.",
  },
  {
    title: "LinkedIn review",
    text: "Review my LinkedIn profile and tell me what a recruiter will notice first. Evaluate the headline, about section, experience, skills, and overall positioning. Then rewrite the weakest parts so the profile is more credible, searchable, and role-aligned.",
    category: "LinkedIn",
    inputHint: "Paste your LinkedIn headline, about section, and experience summary.",
  },
  {
    title: "LinkedIn optimization",
    text: "Rewrite my LinkedIn headline, about section, and featured section for [target role]. Keep it professional, specific, and truthful. I want the profile to signal direction, strengths, and recruiter relevance without sounding generic.",
    category: "LinkedIn",
    inputHint: "Add your target role and your current profile text.",
  },
  {
    title: "Company research",
    text: "Research [company name] for interview preparation. Give me a concise company brief, business model, recent context, likely interview focus areas, culture signals, and smart questions I should ask the recruiter or interviewer.",
    category: "Research",
    inputHint: "Add the company name and, if relevant, the specific role or team.",
  },
  {
    title: "JD analysis",
    text: "Analyze this job description and extract the real priorities behind it. Tell me the required skills, hidden expectations, likely interview angles, keyword themes, and how I should tailor my resume and preparation.",
    category: "Job description",
    inputHint: "Paste the full job description below this prompt.",
  },
  {
    title: "Skill gap analysis",
    text: "Compare my current profile with this target role and identify the biggest gaps. Separate the gaps into must-have, nice-to-have, and optional. Then tell me which gaps I should close first if I want to improve my chances quickly.",
    category: "Planning",
    inputHint: "Add the target role and your current resume or background summary.",
  },
  {
    title: "Learning roadmap",
    text: "Create a realistic learning roadmap for [target role] using the time I actually have. Break it into weekly actions, core concepts, practice tasks, and measurable outputs. Focus on what moves my profile forward instead of giving me a generic list of topics.",
    category: "Learning",
    inputHint: "Add the target role and how many hours per week you can spend.",
  },
  {
    title: "Interview preparation",
    text: "Prepare me for this interview for [company/role]. Give me the most likely questions, the best answer structure, the key stories I should use, and what I should research before the interview. Make this practical and role-specific.",
    category: "Interview",
    inputHint: "Paste the role, company, and interview date if you have it.",
  },
  {
    title: "Interview tomorrow",
    text: "I have an interview tomorrow and I need a fast preparation sprint. Ask only the few questions you need, then give me a focused plan for the next 24 hours, including company research, story prep, likely questions, and confidence coaching.",
    category: "Interview",
    inputHint: "Add the company, role, and any experience you want to use in the interview.",
  },
  {
    title: "Behavioral answers",
    text: "Turn my experience into strong behavioral interview answers using a clear structure like STAR or CAR. Keep the answers truthful, concise, and persuasive. If I give weak stories, help me sharpen them rather than inventing stronger ones.",
    category: "Interview",
    inputHint: "Paste the experience, project, or situation you want to use.",
  },
  {
    title: "STAR practice",
    text: "Convert these raw stories into strong STAR answers. Make the situation and task short, emphasize the action, and end with a measurable or clearly explained result. If the result is weak, show me how to frame it honestly.",
    category: "Interview",
    inputHint: "Paste your rough story notes or bullet points.",
  },
  {
    title: "Mock interview",
    text: "Run me through a mock interview for [role]. Ask one question at a time, wait for my answer, then critique the answer on structure, content, confidence, and relevance before moving on to the next question.",
    category: "Interview",
    inputHint: "Add the role and the interview format if you know it.",
  },
  {
    title: "Case interview",
    text: "Run a beginner-friendly case interview for me. Start with one short case prompt, then guide me through structure, calculations, synthesis, and final recommendation. Push me to think clearly instead of just following a template.",
    category: "Consulting",
    inputHint: "Add the case type if you want one, such as profitability, market entry, or market sizing.",
  },
  {
    title: "Consulting fit story",
    text: "Help me build a convincing consulting fit story. Use my background, interests, strengths, and real experiences to answer why consulting, why this firm, and why me. Keep it specific and sharp enough for an interview.",
    category: "Consulting",
    inputHint: "Add your background, target firms, and 2 to 3 experiences you want to reference.",
  },
  {
    title: "Company questions",
    text: "Give me smart questions to ask in an interview with [company]. I want questions that show preparation, commercial awareness, and real curiosity, not generic interview filler.",
    category: "Interview",
    inputHint: "Add the company name and role.",
  },
  {
    title: "Networking message",
    text: "Write a thoughtful networking message for [person/company]. Keep it short, respectful, and specific. I want the message to sound like a real student reaching out with intent, not an automated template.",
    category: "Networking",
    inputHint: "Add the person’s name, company, and why you are reaching out.",
  },
  {
    title: "Cold email",
    text: "Draft a cold email to [recruiter/alumni/hiring manager] for [role]. Make it concise, credible, and easy to reply to. Include a clear reason for reaching out and a specific ask at the end.",
    category: "Networking",
    inputHint: "Add the recipient, company, role, and your reason for outreach.",
  },
  {
    title: "Follow-up message",
    text: "Write a professional follow-up message after [meeting/interview/networking call]. Keep the tone warm and concise, thank them for their time, and include one smart next step or question without sounding needy.",
    category: "Networking",
    inputHint: "Add what happened, who you spoke with, and the tone you want.",
  },
  {
    title: "Salary negotiation",
    text: "Help me negotiate salary professionally for [role/offer]. Give me the right tone, a clear ask, and what to say if they push back. Keep the advice realistic for an entry-level candidate and do not make me sound entitled.",
    category: "Negotiation",
    inputHint: "Add the offer details, role, and salary range if you know it.",
  },
  {
    title: "Offer evaluation",
    text: "Help me evaluate this offer against my other options. Compare compensation, brand, learning, role fit, location, and long-term upside. Give me a decision framework instead of telling me what to do blindly.",
    category: "Decision making",
    inputHint: "Add the offer details and the alternatives you are considering.",
  },
  {
    title: "Weekly reflection",
    text: "Review my week and help me think like a career coach. Identify what I moved forward, where I wasted time, what I avoided, and what my next three priorities should be for the upcoming week.",
    category: "Review",
    inputHint: "Add the work you completed this week and the main blockers you hit.",
  },
  {
    title: "Personal branding",
    text: "Help me define the personal brand I should build for recruiters and peers. Use my strengths, target role, and career direction to create a positioning statement, a short narrative, and 3 to 5 proof points that make the brand credible.",
    category: "Branding",
    inputHint: "Add your target role, key strengths, and anything you want to be known for.",
  },
  {
    title: "Elevator pitch",
    text: "Build a 45-second self-introduction for networking and interviews. Make it sound natural, credible, and relevant to my target role. If I do not give enough context, ask for my background, target role, and one or two proof points.",
    category: "Branding",
    inputHint: "Add your background, target role, and one strong example you can mention.",
  },
  {
    title: "Placement prep",
    text: "Prepare me for placements over the next 30 days. Build a practical plan covering resume finalization, LinkedIn, interview prep, mock practice, networking, and skill gaps. Keep it organized by week and tell me what to prioritize first.",
    category: "Planning",
    inputHint: "Add your graduation timeline and the roles you are targeting.",
  },
  {
    title: "Career SWOT",
    text: "Create a career SWOT analysis based on my background and goals. Be honest about strengths, weaknesses, opportunities, and threats. Then tell me which two actions will create the biggest improvement over the next month.",
    category: "Planning",
    inputHint: "Add your current background, target role, and a few strengths or concerns.",
  },
  {
    title: "Project debrief",
    text: "Turn this project into a clean interview story and resume bullet. Help me explain the problem, what I did, what tools I used, what changed, and what the result was. If the project is weak, show me how to position it honestly and better.",
    category: "Interview",
    inputHint: "Paste the project summary, your role, and the outcome.",
  },
  {
    title: "Group discussion prep",
    text: "Help me prepare for a group discussion on [topic]. Give me a point of view, supporting arguments, counterpoints, and a short closing line I can use. Also tell me how to sound structured without dominating the room.",
    category: "Communication",
    inputHint: "Add the discussion topic and any side you want to argue.",
  },
  {
    title: "Presentation review",
    text: "Review this presentation for clarity, structure, executive presence, and slide flow. Tell me what the audience will understand quickly, what will confuse them, and how to improve it without overcomplicating the deck.",
    category: "Communication",
    inputHint: "Paste the slide content, outline, or speaker notes.",
  },
  {
    title: "Learning plan check",
    text: "Review my learning plan for [role] and tell me if it is too broad, too shallow, or out of order. Then tighten it into a smarter path with better sequencing, practice tasks, and milestones.",
    category: "Learning",
    inputHint: "Paste your current learning plan or the topics you are following.",
  },
];

export const demoConversations: DemoConversation[] = [
  {
    title: "Resume + JD Alignment",
    studentContext: "MBA student applying for a business analyst internship with a generic resume.",
    useCase: "Use CareerOS to analyze a job description, diagnose resume gaps, and rewrite weak bullets truthfully.",
    takeaway:
      "The strongest CareerOS use is not asking for a rewrite. It is sharing the target role, resume evidence, and JD so CareerOS can coach positioning.",
    messages: [
      {
        speaker: "Student",
        text: "I want to apply for a Business Analyst internship. Here is the JD: requirements include Excel, SQL basics, dashboarding, stakeholder communication, and problem solving. My resume bullet says: 'Worked on sales data analysis project in college.' Can you help?",
      },
      {
        speaker: "CareerOS",
        text: "Yes. I will treat this as a JD alignment task. The role is looking for proof in four areas: analysis, tools, business interpretation, and communication. Your current bullet is too vague because it does not show the dataset, method, output, or business value. Before rewriting, answer one question: what did you actually analyze and what was the final output?",
      },
      {
        speaker: "Student",
        text: "We analyzed 3 months of retail sales data for a class project. I used Excel pivot tables and charts. We found low repeat purchases in one product category and recommended a bundle offer.",
      },
      {
        speaker: "CareerOS",
        text: "Good. Now we have real evidence. A stronger bullet would be: 'Analyzed 3 months of retail sales data using Excel pivot tables to identify low repeat purchases in a key product category and recommended a bundle offer to improve customer retention.' This works because it shows tool, dataset, insight, and recommendation. If you want to align it further to the JD, add one more bullet about presenting the dashboard or recommendation to stakeholders.",
      },
      {
        speaker: "Student",
        text: "Can you tell me what else my resume should emphasize for this role?",
      },
      {
        speaker: "CareerOS",
        text: "Prioritize these five changes: 1. Move analytics projects higher than unrelated activities. 2. Add a Skills section with Excel, SQL basics, dashboarding, data interpretation, and presentation. 3. Rewrite project bullets to show business insight, not only analysis. 4. Add one communication bullet if you presented findings. 5. Prepare to explain how your analysis led to a recommendation. Your next action: share your full resume and I will score it for this JD across target alignment, evidence quality, ATS readability, and skill fit.",
      },
    ],
  },
  {
    title: "Interview Tomorrow",
    studentContext: "MBA marketing student with a first-round interview the next day.",
    useCase: "Use CareerOS for urgent interview triage, answer structure, company prep, and mock follow-ups.",
    takeaway:
      "CareerOS adapts to urgency. It does not force a long plan when the student needs a focused 24-hour preparation sprint.",
    messages: [
      {
        speaker: "Student",
        text: "I have an interview tomorrow for a marketing internship. I am nervous and I do not know what to prepare first.",
      },
      {
        speaker: "CareerOS",
        text: "We should treat this as a 24-hour preparation sprint. I need three details: company name, role description if available, and one marketing-related project or experience you can speak about. While you gather that, your priority order is: 60-second introduction, why marketing, why this company, 5 STAR stories, and 6 likely questions.",
      },
      {
        speaker: "Student",
        text: "The company is an FMCG brand. The role is marketing intern. My project was a consumer behavior survey for a new snack product.",
      },
      {
        speaker: "CareerOS",
        text: "Good. Your profile should be positioned around consumer understanding, structured thinking, and campaign curiosity. For 'Tell me about yourself,' use this structure: current MBA identity, marketing interest, proof from your consumer survey project, and why the internship fits. Draft answer: 'I am an MBA student specializing in marketing, with a strong interest in consumer behavior and brand growth. In a recent project, I worked on a consumer survey for a new snack product, where I helped identify purchase drivers and translate responses into positioning recommendations. That experience made me interested in how FMCG brands convert consumer insight into campaigns and product decisions. I am now looking for a marketing internship where I can contribute to research, campaign planning, and execution while learning from a consumer-focused team.'",
      },
      {
        speaker: "Student",
        text: "What questions should I practice?",
      },
      {
        speaker: "CareerOS",
        text: "Practice these first: 1. Tell me about yourself. 2. Why marketing? 3. Why FMCG? 4. Explain your consumer survey project. 5. What insight did you find and how would a brand use it? 6. Tell me about a time you worked in a team. 7. What is one campaign you liked and why? 8. What is your weakness? For the project question, be ready for follow-ups on sample size, survey method, key insight, recommendation, and what you would improve.",
      },
      {
        speaker: "Student",
        text: "Can we do a mock question?",
      },
      {
        speaker: "CareerOS",
        text: "Yes. Answer this in 90 seconds: Why do you want to work in marketing, specifically in FMCG? After your answer, I will score it on structure, evidence, company relevance, and communication clarity.",
      },
    ],
  },
  {
    title: "Career Direction + Learning Plan",
    studentContext: "MBA student unsure whether to pursue consulting, analytics, or marketing.",
    useCase: "Use CareerOS to convert confusion into options, experiments, and a 30-day skill-building plan.",
    takeaway:
      "When direction is unclear, CareerOS should not jump to resumes. It first narrows choices using interests, evidence, market fit, and next experiments.",
    messages: [
      {
        speaker: "Student",
        text: "I am confused. I am an MBA student and I do not know whether I should go into consulting, analytics, or marketing.",
      },
      {
        speaker: "CareerOS",
        text: "This is a career direction problem, so we should not start with resume optimization yet. I will help you compare the three paths using four filters: interest, evidence, market fit, and skill gap. First, answer this: which projects or subjects have you enjoyed most so far?",
      },
      {
        speaker: "Student",
        text: "I liked market research and business analytics. I am decent at presentations, but I am not very strong in coding.",
      },
      {
        speaker: "CareerOS",
        text: "Based on that, your strongest near-term direction may be marketing analytics or business analyst roles, because they combine research, analysis, and communication without requiring deep coding at the start. Consulting is still possible, but it will require more structured problem-solving and case practice. Pure marketing is possible too, but your analytics interest could differentiate you.",
      },
      {
        speaker: "Student",
        text: "What should I do for the next 30 days?",
      },
      {
        speaker: "CareerOS",
        text: "Use a 30-day validation plan. Week 1: analyze 10 job descriptions across marketing analytics, business analyst, and consulting analyst roles. Build a skill map. Week 2: complete one Excel dashboard using a real dataset and write a one-page business insight summary. Week 3: speak to 3 alumni, one from each path, and ask what skills matter most. Week 4: update your resume and LinkedIn around the strongest direction. Your output should be one project, one role shortlist, one revised headline, and one decision on which path to prioritize for applications.",
      },
      {
        speaker: "Student",
        text: "Can you give me a LinkedIn headline for this direction?",
      },
      {
        speaker: "CareerOS",
        text: "Use a headline that signals direction without overclaiming: 'MBA Candidate | Marketing Analytics and Business Insights | Market Research, Excel Dashboards, Data Storytelling'. This works because it connects your marketing and analytics interests, names credible skills, and stays truthful. Next action: build the Excel dashboard project so the headline has evidence behind it.",
      },
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What is CareerOS?",
    answer:
      "CareerOS is a personal AI career coach available as a live Custom GPT in ChatGPT, with supporting prompt-based setup for Claude and Gemini.",
  },
  {
    question: "Why not just use ChatGPT directly?",
    answer:
      "You can, but CareerOS gives students a structured coaching posture, better conversation starters, and repeatable workflows for resumes, interviews, research, and weekly growth.",
  },
  {
    question: "Do I need ChatGPT Plus?",
    answer:
      "The best experience is the live CareerOS GPT in ChatGPT. Access to GPTs may depend on the student's ChatGPT account and current OpenAI availability.",
  },
  {
    question: "Can I use Claude or Gemini instead?",
    answer:
      "Yes. ChatGPT is the recommended live GPT experience, while Claude and Gemini are supported through prompt-based setup.",
  },
  {
    question: "Will CareerOS remember my information?",
    answer:
      "CareerOS itself does not store student data. Memory depends on the AI platform you choose and how that platform handles chat history, projects, or memory features.",
  },
  {
    question: "Can I upload my resume and other documents?",
    answer:
      "Yes, if the AI platform you are using supports uploads in your current plan or interface. That can make CareerOS more useful for tailored coaching.",
  },
  {
    question: "Do I need to activate CareerOS every time?",
    answer:
      "Usually no. After setup, students can continue working inside the same platform, though behavior depends on how each tool handles ongoing conversation context.",
  },
  {
    question: "Can I keep using CareerOS after graduation?",
    answer:
      "Yes. The workflows remain useful for job search, career growth, networking, interview preparation, and long-term professional development.",
  },
];
