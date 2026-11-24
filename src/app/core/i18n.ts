/* ============================================================
   Veloura — UI string dictionary (English + Arabic)
   Arabic is written to read naturally, not literally.
   ============================================================ */

export type Lang = 'en' | 'ar';
export type HtmlLocale = 'en-AE' | 'ar-AE';
export type OpenGraphLocale = 'en_AE' | 'ar_AE';

export interface Localized {
  en: string;
  ar: string;
}

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ar', label: 'العربية', short: 'AR' },
];

export function htmlLocale(lang: Lang): HtmlLocale {
  return lang === 'ar' ? 'ar-AE' : 'en-AE';
}

export function openGraphLocale(lang: Lang): OpenGraphLocale {
  return lang === 'ar' ? 'ar_AE' : 'en_AE';
}

type Dict = typeof UI_EN;

const UI_EN = {
  brand: {
    name: 'Veloura',
    tagline: 'Digital Products · Engineering · Creative',
  },
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    work: 'Work',
    industries: 'Industries',
    locations: 'Locations',
    blog: 'Blog',
    contact: 'Contact',
    cta: 'Request an Audit',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryNav: 'Primary',
  },
  controls: {
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    language: 'Change language',
  },
  common: {
    exploreServices: 'Explore Services',
    contactUs: 'Contact Us',
    viewAllServices: 'View All Services',
    viewAllIndustries: 'View All Industries',
    viewAllLocations: 'View All Locations',
    startProject: 'Start a Project',
    requestAudit: 'Request a Strategic Audit',
    discussBrand: 'Discuss Your Brand',
    buildGrowthSystem: 'Build Your Growth System',
    customScope: 'Discuss a Custom Scope',
    learnMore: 'Learn more',
    readArticle: 'Read article',
    backToBlog: 'Back to Blog',
    minRead: 'min read',
    getInTouch: 'Get in touch',
  },
  home: {
    metaTitle: "Digital Product Design & Web Engineering Studio | Veloura",
    metaDesc:
      "Veloura designs and builds premium websites, digital products, business dashboards, and connected workflows for GCC and international companies.",
    heroTitle: "Beautifully designed. Seriously engineered.",
    heroSubtitle:
      "We design exceptional digital experiences and build the technology behind them. From distinctive websites to connected business platforms, Veloura brings creative thinking and engineering precision together.",
    scrollHint: 'Scroll to explore',
    heroStat1: "Product thinking, end to end",
    heroStat2: "Designed for EN & AR",
    heroStat3: "Built around real operations",
    portfolioEyebrow: 'Selected work',
    portfolioTitle: 'Proof in the work, not just the pitch.',
    portfolioSubtitle: 'Digital experiences and organizations across healthcare, education, and community. Explore the projects and the people they serve.',
    portfolioVisit: 'Explore project',
    portfolioNayType: 'Digital health · Therapy',
    portfolioNayDesc: 'A bilingual mental wellness platform bringing services, therapist discovery, and digital care together.',
    portfolioSukkarType: 'Health education · Arabic-first',
    portfolioSukkarDesc: 'An Arabic diabetes education initiative focused on accessible information and practical learning tools.',
    portfolioAlmaType: 'Community · Nonprofit',
    portfolioAlmaDesc: 'A multilingual mental health support initiative combining digital presence and community outreach.',
    servicesEyebrow: "What we design & engineer",
    servicesTitle: "From the interface to the infrastructure.",
    servicesSubtitle:
      "Web platforms and dashboards. Custom websites. UX and product design. Connected workflows. Brand systems and launch-ready digital experiences.",
    processEyebrow: "How we work",
    processTitle: "Good design meets disciplined execution.",
    processSubtitle:
      "Understand the problem. Shape the experience. Engineer the solution. Connect it to the business. Test what actually runs.",
    valueEyebrow: "The Veloura difference",
    valueTitle: "Technology with taste. Design with a purpose.",
    valueSubtitle:
      "We combine product thinking, frontend engineering, and brand clarity so every touchpoint looks considered and actually works.",
    ctaTitle: "Have a digital product worth building?",
    ctaSubtitle:
      "Tell us what your business needs to do. We’ll map the experience, define a practical scope, and build the right solution.",
    modelEyebrow: "Our standards",
    modelTitle: "Working systems over impressive promises.",
    modelSubtitle:
      "The goal is not another attractive presentation. It is an intuitive, maintainable digital experience that connects to your real operations and supports growth.",
    modelLine:
      "Beautiful interfaces matter. What happens after the click matters more.",
    modelDontTitle: "What we will not ship",
    modelDoTitle: "What we build instead",
    industriesEyebrow: "Built for complex realities",
    industriesTitle: "Technology shaped around your business.",
    industriesSubtitle:
      "Every industry has different people, decisions, and workflows. We design digital products around those differences rather than forcing one template onto everyone.",
    gulfEyebrow: "GCC-focused · globally connected",
    gulfTitle: "A technology partner that works across borders.",
    gulfBody:
      "We collaborate with teams across the GCC and beyond through bilingual workshops, transparent delivery, clear handoffs, and shared project workspaces.",
    systemEyebrow: "Connected by design",
    systemTitle: "Not just a website. A working ecosystem.",
    systemBody:
      "We connect interfaces, content, customer journeys, internal tools, and practical automation so your digital presence works with the people running the business.",
    faqEyebrow: 'Questions & answers',
    faqTitle: 'Clear answers, before you ask.',
    faqSubtitle:
      'The essentials on how Veloura scopes, prices, and delivers — for businesses deciding whether we are the right fit.',
    faqMore: 'See all FAQs',
  },
  trust: {
    eyebrow: 'The Veloura standard',
  },
  about: {
    metaTitle: 'About Veloura | Boutique Digital Growth Studio',
    metaDesc:
      'Meet Veloura, a boutique digital growth studio helping GCC and international businesses build sharper brands, websites, landing pages, and content systems.',
    heroEyebrow: "About the studio",
    heroTitle: "A design-led technology studio with a creative edge.",
    heroSubtitle:
      "We bring product thinking, UI/UX, frontend engineering, brand identity, and digital operations together to build experiences that look exceptional and work in the real world.",
    whoTitle: 'Who we are',
    whoBody1:
      "Veloura is a design-led digital technology and creative studio working with GCC and international businesses on websites, product interfaces, operational tools, and brand experiences.",
    whoBody2:
      "Our strength is connecting the visual craft with the technical work: clear product thinking, purposeful interfaces, frontend development, useful integrations, and coherent brand systems.",
    believeTitle: 'What we believe',
    believeBody1:
      'We believe good marketing is quiet confidence. It does not shout; it earns attention through clarity, taste, and consistency.',
    believeBody2:
      'We believe design and performance are not opposites. The most elegant work is also the most effective — because clarity converts.',
    workTitle: 'How we work',
    workBody1:
      'We work in deliberate stages: understand the business, position the brand, design the experience, build the right assets, then improve from practical feedback.',
    workBody2:
      'Every engagement is senior-led and tightly scoped. You work directly with the people doing the work — no layers, no noise.',
    whyTitle: 'Why Veloura',
    whyBody1:
      'Most businesses struggle to find work that is both visually refined and commercially clear. Veloura is built for that middle ground.',
    whyBody2:
      'Veloura is bilingual by design — fluent in English and Arabic markets — so your brand reads naturally to every audience it serves.',
    valuesTitle: 'What guides us',
    value1Title: 'Clarity over noise',
    value1Body: 'We remove the unnecessary so the essential can perform.',
    value2Title: 'Taste with intent',
    value2Body: 'Every creative decision serves the brand and the result.',
    value3Title: 'Practical growth',
    value3Body: 'We focus on assets that help people understand, trust, and contact the business.',
    value4Title: 'Senior, always',
    value4Body: 'You work directly with the people doing the work.',
    positioningStatement:
      'Veloura builds brands that look premium, communicate clearly, attract the right audience, and convert attention into real business results.',
    visionTitle: 'The vision',
    visionBody:
      'A premium boutique studio that builds focused digital systems for serious businesses — not everything, just the pieces that matter most: brand identity, message, UI/UX, website, landing pages, campaign creative, content direction, basic SEO, and business communication.',
    teamEyebrow: 'The team',
    teamTitle: 'A senior team, organized by discipline.',
    teamSubtitle:
      'Strategy, brand, UI/UX, web, content, creative, and digital operations — under one roof, with one standard. You work directly with the people doing the work.',
  },
  services: {
    metaTitle: "Web Development, UX & Digital Systems | Veloura",
    metaDesc:
      "Explore Veloura's web applications, frontend development, UI/UX, dashboard, automation, brand design, and connected digital experience services.",
    heroEyebrow: "Capabilities / What we build",
    heroTitle: "Beautiful interfaces. Capable systems. One connected approach.",
    heroSubtitle:
      "From web applications and dashboards to product interfaces, websites, automation, and visual identity—we bring design and practical engineering together. Every engagement starts with the actual business problem.",
    ctaTitle: "Let’s design what your business actually needs.",
    ctaSubtitle:
      "Tell us the workflow, the audience, or the idea. We’ll translate it into a clear, achievable scope.",
  },
  industries: {
    metaTitle: 'Industries Served by Veloura | Digital Growth by Industry',
    metaDesc:
      'Explore the industries Veloura supports with tailored branding, websites, landing pages, campaign creative, content systems, SEO, and business communication.',
    heroEyebrow: 'Industries',
    heroTitle: 'Different businesses need different growth systems.',
    heroSubtitle:
      'Veloura adapts brand, web, landing page, content, campaign creative, basic SEO, and business communication work to the trust signals and decision journey of each sector.',
  },
  locations: {
    metaTitle: 'GCC Locations Served by Veloura | Remote Digital Growth Studio',
    metaDesc:
      'Explore the GCC markets Veloura serves remotely with bilingual branding, UI/UX, websites, landing pages, campaign creative, SEO, and business communication.',
    heroEyebrow: 'Locations',
    heroTitle: 'Remote-first digital growth for Gulf and international businesses.',
    heroSubtitle:
      'We are built for remote execution across the Gulf and beyond, with structured project management, bilingual communication, and polished delivery.',
  },
  blog: {
    metaTitle: 'Digital Growth, Branding & Web Design Blog | Veloura',
    metaDesc:
      'Read practical ideas on branding, UI/UX, websites, landing pages, content systems, campaign creative, SEO, and digital growth for ambitious GCC businesses.',
    heroEyebrow: 'Journal',
    heroTitle: 'Ideas on brand, growth, and craft.',
    heroSubtitle:
      'Practical perspectives on building brands that look premium and perform in the market.',
    allCategory: 'All',
    featured: 'Featured',
    relatedTitle: 'Keep reading',
    emptyState: 'No articles in this category yet.',
  },
  contact: {
    metaTitle: 'Contact Veloura | Start a Digital Growth Project',
    metaDesc:
      'Contact Veloura to discuss branding, UI/UX, websites, landing pages, campaign creatives, content strategy, AI video, basic SEO, and business communication.',
    heroEyebrow: 'Start a project',
    heroTitle: 'Start with diagnosis, then build the right scope.',
    heroSubtitle:
      "Tell us what you want to improve. We'll study the brand, market, offer, website, content, and customer journey before recommending the work.",
    infoTitle: 'Prefer to reach out directly?',
    infoBody:
      'We reply to every serious enquiry within one business day.',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    whatsappCta: 'Message us on WhatsApp',
    locationLabel: 'Service model',
    locationValue: 'Remote across the Gulf and beyond',
    hoursLabel: 'Response time',
    hoursValue: 'Within one business day',
    formTitle: 'Request a strategic audit',
    nameLabel: 'Full name',
    namePlaceholder: 'Your name',
    emailFieldLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    phoneLabel: 'Phone / WhatsApp',
    phonePlaceholder: 'Your preferred phone number',
    companyLabel: 'Company name',
    companyPlaceholder: 'Your company',
    countryLabel: 'Country / market',
    countryPlaceholder: 'Select a market',
    industryLabel: 'Industry',
    industryPlaceholder: 'Select an industry',
    websiteLabel: 'Website or Instagram link',
    websitePlaceholder: 'https:// or @brand',
    improvementLabel: 'What do you want to improve?',
    improvementPlaceholder: 'Brand perception, website conversion, landing page clarity, campaign creative, content direction, basic SEO…',
    serviceLabel: 'Service interested in',
    servicePlaceholder: 'Select a service',
    budgetLabel: 'Budget range',
    budgetPlaceholder: 'Select a range',
    timelineLabel: 'Timeline',
    timelinePlaceholder: 'Select a timeline',
    preferredLanguageLabel: 'Preferred language',
    preferredLanguagePlaceholder: 'Select a language',
    contactMethodLabel: 'Preferred contact method',
    contactMethodPlaceholder: 'Select a method',
    messageLabel: 'Message',
    messagePlaceholder: 'Add any context that would help us understand the business, market, and current digital presence…',
    optional: 'optional',
    submit: 'Request audit',
    sending: 'Sending...',
    successTitle: 'Thank you.',
    successBody:
      'We received your request and will reply within one business day.',
    submitError: 'Something went wrong. Please email us directly at connect@veloura-marketing.com.',
    sendAnother: 'Send another enquiry',
    errName: 'Please enter your name.',
    errEmail: 'Please enter a valid email address.',
    errCountry: 'Please choose a market.',
    errIndustry: 'Please choose an industry.',
    errImprovement: 'Please tell us what you want to improve.',
    errService: 'Please choose at least one service.',
    errMessage: 'Please tell us a little about the business.',
  },
  footer: {
    description:
      'A boutique digital growth studio — design, web, and communication systems for brands ready to grow.',
    quickLinks: 'Navigate',
    exploreCol: 'Explore',
    modelLink: 'Model',
    servicesCol: 'Services',
    contactCol: 'Get in touch',
    followCol: 'Follow',
    remoteNote: 'Remote-first across the GCC and beyond.',
    rights: '© 2026 Veloura. All rights reserved.',
    builtLine: 'Designed & built with intent.',
    backToTop: 'Back to top',
    legalLinks: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    faqs: 'FAQs',
  },
};

