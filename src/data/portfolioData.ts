import { WorkSample, Service, ProcessStep, Outcome, StrategicFramework, ToolCategory, Certification, FAQItem, ScopeQuestion } from '../types';

export const personalInfo = {
  name: "Sheriff Opatola",
  role: "Social Media & Content Strategist",
  secondaryRole: "Technical Virtual Assistant",
  tagline: "Technical Virtual Assistant helping businesses stay organized, efficient, and automated.",
  email: "sheriffopatola@gmail.com",
  phone: "08068127977",
  whatsappUrl: "https://wa.me/2348068127977",
  linkedinUrl: "https://www.linkedin.com/in/sheriff-opatola-599b2a128",
  calendlyUrl: "https://calendly.com/sheriffopatola/30min",
  ctaText: "Work With Me",
  availabilityStatus: "Currently available & open to select brand partnerships",
  availabilityNote: "Taking on 2 new brand partners for consistent content strategy & management.",
  timezone: "GMT+1 (WAT / European-friendly)",
  responseTime: "< 2 hours on business days",
  workingHours: "Mon – Fri · 9:00 AM – 6:00 PM GMT+1",
  copyrightYear: "2026",
  footerTagline: "Strategy, consistency, and automated systems for modern brands.",
};

export const heroData = {
  badge: "Available for new projects & brand retainers",
  headline: "Building social presence that gets brands noticed and remembered.",
  supportingText: "Strategy, content, and consistency for founders and growing brands — connecting the right message to the right audience.",
  highlights: [
    {
      number: "01",
      title: "Content Strategy",
      description: "Strategic systems that align your brand voice with audience needs and business goals.",
    },
    {
      number: "02",
      title: "Social Media Management",
      description: "Consistent presence, engagement, and sustainable growth across platforms.",
    },
  ],
};

export const aboutData = {
  subheading: "About Sheriff Opatola",
  intro: "Turning social feeds into memorable brand assets.",
  paragraphs: [
    "I'm a freelance social media manager and content strategist working with founders and brand owners who want their online presence to turn into something people actually remember, not just another feed to scroll past. My background includes working closely with skincare and beauty founders, which sharpened my eye for building trust and credibility in highly visual, competitive markets.",
    "My approach sits at the intersection of content strategy, audience psychology, and personal branding. I don't just plan what to post, I dig into who your audience is, what actually makes them stop scrolling, and how to translate that into a voice that feels unmistakably yours across every platform. Whether it's a product-based brand or a personal name people are learning to trust, that means understanding the difference between content that just looks nice and content that actually builds credibility in a crowded, skeptical market.",
    "If you're a founder who's tired of posting into the void and wants a presence that's strategic, consistent, and genuinely you, that's where I come in."
  ],
  coreCompetencies: [
    {
      title: "Audience Psychology",
      description: "Uncovering the subtle triggers, questions, and skepticism of beauty and wellness consumers to craft resonant messaging.",
    },
    {
      title: "Systemized Consistency",
      description: "Establishing repeatable monthly production rhythms so you never scramble for what to publish next.",
    },
    {
      title: "Workflow Automation",
      description: "Harnessing Notion, Airtable, and Zapier to automate scheduling handoffs and eliminate operational bottlenecks.",
    },
    {
      title: "Community Management",
      description: "Active comment moderation, relationship building, and response strategies that convert followers into advocates.",
    },
  ],
  clientFeelingGoal: "Total relief that your brand's consistency is completely taken care of by a strategic partner who cares as deeply about your reputation as you do."
};

