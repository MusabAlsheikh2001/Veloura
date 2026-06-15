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
    blog: 'Blog',
    contact: 'Contact',
    cta: 'Start a Project',
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
    learnMore: 'Learn more',
    readArticle: 'Read article',
    backToBlog: 'Back to Blog',
    minRead: 'min read',
    getInTouch: 'Get in touch',
  },
  home: {
    metaTitle: 'Veloura — Marketing that feels refined, performs with purpose',
    metaDesc:
      'Veloura helps brands grow through strategy, elegant design, performance marketing, and digital systems built for measurable impact.',
    heroTitle: 'Marketing that feels refined, performs with purpose.',
    heroSubtitle:
      'Veloura helps brands grow through strategy, elegant design, performance marketing, and digital systems built for measurable impact.',
    scrollHint: 'Scroll to explore',
    heroStat1: 'Disciplines, one studio',
    heroStat2: 'Markets — Arabic & English',
    heroStat3: 'Senior-led delivery',
    servicesEyebrow: 'What we do',
    servicesTitle: 'Services designed like products.',
    servicesSubtitle:
      'A focused set of capabilities — from brand and interface to performance and analysis — engineered to work together.',
    processEyebrow: 'How we work',
    processTitle: 'A clear path from idea to impact.',
    processSubtitle:
      'Four deliberate stages. No noise, no guesswork — just a calm, measurable way to grow.',
    valueEyebrow: 'Why Veloura',
    valueTitle: 'Built for brands that want to look premium and grow smarter.',
    valueSubtitle:
      'We pair creative direction with operational clarity, so your brand looks the part and performs in the market.',
    ctaTitle: "Ready to shape your brand's next chapter?",
    ctaSubtitle:
      "Tell us where you're headed. We'll help you get there with clarity and craft.",
    modelEyebrow: 'The Veloura model',
    modelTitle: 'Custom scopes, not fixed packages.',
    modelSubtitle:
      'Every business has a different problem — so every business deserves a different plan. We diagnose first, then build a scope around your goals, budget, and market.',
    modelLine:
      'Every business has a different problem, therefore every business deserves a different marketing plan.',
    modelDontTitle: 'What we refuse to do',
    modelDoTitle: 'How we work instead',
    industriesEyebrow: 'Built for your industry',
    industriesTitle: 'A plan shaped to your business.',
    industriesSubtitle:
      'A restaurant does not market like a clinic. Here is how Veloura tailors the work to where you actually operate.',
  },
  trust: {
    eyebrow: 'The Veloura standard',
  },
  about: {
    metaTitle: 'About — Veloura',
    metaDesc:
      'Veloura is a premium marketing company combining creative direction, digital execution, campaign thinking, and operational clarity.',
    heroEyebrow: 'About Veloura',
    heroTitle: 'A boutique agency built on clarity and craft.',
    heroSubtitle:
      'We are a small, senior team that treats marketing as a system — where strategy, design, and performance reinforce one another.',
    whoTitle: 'Who we are',
    whoBody1:
      'Veloura is a premium marketing company. We help ambitious brands present themselves with confidence and grow with intent.',
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
    metaTitle: 'Services — Veloura',
    metaDesc:
      'Branding, UI/UX, ad design, WordPress and vibe-coded websites, WhatsApp API, landing pages, SEO and testing, and competition analysis.',
    heroEyebrow: 'Capabilities',
    heroTitle: 'Everything your brand needs to grow.',
    heroSubtitle:
      'A full 360° toolkit — brand, web, content, ads, automation, and analytics. We do not sell fixed packages; we build a custom scope around your goals.',
    ctaTitle: "Not sure which you need?",
    ctaSubtitle:
      "Tell us your goal. We'll recommend the shortest path to it.",
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
    metaTitle: 'Contact — Veloura',
    metaDesc:
      "Tell us what you're building. We'll help you shape it into something clear, elegant, and ready to grow.",
    heroEyebrow: 'Start a project',
    heroTitle: "Let's build something worth noticing.",
    heroSubtitle:
      "Tell us what you're building. We'll help you shape it into something clear, elegant, and ready to grow.",
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
    formTitle: 'Project enquiry',
    nameLabel: 'Full name',
    namePlaceholder: 'Your name',
    emailFieldLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    phoneLabel: 'Phone / WhatsApp',
    phonePlaceholder: '+962 7 0000 0000',
    companyLabel: 'Company name',
    companyPlaceholder: 'Your company',
    serviceLabel: 'Service interested in',
    servicePlaceholder: 'Select a service',
    budgetLabel: 'Budget range',
    budgetPlaceholder: 'Select a range',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your brand and what you want to achieve…',
    optional: 'optional',
    submit: 'Send enquiry',
    sending: 'Sending…',
    successTitle: 'Thank you — your enquiry is in.',
    successBody:
      "We've received your details and will reply within one business day.",
    sendAnother: 'Send another enquiry',
    errName: 'Please enter your name.',
    errEmail: 'Please enter a valid email address.',
    errService: 'Please choose a service.',
    errMessage: 'Please tell us a little about your project.',
  },
  footer: {
    description:
      'A premium marketing and digital growth agency. We help brands look refined and grow with purpose.',
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
    blog: 'المدونة',
    contact: 'تواصل معنا',
    cta: 'ابدأ مشروعك',
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
    learnMore: 'اعرف المزيد',
    readArticle: 'اقرأ المقال',
    backToBlog: 'العودة إلى المدونة',
    minRead: 'دقائق قراءة',
    getInTouch: 'تواصل معنا',
  },
  home: {
    metaTitle: 'فيلورا — تسويق أنيق، مدروس، ومصمم للنمو',
    metaDesc:
      'تساعد فيلورا العلامات التجارية على النمو من خلال الاستراتيجية، التصميم الأنيق، التسويق الرقمي، والأنظمة التي تصنع أثراً واضحاً.',
    heroTitle: 'تسويق أنيق، مدروس، ومصمم للنمو.',
    heroSubtitle:
      'تساعد فيلورا العلامات التجارية على النمو من خلال الاستراتيجية، التصميم الأنيق، التسويق الرقمي، والأنظمة التي تصنع أثراً واضحاً.',
    scrollHint: 'مرّر للاستكشاف',
    heroStat1: 'تخصصات في استوديو واحد',
    heroStat2: 'سوقان — عربي وإنجليزي',
    heroStat3: 'تنفيذ بقيادة الخبراء',
    servicesEyebrow: 'ماذا نقدّم',
    servicesTitle: 'خدمات مصمَّمة بعناية المنتجات.',
    servicesSubtitle:
      'مجموعة مركّزة من القدرات — من الهوية والواجهات إلى الأداء والتحليل — صُمّمت لتعمل معاً بانسجام.',
    processEyebrow: 'كيف نعمل',
    processTitle: 'مسار واضح من الفكرة إلى الأثر.',
    processSubtitle:
      'أربع مراحل مدروسة. بلا ضجيج وبلا تخمين — طريقة هادئة وقابلة للقياس للنمو.',
    valueEyebrow: 'لماذا فيلورا',
    valueTitle: 'مصممة للعلامات التي تريد حضوراً راقياً ونمواً أذكى.',
    valueSubtitle:
      'نجمع بين الاتجاه الإبداعي والوضوح التشغيلي، لتظهر علامتك بالمستوى اللائق وتؤدي بقوة في السوق.',
    ctaTitle: 'جاهز لبناء المرحلة القادمة من علامتك؟',
    ctaSubtitle:
      'أخبرنا إلى أين تتجه، وسنساعدك على الوصول بوضوح وإتقان.',
    modelEyebrow: 'منهج فيلورا',
    modelTitle: 'نطاقات مخصّصة، لا باقات ثابتة.',
    modelSubtitle:
      'لكل عمل مشكلة مختلفة — لذا يستحق كل عمل خطة مختلفة. نشخّص أولاً، ثم نبني نطاقاً حول أهدافك وميزانيتك وسوقك.',
    modelLine:
      'لكل عمل مشكلة مختلفة، لذلك يستحق كل عمل خطة تسويق مختلفة.',
    modelDontTitle: 'ما نرفض فعله',
    modelDoTitle: 'كيف نعمل بدلاً من ذلك',
    industriesEyebrow: 'مصمَّم لمجالك',
    industriesTitle: 'خطة على مقاس عملك.',
    industriesSubtitle:
      'المطعم لا يُسوَّق مثل العيادة. إليك كيف تُفصّل فيلورا العمل حسب مجالك الفعلي.',
  },
  trust: {
    eyebrow: 'معايير فيلورا',
  },
  about: {
    metaTitle: 'من نحن — فيلورا',
    metaDesc:
      'فيلورا شركة تسويق متميزة تجمع بين الاتجاه الإبداعي، التنفيذ الرقمي، التفكير الحملي، والوضوح التشغيلي.',
    heroEyebrow: 'عن فيلورا',
    heroTitle: 'وكالة بوتيك مبنية على الوضوح والإتقان.',
    heroSubtitle:
      'نحن فريق صغير وخبير ينظر إلى التسويق كنظام متكامل، تتكامل فيه الاستراتيجية والتصميم والأداء معاً.',
    whoTitle: 'من نحن',
    whoBody1:
      'فيلورا شركة تسويق متميزة. نساعد العلامات الطموحة على تقديم نفسها بثقة والنمو بهدف واضح.',
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
    metaTitle: 'الخدمات — فيلورا',
    metaDesc:
      'الهوية، واجهات الاستخدام، التصاميم الإعلانية، مواقع ووردبريس والمواقع الحديثة، واتساب API، صفحات الهبوط، تحسين محركات البحث، وتحليل المنافسين.',
    heroEyebrow: 'القدرات',
    heroTitle: 'كل ما تحتاجه علامتك لتنمو.',
    heroSubtitle:
      'حقيبة 360° متكاملة — هوية، ويب، محتوى، إعلانات، أتمتة، وتحليلات. لا نبيع باقات ثابتة؛ نبني نطاقاً مخصّصاً حول أهدافك.',
    ctaTitle: 'لست متأكداً مما تحتاجه؟',
    ctaSubtitle: 'أخبرنا بهدفك، وسنقترح أقصر طريق للوصول إليه.',
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
    metaTitle: 'تواصل معنا — فيلورا',
    metaDesc:
      'أخبرنا بما تعمل عليه، وسنساعدك على تحويله إلى حضور واضح، أنيق، وقابل للنمو.',
    heroEyebrow: 'ابدأ مشروعك',
    heroTitle: 'لنصنع شيئاً يستحق الانتباه.',
    heroSubtitle:
      'أخبرنا بما تعمل عليه، وسنساعدك على تحويله إلى حضور واضح، أنيق، وقابل للنمو.',
    infoTitle: 'تفضّل التواصل المباشر؟',
    infoBody: 'نردّ على كل استفسار جادّ خلال يوم عمل واحد.',
    emailLabel: 'البريد الإلكتروني',
    whatsappLabel: 'واتساب',
    whatsappCta: 'راسلنا عبر واتساب',
    locationLabel: 'الموقع',
    locationValue: 'الأردن · عن بُعد حول العالم',
    hoursLabel: 'وقت الاستجابة',
    hoursValue: 'خلال يوم عمل واحد',
    formTitle: 'استفسار عن مشروع',
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'اسمك',
    emailFieldLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'you@company.com',
    phoneLabel: 'الهاتف / واتساب',
    phonePlaceholder: '+962 7 0000 0000',
    companyLabel: 'اسم الشركة',
    companyPlaceholder: 'شركتك',
    serviceLabel: 'الخدمة المهتم بها',
    servicePlaceholder: 'اختر خدمة',
    budgetLabel: 'نطاق الميزانية',
    budgetPlaceholder: 'اختر نطاقاً',
    messageLabel: 'الرسالة',
    messagePlaceholder: 'حدّثنا عن علامتك وما الذي تريد تحقيقه…',
    optional: 'اختياري',
    submit: 'إرسال الاستفسار',
    sending: 'جارٍ الإرسال…',
    successTitle: 'شكراً لك — وصلنا استفسارك.',
    successBody: 'استلمنا تفاصيلك وسنردّ عليك خلال يوم عمل واحد.',
    sendAnother: 'إرسال استفسار آخر',
    errName: 'الرجاء إدخال اسمك.',
    errEmail: 'الرجاء إدخال بريد إلكتروني صحيح.',
    errService: 'الرجاء اختيار خدمة.',
    errMessage: 'الرجاء إخبارنا قليلاً عن مشروعك.',
  },
  footer: {
    description:
      'وكالة تسويق ونمو رقمي متميّزة. نساعد العلامات على الظهور بأناقة والنمو بهدف.',
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
