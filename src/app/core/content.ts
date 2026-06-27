/* ============================================================
   Veloura — Structured bilingual content
   ============================================================ */

import { Localized } from './i18n';

export type IconName =
  | 'uiux' | 'ads' | 'branding' | 'mockup' | 'whatsapp'
  | 'wordpress' | 'vibe' | 'landing' | 'seo' | 'analysis'
  | 'discover' | 'position' | 'design' | 'launch'
  | 'clarity' | 'presence' | 'performance'
  | 'social' | 'video' | 'paidads' | 'analytics' | 'comms' | 'automation';

export interface Service {
  id: string;
  icon: IconName;
  title: Localized;
  desc: Localized;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: 'brand-identity',
    icon: 'branding',
    featured: true,
    title: { en: 'Brand Identity & Visual Systems', ar: 'الهوية والأنظمة البصرية' },
    desc: {
      en: 'Strategy, logo, palette, typography, voice, and full brand guidelines — a premium identity applied consistently everywhere.',
      ar: 'استراتيجية، شعار، ألوان، خطوط، نبرة، ودليل هوية متكامل — هوية راقية تُطبَّق بثبات في كل مكان.',
    },
  },
  {
    id: 'ui-ux',
    icon: 'uiux',
    featured: true,
    title: { en: 'UI/UX Design', ar: 'تصميم واجهات وتجربة الاستخدام' },
    desc: {
      en: 'Wireframes, user journeys, prototypes, and conversion-focused interfaces designed in Figma around clarity and results.',
      ar: 'مخططات أولية، رحلات مستخدم، نماذج تفاعلية، وواجهات مركّزة على التحويل تُصمَّم بوضوح ونتائج.',
    },
  },
  {
    id: 'web-development',
    icon: 'wordpress',
    featured: true,
    title: { en: 'Website Development', ar: 'تطوير المواقع' },
    desc: {
      en: 'Fast, refined WordPress and custom-coded websites for companies, clinics, portfolios, service businesses, and landing-driven business sites.',
      ar: 'مواقع ووردبريس ومواقع مبرمجة سريعة وأنيقة للشركات والعيادات ومعارض الأعمال والخدمات والمواقع المبنية حول صفحات هبوط.',
    },
  },
  {
    id: 'landing-pages',
    icon: 'landing',
    title: { en: 'Landing Pages & Case Studies', ar: 'صفحات الهبوط ودراسات الحالة' },
    desc: {
      en: 'Focused pages that turn an offer, launch, or case study into one clear, persuasive story with a single job to do.',
      ar: 'صفحات مركّزة تحوّل العرض أو الإطلاق أو دراسة الحالة إلى قصة واحدة واضحة ومقنعة بمهمة واحدة.',
    },
  },
  {
    id: 'ad-designs',
    icon: 'ads',
    title: { en: 'Ad Designs & Campaign Creatives', ar: 'التصاميم والحملات الإعلانية' },
    desc: {
      en: 'Static ads, stories, carousels, and creative angles designed for Meta, TikTok, Snapchat, and Google campaign use.',
      ar: 'إعلانات ثابتة وقصص وكاروسيل وزوايا إبداعية مصممة للاستخدام في حملات ميتا وتيك توك وسناب وجوجل.',
    },
  },
  {
    id: 'social-media',
    icon: 'social',
    featured: true,
    title: { en: 'Social Media Strategy', ar: 'استراتيجية وسائل التواصل' },
    desc: {
      en: 'Content direction, campaign ideas, post structure, calendars, captions, reels direction, and brand-consistent visual planning.',
      ar: 'توجيه محتوى، أفكار حملات، بنية منشورات، جداول، كابشن، اتجاه ريلز، وتخطيط بصري ثابت مع الهوية.',
    },
  },
  {
    id: 'ai-video',
    icon: 'video',
    title: { en: 'AI Video & Motion Content', ar: 'فيديو الذكاء الاصطناعي والموشن' },
    desc: {
      en: 'AI-assisted clips, motion graphics, reels, and brand films — fast to produce, still premium and unmistakably human.',
      ar: 'مقاطع بمساعدة الذكاء الاصطناعي، موشن جرافيك، ريلز، وأفلام علامة — سريعة الإنتاج، تبقى راقية وإنسانية.',
    },
  },
  {
    id: 'basic-seo',
    icon: 'seo',
    title: { en: 'Basic SEO', ar: 'السيو الأساسي' },
    desc: {
      en: 'Practical website SEO: technical basics, on-page structure, metadata, headings, performance, local SEO basics, and content direction.',
      ar: 'سيو عملي للمواقع: أساسيات تقنية، بنية صفحات، ميتا، عناوين، أداء، أساسيات السيو المحلي، وتوجيه محتوى.',
    },
  },
  {
    id: 'competition-analysis',
    icon: 'analysis',
    title: { en: 'Competition Analysis', ar: 'تحليل المنافسين' },
    desc: {
      en: 'Clear analysis of competitors’ branding, websites, content, ads, positioning, and market gaps.',
      ar: 'تحليل واضح لهوية المنافسين ومواقعهم ومحتواهم وإعلاناتهم وتموضعهم وفجوات السوق.',
    },
  },
  {
    id: 'comms-kit',
    icon: 'comms',
    title: { en: 'Business Communication Kit', ar: 'حقيبة التواصل المؤسسي' },
    desc: {
      en: 'Company profiles, pitch decks, proposals, letterheads, and branded invoices — the documents that make a business look serious.',
      ar: 'ملفات تعريفية، عروض تقديمية، مقترحات، أوراق رسمية، وفواتير مُعلَّمة — المستندات التي تجعل العمل يبدو جادّاً.',
    },
  },
];

/** Six concise homepage categories. Each links to the closest detailed service page. */
export const SERVICES_PREVIEW: Service[] = [
  {
    id: 'brand-identity',
    icon: 'branding',
    title: { en: 'Brand Identity & Visual Systems', ar: 'الهوية والأنظمة البصرية' },
    desc: {
      en: 'Positioning, visual identity, and practical rules that make every brand touchpoint feel intentional.',
      ar: 'تموضع وهوية بصرية وقواعد عملية تجعل كل نقطة تواصل مع العلامة مقصودة ومتّسقة.',
    },
  },
  {
    id: 'ui-ux',
    icon: 'uiux',
    title: { en: 'UI/UX Design', ar: 'تصميم UI/UX' },
    desc: {
      en: 'Clear journeys and conversion-minded interfaces shaped around real customer decisions.',
      ar: 'رحلات واضحة وواجهات تراعي التحويل وتُبنى حول قرارات العملاء الحقيقية.',
    },
  },
  {
    id: 'web-development',
    icon: 'wordpress',
    title: { en: 'Websites & Landing Pages', ar: 'المواقع وصفحات الهبوط' },
    desc: {
      en: 'Refined websites and focused landing pages built to earn trust and prompt action.',
      ar: 'مواقع مصقولة وصفحات هبوط مركّزة مصممة لبناء الثقة ودفع الخطوة التالية.',
    },
  },
  {
    id: 'ad-designs',
    icon: 'ads',
    title: { en: 'Campaign Creatives & Content Direction', ar: 'إبداع الحملات وتوجيه المحتوى' },
    desc: {
      en: 'Campaign concepts, branded creative, and content direction that keep the message coherent.',
      ar: 'مفاهيم حملات وإبداع بصري وتوجيه محتوى يحافظ على وضوح الرسالة واتساقها.',
    },
  },
  {
    id: 'ai-video',
    icon: 'video',
    title: { en: 'AI Video & Motion Content', ar: 'فيديو AI ومحتوى الموشن' },
    desc: {
      en: 'Premium AI-assisted video and motion content designed to feel polished, useful, and on-brand.',
      ar: 'فيديو وموشن بمساعدة الذكاء الاصطناعي يبدو مصقولاً وعملياً ومتّسقاً مع العلامة.',
    },
  },
  {
    id: 'basic-seo',
    icon: 'analysis',
    title: { en: 'SEO, Competitor Analysis & Communication Kits', ar: 'السيو وتحليل المنافسين وحقائب التواصل' },
    desc: {
      en: 'Practical SEO, market analysis, and business materials that strengthen visibility and credibility.',
      ar: 'سيو عملي وتحليل للسوق ومواد أعمال تعزّز الظهور والمصداقية.',
    },
  },
];

