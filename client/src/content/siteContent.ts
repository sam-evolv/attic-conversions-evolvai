export const navigation = {
  logo: "Dublin Attic Conversions",
  tagline: "Family-Run Since 1995",
  items: [
    { label: "Home", href: "/" },
    { label: "Attic Journey", href: "/attic-journey" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Costs & Timeline", href: "/costs-timeline" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Get a Quote", href: "/contact" },
};

export const hero = {
  headline: "Transform Your Attic Into Something Beautiful",
  subheadline: "Dublin's trusted family-run specialists with 30+ years of experience turning unused spaces into stunning, functional rooms.",
  primaryCta: { label: "Start Your Journey", href: "/attic-journey" },
  secondaryCta: { label: "Get a Free Quote", href: "/contact" },
  trustBadges: [
    "30+ Years Experience",
    "Family Run",
    "Fully Certified",
    "1000+ Conversions",
  ],
};

export const homeIntro = {
  headline: "Not Sure Where to Start?",
  description: "Converting an attic can feel overwhelming. We've helped over 1,000 Dublin homeowners navigate the process. Our interactive guide walks you through everything—from checking if your attic is suitable, to understanding costs and next steps.",
  steps: [
    {
      number: "1",
      title: "Check Suitability",
      description: "Find out if your attic can be converted based on height and roof type.",
    },
    {
      number: "2",
      title: "Explore Options",
      description: "Discover what's possible—from home offices to master bedrooms with en-suites.",
    },
    {
      number: "3",
      title: "Get Your Quote",
      description: "Receive a clear, no-obligation quote after a quick survey of your home.",
    },
  ],
  cta: { label: "Start the Attic Journey", href: "/attic-journey" },
};

export const services = {
  headline: "What We Do",
  subheadline: "From simple storage solutions to complete living spaces, we handle every type of attic conversion.",
  items: [
    {
      id: "standard",
      title: "Standard Conversions",
      shortDescription: "The most common type—transform your attic into a bright, usable room with Velux windows.",
      details: [
        "Suitable for most gable-end houses",
        "Velux roof windows for natural light",
        "Proper insulation and ventilation",
        "Building regulations compliant",
        "Typical timeline: 3-4 weeks",
      ],
      idealFor: "Home offices, children's bedrooms, guest rooms",
    },
    {
      id: "dormer",
      title: "Dormer Conversions",
      shortDescription: "Add significant headroom and floor space with a rear dormer extension.",
      details: [
        "Creates maximum usable floor area",
        "Vertical windows for better views",
        "Usually requires planning permission",
        "Ideal for hipped roof houses",
        "Typical timeline: 4-6 weeks",
      ],
      idealFor: "Master bedrooms with en-suite, larger living spaces",
    },
    {
      id: "ensuite",
      title: "En-Suite Additions",
      shortDescription: "Add a fully functional bathroom to your attic conversion.",
      details: [
        "Full bathroom or shower room options",
        "Proper drainage and ventilation",
        "Hot water system considerations",
        "Adds significant value to your home",
        "Can be added to any conversion type",
      ],
      idealFor: "Master bedroom suites, rental income rooms",
    },
    {
      id: "hipped",
      title: "Hipped Roof Solutions",
      shortDescription: "Specialist solutions for hipped roofs that maximise your usable space.",
      details: [
        "Dutch hip or side dormer options",
        "Overcomes the angled roof challenge",
        "Requires careful planning",
        "Can dramatically increase floor area",
        "Expert structural assessment included",
      ],
      idealFor: "Houses with hipped roofs wanting maximum space",
    },
    {
      id: "timber",
      title: "Timber Frame Houses",
      shortDescription: "Specialist conversion service for timber frame properties.",
      details: [
        "Structural engineer inspection required",
        "Special certification process",
        "Modified construction approach",
        "Full compliance documentation",
        "Experience with all timber frame types",
      ],
      idealFor: "Modern timber frame homes built since 1990s",
    },
  ],
};

export const suitability = {
  headline: "Is Your Attic Suitable?",
  subheadline: "Two key factors determine whether your attic can be converted: ceiling height and roof shape.",
  heightSection: {
    title: "Ceiling Height",
    truthBlock: "You need at least 2.2 metres from the top of your ceiling joists to the underside of the ridge beam. This is measured at the highest point, standing in the middle of your attic.",
    howToMeasure: [
      "Stand in the centre of your attic, directly under the ridge",
      "Measure from the top of the floor joists (not any boards) straight up to the ridge",
      "If you have loose insulation, push it aside to find the joist top",
      "Take a photo and send it to us if you're unsure",
    ],
    whatItMeans: {
      good: {
        range: "2.4m+",
        meaning: "Excellent—you'll have comfortable standing room throughout most of the conversion.",
      },
      okay: {
        range: "2.2m - 2.4m",
        meaning: "Workable—you'll have good headroom in the centre, sloping to the sides.",
      },
      challenging: {
        range: "Under 2.2m",
        meaning: "Difficult without a dormer. A dormer can add the height you need, but requires planning permission.",
      },
    },
  },
  roofSection: {
    title: "Roof Shape",
    truthBlock: "Gable roofs (with vertical triangular ends) are the most straightforward to convert. Hipped roofs (where all sides slope) need more creative solutions but are definitely doable.",
    types: [
      {
        name: "Gable Roof",
        description: "Vertical walls at each end of the house. The most common and easiest to convert.",
        suitability: "Ideal",
      },
      {
        name: "Hipped Roof",
        description: "All four sides slope inward. Reduces usable floor space but solutions exist.",
        suitability: "Requires solutions",
      },
      {
        name: "Half-Hipped",
        description: "A mix of both—vertical walls with partial slopes. Good conversion potential.",
        suitability: "Good",
      },
    ],
  },
  nextStep: {
    text: "Not sure about your measurements? Send us a few photos and we'll give you an honest assessment within 24 hours.",
    cta: { label: "Send Photos for Assessment", href: "/contact" },
  },
};

export const habitableVsStorage = {
  headline: "Habitable Room vs Storage Space",
  subheadline: "Understanding the difference affects planning, cost, and what you can do with the space.",
  truthBlock: "A 'habitable room' meets building regulations for living in. A 'storage space' is simply usable floor area with access. The key difference is the 2.4m height requirement over 50% of the floor area.",
  comparison: [
    {
      type: "Habitable Room",
      description: "A proper living space suitable for bedrooms, offices, or living areas.",
      requirements: [
        "Minimum 2.4m ceiling height over 50% of floor area",
        "Proper fixed staircase access",
        "Full insulation and ventilation",
        "Fire safety compliance (especially for 3+ storey homes)",
        "Usually requires building regulations sign-off",
      ],
      benefits: [
        "Adds to your home's official floor area",
        "Counts as an extra bedroom for valuations",
        "Full electrical and heating included",
        "Certified for mortgage and sale purposes",
      ],
    },
    {
      type: "Storage Space",
      description: "Accessible attic space for storage, but not officially a living area.",
      requirements: [
        "Basic access (ladder or basic stairs)",
        "Boarded floor for storage",
        "Basic lighting",
        "No minimum ceiling height requirements",
      ],
      benefits: [
        "Lower cost than full conversion",
        "Usually no planning permission needed",
        "Quick to complete (days, not weeks)",
        "Can be upgraded later",
      ],
    },
  ],
  whatThisMeans: "If you want to use the space regularly—as a bedroom, office, or playroom—you need a habitable room conversion. If you just need somewhere to store boxes and suitcases, a storage conversion is simpler and cheaper.",
  cta: { label: "Discuss Your Options", href: "/contact" },
};

export const process = {
  headline: "How It Works",
  subheadline: "From first call to moving in—here's what to expect at every stage.",
  steps: [
    {
      number: 1,
      title: "Initial Chat & Survey",
      duration: "1-2 hours",
      description: "We visit your home, assess your attic, discuss your needs, and take measurements. This is free and no-obligation.",
      whatHappens: [
        "Measure ceiling height and floor area",
        "Check roof structure and type",
        "Discuss what you want to use the space for",
        "Identify any potential challenges",
        "Talk through options and rough costs",
      ],
    },
    {
      number: 2,
      title: "Quote & Planning",
      duration: "3-5 days after survey",
      description: "We provide a detailed written quote. If planning permission is needed, we handle the application.",
      whatHappens: [
        "Detailed itemised quote sent to you",
        "Clear explanation of what's included",
        "Planning application if required (we manage this)",
        "Timeline and start date discussed",
        "Any questions answered",
      ],
      planningNote: "Most standard conversions don't need planning permission. Dormers usually do. We'll tell you exactly what applies to your situation.",
    },
    {
      number: 3,
      title: "The Build",
      duration: "3-6 weeks typically",
      description: "Our team completes the conversion with minimal disruption to your daily life.",
      whatHappens: [
        "Structural work and flooring",
        "Insulation and plasterboard",
        "Windows and/or dormer installation",
        "Electrics and heating",
        "Staircase installation",
        "Plastering and finishing",
      ],
      disruption: "We work cleanly and access the attic from outside where possible. Most families continue living normally during the build.",
    },
    {
      number: 4,
      title: "Certification & Handover",
      duration: "Final week",
      description: "We ensure everything meets regulations and hand over all documentation.",
      whatHappens: [
        "Building control sign-off",
        "Certificate of Compliance issued",
        "Final inspection and snagging",
        "All paperwork provided",
        "Aftercare and warranty explained",
      ],
      important: "The Certificate of Compliance is essential—you'll need it when selling or remortgaging your home.",
    },
  ],
  cta: { label: "Book Your Free Survey", href: "/contact" },
};

export const costsTimeline = {
  headline: "Costs & Timeline",
  subheadline: "Honest guidance on what to expect. Every project is different, but here's a realistic starting point.",
  costDisclaimer: "These are guide prices only. Your actual cost depends on your specific requirements, roof type, and finish level. We provide exact quotes after surveying your property.",
  costRanges: [
    {
      type: "Storage Conversion",
      range: "€3,000 - €6,000",
      includes: ["Boarding", "Basic access", "Lighting"],
      timeline: "2-5 days",
    },
    {
      type: "Standard Conversion",
      range: "€15,000 - €25,000",
      includes: ["Full room conversion", "Velux windows", "Stairs", "Electrics", "Insulation"],
      timeline: "3-4 weeks",
    },
    {
      type: "Conversion with En-Suite",
      range: "€22,000 - €35,000",
      includes: ["Everything in standard", "Full bathroom or shower room", "Plumbing"],
      timeline: "4-5 weeks",
    },
    {
      type: "Dormer Conversion",
      range: "€30,000 - €50,000",
      includes: ["Dormer structure", "Maximum floor space", "Full room fit-out"],
      timeline: "5-7 weeks",
    },
  ],
  costFactors: {
    headline: "What Affects the Cost?",
    factors: [
      {
        factor: "Roof Type",
        explanation: "Hipped roofs need more work than gable roofs. Dormers add significant cost.",
      },
      {
        factor: "Size & Layout",
        explanation: "Larger attics and complex layouts take more time and materials.",
      },
      {
        factor: "Access",
        explanation: "Where the stairs go affects structural work. Some locations are simpler than others.",
      },
      {
        factor: "Finish Level",
        explanation: "Basic functional vs premium finishes. We work to your budget.",
      },
      {
        factor: "Existing Conditions",
        explanation: "Old roofs, water tanks to relocate, or electrical upgrades add to the work.",
      },
    ],
  },
  timelineFactors: {
    headline: "What Affects the Timeline?",
    factors: [
      "Planning permission (if needed, adds 8-12 weeks)",
      "Dormer construction (adds 1-2 weeks)",
      "En-suite plumbing (adds 3-5 days)",
      "Complex stair locations",
      "Weather (for external work)",
    ],
  },
  cta: { label: "Get Your Exact Quote", href: "/contact" },
};

export const journeySteps = [
  {
    id: "suitability",
    number: 1,
    title: "Is Your Attic Suitable?",
    intro: "Let's start with the basics. Your attic's height and roof type determine what's possible.",
    question: "How high is your attic at its highest point?",
    options: [
      { id: "high", label: "2.4m or more", description: "Excellent headroom" },
      { id: "medium", label: "2.2m - 2.4m", description: "Workable headroom" },
      { id: "low", label: "Under 2.2m", description: "Limited without dormer" },
      { id: "unsure", label: "I'm not sure", description: "We can help measure" },
    ],
    truthBlock: "You need at least 2.2m from joist top to ridge. This is measured in the centre of your attic, at the highest point.",
    whatThisMeans: {
      high: "Great news—you have excellent headroom for a comfortable conversion with plenty of standing room throughout.",
      medium: "Good news—this is workable. You'll have comfortable headroom in the centre, sloping at the edges.",
      low: "A standard conversion may feel cramped, but a dormer can add the height you need. It requires planning permission but opens up possibilities.",
      unsure: "No problem—we can assess this during a free survey, or you can send us photos and we'll give you an estimate.",
    },
  },
  {
    id: "roof-type",
    number: 2,
    title: "What's Your Roof Shape?",
    intro: "Your roof shape affects both the usable floor area and the solutions we might recommend.",
    question: "Which best describes your roof?",
    options: [
      { id: "gable", label: "Gable (pointed ends)", description: "Vertical walls at each end" },
      { id: "hipped", label: "Hipped (all sides slope)", description: "No vertical end walls" },
      { id: "half-hipped", label: "Half-hipped", description: "Mix of both styles" },
      { id: "unsure", label: "I'm not sure", description: "We can identify this for you" },
    ],
    truthBlock: "Gable roofs are simplest to convert. Hipped roofs reduce floor space but we have proven solutions including Dutch hips and side dormers.",
    whatThisMeans: {
      gable: "Ideal for conversion. You'll get maximum floor space and the work is straightforward.",
      hipped: "The sloping ends reduce your usable area, but solutions like Dutch hip conversions or side dormers can recover that space.",
      "half-hipped": "A good balance—you'll have decent floor space with some options for expansion if needed.",
      unsure: "We'll identify this during our survey. It's easy to tell from looking at your house from outside.",
    },
  },
  {
    id: "intended-use",
    number: 3,
    title: "What Will You Use It For?",
    intro: "Understanding your intended use helps us recommend the right approach and features.",
    question: "What's the primary purpose of your new space?",
    options: [
      { id: "office", label: "Home Office", description: "Quiet workspace" },
      { id: "bedroom-child", label: "Child's Bedroom", description: "Playroom or bedroom" },
      { id: "bedroom-adult", label: "Master Bedroom", description: "Main bedroom, possibly with en-suite" },
      { id: "guest", label: "Guest Room", description: "Occasional use for visitors" },
      { id: "multipurpose", label: "Multi-purpose", description: "Flexible space for various uses" },
    ],
    truthBlock: "Different uses have different requirements. An en-suite adds plumbing complexity. A children's room needs fire-safe access. A home office might need dedicated electrical circuits.",
    whatThisMeans: {
      office: "A home office benefits from good natural light, proper electrical planning for equipment, and possibly sound insulation.",
      "bedroom-child": "Fire safety is crucial—we ensure safe escape routes. Consider built-in storage and durable finishes.",
      "bedroom-adult": "Often combined with an en-suite. We'll plan the layout to maximise comfort and privacy.",
      guest: "A flexible space that can double as an office or playroom when not hosting visitors.",
      multipurpose: "We'll design with flexibility in mind—multiple power points, versatile lighting, open layout.",
    },
  },
  {
    id: "constraints",
    number: 4,
    title: "Access & Constraints",
    intro: "Where the stairs go is often the trickiest part. Let's understand your situation.",
    question: "Where could the stairs to your attic go?",
    options: [
      { id: "landing", label: "From the landing", description: "Above existing stairs" },
      { id: "bedroom", label: "Through a bedroom", description: "Requires some bedroom space" },
      { id: "corridor", label: "New corridor needed", description: "For hipped roof access" },
      { id: "unsure", label: "I'm not sure", description: "We'll find the best solution" },
    ],
    truthBlock: "The stair position affects your upstairs layout. From the landing is ideal but not always possible. Taking space from a bedroom is common and works well.",
    whatThisMeans: {
      landing: "The simplest solution if there's room above your existing stairs. Minimal disruption to bedrooms.",
      bedroom: "We'll lose about 1m x 2m from a bedroom for the stairwell. We can add built-in storage around it to minimise the impact.",
      corridor: "Common with hipped roofs where the stairs can't go straight up. We create a small corridor to reach the conversion.",
      unsure: "This is one of the main things we assess during our survey. We'll find the best solution for your layout.",
    },
  },
  {
    id: "next-steps",
    number: 5,
    title: "Your Next Steps",
    intro: "Based on your answers, here's what we recommend.",
    summaryIntro: "Here's a summary of your attic conversion profile:",
    nextStepsOptions: [
      {
        scenario: "ready",
        title: "Ready for a Survey",
        description: "Your attic sounds like a good candidate for conversion. The next step is a free, no-obligation survey.",
        action: "Book a Free Survey",
      },
      {
        scenario: "questions",
        title: "Some Questions to Discuss",
        description: "There are a few things we'd like to discuss with you before recommending the best approach.",
        action: "Schedule a Call",
      },
      {
        scenario: "challenging",
        title: "Needs Expert Assessment",
        description: "Your situation may need some creative solutions. Our experts can assess the possibilities.",
        action: "Request Expert Assessment",
      },
    ],
    whatToExpect: [
      "We'll call to arrange a convenient time",
      "The survey takes about an hour",
      "You'll get a detailed quote within a week",
      "No obligation—no pressure",
    ],
  },
];

export const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    questions: [
      {
        question: "How do I know if my attic can be converted?",
        answer: "The two main factors are ceiling height (at least 2.2m from joist top to ridge) and roof type. We offer a free survey to assess your specific situation and give you honest advice.",
        popular: true,
      },
      {
        question: "What's the first step?",
        answer: "Simply contact us for a free, no-obligation survey. We'll visit your home, take measurements, discuss your needs, and explain your options. There's no pressure to proceed.",
        popular: true,
      },
      {
        question: "How long does the whole process take?",
        answer: "From survey to completion, most conversions take 4-8 weeks depending on complexity. Planning permission (if needed) adds 8-12 weeks to the front of that timeline.",
        popular: true,
      },
    ],
  },
  {
    id: "costs",
    title: "Costs & Quotes",
    questions: [
      {
        question: "How much does an attic conversion cost?",
        answer: "Standard conversions typically range from €15,000-€25,000. Adding an en-suite brings it to €22,000-€35,000. Dormers range from €30,000-€50,000. We provide exact quotes after surveying your property.",
        popular: true,
      },
      {
        question: "What's included in your quote?",
        answer: "Everything needed for a complete, certified conversion: structural work, insulation, electrics, stairs, windows, plastering, and all finishes. We'll clearly list what's included and any optional extras.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "We typically take a deposit to secure your booking, with the balance due on completion. We can discuss payment staging for larger projects.",
      },
    ],
  },
  {
    id: "planning",
    title: "Planning Permission",
    questions: [
      {
        question: "Do I need planning permission?",
        answer: "Most standard attic conversions with Velux windows don't need planning permission. Dormers usually do. We'll tell you exactly what applies to your situation during the survey.",
        popular: true,
      },
      {
        question: "What if my dormer needs planning permission?",
        answer: "We handle the entire planning application process for you. It typically takes 8-12 weeks. We have a high success rate and know exactly what planners look for.",
      },
      {
        question: "Are there restrictions on what I can build?",
        answer: "Yes—there are limits on the size of dormers, their position on the roof, and materials used. In some areas (conservation zones, etc.) there are additional restrictions. We'll explain all of this during your survey.",
      },
    ],
  },
  {
    id: "building-regs",
    title: "Building Regulations",
    questions: [
      {
        question: "What building regulations apply?",
        answer: "Attic conversions must meet regulations for structural safety, fire safety, insulation, ventilation, and stairs. We ensure full compliance and provide all necessary certification.",
        popular: true,
      },
      {
        question: "What about fire safety for a 3-storey house?",
        answer: "When your conversion makes your house 3 storeys, additional fire safety measures are required: fire doors, protected escape route, smoke alarms, and sometimes a mains-powered alarm system. We handle all of this.",
      },
      {
        question: "What's a Certificate of Compliance?",
        answer: "It's an official document confirming your conversion meets building regulations. You'll need this when selling or remortgaging your home. We provide this as standard.",
        popular: true,
      },
    ],
  },
  {
    id: "practical",
    title: "Practical Questions",
    questions: [
      {
        question: "Can we stay in the house during the work?",
        answer: "Yes, most families stay at home throughout the build. We work cleanly, access from outside where possible, and minimise disruption to your daily life.",
        popular: true,
      },
      {
        question: "What happens to our water tank?",
        answer: "If your water tank is in the attic, we'll relocate it. This might mean moving it to a smaller space, or upgrading to a pressurised hot water system (which actually improves your water pressure).",
      },
      {
        question: "What about our TV aerial and satellite dish?",
        answer: "We'll relocate these as needed. If the work affects signal cables, we'll run new ones. This is all included in your quote.",
      },
      {
        question: "How will the attic be heated?",
        answer: "We can extend your existing central heating with new radiators, or install electric heating. We'll discuss the pros and cons of each during the survey.",
      },
    ],
  },
  {
    id: "special-cases",
    title: "Special Situations",
    questions: [
      {
        question: "Can you convert a timber frame house?",
        answer: "Yes, but it requires a structural engineer inspection and special certification. We have extensive experience with timber frame properties and handle the additional requirements.",
      },
      {
        question: "What if my roof is very old or has slates?",
        answer: "Older roofs can be converted, but may need additional work. Original slates are often valuable and we preserve them where possible. We'll assess the condition during our survey.",
      },
      {
        question: "We have a hipped roof—can it still be converted?",
        answer: "Yes. Hipped roofs are more challenging but we have proven solutions including Dutch hip conversions and side dormers that can maximize your usable space.",
      },
    ],
  },
];