export const outcomesData: Outcome[] = [
  {
    id: "outcome-1",
    number: "01",
    title: "Enhanced Brand Visibility",
    description: "Reaching high-intent audiences with targeted content distribution across Instagram, TikTok, LinkedIn, and X.",
    iconName: "Eye",
  },
  {
    id: "outcome-2",
    number: "02",
    title: "Meaningful Community Engagement",
    description: "Cultivating thoughtful comments, authentic user responses, and higher engagement rates rather than empty vanity impressions.",
    iconName: "MessageCircleHeart",
  },
  {
    id: "outcome-3",
    number: "03",
    title: "Inbound Lead Generation",
    description: "Guiding engaged followers down the funnel toward discovery calls, product pages, email sign-ups, and repeat purchases.",
    iconName: "TrendingUp",
  },
  {
    id: "outcome-4",
    number: "04",
    title: "Systemized Consistency",
    description: "Eliminating the stress of last-minute posting through organized 30-day content calendars and structured batching.",
    iconName: "CalendarCheck",
  },
  {
    id: "outcome-5",
    number: "05",
    title: "Brand Trust & Voice Alignment",
    description: "Establishing an unmistakable, science-led and human-first brand voice that builds credibility in skeptical consumer markets.",
    iconName: "ShieldCheck",
  },
  {
    id: "outcome-6",
    number: "06",
    title: "Operational Relief & Time Freedom",
    description: "Liberating founders to focus on product formulation and executive leadership while their social channels run seamlessly.",
    iconName: "Clock",
  },
];

export const servicesData: Service[] = [
  {
    id: "service-1",
    number: "01",
    title: "Full-Service Social Media Management",
    description: "End-to-end management covering daily publishing, caption copywriting, active community engagement, and consistent cross-platform execution.",
    deliverables: [
      "Custom monthly content calendar with 4-pillar balance",
      "Engaging caption copywriting tailored to each platform",
      "Daily publishing & platform-specific scheduling",
      "Community management, comment responses & outreach",
      "Monthly KPI analytics & qualitative performance reporting"
    ],
    bestFor: "Founders seeking a hands-off, dependable partner to own day-to-day social operations."
  },
  {
    id: "service-2",
    number: "02",
    title: "Content Strategy & Brand Positioning",
    description: "Audience psychology research, custom content pillars, and high-impact messaging frameworks designed to differentiate your brand.",
    deliverables: [
      "Comprehensive target audience persona & psychology deep dive",
      "4-Pillar Content Ecosystem customized to your product line",
      "Tone of voice guidelines & messaging differentiation matrix",
      "Competitive gap analysis in beauty, wellness & e-commerce",
      "Strategic quarterly roadmap with concrete milestones"
    ],
    bestFor: "Growing brands ready to elevate their positioning and stop sounding like everyone else."
  },
  {
    id: "service-3",
    number: "03",
    title: "Content Systems & Workflow Automation",
    description: "Setting up centralized Notion content hubs, batching processes, and automation pipelines so your content runs like clockwork.",
    deliverables: [
      "Custom Notion Content Engine with approval stages",
      "Zapier / Make automated cross-platform notification pipelines",
      "Asset library structure for UGC, product renders & b-roll",
      "Client feedback & revision workspace",
      "Loom video walkthroughs & handover documentation"
    ],
    bestFor: "Teams struggling with disorganization, delayed approvals, or chaotic file storage."
  },
  {
    id: "service-4",
    number: "04",
    title: "Social Media Audit & Action Plan",
    description: "A comprehensive review of your current profiles, feed aesthetics, content performance, and bio optimization with clear next steps.",
    deliverables: [
      "Full profile audit across bio, highlights, links & aesthetic cohesion",
      "Content format breakdown (Reels/Shorts vs. carousels vs. text)",
      "Detailed review of engagement quality and missed opportunities",
      "Prioritized 30-day action plan for immediate quick wins",
      "60-minute recorded strategic consultation & Q&A"
    ],
    bestFor: "Brands needing clarity on what's working, what's not, and where to invest effort."
  }
];

export const processData: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Audit",
    description: "We begin with an in-depth review of your current presence, brand voice, target audience, and competitors to identify immediate opportunities.",
    highlights: [
      "Intake questionnaire & onboarding kickoff",
      "Audit of historical reach and audience demographics",
      "Identification of messaging gaps & competitive benchmarks"
    ]
  },
  {
    step: "02",
    title: "Strategy & Systems Setup",
    description: "Developing tailored content pillars, messaging guidelines, and establishing your centralized Notion calendar and automation workflows.",
    highlights: [
      "Definition of the 4 core content pillars",
      "Brand voice playbook with vocabulary dos & don'ts",
      "Setup of Notion content hub & scheduling integrations"
    ]
  },
  {
    step: "03",
    title: "Content Execution & Scheduling",
    description: "Transforming strategy into high-quality posts, engaging captions, and visual assets, all scheduled seamlessly in advance for your approval.",
    highlights: [
      "Monthly batching of captions, hooks, and call-to-actions",
      "Collaborative review and one-click approval rounds",
      "Automated scheduling and active community response protocols"
    ]
  },
  {
    step: "04",
    title: "Analysis & Optimization",
    description: "Tracking key engagement patterns and feedback loops to continuously refine our content approach and drive sustainable momentum.",
    highlights: [
      "30-day performance review against defined KPIs",
      "Iterative testing of top-performing content formats",
      "Strategic adjustments based on direct community feedback"
    ]
  }
];