/* ---------- The Veloura model: what we refuse vs. how we work ---------- */
export const MODEL_DONT: Localized[] = [
  { en: 'Sell fixed “10 posts a month” packages.', ar: 'نبيع باقات ثابتة بعدد منشورات شهري.' },
  { en: 'Run as a cheap, templated posting service.', ar: 'نعمل كخدمة نشر رخيصة بقوالب جاهزة.' },
  { en: 'Copy trends with no strategy behind them.', ar: 'نقلّد الترندات دون استراتيجية خلفها.' },
  { en: 'Overclaim beyond our real specialist scope.', ar: 'نضخّم نطاقنا خارج خبرتنا الحقيقية.' },
  { en: 'Build websites with no conversion structure.', ar: 'نبني مواقع دون بنية تحويل.' },
];

export const MODEL_DO: Localized[] = [
  { en: 'Start every engagement with an audit, diagnosis, and positioning.', ar: 'نبدأ كل تعاون بتدقيق وتشخيص وتحديد موقع.' },
  { en: 'Build a custom scope around your goals, budget, and market.', ar: 'نبني نطاقاً مخصّصاً حول أهدافك وميزانيتك وسوقك.' },
  { en: 'Pair premium design with clear structure and conversion paths.', ar: 'نجمع التصميم الراقي مع بنية واضحة ومسارات تحويل.' },
  { en: 'Build assets that teams can actually use: sites, pages, kits, and content systems.', ar: 'نبني أصولاً يمكن للفرق استخدامها فعلاً: مواقع وصفحات وحقائب وأنظمة محتوى.' },
  { en: 'Use basic SEO and operational clarity as support, not as inflated promises.', ar: 'نستخدم السيو الأساسي والوضوح التشغيلي كدعم لا كوعود مبالغ بها.' },
];

/* ---------- Industry-tailored scopes ---------- */
export interface Industry {
  id: string;
  name: Localized;
  summary: Localized;
  tags: Localized[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'restaurants',
    name: { en: 'Restaurants & Cafés', ar: 'المطاعم والمقاهي' },
    summary: {
      en: 'Story-led content, mouth-watering visuals, offers, Google Maps visibility, and WhatsApp reservations that fill tables.',
      ar: 'محتوى قصصي، صور تفتح الشهية، عروض، ظهور على خرائط جوجل، وحجوزات واتساب تملأ الطاولات.',
    },
    tags: [
      { en: 'Food visuals', ar: 'صور الطعام' },
      { en: 'Google Maps', ar: 'خرائط جوجل' },
      { en: 'Reservations', ar: 'الحجوزات' },
      { en: 'Seasonal offers', ar: 'عروض موسمية' },
    ],
  },
  {
    id: 'clinics',
    name: { en: 'Clinics & Healthcare', ar: 'العيادات والرعاية الصحية' },
    summary: {
      en: 'Trust-first identity, doctor profiles, service pages, Google Business clarity, and booking-ready website paths.',
      ar: 'هوية تبني الثقة أولاً، ملفات أطباء، صفحات خدمات، وضوح على Google Business، ومسارات موقع جاهزة للحجز.',
    },
    tags: [
      { en: 'Trust & authority', ar: 'ثقة ومصداقية' },
      { en: 'Service SEO', ar: 'سيو الخدمات' },
      { en: 'Google Business', ar: 'نشاط جوجل' },
      { en: 'Booking flow', ar: 'مسار الحجز' },
    ],
  },
  {
    id: 'real-estate',
    name: { en: 'Real Estate & Developers', ar: 'العقارات والمطورون' },
    summary: {
      en: 'Project landing pages, campaign creatives, inquiry structure, and follow-up-ready pages that turn interest into viewings.',
      ar: 'صفحات هبوط للمشاريع، إبداع حملات، بنية استفسار، وصفحات جاهزة للمتابعة تحوّل الاهتمام إلى معاينات.',
    },
    tags: [
      { en: 'Project pages', ar: 'صفحات المشاريع' },
      { en: 'Lead-gen ads', ar: 'إعلانات العملاء' },
      { en: 'Inquiry flow', ar: 'مسار استفسار' },
      { en: 'Sales follow-up', ar: 'متابعة المبيعات' },
    ],
  },
  {
    id: 'retail',
    name: { en: 'Retail & Ecommerce', ar: 'التجزئة والمتاجر الإلكترونية' },
    summary: {
      en: 'Collection storytelling, ecommerce UX, campaign creatives, and product paths that move items with discipline.',
      ar: 'سرد للمجموعات، UX للمتاجر، إبداع حملات، ومسارات منتجات تحرّك العناصر بانضباط.',
    },
    tags: [
      { en: 'Ecommerce UX', ar: 'تجربة المتجر' },
      { en: 'Drops & launches', ar: 'إطلاقات' },
      { en: 'Campaign creative', ar: 'إبداع حملات' },
      { en: 'Catalog systems', ar: 'أنظمة كتالوج' },
    ],
  },
  {
    id: 'professional-services',
    name: { en: 'Professional & B2B Firms', ar: 'الشركات المهنية وB2B' },
    summary: {
      en: 'Clear positioning, authority websites, company profiles, proposal systems, and qualified B2B enquiry paths.',
      ar: 'تموضع واضح، مواقع سلطة، بروفايلات شركات، أنظمة مقترحات، ومسارات استفسار B2B مؤهلة.',
    },
    tags: [
      { en: 'Authority site', ar: 'موقع سلطة' },
      { en: 'Proposals', ar: 'مقترحات' },
      { en: 'Service SEO', ar: 'سيو الخدمات' },
      { en: 'Qualified leads', ar: 'فرص مؤهلة' },
    ],
  },
  {
    id: 'education-training',
    name: { en: 'Education & Training', ar: 'التعليم والتدريب' },
    summary: {
      en: 'Program pages, enrollment journeys, campaign ideas, and follow-up-ready structures for institutes, academies, and training companies.',
      ar: 'صفحات برامج، رحلات تسجيل، أفكار حملات، وبنى جاهزة للمتابعة للمعاهد والأكاديميات وشركات التدريب.',
    },
    tags: [
      { en: 'Program pages', ar: 'صفحات البرامج' },
      { en: 'Enrollment funnels', ar: 'مسارات التسجيل' },
      { en: 'Campaigns', ar: 'حملات' },
      { en: 'Inquiry flow', ar: 'مسار استفسار' },
    ],
  },
];

/* ---------- Team, organized by discipline (no individual names) ---------- */
export interface Discipline {
  icon: IconName;
  title: Localized;
  desc: Localized;
}

