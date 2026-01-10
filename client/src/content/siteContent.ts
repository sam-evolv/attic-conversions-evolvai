export const navigation = {
  logo: "Attic Conversions",
  tagline: "Family-Run Since 1995",
  items: [
    { label: "Home", href: "/" },
    { label: "Attic Journey", href: "/attic-journey" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Get a Quote", href: "/contact" },
};

export const companyInfo = {
  phone: "086 317 5893",
  email: "info@atticconversions.ie",
  address: "Howth, Co. Dublin",
  hours: "Monday - Friday: 8am - 6pm, Saturday: 9am - 1pm",
  availability: "Available Anytime",
  facebook: "https://facebook.com/atticconversions",
  linkedin: "https://linkedin.com/company/atticconversions",
  trustedPeople: "https://www.trustedpeople.ie",
};

export const hero = {
  headline: "Transform Your Attic Into Beautiful, Functional Space",
  subheadline: "Family-run specialists with 30+ years' experience delivering certified attic conversions across Dublin.",
  primaryCta: { label: "Get a Quote", href: "/contact" },
  secondaryCta: { label: "Start Attic Journey", href: "/attic-journey" },
  trustBadges: [
    "Family-Run Since 1995",
    "Fully Insured",
    "Certified Compliance",
    "Dublin Specialists",
  ],
};

export const homeIntro = {
  headline: "Not Sure Where to Start?",
  description: "Converting an attic can feel overwhelming. We've helped over 1,000 Dublin homeowners navigate the process. Our interactive guide walks you through everything—from checking if your attic is suitable to exploring your options.",
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
  ],
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
        "Talk through your options",
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
    },
  ],
  cta: { label: "Book Your Free Survey", href: "/contact" },
};

export const journeySteps = [
  {
    id: "suitability",
    number: 1,
    title: "Check Your Attic Height",
    keyFact: "You need at least 2.2m from the top of your ceiling joists to the ridge beam for a standard conversion.",
    question: "How high is your attic at its highest point?",
    options: [
      { id: "high", label: "2.4m or more", description: "Excellent headroom" },
      { id: "medium", label: "2.2m - 2.4m", description: "Workable headroom" },
      { id: "low", label: "Under 2.2m", description: "Limited without dormer" },
      { id: "unsure", label: "I'm not sure", description: "We can help measure" },
    ],
    moreDetails: "Measure from the top of your floor joists (not any boards) straight up to the ridge, standing in the centre of your attic. If you have loose insulation, push it aside to find the joist top.",
    whatThisMeans: {
      high: "Excellent—you'll have comfortable standing room throughout most of the conversion.",
      medium: "Good—this is workable. You'll have good headroom in the centre, sloping at the edges.",
      low: "A standard conversion may feel cramped, but a dormer can add the height you need (requires planning permission).",
      unsure: "No problem—we can measure during a free survey, or send us photos for a quick estimate.",
    },
  },
  {
    id: "roof-type",
    number: 2,
    title: "Identify Your Roof Type",
    keyFact: "Gable roofs are simplest to convert. Hipped roofs need creative solutions but are definitely doable.",
    question: "Which best describes your roof?",
    options: [
      { id: "gable", label: "Gable (pointed ends)", description: "Vertical walls at each end" },
      { id: "hipped", label: "Hipped (all sides slope)", description: "No vertical end walls" },
      { id: "half-hipped", label: "Half-hipped", description: "Mix of both styles" },
      { id: "unsure", label: "I'm not sure", description: "We can identify this" },
    ],
    moreDetails: "Look at your house from outside. Gable roofs have a triangular end wall; hipped roofs slope on all four sides; half-hipped have a small slope at the top of the triangular wall.",
    whatThisMeans: {
      gable: "Ideal for conversion. Maximum floor space with straightforward construction.",
      hipped: "The sloping ends reduce your usable area, but Dutch hip or side dormer solutions can recover that space.",
      "half-hipped": "A good balance—decent floor space with some options for expansion if needed.",
      unsure: "We'll identify this during our survey. It's easy to tell from the outside.",
    },
  },
  {
    id: "intended-use",
    number: 3,
    title: "Plan Your Space",
    keyFact: "Different uses have different requirements—an en-suite adds plumbing; a child's room needs fire-safe access.",
    question: "What will you use your new space for?",
    options: [
      { id: "office", label: "Home Office", description: "Quiet workspace" },
      { id: "bedroom-child", label: "Child's Bedroom", description: "Playroom or bedroom" },
      { id: "bedroom-adult", label: "Master Bedroom", description: "With or without en-suite" },
      { id: "guest", label: "Guest Room", description: "Occasional use" },
      { id: "multipurpose", label: "Multi-purpose", description: "Flexible space" },
    ],
    moreDetails: "Consider how you'll use the space day-to-day. A home office might need dedicated electrical circuits; a bedroom suite benefits from an en-suite bathroom; children's rooms need proper fire escape routes.",
    whatThisMeans: {
      office: "Good natural light, proper electrical planning for equipment, and possibly sound insulation.",
      "bedroom-child": "Fire safety is crucial—we ensure safe escape routes. Consider built-in storage.",
      "bedroom-adult": "Often combined with an en-suite. We'll plan the layout to maximise comfort.",
      guest: "A flexible space that can double as an office or playroom when not hosting.",
      multipurpose: "We'll design with flexibility—multiple power points, versatile lighting, open layout.",
    },
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
      },
      {
        question: "What's the first step?",
        answer: "Simply contact us for a free, no-obligation survey. We'll visit your home, take measurements, discuss your needs, and explain your options. There's no pressure to proceed.",
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
      },
      {
        question: "What if my dormer needs planning permission?",
        answer: "We handle the entire planning application process for you. We have a high success rate and know exactly what planners look for.",
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
      },
      {
        question: "What's a Certificate of Compliance?",
        answer: "It's an official document confirming your conversion meets building regulations. You'll need this when selling or remortgaging your home. We provide this as standard.",
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
      },
      {
        question: "What happens to our water tank?",
        answer: "If your water tank is in the attic, we'll relocate it. This might mean moving it to a smaller space, or upgrading to a pressurised hot water system.",
      },
      {
        question: "How will the attic be heated?",
        answer: "We can extend your existing central heating with new radiators, or install electric heating. We'll discuss the pros and cons during the survey.",
      },
    ],
  },
];