export const workSamplesData: WorkSample[] = [
  {
    id: "linkedin-analytics",
    title: "LinkedIn Analytics Dashboard",
    caption: "30-day performance overview showing steady growth in page views, impressions, and new followers.",
    platform: "LinkedIn",
    category: "analytics",
    imageFileName: "LinkedIn Analytics Dashboard.jpg",
    highlightMetric: "12,847",
    metricLabel: "Page Views (+18.6%)",
    details: {
      overview: "Comprehensive 30-day company page analytics for GlowSkincare highlighting healthy multi-metric momentum across visibility, visitor conversion, and organic community growth.",
      keyDeliverables: [
        "Consistent posting schedule highlighting skincare science and B2B brand values",
        "Optimized company page metadata and employee advocacy alignment",
        "Steady upward trendline in followers and impressions with zero paid ad spend"
      ],
      metricsOrResults: [
        { label: "Page Views", value: "12,847", change: "+18.6%" },
        { label: "Unique Visitors", value: "3,214", change: "+15.3%" },
        { label: "Post Impressions", value: "1,892", change: "+12.7%" },
        { label: "Engagement Rate", value: "4.8%", change: "+0.9 pp" },
        { label: "New Followers", value: "+287", change: "+21.4%" }
      ],
      toolsUsed: ["LinkedIn Campaign & Page Analytics", "Notion", "Canva"]
    }
  },
  {
    id: "linkedin-post",
    title: "LinkedIn Post Performance",
    caption: "High-performing product launch post for the Radiance Serum with strong engagement rate and quality comments.",
    platform: "LinkedIn",
    category: "analytics",
    imageFileName: "LinkedIn Post Performance.jpg",
    highlightMetric: "7.2%",
    metricLabel: "Engagement Rate (vs 5.6% avg)",
    details: {
      overview: "Breakdown of the GlowSkincare Radiance Serum product innovation announcement, engineered with ingredient transparency (15% Vitamin C, hyaluronic acid, niacinamide) to spark meaningful professional dialogue.",
      keyDeliverables: [
        "Scientific formulation breakdown formatted for high readability",
        "Engaged industry professionals, including cosmetic chemists and beauty executives in comments",
        "Exceeded 30-day benchmark engagement rate by 1.6 percentage points"
      ],
      metricsOrResults: [
        { label: "Engagement Rate", value: "7.2%", change: "vs 5.6% avg" },
        { label: "Impressions", value: "4,328" },
        { label: "Reactions", value: "312" },
        { label: "Comments", value: "47" },
        { label: "Shares", value: "89" }
      ],
      toolsUsed: ["LinkedIn", "Copywriting Framework", "Brand Asset Management"]
    }
  },
  {
    id: "x-analytics-overview",
    title: "X (Twitter) Analytics Overview",
    caption: "28-day analytics dashboard highlighting impressions, engagement rate, and consistent follower growth.",
    platform: "X (Twitter)",
    category: "analytics",
    imageFileName: "X (Twitter) Analytics Overview.jpg",
    highlightMetric: "48.2K",
    metricLabel: "Impressions (+18.7%)",
    details: {
      overview: "28-day organic performance overview on X for GlowSkincare demonstrating steady daily impression volume and high conversation rates driven by conversational skincare education.",
      keyDeliverables: [
        "Daily active community engagement and industry discussions",
        "Top-performing tweet earned 5,842 impressions organically",
        "Consistently high 6.5% engagement rate across all published content"
      ],
      metricsOrResults: [
        { label: "Impressions", value: "48.2K", change: "+18.7%" },
        { label: "Engagements", value: "3,147", change: "+22.4%" },
        { label: "Engagement Rate", value: "6.5%", change: "+0.8 pp" },
        { label: "Profile Visits", value: "892", change: "+15.3%" },
        { label: "New Followers", value: "+214", change: "+12.6%" }
      ],
      toolsUsed: ["X Analytics", "Notion Content Hub", "Thread Formulation"]
    }
  },
  {
    id: "tiktok-analytics",
    title: "TikTok Analytics",
    caption: "30-day overview showing strong video views, engagement, and net follower growth driven by educational and routine content.",
    platform: "TikTok",
    category: "analytics",
    imageFileName: "Profile Performance.jpg",
    highlightMetric: "286.4K",
    metricLabel: "Video Views (30 Days)",
    details: {
      overview: "Full 30-day TikTok dashboard illustrating viral reach and community expansion powered by simple, high-retention skincare routines and myth-busting videos.",
      keyDeliverables: [
        "Short-form video concepts focused on 'Glow Skincare Routine' & 'Glass Skin Secrets'",
        "Strong audience retention with an average watch time of 18.4 seconds",
        "Gained 3,128 net followers and generated nearly 5,000 shares across beauty communities"
      ],
      metricsOrResults: [
        { label: "Video Views", value: "286.4K" },
        { label: "Likes", value: "18.7K" },
        { label: "Shares", value: "4,892" },
        { label: "Comments", value: "2,341" },
        { label: "Net Followers", value: "+3,128" },
        { label: "Avg Watch Time", value: "18.4s" }
      ],
      toolsUsed: ["TikTok Studio", "CapCut", "Trend & Sound Analysis"]
    }
  },
  {
    id: "instagram-insights",
    title: "Instagram Insights",
    caption: "Professional dashboard insights covering reach, profile visits, engagement rate, and content interactions over 30 days.",
    platform: "Instagram",
    category: "analytics",
    imageFileName: "Instagram Insights (30-day).jpg",
    highlightMetric: "94.8K",
    metricLabel: "Accounts Reached (+18.7%)",
    details: {
      overview: "30-day Instagram professional dashboard review proving strong organic reach expansion, elevated profile visits, and exceptional save rates for educational carousel guides.",
      keyDeliverables: [
        "Reached 94,800 unique accounts with steady daily volume",
        "Generated 2,340 saves and 1,156 shares indicating high-utility content value",
        "Maintained an industry-leading 8.3% engagement rate in a competitive beauty niche"
      ],
      metricsOrResults: [
        { label: "Accounts Reached", value: "94.8K", change: "+18.7%" },
        { label: "Profile Visits", value: "12.6K", change: "+14.3%" },
        { label: "Engagement Rate", value: "8.3%", change: "+1.6%" },
        { label: "Followers Gained", value: "+1,874", change: "+12.9%" },
        { label: "Content Saves", value: "2,340" },
        { label: "Likes & Shares", value: "6,241 / 1,156" }
      ],
      toolsUsed: ["Instagram Professional Dashboard", "Canva", "Later"]
    }
  },
  {
    id: "notion-content-calendar",
    title: "Notion Content Calendar",
    caption: "Fully organized monthly content calendar with color-coded pillars for Educational, Product Spotlight, UGC & Community, and Behind the Brand content.",
    platform: "Notion",
    category: "calendar",
    imageFileName: "Notion Content Calendar.jpg",
    highlightMetric: "30-Day",
    metricLabel: "Structured Roadmap",
    details: {
      overview: "A master monthly calendar architecture created in Notion, organizing all planned posts by date, format, content pillar, and production status to ensure effortless team visibility.",
      keyDeliverables: [
        "Color-coded taxonomy: Teal (Educational), Amber (Product Spotlight), Pink (UGC & Community), Purple (Behind the Brand)",
        "Integrated pipeline connecting copy drafts, creative assets, and client approval checkboxes",
        "Consistent 6-day weekly publishing rhythm with zero operational bottlenecks"
      ],
      metricsOrResults: [
        { label: "Pillars Balanced", value: "4 Categories" },
        { label: "Planning Horizon", value: "30 Days in Advance" },
        { label: "Approval Cycle", value: "< 24 Hours" }
      ],
      toolsUsed: ["Notion Database", "Custom Workflow Formulas", "Asset Cloud Hub"]
    }
  },
  {
    id: "social-media-strategy",
    title: "Social Media Strategy Overview",
    caption: "Complete 2024 social media strategy covering brand positioning, target audience, content pillars, platform goals, and key metrics.",
    platform: "Strategy Document",
    category: "strategy",
    imageFileName: "Social Media Strategy Overview.jpg",
    highlightMetric: "2024",
    metricLabel: "Strategic Blueprint",
    details: {
      overview: "The executive strategic playbook developed for GlowSkincare, establishing clear brand positioning, core audience demographics (Women 20–35), platform-specific targets, and concrete measurable KPIs.",
      keyDeliverables: [
        "Defined brand positioning: 'Natural. Clean. Radiant.'",
        "Audience persona analysis: 70% female / 30% other, values-driven wellness shoppers",
        "Clear channel goals: +1.8K Instagram followers, 280K+ TikTok views, 7-9% engagement targets"
      ],
      metricsOrResults: [
        { label: "Primary Audience", value: "Ages 20–35" },
        { label: "Instagram Target", value: "+1.8K Followers" },
        { label: "TikTok Target", value: "280K+ Views" },
        { label: "Engagement Goal", value: "7–9%" }
      ],
      toolsUsed: ["Strategy Synthesis", "Figma / Canva", "Market Research"]
    }
  },
  {
    id: "content-pillars-framework",
    title: "Content Pillars Framework",
    caption: "Clear four-pillar content framework designed to educate, inspire, build community, and strengthen brand storytelling.",
    platform: "Strategy Framework",
    category: "strategy",
    imageFileName: "image1.jpg",
    highlightMetric: "4 Pillars",
    metricLabel: "Ecosystem Architecture",
    details: {
      overview: "The foundational content distribution framework created for GlowSkincare to harmonize science-backed education with authentic human storytelling and transparent product highlights.",
      keyDeliverables: [
        "Pillar 1: Educational (Skincare Science, myth busting, routine guides, skin health tips)",
        "Pillar 2: Product Spotlight (Formulas, routine recommendations, ingredient benefits)",
        "Pillar 3: Community & UGC (Real results, customer testimonials, Q&As, community polls)",
        "Pillar 4: Brand Story (Behind the scenes, founder journey, sustainability values)",
        "Core guiding motto: 'Science-led. Results-driven. Human-first.'"
      ],
      metricsOrResults: [
        { label: "Pillars", value: "4 Distinct Lanes" },
        { label: "Philosophy", value: "Science-led & Human-first" },
        { label: "Content Variety", value: "16+ Post Types" }
      ],
      toolsUsed: ["Framework Design", "Brand Voice Architecture", "Audience Psychology"]
    }
  },
  {
    id: "facebook-insights",
    title: "Facebook Page Insights & Community",
    caption: "30-day overview showing 214K+ reach, 17K+ post engagements, and authentic product community feedback.",
    platform: "Facebook",
    category: "analytics",
    imageFileName: "glowskincare-facebook-insights.png",
    highlightMetric: "214.6K",
    metricLabel: "Page Reach (+28%)",
    details: {
      overview: "Facebook community page insights demonstrating substantial organic reach growth, 31K+ page likes, and authentic community engagement on transparent formulation updates.",
      keyDeliverables: [
        "Top post on Rosewater Toner reformulation reached 48,200 accounts with 2,910 reactions and 340 comments",
        "Active, transparent brand replies directly answering customer ingredient inquiries",
        "Total post engagement reached 17,280 (up 15% period-over-period)"
      ],
      metricsOrResults: [
        { label: "Page Reach", value: "214,600", change: "+28%" },
        { label: "Page Likes", value: "31,940", change: "+620 new" },
        { label: "Post Engagement", value: "17,280", change: "+15%" },
        { label: "Top Post Reach", value: "48,200" },
        { label: "Top Post Comments", value: "340" }
      ],
      toolsUsed: ["Meta Business Suite", "Community Management Protocols"]
    }
  },
  {
    id: "x-thread-performance",
    title: "X Analytics & Viral Routine Thread",
    caption: "406K+ impressions, 28K+ engagements, and viral routine breakdown generating 341 website link clicks.",
    platform: "X (Twitter)",
    category: "analytics",
    imageFileName: "glowskincare-x-analytics.png",
    highlightMetric: "406.2K",
    metricLabel: "Impressions (+19%)",
    details: {
      overview: "High-scale performance on X highlighted by an educational routine breakdown thread challenging 9-step routines and driving massive click-through to product guides.",
      keyDeliverables: [
        "406,200 impressions generated in 28 days with 28,940 total engagements (+27%)",
        "Top thread earned 2,340 likes, 612 reposts, 184 replies, and 341 direct link clicks",
        "Substantial organic profile traffic leading to 891 new follower additions (+31%)"
      ],
      metricsOrResults: [
        { label: "Impressions", value: "406.2K", change: "+19%" },
        { label: "Engagements", value: "28,940", change: "+27%" },
        { label: "Profile Visits", value: "6,715", change: "+12%" },
        { label: "New Followers", value: "891", change: "+31%" },
        { label: "Thread Link Clicks", value: "341" }
      ],
      toolsUsed: ["X Analytics", "Long-form Thread Copywriting", "Audience Hook Testing"]
    }
  }
];