export const DISCIPLINES: Discipline[] = [
  {
    icon: 'position',
    title: { en: 'Strategy & Positioning', ar: 'الاستراتيجية وتحديد الموقع' },
    desc: {
      en: 'Audit, market angle, funnels, and the growth roadmap.',
      ar: 'تدقيق، زاوية السوق، المسارات، وخارطة النمو.',
    },
  },
  {
    icon: 'branding',
    title: { en: 'Brand & Creative', ar: 'الهوية والإبداع' },
    desc: {
      en: 'Identity, art direction, campaigns, and copy in one voice.',
      ar: 'هوية، إدارة فنية، حملات، ونصوص بصوت واحد.',
    },
  },
  {
    icon: 'uiux',
    title: { en: 'Web & Interfaces', ar: 'الويب والواجهات' },
    desc: {
      en: 'UI/UX, WordPress, coded sites, and conversion-built pages.',
      ar: 'واجهات وتجربة، ووردبريس، مواقع مبرمجة، وصفحات مبنية للتحويل.',
    },
  },
  {
    icon: 'social',
    title: { en: 'Content & Social', ar: 'المحتوى والتواصل' },
    desc: {
      en: 'Calendars, reels, video, and community that compounds.',
      ar: 'جداول، ريلز، فيديو، ومجتمع يتراكم.',
    },
  },
  {
    icon: 'performance',
    title: { en: 'Performance & Growth', ar: 'الأداء والنمو' },
    desc: {
      en: 'Landing pages, basic SEO, campaign creative, and conversion structure.',
      ar: 'صفحات هبوط، سيو أساسي، إبداع حملات، وبنية تحويل.',
    },
  },
  {
    icon: 'automation',
    title: { en: 'Digital Operations', ar: 'العمليات الرقمية' },
    desc: {
      en: 'Digital operations support, handoff structure, forms, and light measurement setup.',
      ar: 'دعم عمليات رقمية، بنية تسليم، نماذج، وإعداد قياس خفيف.',
    },
  },
];

/* ---------- Trust / positioning strip ---------- */
export const TRUST: Localized[] = [
  { en: 'Strategy-led', ar: 'استراتيجية أولاً' },
  { en: 'Design-focused', ar: 'تصميم مدروس' },
  { en: 'Growth-driven', ar: 'نمو فعلي' },
  { en: 'Bilingual-ready', ar: 'جاهزية عربية وإنجليزية' },
];

/* ---------- Process ---------- */
export interface ProcessStep {
  num: string;
  icon: IconName;
  title: Localized;
  desc: Localized;
}

export const PROCESS: ProcessStep[] = [
  {
    num: '01',
    icon: 'discover',
    title: { en: 'Audit', ar: 'ندقق' },
    desc: {
      en: 'We study the brand, website, content, competitors, customer journey, and current lead flow.',
      ar: 'ندرس العلامة والموقع والمحتوى والمنافسين ورحلة العميل وتدفق الفرص الحالي.',
    },
  },
  {
    num: '02',
    icon: 'position',
    title: { en: 'Diagnose', ar: 'نشخّص' },
    desc: {
      en: 'We identify the real constraint: positioning, trust, conversion, traffic, follow-up, or measurement.',
      ar: 'نحدد العائق الحقيقي: التموضع، الثقة، التحويل، الزيارات، المتابعة، أو القياس.',
    },
  },
  {
    num: '03',
    icon: 'design',
    title: { en: 'Scope', ar: 'نحدد النطاق' },
    desc: {
      en: 'We shape a custom growth scope around the market, budget, urgency, and operational reality.',
      ar: 'نبني نطاق نمو مخصصاً حول السوق والميزانية والاستعجال والواقع التشغيلي.',
    },
  },
  {
    num: '04',
    icon: 'launch',
    title: { en: 'Build', ar: 'نبني' },
    desc: {
      en: 'We create the identity, website, landing pages, campaign creatives, content direction, basic SEO, and business materials.',
      ar: 'نصمم الهوية والموقع وصفحات الهبوط وإبداع الحملات وتوجيه المحتوى والسيو الأساسي ومواد التواصل المؤسسي.',
    },
  },
  {
    num: '05',
    icon: 'launch',
    title: { en: 'Launch', ar: 'نطلق' },
    desc: {
      en: 'We move the system live with clear approvals, assets, tracking, and customer-facing touchpoints.',
      ar: 'نطلق النظام بموافقات واضحة وأصول جاهزة وتتبع ونقاط تواصل مهيّأة للعميل.',
    },
  },
  {
    num: '06',
    icon: 'comms',
    title: { en: 'Connect', ar: 'نربط' },
    desc: {
      en: 'We organize the contact paths, forms, follow-up flow, communication materials, and handoff points.',
      ar: 'ننظّم مسارات التواصل والنماذج وتدفق المتابعة ومواد الاتصال ونقاط التسليم.',
    },
  },
  {
    num: '07',
    icon: 'analytics',
    title: { en: 'Measure', ar: 'نقيس' },
    desc: {
      en: 'We read performance through real numbers, not impressions that cannot guide a decision.',
      ar: 'نقرأ الأداء عبر أرقام حقيقية، لا عبر انطباعات لا تقود إلى قرار.',
    },
  },
  {
    num: '08',
    icon: 'performance',
    title: { en: 'Optimize', ar: 'نحسّن' },
    desc: {
      en: 'We refine the message, journey, creative, page structure, and contact path so the system compounds.',
      ar: 'نحسّن الرسالة والرحلة والإبداع وبنية الصفحة ومسار التواصل ليصبح النظام تراكمياً.',
    },
  },
];

/* ---------- Featured value cards ---------- */
export interface ValueCard {
  icon: IconName;
  title: Localized;
  desc: Localized;
}

export const VALUE_CARDS: ValueCard[] = [
  {
    icon: 'clarity',
    title: { en: 'Brand clarity', ar: 'وضوح العلامة' },
    desc: {
      en: 'A sharp identity and message, so the market understands you instantly.',
      ar: 'هوية ورسالة واضحتان، ليفهمك السوق من النظرة الأولى.',
    },
  },
  {
    icon: 'presence',
    title: { en: 'Digital presence', ar: 'حضور رقمي' },
    desc: {
      en: 'Websites and channels that look premium and work flawlessly everywhere.',
      ar: 'مواقع وقنوات تبدو راقية وتعمل بسلاسة في كل مكان.',
    },
  },
  {
    icon: 'performance',
    title: { en: 'Campaign clarity', ar: 'وضوح الحملات' },
    desc: {
      en: 'Creative angles, pages, and messages shaped to make the next action clear.',
      ar: 'زوايا إبداعية وصفحات ورسائل مصممة لتجعل الخطوة التالية واضحة.',
    },
  },
];

/* ---------- Blog ---------- */
export type BlogBlock =
  | { kind: 'p'; text: Localized }
  | { kind: 'h2'; text: Localized }
  | { kind: 'quote'; text: Localized }
  | { kind: 'list'; items: Localized[] };

export interface BlogPost {
  slug: string;
  category: Localized;
  categoryId: string;
  date: string;
  readTime: number;
  image: string;
  title: Localized;
  excerpt: Localized;
  body: BlogBlock[];
}

