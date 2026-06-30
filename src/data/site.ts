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
import { withBasePath } from "@/lib/base-path";

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

export const manualPromptPath = withBasePath("/careeros-claude-gemini-system-prompt.md");

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/activate", label: "Activate" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/resources", label: "Resources" },
  { href: "/demo", label: "Examples" },
  { href: "/faq", label: "FAQ" },
];

export const footerLinks = [
  { href: "/activate", label: "Activate Your AI Coach" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/resources", label: "Resources" },
  { href: "/demo", label: "Examples" },
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
    logoSrc: withBasePath("/logo-chatgpt.svg"),
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
    logoSrc: withBasePath("/logo-claude.svg"),
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
    logoSrc: withBasePath("/logo-gemini.svg"),
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
    logoSrc: withBasePath("/logo-chatgpt.svg"),
    logoTone: "white",
    access: "Free tier",
    purpose: "A primary workspace for CareerOS coaching and everyday career work.",
    bestUseCase: "Resume work, interview prep, reflection, and ongoing planning.",
    whyStudentsShouldUseIt: "It is the easiest daily driver for keeping CareerOS active over time.",
    href: careerOsGptUrl,
  },
  {
    name: "Claude",
    logoSrc: withBasePath("/logo-claude.svg"),
    logoTone: "color",
    access: "Free tier",
    purpose: "Long-form reasoning, writing refinement, and deeper thought partnership.",
    bestUseCase: "Narrative polishing, essays, behavioral answers, and strategic thinking.",
    whyStudentsShouldUseIt: "It helps students turn rough ideas into more deliberate output.",
    href: "https://claude.ai",
  },
  {
    name: "Gemini",
    logoSrc: withBasePath("/logo-gemini.svg"),
    logoTone: "color",
    access: "Free tier",
    purpose: "General-purpose AI with strong Google ecosystem alignment.",
    bestUseCase: "Students already working across Gmail, Docs, and the Google stack.",
    whyStudentsShouldUseIt: "It reduces friction when the rest of a student workflow already lives in Google.",
    href: "https://gemini.google.com",
  },
  {
    name: "Perplexity",
    logoSrc: withBasePath("/logo-perplexity.svg"),
    logoTone: "white",
    access: "Free tier",
    purpose: "Source-backed research for companies, industries, and current context.",
    bestUseCase: "Interview prep, employer research, and fast knowledge gathering.",
    whyStudentsShouldUseIt: "It helps students verify information instead of relying on vague summaries.",
    href: "https://www.perplexity.ai",
  },
  {
    name: "Canva",
    logoSrc: withBasePath("/logo-canva.svg"),
    logoTone: "white",
    access: "Free tier",
    purpose: "Visual packaging for resumes, portfolios, and event materials.",
    bestUseCase: "Portfolio boards, posters, simple design systems, and polished graphics.",
    whyStudentsShouldUseIt: "It gives non-designers enough polish to present work more credibly.",
    href: "https://www.canva.com",
  },
  {
    name: "Excalidraw AI",
    logoSrc: withBasePath("/logo-excalidraw.svg"),
    logoTone: "white",
    access: "Open source",
    purpose: "Quick visual thinking and framework sketching.",
    bestUseCase: "Case prep, strategic thinking, and workshop explanation.",
    whyStudentsShouldUseIt: "It helps students think clearly when text alone is too dense.",
    href: "https://excalidraw.com",
  },
  {
    name: "Grammarly",
    logoSrc: withBasePath("/logo-grammarly.svg"),
    logoTone: "white",
    access: "Free tier",
    purpose: "Writing correction and tone refinement across platforms.",
    bestUseCase: "Emails, outreach, assignments, and professional communication.",
    whyStudentsShouldUseIt: "It catches small quality issues that affect credibility disproportionately.",
    href: "https://www.grammarly.com",
  },
  {
    name: "Notion",
    logoSrc: withBasePath("/logo-notion.svg"),
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
    useCase:
      "Show how to share a JD, a weak resume bullet, and real evidence so CareerOS can help tailor the application truthfully.",
    takeaway:
      "CareerOS gives better answers when the student brings the JD, the resume, and the actual project details. The coach can then improve positioning without inventing experience.",
    messages: [
      {
        speaker: "Student",
        text: "I want to apply for a Business Analyst internship. I pasted the JD below. It says the role needs Excel, SQL basics, dashboarding, stakeholder communication, and problem solving. My resume currently says: 'Worked on sales data analysis project in college.' Can you help me make this relevant without exaggerating anything?",
      },
      {
        speaker: "CareerOS",
        text: "Yes. I will treat this as JD alignment, not generic resume rewriting. Right now the bullet is too vague to prove fit. I need one detail before I rewrite it: what was the dataset, what did you analyze, and what business insight or recommendation came out of the project?",
      },
      {
        speaker: "Student",
        text: "We analyzed 3 months of retail sales data for a class project. I used Excel pivot tables and charts. We found low repeat purchases in one product category and recommended a bundle offer.",
      },
      {
        speaker: "CareerOS",
        text: "That is usable evidence. A stronger bullet is: 'Analyzed 3 months of retail sales data using Excel pivot tables and charts to identify low repeat purchases in a product category and recommended a bundle offer to improve customer retention.' It works because it shows tool, timeframe, insight, and recommendation.",
      },
      {
        speaker: "Student",
        text: "What else should I change so the resume looks closer to this role?",
      },
      {
        speaker: "CareerOS",
        text: "Prioritize five changes. 1. Move analytics projects above unrelated activities. 2. Add a Skills section with Excel, SQL basics, dashboarding, and presentation. 3. Rewrite every project bullet to show business outcome, not just activity. 4. Add one line that shows communication if you presented the work. 5. Keep the language concrete so an ATS and a recruiter can both understand it quickly. If you want, paste the full resume next and I will score it against this JD.",
      },
    ],
  },
  {
    title: "LinkedIn Positioning",
    studentContext: "MBA student wants a stronger LinkedIn profile before applying to internships.",
    useCase:
      "Show how to ask CareerOS for a profile review, share the current text, and iterate on headline and about section.",
    takeaway:
      "CareerOS works best when the student gives the current LinkedIn text and the target role. That lets the coach rewrite positioning instead of producing generic advice.",
    messages: [
      {
        speaker: "Student",
        text: "I want to improve my LinkedIn profile for consulting internships. My current headline is just 'MBA Student'. I know that is weak, but I am not sure what to replace it with.",
      },
      {
        speaker: "CareerOS",
        text: "It is weak because it does not communicate direction, skills, or proof. Before I rewrite it, send me three things: your target role, 2 to 3 strengths you actually want to be known for, and one project or experience that supports that direction.",
      },
      {
        speaker: "Student",
        text: "Target role is consulting analyst. Strengths: structured thinking, presentations, and research. Relevant experience: I helped with a market entry project for a consumer brand and created a short recommendation deck.",
      },
      {
        speaker: "CareerOS",
        text: "Good. A cleaner headline would be: 'MBA Candidate | Consulting Analyst Aspirant | Structured Problem Solving, Research, and Executive Presentations'. It is specific without overclaiming. For the About section, start with your direction, add proof from the market entry project, and finish with what kind of opportunity you are pursuing.",
      },
      {
        speaker: "Student",
        text: "Can you write the About section too?",
      },
      {
        speaker: "CareerOS",
        text: "Yes. Here is a draft: 'I am an MBA student building a career in consulting, with a focus on structured problem solving, research, and executive communication. In a recent market entry project, I worked on market sizing, competitor review, and a recommendation deck for a consumer brand. I enjoy turning ambiguity into a clear point of view and a practical next step. I am looking for opportunities where I can contribute through analysis, synthesis, and client-ready communication while continuing to learn from high-performing teams.'",
      },
      {
        speaker: "Student",
        text: "What should I add in Featured or Skills so recruiters can see it quickly?",
      },
      {
        speaker: "CareerOS",
        text: "Add a recommendation deck, a strong project summary, and a short post or document that shows your thinking. For skills, keep only what you can defend in an interview: research, PowerPoint, Excel, structured problem solving, presentation, stakeholder communication, and teamwork. Remove anything that looks inflated or irrelevant.",
      },
    ],
  },
  {
    title: "Interview Tomorrow",
    studentContext: "MBA marketing student has a first-round interview the next day and needs a focused prep sprint.",
    useCase:
      "Show how CareerOS can turn a time-sensitive request into a short, structured plan with mock follow-ups.",
    takeaway:
      "When the interview is tomorrow, CareerOS should narrow the work to a few high-value answers, a company brief, and a small set of story-based questions.",
    messages: [
      {
        speaker: "Student",
        text: "I have an interview tomorrow for a marketing internship at an FMCG company. I am nervous and I do not know what to prepare first.",
      },
      {
        speaker: "CareerOS",
        text: "We should treat this as a 24-hour sprint. I need three things: the company name, the role description if you have it, and one marketing-related project or experience you can speak about. While you gather that, focus on a 60-second introduction, why marketing, why FMCG, 5 STAR stories, and 6 likely questions.",
      },
      {
        speaker: "Student",
        text: "The company is NestWell Foods. The role is marketing intern. My strongest project is a consumer behavior survey for a new snack product. I helped collect responses and turn them into a simple positioning recommendation.",
      },
      {
        speaker: "CareerOS",
        text: "Good. Your answer to 'Tell me about yourself' should connect MBA identity, marketing interest, the survey project, and the internship. A strong structure is: current profile, what kind of work energizes you, what evidence you have, and why this role fits. I would not start with your full academic history.",
      },
      {
        speaker: "Student",
        text: "Can you draft the answer and tell me what to emphasize?",
      },
      {
        speaker: "CareerOS",
        text: "Draft: 'I am an MBA student specializing in marketing with a strong interest in consumer behavior and brand growth. In a recent project, I worked on a consumer survey for a new snack product, where I helped identify purchase drivers and convert responses into positioning recommendations. That experience made me more interested in how FMCG brands use consumer insight to guide campaigns and product decisions. I am now looking for a marketing internship where I can contribute to research, planning, and execution while learning from a consumer-focused team.' Emphasize consumer insight, structured thinking, and why FMCG specifically.",
      },
      {
        speaker: "Student",
        text: "What questions should I practice tonight?",
      },
      {
        speaker: "CareerOS",
        text: "Practice these first: 1. Tell me about yourself. 2. Why marketing? 3. Why FMCG? 4. Walk me through your consumer survey project. 5. What insight did you find and how would a brand use it? 6. Tell me about a time you worked in a team. 7. What is one campaign you liked and why? 8. What is your weakness? For the project question, be ready to answer sample size, survey method, key insight, recommendation, and what you would improve.",
      },
      {
        speaker: "Student",
        text: "Can we do one mock question right now?",
      },
      {
        speaker: "CareerOS",
        text: "Yes. Answer this in 90 seconds: Why do you want to work in marketing at an FMCG company, and what from your consumer survey project makes you a credible fit? After you answer, I will score structure, evidence, relevance, and clarity.",
      },
    ],
  },
  {
    title: "Consulting Fit + Case",
    studentContext: "MBA student wants consulting but does not know how to build the story or start case prep.",
    useCase:
      "Show how to ask CareerOS for role fit, story building, and a structured case interview start.",
    takeaway:
      "CareerOS should not jump into case drills before the student has a fit story. The best prompt gives background, target firms, and honest strengths or gaps.",
    messages: [
      {
        speaker: "Student",
        text: "I want to target consulting, but I keep giving generic answers in interviews. I am not sure what my story should be or how to start case practice.",
      },
      {
        speaker: "CareerOS",
        text: "We should separate this into two tasks: fit story and case skill. First I need your background in one line, the target firms if you have them, and 2 experiences you can honestly use. Do not send me your whole resume yet.",
      },
      {
        speaker: "Student",
        text: "Background: MBA student with marketing and analytics interest. Target firms: Deloitte, KPMG, and Accenture. Experiences: a market entry project and a student club leadership role.",
      },
      {
        speaker: "CareerOS",
        text: "That is enough to start. Your fit story should explain why consulting, why now, and why you. For example: you like structured problem solving, you have evidence from research and leadership, and you want to work in an environment where clear thinking and communication matter every day.",
      },
      {
        speaker: "Student",
        text: "Can you give me a stronger version I can practice?",
      },
      {
        speaker: "CareerOS",
        text: "Draft: 'I am interested in consulting because I enjoy structured problem solving, fast-paced learning, and turning analysis into recommendations. In my MBA, I have enjoyed market research and analytics because they force me to look at a problem from multiple angles before drawing a conclusion. In a market entry project, I worked through competitor research and recommendation framing, and in a student club role I learned to coordinate people and communicate clearly under pressure. Consulting feels like the right place to use those strengths while continuing to build judgment across industries.'",
      },
      {
        speaker: "Student",
        text: "Now how should I start case practice?",
      },
      {
        speaker: "CareerOS",
        text: "Start with one simple case type: profitability. Do not try to learn every framework at once. Here is the prompt to use next: 'Run me through a beginner-friendly profitability case. Ask one question at a time, wait for my answer, and score my structure after each step.' That is a better way to practice than asking for a giant list of case frameworks.",
      },
    ],
  },
  {
    title: "Networking + Follow-up",
    studentContext: "MBA student wants to reach alumni and follow up after a call without sounding robotic.",
    useCase:
      "Show how CareerOS can draft outreach, refine tone, and create a follow-up after a conversation.",
    takeaway:
      "The best networking prompts include the recipient, context, reason for outreach, and the exact ask. CareerOS can then help the student sound specific and professional.",
    messages: [
      {
        speaker: "Student",
        text: "I want to message an alum who works at Bain. I do not want the message to sound copied from the internet. I want it short and respectful.",
      },
      {
        speaker: "CareerOS",
        text: "Good. Send me four details: who the person is, where they work, what role you want, and why you are reaching out to them specifically. The more context you give, the less generic the message will be.",
      },
      {
        speaker: "Student",
        text: "The alum is from my college, works at Bain in Mumbai, and I am targeting consulting analyst roles. I want to ask for 10 minutes to understand the recruiting process and what they look for in candidates.",
      },
      {
        speaker: "CareerOS",
        text: "Here is a clean message: 'Hi [Name], I am an MBA student from [College] and saw that you are now with Bain in Mumbai. I am exploring consulting analyst roles and would love to learn from your experience if you have 10 minutes. I am especially interested in understanding the recruiting process and the skills Bain values most in candidates. If you are open to it, I would really appreciate the chance to connect.'",
      },
      {
        speaker: "Student",
        text: "That is good. What if they reply and I have a call with them next week?",
      },
      {
        speaker: "CareerOS",
        text: "Before the call, prepare 4 questions: why they chose consulting, what Bain looks for in interviews, how they would prepare if they were in your position, and what mistakes students make during networking. After the call, send a follow-up that thanks them, mentions one specific thing you learned, and keeps the relationship open.",
      },
      {
        speaker: "Student",
        text: "Can you write the follow-up too?",
      },
      {
        speaker: "CareerOS",
        text: "Yes. Draft: 'Hi [Name], thank you again for taking the time to speak with me today. I especially appreciated your perspective on how Bain evaluates structured thinking and communication during interviews. Your suggestion to practice with a clear recommendation at the end was very helpful. I will apply that as I continue preparing. Thanks again for your guidance, and I hope we stay in touch.'",
      },
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What is CareerOS?",
    answer:
      "CareerOS is a personal AI career coach for MBA students and young professionals. It is built to help with resume work, LinkedIn positioning, interview preparation, company research, skill-gap analysis, networking, and placement planning. The goal is not casual chat. The goal is to help students make better career decisions and improve their employability over time.",
  },
  {
    question: "Why not just use ChatGPT directly?",
    answer:
      "You can use ChatGPT directly, but CareerOS gives you a stronger operating model. It starts with career context, uses coaching-style prompts, and keeps the conversation focused on practical outputs such as resume improvements, interview answers, research summaries, and next actions. In short, CareerOS reduces the amount of thinking you need to do just to start a useful career conversation.",
  },
  {
    question: "Do I need ChatGPT Plus?",
    answer:
      "The live CareerOS GPT works best inside ChatGPT, but access depends on the student's ChatGPT plan and the current availability of GPTs in their account. If a student cannot access the live GPT, they can still use the Claude or Gemini setup path with the provided system prompt.",
  },
  {
    question: "Can I use Claude or Gemini instead?",
    answer:
      "Yes. ChatGPT is the preferred live experience, but Claude and Gemini are supported through a manual setup prompt. That means students can still use CareerOS even if they prefer another AI platform or do not have GPT access in ChatGPT.",
  },
  {
    question: "Will CareerOS remember my information?",
    answer:
      "CareerOS itself does not store student data. Any memory or persistence depends on the platform the student uses and whether that platform supports chat history, memory, projects, or custom instructions. For that reason, students should re-share important context when starting a new thread or revisit their Career Profile when needed.",
  },
  {
    question: "Can I upload my resume and other documents?",
    answer:
      "Yes, if the AI platform supports uploads in the student's current plan or interface. Uploading a resume, job description, LinkedIn profile, or project notes usually makes CareerOS much more useful because it can coach against real evidence instead of guessing from a short summary.",
  },
  {
    question: "Do I need to activate CareerOS every time?",
    answer:
      "Usually no. Once CareerOS is activated, students can keep using the same chat or workspace and continue the conversation. They only need to reintroduce context if they start a new thread, switch platforms, or the AI loses the earlier setup.",
  },
  {
    question: "Can I keep using CareerOS after graduation?",
    answer:
      "Yes. The same workflows remain useful after graduation for job search, role transitions, networking, interview preparation, performance communication, and longer-term professional growth. CareerOS is designed to stay relevant after campus placements too.",
  },
  {
    question: "How should I use CareerOS to get the best answers?",
    answer:
      "Give CareerOS the actual context: your target role, company, resume, LinkedIn text, job description, project details, or the exact question you want help with. If you are asking for a rewrite or review, paste the material directly. If you are asking for strategy, tell it your deadline, your current stage, and what you have already tried. The more concrete the input, the better the coaching.",
  },
  {
    question: "What should I not ask CareerOS to do?",
    answer:
      "Do not ask it to fabricate experience, invent achievements, misrepresent your background, or guarantee a job. CareerOS is designed to improve positioning and preparation, not to create false credentials. It will be more useful when you give it the truth, even if the starting point is weak.",
  },
  {
    question: "What if I do not know what to ask?",
    answer:
      "Start with your current situation and the outcome you want. For example, you can say you are unsure about consulting versus analytics, or that your resume is weak for a specific role, or that you have an interview tomorrow and need a sprint plan. CareerOS is designed to clarify the problem first, then coach the next step.",
  },
];