export const frameworksData: StrategicFramework[] = [
  {
    id: "framework-1",
    number: "01",
    title: "The 4-Pillar Content Ecosystem",
    subtitle: "Balanced Content Distribution for Sustainable Engagement",
    description: "A calculated framework that ensures an intentional balance between education, product value, social proof, and emotional brand connection.",
    pillars: [
      { name: "Educational", focus: "Skincare science, ingredient spotlights, myth-busting & routine tutorials.", tag: "Science-led" },
      { name: "Product Spotlight", focus: "Key formula benefits, application guides, and routine recommendations.", tag: "Results-driven" },
      { name: "Community & UGC", focus: "Real customer reviews, before & after results, and community discussions.", tag: "Social proof" },
      { name: "Brand Story", focus: "Founder vision, behind-the-scenes laboratory insights & ethical values.", tag: "Human-first" }
    ]
  },
  {
    id: "framework-2",
    number: "02",
    title: "Audience-First Positioning Framework",
    subtitle: "Psychology-Driven Messaging in Skeptical Markets",
    description: "Translating customer pain points and conscious beauty expectations into an authentic voice that stops the scroll and eliminates skepticism.",
    pillars: [
      { name: "Empathy & Skepticism Mapping", focus: "Identifying common customer hesitations and addressing them with honest transparency." },
      { name: "Unmistakable Brand Voice", focus: "Codifying distinct vocabulary, tone guidelines, and signature editorial hooks." },
      { name: "Value-Led Call to Actions", focus: "Replacing hard sales pushes with relationship-building conversation starters." }
    ]
  },
  {
    id: "framework-3",
    number: "03",
    title: "The Sustainable Consistency Pipeline",
    subtitle: "Notion & Automation Infrastructure for Founders",
    description: "A systemized monthly operating rhythm that removes daily posting pressure through structured batching, review loops, and multi-channel scheduling.",
    pillars: [
      { name: "Centralized Notion Hub", focus: "One single source of truth for assets, copy drafts, and live publishing statuses." },
      { name: "One-Click Approval Workflows", focus: "Streamlined stakeholder review with clear deadlines and no email back-and-forth." },
      { name: "Automated Handoffs", focus: "Zapier and platform integrations delivering scheduled assets effortlessly." }
    ]
  },
  {
    id: "framework-4",
    number: "04",
    title: "Data-Informed Content Optimization",
    subtitle: "Iterative Performance Tracking & Feedback Loops",
    description: "Continuous metric tracking across engagement rates, reach trends, profile visits, and community interactions to refine high-performing content month over month.",
    pillars: [
      { name: "Qualitative Comment Analysis", focus: "Mining real audience questions to generate high-performing upcoming topics." },
      { name: "Format Testing", focus: "Comparing carousels, short-form reels, and text threads against reach KPIs." },
      { name: "Monthly Performance Brief", focus: "Clear, jargon-free reports highlighting what drove real results." }
    ]
  }
];