export const BLOG_CATEGORIES: { id: string; label: Localized }[] = [
  { id: 'strategy', label: { en: 'Marketing Strategy', ar: 'استراتيجية التسويق' } },
  { id: 'branding', label: { en: 'Branding', ar: 'الهوية' } },
  { id: 'uiux', label: { en: 'UI/UX', ar: 'واجهات الاستخدام' } },
  { id: 'performance', label: { en: 'Performance', ar: 'الأداء' } },
  { id: 'growth', label: { en: 'Business Growth', ar: 'نمو الأعمال' } },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'premium-branding-builds-trust',
    categoryId: 'branding',
    category: { en: 'Branding', ar: 'الهوية' },
    date: '2026-05-18',
    readTime: 6,
    image: '/img/art-branding.jpg',
    title: {
      en: 'How Premium Branding Builds Trust Before the First Click',
      ar: 'كيف تبني الهوية الراقية الثقة قبل النقرة الأولى',
    },
    excerpt: {
      en: 'Trust is decided in milliseconds. Here is how a considered brand earns it before a single word is read.',
      ar: 'تُحسم الثقة في أجزاء من الثانية. إليك كيف تكسبها العلامة المدروسة قبل قراءة كلمة واحدة.',
    },
    body: [
      {
        kind: 'p',
        text: {
          en: 'Before a visitor reads a single word of your headline, they have already formed an opinion. In roughly fifty milliseconds the brain registers color, contrast, spacing, and rhythm, and quietly decides whether this looks like a business worth taking seriously. Premium branding is not decoration applied at the end of a project. It is the fastest, most honest signal of competence you will ever send.',
          ar: 'قبل أن يقرأ الزائر كلمة واحدة من عنوانك، يكون قد كوّن رأياً بالفعل. في خمسين جزءاً من الثانية تقريباً، يلتقط العقل اللون والتباين والمسافات والإيقاع، ويقرّر بهدوء ما إذا كان هذا عملاً يستحق أن يُؤخذ على محمل الجد. الهوية الراقية ليست زينة تُضاف في نهاية المشروع، بل أسرع وأصدق إشارة كفاءة سترسلها على الإطلاق.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'The first impression is a calculation, not a feeling',
          ar: 'الانطباع الأول حساب لا شعور',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'We like to believe trust is earned slowly, through evidence and reputation. In practice, the first judgment is almost instant and largely visual. A cramped layout, a clashing palette, or a tired stock photo tells the visitor that the details were not cared for here — and if the details were neglected on the front door, why would they be respected in the work itself? A calm, deliberate design says the opposite before you have made a single claim.',
          ar: 'نحبّ أن نظنّ أن الثقة تُكتسب ببطء، عبر الأدلة والسمعة. لكن في الواقع، يكون الحكم الأول فورياً تقريباً وبصرياً في معظمه. التصميم المزدحم، أو الألوان المتنافرة، أو الصورة الجاهزة المستهلكة، كلها تخبر الزائر أن التفاصيل لم تَلْقَ عناية هنا — وإن أُهملت عند الباب الأول، فلماذا يُفترض احترامها في العمل نفسه؟ أما التصميم الهادئ المدروس فيقول العكس قبل أن تطرح ادّعاءً واحداً.',
        },
      },
      {
        kind: 'quote',
        text: {
          en: 'People rarely buy the best option. They buy the one they can trust the fastest.',
          ar: 'نادراً ما يشتري الناس الخيار الأفضل. بل يشترون الخيار الذي يثقون به أسرع.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Consistency is the quiet form of luxury',
          ar: 'التناسق هو الشكل الهادئ للرفاهية',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'A brand earns confidence by being the same assured voice everywhere it appears. When the website, the advertisement, the invoice, and the direct message all feel as though they come from one hand, the mind reads that coherence as reliability. Inconsistency does the reverse: every mismatched touchpoint plants a small, unspoken doubt that the visitor cannot quite name but always feels.',
          ar: 'تكسب العلامة الثقة بأن تكون الصوت الواثق نفسه أينما ظهرت. فحين يبدو الموقع والإعلان والفاتورة والرسالة المباشرة وكأنها صادرة من يدٍ واحدة، يقرأ العقل هذا الانسجام كموثوقية. أما التضارب فيفعل العكس: كل نقطة تواصل غير متناغمة تزرع شكّاً صغيراً صامتاً لا يستطيع الزائر تسميته لكنه يشعر به دائماً.',
        },
      },
      {
        kind: 'list',
        items: [
          { en: 'One logo, used the same way in every context.', ar: 'شعار واحد، يُستخدم بالطريقة نفسها في كل سياق.' },
          { en: 'A restrained palette and a clear typographic hierarchy.', ar: 'لوحة ألوان منضبطة وتسلسل واضح للخطوط.' },
          { en: 'Photography and graphics held to a single treatment.', ar: 'صور ورسومات تخضع لمعالجة بصرية واحدة.' },
          { en: 'A tone of voice that always sounds like the same person.', ar: 'نبرة صوت تبدو دائماً وكأنها الشخص نفسه.' },
        ],
      },
      {
        kind: 'p',
        text: {
          en: 'The goal is not to look expensive for its own sake. It is to look intentional. Intent is the difference between a brand people trust at a glance and one they scroll past without noticing. Make the fundamentals consistent, hold the standard on every surface, and trust will arrive long before the first click.',
          ar: 'الهدف ليس أن تبدو باهظاً لذاته، بل أن تبدو مقصوداً. النية هي الفارق بين علامة يثق بها الناس من نظرة، وأخرى يتجاوزونها دون أن يلحظوها. اجعل الأساسيات متناسقة، والتزم بالمعيار على كل سطح، وستصل الثقة قبل النقرة الأولى بكثير.',
        },
      },
    ],
  },
  {
    slug: 'why-landing-pages-fail',
    categoryId: 'performance',
    category: { en: 'Performance', ar: 'الأداء' },
    date: '2026-04-29',
    readTime: 7,
    image: '/img/art-performance.jpg',
    title: {
      en: 'Why Landing Pages Fail — and How to Fix Them',
      ar: 'لماذا تفشل صفحات الهبوط وكيف نصلحها',
    },
    excerpt: {
      en: 'Most landing pages fail for the same three reasons. Each one is fixable in an afternoon.',
      ar: 'تفشل معظم صفحات الهبوط للأسباب الثلاثة نفسها، وكلٌّ منها قابل للإصلاح في ساعات.',
    },
    body: [
      {
        kind: 'p',
        text: {
          en: 'A landing page has exactly one job: move one visitor toward one action. Most pages fail because they quietly try to do five jobs at once — explain the company, list every feature, please the founder, satisfy the legal team, and close the sale. Clarity of purpose beats volume of content every single time.',
          ar: 'لصفحة الهبوط مهمة واحدة بالضبط: دفع زائر واحد نحو فعل واحد. تفشل معظم الصفحات لأنها تحاول بهدوء أداء خمس مهام دفعة واحدة — تشرح الشركة، تعدّد كل ميزة، تُرضي المؤسّس، تُطمئن الفريق القانوني، وتُغلق البيع. وضوح الهدف يتفوّق على كثرة المحتوى في كل مرة.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Failure one: a first screen that says nothing',
          ar: 'الفشل الأول: شاشة أولى لا تقول شيئاً',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'If the headline does not state the value and the offer within a few seconds, the visitor leaves — and they leave silently, without ever telling you why. Lead with the outcome, not the mechanism. People do not want a platform; they want the result the platform gives them. Name that result in plain language and put it where the eye lands first.',
          ar: 'إن لم يوضّح العنوان القيمة والعرض خلال ثوانٍ قليلة، يغادر الزائر — ويغادر بصمت، دون أن يخبرك بالسبب أبداً. ابدأ بالنتيجة لا بالأداة. الناس لا يريدون منصّة، بل يريدون النتيجة التي تمنحها المنصّة. سمِّ تلك النتيجة بلغة واضحة، وضعها حيث تقع العين أولاً.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Failure two: friction the visitor can feel',
          ar: 'الفشل الثاني: احتكاك يشعر به الزائر',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Every extra field, every unnecessary choice, and every unanswered doubt adds weight to the decision. A form that asks for ten things to deliver one thing will lose most of the people who were ready to say yes. Remove a step, soften the commitment, and add proof exactly where hesitation appears — a testimonial beside the button does more than a paragraph above it.',
          ar: 'كل حقل إضافي، وكل خيار غير ضروري، وكل شكٍّ بلا إجابة، يضيف ثقلاً إلى القرار. النموذج الذي يطلب عشرة أشياء ليمنح شيئاً واحداً سيخسر معظم من كانوا مستعدّين للموافقة. احذف خطوة، خفّف الالتزام، وأضِف الدليل في موضع التردّد بالضبط — شهادة عميل بجانب الزر تفعل أكثر مما تفعله فقرة فوقه.',
        },
      },
      {
        kind: 'quote',
        text: {
          en: 'Conversion is rarely won by adding the perfect word. It is won by removing the reasons to leave.',
          ar: 'نادراً ما يُكسب التحويل بإضافة الكلمة المثالية، بل يُكسب بإزالة أسباب المغادرة.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'A short checklist before you publish',
          ar: 'قائمة قصيرة قبل النشر',
        },
      },
      {
        kind: 'list',
        items: [
          { en: 'One page, one goal, one primary button repeated down the page.', ar: 'صفحة واحدة، هدف واحد، زر رئيسي واحد يتكرّر عبر الصفحة.' },
          { en: 'The offer is clear above the fold, on a phone, in five seconds.', ar: 'العرض واضح في أعلى الصفحة، على الهاتف، خلال خمس ثوانٍ.' },
          { en: 'Every claim is backed by proof placed right next to it.', ar: 'كل ادّعاء مدعوم بدليل موضوع بجانبه مباشرة.' },
          { en: 'The form asks for the minimum, and nothing more.', ar: 'النموذج يطلب الحدّ الأدنى، ولا شيء أكثر.' },
        ],
      },
      {
        kind: 'p',
        text: {
          en: 'None of these fixes require a redesign or a bigger budget. They require the discipline to cut. Decide on the single action you want, then remove everything on the page that does not move the visitor toward it. Small reductions in friction produce large, durable gains in conversion.',
          ar: 'لا يتطلّب أيٌّ من هذه الإصلاحات إعادة تصميم أو ميزانية أكبر، بل يتطلّب انضباط الحذف. حدِّد الفعل الوحيد الذي تريده، ثم أزِل من الصفحة كل ما لا يدفع الزائر نحوه. تقليل الاحتكاك البسيط يحقّق مكاسب كبيرة ودائمة في التحويل.',
        },
      },
    ],
  },
  {
    slug: 'role-of-uiux-in-marketing-performance',
    categoryId: 'uiux',
    category: { en: 'UI/UX', ar: 'واجهات الاستخدام' },
    date: '2026-04-10',
    readTime: 6,
    image: '/img/art-uiux.jpg',
    title: {
      en: 'The Role of UI/UX in Marketing Performance',
      ar: 'دور واجهات الاستخدام في أداء التسويق',
    },
    excerpt: {
      en: 'Great marketing brings people to the door. UI/UX decides whether they walk through it.',
      ar: 'التسويق الجيد يجلب الناس إلى الباب، وواجهة الاستخدام تقرّر إن كانوا سيدخلون.',
    },
    body: [
      {
        kind: 'p',
        text: {
          en: 'Marketing and product are usually run by separate teams, measured by separate numbers, and discussed in separate meetings. The customer, however, experiences them as a single thing. A brilliant campaign that lands on a confusing page is a campaign quietly wasting its own budget — the click was earned, and then thrown away at the threshold.',
          ar: 'عادةً ما يُدار التسويق والمنتج بفريقين منفصلين، ويُقاسان بأرقام منفصلة، ويُناقشان في اجتماعات منفصلة. لكن العميل يعيشهما كشيء واحد. الحملة الرائعة التي تصل إلى صفحة مربكة هي حملة تهدر ميزانيتها بهدوء — دُفع ثمن النقرة، ثم أُلقيت عند العتبة.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Good UX shortens the distance between intent and action',
          ar: 'تجربة الاستخدام الجيدة تقصّر المسافة بين النية والفعل',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Every visitor arrives with a small amount of motivation and a smaller amount of patience. Each moment of confusion — an unclear label, a slow screen, an unexpected step — spends a little of both. Clear hierarchy, honest copy, and fast, predictable interactions protect that motivation and carry it all the way to the action. Design is not how it looks; it is how little it costs the user to decide.',
          ar: 'يصل كل زائر بقدر صغير من الدافع، وبقدر أصغر من الصبر. وكل لحظة التباس — تسمية غامضة، شاشة بطيئة، خطوة غير متوقّعة — تستهلك شيئاً من الاثنين. التسلسل الواضح، والنص الصادق، والتفاعلات السريعة المتوقّعة، تحمي ذلك الدافع وتحمله حتى الفعل. التصميم ليس كيف يبدو، بل كم يكلّف المستخدم ليقرّر.',
        },
      },
      {
        kind: 'quote',
        text: {
          en: 'Users do not read pages; they scan for the next obvious step. Your job is to make it obvious.',
          ar: 'المستخدمون لا يقرؤون الصفحات، بل يمسحونها بحثاً عن الخطوة التالية الواضحة. ومهمّتك أن تجعلها واضحة.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Treat every screen as part of the funnel',
          ar: 'تعامل مع كل شاشة كجزء من المسار',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The homepage, the pricing table, the sign-up form, and the empty state of the product are all marketing surfaces, whether or not the marketing team owns them. When design and marketing share one goal and one definition of success, the experience stops fighting itself. The ad, the page, and the product begin to tell the same story, and performance follows almost as a side effect.',
          ar: 'الصفحة الرئيسية، وجدول الأسعار، ونموذج التسجيل، وحتى الحالة الفارغة داخل المنتج، كلها أسطح تسويقية، سواء امتلكها فريق التسويق أم لا. وعندما يتشارك التصميم والتسويق هدفاً واحداً وتعريفاً واحداً للنجاح، تتوقّف التجربة عن محاربة نفسها. عندها يبدأ الإعلان والصفحة والمنتج برواية القصة نفسها، ويأتي الأداء كأثرٍ جانبيٍّ تقريباً.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'So before spending more on traffic, walk your own funnel as a stranger would. Where do you hesitate? Where do you have to think? Each of those moments is a leak, and fixing leaks is almost always cheaper than buying more water.',
          ar: 'لذا قبل أن تنفق أكثر على الزيارات، اسلك مسارك بنفسك كما يسلكه غريب. أين تتردّد؟ وأين تضطرّ للتفكير؟ كل لحظة من هذه تسريب، وإصلاح التسريبات أرخص دائماً تقريباً من شراء المزيد من الماء.',
        },
      },
    ],
  },
  {
    slug: 'positioning-before-promotion',
    categoryId: 'strategy',
    category: { en: 'Marketing Strategy', ar: 'استراتيجية التسويق' },
    date: '2026-03-22',
    readTime: 7,
    image: '/img/art-strategy.jpg',
    title: {
      en: 'Positioning Before Promotion: The Strategy Most Brands Skip',
      ar: 'الموقع قبل الترويج: الاستراتيجية التي تتجاوزها معظم العلامات',
    },
    excerpt: {
      en: 'You cannot promote your way out of a positioning problem. Start with where you stand.',
      ar: 'لا يمكنك أن تروّج لتهرب من مشكلة في الموقع. ابدأ من حيث تقف.',
    },
    body: [
      {
        kind: 'p',
        text: {
          en: 'Promotion is an amplifier. It takes whatever message you already have and makes it louder. If the positioning underneath is sharp, spending more makes the brand clearer and stronger. If the positioning is vague, spending more simply makes the confusion travel further and faster. This is why so many well-funded campaigns produce noise instead of growth.',
          ar: 'الترويج مكبّر صوت. يأخذ الرسالة التي تملكها أصلاً ويجعلها أعلى. فإن كان الموقع تحتها حاداً، جعل الإنفاق الأكبر العلامة أوضح وأقوى. وإن كان الموقع غامضاً، جعل الإنفاق الأكبر الالتباس يسافر أبعد وأسرع فحسب. لهذا تُنتج حملات كثيرة جيّدة التمويل ضجيجاً بدل النمو.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Positioning answers three uncomfortable questions',
          ar: 'الموقع يجيب عن ثلاثة أسئلة غير مريحة',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Strong positioning is not a slogan. It is a clear, defensible answer to three questions that most teams would rather avoid. Who, precisely, is this for — and who is it not for? What does it replace in their life or their stack? And why is it meaningfully better for those specific people, in a way a competitor cannot simply copy into a feature list?',
          ar: 'الموقع القوي ليس شعاراً، بل إجابة واضحة وقابلة للدفاع عن ثلاثة أسئلة يفضّل معظم الفرق تجنّبها. لمن هذا تحديداً — ولمن ليس؟ وما الذي يحلّ محلّه في حياتهم أو في أدواتهم؟ ولماذا هو أفضل بشكل حقيقي لهؤلاء الأشخاص تحديداً، بطريقة لا يستطيع منافس أن ينسخها ببساطة إلى قائمة ميزات؟',
        },
      },
      {
        kind: 'list',
        items: [
          { en: 'Who it is for — stated narrowly enough to exclude someone.', ar: 'لمن هو — محدّد بدقّة كافية لاستبعاد أحدهم.' },
          { en: 'What it replaces — the real alternative, including doing nothing.', ar: 'ما الذي يحلّ محلّه — البديل الحقيقي، بما في ذلك ألّا تفعل شيئاً.' },
          { en: 'Why it is better for them — a reason a rival cannot copy overnight.', ar: 'لماذا هو أفضل لهم — سبب لا يستطيع المنافس نسخه بين ليلة وضحاها.' },
        ],
      },
      {
        kind: 'quote',
        text: {
          en: 'When positioning is right, the marketing almost writes itself. When it is wrong, no budget is large enough to hide it.',
          ar: 'حين يكون الموقع صحيحاً، يكتب التسويق نفسه تقريباً. وحين يكون خاطئاً، لا توجد ميزانية كبيرة بما يكفي لإخفائه.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'The one-sentence test',
          ar: 'اختبار الجملة الواحدة',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Before the next campaign, try to write your position in a single, specific sentence that a customer would actually recognize as true. If it takes a paragraph, or if it could describe three of your competitors equally well, you have not found your position yet — you have found the real work. That work is unglamorous and easy to postpone, but it is the highest-leverage hour your marketing will spend all quarter.',
          ar: 'قبل الحملة القادمة، حاول أن تكتب موقعك في جملة واحدة محدّدة يعترف بها العميل فعلاً كحقيقة. فإن احتجت فقرة، أو إن كانت الجملة تصف ثلاثة من منافسيك بالقدر نفسه، فأنت لم تجد موقعك بعد — بل وجدت العمل الحقيقي. هذا العمل غير برّاق ويسهل تأجيله، لكنه أعلى ساعة قيمةً سينفقها تسويقك طوال الربع.',
        },
      },
    ],
  },
  {
    slug: 'systems-that-scale-growth',
    categoryId: 'growth',
    category: { en: 'Business Growth', ar: 'نمو الأعمال' },
    date: '2026-03-05',
    readTime: 6,
    image: '/img/art-growth.jpg',
    title: {
      en: 'Building Marketing Systems That Scale With You',
      ar: 'بناء أنظمة تسويق تنمو معك',
    },
    excerpt: {
      en: 'Campaigns end. Systems compound. Here is how to build marketing that keeps working.',
      ar: 'الحملات تنتهي، أما الأنظمة فتتراكم. إليك كيف تبني تسويقاً يستمر في العمل.',
    },
    body: [
      {
        kind: 'p',
        text: {
          en: 'A campaign is a sprint; a system is an engine. Sprints are exciting and visible, which is why teams keep reaching for them — but the brands that grow steadily are usually built on quieter foundations: clearer positioning, stronger pages, consistent content, useful creative, and simple feedback loops that keep the work improving after launch.',
          ar: 'الحملة سباق قصير، أما النظام فمحرّك. السباقات مثيرة وظاهرة، ولهذا تظل الفرق تلجأ إليها — لكن العلامات التي تنمو بثبات تُبنى غالباً على أسس أهدأ: تموضع أوضح، صفحات أقوى، محتوى متسق، إبداع مفيد، وحلقات ملاحظات بسيطة تجعل العمل يتحسن بعد الإطلاق.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Start smaller than feels comfortable',
          ar: 'ابدأ أصغر مما يبدو مريحاً',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The instinct is to build everything at once: every channel, every funnel, every dashboard. The discipline is to begin with one channel, one clear metric, and one feedback loop you can actually watch. A small system that runs every week beats an ambitious system that never quite launches. Once the loop is turning and you trust the numbers, you have something real to scale.',
          ar: 'الغريزة أن تبني كل شيء دفعة واحدة: كل قناة، كل مسار، كل لوحة بيانات. أما الانضباط فأن تبدأ بقناة واحدة، ومقياس واضح واحد، وحلقة تغذية راجعة واحدة تستطيع مراقبتها فعلاً. نظام صغير يعمل كل أسبوع يتفوّق على نظام طموح لا يُطلق أبداً. وحين تدور الحلقة وتثق بالأرقام، يصبح لديك شيء حقيقي تتوسّع به.',
        },
      },
      {
        kind: 'quote',
        text: {
          en: 'Document what works while it is still small. A process you can hand to someone else is an asset; a habit in one person’s head is a risk.',
          ar: 'وثّق ما ينجح وهو لا يزال صغيراً. فالعملية التي تستطيع تسليمها لشخص آخر أصلٌ، أما العادة الحبيسة في رأس شخص واحد فمخاطرة.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Systems free people to do the human work',
          ar: 'الأنظمة تحرّر الناس للعمل الإنساني',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'There is a quiet benefit teams underestimate: when the routine runs itself, attention is freed for the work only people can do. Strategy, taste, judgment, and the occasional bold idea need room to breathe, and they rarely get it when everyone is firefighting the same manual tasks each week. Build the system not to remove the humans, but to point them at what actually moves the brand forward.',
          ar: 'ثمّة فائدة هادئة تستهين بها الفرق: حين يدير الروتين نفسه، يتحرّر الانتباه للعمل الذي لا يقدر عليه سوى البشر. الاستراتيجية، والذوق، والحكم، والفكرة الجريئة بين حين وآخر، تحتاج مساحة لتتنفّس، ونادراً ما تحصل عليها حين يطفئ الجميع الحرائق نفسها كل أسبوع. ابنِ النظام لا لتزيل البشر، بل لتوجّههم نحو ما يدفع العلامة فعلاً إلى الأمام.',
        },
      },
    ],
  },
  {
    slug: 'creative-that-converts',
    categoryId: 'performance',
    category: { en: 'Performance', ar: 'الأداء' },
    date: '2026-02-14',
    readTime: 5,
    image: '/img/art-creative.jpg',
    title: {
      en: 'Creative That Converts: Beauty With a Job to Do',
      ar: 'إبداع يحقّق النتائج: جمالٌ له مهمّة',
    },
    excerpt: {
      en: 'Beautiful creative is not enough. The best work is beautiful and built to perform.',
      ar: 'الإبداع الجميل وحده لا يكفي. أفضل الأعمال جميلة ومصممة للأداء معاً.',
    },
    body: [
      {
        kind: 'p',
        text: {
          en: 'There is an old, false argument that creative is either beautiful or effective — that you must choose between the work that wins awards and the work that wins customers. The strongest creative refuses the choice. Aesthetics earn the attention; clarity earns the action. A piece that does only one of those is half a tool.',
          ar: 'ثمّة جدل قديم زائف يقول إن الإبداع إمّا جميل وإمّا فعّال — وكأن عليك أن تختار بين عمل يفوز بالجوائز وعمل يفوز بالعملاء. أقوى الأعمال ترفض هذا الاختيار. الجماليات تكسب الانتباه، والوضوح يكسب الفعل. والعمل الذي يفعل واحداً منهما فقط هو نصف أداة.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Test the message before the medium',
          ar: 'اختبر الرسالة قبل الوسيلة',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'It is tempting to start with the visual — the palette, the motion, the polish. But a clear idea in a plain layout will out-perform a vague idea in a stunning one, almost every time. Find the sentence that makes a stranger lean in, then dress it. When you reverse the order, you spend your budget making a weak message look expensive.',
          ar: 'من المغري أن تبدأ بالبصري — اللوحة، الحركة، الصقل. لكن فكرة واضحة في تصميم بسيط ستتفوّق على فكرة غامضة في تصميم باهر، في كل مرة تقريباً. ابحث عن الجملة التي تجعل غريباً يقترب، ثم ألبسها. وحين تعكس الترتيب، تنفق ميزانيتك في جعل رسالة ضعيفة تبدو باهظة.',
        },
      },
      {
        kind: 'quote',
        text: {
          en: 'Make it clear, then make it beautiful. Never the other way around.',
          ar: 'اجعله واضحاً، ثم اجعله جميلاً. ولا تعكس الترتيب أبداً.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Then let real numbers settle the debate. Ship two honest variations, watch how strangers actually respond, and keep the winner. Taste tells you where to start; data tells you where to stay. The best creative teams hold both without flinching — they are proud of the craft and ruthless about the result.',
          ar: 'ثم دع الأرقام الحقيقية تحسم الجدل. أطلق نسختين صادقتين، راقب كيف يتفاعل الغرباء فعلاً، واحتفظ بالفائزة. الذوق يخبرك من أين تبدأ، والبيانات تخبرك أين تبقى. أفضل الفرق الإبداعية تحمل الاثنين دون تردّد — فخورة بالحرفة، وصارمة تجاه النتيجة.',
        },
      },
    ],
  },
  {
    slug: 'what-makes-a-website-feel-expensive',
    categoryId: 'uiux',
    category: { en: 'UI/UX', ar: 'واجهات الاستخدام' },
    date: '2026-01-28',
    readTime: 6,
    image: '/img/art-craft.jpg',
    title: {
      en: 'What Actually Makes a Website Feel Expensive',
      ar: 'ما الذي يجعل الموقع يبدو فاخراً فعلاً',
    },
    excerpt: {
      en: 'It is rarely the budget. Premium is a set of small, deliberate decisions repeated everywhere.',
      ar: 'نادراً ما تكون الميزانية. الفخامة مجموعة قرارات صغيرة مقصودة تتكرّر في كل مكان.',
    },
    body: [
      {
        kind: 'p',
        text: {
          en: 'Clients often assume an expensive-looking website is the result of an expensive build. Usually it is something quieter: restraint, consistency, and an unreasonable amount of care given to details no one will consciously notice. Luxury online is not loud. It is the absence of small mistakes.',
          ar: 'كثيراً ما يفترض العملاء أن الموقع الفاخر المظهر نتيجة بناءٍ باهظ. لكنه غالباً شيء أهدأ: ضبط النفس، والتناسق، وقدر غير معقول من العناية بتفاصيل لن يلاحظها أحد بوعيه. الفخامة على الإنترنت ليست صاخبة، بل هي غياب الأخطاء الصغيرة.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Space, type, and a palette held with discipline',
          ar: 'مساحة، وخطوط، ولوحة ألوان محكومة بانضباط',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Generous whitespace signals confidence; a page that crowds every pixel signals anxiety. A short, well-chosen type scale reads as considered, while a dozen competing sizes read as accidental. And a tight palette — two or three colors used with conviction — almost always looks richer than a rainbow. Expensive is mostly what you choose to leave out.',
          ar: 'المساحة البيضاء السخيّة تشير إلى الثقة، والصفحة التي تزحم كل بكسل تشير إلى القلق. مقياس خطوط قصير ومختار بعناية يُقرأ كأنه مدروس، بينما تُقرأ عشرة أحجام متنافسة كأنها مصادفة. واللوحة المنضبطة — لونان أو ثلاثة تُستخدم بقناعة — تبدو دائماً أثرى من قوس قزح. الفخامة في معظمها هي ما تختار تركه.',
        },
      },
      {
        kind: 'list',
        items: [
          { en: 'Consistent spacing on a real grid, not eyeballed gaps.', ar: 'مسافات متناسقة على شبكة حقيقية، لا فراغات بالتقدير.' },
          { en: 'Motion that is smooth, brief, and never blocks the user.', ar: 'حركة سلسة وقصيرة لا تعيق المستخدم أبداً.' },
          { en: 'Images treated with one consistent grade, not a random mix.', ar: 'صور بمعالجة واحدة متناسقة، لا خليط عشوائي.' },
          { en: 'Text that is large enough to respect the reader.', ar: 'نص كبير بما يكفي ليحترم القارئ.' },
        ],
      },
      {
        kind: 'quote',
        text: {
          en: 'Cheap is a hundred tiny inconsistencies. Expensive is the same good decision, made everywhere.',
          ar: 'الرخص مئة تضارب صغير. والفخامة هي القرار الجيّد نفسه، مُتّخذاً في كل مكان.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Performance is part of the aesthetic',
          ar: 'الأداء جزء من الجمال',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'A beautiful page that loads slowly or stutters on a phone does not feel premium; it feels broken. Speed, stability, and responsiveness are not engineering concerns separate from design — they are how the design is actually experienced. The most refined visual choices in the world cannot survive a layout that jumps while it loads.',
          ar: 'الصفحة الجميلة التي تُحمَّل ببطء أو تتلعثم على الهاتف لا تبدو راقية، بل تبدو معطّلة. السرعة، والثبات، والاستجابة، ليست هموماً هندسية منفصلة عن التصميم — بل هي الطريقة التي يُختبَر بها التصميم فعلاً. وأرقى الخيارات البصرية في العالم لا تنجو من تخطيط يقفز أثناء تحميله.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'So if you want a site that feels expensive, do not start by adding. Start by aligning, removing, and slowing down enough to get the details right. The polish people admire is almost always the visible surface of invisible discipline.',
          ar: 'لذا إن أردت موقعاً يبدو فاخراً، فلا تبدأ بالإضافة. ابدأ بالمحاذاة، والحذف، والتمهّل بما يكفي لإتقان التفاصيل. فالصقل الذي يُعجب الناس هو، في الغالب، السطح المرئي لانضباط غير مرئي.',
        },
      },
    ],
  },
  {
    slug: 'measure-what-matters',
    categoryId: 'growth',
    category: { en: 'Business Growth', ar: 'نمو الأعمال' },
    date: '2026-01-12',
    readTime: 6,
    image: '/img/art-measure.jpg',
    title: {
      en: 'Measure What Matters: Metrics That Actually Move a Business',
      ar: 'قِس ما يهمّ: مقاييس تحرّك العمل فعلاً',
    },
    excerpt: {
      en: 'Most dashboards measure motion, not progress. A few honest numbers beat a hundred vanity ones.',
      ar: 'تقيس معظم لوحات البيانات الحركة لا التقدّم. أرقام صادقة قليلة تتفوّق على مئة رقم شكلي.',
    },
    body: [
      {
        kind: 'p',
        text: {
          en: 'It has never been easier to collect data, and rarely harder to know what any of it means. Teams open a dashboard with forty metrics and leave it feeling busy but no wiser. The problem is not too little measurement; it is measuring motion instead of progress, and confusing what is easy to count with what is worth counting.',
          ar: 'لم يكن جمع البيانات أسهل مما هو اليوم، ونادراً ما كان أصعب أن تعرف معنى أيٍّ منها. يفتح الفريق لوحة بيانات بأربعين مقياساً، ويغادرها وقد شعر بالانشغال لا بالحكمة. المشكلة ليست قلّة القياس، بل قياس الحركة بدل التقدّم، والخلط بين ما يسهل عدّه وما يستحقّ العدّ.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Vanity metrics feel good and decide nothing',
          ar: 'المقاييس الشكلية تُشعرك بالرضا ولا تقرّر شيئاً',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Impressions, followers, and raw page views are comfortable because they almost always go up and rarely demand a decision. A useful metric is different: it is tied to a real outcome, and it can credibly go down. If a number cannot change what you do next week, it is decoration on a report, not an instrument for steering the business.',
          ar: 'الانطباعات، والمتابعون، ومشاهدات الصفحة الخام، أرقام مريحة لأنها تصعد دائماً تقريباً ونادراً ما تطلب قراراً. أما المقياس المفيد فمختلف: مرتبط بنتيجة حقيقية، ويمكن أن يهبط فعلاً. فإن كان رقمٌ لا يستطيع تغيير ما ستفعله الأسبوع القادم، فهو زينة على تقرير، لا أداة لقيادة العمل.',
        },
      },
      {
        kind: 'quote',
        text: {
          en: 'If a number cannot change a decision, it is not a metric. It is a comfort.',
          ar: 'إن كان رقمٌ لا يستطيع تغيير قرار، فهو ليس مقياساً، بل تطمين.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Build the smallest scoreboard you will actually use',
          ar: 'ابنِ أصغر لوحة نتائج ستستخدمها فعلاً',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Pick a handful of numbers that connect effort to money and momentum, and protect that list from growing out of habit. For most brands a short scoreboard is enough to run the week with clarity:',
          ar: 'اختر حفنة من الأرقام التي تربط الجهد بالمال والزخم، واحمِ تلك القائمة من التضخّم بحكم العادة. بالنسبة لمعظم العلامات، تكفي لوحة نتائج قصيرة لإدارة الأسبوع بوضوح:',
        },
      },
      {
        kind: 'list',
        items: [
          { en: 'Cost to acquire a customer, against what that customer is worth.', ar: 'تكلفة اكتساب العميل، مقابل قيمة ذلك العميل.' },
          { en: 'Conversion rate at the one step that matters most right now.', ar: 'معدّل التحويل عند الخطوة الأهمّ في هذه اللحظة.' },
          { en: 'Retention or repeat rate — proof the value is real, not one-time.', ar: 'معدّل البقاء أو التكرار — دليل أن القيمة حقيقية لا لمرّة واحدة.' },
          { en: 'One leading signal that tells you where next month is heading.', ar: 'إشارة استباقية واحدة تخبرك إلى أين يتّجه الشهر القادم.' },
        ],
      },
      {
        kind: 'p',
        text: {
          en: 'Review the same short list on the same rhythm, and resist the urge to add a metric every time something feels uncertain. Clarity comes from looking at a few honest numbers often, not from looking at many numbers once. The business does not need a bigger dashboard; it needs a braver one.',
          ar: 'راجع القائمة القصيرة نفسها على الإيقاع نفسه، وقاوم الرغبة في إضافة مقياس كلّما شعرت بعدم اليقين. الوضوح يأتي من النظر إلى أرقام صادقة قليلة كثيراً، لا من النظر إلى أرقام كثيرة مرّة. العمل لا يحتاج لوحة بيانات أكبر، بل لوحة أشجع.',
        },
      },
    ],
  },
];