const UI_AR: Dict = {
  brand: {
    name: 'فيلورا',
    tagline: 'تصميم رقمي · تطوير تقني · إبداع',
  },
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    work: 'أعمالنا',
    industries: 'القطاعات',
    locations: 'الأسواق',
    blog: 'المدونة',
    contact: 'تواصل معنا',
    cta: 'اطلب تدقيقاً',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    primaryNav: 'التنقل الرئيسي',
  },
  controls: {
    toLight: 'التبديل إلى الوضع الفاتح',
    toDark: 'التبديل إلى الوضع الداكن',
    language: 'تغيير اللغة',
  },
  common: {
    exploreServices: 'استكشف الخدمات',
    contactUs: 'تواصل معنا',
    viewAllServices: 'عرض جميع الخدمات',
    viewAllIndustries: 'عرض جميع القطاعات',
    viewAllLocations: 'عرض جميع الأسواق',
    startProject: 'ابدأ مشروعك',
    requestAudit: 'اطلب تدقيقاً استراتيجياً',
    discussBrand: 'ناقش علامتك',
    buildGrowthSystem: 'ابنِ نظام نمو أوضح',
    customScope: 'ناقش نطاق عمل مخصص',
    learnMore: 'اعرف المزيد',
    readArticle: 'اقرأ المقال',
    backToBlog: 'العودة إلى المدونة',
    minRead: 'دقائق قراءة',
    getInTouch: 'تواصل معنا',
  },
  home: {
    metaTitle: "Veloura | تصميم المنتجات الرقمية وتطوير مواقع الأعمال",
    metaDesc:
      "تصمم Veloura مواقع احترافية ومنتجات رقمية ولوحات تحكم وأنظمة عمل مترابطة للشركات في الخليج والعالم، مع اهتمام بالتجربة والأداء.",
    heroTitle: "مصمَّم بإتقان. مُهندَس بجدية.",
    heroSubtitle:
      "نصمم تجارب رقمية استثنائية، ونبني التقنية التي تقف خلفها. من المواقع المميزة إلى المنصات التجارية المترابطة، تجمع Veloura التفكير الإبداعي ودقة الهندسة معاً.",
    scrollHint: 'مرّر للاستكشاف',
    heroStat1: "تفكير متكامل في المنتج",
    heroStat2: "تجارب عربية وإنجليزية",
    heroStat3: "مبنية حول العمل الحقيقي",
    portfolioEyebrow: 'من أعمالنا',
    portfolioTitle: 'أعمال تتحدث عن نفسها.',
    portfolioSubtitle: 'تجارب رقمية ومبادرات في الصحة والتعليم والمجتمع. تعرّف على المشاريع والجهات التي تخدمها.',
    portfolioVisit: 'استكشف المشروع',
    portfolioNayType: 'الصحة الرقمية · العلاج النفسي',
    portfolioNayDesc: 'منصة ثنائية اللغة للصحة النفسية تجمع الخدمات والتعرف على المعالجين والرعاية الرقمية.',
    portfolioSukkarType: 'التثقيف الصحي · محتوى عربي',
    portfolioSukkarDesc: 'مبادرة عربية للتثقيف حول السكري تركز على المعرفة الواضحة وأدوات التعلم العملية.',
    portfolioAlmaType: 'مجتمع · مؤسسة غير ربحية',
    portfolioAlmaDesc: 'مبادرة متعددة اللغات لدعم الصحة النفسية تجمع الحضور الرقمي والتواصل المجتمعي.',
    servicesEyebrow: "ما نصممه ونطوره",
    servicesTitle: "من الواجهة إلى النظام الذي يدعمها.",
    servicesSubtitle:
      "منصات الويب ولوحات التحكم، والمواقع المخصصة، وتصميم تجربة المستخدم، وربط سير العمل، والهوية الرقمية والتجارب الجاهزة للإطلاق.",
    processEyebrow: "كيف نعمل",
    processTitle: "تصميم مدروس وتنفيذ منضبط.",
    processSubtitle:
      "نفهم المشكلة، ونصمم التجربة، ونطوّر الحل، ونربطه بالعمل، ثم نختبر ما يعمل فعلاً.",
    valueEyebrow: "ما يميز فيلورا",
    valueTitle: "تقنية بذوق رفيع، وتصميم له هدف.",
    valueSubtitle:
      "نجمع التفكير في المنتج وتطوير الواجهات ووضوح الهوية حتى تبدو كل نقطة تواصل متقنة وتعمل كما ينبغي.",
    ctaTitle: "لديك منتج رقمي يستحق البناء؟",
    ctaSubtitle:
      "أخبرنا بما يحتاج عملك إلى إنجازه. نحدد التجربة والنطاق المناسب ثم نبني الحل الصحيح.",
    modelEyebrow: "معاييرنا",
    modelTitle: "أنظمة تعمل، لا وعود جميلة.",
    modelSubtitle:
      "الهدف ليس عرضاً جذاباً آخر، بل تجربة رقمية واضحة وقابلة للتطوير وترتبط بعملياتك الحقيقية وتدعم نموك.",
    modelLine:
      "جمال الواجهة مهم، وما يحدث بعد النقر أهم.",
    modelDontTitle: "ما لا نسلّمه",
    modelDoTitle: "ما نبنيه بدلاً منه",
    industriesEyebrow: "مبنية للواقع العملي",
    industriesTitle: "تقنية تناسب طريقة عملك.",
    industriesSubtitle:
      "لكل قطاع مستخدمون وقرارات وسير عمل مختلف. نصمم المنتجات الرقمية حول هذه الاختلافات بدلاً من فرض قالب واحد على الجميع.",
    gulfEyebrow: "للخليج · للعالم",
    gulfTitle: "شريك تقني يعمل معك أينما كنت.",
    gulfBody:
      "نتعاون مع فرق في الخليج وخارجه عبر ورش عمل ثنائية اللغة وتنفيذ واضح وتسليم منظم ومساحات مشتركة لإدارة المشاريع.",
    systemEyebrow: "ترابط مقصود",
    systemTitle: "ليس مجرد موقع، بل منظومة تعمل.",
    systemBody:
      "نربط الواجهات والمحتوى ورحلة العميل والأدوات الداخلية والأتمتة العملية حتى يعمل حضورك الرقمي بانسجام مع فريقك.",
    faqEyebrow: 'أسئلة وأجوبة',
    faqTitle: 'إجابات واضحة قبل أن تسأل.',
    faqSubtitle:
      'الأساسيات حول كيف تشخّص فيلورا وتسعّر وتسلّم — للأعمال التي تقيّم مدى ملاءمتنا لها.',
    faqMore: 'كل الأسئلة الشائعة',
  },
  trust: {
    eyebrow: 'معايير فيلورا',
  },
  about: {
    metaTitle: 'عن Veloura | استوديو نمو رقمي بوتيك',
    metaDesc:
      'Veloura استوديو نمو رقمي بوتيك يساعد الأعمال الخليجية والدولية على بناء هوية أوضح ومواقع مصقولة وصفحات هبوط وإبداع حملات وأنظمة محتوى وتواصل مؤسسي.',
    heroEyebrow: "عن الاستوديو",
    heroTitle: "استوديو تقني يقوده التصميم بروح إبداعية.",
    heroSubtitle:
      "نجمع التفكير في المنتجات وتصميم التجارب وتطوير الواجهات والهوية والعمليات الرقمية لنصنع تجارب استثنائية تعمل في الواقع.",
    whoTitle: 'من نحن',
    whoBody1:
      "Veloura استوديو للتقنية والتصميم والإبداع يعمل مع شركات في الخليج والعالم على المواقع وواجهات المنتجات والأدوات التشغيلية وتجارب العلامة.",
    whoBody2:
      "قوتنا في وصل الإتقان البصري بالتنفيذ التقني: التفكير في المنتج وواجهات واضحة وتطوير الويب وتكاملات عملية وأنظمة هوية متسقة.",
    believeTitle: 'بماذا نؤمن',
    believeBody1:
      'نؤمن أن التسويق الجيد ثقة هادئة؛ لا يصرخ، بل يكسب الانتباه بالوضوح والذوق والثبات.',
    believeBody2:
      'نؤمن أن التصميم والأداء ليسا نقيضين. أجمل الأعمال هي الأكثر فاعلية، لأن الوضوح يحقق النتائج.',
    workTitle: 'كيف نعمل',
    workBody1:
      'نعمل عبر مراحل مدروسة: نفهم العمل، نحدد موقع العلامة، نصمم التجربة، نبني الأصول الصحيحة، ثم نحسن بناءً على ملاحظات عملية.',
    workBody2:
      'كل مشروع يقوده فريق خبير وبنطاق واضح. تتعامل مباشرةً مع من ينفّذ العمل — بلا طبقات وبلا ضجيج.',
    whyTitle: 'لماذا فيلورا',
    whyBody1:
      'تجد معظم الأعمال صعوبة في الحصول على عمل يجمع بين الذوق البصري والوضوح التجاري. Veloura مبنية لهذه المساحة.',
    whyBody2:
      'فيلورا ثنائية اللغة بطبيعتها — تتقن السوقين العربي والإنجليزي — لتقرأ علامتك بشكل طبيعي لكل جمهور تخدمه.',
    valuesTitle: 'ما الذي يوجّهنا',
    value1Title: 'الوضوح قبل الضجيج',
    value1Body: 'نزيل غير الضروري ليؤدي الجوهري دوره.',
    value2Title: 'ذوق بهدف',
    value2Body: 'كل قرار إبداعي يخدم العلامة والنتيجة.',
    value3Title: 'نمو عملي',
    value3Body: 'نركز على أصول تساعد الناس على فهم العمل والثقة به والتواصل معه.',
    value4Title: 'خبرة دائماً',
    value4Body: 'تتعامل مباشرةً مع من ينفّذ العمل.',
    positioningStatement:
      'تبني فيلورا علامات تبدو راقية، تتواصل بوضوح، تجذب الجمهور الصحيح، وتحوّل الانتباه إلى نتائج أعمال حقيقية.',
    visionTitle: 'الرؤية',
    visionBody:
      'استوديو بوتيك راقٍ يبني أنظمة رقمية مركزة للأعمال الجادة — ليس كل شيء، بل القطع الأهم: الهوية، الرسالة، UI/UX، الموقع، صفحات الهبوط، إبداع الحملات، توجيه المحتوى، السيو الأساسي، والتواصل المؤسسي.',
    teamEyebrow: 'الفريق',
    teamTitle: 'فريق خبير، منظَّم حسب التخصص.',
    teamSubtitle:
      'استراتيجية، هوية، UI/UX، ويب، محتوى، إبداع، وعمليات رقمية — تحت سقف واحد وبمعيار واحد. تتعامل مباشرةً مع من ينفّذ العمل.',
  },
  services: {
    metaTitle: "تطوير الويب وتجربة المستخدم والأنظمة الرقمية | Veloura",
    metaDesc:
      "خدمات Veloura تشمل تطوير تطبيقات الويب والواجهات ولوحات التحكم وتصميم تجربة المستخدم والأتمتة والهوية الرقمية وربط الأنظمة.",
    heroEyebrow: "قدراتنا / ما نبنيه",
    heroTitle: "واجهات جميلة، وأنظمة فعالة، وتجربة مترابطة.",
    heroSubtitle:
      "من تطبيقات الويب ولوحات التحكم إلى تصميم المنتجات والمواقع والأتمتة والهوية البصرية، نجمع التصميم مع التنفيذ التقني العملي. يبدأ كل مشروع بفهم التحدي الحقيقي.",
    ctaTitle: "لنصمم ما يحتاجه عملك فعلاً.",
    ctaSubtitle: "أخبرنا عن سير العمل أو الجمهور أو الفكرة، وسنحوّلها إلى نطاق عمل واضح وقابل للتنفيذ.",
  },
  industries: {
    metaTitle: 'القطاعات التي تخدمها Veloura | نمو رقمي حسب القطاع',
    metaDesc:
      'استكشف أنظمة النمو الرقمي من Veloura للعيادات والمطاعم والضيافة والعقار والتجزئة والتعليم والإنشاءات وشركات B2B والخدمات المحلية في الخليج.',
    heroEyebrow: 'القطاعات',
    heroTitle: 'كل عمل يحتاج نظام نمو مختلفاً.',
    heroSubtitle:
      'تكيّف Veloura الهوية والمواقع وصفحات الهبوط والمحتوى وإبداع الحملات والسيو الأساسي والتواصل المؤسسي حسب إشارات الثقة ورحلة القرار في كل قطاع.',
  },
  locations: {
    metaTitle: 'أسواق Veloura الخليجية | استوديو نمو رقمي عن بُعد',
    metaDesc:
      'تخدم Veloura الأعمال الخليجية والدولية عن بُعد عبر الهوية وUI/UX والمواقع وصفحات الهبوط وإبداع الحملات وأنظمة المحتوى والسيو الأساسي والتواصل المؤسسي.',
    heroEyebrow: 'الأسواق',
    heroTitle: 'نمو رقمي عن بُعد للأعمال الخليجية والدولية.',
    heroSubtitle:
      'بنية عمل مصممة للتنفيذ عن بُعد في الخليج وما بعده، بإدارة مشاريع منظمة وتواصل ثنائي اللغة وتسليم مصقول.',
  },
  blog: {
    metaTitle: 'مدونة Veloura | الهوية والمواقع والنمو الرقمي',
    metaDesc:
      'رؤى حول استراتيجية التسويق، الهوية، واجهات الاستخدام، الأداء، ونمو الأعمال من فريق فيلورا.',
    heroEyebrow: 'المدوّنة',
    heroTitle: 'أفكار في الهوية والنمو والإتقان.',
    heroSubtitle:
      'رؤى عملية لبناء علامات تبدو راقية وتؤدّي بقوة في السوق.',
    allCategory: 'الكل',
    featured: 'مميّز',
    relatedTitle: 'تابع القراءة',
    emptyState: 'لا توجد مقالات في هذا التصنيف بعد.',
  },
  contact: {
    metaTitle: 'تواصل مع Veloura | ابدأ مشروع نمو رقمي',
    metaDesc:
      'تواصل مع Veloura لمناقشة الهوية وUI/UX والمواقع وصفحات الهبوط وإبداع الحملات وتوجيه المحتوى وفيديو AI والسيو الأساسي والتواصل المؤسسي.',
    heroEyebrow: 'ابدأ مشروعك',
    heroTitle: 'ابدأ بالتشخيص، ثم ابنِ النطاق الصحيح.',
    heroSubtitle:
      'أخبرنا ما الذي تريد تحسينه. سندرس العلامة والسوق والعرض والموقع والمحتوى ورحلة العميل قبل أن نقترح العمل.',
    infoTitle: 'تفضّل التواصل المباشر؟',
    infoBody: 'نردّ على كل استفسار جادّ خلال يوم عمل واحد.',
    emailLabel: 'البريد الإلكتروني',
    whatsappLabel: 'واتساب',
    whatsappCta: 'راسلنا عبر واتساب',
    locationLabel: 'نموذج الخدمة',
    locationValue: 'عن بُعد عبر الخليج وما بعده',
    hoursLabel: 'وقت الاستجابة',
    hoursValue: 'خلال يوم عمل واحد',
    formTitle: 'اطلب تدقيقاً استراتيجياً',
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'اسمك',
    emailFieldLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'you@company.com',
    phoneLabel: 'الهاتف / واتساب',
    phonePlaceholder: 'رقم التواصل المفضل',
    companyLabel: 'اسم الشركة',
    companyPlaceholder: 'شركتك',
    countryLabel: 'الدولة / السوق',
    countryPlaceholder: 'اختر السوق',
    industryLabel: 'القطاع',
    industryPlaceholder: 'اختر القطاع',
    websiteLabel: 'رابط الموقع أو إنستغرام',
    websitePlaceholder: 'https:// أو @brand',
    improvementLabel: 'ما الذي تريد تحسينه؟',
    improvementPlaceholder: 'انطباع العلامة، تحويل الموقع، وضوح صفحة الهبوط، إبداع الحملات، توجيه المحتوى، السيو الأساسي…',
    serviceLabel: 'الخدمة المهتم بها',
    servicePlaceholder: 'اختر خدمة',
    budgetLabel: 'نطاق الميزانية',
    budgetPlaceholder: 'اختر نطاقاً',
    timelineLabel: 'الإطار الزمني',
    timelinePlaceholder: 'اختر الإطار الزمني',
    preferredLanguageLabel: 'لغة التواصل المفضلة',
    preferredLanguagePlaceholder: 'اختر اللغة',
    contactMethodLabel: 'طريقة التواصل المفضلة',
    contactMethodPlaceholder: 'اختر الطريقة',
    messageLabel: 'الرسالة',
    messagePlaceholder: 'أضف أي سياق يساعدنا على فهم العمل والسوق والحضور الرقمي الحالي…',
    optional: 'اختياري',
    submit: 'طلب التدقيق',
    sending: 'جارٍ الإرسال…',
    successTitle: 'شكراً لك — وصلنا استفسارك.',
    successBody: 'استلمنا تفاصيلك وسنردّ عليك خلال يوم عمل واحد.',
    submitError: 'حدث خطأ. راسلنا مباشرة عبر connect@veloura-marketing.com.',
    sendAnother: 'إرسال استفسار آخر',
    errName: 'الرجاء إدخال اسمك.',
    errEmail: 'الرجاء إدخال بريد إلكتروني صحيح.',
    errCountry: 'الرجاء اختيار السوق.',
    errIndustry: 'الرجاء اختيار القطاع.',
    errImprovement: 'الرجاء توضيح ما تريد تحسينه.',
    errService: 'الرجاء اختيار خدمة واحدة على الأقل.',
    errMessage: 'الرجاء إخبارنا قليلاً عن العمل.',
  },
  footer: {
    description:
      'استوديو نمو رقمي بوتيك — أنظمة تصميم وويب وتواصل لعلامات مستعدة للنمو.',
    quickLinks: 'التنقّل',
    exploreCol: 'استكشف',
    modelLink: 'المنهج',
    servicesCol: 'الخدمات',
    contactCol: 'تواصل معنا',
    followCol: 'تابعنا',
    remoteNote: 'نعمل عن بُعد في الخليج وخارجه.',
    rights: '© 2026 فيلورا. جميع الحقوق محفوظة.',
    builtLine: 'صُمّم وبُني بعناية.',
    backToTop: 'العودة للأعلى',
    legalLinks: 'القانوني',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    faqs: 'الأسئلة الشائعة',
  },
};

export const UI: Record<Lang, Dict> = {
  en: UI_EN,
  ar: UI_AR,
};
