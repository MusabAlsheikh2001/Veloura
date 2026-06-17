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
    tagline: 'Marketing & Digital Growth',
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
    metaTitle: 'Premium Marketing & Digital Growth Agency for Gulf Brands | Veloura',
    metaDesc:
      'Veloura is a remote-first boutique marketing and digital growth agency helping Gulf and international brands grow through branding, websites, campaigns, SEO, CRM, analytics, and business communication systems.',
    heroTitle: 'Marketing that feels refined, performs with purpose.',
    heroSubtitle:
      'Veloura is a remote-first boutique marketing and digital growth agency helping Gulf and international brands build premium digital systems across identity, websites, campaigns, SEO, CRM, analytics, and business communication.',
    scrollHint: 'Scroll to explore',
    heroStat1: 'GCC-first, remote-ready',
    heroStat2: 'English & Arabic systems',
    heroStat3: 'Senior-led diagnosis',
    servicesEyebrow: 'What we do',
    servicesTitle: 'A complete growth system, not disconnected deliverables.',
    servicesSubtitle:
      'Brand identity, websites, campaign creatives, paid media, SEO, CRM, analytics, and business communication — designed to work as one customer journey.',
    processEyebrow: 'How we work',
    processTitle: 'Diagnosis before execution.',
    processSubtitle:
      'We audit, diagnose, scope, build, launch, measure, and optimize — so every recommendation has a business reason behind it.',
    valueEyebrow: 'Why Veloura',
    valueTitle: 'Built for brands that need more than attention.',
    valueSubtitle:
      'We connect perception, customer journey, lead flow, and measurement so the brand is easier to trust, easier to understand, and easier to buy from.',
    ctaTitle: 'Ready to study your digital presence properly?',
    ctaSubtitle:
      "Tell us where the brand is now and where it needs to go. We'll start with diagnosis, then shape the right scope.",
    modelEyebrow: 'The Veloura model',
    modelTitle: 'Custom scopes, not fixed packages.',
    modelSubtitle:
      'A restaurant, clinic, real estate project, personal brand, and fashion label do not need the same marketing rhythm. We diagnose first, then build a scope around your goals, budget, market, and operational reality.',
    modelLine:
      'Every business has a different problem, therefore every business deserves a different marketing plan.',
    modelDontTitle: 'What we refuse to do',
    modelDoTitle: 'How we work instead',
    industriesEyebrow: 'Built for your industry',
    industriesTitle: 'A plan shaped to the market you actually operate in.',
    industriesSubtitle:
      'A clinic does not earn trust like a restaurant, and a real estate project does not convert like a consultant. The system changes with the business.',
    gulfEyebrow: 'Gulf-first, remote-ready',
    gulfTitle: 'Based in Jordan. Built for the Gulf and beyond.',
    gulfBody:
      'Veloura works remotely with brands across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, Jordan, and international markets through online strategy sessions, shared workspaces, bilingual communication, clear approval flows, and structured project management.',
    systemEyebrow: 'Growth architecture',
    systemTitle: 'Not more content. A sharper system.',
    systemBody:
      'Before we design, post, build, or launch, we study the business, audience, competitors, customer journey, sales process, and growth priorities. Then we connect the right pieces: brand, website, campaigns, SEO, CRM, analytics, and business communication.',
  },
  trust: {
    eyebrow: 'The Veloura standard',
  },
  about: {
    metaTitle: 'About Veloura | Boutique Growth Agency Built on Strategy & Craft',
    metaDesc:
      'Veloura is a remote-first boutique marketing and digital growth agency helping Gulf and international brands build refined digital systems with strategy, design, performance, and measurement.',
    heroEyebrow: 'About Veloura',
    heroTitle: 'A boutique agency built on clarity and craft.',
    heroSubtitle:
      'We are a small, senior team that treats marketing as a system — where strategy, design, and performance reinforce one another.',
    whoTitle: 'Who we are',
    whoBody1:
      'Veloura is a remote-first premium boutique marketing and digital growth agency. We help ambitious Gulf and international brands present themselves with confidence and grow with intent.',
    whoBody2:
      'We combine creative direction, digital execution, campaign thinking, and operational clarity — under one roof, with one standard.',
    believeTitle: 'What we believe',
    believeBody1:
      'We believe good marketing is quiet confidence. It does not shout; it earns attention through clarity, taste, and consistency.',
    believeBody2:
      'We believe design and performance are not opposites. The most elegant work is also the most effective — because clarity converts.',
    workTitle: 'How we work',
    workBody1:
      'We work in deliberate stages: understand the business, position the brand, design the experience, then launch and optimize against real numbers.',
    workBody2:
      'Every engagement is senior-led and tightly scoped. You work directly with the people doing the work — no layers, no noise.',
    whyTitle: 'Why Veloura',
    whyBody1:
      'Most brands have to choose between a studio that makes things beautiful and an agency that makes things grow. We refuse that trade-off.',
    whyBody2:
      'Veloura is bilingual by design — fluent in English and Arabic markets — so your brand reads naturally to every audience it serves.',
    valuesTitle: 'What guides us',
    value1Title: 'Clarity over noise',
    value1Body: 'We remove the unnecessary so the essential can perform.',
    value2Title: 'Taste with intent',
    value2Body: 'Every creative decision serves the brand and the result.',
    value3Title: 'Measured growth',
    value3Body: 'We optimize against real numbers, not vanity metrics.',
    value4Title: 'Senior, always',
    value4Body: 'You work directly with the people doing the work.',
    positioningStatement:
      'Veloura builds brands that look premium, communicate clearly, attract the right audience, and convert attention into real business results.',
    visionTitle: 'The vision',
    visionBody:
      'A premium boutique agency that builds complete digital systems for serious businesses — not just logos, posts, or ads, but the brand, the message, the website, the campaign, the automation, the tracking, and the growth structure. We study, build, launch, measure, and improve.',
    teamEyebrow: 'The team',
    teamTitle: 'A senior team, organized by discipline.',
    teamSubtitle:
      'Strategy, brand, web, performance, and automation — under one roof, with one standard. You work directly with the people doing the work.',
  },
  services: {
    metaTitle: 'Marketing, Branding, Web & Growth Services for Gulf Brands | Veloura',
    metaDesc:
      'Explore Veloura’s services across brand identity, UI/UX, website development, landing pages, campaign creatives, paid ads, SEO, CRM automation, analytics, and business communication kits.',
    heroEyebrow: 'Capabilities',
    heroTitle: 'Everything your brand needs to become easier to trust, contact, and buy from.',
    heroSubtitle:
      'A full 360° toolkit — brand, web, content, ads, SEO, CRM, automation, analytics, and business communication. We do not sell fixed packages; we build a custom scope around your goals.',
    ctaTitle: 'Not sure what the brand needs first?',
    ctaSubtitle:
      "Start with a strategic audit. We'll diagnose the highest-leverage path before recommending a scope.",
  },
  industries: {
    metaTitle: 'Industries Served by Veloura | Gulf Marketing Systems',
    metaDesc:
      'Explore Veloura’s digital growth systems for clinics, restaurants, real estate, retail, personal brands, and professional service firms across Gulf markets.',
    heroEyebrow: 'Industries',
    heroTitle: 'Different businesses need different growth systems.',
    heroSubtitle:
      'Veloura adapts brand, web, campaign, SEO, CRM, and analytics work to the trust signals, customer journey, and sales process of each sector.',
  },
  locations: {
    metaTitle: 'Gulf Locations Served by Veloura | Remote-First Marketing Agency',
    metaDesc:
      'Veloura is based in Jordan and serves Gulf and international brands remotely across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, and beyond.',
    heroEyebrow: 'Locations',
    heroTitle: 'Remote-first marketing for Gulf and international brands.',
    heroSubtitle:
      'We are based in Jordan and built for remote execution across the Gulf and beyond — with structured project management, bilingual communication, and measurable delivery.',
  },
  blog: {
    metaTitle: 'Blog — Veloura',
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
    metaTitle: 'Contact Veloura | Request a Strategic Marketing Audit',
    metaDesc:
      'Contact Veloura to discuss branding, websites, landing pages, paid advertising, SEO, CRM systems, analytics, and custom digital growth scopes for Gulf and international brands.',
    heroEyebrow: 'Start a project',
    heroTitle: 'Start with diagnosis, then build the right scope.',
    heroSubtitle:
      "Tell us what you want to improve. We'll study the brand, market, journey, and lead flow before recommending the work.",
    infoTitle: 'Prefer to reach out directly?',
    infoBody:
      'We reply to every serious enquiry within one business day.',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    whatsappCta: 'Message us on WhatsApp',
    locationLabel: 'Location',
    locationValue: 'Jordan · Remote worldwide',
    hoursLabel: 'Response time',
    hoursValue: 'Within one business day',
    formTitle: 'Request a strategic audit',
    nameLabel: 'Full name',
    namePlaceholder: 'Your name',
    emailFieldLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    phoneLabel: 'Phone / WhatsApp',
    phonePlaceholder: '+962 7 0000 0000',
    companyLabel: 'Company name',
    companyPlaceholder: 'Your company',
    countryLabel: 'Country / market',
    countryPlaceholder: 'Select a market',
    industryLabel: 'Industry',
    industryPlaceholder: 'Select an industry',
    websiteLabel: 'Website or Instagram link',
    websitePlaceholder: 'https:// or @brand',
    improvementLabel: 'What do you want to improve?',
    improvementPlaceholder: 'Brand perception, website conversion, lead flow, campaigns, SEO visibility…',
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
      'A remote-first boutique marketing and digital growth agency for Gulf and international brands.',
    quickLinks: 'Navigate',
    servicesCol: 'Services',
    contactCol: 'Contact',
    followCol: 'Follow',
    rights: '© 2026 Veloura. All rights reserved.',
    builtLine: 'Designed & built with intent.',
    backToTop: 'Back to top',
  },
};