/* ---------- Contact form options ---------- */
export const BUDGET_RANGES: { id: string; label: Localized }[] = [
  { id: 'under-500', label: { en: 'Under $500', ar: 'أقل من 500$' } },
  { id: '500-1500', label: { en: '$500 – $1,500', ar: '500$ – 1,500$' } },
  { id: '1500-3000', label: { en: '$1,500 – $3,000', ar: '1,500$ – 3,000$' } },
  { id: '3000-7000', label: { en: '$3,000 – $7,000', ar: '3,000$ – 7,000$' } },
  { id: '7000-plus', label: { en: '$7,000+', ar: 'أكثر من 7,000$' } },
  { id: 'not-sure', label: { en: 'Not sure yet', ar: 'غير محدّد بعد' } },
];

export const MARKET_OPTIONS: { id: string; label: Localized }[] = [
  { id: 'saudi-arabia', label: { en: 'Saudi Arabia', ar: 'السعودية' } },
  { id: 'uae', label: { en: 'United Arab Emirates', ar: 'الإمارات' } },
  { id: 'qatar', label: { en: 'Qatar', ar: 'قطر' } },
  { id: 'kuwait', label: { en: 'Kuwait', ar: 'الكويت' } },
  { id: 'bahrain', label: { en: 'Bahrain', ar: 'البحرين' } },
  { id: 'oman', label: { en: 'Oman', ar: 'عُمان' } },
  { id: 'mena', label: { en: 'MENA / other', ar: 'الشرق الأوسط / أخرى' } },
  { id: 'worldwide', label: { en: 'Worldwide remote', ar: 'عميل دولي عن بُعد' } },
];

