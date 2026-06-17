/* ============================================================
   Veloura — UI string dictionary (English + Arabic)
   Arabic is written to read naturally, not literally.
   ============================================================ */

export type Lang = 'en' | 'ar';

export interface Localized {
  en: string;
  ar: string;
}

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ar', label: 'العربية', short: 'AR' },
];

type Dict = typeof UI_EN;

const UI_EN = {
  brand: {
    name: 'Veloura',
    tagline: 'Premium Digital Growth Studio',
  },
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
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
    metaTitle: 'Branding & Web Growth Studio for GCC Businesses | Veloura',
    metaDesc:
      'Veloura helps GCC and international businesses look sharper and convert better through branding, UI/UX, websites, landing pages, campaign creatives, content systems, and basic SEO.',
    heroTitle: 'Marketing that feels refined, performs with purpose.',
    heroSubtitle:
      'Veloura is a premium digital growth studio helping Gulf and international businesses build sharper brands, cleaner websites, stronger landing pages, campaign-ready creatives, content systems, and practical SEO foundations.',
    scrollHint: 'Scroll to explore',
    heroStat1: 'GCC-first, remote-ready',
    heroStat2: 'English & Arabic systems',
    heroStat3: 'Senior-led diagnosis',
    servicesEyebrow: 'What we do',
    servicesTitle: 'Focused digital systems, built around design, web, and communication.',
    servicesSubtitle:
      'Brand identity, UI/UX, WordPress and custom-coded websites, landing pages, campaign creatives, content direction, AI video, competitor analysis, basic SEO, and business communication kits.',
    processEyebrow: 'How we work',
    processTitle: 'Diagnosis before execution.',
    processSubtitle:
      'We audit, diagnose, scope, build, launch, measure, and optimize — so every recommendation has a business reason behind it.',
    valueEyebrow: 'Why Veloura',
    valueTitle: 'Built for brands that need more than attention.',
    valueSubtitle:
      'We connect brand perception, website clarity, campaign creative, content structure, and business communication so the brand is easier to trust, understand, and contact.',
    ctaTitle: 'Ready to study your digital presence properly?',
    ctaSubtitle:
      "Tell us where the brand is now and where it needs to go. We'll start with diagnosis, then shape the right scope.",
    modelEyebrow: 'The Veloura model',
    modelTitle: 'Custom scopes, not fixed packages.',
    modelSubtitle:
      'A restaurant group, clinic, real estate project, retail brand, training institute, and B2B firm do not need the same marketing rhythm. We diagnose first, then build a scope around your goals, budget, market, and operational reality.',
    modelLine:
      'Every business has a different problem, therefore every business deserves a different marketing plan.',
    modelDontTitle: 'What we refuse to do',
    modelDoTitle: 'How we work instead',
    industriesEyebrow: 'Built for your industry',
    industriesTitle: 'A plan shaped to the market you actually operate in.',
    industriesSubtitle:
      'A clinic does not earn trust like a restaurant, and a real estate project does not convert like a B2B firm. The system changes with the business.',
    gulfEyebrow: 'Gulf-first, remote-ready',
    gulfTitle: 'Remote-first for GCC and global work.',
    gulfBody:
      'Veloura works remotely with Gulf/GCC and international businesses through bilingual strategy sessions, shared workspaces, clear approvals, and structured delivery.',
    systemEyebrow: 'Growth architecture',
    systemTitle: 'Not more content. A sharper system.',
    systemBody:
      'We study the business, audience, competitors, offer, and customer journey, then build the right mix: identity, UI/UX, website, landing pages, campaign creatives, content direction, basic SEO, and business communication.',
  },
  trust: {
    eyebrow: 'The Veloura standard',
  },
  about: {
    metaTitle: 'About Veloura | Boutique Digital Growth Studio',
    metaDesc:
      'Veloura helps GCC and international businesses build sharper brands, refined websites, landing pages, campaign creatives, content systems, and business communication.',
    heroEyebrow: 'About Veloura',
    heroTitle: 'A boutique studio built on clarity and craft.',
    heroSubtitle:
      'We are a small, senior-led studio that treats digital growth as a system — where strategy, design, web, content, and communication reinforce one another.',
    whoTitle: 'Who we are',
    whoBody1:
      'Veloura is a premium boutique digital growth studio. We help ambitious Gulf and international businesses present themselves with confidence and grow with intent.',
    whoBody2:
      'We combine brand strategy, UI/UX design, website development, campaign creative, content direction, and operational clarity — under one roof, with one standard.',
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
    metaTitle: 'Branding, Web & Growth Services for GCC Businesses | Veloura',
    metaDesc:
      'Explore Veloura services: brand identity, UI/UX, websites, landing pages, campaign creatives, social strategy, AI video, competitor analysis, basic SEO, and business communication.',
    heroEyebrow: 'Capabilities',
    heroTitle: 'Focused services for businesses that need to look sharper and convert better.',
    heroSubtitle:
      'Brand identity, UI/UX, websites, landing pages, campaign creatives, social media strategy, AI video, competition analysis, basic SEO, and business communication. No inflated promise — just a custom scope around what the business actually needs.',
    ctaTitle: 'Not sure what the brand needs first?',
    ctaSubtitle:
      "Start with a strategic audit. We'll diagnose the highest-leverage path before recommending a scope.",
  },
  industries: {
    metaTitle: 'Industries Served by Veloura | Digital Growth by Industry',
    metaDesc:
      'Explore Veloura systems for clinics, restaurants, hospitality, real estate, retail, education, construction, professional services, and local service businesses in GCC markets.',
    heroEyebrow: 'Industries',
    heroTitle: 'Different businesses need different growth systems.',
    heroSubtitle:
      'Veloura adapts brand, web, landing page, content, campaign creative, basic SEO, and business communication work to the trust signals and decision journey of each sector.',
  },
  locations: {
    metaTitle: 'GCC Locations Served by Veloura | Remote Digital Growth Studio',
    metaDesc:
      'Veloura serves GCC and international businesses remotely through branding, UI/UX, websites, landing pages, campaign creatives, content systems, basic SEO, and communication kits.',
    heroEyebrow: 'Locations',
    heroTitle: 'Remote-first digital growth for Gulf and international businesses.',
    heroSubtitle:
      'We are built for remote execution across the Gulf and beyond, with structured project management, bilingual communication, and polished delivery.',
  },
  blog: {
    metaTitle: 'Digital Growth, Branding & Web Design Blog | Veloura',
    metaDesc:
      'Perspectives on marketing strategy, branding, UI/UX, performance, and business growth from the Veloura team.',
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
    sending: 'Sending…',
    successTitle: 'Thank you — your enquiry is in.',
    successBody:
      "We've received your details and will reply within one business day.",
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
      'A premium digital growth studio for Gulf and international businesses.',
    quickLinks: 'Navigate',
    servicesCol: 'Services',
    contactCol: 'Contact',
    followCol: 'Follow',
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
    tagline: 'استوديو نمو رقمي راقٍ',
  },
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
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
    metaTitle: 'Veloura | استوديو هوية ومواقع ونمو رقمي للأعمال الخليجية',
    metaDesc:
      'تساعد Veloura الأعمال الخليجية والدولية على الظهور بشكل أرقى والتحويل بشكل أوضح عبر الهوية وUI/UX والمواقع وصفحات الهبوط وإبداع الحملات والسيو الأساسي.',
    heroTitle: 'تسويق أنيق، مدروس، ومصمم للنمو.',
    heroSubtitle:
      'Veloura استوديو نمو رقمي راقٍ يساعد الأعمال في الخليج والعالم على بناء علامات أوضح ومواقع أنظف وصفحات هبوط أقوى وإبداع جاهز للحملات وأنظمة محتوى وأساسيات سيو عملية.',
    scrollHint: 'مرّر للاستكشاف',
    heroStat1: 'مهيأة للخليج والعمل عن بُعد',
    heroStat2: 'أنظمة عربية وإنجليزية',
    heroStat3: 'تشخيص بقيادة خبراء',
    servicesEyebrow: 'ماذا نقدّم',
    servicesTitle: 'أنظمة رقمية مركزة مبنية حول التصميم والموقع والتواصل.',
    servicesSubtitle:
      'هوية، UI/UX، مواقع ووردبريس ومواقع مخصصة، صفحات هبوط، إبداع حملات، توجيه محتوى، فيديو AI، تحليل منافسين، سيو أساسي، وحقائب تواصل مؤسسي.',
    processEyebrow: 'كيف نعمل',
    processTitle: 'التشخيص قبل التنفيذ.',
    processSubtitle:
      'ندقق، نشخّص، نحدد النطاق، نبني، نطلق، نقيس، ونحسّن — حتى يكون لكل توصية سبب تجاري واضح.',
    valueEyebrow: 'لماذا فيلورا',
    valueTitle: 'مصممة للعلامات التي تحتاج أكثر من الانتباه.',
    valueSubtitle:
      'نربط انطباع العلامة ووضوح الموقع وإبداع الحملات وبنية المحتوى والتواصل المؤسسي حتى تصبح العلامة أسهل ثقةً وفهماً وتواصلاً.',
    ctaTitle: 'جاهز لدراسة حضورك الرقمي بجدية؟',
    ctaSubtitle:
      'أخبرنا أين تقف العلامة الآن وإلى أين يجب أن تصل. نبدأ بالتشخيص، ثم نبني النطاق المناسب.',
    modelEyebrow: 'منهج فيلورا',
    modelTitle: 'نطاقات مخصّصة، لا باقات ثابتة.',
    modelSubtitle:
      'مجموعة المطاعم والعيادة والمشروع العقاري والمتجر ومؤسسة التدريب وشركة B2B لا يحتاجون الإيقاع نفسه. نشخّص أولاً، ثم نبني نطاقاً حول أهدافك وميزانيتك وسوقك وواقعك التشغيلي.',
    modelLine:
      'لكل عمل مشكلة مختلفة، لذلك يستحق كل عمل خطة تسويق مختلفة.',
    modelDontTitle: 'ما نرفض فعله',
    modelDoTitle: 'كيف نعمل بدلاً من ذلك',
    industriesEyebrow: 'مصمَّم لمجالك',
    industriesTitle: 'خطة على مقاس السوق الذي تعمل فيه فعلاً.',
    industriesSubtitle:
      'العيادة لا تبني الثقة مثل المطعم، والمشروع العقاري لا يحوّل مثل شركة B2B. النظام يتغير حسب العمل.',
    gulfEyebrow: 'للخليج عن بُعد',
    gulfTitle: 'تنفيذ عن بُعد للخليج والعالم.',
    gulfBody:
      'تعمل Veloura مع أعمال خليجية ودولية عبر جلسات استراتيجية، مساحات عمل مشتركة، تواصل ثنائي اللغة، وموافقات واضحة.',
    systemEyebrow: 'بنية نمو',
    systemTitle: 'نظام أوضح للنمو.',
    systemBody:
      'ندرس العمل والجمهور والمنافسين والعرض ورحلة العميل، ثم نبني المزيج المناسب: الهوية، UI/UX، الموقع، صفحات الهبوط، إبداع الحملات، توجيه المحتوى، السيو الأساسي، والتواصل المؤسسي.',
  },
  trust: {
    eyebrow: 'معايير فيلورا',
  },
  about: {
    metaTitle: 'عن Veloura | استوديو نمو رقمي بوتيك',
    metaDesc:
      'Veloura استوديو نمو رقمي بوتيك يساعد الأعمال الخليجية والدولية على بناء هوية أوضح ومواقع مصقولة وصفحات هبوط وإبداع حملات وأنظمة محتوى وتواصل مؤسسي.',
    heroEyebrow: 'عن فيلورا',
    heroTitle: 'استوديو بوتيك مبني على الوضوح والإتقان.',
    heroSubtitle:
      'نحن فريق صغير وخبير ينظر إلى النمو الرقمي كنظام تتكامل فيه الاستراتيجية والتصميم والويب والمحتوى والتواصل.',
    whoTitle: 'من نحن',
    whoBody1:
      'Veloura استوديو نمو رقمي بوتيك راقٍ. نساعد الأعمال الطموحة في الخليج والعالم على تقديم نفسها بثقة والنمو بهدف واضح.',
    whoBody2:
      'نجمع بين استراتيجية الهوية وتصميم UI/UX وتطوير المواقع وإبداع الحملات وتوجيه المحتوى والوضوح التشغيلي — تحت سقف واحد وبمعيار واحد.',
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
    metaTitle: 'خدمات هوية ومواقع ونمو رقمي للأعمال الخليجية | Veloura',
    metaDesc:
      'استكشف خدمات Veloura في الهوية وUI/UX والمواقع وصفحات الهبوط وإبداع الحملات واستراتيجية السوشيال وفيديو AI وتحليل المنافسين والسيو الأساسي والتواصل المؤسسي.',
    heroEyebrow: 'القدرات',
    heroTitle: 'خدمات مركزة للأعمال التي تحتاج أن تبدو أرقى وتحوّل بشكل أوضح.',
    heroSubtitle:
      'هوية، UI/UX، مواقع، صفحات هبوط، إبداع حملات، استراتيجية سوشيال، فيديو AI، تحليل منافسين، سيو أساسي، وتواصل مؤسسي. لا نبيع وعداً مبالغاً؛ نبني نطاقاً حول ما يحتاجه العمل فعلاً.',
    ctaTitle: 'لست متأكداً مما تحتاجه علامتك أولاً؟',
    ctaSubtitle: 'ابدأ بتدقيق استراتيجي. نشخّص أعلى مسار تأثير قبل أن نقترح النطاق.',
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
      'استوديو نمو رقمي راقٍ للأعمال الخليجية والدولية.',
    quickLinks: 'التنقّل',
    servicesCol: 'الخدمات',
    contactCol: 'تواصل',
    followCol: 'تابعنا',
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
