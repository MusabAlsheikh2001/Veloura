import { IconName } from './content';
import { Localized } from './i18n';

export interface FaqItem {
  q: Localized;
  a: Localized;
}

export interface ServicePage {
  id: string;
  slug: string;
  icon: IconName;
  title: Localized;
  h1: Localized;
  metaTitle: Localized;
  metaDesc: Localized;
  intro: Localized;
  audience: Localized[];
  problems: Localized[];
  deliverables: Localized[];
  process: Localized[];
  related: string[];
  faqs: FaqItem[];
}

export interface IndustryPage {
  id: string;
  slug: string;
  title: Localized;
  h1: Localized;
  metaTitle: Localized;
  metaDesc: Localized;
  intro: Localized;
  painPoints: Localized[];
  system: Localized[];
  services: string[];
  journey: Localized;
}

export interface LocationPage {
  id: string;
  slug: string;
  title: Localized;
  h1: Localized;
  metaTitle: Localized;
  metaDesc: Localized;
  intro: Localized;
  markets: Localized[];
  proof: Localized;
}

const commonServiceFaqs: FaqItem[] = [
  {
    q: {
      en: 'Do you sell fixed packages?',
      ar: 'هل تبيعون باقات ثابتة؟',
    },
    a: {
      en: 'No. Veloura starts with diagnosis, then builds a custom scope around the brand, market, budget, current assets, and growth priority.',
      ar: 'لا. تبدأ Veloura بالتشخيص، ثم تبني نطاقاً مخصصاً حول العلامة والسوق والميزانية والأصول الحالية وأولوية النمو.',
    },
  },
  {
    q: {
      en: 'Can this be delivered remotely across the Gulf?',
      ar: 'هل يمكن تنفيذ العمل عن بُعد في الخليج؟',
    },
    a: {
      en: 'Yes. Our delivery model is remote-first, using strategy sessions, shared workspaces, bilingual communication, and clear approval flows.',
      ar: 'نعم. نموذجنا مبني على التنفيذ عن بُعد عبر جلسات استراتيجية ومساحات عمل مشتركة وتواصل ثنائي اللغة ومسارات موافقة واضحة.',
    },
  },
];