export const INDUSTRY_OPTIONS: { id: string; label: Localized }[] = [
  { id: 'clinics-healthcare', label: { en: 'Clinics & healthcare', ar: 'العيادات والرعاية الصحية' } },
  { id: 'aesthetic-clinics', label: { en: 'Aesthetic clinics & medical centers', ar: 'عيادات التجميل والمراكز الطبية' } },
  { id: 'restaurants-cafes', label: { en: 'Restaurants & cafés', ar: 'المطاعم والمقاهي' } },
  { id: 'hospitality-venues', label: { en: 'Hospitality, hotels & venues', ar: 'الضيافة والفنادق والقاعات' } },
  { id: 'real-estate', label: { en: 'Real estate & developers', ar: 'العقارات والمطورون' } },
  { id: 'retail-fashion', label: { en: 'Retail, fashion & ecommerce', ar: 'التجزئة والأزياء والمتاجر الإلكترونية' } },
  { id: 'education-training', label: { en: 'Education & training institutions', ar: 'مؤسسات التعليم والتدريب' } },
  { id: 'interior-architecture-construction', label: { en: 'Interior, architecture & construction firms', ar: 'شركات التصميم الداخلي والعمارة والإنشاءات' } },
  { id: 'professional-services', label: { en: 'Professional service & B2B firms', ar: 'شركات الخدمات المهنية وB2B' } },
  { id: 'home-local-services', label: { en: 'Home services & local service companies', ar: 'خدمات المنازل والشركات المحلية' } },
  { id: 'automotive-mobility', label: { en: 'Automotive & mobility businesses', ar: 'السيارات والتنقل' } },
  { id: 'fitness-beauty-wellness', label: { en: 'Fitness, beauty & wellness centers', ar: 'مراكز اللياقة والجمال والعافية' } },
];