const UI_AR: Dict = {
  brand: {
    name: 'فيلورا',
    tagline: 'التسويق والنمو الرقمي',
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
    metaTitle: 'Veloura | وكالة تسويق ونمو رقمي فاخرة للعلامات التجارية في الخليج',
    metaDesc:
      'Veloura وكالة تسويق ونمو رقمي بوتيك تعمل عن بُعد مع علامات تجارية في الخليج والعالم من خلال الهوية، المواقع، الحملات، السيو، أنظمة CRM، والتحليلات.',
    heroTitle: 'تسويق أنيق، مدروس، ومصمم للنمو.',
    heroSubtitle:
      'Veloura وكالة بوتيك للتسويق والنمو الرقمي تعمل عن بُعد مع العلامات في الخليج والعالم لبناء أنظمة رقمية راقية تشمل الهوية والمواقع والحملات والسيو وCRM والتحليلات والتواصل المؤسسي.',
    scrollHint: 'مرّر للاستكشاف',
    heroStat1: 'مهيأة للخليج والعمل عن بُعد',
    heroStat2: 'أنظمة عربية وإنجليزية',
    heroStat3: 'تشخيص بقيادة خبراء',
    servicesEyebrow: 'ماذا نقدّم',
    servicesTitle: 'نظام نمو متكامل، لا خدمات منفصلة.',
    servicesSubtitle:
      'هوية، مواقع، إبداع حملات، إعلانات، سيو، CRM، تحليلات، وتواصل مؤسسي — مصممة لتعمل كرحلة عميل واحدة.',
    processEyebrow: 'كيف نعمل',
    processTitle: 'التشخيص قبل التنفيذ.',
    processSubtitle:
      'ندقق، نشخّص، نحدد النطاق، نبني، نطلق، نقيس، ونحسّن — حتى يكون لكل توصية سبب تجاري واضح.',
    valueEyebrow: 'لماذا فيلورا',
    valueTitle: 'مصممة للعلامات التي تحتاج أكثر من الانتباه.',
    valueSubtitle:
      'نربط الانطباع ورحلة العميل وتدفق الفرص والقياس حتى تصبح العلامة أسهل ثقةً وفهماً وشراءً.',
    ctaTitle: 'جاهز لدراسة حضورك الرقمي بجدية؟',
    ctaSubtitle:
      'أخبرنا أين تقف العلامة الآن وإلى أين يجب أن تصل. نبدأ بالتشخيص، ثم نبني النطاق المناسب.',
    modelEyebrow: 'منهج فيلورا',
    modelTitle: 'نطاقات مخصّصة، لا باقات ثابتة.',
    modelSubtitle:
      'المطعم والعيادة والمشروع العقاري والعلامة الشخصية والمتجر لا يحتاجون الإيقاع نفسه. نشخّص أولاً، ثم نبني نطاقاً حول أهدافك وميزانيتك وسوقك وواقعك التشغيلي.',
    modelLine:
      'لكل عمل مشكلة مختلفة، لذلك يستحق كل عمل خطة تسويق مختلفة.',
    modelDontTitle: 'ما نرفض فعله',
    modelDoTitle: 'كيف نعمل بدلاً من ذلك',
    industriesEyebrow: 'مصمَّم لمجالك',
    industriesTitle: 'خطة على مقاس السوق الذي تعمل فيه فعلاً.',
    industriesSubtitle:
      'العيادة لا تبني الثقة مثل المطعم، والمشروع العقاري لا يحوّل مثل الاستشاري. النظام يتغير حسب العمل.',
    gulfEyebrow: 'للخليج والعمل عن بُعد',
    gulfTitle: 'مقرنا في الأردن. وبنيتنا مصممة للخليج وما بعده.',
    gulfBody:
      'تعمل Veloura عن بُعد مع علامات في السعودية والإمارات وقطر والكويت والبحرين وعُمان والأردن والأسواق الدولية عبر جلسات استراتيجية أونلاين ومساحات عمل مشتركة وتواصل ثنائي اللغة ومسارات موافقة واضحة وإدارة مشاريع منظمة.',
    systemEyebrow: 'بنية النمو',
    systemTitle: 'ليس المزيد من المحتوى. بل نظام أوضح.',
    systemBody:
      'قبل أن نصمم أو ننشر أو نبني أو نطلق، ندرس العمل والجمهور والمنافسين ورحلة العميل وعملية البيع وأولويات النمو. ثم نربط القطع الصحيحة: الهوية والموقع والحملات والسيو وCRM والتحليلات والتواصل المؤسسي.',
  },
  trust: {
    eyebrow: 'معايير فيلورا',
  },
  about: {
    metaTitle: 'عن Veloura | وكالة نمو بوتيك مبنية على الاستراتيجية والإتقان',
    metaDesc:
      'Veloura وكالة تسويق ونمو رقمي بوتيك تعمل عن بُعد مع العلامات الخليجية والدولية لبناء أنظمة رقمية راقية بالاستراتيجية والتصميم والأداء والقياس.',
    heroEyebrow: 'عن فيلورا',
    heroTitle: 'وكالة بوتيك مبنية على الوضوح والإتقان.',
    heroSubtitle:
      'نحن فريق صغير وخبير ينظر إلى التسويق كنظام متكامل، تتكامل فيه الاستراتيجية والتصميم والأداء معاً.',
    whoTitle: 'من نحن',
    whoBody1:
      'Veloura وكالة بوتيك راقية للتسويق والنمو الرقمي تعمل عن بُعد. نساعد العلامات الطموحة في الخليج والعالم على تقديم نفسها بثقة والنمو بهدف واضح.',
    whoBody2:
      'نجمع بين الاتجاه الإبداعي، التنفيذ الرقمي، التفكير الحملي، والوضوح التشغيلي — تحت سقف واحد وبمعيار واحد.',
    believeTitle: 'بماذا نؤمن',
    believeBody1:
      'نؤمن أن التسويق الجيد ثقة هادئة؛ لا يصرخ، بل يكسب الانتباه بالوضوح والذوق والثبات.',
    believeBody2:
      'نؤمن أن التصميم والأداء ليسا نقيضين. أجمل الأعمال هي الأكثر فاعلية، لأن الوضوح يحقق النتائج.',
    workTitle: 'كيف نعمل',
    workBody1:
      'نعمل عبر مراحل مدروسة: نفهم العمل، نحدّد موقع العلامة، نصمّم التجربة، ثم نطلق ونحسّن بناءً على أرقام حقيقية.',
    workBody2:
      'كل مشروع يقوده فريق خبير وبنطاق واضح. تتعامل مباشرةً مع من ينفّذ العمل — بلا طبقات وبلا ضجيج.',
    whyTitle: 'لماذا فيلورا',
    whyBody1:
      'تُجبر معظم العلامات على الاختيار بين استوديو يصنع الجمال ووكالة تصنع النمو. نحن نرفض هذه المقايضة.',
    whyBody2:
      'فيلورا ثنائية اللغة بطبيعتها — تتقن السوقين العربي والإنجليزي — لتقرأ علامتك بشكل طبيعي لكل جمهور تخدمه.',
    valuesTitle: 'ما الذي يوجّهنا',
    value1Title: 'الوضوح قبل الضجيج',
    value1Body: 'نزيل غير الضروري ليؤدي الجوهري دوره.',
    value2Title: 'ذوق بهدف',
    value2Body: 'كل قرار إبداعي يخدم العلامة والنتيجة.',
    value3Title: 'نمو مقاس',
    value3Body: 'نحسّن بناءً على أرقام حقيقية لا مقاييس شكلية.',
    value4Title: 'خبرة دائماً',
    value4Body: 'تتعامل مباشرةً مع من ينفّذ العمل.',
    positioningStatement:
      'تبني فيلورا علامات تبدو راقية، تتواصل بوضوح، تجذب الجمهور الصحيح، وتحوّل الانتباه إلى نتائج أعمال حقيقية.',
    visionTitle: 'الرؤية',
    visionBody:
      'وكالة بوتيك راقية تبني أنظمة رقمية متكاملة للأعمال الجادّة — لا مجرّد شعارات أو منشورات أو إعلانات، بل الهوية والرسالة والموقع والحملة والأتمتة والتتبّع وبنية النمو. ندرس، نبني، نطلق، نقيس، ونحسّن.',
    teamEyebrow: 'الفريق',
    teamTitle: 'فريق خبير، منظَّم حسب التخصص.',
    teamSubtitle:
      'استراتيجية، هوية، ويب، أداء، وأتمتة — تحت سقف واحد وبمعيار واحد. تتعامل مباشرةً مع من ينفّذ العمل.',
  },
  services: {
    metaTitle: 'خدمات تسويق وهوية ومواقع ونمو للعلامات الخليجية | Veloura',
    metaDesc:
      'استكشف خدمات Veloura في الهوية وUI/UX وتطوير المواقع وصفحات الهبوط وإبداع الحملات والإعلانات والسيو وأتمتة CRM والتحليلات وحقائب التواصل المؤسسي.',
    heroEyebrow: 'القدرات',
    heroTitle: 'كل ما تحتاجه علامتك لتصبح أسهل ثقةً وتواصلاً وشراءً.',
    heroSubtitle:
      'منظومة 360° متكاملة — هوية، ويب، محتوى، إعلانات، سيو، CRM، أتمتة، تحليلات، وتواصل مؤسسي. لا نبيع باقات ثابتة؛ نبني نطاقاً مخصصاً حول أهدافك.',
    ctaTitle: 'لست متأكداً مما تحتاجه علامتك أولاً؟',
    ctaSubtitle: 'ابدأ بتدقيق استراتيجي. نشخّص أعلى مسار تأثير قبل أن نقترح النطاق.',
  },
  industries: {
    metaTitle: 'القطاعات التي تخدمها Veloura | أنظمة تسويق للخليج',
    metaDesc:
      'استكشف أنظمة النمو الرقمي من Veloura للعيادات والمطاعم والعقار والتجزئة والعلامات الشخصية وشركات الخدمات المهنية في الخليج.',
    heroEyebrow: 'القطاعات',
    heroTitle: 'كل عمل يحتاج نظام نمو مختلفاً.',
    heroSubtitle:
      'تكيّف Veloura الهوية والمواقع والحملات والسيو وCRM والتحليلات حسب إشارات الثقة ورحلة العميل وعملية البيع في كل قطاع.',
  },
  locations: {
    metaTitle: 'الأسواق الخليجية التي تخدمها Veloura | وكالة تسويق عن بُعد',
    metaDesc:
      'Veloura وكالة مقرها الأردن وتخدم العلامات الخليجية والدولية عن بُعد في السعودية والإمارات وقطر والكويت والبحرين وعُمان وما بعدها.',
    heroEyebrow: 'الأسواق',
    heroTitle: 'تسويق عن بُعد للعلامات الخليجية والدولية.',
    heroSubtitle:
      'مقرنا في الأردن وبنيتنا مصممة للتنفيذ عن بُعد في الخليج وما بعده — بإدارة مشاريع منظمة وتواصل ثنائي اللغة وتسليم قابل للقياس.',
  },
  blog: {
    metaTitle: 'المدونة — فيلورا',
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
    metaTitle: 'تواصل مع Veloura | اطلب تدقيقاً تسويقياً استراتيجياً',
    metaDesc:
      'تواصل مع Veloura لمناقشة الهوية والمواقع وصفحات الهبوط والإعلانات والسيو وأنظمة CRM والتحليلات ونطاقات النمو الرقمية المخصصة للعلامات الخليجية والدولية.',
    heroEyebrow: 'ابدأ مشروعك',
    heroTitle: 'ابدأ بالتشخيص، ثم ابنِ النطاق الصحيح.',
    heroSubtitle:
      'أخبرنا ما الذي تريد تحسينه. سندرس العلامة والسوق والرحلة وتدفق الفرص قبل أن نقترح العمل.',
    infoTitle: 'تفضّل التواصل المباشر؟',
    infoBody: 'نردّ على كل استفسار جادّ خلال يوم عمل واحد.',
    emailLabel: 'البريد الإلكتروني',
    whatsappLabel: 'واتساب',
    whatsappCta: 'راسلنا عبر واتساب',
    locationLabel: 'الموقع',
    locationValue: 'الأردن · عن بُعد حول العالم',
    hoursLabel: 'وقت الاستجابة',
    hoursValue: 'خلال يوم عمل واحد',
    formTitle: 'اطلب تدقيقاً استراتيجياً',
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'اسمك',
    emailFieldLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'you@company.com',
    phoneLabel: 'الهاتف / واتساب',
    phonePlaceholder: '+962 7 0000 0000',
    companyLabel: 'اسم الشركة',
    companyPlaceholder: 'شركتك',
    countryLabel: 'الدولة / السوق',
    countryPlaceholder: 'اختر السوق',
    industryLabel: 'القطاع',
    industryPlaceholder: 'اختر القطاع',
    websiteLabel: 'رابط الموقع أو إنستغرام',
    websitePlaceholder: 'https:// أو @brand',
    improvementLabel: 'ما الذي تريد تحسينه؟',
    improvementPlaceholder: 'انطباع العلامة، تحويل الموقع، تدفق الفرص، الحملات، الظهور في البحث…',
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
      'وكالة بوتيك للتسويق والنمو الرقمي تعمل عن بُعد مع العلامات الخليجية والدولية.',
    quickLinks: 'التنقّل',
    servicesCol: 'الخدمات',
    contactCol: 'تواصل',
    followCol: 'تابعنا',
    rights: '© 2026 فيلورا. جميع الحقوق محفوظة.',
    builtLine: 'صُمّم وبُني بعناية.',
    backToTop: 'العودة للأعلى',
  },
};

export const UI: Record<Lang, Dict> = {
  en: UI_EN,
  ar: UI_AR,
};