export const popularQuestions = faqCategories
  .flatMap(cat => cat.questions)
  .slice(0, 4);

export const testimonials = [
  {
    quote: "Your team was one of the most professional group of people we have seen so far. The pace and quality of work was so well managed.",
    author: "Ruby & Vijay",
    location: "Lucan",
  },
  {
    quote: "Jenny and I were extremely happy with the level of professional shown by your team and we are delighted with the results.",
    author: "Peter Burke",
    location: "Swords",
  },
  {
    quote: "The attic conversion was fantastic, and I must thank Martin and his team for their excellent work.",
    author: "Tom Kiely",
    location: "Dundrum",
  },
  {
    quote: "Everyone we have shown off our attic to are amazed with the high standard of finish and layout.",
    author: "Marie & Damien Baxter",
    location: "Sandyford",
  },
  {
    quote: "Everything went well for us and we are really pleased with the attic.",
    author: "Margaret O'Connor",
    location: "Ranelagh",
  },
  {
    quote: "We were delighted with the professionalism of the builders who completed the attic in a clean and timely manner.",
    author: "Mark",
    location: "Seagrange, Baldoyle",
  },
  {
    quote: "Definitely whenever anyone asks about attic conversions I always mention you guys and would have no problem recommending you.",
    author: "Damien",
    location: "Riverwood, Dublin 15",
  },
  {
    quote: "Once again, many thanks for your professionalism and the courtesy of your team throughout the project.",
    author: "Robert McConkey",
    location: "Goatstown",
  },
  {
    quote: "From initial consultation, to planning, build and certification it was a smooth and stress-free experience.",
    author: "Hilary Woods",
    location: "Dublin",
  },
  {
    quote: "Thank you so much for my wonderful attic conversion. It has transformed my house and will be such a useful addition to my home.",
    author: "Jackie Ruddock",
    location: "Merrion Park",
  },
  {
    quote: "We cannot believe the space we got in the attic! We would strongly recommend CHI Attics for a high quality attic conversion.",
    author: "Fiona Drumm",
    location: "Dublin",
  },
  {
    quote: "Positive, Professionalism, Quality, Responsiveness. Everything went to schedule, and the quality of the work is solid.",
    author: "Cian Cullinan",
    location: "Dublin",
  },
];

export const trustBadges = [
  { label: "Family-Run Since 1995", icon: "users" },
  { label: "1000+ Conversions", icon: "home" },
  { label: "Fully Insured", icon: "shield" },
  { label: "Building Regs Certified", icon: "check-circle" },
  { label: "Free No-Obligation Quotes", icon: "file-text" },
  { label: "Dublin Specialists", icon: "map-pin" },
];

export const contact = {
  headline: "Get In Touch",
  subheadline: "Ready to explore your attic's potential? We'd love to hear from you.",
  phone: "086 317 5893",
  email: "info@atticconversions.ie",
  address: "Howth, Co. Dublin",
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
  copyright: "© 2026 Attic Conversions. All rights reserved.",
};