export const toolsData: ToolCategory[] = [
  {
    categoryName: "Social Media Platforms",
    description: "Channels managed with native optimization and tailored platform strategies.",
    tools: [
      { name: "Instagram", role: "Reels, Carousels, Stories & Community" },
      { name: "TikTok", role: "Short-form video storytelling & education" },
      { name: "LinkedIn", role: "B2B brand authority & industry positioning" },
      { name: "X (Twitter)", role: "Real-time threads & community dialogue" },
      { name: "Facebook", role: "Community groups & page insights" }
    ]
  },
  {
    categoryName: "Creative & Content Production",
    description: "High-end visual curation, video editing, and graphic design tools.",
    tools: [
      { name: "CapCut", role: "Short-form video pacing, sound & captions" },
      { name: "Canva", role: "Editorial carousel layouts & brand kits" }
    ]
  },
  {
    categoryName: "Systems, Workflow & Automation",
    description: "Technical virtual assistant infrastructure to maintain organization and zero chaos.",
    tools: [
      { name: "Notion", role: "Centralized content hubs & editorial calendars" },
      { name: "Airtable", role: "Asset databases & campaign tracking" },
      { name: "Zapier", role: "Automated notification & handoff pipelines" },
      { name: "Google Workspace", role: "Collaborative docs, spreadsheets & drive assets" },
      { name: "Web-Based Onboarding Portal", role: "Seamless client kickoff & asset intake" }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Software & Web Developer Certification",
    issuer: "Software & Web Development",
    status: "Completed",
    year: "Verified Credential"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does the initial onboarding process work?",
    answer: "We begin with a 30-minute discovery call to align on your brand voice, growth objectives, and target channels. From there, you gain access to a dedicated web-based onboarding portal to share brand guidelines, visual assets, and credentials. Within 5–7 business days, your customized Notion content hub, 30-day roadmap, and approval workflows are live."
  },
  {
    id: "faq-2",
    question: "Do you create the visuals and captions, or work with our raw brand assets?",
    answer: "Both. If you provide product photography, UGC clips, or brand footage, I curate and transform them into engaging carousels and short-form video reels (using Canva and CapCut). I write all hooks, educational body copy, and conversion calls-to-action tailored to your audience's psychology."
  },
  {
    id: "faq-3",
    question: "How much time do I need to commit each month as a founder?",
    answer: "Less than 60–90 minutes per month once onboarded. You review the planned monthly batch in Notion with 1-click approvals or feedback notes. My role as both your strategist and technical virtual assistant is to give you complete operational relief from social media stress."
  },
  {
    id: "faq-4",
    question: "Which platforms do you specialize in?",
    answer: "My core expertise is Instagram, TikTok, LinkedIn, and X (Twitter), along with Facebook page management. Each platform receives native content tailored to its specific audience behavior and algorithms rather than generic cross-posting."
  },
  {
    id: "faq-5",
    question: "What tools and software access do you require?",
    answer: "Typically just your native social platform accounts (via Meta Business Suite, LinkedIn admin access, etc.) or preferred scheduling tools. I build and maintain the Notion content hub, Airtable asset trackers, and Zapier notification pipelines for you."
  }
];

export const scopeQuestionsData: ScopeQuestion[] = [
  {
    id: "q1",
    question: "Where is your brand currently at?",
    options: [
      {
        label: "Established brand seeking full management",
        description: "Looking to hand off day-to-day creation, scheduling, and community engagement completely.",
        recommendedServiceId: "service-1"
      },
      {
        label: "Growing brand needing a fresh strategy sprint",
        description: "Need clear audience positioning, content pillars, and a 30-day roadmap our team can execute.",
        recommendedServiceId: "service-2"
      },
      {
        label: "Active brand struggling with chaotic workflows",
        description: "Need automated Notion pipelines, Airtable trackers, and Zapier notifications to streamline operations.",
        recommendedServiceId: "service-3"
      },
      {
        label: "Brand needing an objective audit & action plan",
        description: "Need an expert review of current performance metrics with prioritized recommendations to fix leaks.",
        recommendedServiceId: "service-4"
      }
    ]
  }
];