export const TIMELINE_OPTIONS: { id: string; label: Localized }[] = [
  { id: 'urgent', label: { en: 'Urgent / this month', ar: 'عاجل / هذا الشهر' } },
  { id: '1-3-months', label: { en: '1–3 months', ar: 'خلال 1–3 أشهر' } },
  { id: '3-6-months', label: { en: '3–6 months', ar: 'خلال 3–6 أشهر' } },
  { id: 'exploring', label: { en: 'Exploring options', ar: 'استكشاف الخيارات' } },
];

export const LANGUAGE_OPTIONS: { id: string; label: Localized }[] = [
  { id: 'english', label: { en: 'English', ar: 'الإنجليزية' } },
  { id: 'arabic', label: { en: 'Arabic', ar: 'العربية' } },
  { id: 'both', label: { en: 'English & Arabic', ar: 'العربية والإنجليزية' } },
];

export const CONTACT_METHOD_OPTIONS: { id: string; label: Localized }[] = [
  { id: 'email', label: { en: 'Email', ar: 'البريد الإلكتروني' } },
  { id: 'phone', label: { en: 'Phone call', ar: 'مكالمة هاتفية' } },
  { id: 'whatsapp', label: { en: 'WhatsApp message', ar: 'رسالة واتساب' } },
  { id: 'meeting', label: { en: 'Online meeting', ar: 'اجتماع أونلاين' } },
];

/* Contact + WhatsApp details (placeholders) */
export const CONTACT = {
  email: 'connect@veloura-marketing.com',
  whatsapp: '',
  whatsappDisplay: '',
};

export const SOCIALS: { id: string; label: string; href: string }[] = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/veloura.marketingco/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591287625583' },
  { id: 'pinterest', label: 'Pinterest', href: 'https://www.pinterest.com/velouramarketing' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/veloura-marketing/' },
];