export const SERVICE_PAGES: ServicePage[] = [
  {
    id: 'brand-identity',
    slug: 'brand-identity',
    icon: 'branding',
    title: { en: 'Brand Identity & Visual Systems', ar: 'الهوية والأنظمة البصرية' },
    h1: {
      en: 'Premium Brand Identity Design for Gulf and International Brands',
      ar: 'تصميم هوية بصرية فاخرة للعلامات في الخليج والعالم',
    },
    metaTitle: {
      en: 'Premium Brand Identity Design for Gulf Brands | Veloura',
      ar: 'تصميم هوية بصرية فاخرة للعلامات الخليجية | Veloura',
    },
    metaDesc: {
      en: 'Build a refined brand identity system with strategy, logo, palette, typography, voice, and guidelines for Gulf and international markets.',
      ar: 'ابنِ نظام هوية بصرياً راقياً يشمل الاستراتيجية والشعار والألوان والخطوط والنبرة والدليل للعلامات في الخليج والعالم.',
    },
    intro: {
      en: 'Veloura builds identity systems that make a business easier to trust before the first conversation. The work connects strategy, visual language, voice, and practical rules so every touchpoint feels deliberate.',
      ar: 'تبني Veloura أنظمة هوية تجعل العمل أسهل ثقةً قبل أول محادثة. يجمع العمل بين الاستراتيجية واللغة البصرية والنبرة والقواعد العملية ليبدو كل تواصل مقصوداً.',
    },
    audience: [
      { en: 'Brands entering the Gulf market with no clear visual standard.', ar: 'علامات تدخل السوق الخليجي دون معيار بصري واضح.' },
      { en: 'Established companies that look less premium online than they are in reality.', ar: 'شركات قائمة تبدو رقمياً أضعف من قيمتها الحقيقية.' },
      { en: 'Founders preparing for websites, campaigns, proposals, or investor-facing materials.', ar: 'مؤسسون يستعدون لمواقع أو حملات أو عروض أو مواد موجهة للمستثمرين.' },
    ],
    problems: [
      { en: 'The brand feels inconsistent across Instagram, website, documents, and sales messages.', ar: 'تبدو العلامة غير متناسقة بين إنستغرام والموقع والمستندات ورسائل البيع.' },
      { en: 'The business struggles to communicate trust quickly.', ar: 'يصعب على العمل بناء الثقة بسرعة.' },
      { en: 'Design decisions are being made case by case with no system.', ar: 'تُتخذ قرارات التصميم حالةً بحالة دون نظام.' },
    ],
    deliverables: [
      { en: 'Positioning direction, logo system, color palette, typography, and art direction.', ar: 'توجه تموضعي، نظام شعار، ألوان، خطوط، واتجاه فني.' },
      { en: 'Tone of voice, usage rules, social style, and brand guidelines.', ar: 'نبرة صوت، قواعد استخدام، أسلوب السوشيال، ودليل هوية.' },
      { en: 'Applied examples for website, ads, company profile, and business documents.', ar: 'تطبيقات على الموقع والإعلانات والبروفايل والمستندات المؤسسية.' },
    ],
    process: [
      { en: 'Audit the current perception and competitive context.', ar: 'تدقيق الانطباع الحالي وسياق المنافسين.' },
      { en: 'Define the position and visual direction.', ar: 'تحديد التموضع والاتجاه البصري.' },
      { en: 'Design the identity system and apply it across priority touchpoints.', ar: 'تصميم نظام الهوية وتطبيقه على نقاط التواصل الأهم.' },
    ],
    related: ['website-development', 'business-communication-kit', 'ad-designs-campaign-creatives'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    icon: 'uiux',
    title: { en: 'UI/UX Design', ar: 'تصميم UI/UX' },
    h1: {
      en: 'UI/UX Design for Websites, Apps, and Digital Customer Journeys',
      ar: 'تصميم UI/UX للمواقع والتطبيقات ورحلات العملاء الرقمية',
    },
    metaTitle: {
      en: 'UI/UX Design for Websites and Customer Journeys | Veloura',
      ar: 'تصميم UI/UX للمواقع ورحلات العملاء | Veloura',
    },
    metaDesc: {
      en: 'Conversion-aware UI/UX design for websites, apps, landing pages, and digital journeys built around clarity, trust, and action.',
      ar: 'تصميم UI/UX واعٍ بالتحويل للمواقع والتطبيقات وصفحات الهبوط والرحلات الرقمية المبنية على الوضوح والثقة والفعل.',
    },
    intro: {
      en: 'Good UX shortens the distance between interest and action. Veloura designs interfaces that feel premium, explain the offer clearly, and make the next step obvious.',
      ar: 'تجربة الاستخدام الجيدة تقصّر المسافة بين الاهتمام والفعل. تصمم Veloura واجهات راقية تشرح العرض بوضوح وتجعل الخطوة التالية واضحة.',
    },
    audience: [
      { en: 'Businesses redesigning a website or digital product.', ar: 'أعمال تعيد تصميم موقع أو منتج رقمي.' },
      { en: 'Teams losing paid traffic because the page is unclear.', ar: 'فرق تخسر الزيارات المدفوعة لأن الصفحة غير واضحة.' },
      { en: 'Brands that need bilingual English/Arabic interfaces.', ar: 'علامات تحتاج واجهات عربية وإنجليزية.' },
    ],
    problems: [
      { en: 'Visitors arrive but do not know what to do next.', ar: 'يصل الزوار ولا يعرفون الخطوة التالية.' },
      { en: 'Important proof, pricing, forms, or contact paths are hard to find.', ar: 'الدليل أو الأسعار أو النماذج أو مسارات التواصل صعبة الوصول.' },
      { en: 'The interface looks nice but creates friction.', ar: 'الواجهة تبدو جميلة لكنها تخلق احتكاكاً.' },
    ],
    deliverables: [
      { en: 'Information architecture, wireframes, responsive UI, prototypes, and UX copy direction.', ar: 'هيكلة معلومات، مخططات، واجهات متجاوبة، نماذج تفاعلية، وتوجيه نصوص UX.' },
      { en: 'Conversion path recommendations and component states.', ar: 'توصيات لمسار التحويل وحالات المكونات.' },
      { en: 'Bilingual layout considerations for Arabic RTL and English LTR.', ar: 'اعتبارات تخطيط ثنائية اللغة للعربية RTL والإنجليزية LTR.' },
    ],
    process: [
      { en: 'Map the journey and the decision points.', ar: 'رسم الرحلة ونقاط القرار.' },
      { en: 'Design the hierarchy, screens, and interaction states.', ar: 'تصميم التسلسل والشاشات وحالات التفاعل.' },
      { en: 'Prepare a build-ready UI system.', ar: 'تجهيز نظام واجهات جاهز للتطوير.' },
    ],
    related: ['website-development', 'landing-pages', 'analytics-tracking-google-automation'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'web-development',
    slug: 'website-development',
    icon: 'wordpress',
    title: { en: 'Website Development', ar: 'تطوير المواقع' },
    h1: {
      en: 'Website Development for Brands That Need Clarity, Speed, and Conversion',
      ar: 'تطوير مواقع للعلامات التي تحتاج وضوحاً وسرعة وتحويلاً',
    },
    metaTitle: {
      en: 'Website Development for Gulf Brands | Veloura',
      ar: 'تطوير مواقع للعلامات الخليجية | Veloura',
    },
    metaDesc: {
      en: 'Premium WordPress and custom-coded websites for brands that need refined design, clear messaging, fast performance, and conversion structure.',
      ar: 'مواقع ووردبريس ومواقع مخصصة راقية للعلامات التي تحتاج تصميماً مصقولاً ورسالة واضحة وأداء سريعاً وبنية تحويل.',
    },
    intro: {
      en: 'A website should make the business easier to understand, easier to trust, and easier to contact. Veloura builds WordPress and custom-coded sites around brand perception, speed, SEO, and conversion.',
      ar: 'يجب أن يجعل الموقع العمل أسهل فهماً وثقةً وتواصلاً. تبني Veloura مواقع ووردبريس ومواقع مخصصة حول الانطباع والسرعة والسيو والتحويل.',
    },
    audience: [
      { en: 'Companies with outdated, slow, or unclear websites.', ar: 'شركات تملك مواقع قديمة أو بطيئة أو غير واضحة.' },
      { en: 'Brands preparing for ads, SEO, or a market-entry launch.', ar: 'علامات تستعد لإعلانات أو سيو أو دخول سوق جديد.' },
      { en: 'Service businesses that need serious inquiries, not just a brochure.', ar: 'أعمال خدمية تحتاج استفسارات جادة لا مجرد بروشور.' },
    ],
    problems: [
      { en: 'The website does not explain the offer quickly.', ar: 'الموقع لا يشرح العرض بسرعة.' },
      { en: 'The design feels weaker than the company.', ar: 'التصميم يبدو أضعف من الشركة.' },
      { en: 'Forms, CTAs, SEO, and analytics are treated as afterthoughts.', ar: 'النماذج والدعوات والسيو والتحليلات تأتي كإضافات متأخرة.' },
    ],
    deliverables: [
      { en: 'Website strategy, UX, copy direction, responsive design, build, technical SEO, and launch support.', ar: 'استراتيجية موقع، UX، توجيه نصوص، تصميم متجاوب، تطوير، سيو تقني، ودعم إطلاق.' },
      { en: 'Conversion paths, service sections, contact flows, and analytics readiness.', ar: 'مسارات تحويل، أقسام خدمات، تدفقات تواصل، وجاهزية تحليلات.' },
      { en: 'WordPress or custom-coded implementation depending on scope.', ar: 'تنفيذ ووردبريس أو برمجة مخصصة حسب النطاق.' },
    ],
    process: [
      { en: 'Audit the current site and customer journey.', ar: 'تدقيق الموقع الحالي ورحلة العميل.' },
      { en: 'Plan the sitemap, page hierarchy, and conversion paths.', ar: 'تخطيط خريطة الموقع وتسلسل الصفحات ومسارات التحويل.' },
      { en: 'Design, build, test, launch, and measure.', ar: 'تصميم، تطوير، اختبار، إطلاق، وقياس.' },
    ],
    related: ['ui-ux-design', 'seo-geo-testing', 'analytics-tracking-google-automation'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'landing-pages',
    slug: 'landing-pages',
    icon: 'landing',
    title: { en: 'Landing Pages & Case Studies', ar: 'صفحات الهبوط ودراسات الحالة' },
    h1: {
      en: 'Landing Pages Built to Turn Attention Into Serious Inquiries',
      ar: 'صفحات هبوط تحوّل الانتباه إلى استفسارات جادة',
    },
    metaTitle: {
      en: 'Landing Page Design for Campaigns and Offers | Veloura',
      ar: 'تصميم صفحات هبوط للحملات والعروض | Veloura',
    },
    metaDesc: {
      en: 'Focused landing pages and case studies for offers, launches, campaigns, and lead generation across Gulf and international markets.',
      ar: 'صفحات هبوط ودراسات حالة مركزة للعروض والإطلاقات والحملات وجذب العملاء في الخليج والأسواق الدولية.',
    },
    intro: {
      en: 'A landing page has one job. Veloura builds focused pages with a clear offer, sharp proof, low-friction forms, and tracking from day one.',
      ar: 'لصفحة الهبوط مهمة واحدة. تبني Veloura صفحات مركزة بعرض واضح ودليل قوي ونماذج قليلة الاحتكاك وتتبع منذ اليوم الأول.',
    },
    audience: [
      { en: 'Campaigns that need a dedicated page instead of sending traffic to the homepage.', ar: 'حملات تحتاج صفحة مخصصة بدلاً من إرسال الزيارات إلى الرئيسية.' },
      { en: 'Launches, offers, real estate projects, clinics, and service funnels.', ar: 'إطلاقات وعروض ومشاريع عقارية وعيادات ومسارات خدمات.' },
      { en: 'Brands that need to prove value quickly.', ar: 'علامات تحتاج إثبات القيمة بسرعة.' },
    ],
    problems: [
      { en: 'Paid traffic is landing on pages with too many competing messages.', ar: 'الزيارات المدفوعة تصل إلى صفحات برسائل كثيرة متنافسة.' },
      { en: 'The offer is unclear above the fold.', ar: 'العرض غير واضح في الشاشة الأولى.' },
      { en: 'Forms ask too much or appear too late.', ar: 'النماذج تطلب الكثير أو تظهر متأخرة.' },
    ],
    deliverables: [
      { en: 'Page strategy, copy hierarchy, responsive design, build, proof sections, form flow, and analytics events.', ar: 'استراتيجية الصفحة، تسلسل النص، تصميم متجاوب، تطوير، أقسام دليل، تدفق نموذج، وأحداث تحليلية.' },
      { en: 'Case study structures that turn results into trust.', ar: 'هياكل دراسات حالة تحول النتائج إلى ثقة.' },
      { en: 'A/B testing recommendations where useful.', ar: 'توصيات اختبار A/B عند الحاجة.' },
    ],
    process: [
      { en: 'Clarify the audience, offer, proof, and primary action.', ar: 'توضيح الجمهور والعرض والدليل والفعل الأساسي.' },
      { en: 'Design the page around the decision path.', ar: 'تصميم الصفحة حول مسار القرار.' },
      { en: 'Launch with tracking and optimization notes.', ar: 'الإطلاق مع التتبع وملاحظات التحسين.' },
    ],
    related: ['paid-advertising', 'ad-designs-campaign-creatives', 'analytics-tracking-google-automation'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'ad-designs',
    slug: 'ad-designs-campaign-creatives',
    icon: 'ads',
    title: { en: 'Ad Designs & Campaign Creatives', ar: 'التصاميم والحملات الإعلانية' },
    h1: {
      en: 'Campaign Creative Design for Brands That Need More Than Pretty Ads',
      ar: 'تصميم إبداعي للحملات للعلامات التي تحتاج أكثر من إعلان جميل',
    },
    metaTitle: {
      en: 'Ad Design and Campaign Creative Agency | Veloura',
      ar: 'تصميم إعلانات وإبداع حملات | Veloura',
    },
    metaDesc: {
      en: 'Strategic campaign creatives, statics, stories, reels concepts, and carousels built around messages, offers, angles, and measurable response.',
      ar: 'إبداع حملات وتصاميم ثابتة وقصص وأفكار ريلز وكاروسيل مبنية حول الرسائل والعروض والزوايا والاستجابة القابلة للقياس.',
    },
    intro: {
      en: 'Creative should earn attention and make the next action clearer. Veloura develops campaign angles, messages, and visual systems that look refined and have a job to do.',
      ar: 'يجب أن يكسب الإبداع الانتباه ويجعل الخطوة التالية أوضح. تطور Veloura زوايا ورسائل وأنظمة بصرية للحملات تبدو راقية ولها مهمة واضحة.',
    },
    audience: [
      { en: 'Brands running paid social or launch campaigns.', ar: 'علامات تطلق حملات مدفوعة أو إطلاقات.' },
      { en: 'Teams that need multiple creative angles, not one design repeated everywhere.', ar: 'فرق تحتاج زوايا إبداعية متعددة لا تصميماً واحداً مكرراً.' },
      { en: 'Businesses whose content looks nice but does not convert.', ar: 'أعمال يبدو محتواها جميلاً لكنه لا يحوّل.' },
    ],
    problems: [
      { en: 'The campaign has visuals but no strategic angle.', ar: 'الحملة لديها صور دون زاوية استراتيجية.' },
      { en: 'The design is disconnected from the offer.', ar: 'التصميم منفصل عن العرض.' },
      { en: 'There is no system for testing messages.', ar: 'لا يوجد نظام لاختبار الرسائل.' },
    ],
    deliverables: [
      { en: 'Creative strategy, campaign concepts, static ads, stories, carousels, reel directions, and testing angles.', ar: 'استراتيجية إبداعية، أفكار حملات، إعلانات ثابتة، قصص، كاروسيل، توجهات ريلز، وزوايا اختبار.' },
      { en: 'Copy hooks and visual variants for different audiences.', ar: 'افتتاحيات نصية ونسخ بصرية لجماهير مختلفة.' },
      { en: 'Creative guidelines for campaign consistency.', ar: 'إرشادات إبداعية لاتساق الحملة.' },
    ],
    process: [
      { en: 'Define the offer, audience, and objections.', ar: 'تحديد العرض والجمهور والاعتراضات.' },
      { en: 'Create angles and visual directions.', ar: 'إنشاء زوايا واتجاهات بصرية.' },
      { en: 'Prepare assets for launch and learning.', ar: 'تجهيز الأصول للإطلاق والتعلم.' },
    ],
    related: ['paid-advertising', 'landing-pages', 'brand-identity'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'social-media',
    slug: 'social-media-strategy',
    icon: 'social',
    title: { en: 'Social Media Strategy & Management', ar: 'استراتيجية وإدارة وسائل التواصل' },
    h1: {
      en: 'Social Media Strategy for Brands That Need a Sharper System',
      ar: 'استراتيجية سوشيال ميديا للعلامات التي تحتاج نظاماً أوضح',
    },
    metaTitle: {
      en: 'Social Media Strategy for Gulf Brands | Veloura',
      ar: 'استراتيجية سوشيال ميديا للعلامات الخليجية | Veloura',
    },
    metaDesc: {
      en: 'Strategic social media systems for premium brands: content pillars, calendars, reels, community, offers, and performance learning.',
      ar: 'أنظمة سوشيال ميديا استراتيجية للعلامات الراقية: ركائز محتوى، جداول، ريلز، مجتمع، عروض، وتعلم من الأداء.',
    },
    intro: {
      en: 'Not more content. A sharper system. Veloura shapes social media around positioning, audience trust, offers, and the journey from attention to enquiry.',
      ar: 'ليس المزيد من المحتوى، بل نظام أوضح. تشكّل Veloura السوشيال حول التموضع وثقة الجمهور والعروض والرحلة من الانتباه إلى الاستفسار.',
    },
    audience: [
      { en: 'Brands with inconsistent pages and unclear content rhythm.', ar: 'علامات بصفحات غير متناسقة وإيقاع محتوى غير واضح.' },
      { en: 'Clinics, restaurants, real estate, retail, and service businesses that need trust before contact.', ar: 'عيادات ومطاعم وعقار وتجزئة وخدمات تحتاج الثقة قبل التواصل.' },
      { en: 'Owners tired of post-count packages that do not move the business.', ar: 'ملاك تعبوا من باقات عدد المنشورات التي لا تحرك العمل.' },
    ],
    problems: [
      { en: 'Content is being posted without a business role.', ar: 'يُنشر المحتوى دون دور تجاري واضح.' },
      { en: 'The page looks active but not persuasive.', ar: 'الصفحة نشطة لكنها غير مقنعة.' },
      { en: 'There is no bridge between content and lead flow.', ar: 'لا يوجد جسر بين المحتوى وتدفق الفرص.' },
    ],
    deliverables: [
      { en: 'Audit, positioning, content pillars, calendar, creative direction, reels directions, captions, and response paths.', ar: 'تدقيق، تموضع، ركائز محتوى، جدول، اتجاه إبداعي، توجهات ريلز، نصوص، ومسارات رد.' },
      { en: 'Monthly learning notes tied to business goals.', ar: 'ملاحظات تعلم شهرية مرتبطة بأهداف العمل.' },
      { en: 'Community and inquiry handling recommendations.', ar: 'توصيات لإدارة المجتمع والاستفسارات.' },
    ],
    process: [
      { en: 'Diagnose the current page and audience.', ar: 'تشخيص الصفحة والجمهور الحالي.' },
      { en: 'Build a content system around trust, education, proof, and offers.', ar: 'بناء نظام محتوى حول الثقة والتعليم والدليل والعروض.' },
      { en: 'Publish, learn, and refine.', ar: 'نشر وتعلم وتحسين.' },
    ],
    related: ['ad-designs-campaign-creatives', 'paid-advertising', 'crm-lead-flow-automation'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'ai-video',
    slug: 'ai-video-motion-content',
    icon: 'video',
    title: { en: 'AI Video & Motion Content', ar: 'فيديو الذكاء الاصطناعي والموشن' },
    h1: {
      en: 'AI Video and Motion Content With a Premium Human Standard',
      ar: 'فيديو وموشن بالذكاء الاصطناعي بمعيار إنساني راقٍ',
    },
    metaTitle: {
      en: 'AI Video and Motion Content for Premium Brands | Veloura',
      ar: 'فيديو وموشن بالذكاء الاصطناعي للعلامات الراقية | Veloura',
    },
    metaDesc: {
      en: 'AI-assisted video, motion graphics, reels, and brand films shaped around strategy, brand taste, and commercial clarity.',
      ar: 'فيديو بمساعدة الذكاء الاصطناعي وموشن جرافيك وريلز وأفلام علامة مبنية حول الاستراتيجية والذوق والوضوح التجاري.',
    },
    intro: {
      en: 'AI can make production faster, but taste still decides whether the work feels premium. Veloura uses AI and motion as tools for clearer stories, not generic spectacle.',
      ar: 'يمكن للذكاء الاصطناعي تسريع الإنتاج، لكن الذوق ما زال يحدد إن كان العمل يبدو راقياً. تستخدم Veloura الذكاء الاصطناعي والموشن كأدوات لقصة أوضح لا لاستعراض عام.',
    },
    audience: [
      { en: 'Brands that need launch films, explainers, reels, or motion-led campaign assets.', ar: 'علامات تحتاج أفلام إطلاق أو شروحات أو ريلز أو أصول حملات حركية.' },
      { en: 'Teams that want faster production without cheap-looking output.', ar: 'فرق تريد إنتاجاً أسرع دون مخرجات رخيصة المظهر.' },
      { en: 'Businesses that need ideas shaped before visuals are generated.', ar: 'أعمال تحتاج صياغة الفكرة قبل توليد المرئيات.' },
    ],
    problems: [
      { en: 'Video feels generic or disconnected from the brand.', ar: 'الفيديو يبدو عاماً أو منفصلاً عن العلامة.' },
      { en: 'Motion is used for decoration instead of message clarity.', ar: 'تُستخدم الحركة للزينة بدل وضوح الرسالة.' },
      { en: 'The production process is slow for campaign needs.', ar: 'عملية الإنتاج بطيئة مقارنة بحاجات الحملات.' },
    ],
    deliverables: [
      { en: 'Concepts, scripts, AI-assisted visual directions, motion graphics, reels, and launch assets.', ar: 'أفكار، نصوص، توجهات بصرية بمساعدة الذكاء الاصطناعي، موشن، ريلز، وأصول إطلاق.' },
      { en: 'Brand-safe prompts and review directions.', ar: 'مطالبات آمنة للعلامة وتوجيهات مراجعة.' },
      { en: 'Export-ready campaign formats.', ar: 'صيغ جاهزة للنشر للحملات.' },
    ],
    process: [
      { en: 'Define the story and use case.', ar: 'تحديد القصة والاستخدام.' },
      { en: 'Generate and refine with brand judgment.', ar: 'التوليد والتحسين بحكم بصري مناسب للعلامة.' },
      { en: 'Prepare final motion assets.', ar: 'تجهيز أصول الحركة النهائية.' },
    ],
    related: ['ad-designs-campaign-creatives', 'social-media-strategy', 'brand-identity'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'paid-advertising',
    slug: 'paid-advertising',
    icon: 'paidads',
    title: { en: 'Paid Advertising', ar: 'الإعلانات المدفوعة' },
    h1: {
      en: 'Paid Advertising Strategy for Campaigns That Are Built to Be Measured',
      ar: 'استراتيجية إعلانات مدفوعة لحملات مبنية للقياس',
    },
    metaTitle: {
      en: 'Paid Advertising Agency for Gulf Campaigns | Veloura',
      ar: 'إدارة إعلانات مدفوعة للحملات الخليجية | Veloura',
    },
    metaDesc: {
      en: 'Meta, Google, TikTok, and Snapchat paid advertising with strategy, creative testing, landing pages, tracking, and measurable decisions.',
      ar: 'إعلانات ميتا وجوجل وتيك توك وسناب باستراتيجية واختبار إبداعي وصفحات هبوط وتتبع وقرارات قابلة للقياس.',
    },
    intro: {
      en: 'Paid media should not start with a budget. It should start with a goal, a message, a page, a tracking plan, and a reason the audience should act now.',
      ar: 'لا يجب أن تبدأ الإعلانات المدفوعة بالميزانية، بل بهدف ورسالة وصفحة وخطة تتبع وسبب يجعل الجمهور يتصرف الآن.',
    },
    audience: [
      { en: 'Brands spending on Meta, Google, TikTok, or Snapchat without clear learning.', ar: 'علامات تنفق على ميتا أو جوجل أو تيك توك أو سناب دون تعلم واضح.' },
      { en: 'Businesses preparing campaigns in Gulf markets.', ar: 'أعمال تستعد لحملات في أسواق الخليج.' },
      { en: 'Teams that need creative, landing page, and tracking alignment.', ar: 'فرق تحتاج توافق الإبداع وصفحة الهبوط والتتبع.' },
    ],
    problems: [
      { en: 'Ads launch without conversion tracking.', ar: 'تُطلق الإعلانات دون تتبع تحويلات.' },
      { en: 'The creative and landing page tell different stories.', ar: 'الإبداع وصفحة الهبوط يرويان قصتين مختلفتين.' },
      { en: 'Results are judged by surface metrics instead of business outcomes.', ar: 'تُقاس النتائج بمؤشرات سطحية بدلاً من نتائج تجارية.' },
    ],
    deliverables: [
      { en: 'Campaign strategy, audience structure, creative testing plan, platform setup, tracking guidance, and optimization rhythm.', ar: 'استراتيجية حملة، هيكلة جماهير، خطة اختبار إبداعي، إعداد منصات، توجيه تتبع، وإيقاع تحسين.' },
      { en: 'Meta, Google, TikTok, and Snapchat campaign support depending on scope.', ar: 'دعم حملات ميتا وجوجل وتيك توك وسناب حسب النطاق.' },
      { en: 'Performance reporting tied to decisions.', ar: 'تقارير أداء مرتبطة بالقرارات.' },
    ],
    process: [
      { en: 'Audit readiness: offer, page, creative, and tracking.', ar: 'تدقيق الجاهزية: العرض والصفحة والإبداع والتتبع.' },
      { en: 'Launch controlled tests.', ar: 'إطلاق اختبارات مضبوطة.' },
      { en: 'Scale what proves itself and cut what does not.', ar: 'توسيع ما يثبت نفسه وإيقاف ما لا يثبت.' },
    ],
    related: ['landing-pages', 'ad-designs-campaign-creatives', 'analytics-tracking-google-automation'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'seo-geo',
    slug: 'seo-geo-testing',
    icon: 'seo',
    title: { en: 'SEO, GEO & Testing', ar: 'السيو وGEO والاختبار' },
    h1: {
      en: 'SEO, GEO, and Testing for Brands That Want to Be Found, Understood, and Chosen',
      ar: 'سيو وGEO واختبار للعلامات التي تريد أن تُوجد وتُفهم وتُختار',
    },
    metaTitle: {
      en: 'SEO and GEO Strategy for Gulf Brands | Veloura',
      ar: 'استراتيجية سيو وGEO للعلامات الخليجية | Veloura',
    },
    metaDesc: {
      en: 'Technical SEO, on-page SEO, local SEO, content architecture, GEO, and testing for brands that need visibility in Google and AI answer engines.',
      ar: 'سيو تقني وداخلي ومحلي وبنية محتوى وGEO واختبار للعلامات التي تحتاج الظهور في جوجل ومحركات الإجابة الذكية.',
    },
    intro: {
      en: 'Search is no longer only ten blue links. Veloura structures pages, metadata, content, schema, and testing so brands can be found by search engines and understood by answer engines.',
      ar: 'لم يعد البحث مجرد روابط زرقاء. تبني Veloura الصفحات والميتا والمحتوى والبيانات المنظمة والاختبار حتى تظهر العلامة لمحركات البحث وتُفهم من محركات الإجابة.',
    },
    audience: [
      { en: 'Brands that need service, industry, and location visibility across the Gulf.', ar: 'علامات تحتاج ظهوراً للخدمات والقطاعات والمواقع في الخليج.' },
      { en: 'Websites with elegant copy but weak search structure.', ar: 'مواقع بنصوص أنيقة لكن ببنية بحث ضعيفة.' },
      { en: 'Businesses preparing for AI search and answer engines.', ar: 'أعمال تستعد للبحث بالذكاء الاصطناعي ومحركات الإجابة.' },
    ],
    problems: [
      { en: 'Important services do not have dedicated pages.', ar: 'الخدمات المهمة لا تملك صفحات مخصصة.' },
      { en: 'Google and AI engines cannot clearly understand the offer.', ar: 'لا يستطيع جوجل ومحركات الذكاء فهم العرض بوضوح.' },
      { en: 'SEO is treated as keywords instead of architecture.', ar: 'يُعامل السيو ككلمات مفتاحية بدلاً من بنية.' },
    ],
    deliverables: [
      { en: 'Keyword map, page architecture, metadata, content briefs, technical SEO audit, schema guidance, and testing plan.', ar: 'خريطة كلمات، بنية صفحات، ميتا، ملخصات محتوى، تدقيق تقني، توجيه بيانات منظمة، وخطة اختبار.' },
      { en: 'Local and regional page strategy for GCC markets.', ar: 'استراتيجية صفحات محلية وإقليمية لأسواق الخليج.' },
      { en: 'GEO recommendations for AI answer visibility.', ar: 'توصيات GEO للظهور في إجابات الذكاء الاصطناعي.' },
    ],
    process: [
      { en: 'Audit crawlability, structure, and search intent.', ar: 'تدقيق قابلية الزحف والبنية ونية البحث.' },
      { en: 'Build or refine the page architecture.', ar: 'بناء أو تحسين بنية الصفحات.' },
      { en: 'Measure rankings, clicks, enquiries, and content gaps.', ar: 'قياس الترتيب والنقرات والاستفسارات وفجوات المحتوى.' },
    ],
    related: ['website-development', 'landing-pages', 'analytics-tracking-google-automation'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'competition-analysis',
    slug: 'competition-analysis',
    icon: 'analysis',
    title: { en: 'Competition Analysis', ar: 'تحليل المنافسين' },
    h1: {
      en: 'Competition Analysis That Turns Market Gaps Into a Sharper Position',
      ar: 'تحليل منافسين يحوّل فجوات السوق إلى تموضع أوضح',
    },
    metaTitle: {
      en: 'Competitor Analysis for Brand and Growth Strategy | Veloura',
      ar: 'تحليل منافسين لاستراتيجية العلامة والنمو | Veloura',
    },
    metaDesc: {
      en: 'Competitor analysis across brand, website, content, ads, SEO, offers, and customer journey to sharpen positioning and growth priorities.',
      ar: 'تحليل منافسين يشمل الهوية والموقع والمحتوى والإعلانات والسيو والعروض ورحلة العميل لتوضيح التموضع وأولويات النمو.',
    },
    intro: {
      en: 'A brand does not grow in a vacuum. Veloura studies the competitive field to understand where the market is crowded, where trust is weak, and where a sharper position can win.',
      ar: 'لا تنمو العلامة في فراغ. تدرس Veloura المشهد التنافسي لمعرفة أين يزدحم السوق وأين تضعف الثقة وأين يمكن لتموضع أوضح أن يربح.',
    },
    audience: [
      { en: 'Businesses entering a Gulf market or repositioning against stronger competitors.', ar: 'أعمال تدخل سوقاً خليجياً أو تعيد تموضعها أمام منافسين أقوى.' },
      { en: 'Brands that feel competitors look more professional online.', ar: 'علامات تشعر أن منافسيها يبدون أكثر احترافاً رقمياً.' },
      { en: 'Owners who need clarity before investing in design or ads.', ar: 'ملاك يحتاجون وضوحاً قبل الاستثمار في التصميم أو الإعلانات.' },
    ],
    problems: [
      { en: 'The team is guessing what competitors are doing well.', ar: 'الفريق يخمّن ما يفعله المنافسون جيداً.' },
      { en: 'The brand sounds similar to everyone else.', ar: 'العلامة تبدو مشابهة للجميع.' },
      { en: 'Campaigns start without market evidence.', ar: 'تبدأ الحملات دون دليل سوقي.' },
    ],
    deliverables: [
      { en: 'Competitor map, brand and website observations, content and ad angles, SEO gaps, and strategic recommendations.', ar: 'خريطة منافسين، ملاحظات هوية وموقع، زوايا محتوى وإعلانات، فجوات سيو، وتوصيات استراتيجية.' },
      { en: 'Opportunity territories and messaging implications.', ar: 'مساحات فرصة وانعكاساتها على الرسائل.' },
      { en: 'Priority actions for the next growth scope.', ar: 'أولويات عمل للنطاق القادم.' },
    ],
    process: [
      { en: 'Select the real competitive set.', ar: 'تحديد المنافسين الحقيقيين.' },
      { en: 'Study brand, content, search, and journey signals.', ar: 'دراسة إشارات الهوية والمحتوى والبحث والرحلة.' },
      { en: 'Translate findings into a sharper plan.', ar: 'تحويل النتائج إلى خطة أوضح.' },
    ],
    related: ['brand-identity', 'seo-geo-testing', 'paid-advertising'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'crm-lead-flow-automation',
    slug: 'crm-lead-flow-automation',
    icon: 'automation',
    title: { en: 'CRM, Lead Flow & Business Automation', ar: 'CRM وتدفقات العملاء والأتمتة' },
    h1: {
      en: 'CRM, Lead Flow, and Business Automation for Cleaner Customer Journeys',
      ar: 'CRM وتدفقات عملاء وأتمتة لرحلات أكثر وضوحاً',
    },
    metaTitle: {
      en: 'CRM and Lead Flow Automation for Gulf Businesses | Veloura',
      ar: 'أتمتة CRM وتدفق العملاء للأعمال الخليجية | Veloura',
    },
    metaDesc: {
      en: 'CRM structure, lead capture, follow-up flows, booking paths, and business automation for brands that need cleaner customer journeys.',
      ar: 'بنية CRM والتقاط فرص ومسارات متابعة وحجوزات وأتمتة أعمال للعلامات التي تحتاج رحلة عميل أوضح.',
    },
    intro: {
      en: 'Leads are only valuable when they are captured, organized, followed up, and learned from. Veloura builds lead-flow systems so serious enquiries do not disappear into chats, inboxes, or spreadsheets.',
      ar: 'لا تصبح الفرص ذات قيمة إلا حين تُلتقط وتُنظم وتُتابع ويُتعلم منها. تبني Veloura أنظمة تدفق فرص حتى لا تختفي الاستفسارات الجادة بين الرسائل والبريد والجداول.',
    },
    audience: [
      { en: 'Businesses receiving enquiries through forms, calls, WhatsApp, social, or DMs.', ar: 'أعمال تستقبل استفسارات من النماذج أو المكالمات أو واتساب أو السوشيال أو الرسائل.' },
      { en: 'Clinics, real estate teams, consultants, and service companies with follow-up gaps.', ar: 'عيادات وفرق عقار واستشاريون وشركات خدمات لديها فجوات متابعة.' },
      { en: 'Owners who need visibility into lead status and quality.', ar: 'ملاك يحتاجون رؤية أوضح لحالة الفرص وجودتها.' },
    ],
    problems: [
      { en: 'Leads arrive but are not assigned, tracked, or followed up consistently.', ar: 'تصل الفرص لكنها لا تُوزع أو تُتتبع أو تُتابع باستمرار.' },
      { en: 'Sales conversations are scattered across channels.', ar: 'محادثات البيع مبعثرة بين القنوات.' },
      { en: 'No one knows which campaigns create qualified enquiries.', ar: 'لا أحد يعرف أي الحملات تصنع استفسارات مؤهلة.' },
    ],
    deliverables: [
      { en: 'CRM pipeline structure, lead capture paths, follow-up stages, automation logic, booking flows, and reporting fields.', ar: 'بنية خط CRM، مسارات التقاط، مراحل متابعة، منطق أتمتة، تدفقات حجز، وحقول تقارير.' },
      { en: 'Communication-channel recommendations, including WhatsApp where it fits.', ar: 'توصيات قنوات تواصل، بما في ذلك واتساب عند مناسبته.' },
      { en: 'Lead quality and response-time measurement.', ar: 'قياس جودة الفرص وسرعة الاستجابة.' },
    ],
    process: [
      { en: 'Map current lead sources and follow-up behavior.', ar: 'رسم مصادر الفرص وسلوك المتابعة الحالي.' },
      { en: 'Design the pipeline and automation rules.', ar: 'تصميم خط العمل وقواعد الأتمتة.' },
      { en: 'Launch, train, and refine around real enquiries.', ar: 'إطلاق وتدريب وتحسين بناءً على استفسارات حقيقية.' },
    ],
    related: ['analytics-tracking-google-automation', 'landing-pages', 'paid-advertising'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'analytics-tracking',
    slug: 'analytics-tracking-google-automation',
    icon: 'analytics',
    title: { en: 'Analytics, Tracking & Google Automation', ar: 'التحليلات والتتبع وأتمتة جوجل' },
    h1: {
      en: 'Analytics, Tracking, and Google Automation for Measurable Marketing Decisions',
      ar: 'تحليلات وتتبع وأتمتة جوجل لقرارات تسويق قابلة للقياس',
    },
    metaTitle: {
      en: 'GA4, GTM and Marketing Analytics Setup | Veloura',
      ar: 'إعداد GA4 وGTM وتحليلات التسويق | Veloura',
    },
    metaDesc: {
      en: 'GA4, Google Tag Manager, conversion tracking, Looker Studio dashboards, and automation for marketing decisions grounded in real numbers.',
      ar: 'إعداد GA4 وGoogle Tag Manager وتتبع التحويلات ولوحات Looker Studio وأتمتة لقرارات تسويق مبنية على أرقام حقيقية.',
    },
    intro: {
      en: 'Marketing without tracking is opinion with a budget. Veloura sets up the measurement layer that helps owners know what is working, what is leaking, and what should happen next.',
      ar: 'التسويق بلا تتبع هو رأي بميزانية. تضبط Veloura طبقة القياس التي تساعد المالك على معرفة ما يعمل، وما يتسرب، وما يجب فعله تالياً.',
    },
    audience: [
      { en: 'Brands running ads, SEO, landing pages, or CRM without clean measurement.', ar: 'علامات تعمل بإعلانات أو سيو أو صفحات هبوط أو CRM دون قياس نظيف.' },
      { en: 'Owners who do not know what is working.', ar: 'ملاك لا يعرفون ما الذي يعمل فعلاً.' },
      { en: 'Teams that need dashboards instead of scattered reports.', ar: 'فرق تحتاج لوحات واضحة بدلاً من تقارير مبعثرة.' },
    ],
    problems: [
      { en: 'Conversions are not tracked correctly.', ar: 'التحويلات لا تُتتبع بشكل صحيح.' },
      { en: 'Dashboards measure motion, not business progress.', ar: 'اللوحات تقيس الحركة لا التقدم التجاري.' },
      { en: 'Decisions are made from incomplete or unclear data.', ar: 'تُتخذ القرارات من بيانات ناقصة أو غير واضحة.' },
    ],
    deliverables: [
      { en: 'GA4 setup, GTM events, conversion tracking, dashboards, reporting structure, and Google workflow automation.', ar: 'إعداد GA4 وأحداث GTM وتتبع التحويلات ولوحات وهيكلة تقارير وأتمتة تدفقات جوجل.' },
      { en: 'Event naming, funnel views, and decision-ready metrics.', ar: 'تسمية أحداث، عروض مسارات، ومقاييس جاهزة للقرار.' },
      { en: 'Quality checks before campaigns scale.', ar: 'فحوص جودة قبل توسيع الحملات.' },
    ],
    process: [
      { en: 'Audit current tags, goals, and dashboards.', ar: 'تدقيق الوسوم والأهداف واللوحات الحالية.' },
      { en: 'Implement tracking around the real customer journey.', ar: 'تنفيذ التتبع حول رحلة العميل الحقيقية.' },
      { en: 'Validate events and build decision rhythm.', ar: 'التحقق من الأحداث وبناء إيقاع قرار.' },
    ],
    related: ['paid-advertising', 'seo-geo-testing', 'crm-lead-flow-automation'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'comms-kit',
    slug: 'business-communication-kit',
    icon: 'comms',
    title: { en: 'Business Communication Kit', ar: 'حقيبة التواصل المؤسسي' },
    h1: {
      en: 'Premium Business Communication Kits for Brands That Need to Look Organized and Serious',
      ar: 'حقائب تواصل مؤسسي فاخرة للعلامات التي تحتاج مظهراً منظماً وجاداً',
    },
    metaTitle: {
      en: 'Company Profile, Pitch Deck and Proposal Design | Veloura',
      ar: 'تصميم بروفايل شركة وعروض ومقترحات | Veloura',
    },
    metaDesc: {
      en: 'Company profiles, pitch decks, proposals, letterheads, branded invoices, and business documents designed with a premium brand standard.',
      ar: 'بروفايلات شركات وعروض تقديمية ومقترحات وأوراق رسمية وفواتير مصممة بمعيار علامة راقٍ.',
    },
    intro: {
      en: 'The documents around a business shape how serious it feels. Veloura designs communication kits that make proposals, profiles, decks, and formal materials feel consistent and credible.',
      ar: 'المستندات المحيطة بالعمل تشكل مدى جديته. تصمم Veloura حقائب تواصل تجعل المقترحات والبروفايلات والعروض والمواد الرسمية متناسقة وموثوقة.',
    },
    audience: [
      { en: 'Companies pitching clients, partners, investors, or government-facing stakeholders.', ar: 'شركات تقدم لعملاء أو شركاء أو مستثمرين أو جهات رسمية.' },
      { en: 'Service businesses that need proposals and profiles to match their real quality.', ar: 'أعمال خدمية تحتاج مقترحات وبروفايلات تعكس جودتها الحقيقية.' },
      { en: 'Brands building a complete visual system.', ar: 'علامات تبني نظاماً بصرياً كاملاً.' },
    ],
    problems: [
      { en: 'Documents look inconsistent or improvised.', ar: 'المستندات تبدو غير متناسقة أو مرتجلة.' },
      { en: 'The proposal does not communicate value clearly.', ar: 'المقترح لا يوضح القيمة بوضوح.' },
      { en: 'Sales materials weaken trust after the first impression.', ar: 'مواد البيع تُضعف الثقة بعد الانطباع الأول.' },
    ],
    deliverables: [
      { en: 'Company profile, pitch deck, proposal template, letterhead, invoice, and brand document styles.', ar: 'بروفايل شركة، عرض تقديمي، قالب مقترح، ورق رسمي، فاتورة، وأنماط مستندات.' },
      { en: 'Copy hierarchy and visual structure for serious business communication.', ar: 'تسلسل نصي وبصري لتواصل مؤسسي جاد.' },
      { en: 'Editable templates where the scope requires them.', ar: 'قوالب قابلة للتعديل عند الحاجة.' },
    ],
    process: [
      { en: 'Define the purpose and audience of each document.', ar: 'تحديد غرض وجمهور كل مستند.' },
      { en: 'Build the information hierarchy and visual system.', ar: 'بناء تسلسل المعلومات والنظام البصري.' },
      { en: 'Prepare polished files and templates.', ar: 'تجهيز ملفات وقوالب مصقولة.' },
    ],
    related: ['brand-identity', 'competition-analysis', 'website-development'],
    faqs: commonServiceFaqs,
  },
];

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    id: 'clinics-healthcare',
    slug: 'clinics-healthcare',
    title: { en: 'Clinics & Healthcare', ar: 'العيادات والرعاية الصحية' },
    h1: { en: 'Marketing Systems for Clinics and Healthcare Brands', ar: 'أنظمة تسويق للعيادات والعلامات الصحية' },
    metaTitle: { en: 'Marketing Systems for Clinics and Healthcare | Veloura', ar: 'أنظمة تسويق للعيادات والرعاية الصحية | Veloura' },
    metaDesc: { en: 'Trust-first digital systems for clinics and healthcare brands: identity, service pages, SEO, booking journeys, campaigns, and lead tracking.', ar: 'أنظمة رقمية مبنية على الثقة للعيادات والعلامات الصحية: هوية، صفحات خدمات، سيو، حجوزات، حملات، وتتبع فرص.' },
    intro: { en: 'Healthcare marketing must build confidence before it asks for action. Veloura helps clinics present expertise clearly, explain services responsibly, and turn interest into organized enquiries.', ar: 'يجب أن يبني تسويق الرعاية الصحية الثقة قبل طلب الفعل. تساعد Veloura العيادات على تقديم الخبرة بوضوح وشرح الخدمات بمسؤولية وتحويل الاهتمام إلى استفسارات منظمة.' },
    painPoints: [
      { en: 'Patients need trust before they book.', ar: 'يحتاج المرضى إلى الثقة قبل الحجز.' },
      { en: 'Service pages are often vague or too commercial.', ar: 'صفحات الخدمات غالباً غامضة أو تجارية أكثر من اللازم.' },
      { en: 'Leads come from many channels with uneven follow-up.', ar: 'تأتي الفرص من قنوات متعددة بمتابعة غير منتظمة.' },
    ],
    system: [
      { en: 'Trust-first identity and doctor/service presentation.', ar: 'هوية تبني الثقة وعرض واضح للأطباء والخدمات.' },
      { en: 'SEO service pages and Google Business visibility.', ar: 'صفحات خدمات محسنة للبحث وظهور على Google Business.' },
      { en: 'Booking and CRM follow-up structure.', ar: 'بنية حجز ومتابعة عبر CRM.' },
    ],
    services: ['brand-identity', 'website-development', 'seo-geo-testing', 'crm-lead-flow-automation'],
    journey: { en: 'A patient sees a clear service page, checks credibility, books or asks a question, then enters a tracked follow-up flow.', ar: 'يرى المريض صفحة خدمة واضحة، يتأكد من المصداقية، يحجز أو يسأل، ثم يدخل مسار متابعة متتبع.' },
  },
  {
    id: 'restaurants-cafes',
    slug: 'restaurants-cafes',
    title: { en: 'Restaurants & Cafés', ar: 'المطاعم والمقاهي' },
    h1: { en: 'Premium Digital Growth for Restaurants and Cafés', ar: 'نمو رقمي راقٍ للمطاعم والمقاهي' },
    metaTitle: { en: 'Restaurant and Cafe Marketing Systems | Veloura', ar: 'أنظمة تسويق للمطاعم والمقاهي | Veloura' },
    metaDesc: { en: 'Brand, content, offers, Google Maps visibility, booking paths, and campaign systems for restaurants and cafés across Gulf markets.', ar: 'هوية ومحتوى وعروض وظهور على خرائط جوجل ومسارات حجز وحملات للمطاعم والمقاهي في الخليج.' },
    intro: { en: 'Restaurants do not grow from posts alone. They need appetite, trust, maps visibility, seasonal offers, booking paths, and a brand experience people want to revisit.', ar: 'لا تنمو المطاعم من المنشورات وحدها. تحتاج شهية وثقة وظهوراً على الخرائط وعروضاً موسمية ومسارات حجز وتجربة علامة يرغب الناس في تكرارها.' },
    painPoints: [
      { en: 'The food looks better in person than online.', ar: 'الطعام يبدو أفضل في الواقع من ظهوره رقمياً.' },
      { en: 'Offers are posted without a clear path to reservation or order.', ar: 'تُنشر العروض دون مسار واضح للحجز أو الطلب.' },
      { en: 'Google Maps and social presence are disconnected.', ar: 'خرائط جوجل والسوشيال غير مترابطين.' },
    ],
    system: [
      { en: 'Visual direction for food, space, and offers.', ar: 'اتجاه بصري للطعام والمكان والعروض.' },
      { en: 'Content and campaign rhythm around occasions.', ar: 'إيقاع محتوى وحملات حول المناسبات.' },
      { en: 'Maps visibility, reservation paths, and enquiry handling.', ar: 'ظهور خرائط ومسارات حجز وإدارة استفسارات.' },
    ],
    services: ['brand-identity', 'social-media-strategy', 'ad-designs-campaign-creatives', 'paid-advertising'],
    journey: { en: 'A guest discovers the place, sees the offer, checks social proof and location, then reserves, orders, or saves it for an occasion.', ar: 'يكتشف الضيف المكان، يرى العرض، يتأكد من الدليل والموقع، ثم يحجز أو يطلب أو يحفظه لمناسبة.' },
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: { en: 'Real Estate', ar: 'العقارات' },
    h1: { en: 'Real Estate Marketing Systems Built for Trust and Lead Capture', ar: 'أنظمة تسويق عقاري مبنية للثقة والتقاط الفرص' },
    metaTitle: { en: 'Real Estate Marketing and Lead Generation | Veloura', ar: 'تسويق عقاري وجذب فرص | Veloura' },
    metaDesc: { en: 'Landing pages, campaigns, CRM pipelines, property storytelling, and lead tracking for real estate and construction brands.', ar: 'صفحات هبوط وحملات وخطوط CRM وسرد عقاري وتتبع فرص للعلامات العقارية والإنشائية.' },
    intro: { en: 'Real estate decisions need trust, clarity, and disciplined follow-up. Veloura builds digital journeys that move enquiries toward qualified conversations and viewings.', ar: 'تحتاج قرارات العقار إلى ثقة ووضوح ومتابعة منضبطة. تبني Veloura رحلات رقمية تحرك الاستفسارات نحو محادثات ومعاينات مؤهلة.' },
    painPoints: [
      { en: 'Projects look similar and price-driven.', ar: 'تبدو المشاريع متشابهة ومتمحورة حول السعر.' },
      { en: 'Lead forms capture names but not intent.', ar: 'النماذج تلتقط أسماء لا نية شراء.' },
      { en: 'Sales follow-up is not connected to campaign data.', ar: 'متابعة المبيعات غير مرتبطة ببيانات الحملات.' },
    ],
    system: [
      { en: 'Project positioning and landing pages.', ar: 'تموضع المشروع وصفحات هبوط.' },
      { en: 'Lead-gen campaigns with clear qualification paths.', ar: 'حملات جذب فرص بمسارات تأهيل واضحة.' },
      { en: 'CRM stages from enquiry to viewing.', ar: 'مراحل CRM من الاستفسار إلى المعاينة.' },
    ],
    services: ['landing-pages', 'paid-advertising', 'crm-lead-flow-automation', 'analytics-tracking-google-automation'],
    journey: { en: 'A buyer sees the project story, submits an inquiry, is qualified, and moves into a structured viewing or consultation flow.', ar: 'يرى المشتري قصة المشروع، يرسل استفساراً، يتم تأهيله، ثم يدخل مسار معاينة أو استشارة منظم.' },
  },
  {
    id: 'retail-fashion',
    slug: 'retail-fashion',
    title: { en: 'Retail, Fashion & Ecommerce', ar: 'التجزئة والأزياء والمتاجر' },
    h1: { en: 'Brand, Campaign, and Ecommerce Growth for Retail and Fashion', ar: 'نمو هوية وحملات وتجارة إلكترونية للتجزئة والأزياء' },
    metaTitle: { en: 'Retail and Fashion Marketing Systems | Veloura', ar: 'أنظمة تسويق للتجزئة والأزياء | Veloura' },
    metaDesc: { en: 'Collection storytelling, ecommerce UX, campaign creatives, paid retargeting, and analytics for retail, fashion, and ecommerce brands.', ar: 'سرد مجموعات وUX للمتاجر وإبداع حملات وإعادة استهداف وتحليلات للتجزئة والأزياء والمتاجر الإلكترونية.' },
    intro: { en: 'Retail growth depends on desire, clarity, and repeatable purchase paths. Veloura connects product storytelling with ecommerce structure and campaign learning.', ar: 'يعتمد نمو التجزئة على الرغبة والوضوح ومسارات شراء قابلة للتكرار. تربط Veloura سرد المنتج ببنية المتجر وتعلم الحملات.' },
    painPoints: [
      { en: 'Collections launch without a campaign system.', ar: 'تُطلق المجموعات دون نظام حملة.' },
      { en: 'The ecommerce path is attractive but not easy to buy from.', ar: 'مسار المتجر جميل لكنه ليس سهلاً للشراء.' },
      { en: 'Retargeting and analytics are underused.', ar: 'إعادة الاستهداف والتحليلات غير مستغلة.' },
    ],
    system: [
      { en: 'Collection positioning and visual direction.', ar: 'تموضع المجموعة واتجاه بصري.' },
      { en: 'Ecommerce UX and campaign landing paths.', ar: 'UX للمتجر ومسارات هبوط للحملات.' },
      { en: 'Retargeting, offers, and performance dashboards.', ar: 'إعادة استهداف وعروض ولوحات أداء.' },
    ],
    services: ['brand-identity', 'website-development', 'paid-advertising', 'analytics-tracking-google-automation'],
    journey: { en: 'A shopper discovers a collection, understands the value, returns through retargeting, and buys through a clean ecommerce path.', ar: 'يكتشف المتسوق المجموعة، يفهم القيمة، يعود عبر إعادة الاستهداف، ويشتري عبر مسار متجر واضح.' },
  },
  {
    id: 'personal-brands',
    slug: 'personal-brands',
    title: { en: 'Personal Brands & Consultants', ar: 'العلامات الشخصية والاستشاريون' },
    h1: { en: 'Personal Brand Strategy for Consultants, Experts, and Founders', ar: 'استراتيجية علامة شخصية للاستشاريين والخبراء والمؤسسين' },
    metaTitle: { en: 'Personal Brand Strategy and Websites | Veloura', ar: 'استراتيجية ومواقع للعلامات الشخصية | Veloura' },
    metaDesc: { en: 'Positioning, portfolio websites, thought-leadership content, media kits, and lead paths for consultants, experts, and founders.', ar: 'تموضع ومواقع أعمال ومحتوى ريادة فكرية وحقائب إعلامية ومسارات فرص للاستشاريين والخبراء والمؤسسين.' },
    intro: { en: 'A serious personal brand must clarify expertise without sounding self-promotional. Veloura helps experts package trust, point of view, proof, and inquiry paths.', ar: 'تحتاج العلامة الشخصية الجادة إلى توضيح الخبرة دون أن تبدو ترويجية. تساعد Veloura الخبراء على صياغة الثقة والرأي والدليل ومسارات الاستفسار.' },
    painPoints: [
      { en: 'The expert has credibility, but the digital presence does not show it.', ar: 'يمتلك الخبير مصداقية لا يعكسها الحضور الرقمي.' },
      { en: 'Content lacks a clear point of view.', ar: 'المحتوى يفتقر إلى رأي واضح.' },
      { en: 'Inquiries are not guided toward the right offer.', ar: 'الاستفسارات لا تُوجه نحو العرض الصحيح.' },
    ],
    system: [
      { en: 'Positioning, proof, and offer architecture.', ar: 'تموضع ودليل وهيكلة عروض.' },
      { en: 'Portfolio or authority website.', ar: 'موقع أعمال أو موقع سلطة مهنية.' },
      { en: 'LinkedIn/content system and media kit.', ar: 'نظام محتوى ولينكدإن وحقيبة إعلامية.' },
    ],
    services: ['brand-identity', 'website-development', 'social-media-strategy', 'business-communication-kit'],
    journey: { en: 'A prospect discovers the expert, understands the niche and proof, then requests a consultation or proposal through a clear path.', ar: 'يكتشف العميل الخبير، يفهم تخصصه ودليله، ثم يطلب استشارة أو مقترحاً عبر مسار واضح.' },
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    title: { en: 'Professional Services', ar: 'الخدمات المهنية' },
    h1: { en: 'Digital Growth Systems for Professional Service Firms', ar: 'أنظمة نمو رقمي لشركات الخدمات المهنية' },
    metaTitle: { en: 'Professional Services Marketing Systems | Veloura', ar: 'أنظمة تسويق لشركات الخدمات المهنية | Veloura' },
    metaDesc: { en: 'Brand, website, proposal, SEO, CRM, and analytics systems for consulting, legal, finance, training, and premium service firms.', ar: 'أنظمة هوية وموقع ومقترحات وسيو وCRM وتحليلات للاستشارات والقانون والمال والتدريب والخدمات الراقية.' },
    intro: { en: 'Professional service buyers need confidence before they compare price. Veloura helps firms communicate expertise, structure offers, and make inquiry paths easier to trust.', ar: 'يحتاج مشترو الخدمات المهنية إلى الثقة قبل مقارنة السعر. تساعد Veloura الشركات على توصيل الخبرة وهيكلة العروض وجعل مسارات الاستفسار أكثر ثقة.' },
    painPoints: [
      { en: 'The service is valuable but hard to explain simply.', ar: 'الخدمة قيّمة لكنها صعبة الشرح ببساطة.' },
      { en: 'The website and proposals do not match the firm’s expertise.', ar: 'الموقع والمقترحات لا تعكس خبرة الشركة.' },
      { en: 'Lead quality is unclear.', ar: 'جودة الفرص غير واضحة.' },
    ],
    system: [
      { en: 'Clear positioning and offer hierarchy.', ar: 'تموضع واضح وتسلسل عروض.' },
      { en: 'Authority website, proposal kit, and service SEO.', ar: 'موقع سلطة مهنية وحقيبة مقترحات وسيو للخدمات.' },
      { en: 'CRM and analytics for qualified enquiries.', ar: 'CRM وتحليلات للاستفسارات المؤهلة.' },
    ],
    services: ['brand-identity', 'website-development', 'business-communication-kit', 'seo-geo-testing'],
    journey: { en: 'A buyer understands the firm’s expertise, sees relevant proof, and requests a scoped conversation instead of a vague quote.', ar: 'يفهم المشتري خبرة الشركة، يرى دليلاً مناسباً، ويطلب محادثة محددة النطاق بدلاً من عرض سعر غامض.' },
  },
];

export const LOCATION_PAGES: LocationPage[] = [
  {
    id: 'gcc',
    slug: 'gcc',
    title: { en: 'Gulf / GCC', ar: 'الخليج' },
    h1: { en: 'Premium Marketing Agency for Gulf Brands', ar: 'وكالة تسويق فاخرة للعلامات التجارية في الخليج' },
    metaTitle: { en: 'Premium Marketing Agency for Gulf Brands | Veloura', ar: 'وكالة تسويق فاخرة للعلامات في الخليج | Veloura' },
    metaDesc: { en: 'Veloura is a remote-first boutique marketing and digital growth agency serving Gulf brands across branding, websites, campaigns, SEO, CRM, and analytics.', ar: 'Veloura وكالة تسويق ونمو رقمي بوتيك تعمل عن بُعد مع علامات الخليج عبر الهوية والمواقع والحملات والسيو وCRM والتحليلات.' },
    intro: { en: 'Veloura works with Gulf and international brands that need senior-led strategy, refined design, bilingual communication, and measurable growth systems.', ar: 'تعمل Veloura مع علامات خليجية ودولية تحتاج تفكيراً بقيادة خبراء وتصميماً راقياً وتواصلاً ثنائي اللغة وأنظمة نمو قابلة للقياس.' },
    markets: [
      { en: 'Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman.', ar: 'السعودية والإمارات وقطر والكويت والبحرين وعُمان.' },
      { en: 'Remote delivery from Jordan with structured project management.', ar: 'تنفيذ عن بُعد من الأردن مع إدارة مشاريع منظمة.' },
    ],
    proof: { en: 'Our model is built around online strategy sessions, shared workspaces, bilingual communication, clear approvals, and measured launch systems.', ar: 'نموذجنا مبني على جلسات استراتيجية أونلاين ومساحات عمل مشتركة وتواصل ثنائي اللغة وموافقات واضحة وأنظمة إطلاق مقاسة.' },
  },
  {
    id: 'saudi-arabia',
    slug: 'saudi-arabia',
    title: { en: 'Saudi Arabia', ar: 'السعودية' },
    h1: { en: 'Remote-First Marketing Agency for Saudi Brands', ar: 'وكالة تسويق عن بُعد للعلامات السعودية' },
    metaTitle: { en: 'Marketing Agency for Saudi Arabia Brands | Veloura', ar: 'وكالة تسويق للعلامات في السعودية | Veloura' },
    metaDesc: { en: 'Remote-first marketing, branding, websites, campaigns, SEO, CRM, and analytics for ambitious Saudi brands and service businesses.', ar: 'تسويق وهوية ومواقع وحملات وسيو وCRM وتحليلات عن بُعد للعلامات والأعمال السعودية الطموحة.' },
    intro: { en: 'Veloura is based in Jordan and works remotely with clients across Saudi Arabia through structured strategy, design, campaign, and growth systems.', ar: 'تقع Veloura في الأردن وتعمل عن بُعد مع عملاء في السعودية عبر أنظمة استراتيجية وتصميم وحملات ونمو منظمة.' },
    markets: [
      { en: 'Built for Riyadh, Jeddah, and Saudi-wide brands that need premium bilingual execution.', ar: 'مصمم للرياض وجدة والعلامات السعودية التي تحتاج تنفيذاً ثنائي اللغة راقياً.' },
      { en: 'Useful for clinics, real estate, retail, restaurants, consultants, and service companies.', ar: 'مناسب للعيادات والعقار والتجزئة والمطاعم والاستشاريين وشركات الخدمات.' },
    ],
    proof: { en: 'We do not pretend to have a local office. We deliver through online strategy sessions, shared workspaces, approval flows, and clear measurement.', ar: 'لا ندّعي وجود مكتب محلي. ننفذ عبر جلسات أونلاين ومساحات عمل مشتركة ومسارات موافقة وقياس واضح.' },
  },
  {
    id: 'riyadh',
    slug: 'riyadh',
    title: { en: 'Riyadh', ar: 'الرياض' },
    h1: { en: 'Boutique Marketing Agency for Riyadh Businesses', ar: 'وكالة تسويق بوتيك لأعمال الرياض' },
    metaTitle: { en: 'Boutique Marketing Agency for Riyadh Businesses | Veloura', ar: 'وكالة تسويق بوتيك لأعمال الرياض | Veloura' },
    metaDesc: { en: 'Remote-first boutique marketing support for Riyadh businesses that need premium branding, websites, campaigns, SEO, CRM, and analytics.', ar: 'دعم تسويق بوتيك عن بُعد لأعمال الرياض التي تحتاج هوية ومواقع وحملات وسيو وCRM وتحليلات بمعيار راقٍ.' },
    intro: { en: 'Riyadh is a competitive market where credibility, clarity, and speed matter. Veloura helps Riyadh businesses build digital systems that feel serious and convert attention into enquiries.', ar: 'الرياض سوق تنافسي حيث تهم المصداقية والوضوح والسرعة. تساعد Veloura أعمال الرياض على بناء أنظمة رقمية جادة وتحويل الانتباه إلى استفسارات.' },
    markets: [
      { en: 'Best fit for premium local services, clinics, real estate, consultants, and retail brands.', ar: 'مناسب للخدمات الراقية والعيادات والعقار والاستشاريين والتجزئة.' },
      { en: 'Remote work with bilingual communication and structured approvals.', ar: 'عمل عن بُعد بتواصل ثنائي اللغة وموافقات منظمة.' },
    ],
    proof: { en: 'Every scope begins with diagnosis, not a generic package, so the system fits the market and business maturity.', ar: 'كل نطاق يبدأ بالتشخيص لا بباقات عامة، حتى يناسب النظام السوق ونضج العمل.' },
  },
  {
    id: 'jeddah',
    slug: 'jeddah',
    title: { en: 'Jeddah', ar: 'جدة' },
    h1: { en: 'Marketing, Branding, and Website Systems for Jeddah Brands', ar: 'أنظمة تسويق وهوية ومواقع لعلامات جدة' },
    metaTitle: { en: 'Marketing Agency for Jeddah Brands | Veloura', ar: 'وكالة تسويق لعلامات جدة | Veloura' },
    metaDesc: { en: 'Remote-first branding, web, campaign, SEO, and CRM systems for Jeddah brands that need premium digital presence and stronger lead flow.', ar: 'أنظمة هوية ومواقع وحملات وسيو وCRM عن بُعد لعلامات جدة التي تحتاج حضوراً رقمياً راقياً وتدفق فرص أوضح.' },
    intro: { en: 'Veloura supports Jeddah brands with remote-first strategy, refined design, and growth systems that connect perception, campaigns, and follow-up.', ar: 'تدعم Veloura علامات جدة باستراتيجية عن بُعد وتصميم راقٍ وأنظمة نمو تربط الانطباع والحملات والمتابعة.' },
    markets: [
      { en: 'Useful for hospitality, retail, clinics, real estate, and service companies.', ar: 'مناسب للضيافة والتجزئة والعيادات والعقار وشركات الخدمات.' },
      { en: 'Bilingual content and design for English and Arabic audiences.', ar: 'محتوى وتصميم ثنائي اللغة للجمهور العربي والإنجليزي.' },
    ],
    proof: { en: 'Our delivery is structured for online collaboration, clear revisions, and measurable launch readiness.', ar: 'تنفيذنا منظم للتعاون أونلاين والمراجعات الواضحة وجاهزية الإطلاق القابلة للقياس.' },
  },
  {
    id: 'uae',
    slug: 'uae',
    title: { en: 'United Arab Emirates', ar: 'الإمارات' },
    h1: { en: 'Premium Digital Growth Agency for UAE Brands', ar: 'وكالة نمو رقمي فاخرة للعلامات في الإمارات' },
    metaTitle: { en: 'Marketing Agency for UAE Brands | Veloura', ar: 'وكالة تسويق للعلامات في الإمارات | Veloura' },
    metaDesc: { en: 'Remote-first premium marketing, branding, websites, campaign strategy, SEO, CRM, and analytics for UAE brands and service businesses.', ar: 'تسويق وهوية ومواقع واستراتيجية حملات وسيو وCRM وتحليلات عن بُعد للعلامات والأعمال الخدمية في الإمارات.' },
    intro: { en: 'UAE brands operate in a polished, competitive market. Veloura helps them build digital systems that are refined, bilingual, conversion-aware, and measurable.', ar: 'تعمل علامات الإمارات في سوق مصقول وتنافسي. تساعد Veloura على بناء أنظمة رقمية راقية وثنائية اللغة وواعية بالتحويل وقابلة للقياس.' },
    markets: [
      { en: 'Dubai, Abu Dhabi, and UAE-wide brands.', ar: 'دبي وأبوظبي والعلامات في الإمارات.' },
      { en: 'Remote-first delivery for premium service, retail, real estate, and consulting brands.', ar: 'تنفيذ عن بُعد للخدمات الراقية والتجزئة والعقار والاستشارات.' },
    ],
    proof: { en: 'We align identity, website, campaigns, CRM, and analytics so the brand feels serious at every touchpoint.', ar: 'نوائم الهوية والموقع والحملات والـCRM والتحليلات حتى تبدو العلامة جادة في كل نقطة تواصل.' },
  },
  {
    id: 'dubai',
    slug: 'dubai',
    title: { en: 'Dubai', ar: 'دبي' },
    h1: { en: 'Premium Digital Growth Agency for Dubai Brands', ar: 'وكالة نمو رقمي راقية لعلامات دبي' },
    metaTitle: { en: 'Premium Marketing Agency for Dubai Brands | Veloura', ar: 'وكالة تسويق راقية لعلامات دبي | Veloura' },
    metaDesc: { en: 'Branding, websites, campaigns, SEO, CRM, and analytics for Dubai brands that need premium digital presence and measurable growth.', ar: 'هوية ومواقع وحملات وسيو وCRM وتحليلات لعلامات دبي التي تحتاج حضوراً رقمياً راقياً ونمواً قابلاً للقياس.' },
    intro: { en: 'Dubai rewards brands that look credible quickly and convert attention with discipline. Veloura builds remote-first growth systems for that standard.', ar: 'تكافئ دبي العلامات التي تبني المصداقية بسرعة وتحول الانتباه بانضباط. تبني Veloura أنظمة نمو عن بُعد لهذا المعيار.' },
    markets: [
      { en: 'Premium services, clinics, real estate, retail, restaurants, and consultants.', ar: 'خدمات راقية وعيادات وعقار وتجزئة ومطاعم واستشاريون.' },
      { en: 'English and Arabic communication for mixed audiences.', ar: 'تواصل عربي وإنجليزي لجماهير متعددة.' },
    ],
    proof: { en: 'Veloura is not a local Dubai office. It is a remote-first boutique partner with structured delivery across Gulf markets.', ar: 'Veloura ليست مكتباً محلياً في دبي، بل شريك بوتيك عن بُعد بتنفيذ منظم عبر أسواق الخليج.' },
  },
  {
    id: 'abu-dhabi',
    slug: 'abu-dhabi',
    title: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    h1: { en: 'Branding, Websites, and Campaign Strategy for Abu Dhabi Businesses', ar: 'هوية ومواقع واستراتيجية حملات لأعمال أبوظبي' },
    metaTitle: { en: 'Marketing Agency for Abu Dhabi Businesses | Veloura', ar: 'وكالة تسويق لأعمال أبوظبي | Veloura' },
    metaDesc: { en: 'Remote-first premium marketing systems for Abu Dhabi businesses across branding, websites, campaigns, SEO, CRM, and analytics.', ar: 'أنظمة تسويق راقية عن بُعد لأعمال أبوظبي تشمل الهوية والمواقع والحملات والسيو وCRM والتحليلات.' },
    intro: { en: 'Veloura helps Abu Dhabi businesses present expertise with calm authority and connect digital presence to clearer enquiries.', ar: 'تساعد Veloura أعمال أبوظبي على تقديم خبرتها بثقة هادئة وربط الحضور الرقمي باستفسارات أوضح.' },
    markets: [
      { en: 'Professional services, healthcare, real estate, education, and premium local businesses.', ar: 'الخدمات المهنية والرعاية الصحية والعقار والتعليم والأعمال المحلية الراقية.' },
      { en: 'Remote execution with clear approval and delivery rhythms.', ar: 'تنفيذ عن بُعد بإيقاع موافقات وتسليم واضح.' },
    ],
    proof: { en: 'We diagnose before building, so each scope reflects the business goal and decision journey.', ar: 'نشخّص قبل البناء، حتى يعكس كل نطاق هدف العمل ورحلة القرار.' },
  },
  {
    id: 'qatar',
    slug: 'qatar',
    title: { en: 'Qatar', ar: 'قطر' },
    h1: { en: 'Branding, Websites, and Campaign Strategy for Qatar Businesses', ar: 'هوية ومواقع واستراتيجية حملات للأعمال في قطر' },
    metaTitle: { en: 'Marketing Agency for Qatar Businesses | Veloura', ar: 'وكالة تسويق للأعمال في قطر | Veloura' },
    metaDesc: { en: 'Remote-first boutique marketing, branding, websites, SEO, paid campaigns, CRM, and analytics for Qatar businesses and brands.', ar: 'تسويق بوتيك وهوية ومواقع وسيو وحملات مدفوعة وCRM وتحليلات عن بُعد للأعمال والعلامات في قطر.' },
    intro: { en: 'Veloura works remotely with Qatar businesses that need a premium digital presence, clearer service journeys, and measured campaign systems.', ar: 'تعمل Veloura عن بُعد مع أعمال قطر التي تحتاج حضوراً رقمياً راقياً ورحلات خدمات أوضح وأنظمة حملات مقاسة.' },
    markets: [
      { en: 'Doha and Qatar-wide brands.', ar: 'الدوحة والعلامات في قطر.' },
      { en: 'Built for bilingual communication and structured project delivery.', ar: 'مصمم لتواصل ثنائي اللغة وتنفيذ مشاريع منظم.' },
    ],
    proof: { en: 'Our model supports remote strategy sessions, shared assets, approval flows, and measurable launch plans.', ar: 'يدعم نموذجنا جلسات استراتيجية عن بُعد وأصول مشتركة ومسارات موافقة وخطط إطلاق قابلة للقياس.' },
  },
  {
    id: 'doha',
    slug: 'doha',
    title: { en: 'Doha', ar: 'الدوحة' },
    h1: { en: 'Boutique Marketing Agency for Doha Brands', ar: 'وكالة تسويق بوتيك لعلامات الدوحة' },
    metaTitle: { en: 'Boutique Marketing Agency for Doha Brands | Veloura', ar: 'وكالة تسويق بوتيك لعلامات الدوحة | Veloura' },
    metaDesc: { en: 'Remote-first branding, websites, campaigns, SEO, CRM, and analytics for Doha brands that need a premium digital presence.', ar: 'هوية ومواقع وحملات وسيو وCRM وتحليلات عن بُعد لعلامات الدوحة التي تحتاج حضوراً رقمياً راقياً.' },
    intro: { en: 'Veloura helps Doha brands sharpen how they are seen, understood, contacted, and measured online.', ar: 'تساعد Veloura علامات الدوحة على تحسين طريقة ظهورها وفهمها والتواصل معها وقياسها رقمياً.' },
    markets: [
      { en: 'Useful for clinics, restaurants, real estate, retail, consultants, and service firms.', ar: 'مناسب للعيادات والمطاعم والعقار والتجزئة والاستشاريين وشركات الخدمات.' },
      { en: 'Remote-first collaboration with premium English and Arabic content.', ar: 'تعاون عن بُعد بمحتوى عربي وإنجليزي راقٍ.' },
    ],
    proof: { en: 'Veloura is based in Jordan and serves Doha remotely through structured digital delivery.', ar: 'تقع Veloura في الأردن وتخدم الدوحة عن بُعد عبر تنفيذ رقمي منظم.' },
  },
  {
    id: 'kuwait',
    slug: 'kuwait',
    title: { en: 'Kuwait', ar: 'الكويت' },
    h1: { en: 'Remote-First Marketing Agency for Kuwait Brands', ar: 'وكالة تسويق عن بُعد للعلامات في الكويت' },
    metaTitle: { en: 'Marketing Agency for Kuwait Brands | Veloura', ar: 'وكالة تسويق للعلامات في الكويت | Veloura' },
    metaDesc: { en: 'Premium remote marketing, branding, websites, campaigns, SEO, CRM, and analytics for Kuwait brands and service businesses.', ar: 'تسويق وهوية ومواقع وحملات وسيو وCRM وتحليلات عن بُعد للعلامات والأعمال الخدمية في الكويت.' },
    intro: { en: 'Veloura supports Kuwait brands with refined digital systems that connect credibility, content, campaigns, and lead flow.', ar: 'تدعم Veloura علامات الكويت بأنظمة رقمية راقية تربط المصداقية والمحتوى والحملات وتدفق الفرص.' },
    markets: [
      { en: 'Suitable for premium retail, clinics, hospitality, consulting, and service firms.', ar: 'مناسب للتجزئة الراقية والعيادات والضيافة والاستشارات وشركات الخدمات.' },
      { en: 'Remote execution with bilingual communication.', ar: 'تنفيذ عن بُعد بتواصل ثنائي اللغة.' },
    ],
    proof: { en: 'Each project is scoped around diagnosis, market context, and measurable outcomes.', ar: 'يُبنى كل مشروع حول التشخيص وسياق السوق والنتائج القابلة للقياس.' },
  },
  {
    id: 'bahrain',
    slug: 'bahrain',
    title: { en: 'Bahrain', ar: 'البحرين' },
    h1: { en: 'Boutique Marketing and Digital Growth for Bahrain Brands', ar: 'تسويق بوتيك ونمو رقمي للعلامات في البحرين' },
    metaTitle: { en: 'Marketing Agency for Bahrain Brands | Veloura', ar: 'وكالة تسويق للعلامات في البحرين | Veloura' },
    metaDesc: { en: 'Remote-first branding, websites, campaigns, SEO, CRM, and analytics for Bahrain brands that need a refined digital growth system.', ar: 'هوية ومواقع وحملات وسيو وCRM وتحليلات عن بُعد لعلامات البحرين التي تحتاج نظام نمو رقمي راقياً.' },
    intro: { en: 'Veloura works with Bahrain brands that need sharper positioning, better digital presentation, and cleaner lead handling.', ar: 'تعمل Veloura مع علامات البحرين التي تحتاج تموضعاً أوضح وحضوراً رقمياً أفضل وإدارة فرص أنظف.' },
    markets: [
      { en: 'Built for serious service, retail, restaurant, clinic, and professional brands.', ar: 'مصمم للخدمات والتجزئة والمطاعم والعيادات والعلامات المهنية الجادة.' },
      { en: 'Remote-first delivery from Jordan across the Gulf.', ar: 'تنفيذ عن بُعد من الأردن عبر الخليج.' },
    ],
    proof: { en: 'We build custom scopes instead of generic monthly packages.', ar: 'نبني نطاقات مخصصة بدلاً من باقات شهرية عامة.' },
  },
  {
    id: 'oman',
    slug: 'oman',
    title: { en: 'Oman', ar: 'عُمان' },
    h1: { en: 'Remote-First Marketing Agency for Oman Businesses', ar: 'وكالة تسويق عن بُعد للأعمال في عُمان' },
    metaTitle: { en: 'Marketing Agency for Oman Businesses | Veloura', ar: 'وكالة تسويق للأعمال في عُمان | Veloura' },
    metaDesc: { en: 'Premium remote marketing, branding, websites, campaigns, SEO, CRM, and analytics for Oman businesses and growth-focused brands.', ar: 'تسويق وهوية ومواقع وحملات وسيو وCRM وتحليلات عن بُعد للأعمال والعلامات الطموحة في عُمان.' },
    intro: { en: 'Veloura helps Oman businesses build a calmer, more credible, more measurable digital presence for serious customers.', ar: 'تساعد Veloura أعمال عُمان على بناء حضور رقمي أهدأ وأكثر مصداقية وقابلاً للقياس للعملاء الجادين.' },
    markets: [
      { en: 'Useful for premium local services, healthcare, hospitality, consultants, and retail.', ar: 'مناسب للخدمات المحلية الراقية والرعاية الصحية والضيافة والاستشاريين والتجزئة.' },
      { en: 'Remote collaboration with structured approvals and bilingual delivery.', ar: 'تعاون عن بُعد بموافقات منظمة وتسليم ثنائي اللغة.' },
    ],
    proof: { en: 'Every scope connects brand perception, digital journey, and lead follow-up.', ar: 'كل نطاق يربط انطباع العلامة والرحلة الرقمية ومتابعة الفرص.' },
  },
  {
    id: 'jordan',
    slug: 'jordan',
    title: { en: 'Jordan', ar: 'الأردن' },
    h1: { en: 'Jordan-Based Marketing Agency Serving Gulf and International Brands', ar: 'وكالة تسويق من الأردن تخدم العلامات الخليجية والدولية' },
    metaTitle: { en: 'Jordan-Based Marketing Agency for Gulf Brands | Veloura', ar: 'وكالة تسويق من الأردن للعلامات الخليجية | Veloura' },
    metaDesc: { en: 'Veloura is based in Jordan and serves Gulf and international brands remotely through branding, websites, campaigns, SEO, CRM, and analytics.', ar: 'Veloura وكالة مقرها الأردن وتخدم العلامات الخليجية والدولية عن بُعد عبر الهوية والمواقع والحملات والسيو وCRM والتحليلات.' },
    intro: { en: 'Jordan is Veloura’s operational base, not its market limit. The agency is remote-first and built for Gulf-focused and international delivery.', ar: 'الأردن هو قاعدة Veloura التشغيلية، وليس حدود سوقها. الوكالة تعمل عن بُعد ومبنية للتنفيذ في الخليج والأسواق الدولية.' },
    markets: [
      { en: 'Based in Jordan, serving GCC, MENA, and worldwide remote clients.', ar: 'مقرها الأردن وتخدم الخليج والشرق الأوسط والعملاء الدوليين عن بُعد.' },
      { en: 'Strategy, design, web, campaigns, CRM, analytics, and business communication.', ar: 'استراتيجية وتصميم ومواقع وحملات وCRM وتحليلات وتواصل مؤسسي.' },
    ],
    proof: { en: 'The positioning is Gulf-focused and internationally available, with Jordan as a credibility and operations anchor.', ar: 'التموضع خليجي ودولي، مع الأردن كقاعدة مصداقية وتشغيل.' },
  },
];

export const INSIGHT_TOPICS: Localized[] = [
  { en: 'Why Premium Branding Builds Trust Before a Customer Speaks to You', ar: 'لماذا تبني الهوية الراقية الثقة قبل أن يتحدث العميل معك' },
  { en: 'The Difference Between Social Media Posting and a Real Marketing System', ar: 'الفرق بين النشر على السوشيال ونظام التسويق الحقيقي' },
  { en: 'Why Gulf Brands Need Bilingual Digital Systems', ar: 'لماذا تحتاج العلامات الخليجية إلى أنظمة رقمية ثنائية اللغة' },
  { en: 'What Is GEO and Why Should Brands Care About AI Search?', ar: 'ما هو GEO ولماذا يجب أن تهتم العلامات ببحث الذكاء الاصطناعي؟' },
];

export const findServicePage = (slug: string | null): ServicePage | undefined =>
  SERVICE_PAGES.find((item) => item.slug === slug || item.id === slug);

export const serviceSlugById = (id: string): string =>
  SERVICE_PAGES.find((item) => item.id === id)?.slug || id;

export const findIndustryPage = (slug: string | null): IndustryPage | undefined =>
  INDUSTRY_PAGES.find((item) => item.slug === slug || item.id === slug);

export const findLocationPage = (slug: string | null): LocationPage | undefined =>
  LOCATION_PAGES.find((item) => item.slug === slug || item.id === slug);