export const popularQuestions = faqCategories
  .flatMap(cat => cat.questions)
  .filter(q => q.popular);

export const testimonials = [
  {
    quote: "They transformed our cramped attic into a beautiful master bedroom with en-suite. The attention to detail was exceptional, and they kept us informed throughout. Couldn't be happier.",
    author: "Sarah & Michael",
    location: "Blackrock, Dublin",
    project: "Master Bedroom with En-Suite",
  },
  {
    quote: "Professional from start to finish. They managed the planning permission, kept to the timeline, and the quality of work was outstanding. Our home office is now the best room in the house.",
    author: "David O'Brien",
    location: "Malahide, Dublin",
    project: "Home Office Conversion",
  },
  {
    quote: "We were nervous about the disruption but they were incredibly considerate. The kids hardly noticed! Now we have two extra bedrooms and the value of our home has increased significantly.",
    author: "The Murphy Family",
    location: "Stillorgan, Dublin",
    project: "Two-Bedroom Conversion",
  },
  {
    quote: "Third-generation family business and it shows in their workmanship. They solved a tricky hipped roof situation with a Dutch hip conversion. Creative, skilled, trustworthy.",
    author: "Catherine Walsh",
    location: "Clontarf, Dublin",
    project: "Dutch Hip Conversion",
  },
];

export const trustBadges = [
  { label: "30+ Years Experience", icon: "clock" },
  { label: "1000+ Conversions", icon: "home" },
  { label: "Family Run Since 1995", icon: "users" },
  { label: "Fully Insured", icon: "shield" },
  { label: "Building Regs Certified", icon: "check-circle" },
  { label: "Free No-Obligation Quotes", icon: "file-text" },
];

export const contact = {
  headline: "Get In Touch",
  subheadline: "Ready to explore your attic's potential? We'd love to hear from you.",
  phone: "01 XXX XXXX",
  email: "info@dublinatticconversions.ie",
  address: "Dublin, Ireland",
  hours: "Monday - Friday: 8am - 6pm, Saturday: 9am - 1pm",
  formIntro: "Fill in the form below and we'll get back to you within 24 hours.",
  formFields: {
    name: "Your Name",
    email: "Email Address",
    phone: "Phone Number",
    address: "Property Address",
    message: "Tell us about your project",
  },
  submitButton: "Send Message",
  afterSubmit: "Thank you! We'll be in touch within 24 hours.",
};

export const footer = {
  tagline: "Dublin's trusted family-run attic conversion specialists since 1995.",
  links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  copyright: "© 2025 Dublin Attic Conversions. All rights reserved.",
};
