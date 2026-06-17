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
      en: 'Brand Identity and Visual Systems for Premium Business Brands',
      ar: 'هوية وأنظمة بصرية للعلامات التجارية الراقية',
    },
    metaTitle: {
      en: 'Brand Identity and Visual Systems | Veloura',
      ar: 'الهوية والأنظمة البصرية | Veloura',
    },
    metaDesc: {
      en: 'Premium brand identity systems with strategy, logo direction, color palette, typography, brand voice, and consistent visual rules.',
      ar: 'أنظمة هوية بصرية راقية تشمل الاستراتيجية واتجاه الشعار والألوان والخطوط ونبرة العلامة وقواعد الاتساق.',
    },
    intro: {
      en: 'Veloura builds brand systems that make a business look sharper, more credible, and easier to recognize. The work connects strategy, logo direction, palette, typography, voice, and practical rules so every touchpoint feels intentional.',
      ar: 'تبني Veloura أنظمة هوية تجعل العمل أوضح وأكثر مصداقية وأسهل تذكراً. يربط العمل بين الاستراتيجية واتجاه الشعار والألوان والخطوط والنبرة والقواعد العملية حتى يبدو كل تواصل مقصوداً.',
    },
    audience: [
      { en: 'Companies preparing for a stronger market presence.', ar: 'شركات تستعد لحضور سوقي أقوى.' },
      { en: 'Clinics, service businesses, real estate projects, venues, and retail brands that need a more premium standard.', ar: 'عيادات وأعمال خدمية ومشاريع عقارية وقاعات وعلامات تجزئة تحتاج معياراً أكثر رقيّاً.' },
      { en: 'Businesses whose website, social media, and documents no longer feel aligned.', ar: 'أعمال لم تعد مواقعها وسوشيالها ومستنداتها تبدو متناسقة.' },
    ],
    problems: [
      { en: 'The brand looks different across every channel.', ar: 'تبدو العلامة مختلفة في كل قناة.' },
      { en: 'The business feels less premium online than it is in reality.', ar: 'يبدو العمل رقمياً أقل رقيّاً من حقيقته.' },
      { en: 'Design decisions are made case by case with no visual system.', ar: 'تُتخذ قرارات التصميم حالة بحالة دون نظام بصري.' },
    ],
    deliverables: [
      { en: 'Brand strategy, logo direction, color palette, typography, and art direction.', ar: 'استراتيجية علامة، اتجاه شعار، ألوان، خطوط، واتجاه فني.' },
      { en: 'Brand voice, usage rules, social style, and practical guidelines.', ar: 'نبرة علامة، قواعد استخدام، أسلوب سوشيال، ودليل عملي.' },
      { en: 'Applied examples for websites, ads, decks, profiles, and business documents.', ar: 'تطبيقات على المواقع والإعلانات والعروض والبروفايلات والمستندات المؤسسية.' },
    ],
    process: [
      { en: 'Audit the current brand and competitive context.', ar: 'تدقيق العلامة الحالية وسياق المنافسين.' },
      { en: 'Define the position, voice, and visual direction.', ar: 'تحديد التموضع والنبرة والاتجاه البصري.' },
      { en: 'Build the identity system and apply it to priority touchpoints.', ar: 'بناء نظام الهوية وتطبيقه على نقاط التواصل الأهم.' },
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
      en: 'UI/UX Design for Clear, Conversion-Focused Digital Experiences',
      ar: 'تصميم UI/UX لتجارب رقمية واضحة ومركزة على التحويل',
    },
    metaTitle: {
      en: 'UI/UX Design for Websites and Digital Journeys | Veloura',
      ar: 'تصميم UI/UX للمواقع والرحلات الرقمية | Veloura',
    },
    metaDesc: {
      en: 'Wireframes, user journeys, prototypes, and clean conversion-focused interfaces designed in Figma for serious business websites and products.',
      ar: 'مخططات ورحلات مستخدم ونماذج تفاعلية وواجهات نظيفة مركزة على التحويل تُصمم في Figma للمواقع والمنتجات الجادة.',
    },
    intro: {
      en: 'Good UI/UX shortens the path from interest to action. Veloura designs wireframes, journeys, prototypes, and interfaces that explain the offer clearly and make the next step feel natural.',
      ar: 'تصميم UI/UX الجيد يختصر الطريق من الاهتمام إلى الفعل. تصمم Veloura مخططات ورحلات ونماذج وواجهات تشرح العرض بوضوح وتجعل الخطوة التالية طبيعية.',
    },
    audience: [
      { en: 'Businesses redesigning a website, landing page, or digital flow.', ar: 'أعمال تعيد تصميم موقع أو صفحة هبوط أو مسار رقمي.' },
      { en: 'Teams that need a Figma-ready interface before development.', ar: 'فرق تحتاج واجهة جاهزة في Figma قبل التطوير.' },
      { en: 'Brands that need bilingual English and Arabic layouts.', ar: 'علامات تحتاج تخطيطات عربية وإنجليزية.' },
    ],
    problems: [
      { en: 'Visitors arrive but do not understand what to do next.', ar: 'يصل الزوار ولا يفهمون الخطوة التالية.' },
      { en: 'Important proof, forms, pricing, or contact paths are hard to find.', ar: 'الدليل أو النماذج أو الأسعار أو مسارات التواصل صعبة الوصول.' },
      { en: 'The interface looks polished but creates friction.', ar: 'الواجهة تبدو مصقولة لكنها تخلق احتكاكاً.' },
    ],
    deliverables: [
      { en: 'User journeys, information architecture, wireframes, responsive UI, and Figma prototypes.', ar: 'رحلات مستخدم، هيكلة معلومات، مخططات، واجهات متجاوبة، ونماذج Figma.' },
      { en: 'Conversion path recommendations and UI component states.', ar: 'توصيات مسار التحويل وحالات مكونات الواجهة.' },
      { en: 'Bilingual layout considerations for Arabic RTL and English LTR.', ar: 'اعتبارات تخطيط ثنائية اللغة للعربية RTL والإنجليزية LTR.' },
    ],
    process: [
      { en: 'Map the audience journey and decision points.', ar: 'رسم رحلة الجمهور ونقاط القرار.' },
      { en: 'Design wireframes, hierarchy, and interface states.', ar: 'تصميم المخططات والتسلسل وحالات الواجهة.' },
      { en: 'Prepare a clean prototype and build-ready UI direction.', ar: 'تجهيز نموذج واضح واتجاه واجهة جاهز للتطوير.' },
    ],
    related: ['website-development', 'landing-pages', 'brand-identity'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'web-development',
    slug: 'website-development',
    icon: 'wordpress',
    title: { en: 'Website Development', ar: 'تطوير المواقع' },
    h1: {
      en: 'Website Development for Companies, Clinics, and Service Businesses',
      ar: 'تطوير مواقع للشركات والعيادات والأعمال الخدمية',
    },
    metaTitle: {
      en: 'WordPress and Custom Website Development | Veloura',
      ar: 'تطوير مواقع ووردبريس ومواقع مخصصة | Veloura',
    },
    metaDesc: {
      en: 'Fast, refined WordPress and custom-coded websites for companies, clinics, portfolios, service businesses, and landing-driven business sites.',
      ar: 'مواقع ووردبريس ومواقع مبرمجة سريعة ومصقولة للشركات والعيادات ومعارض الأعمال والخدمات والمواقع المبنية حول صفحات هبوط.',
    },
    intro: {
      en: 'A website should make the business easier to understand, trust, and contact. Veloura builds WordPress and custom-coded websites with refined design, practical SEO basics, fast performance, and clear conversion paths.',
      ar: 'يجب أن يجعل الموقع العمل أسهل فهماً وثقة وتواصلاً. تبني Veloura مواقع ووردبريس ومواقع مبرمجة بتصميم مصقول وسيو عملي وأداء سريع ومسارات تحويل واضحة.',
    },
    audience: [
      { en: 'Companies with outdated, slow, or unclear websites.', ar: 'شركات لديها مواقع قديمة أو بطيئة أو غير واضحة.' },
      { en: 'Clinics, portfolios, service businesses, and business sites built around enquiries.', ar: 'عيادات ومعارض أعمال وشركات خدمات ومواقع أعمال مبنية حول الاستفسارات.' },
      { en: 'Brands preparing for a launch, campaign, or stronger digital presence.', ar: 'علامات تستعد لإطلاق أو حملة أو حضور رقمي أقوى.' },
    ],
    problems: [
      { en: 'The website does not explain the offer quickly.', ar: 'الموقع لا يشرح العرض بسرعة.' },
      { en: 'The design feels weaker than the company.', ar: 'التصميم يبدو أضعف من الشركة.' },
      { en: 'Pages, forms, and calls to action are not structured for enquiries.', ar: 'الصفحات والنماذج والدعوات ليست منظمة للاستفسارات.' },
    ],
    deliverables: [
      { en: 'Website strategy, UX direction, responsive design, WordPress or custom-coded build, and launch support.', ar: 'استراتيجية موقع، توجه UX، تصميم متجاوب، تطوير ووردبريس أو برمجة مخصصة، ودعم إطلاق.' },
      { en: 'Service sections, case-study structures, contact paths, and practical SEO setup.', ar: 'أقسام خدمات، هياكل دراسات حالة، مسارات تواصل، وإعداد سيو عملي.' },
      { en: 'Performance, metadata, headings, and mobile checks before launch.', ar: 'فحص الأداء والميتا والعناوين والموبايل قبل الإطلاق.' },
    ],
    process: [
      { en: 'Audit the current site, brand, and customer journey.', ar: 'تدقيق الموقع الحالي والعلامة ورحلة العميل.' },
      { en: 'Plan the sitemap, page hierarchy, and conversion paths.', ar: 'تخطيط خريطة الموقع وتسلسل الصفحات ومسارات التحويل.' },
      { en: 'Design, build, test, and launch with a clean handoff.', ar: 'تصميم وتطوير واختبار وإطلاق مع تسليم واضح.' },
    ],
    related: ['ui-ux-design', 'basic-seo', 'landing-pages'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'landing-pages',
    slug: 'landing-pages',
    icon: 'landing',
    title: { en: 'Landing Pages & Case Studies', ar: 'صفحات الهبوط ودراسات الحالة' },
    h1: {
      en: 'Landing Pages and Case Studies That Turn One Offer Into One Clear Story',
      ar: 'صفحات هبوط ودراسات حالة تحوّل العرض إلى قصة واحدة واضحة',
    },
    metaTitle: {
      en: 'Landing Page and Case Study Design | Veloura',
      ar: 'تصميم صفحات هبوط ودراسات حالة | Veloura',
    },
    metaDesc: {
      en: 'Focused landing pages and case studies that turn an offer, launch, service, or result into one persuasive story with a clear action.',
      ar: 'صفحات هبوط ودراسات حالة مركزة تحول العرض أو الإطلاق أو الخدمة أو النتيجة إلى قصة مقنعة بفعل واضح.',
    },
    intro: {
      en: 'A landing page should not try to say everything. Veloura builds focused pages that explain the offer, handle objections, show proof, and guide the visitor toward one clear action.',
      ar: 'لا يجب أن تحاول صفحة الهبوط قول كل شيء. تبني Veloura صفحات مركزة تشرح العرض وتعالج الاعتراضات وتعرض الدليل وتقود الزائر إلى فعل واحد واضح.',
    },
    audience: [
      { en: 'Campaigns that need a dedicated page instead of the homepage.', ar: 'حملات تحتاج صفحة مخصصة بدلاً من الصفحة الرئيسية.' },
      { en: 'Launches, offers, service pages, case studies, and project pages.', ar: 'إطلاقات وعروض وصفحات خدمات ودراسات حالة وصفحات مشاريع.' },
      { en: 'Businesses that need a clearer story before asking for contact.', ar: 'أعمال تحتاج قصة أوضح قبل طلب التواصل.' },
    ],
    problems: [
      { en: 'Traffic lands on pages with too many competing messages.', ar: 'تصل الزيارات إلى صفحات برسائل كثيرة متنافسة.' },
      { en: 'The offer is unclear above the fold.', ar: 'العرض غير واضح في الشاشة الأولى.' },
      { en: 'Proof, pricing context, FAQs, or forms appear too late.', ar: 'الدليل أو سياق السعر أو الأسئلة أو النماذج تظهر متأخرة.' },
    ],
    deliverables: [
      { en: 'Offer strategy, page structure, UX copy direction, responsive design, and build support.', ar: 'استراتيجية عرض، بنية صفحة، توجيه نصوص UX، تصميم متجاوب، ودعم تطوير.' },
      { en: 'Case study frameworks that turn work, results, and process into trust.', ar: 'هياكل دراسات حالة تحول العمل والنتائج والمنهج إلى ثقة.' },
      { en: 'Forms, calls to action, metadata, and practical launch checks.', ar: 'نماذج ودعوات فعل وميتا وفحوص إطلاق عملية.' },
    ],
    process: [
      { en: 'Clarify the audience, offer, proof, and primary action.', ar: 'توضيح الجمهور والعرض والدليل والفعل الأساسي.' },
      { en: 'Design the page around the decision path.', ar: 'تصميم الصفحة حول مسار القرار.' },
      { en: 'Prepare the final page with clean copy, visual hierarchy, and launch notes.', ar: 'تجهيز الصفحة النهائية بنص واضح وتسلسل بصري وملاحظات إطلاق.' },
    ],
    related: ['ad-designs-campaign-creatives', 'website-development', 'basic-seo'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'ad-designs',
    slug: 'ad-designs-campaign-creatives',
    icon: 'ads',
    title: { en: 'Ad Designs & Campaign Creatives', ar: 'التصاميم والحملات الإعلانية' },
    h1: {
      en: 'Ad Designs and Campaign Creatives for Clearer Offers',
      ar: 'تصاميم إعلانية وإبداع حملات لعروض أوضح',
    },
    metaTitle: {
      en: 'Ad Designs and Campaign Creatives | Veloura',
      ar: 'التصاميم وإبداع الحملات | Veloura',
    },
    metaDesc: {
      en: 'Static ads, stories, carousels, and creative angles designed for Meta, TikTok, Snapchat, and Google campaign use.',
      ar: 'إعلانات ثابتة وقصص وكاروسيل وزوايا إبداعية مصممة للاستخدام في حملات ميتا وتيك توك وسناب وجوجل.',
    },
    intro: {
      en: 'Veloura designs campaign creatives that make an offer easier to notice and understand. The focus is on the message, angle, visual system, and platform-ready assets.',
      ar: 'تصمم Veloura إبداع حملات يجعل العرض أسهل ملاحظة وفهماً. التركيز على الرسالة والزاوية والنظام البصري والأصول الجاهزة للمنصات، لا على ادعاء إدارة إعلانية متقدمة.',
    },
    audience: [
      { en: 'Businesses preparing campaign assets for Meta, TikTok, Snapchat, or Google.', ar: 'أعمال تجهز أصول حملات لميتا أو تيك توك أو سناب أو جوجل.' },
      { en: 'Teams that need multiple creative angles, not one repeated design.', ar: 'فرق تحتاج زوايا إبداعية متعددة لا تصميماً واحداً مكرراً.' },
      { en: 'Brands that need visuals aligned with identity and offer strategy.', ar: 'علامات تحتاج مرئيات متوافقة مع الهوية واستراتيجية العرض.' },
    ],
    problems: [
      { en: 'The campaign has designs but no clear angle.', ar: 'لدى الحملة تصاميم لكن بلا زاوية واضحة.' },
      { en: 'The visual style changes from one post to another.', ar: 'يتغير الأسلوب البصري من منشور إلى آخر.' },
      { en: 'The ad explains too little or tries to say too much.', ar: 'الإعلان يشرح أقل من اللازم أو يحاول قول الكثير.' },
    ],
    deliverables: [
      { en: 'Creative angles, static ads, stories, carousels, hooks, and campaign visual systems.', ar: 'زوايا إبداعية، إعلانات ثابتة، قصص، كاروسيل، افتتاحيات، وأنظمة بصرية للحملات.' },
      { en: 'Platform-aware formats for Meta, TikTok, Snapchat, and Google creative use.', ar: 'صيغ واعية بالمنصات لاستخدام إبداعي على ميتا وتيك توك وسناب وجوجل.' },
      { en: 'Light creative testing recommendations where useful.', ar: 'توصيات اختبار إبداعي خفيفة عند الحاجة.' },
    ],
    process: [
      { en: 'Define the offer, audience, and objections.', ar: 'تحديد العرض والجمهور والاعتراضات.' },
      { en: 'Create campaign angles and visual directions.', ar: 'إنشاء زوايا الحملة والاتجاهات البصرية.' },
      { en: 'Prepare polished assets for launch use.', ar: 'تجهيز أصول مصقولة للاستخدام في الإطلاق.' },
    ],
    related: ['landing-pages', 'social-media-strategy', 'brand-identity'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'social-media',
    slug: 'social-media-strategy',
    icon: 'social',
    title: { en: 'Social Media Strategy', ar: 'استراتيجية وسائل التواصل' },
    h1: {
      en: 'Social Media Strategy for Brand-Consistent Content Systems',
      ar: 'استراتيجية وسائل تواصل لأنظمة محتوى متسقة مع الهوية',
    },
    metaTitle: {
      en: 'Social Media Strategy and Content Direction | Veloura',
      ar: 'استراتيجية وسائل التواصل وتوجيه المحتوى | Veloura',
    },
    metaDesc: {
      en: 'Content direction, campaign ideas, post structure, calendars, captions, reels direction, and brand-consistent visual planning.',
      ar: 'توجيه محتوى وأفكار حملات وبنية منشورات وجداول وكابشن وتوجه ريلز وتخطيط بصري متسق مع الهوية.',
    },
    intro: {
      en: 'Veloura helps business pages feel intentional instead of random. The work creates content direction, post structures, calendars, captions, reels direction, and visual planning that support the brand.',
      ar: 'تساعد Veloura صفحات الأعمال على أن تبدو مقصودة لا عشوائية. يبني العمل توجيه محتوى وبنى منشورات وجداول وكابشن وتوجه ريلز وتخطيطاً بصرياً يخدم العلامة.',
    },
    audience: [
      { en: 'Businesses with inconsistent social pages and unclear content rhythm.', ar: 'أعمال لديها صفحات سوشيال غير متسقة وإيقاع محتوى غير واضح.' },
      { en: 'Clinics, restaurants, retail, venues, and service companies that need trust before contact.', ar: 'عيادات ومطاعم وتجزئة وقاعات وشركات خدمات تحتاج الثقة قبل التواصل.' },
      { en: 'Teams that want content direction without generic post-count packages.', ar: 'فرق تريد توجيه محتوى لا باقات منشورات عامة.' },
    ],
    problems: [
      { en: 'Content is posted without a clear business role.', ar: 'يُنشر المحتوى دون دور تجاري واضح.' },
      { en: 'The page looks active but not persuasive.', ar: 'الصفحة نشطة لكنها غير مقنعة.' },
      { en: 'Captions, reels, and visuals do not feel like one brand.', ar: 'الكابشن والريلز والمرئيات لا تبدو كعلامة واحدة.' },
    ],
    deliverables: [
      { en: 'Content pillars, campaign ideas, post structures, calendars, captions, and reels direction.', ar: 'ركائز محتوى، أفكار حملات، بنى منشورات، جداول، كابشن، وتوجه ريلز.' },
      { en: 'Brand-consistent visual planning and creative direction.', ar: 'تخطيط بصري واتجاه إبداعي متسق مع الهوية.' },
      { en: 'Inquiry and response-path recommendations where needed.', ar: 'توصيات لمسارات الاستفسار والرد عند الحاجة.' },
    ],
    process: [
      { en: 'Audit the current page, audience, and brand voice.', ar: 'تدقيق الصفحة والجمهور ونبرة العلامة.' },
      { en: 'Build the content system around trust, proof, education, and offers.', ar: 'بناء نظام المحتوى حول الثقة والدليل والتعليم والعروض.' },
      { en: 'Prepare the calendar, creative direction, and repeatable structure.', ar: 'تجهيز الجدول والاتجاه الإبداعي والبنية القابلة للتكرار.' },
    ],
    related: ['ad-designs-campaign-creatives', 'ai-video-motion-content', 'brand-identity'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'ai-video',
    slug: 'ai-video-motion-content',
    icon: 'video',
    title: { en: 'AI Video & Motion Content', ar: 'فيديو الذكاء الاصطناعي والموشن' },
    h1: {
      en: 'AI Video and Motion Content With a Premium Brand Standard',
      ar: 'فيديو ذكاء اصطناعي وموشن بمعيار علامة راقٍ',
    },
    metaTitle: {
      en: 'AI Video and Motion Content | Veloura',
      ar: 'فيديو الذكاء الاصطناعي والموشن | Veloura',
    },
    metaDesc: {
      en: 'AI-assisted short clips, reels, motion visuals, and premium-looking branded video content shaped around brand taste and message clarity.',
      ar: 'مقاطع قصيرة وريلز ومرئيات موشن ومحتوى فيديو بعلامة راقية بمساعدة الذكاء الاصطناعي حول الذوق ووضوح الرسالة.',
    },
    intro: {
      en: 'AI can speed up production, but taste still decides whether the output feels premium. Veloura uses AI and motion to create branded short clips, reels, and launch visuals with a clear message.',
      ar: 'يمكن للذكاء الاصطناعي تسريع الإنتاج، لكن الذوق ما زال يحدد إن كانت النتيجة راقية. تستخدم Veloura الذكاء الاصطناعي والموشن لإنتاج مقاطع وريلز ومرئيات إطلاق بعلامة واضحة.',
    },
    audience: [
      { en: 'Brands that need short premium video assets without heavy production.', ar: 'علامات تحتاج أصول فيديو قصيرة وراقية دون إنتاج ثقيل.' },
      { en: 'Campaigns, launches, reels, explainers, and motion-led content.', ar: 'حملات وإطلاقات وريلز وشروحات ومحتوى قائم على الحركة.' },
      { en: 'Teams that need ideas shaped before visuals are generated.', ar: 'فرق تحتاج صياغة الفكرة قبل توليد المرئيات.' },
    ],
    problems: [
      { en: 'AI output feels generic and disconnected from the brand.', ar: 'مخرجات الذكاء الاصطناعي تبدو عامة ومنفصلة عن العلامة.' },
      { en: 'Motion is used for decoration instead of message clarity.', ar: 'تُستخدم الحركة للزينة بدل وضوح الرسالة.' },
      { en: 'Video production is too slow for campaign needs.', ar: 'إنتاج الفيديو أبطأ من حاجات الحملة.' },
    ],
    deliverables: [
      { en: 'Concepts, scripts, AI-assisted visual directions, short clips, reels, and motion assets.', ar: 'أفكار ونصوص وتوجهات بصرية بمساعدة الذكاء الاصطناعي ومقاطع قصيرة وريلز وأصول موشن.' },
      { en: 'Brand-safe prompt direction and review notes.', ar: 'توجيه مطالبات آمن للعلامة وملاحظات مراجعة.' },
      { en: 'Export-ready formats for social and campaign use.', ar: 'صيغ جاهزة للتصدير للسوشيال والحملات.' },
    ],
    process: [
      { en: 'Define the story, use case, and brand tone.', ar: 'تحديد القصة والاستخدام ونبرة العلامة.' },
      { en: 'Generate, review, and refine with brand judgment.', ar: 'توليد ومراجعة وتحسين بحكم بصري مناسب للعلامة.' },
      { en: 'Prepare final assets for publishing or campaign use.', ar: 'تجهيز الأصول النهائية للنشر أو الاستخدام في الحملات.' },
    ],
    related: ['social-media-strategy', 'ad-designs-campaign-creatives', 'brand-identity'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'competition-analysis',
    slug: 'competition-analysis',
    icon: 'analysis',
    title: { en: 'Competition Analysis', ar: 'تحليل المنافسين' },
    h1: {
      en: 'Competition Analysis for Sharper Branding, Websites, Content, and Offers',
      ar: 'تحليل منافسين لهوية ومواقع ومحتوى وعروض أوضح',
    },
    metaTitle: {
      en: 'Competition Analysis for Digital Positioning | Veloura',
      ar: 'تحليل منافسين للتموضع الرقمي | Veloura',
    },
    metaDesc: {
      en: 'Clear analysis of competitors’ branding, websites, content, ads, positioning, and market gaps to guide better digital decisions.',
      ar: 'تحليل واضح لهوية المنافسين ومواقعهم ومحتواهم وإعلاناتهم وتموضعهم وفجوات السوق لتوجيه قرارات رقمية أفضل.',
    },
    intro: {
      en: 'A sharper brand starts by understanding what the market already sees. Veloura studies competitors across branding, websites, content, ads, positioning, and gaps so the next move is based on evidence.',
      ar: 'تبدأ العلامة الأوضح بفهم ما يراه السوق بالفعل. تدرس Veloura المنافسين عبر الهوية والمواقع والمحتوى والإعلانات والتموضع والفجوات حتى تكون الخطوة التالية مبنية على دليل.',
    },
    audience: [
      { en: 'Businesses entering a new market or repositioning against stronger competitors.', ar: 'أعمال تدخل سوقاً جديداً أو تعيد تموضعها أمام منافسين أقوى.' },
      { en: 'Brands that feel competitors look more professional online.', ar: 'علامات تشعر أن منافسيها يبدون أكثر احترافاً رقمياً.' },
      { en: 'Teams that need clarity before investing in brand, web, or campaign work.', ar: 'فرق تحتاج وضوحاً قبل الاستثمار في الهوية أو الموقع أو الحملات.' },
    ],
    problems: [
      { en: 'The team is guessing what competitors are doing well.', ar: 'الفريق يخمّن ما يفعله المنافسون جيداً.' },
      { en: 'The brand sounds similar to everyone else.', ar: 'العلامة تبدو مشابهة للجميع.' },
      { en: 'Design and content decisions start without market evidence.', ar: 'تبدأ قرارات التصميم والمحتوى دون دليل سوقي.' },
    ],
    deliverables: [
      { en: 'Competitor map across brand, website, content, ads, positioning, and customer journey.', ar: 'خريطة منافسين عبر الهوية والموقع والمحتوى والإعلانات والتموضع ورحلة العميل.' },
      { en: 'Gap analysis, messaging opportunities, and practical recommendations.', ar: 'تحليل فجوات وفرص رسائل وتوصيات عملية.' },
      { en: 'Priority actions for brand identity, website, content, landing pages, or basic SEO.', ar: 'أولويات عمل للهوية والموقع والمحتوى وصفحات الهبوط أو السيو الأساسي.' },
    ],
    process: [
      { en: 'Select the real competitor set and comparison criteria.', ar: 'اختيار مجموعة المنافسين الفعلية ومعايير المقارنة.' },
      { en: 'Review brand, website, content, ads, and positioning signals.', ar: 'مراجعة إشارات الهوية والموقع والمحتوى والإعلانات والتموضع.' },
      { en: 'Translate findings into a sharper action plan.', ar: 'تحويل النتائج إلى خطة عمل أوضح.' },
    ],
    related: ['brand-identity', 'website-development', 'basic-seo'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'basic-seo',
    slug: 'basic-seo',
    icon: 'seo',
    title: { en: 'Basic SEO', ar: 'السيو الأساسي' },
    h1: {
      en: 'Basic Website SEO for Clearer Structure, Metadata, and Local Visibility',
      ar: 'سيو أساسي للمواقع لبنية أوضح وميتا وظهور محلي',
    },
    metaTitle: {
      en: 'Basic Website SEO Setup | Veloura',
      ar: 'إعداد السيو الأساسي للمواقع | Veloura',
    },
    metaDesc: {
      en: 'Practical website SEO covering technical basics, on-page structure, metadata, headings, performance, local SEO basics, and content direction.',
      ar: 'سيو عملي للمواقع يشمل الأساسيات التقنية وبنية الصفحات والميتا والعناوين والأداء وأساسيات السيو المحلي وتوجيه المحتوى.',
    },
    intro: {
      en: 'Veloura treats SEO as a practical website layer, not an inflated promise. The focus is clear page structure, metadata, headings, performance, local basics, and content direction that supports a better website.',
      ar: 'تتعامل Veloura مع السيو كطبقة عملية للموقع لا كوعد مبالغ فيه. التركيز على بنية صفحات واضحة وميتا وعناوين وأداء وأساسيات محلية وتوجيه محتوى يدعم موقعاً أفضل.',
    },
    audience: [
      { en: 'Businesses launching or improving a company website.', ar: 'أعمال تطلق أو تحسن موقع شركة.' },
      { en: 'Clinics, service businesses, venues, and local companies that need practical search hygiene.', ar: 'عيادات وأعمال خدمية وقاعات وشركات محلية تحتاج أساسيات ظهور عملية.' },
      { en: 'Teams that need on-page clarity before investing in deeper SEO work.', ar: 'فرق تحتاج وضوحاً داخلياً قبل الاستثمار في سيو أعمق.' },
    ],
    problems: [
      { en: 'Pages have weak titles, metadata, or heading structure.', ar: 'الصفحات لديها عناوين أو ميتا أو بنية عناوين ضعيفة.' },
      { en: 'Service pages are missing or unclear.', ar: 'صفحات الخدمات مفقودة أو غير واضحة.' },
      { en: 'Performance, indexing basics, or local search signals are neglected.', ar: 'الأداء أو أساسيات الفهرسة أو إشارات البحث المحلي مهملة.' },
    ],
    deliverables: [
      { en: 'On-page structure, titles, metadata, headings, internal linking, and content direction.', ar: 'بنية صفحات وعناوين وميتا وعناوين داخلية وروابط داخلية وتوجيه محتوى.' },
      { en: 'Technical basics such as performance checks, indexability, redirects, sitemap, and schema guidance.', ar: 'أساسيات تقنية مثل فحوص الأداء وقابلية الفهرسة والتحويلات وخريطة الموقع وتوجيه البيانات المنظمة.' },
      { en: 'Local SEO basics for Google Business Profile and service-location clarity where relevant.', ar: 'أساسيات السيو المحلي لنشاط Google ووضوح الخدمة والموقع عند الحاجة.' },
    ],
    process: [
      { en: 'Audit the website structure, metadata, and technical basics.', ar: 'تدقيق بنية الموقع والميتا والأساسيات التقنية.' },
      { en: 'Prioritize page fixes, content gaps, and local basics.', ar: 'تحديد أولويات إصلاح الصفحات وفجوات المحتوى والأساسيات المحلية.' },
      { en: 'Apply or hand off practical improvements with clear notes.', ar: 'تنفيذ التحسينات العملية أو تسليمها بملاحظات واضحة.' },
    ],
    related: ['website-development', 'landing-pages', 'competition-analysis'],
    faqs: commonServiceFaqs,
  },
  {
    id: 'comms-kit',
    slug: 'business-communication-kit',
    icon: 'comms',
    title: { en: 'Business Communication Kit', ar: 'حقيبة التواصل المؤسسي' },
    h1: {
      en: 'Business Communication Kits for Companies That Need to Look Serious',
      ar: 'حقائب تواصل مؤسسي لشركات تحتاج مظهراً جاداً',
    },
    metaTitle: {
      en: 'Company Profile, Pitch Deck and Proposal Design | Veloura',
      ar: 'تصميم بروفايل شركة وعروض ومقترحات | Veloura',
    },
    metaDesc: {
      en: 'Company profiles, pitch decks, proposals, letterheads, branded invoices, and serious business documents designed with a premium standard.',
      ar: 'بروفايلات شركات وعروض تقديمية ومقترحات وأوراق رسمية وفواتير ومستندات أعمال جادة مصممة بمعيار راقٍ.',
    },
    intro: {
      en: 'The documents around a business shape how serious it feels. Veloura designs communication kits that make company profiles, pitch decks, proposals, letterheads, invoices, and formal materials feel aligned and credible.',
      ar: 'المستندات المحيطة بالعمل تشكل مدى جديته. تصمم Veloura حقائب تواصل تجعل البروفايلات والعروض والمقترحات والأوراق الرسمية والفواتير والمواد الرسمية متناسقة وموثوقة.',
    },
    audience: [
      { en: 'Companies pitching clients, partners, investors, or official stakeholders.', ar: 'شركات تقدم لعملاء أو شركاء أو مستثمرين أو جهات رسمية.' },
      { en: 'Service businesses that need proposals and profiles to match their real quality.', ar: 'أعمال خدمية تحتاج مقترحات وبروفايلات تعكس جودتها الحقيقية.' },
      { en: 'Brands building a complete visual communication system.', ar: 'علامات تبني نظام تواصل بصرياً كاملاً.' },
    ],
    problems: [
      { en: 'Documents look inconsistent or improvised.', ar: 'المستندات تبدو غير متناسقة أو مرتجلة.' },
      { en: 'The proposal does not communicate value clearly.', ar: 'المقترح لا يوضح القيمة بوضوح.' },
      { en: 'Sales materials weaken trust after the first impression.', ar: 'مواد البيع تضعف الثقة بعد الانطباع الأول.' },
    ],
    deliverables: [
      { en: 'Company profile, pitch deck, proposal template, letterhead, invoice, and document styles.', ar: 'بروفايل شركة، عرض تقديمي، قالب مقترح، ورق رسمي، فاتورة، وأنماط مستندات.' },
      { en: 'Copy hierarchy and visual structure for serious business communication.', ar: 'تسلسل نصي وبصري لتواصل مؤسسي جاد.' },
      { en: 'Editable templates where the scope requires them.', ar: 'قوالب قابلة للتعديل عند الحاجة.' },
    ],
    process: [
      { en: 'Define the purpose and audience of each document.', ar: 'تحديد غرض وجمهور كل مستند.' },
      { en: 'Build the information hierarchy and visual system.', ar: 'بناء تسلسل المعلومات والنظام البصري.' },
      { en: 'Prepare polished files and templates for business use.', ar: 'تجهيز ملفات وقوالب مصقولة للاستخدام المؤسسي.' },
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
    h1: { en: 'Premium Digital Presence for Clinics and Healthcare Brands', ar: 'حضور رقمي راقٍ للعيادات والعلامات الصحية' },
    metaTitle: { en: 'Branding, Websites and Basic SEO for Clinics | Veloura', ar: 'هوية ومواقع وسيو أساسي للعيادات | Veloura' },
    metaDesc: { en: 'Trust-first branding, websites, service pages, basic SEO, and booking-ready landing pages for clinics and healthcare businesses.', ar: 'هوية ومواقع وصفحات خدمات وسيو أساسي وصفحات جاهزة للحجز للعيادات والأعمال الصحية.' },
    intro: { en: 'Healthcare buyers need confidence before they act. Veloura helps clinics present expertise clearly, structure services responsibly, and make booking or enquiry paths feel professional.', ar: 'يحتاج جمهور الرعاية الصحية إلى الثقة قبل الفعل. تساعد Veloura العيادات على تقديم الخبرة بوضوح وهيكلة الخدمات بمسؤولية وجعل مسارات الحجز أو الاستفسار أكثر احترافية.' },
    painPoints: [
      { en: 'Patients need trust before they book.', ar: 'يحتاج المرضى إلى الثقة قبل الحجز.' },
      { en: 'Service pages are often vague or too commercial.', ar: 'صفحات الخدمات غالباً غامضة أو تجارية أكثر من اللازم.' },
      { en: 'The website and social presence do not feel as professional as the clinic.', ar: 'الموقع والسوشيال لا يبدوان بمستوى احتراف العيادة.' },
    ],
    system: [
      { en: 'Trust-first identity and doctor/service presentation.', ar: 'هوية تبني الثقة وعرض واضح للأطباء والخدمات.' },
      { en: 'Website structure, practical SEO basics, and Google Business clarity.', ar: 'بنية موقع وسيو عملي ووضوح على Google Business.' },
      { en: 'Booking-ready landing pages and clear contact paths.', ar: 'صفحات هبوط جاهزة للحجز ومسارات تواصل واضحة.' },
    ],
    services: ['brand-identity', 'website-development', 'basic-seo', 'landing-pages'],
    journey: { en: 'A patient sees a clear service page, checks credibility, understands the next step, and sends a better-informed enquiry.', ar: 'يرى المريض صفحة خدمة واضحة، يتأكد من المصداقية، يفهم الخطوة التالية، ويرسل استفساراً أوضح.' },
  },
  {
    id: 'aesthetic-clinics',
    slug: 'aesthetic-clinics',
    title: { en: 'Aesthetic Clinics & Medical Centers', ar: 'عيادات التجميل والمراكز الطبية' },
    h1: { en: 'Brand, Landing Page, and Campaign Creative Systems for Aesthetic Clinics', ar: 'أنظمة هوية وصفحات هبوط وإبداع حملات لعيادات التجميل' },
    metaTitle: { en: 'Aesthetic Clinic Branding and Landing Pages | Veloura', ar: 'هوية وصفحات هبوط لعيادات التجميل | Veloura' },
    metaDesc: { en: 'Premium identity, treatment pages, landing pages, campaign creatives, and basic SEO for aesthetic clinics and medical centers.', ar: 'هوية راقية وصفحات علاجات وصفحات هبوط وإبداع حملات وسيو أساسي لعيادات التجميل والمراكز الطبية.' },
    intro: { en: 'Aesthetic clinics need desire and trust at the same time. Veloura builds refined digital touchpoints that make treatments easier to understand, compare, and enquire about.', ar: 'تحتاج عيادات التجميل إلى الرغبة والثقة في الوقت نفسه. تبني Veloura نقاط تواصل رقمية راقية تجعل العلاجات أسهل فهماً ومقارنة واستفساراً.' },
    painPoints: [
      { en: 'Treatments feel similar to competitors.', ar: 'تبدو العلاجات مشابهة للمنافسين.' },
      { en: 'Before/after proof, offers, and policies are not structured clearly.', ar: 'الدليل والعروض والسياسات غير منظمة بوضوح.' },
      { en: 'Campaign visuals do not match the clinic’s premium standard.', ar: 'مرئيات الحملات لا تعكس المعيار الراقي للعيادة.' },
    ],
    system: [
      { en: 'Premium identity, service hierarchy, and treatment pages.', ar: 'هوية راقية وتسلسل خدمات وصفحات علاجات.' },
      { en: 'Landing pages that explain one treatment or offer clearly.', ar: 'صفحات هبوط تشرح علاجاً أو عرضاً واحداً بوضوح.' },
      { en: 'Campaign creatives built around proof, clarity, and brand taste.', ar: 'إبداع حملات مبني حول الدليل والوضوح وذوق العلامة.' },
    ],
    services: ['brand-identity', 'landing-pages', 'ad-designs-campaign-creatives', 'basic-seo'],
    journey: { en: 'A patient discovers a treatment, understands credibility and outcomes, asks the right question, and moves toward a consultation.', ar: 'يكتشف المريض علاجاً، يفهم المصداقية والنتائج، يسأل السؤال المناسب، ويتجه نحو استشارة.' },
  },
  {
    id: 'restaurants-cafes',
    slug: 'restaurants-cafes',
    title: { en: 'Restaurants & Cafés', ar: 'المطاعم والمقاهي' },
    h1: { en: 'Brand, Content, and Campaign Creative Systems for Restaurants and Cafes', ar: 'أنظمة هوية ومحتوى وإبداع حملات للمطاعم والمقاهي' },
    metaTitle: { en: 'Restaurant Branding and Social Media Strategy | Veloura', ar: 'هوية واستراتيجية سوشيال للمطاعم | Veloura' },
    metaDesc: { en: 'Visual identity, social media direction, campaign creatives, menu and offer storytelling, and local SEO basics for restaurants and cafes.', ar: 'هوية بصرية وتوجيه سوشيال وإبداع حملات وسرد قوائم وعروض وسيو محلي أساسي للمطاعم والمقاهي.' },
    intro: { en: 'Restaurants and cafes need appetite, consistency, and easy decision paths. Veloura helps food brands look better online and communicate offers with more discipline.', ar: 'تحتاج المطاعم والمقاهي إلى شهية واتساق ومسارات قرار سهلة. تساعد Veloura علامات الطعام على الظهور أفضل رقمياً وتوصيل العروض بانضباط أكبر.' },
    painPoints: [
      { en: 'The food or space looks better in person than online.', ar: 'الطعام أو المكان يبدو أفضل في الواقع من ظهوره رقمياً.' },
      { en: 'Offers are posted without a clear story or visual rhythm.', ar: 'تُنشر العروض دون قصة واضحة أو إيقاع بصري.' },
      { en: 'Google presence, menus, and social pages feel disconnected.', ar: 'حضور جوجل والقوائم وصفحات السوشيال تبدو غير مترابطة.' },
    ],
    system: [
      { en: 'Visual direction for food, space, menu, and offers.', ar: 'اتجاه بصري للطعام والمكان والقائمة والعروض.' },
      { en: 'Social media structure around occasions, launches, and repeat visits.', ar: 'بنية سوشيال حول المناسبات والإطلاقات والزيارات المتكررة.' },
      { en: 'Campaign creatives and local visibility basics.', ar: 'إبداع حملات وأساسيات ظهور محلي.' },
    ],
    services: ['brand-identity', 'social-media-strategy', 'ad-designs-campaign-creatives', 'basic-seo'],
    journey: { en: 'A guest discovers the place, sees a clear offer, checks location and proof, then reserves, orders, or saves it for an occasion.', ar: 'يكتشف الضيف المكان، يرى عرضاً واضحاً، يتأكد من الموقع والدليل، ثم يحجز أو يطلب أو يحفظه لمناسبة.' },
  },
  {
    id: 'hospitality-venues',
    slug: 'hospitality-venues',
    title: { en: 'Hospitality, Hotels & Venues', ar: 'الضيافة والفنادق والقاعات' },
    h1: { en: 'Brand, Website, and Campaign Creative Systems for Hospitality Brands', ar: 'أنظمة هوية ومواقع وإبداع حملات لعلامات الضيافة' },
    metaTitle: { en: 'Hospitality Branding and Website Design | Veloura', ar: 'هوية ومواقع للضيافة والقاعات | Veloura' },
    metaDesc: { en: 'Brand storytelling, refined websites, booking-ready pages, event creatives, and landing pages for hotels, venues, resorts, and hospitality brands.', ar: 'سرد علامة ومواقع مصقولة وصفحات جاهزة للحجز وإبداع فعاليات وصفحات هبوط للفنادق والقاعات والمنتجعات.' },
    intro: { en: 'Hospitality growth depends on the feeling before the visit and the clarity after interest. Veloura helps venues turn ambience, trust, and availability into polished digital journeys.', ar: 'يعتمد نمو الضيافة على الانطباع قبل الزيارة والوضوح بعد الاهتمام. تساعد Veloura القاعات على تحويل الأجواء والثقة والتوفر إلى رحلات رقمية مصقولة.' },
    painPoints: [
      { en: 'The space feels premium offline but generic online.', ar: 'المكان يبدو راقياً على الواقع لكنه عادياً رقمياً.' },
      { en: 'Event, room, and package pages do not explain enough.', ar: 'صفحات الفعاليات والغرف والباقات لا تشرح بما يكفي.' },
      { en: 'Campaign assets are not aligned with the brand experience.', ar: 'أصول الحملات لا تتماشى مع تجربة العلامة.' },
    ],
    system: [
      { en: 'Brand storytelling, image direction, and booking-ready pages.', ar: 'سرد علامة واتجاه تصوير وصفحات جاهزة للحجز.' },
      { en: 'Website sections for rooms, spaces, packages, and events.', ar: 'أقسام موقع للغرف والمساحات والباقات والفعاليات.' },
      { en: 'Seasonal campaign creatives and landing pages.', ar: 'إبداع حملات موسمية وصفحات هبوط.' },
    ],
    services: ['brand-identity', 'website-development', 'ad-designs-campaign-creatives', 'landing-pages'],
    journey: { en: 'A guest or planner sees the space, understands the offer, checks availability cues, and sends a more qualified enquiry.', ar: 'يرى الضيف أو منظم الفعالية المكان، يفهم العرض، يلاحظ مؤشرات التوفر، ويرسل استفساراً أوضح.' },
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: { en: 'Real Estate & Developers', ar: 'العقارات والمطورون' },
    h1: { en: 'Landing Pages and Campaign Creatives for Real Estate Projects', ar: 'صفحات هبوط وإبداع حملات للمشاريع العقارية' },
    metaTitle: { en: 'Real Estate Landing Pages and Campaign Creatives | Veloura', ar: 'صفحات هبوط وإبداع حملات للعقار | Veloura' },
    metaDesc: { en: 'Project landing pages, campaign creatives, competitor analysis, and business communication materials for real estate developers and brokers.', ar: 'صفحات هبوط للمشاريع وإبداع حملات وتحليل منافسين ومواد تواصل مؤسسي للمطورين والوسطاء العقاريين.' },
    intro: { en: 'Real estate decisions need trust, clarity, and strong project storytelling. Veloura builds pages and materials that make enquiries easier to qualify and sales conversations easier to start.', ar: 'تحتاج قرارات العقار إلى ثقة ووضوح وسرد مشروع قوي. تبني Veloura صفحات ومواد تجعل الاستفسارات أسهل تأهيلاً ومحادثات البيع أسهل بداية.' },
    painPoints: [
      { en: 'Projects look similar and price-driven.', ar: 'تبدو المشاريع متشابهة ومتمحورة حول السعر.' },
      { en: 'Landing pages capture names but not intent.', ar: 'صفحات الهبوط تلتقط أسماء لا نية واضحة.' },
      { en: 'Sales materials do not communicate the project story well.', ar: 'مواد البيع لا تنقل قصة المشروع جيداً.' },
    ],
    system: [
      { en: 'Project positioning and focused landing pages.', ar: 'تموضع مشروع وصفحات هبوط مركزة.' },
      { en: 'Campaign creatives with clear qualification prompts.', ar: 'إبداع حملات مع أسئلة تأهيل واضحة.' },
      { en: 'Competitor analysis and polished sales documents.', ar: 'تحليل منافسين ومستندات بيع مصقولة.' },
    ],
    services: ['landing-pages', 'ad-designs-campaign-creatives', 'competition-analysis', 'business-communication-kit'],
    journey: { en: 'A buyer sees the project story, understands the fit, submits context, and moves toward a serious viewing or sales conversation.', ar: 'يرى المشتري قصة المشروع، يفهم الملاءمة، يرسل السياق، ويتجه إلى معاينة أو محادثة مبيعات جادة.' },
  },
  {
    id: 'retail-fashion',
    slug: 'retail-fashion',
    title: { en: 'Retail, Fashion & Ecommerce', ar: 'التجزئة والأزياء والمتاجر' },
    h1: { en: 'Brand, Website, and Campaign Creative Systems for Retail and Ecommerce', ar: 'أنظمة هوية ومواقع وإبداع حملات للتجزئة والمتاجر' },
    metaTitle: { en: 'Retail Branding, Websites and Campaign Creatives | Veloura', ar: 'هوية ومواقع وإبداع حملات للتجزئة | Veloura' },
    metaDesc: { en: 'Collection storytelling, ecommerce UX, website design, campaign creatives, and social media direction for retail, fashion, and ecommerce brands.', ar: 'سرد مجموعات وUX للمتاجر وتصميم مواقع وإبداع حملات وتوجيه سوشيال للتجزئة والأزياء والمتاجر الإلكترونية.' },
    intro: { en: 'Retail growth depends on desire, clarity, and repeatable purchase paths. Veloura connects product storytelling with brand identity, ecommerce structure, and campaign-ready visuals.', ar: 'يعتمد نمو التجزئة على الرغبة والوضوح ومسارات شراء قابلة للتكرار. تربط Veloura سرد المنتج بالهوية وبنية المتجر والمرئيات الجاهزة للحملات.' },
    painPoints: [
      { en: 'Collections launch without a strong visual story.', ar: 'تُطلق المجموعات دون قصة بصرية قوية.' },
      { en: 'The ecommerce path is attractive but not easy to buy from.', ar: 'مسار المتجر جميل لكنه ليس سهلاً للشراء.' },
      { en: 'Social content and campaign visuals feel disconnected.', ar: 'محتوى السوشيال ومرئيات الحملات غير مترابطة.' },
    ],
    system: [
      { en: 'Collection positioning and visual direction.', ar: 'تموضع المجموعة واتجاه بصري.' },
      { en: 'Website and ecommerce UX with clearer purchase paths.', ar: 'موقع وUX متجر بمسارات شراء أوضح.' },
      { en: 'Campaign creatives and social content planning.', ar: 'إبداع حملات وتخطيط محتوى سوشيال.' },
    ],
    services: ['brand-identity', 'website-development', 'ad-designs-campaign-creatives', 'social-media-strategy'],
    journey: { en: 'A shopper discovers a collection, understands the value, sees consistent proof, and buys through a cleaner digital path.', ar: 'يكتشف المتسوق المجموعة، يفهم القيمة، يرى دليلاً متسقاً، ويشتري عبر مسار رقمي أوضح.' },
  },
  {
    id: 'education-training',
    slug: 'education-training',
    title: { en: 'Education & Training Institutions', ar: 'مؤسسات التعليم والتدريب' },
    h1: { en: 'Landing Pages, Campaign Creatives, and Communication Kits for Education Brands', ar: 'صفحات هبوط وإبداع حملات وحقائب تواصل للتعليم والتدريب' },
    metaTitle: { en: 'Education Landing Pages and Campaign Creatives | Veloura', ar: 'صفحات هبوط وإبداع حملات للتعليم | Veloura' },
    metaDesc: { en: 'Program pages, enrollment journeys, campaign creatives, basic SEO, and business communication materials for academies and training companies.', ar: 'صفحات برامج ورحلات تسجيل وإبداع حملات وسيو أساسي ومواد تواصل مؤسسي للأكاديميات وشركات التدريب.' },
    intro: { en: 'Education buyers need clarity, credibility, and a reason to act now. Veloura helps academies and training institutions explain programs, outcomes, and enrolment paths more clearly.', ar: 'يحتاج جمهور التعليم إلى وضوح ومصداقية وسبب للتحرك الآن. تساعد Veloura الأكاديميات ومؤسسات التدريب على شرح البرامج والنتائج ومسارات التسجيل بوضوح أكبر.' },
    painPoints: [
      { en: 'Programs are valuable but hard to compare.', ar: 'البرامج قيّمة لكنها صعبة المقارنة.' },
      { en: 'Campaign messages arrive without a strong enrollment page.', ar: 'رسائل الحملات تصل دون صفحة تسجيل قوية.' },
      { en: 'Brochures, proposals, and program materials look inconsistent.', ar: 'البروشورات والمقترحات ومواد البرامج تبدو غير متسقة.' },
    ],
    system: [
      { en: 'Program architecture and outcome-led landing pages.', ar: 'هيكلة برامج وصفحات هبوط تقودها النتائج.' },
      { en: 'Campaign creatives for cohorts, offers, and admissions windows.', ar: 'إبداع حملات للدفعات والعروض وفترات القبول.' },
      { en: 'Communication kits and practical SEO basics.', ar: 'حقائب تواصل وأساسيات سيو عملية.' },
    ],
    services: ['landing-pages', 'ad-designs-campaign-creatives', 'business-communication-kit', 'basic-seo'],
    journey: { en: 'A student, parent, or company compares the program, sees proof and outcomes, asks a better question, and moves toward enrollment.', ar: 'يقارن الطالب أو ولي الأمر أو الشركة البرنامج، يرى الدليل والنتائج، يسأل سؤالاً أفضل، ويتجه نحو التسجيل.' },
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    title: { en: 'Professional Services & B2B Firms', ar: 'الخدمات المهنية وشركات B2B' },
    h1: { en: 'Premium Brand, Website, and Proposal Systems for Professional Services', ar: 'أنظمة هوية ومواقع ومقترحات راقية للخدمات المهنية' },
    metaTitle: { en: 'Professional Services Branding and Website Design | Veloura', ar: 'هوية ومواقع للخدمات المهنية | Veloura' },
    metaDesc: { en: 'Brand identity, websites, proposal kits, service pages, and basic SEO for legal, finance, consulting, engineering, advisory, and B2B firms.', ar: 'هوية ومواقع وحقائب مقترحات وصفحات خدمات وسيو أساسي لشركات القانون والمال والاستشارات والهندسة وB2B.' },
    intro: { en: 'Professional service buyers need confidence before they compare price. Veloura helps firms communicate expertise, structure offers, and make inquiry paths easier to trust.', ar: 'يحتاج مشترو الخدمات المهنية إلى الثقة قبل مقارنة السعر. تساعد Veloura الشركات على توصيل الخبرة وهيكلة العروض وجعل مسارات الاستفسار أكثر ثقة.' },
    painPoints: [
      { en: 'The service is valuable but hard to explain simply.', ar: 'الخدمة قيّمة لكنها صعبة الشرح ببساطة.' },
      { en: 'The website and proposals do not match the firm’s expertise.', ar: 'الموقع والمقترحات لا تعكس خبرة الشركة.' },
      { en: 'Potential clients cannot quickly understand fit and next steps.', ar: 'العملاء المحتملون لا يفهمون الملاءمة والخطوة التالية بسرعة.' },
    ],
    system: [
      { en: 'Clear positioning and offer hierarchy.', ar: 'تموضع واضح وتسلسل عروض.' },
      { en: 'Authority website, proposal kit, and service pages.', ar: 'موقع سلطة مهنية وحقيبة مقترحات وصفحات خدمات.' },
      { en: 'Basic SEO and clearer enquiry paths.', ar: 'سيو أساسي ومسارات استفسار أوضح.' },
    ],
    services: ['brand-identity', 'website-development', 'business-communication-kit', 'basic-seo'],
    journey: { en: 'A buyer understands the firm’s expertise, sees relevant proof, and requests a scoped conversation instead of a vague quote.', ar: 'يفهم المشتري خبرة الشركة، يرى دليلاً مناسباً، ويطلب محادثة محددة النطاق بدلاً من عرض سعر غامض.' },
  },
  {
    id: 'interior-architecture-construction',
    slug: 'interior-architecture-construction',
    title: { en: 'Interior, Architecture & Construction', ar: 'التصميم الداخلي والعمارة والإنشاءات' },
    h1: { en: 'Portfolio Websites and Business Communication for Design and Construction Firms', ar: 'مواقع أعمال وتواصل مؤسسي لشركات التصميم والإنشاءات' },
    metaTitle: { en: 'Interior and Construction Website Design | Veloura', ar: 'تصميم مواقع للتصميم والإنشاءات | Veloura' },
    metaDesc: { en: 'Portfolio websites, project storytelling, brand identity, proposal kits, and competitor analysis for design, architecture, and construction firms.', ar: 'مواقع أعمال وسرد مشاريع وهوية وحقائب مقترحات وتحليل منافسين لشركات التصميم والعمارة والإنشاءات.' },
    intro: { en: 'Design and construction firms sell trust before they sell a scope. Veloura helps them package projects, process, proof, and inquiry paths so serious clients can evaluate them quickly.', ar: 'تبيع شركات التصميم والإنشاءات الثقة قبل النطاق. تساعد Veloura على ترتيب المشاريع والمنهج والدليل ومسارات الاستفسار حتى يقيّمها العملاء الجادون بسرعة.' },
    painPoints: [
      { en: 'Project quality is not reflected in the website or proposals.', ar: 'جودة المشاريع لا تظهر في الموقع أو المقترحات.' },
      { en: 'Before/after, process, and budgets are not framed clearly.', ar: 'القبل/بعد والمنهج والميزانيات غير مؤطرة بوضوح.' },
      { en: 'The market position is unclear against similar firms.', ar: 'التموضع غير واضح أمام شركات مشابهة.' },
    ],
    system: [
      { en: 'Project portfolio structure and visual storytelling.', ar: 'هيكلة معرض مشاريع وسرد بصري.' },
      { en: 'Authority website, proposal kit, and service pages.', ar: 'موقع سلطة وحقيبة مقترحات وصفحات خدمات.' },
      { en: 'Competitor analysis and clearer qualification forms.', ar: 'تحليل منافسين ونماذج تأهيل أوضح.' },
    ],
    services: ['brand-identity', 'website-development', 'business-communication-kit', 'competition-analysis'],
    journey: { en: 'A client reviews relevant projects, understands the process, submits project context, and moves into a qualified scope conversation.', ar: 'يراجع العميل مشاريع مشابهة، يفهم المنهج، يرسل سياق المشروع، ثم يدخل محادثة نطاق مؤهلة.' },
  },
  {
    id: 'home-local-services',
    slug: 'home-local-services',
    title: { en: 'Home Services & Local Service Companies', ar: 'خدمات المنازل والشركات المحلية' },
    h1: { en: 'Local Service Websites, Landing Pages, and Basic SEO', ar: 'مواقع وصفحات هبوط وسيو أساسي للخدمات المحلية' },
    metaTitle: { en: 'Home Services Website Design and Basic SEO | Veloura', ar: 'مواقع وسيو أساسي لخدمات المنازل | Veloura' },
    metaDesc: { en: 'Basic SEO, service pages, local visibility, landing pages, campaign creatives, and refined websites for maintenance, cleaning, moving, and local service companies.', ar: 'سيو أساسي وصفحات خدمات وظهور محلي وصفحات هبوط وإبداع حملات ومواقع مصقولة لشركات الصيانة والتنظيف والنقل والخدمات المحلية.' },
    intro: { en: 'Local service companies win when customers can find them, trust them, and request the right service quickly. Veloura builds practical pages and visuals around that decision.', ar: 'تفوز شركات الخدمات المحلية عندما يستطيع العميل العثور عليها والثقة بها وطلب الخدمة المناسبة بسرعة. تبني Veloura صفحات ومرئيات عملية حول هذا القرار.' },
    painPoints: [
      { en: 'Service demand exists, but search visibility is weak.', ar: 'الطلب موجود لكن الظهور في البحث ضعيف.' },
      { en: 'Service pages are thin or hard to compare.', ar: 'صفحات الخدمات ضعيفة أو صعبة المقارنة.' },
      { en: 'Request forms do not help customers explain what they need.', ar: 'نماذج الطلب لا تساعد العملاء على شرح احتياجهم.' },
    ],
    system: [
      { en: 'Local SEO basics, service pages, and Google Business clarity.', ar: 'أساسيات سيو محلي وصفحات خدمات ووضوح Google Business.' },
      { en: 'Landing pages and campaign creatives for key services.', ar: 'صفحات هبوط وإبداع حملات للخدمات الأساسية.' },
      { en: 'Clear request forms and website structure.', ar: 'نماذج طلب واضحة وبنية موقع منظمة.' },
    ],
    services: ['basic-seo', 'landing-pages', 'ad-designs-campaign-creatives', 'website-development'],
    journey: { en: 'A customer searches for a service, lands on a clear page, understands trust signals, and sends a useful request.', ar: 'يبحث العميل عن خدمة، يصل إلى صفحة واضحة، يفهم إشارات الثقة، ويرسل طلباً مفيداً.' },
  },
  {
    id: 'automotive-mobility',
    slug: 'automotive-mobility',
    title: { en: 'Automotive & Mobility Businesses', ar: 'السيارات والتنقل' },
    h1: { en: 'Offer Pages and Campaign Creatives for Automotive Businesses', ar: 'صفحات عروض وإبداع حملات لأعمال السيارات' },
    metaTitle: { en: 'Automotive Landing Pages and Campaign Creatives | Veloura', ar: 'صفحات هبوط وإبداع حملات للسيارات | Veloura' },
    metaDesc: { en: 'Offer pages, campaign creatives, refined websites, and competitor analysis for car dealerships, rentals, detailing, service centers, and mobility companies.', ar: 'صفحات عروض وإبداع حملات ومواقع مصقولة وتحليل منافسين لمعارض السيارات والتأجير والتلميع ومراكز الخدمة وشركات التنقل.' },
    intro: { en: 'Automotive buyers compare trust, availability, price, and speed. Veloura helps mobility and automotive companies build offer journeys that turn interest into clearer enquiries.', ar: 'يقارن مشترو السيارات الثقة والتوفر والسعر والسرعة. تساعد Veloura شركات السيارات والتنقل على بناء رحلات عروض تحول الاهتمام إلى استفسارات أوضح.' },
    painPoints: [
      { en: 'Offers are scattered across channels and hard to compare.', ar: 'العروض مبعثرة عبر القنوات وصعبة المقارنة.' },
      { en: 'Inventory, service, or rental pages do not capture intent well.', ar: 'صفحات المخزون أو الخدمة أو التأجير لا تلتقط النية جيداً.' },
      { en: 'Competitors look clearer or more premium online.', ar: 'المنافسون يبدون أوضح أو أرقى رقمياً.' },
    ],
    system: [
      { en: 'Offer pages, campaign creatives, and inventory/service journeys.', ar: 'صفحات عروض وإبداع حملات ورحلات مخزون/خدمة.' },
      { en: 'Website structure and clearer qualification fields.', ar: 'بنية موقع وحقول تأهيل أوضح.' },
      { en: 'Competitor analysis to sharpen the offer.', ar: 'تحليل منافسين لصقل العرض.' },
    ],
    services: ['landing-pages', 'ad-designs-campaign-creatives', 'website-development', 'competition-analysis'],
    journey: { en: 'A buyer sees a specific offer or service, checks credibility and availability, submits intent, and moves toward a sales or booking conversation.', ar: 'يرى المشتري عرضاً أو خدمة محددة، يتحقق من المصداقية والتوفر، يرسل نيته، ويتجه إلى محادثة بيع أو حجز.' },
  },
  {
    id: 'fitness-beauty-wellness',
    slug: 'fitness-beauty-wellness',
    title: { en: 'Fitness, Beauty & Wellness Centers', ar: 'مراكز اللياقة والجمال والعافية' },
    h1: { en: 'Brand, Campaign Creative, and Landing Page Systems for Wellness Brands', ar: 'أنظمة هوية وإبداع حملات وصفحات هبوط لعلامات العافية' },
    metaTitle: { en: 'Fitness, Beauty and Wellness Branding | Veloura', ar: 'هوية وتسويق بصري للياقة والجمال والعافية | Veloura' },
    metaDesc: { en: 'Branding, offer campaigns, service pages, landing pages, social media direction, and campaign creatives for gyms, salons, spas, and wellness centers.', ar: 'هوية وحملات عروض وصفحات خدمات وصفحات هبوط وتوجيه سوشيال وإبداع حملات للنوادي والصالونات والسبا ومراكز العافية.' },
    intro: { en: 'Fitness, beauty, and wellness brands need to turn aspiration into a clear first step. Veloura builds identity, offers, landing pages, and content systems that feel premium and practical.', ar: 'تحتاج علامات اللياقة والجمال والعافية إلى تحويل الطموح إلى خطوة أولى واضحة. تبني Veloura هوية وعروضاً وصفحات هبوط وأنظمة محتوى تبدو راقية وعملية.' },
    painPoints: [
      { en: 'Offers attract attention but do not explain the experience.', ar: 'العروض تجذب الانتباه لكنها لا تشرح التجربة.' },
      { en: 'Services and memberships are not packaged clearly.', ar: 'الخدمات والعضويات غير مصممة بوضوح.' },
      { en: 'Social content does not feel consistent with the brand.', ar: 'محتوى السوشيال لا يبدو متسقاً مع العلامة.' },
    ],
    system: [
      { en: 'Service and membership offer architecture.', ar: 'هيكلة عروض الخدمات والعضويات.' },
      { en: 'Campaign creatives, landing pages, and booking prompts.', ar: 'إبداع حملات وصفحات هبوط ودعوات حجز.' },
      { en: 'Social media direction that keeps the brand consistent.', ar: 'توجيه سوشيال يحافظ على اتساق العلامة.' },
    ],
    services: ['brand-identity', 'ad-designs-campaign-creatives', 'landing-pages', 'social-media-strategy'],
    journey: { en: 'A customer sees a relevant offer, understands the experience, asks a clear question, and moves toward booking or trial.', ar: 'يرى العميل عرضاً مناسباً، يفهم التجربة، يسأل سؤالاً واضحاً، ويتجه نحو حجز أو تجربة.' },
  },
];

export const LOCATION_PAGES: LocationPage[] = [
  {
    id: 'gcc',
    slug: 'gcc',
    title: { en: 'Gulf / GCC', ar: 'الخليج' },
    h1: { en: 'Premium Digital Growth Studio for Gulf Businesses', ar: 'استوديو نمو رقمي راقٍ للأعمال الخليجية' },
    metaTitle: { en: 'Premium Digital Growth Studio for Gulf Businesses | Veloura', ar: 'استوديو نمو رقمي راقٍ للأعمال الخليجية | Veloura' },
    metaDesc: { en: 'Veloura supports Gulf businesses with branding, UI/UX, websites, landing pages, campaign creatives, content systems, basic SEO, and business communication.', ar: 'تدعم Veloura الأعمال الخليجية عبر الهوية وUI/UX والمواقع وصفحات الهبوط وإبداع الحملات وأنظمة المحتوى والسيو الأساسي والتواصل المؤسسي.' },
    intro: { en: 'Veloura works with Gulf and international companies that need sharper brand presentation, cleaner websites, stronger landing pages, and more professional communication.', ar: 'تعمل Veloura مع الشركات الخليجية والدولية التي تحتاج عرضاً أوضح للعلامة ومواقع أنظف وصفحات هبوط أقوى وتواصلاً مؤسسياً أكثر احترافية.' },
    markets: [
      { en: 'Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, and international remote clients.', ar: 'السعودية والإمارات وقطر والكويت والبحرين وعُمان وعملاء دوليون عن بُعد.' },
      { en: 'Best fit for serious companies, clinics, venues, real estate projects, service businesses, and retail brands.', ar: 'مناسب للشركات الجادة والعيادات والقاعات والمشاريع العقارية والأعمال الخدمية وعلامات التجزئة.' },
    ],
    proof: { en: 'Each scope is built around the business goal: identity, website, page, creative, content, practical SEO, or communication material.', ar: 'يُبنى كل نطاق حول هدف العمل: هوية أو موقع أو صفحة أو إبداع أو محتوى أو سيو عملي أو مادة تواصل.' },
  },
  {
    id: 'saudi-arabia',
    slug: 'saudi-arabia',
    title: { en: 'Saudi Arabia', ar: 'السعودية' },
    h1: { en: 'Branding, Websites, and Landing Pages for Saudi Businesses', ar: 'هوية ومواقع وصفحات هبوط للأعمال السعودية' },
    metaTitle: { en: 'Branding and Website Studio for Saudi Businesses | Veloura', ar: 'استوديو هوية ومواقع للأعمال السعودية | Veloura' },
    metaDesc: { en: 'Remote-first branding, UI/UX, WordPress and custom websites, landing pages, campaign creatives, content direction, and basic SEO for Saudi businesses.', ar: 'هوية وUI/UX ومواقع ووردبريس ومواقع مخصصة وصفحات هبوط وإبداع حملات وتوجيه محتوى وسيو أساسي للأعمال السعودية عن بُعد.' },
    intro: { en: 'Veloura supports Saudi companies with refined design, clear messaging, and digital assets built for credibility and conversion.', ar: 'تدعم Veloura الشركات السعودية بتصميم راقٍ ورسائل واضحة وأصول رقمية مبنية للمصداقية والتحويل.' },
    markets: [
      { en: 'Useful for Riyadh, Jeddah, and Saudi-wide companies that need premium bilingual execution.', ar: 'مناسب للرياض وجدة والشركات السعودية التي تحتاج تنفيذاً ثنائي اللغة راقياً.' },
      { en: 'Strong fit for clinics, real estate, retail, restaurants, B2B firms, and service companies.', ar: 'ملائم للعيادات والعقار والتجزئة والمطاعم وشركات B2B وشركات الخدمات.' },
    ],
    proof: { en: 'Remote delivery is handled through strategy sessions, shared workspaces, clear approvals, and polished handoff files.', ar: 'يُدار التنفيذ عن بُعد عبر جلسات استراتيجية ومساحات عمل مشتركة وموافقات واضحة وملفات تسليم مصقولة.' },
  },
  {
    id: 'riyadh',
    slug: 'riyadh',
    title: { en: 'Riyadh', ar: 'الرياض' },
    h1: { en: 'Premium Branding and Website Support for Riyadh Businesses', ar: 'دعم هوية ومواقع راقٍ لأعمال الرياض' },
    metaTitle: { en: 'Branding and Website Studio for Riyadh Businesses | Veloura', ar: 'استوديو هوية ومواقع لأعمال الرياض | Veloura' },
    metaDesc: { en: 'Brand identity, UI/UX, websites, landing pages, campaign creatives, social strategy, and basic SEO for Riyadh businesses.', ar: 'هوية وUI/UX ومواقع وصفحات هبوط وإبداع حملات واستراتيجية سوشيال وسيو أساسي لأعمال الرياض.' },
    intro: { en: 'Riyadh is competitive, so credibility and clarity have to arrive quickly. Veloura helps businesses look sharper, explain offers better, and create stronger enquiry paths.', ar: 'الرياض سوق تنافسي، لذلك يجب أن تصل المصداقية والوضوح بسرعة. تساعد Veloura الأعمال على الظهور بشكل أرقى وشرح عروضها أفضل وبناء مسارات استفسار أقوى.' },
    markets: [
      { en: 'Best fit for premium local services, clinics, real estate, B2B firms, and retail brands.', ar: 'مناسب للخدمات الراقية والعيادات والعقار وشركات B2B والتجزئة.' },
      { en: 'Bilingual design and content for English and Arabic audiences.', ar: 'تصميم ومحتوى ثنائي اللغة للجمهورين العربي والإنجليزي.' },
    ],
    proof: { en: 'Every scope begins with diagnosis, so the work fits the market, maturity, and immediate business priority.', ar: 'كل نطاق يبدأ بالتشخيص، حتى يناسب العمل السوق ونضج المشروع والأولوية التجارية الحالية.' },
  },
  {
    id: 'jeddah',
    slug: 'jeddah',
    title: { en: 'Jeddah', ar: 'جدة' },
    h1: { en: 'Branding, Websites, and Campaign Creatives for Jeddah Brands', ar: 'هوية ومواقع وإبداع حملات لعلامات جدة' },
    metaTitle: { en: 'Branding and Website Studio for Jeddah Brands | Veloura', ar: 'استوديو هوية ومواقع لعلامات جدة | Veloura' },
    metaDesc: { en: 'Brand identity, refined websites, landing pages, campaign creatives, content direction, and business communication for Jeddah brands.', ar: 'هوية ومواقع مصقولة وصفحات هبوط وإبداع حملات وتوجيه محتوى وتواصل مؤسسي لعلامات جدة.' },
    intro: { en: 'Veloura helps Jeddah brands sharpen how they look, explain, and convert through focused branding, web, content, and communication work.', ar: 'تساعد Veloura علامات جدة على تحسين طريقة ظهورها وشرحها وتحويلها عبر عمل مركز في الهوية والمواقع والمحتوى والتواصل.' },
    markets: [
      { en: 'Useful for hospitality, retail, clinics, real estate, and service companies.', ar: 'مناسب للضيافة والتجزئة والعيادات والعقار وشركات الخدمات.' },
      { en: 'Remote-first collaboration with structured approvals and bilingual output.', ar: 'تعاون عن بُعد بموافقات منظمة ومخرجات ثنائية اللغة.' },
    ],
    proof: { en: 'The work is scoped around what the brand needs most: identity, site, page, content, creative, or documents.', ar: 'يُحدد العمل حول ما تحتاجه العلامة أكثر: هوية أو موقع أو صفحة أو محتوى أو إبداع أو مستندات.' },
  },
  {
    id: 'uae',
    slug: 'uae',
    title: { en: 'United Arab Emirates', ar: 'الإمارات' },
    h1: { en: 'Premium Digital Growth Studio for UAE Brands', ar: 'استوديو نمو رقمي راقٍ للعلامات في الإمارات' },
    metaTitle: { en: 'Branding, Websites and Landing Pages for UAE Brands | Veloura', ar: 'هوية ومواقع وصفحات هبوط لعلامات الإمارات | Veloura' },
    metaDesc: { en: 'Premium branding, UI/UX, websites, landing pages, campaign creatives, content systems, basic SEO, and business communication for UAE brands.', ar: 'هوية راقية وUI/UX ومواقع وصفحات هبوط وإبداع حملات وأنظمة محتوى وسيو أساسي وتواصل مؤسسي لعلامات الإمارات.' },
    intro: { en: 'UAE brands operate in a polished, competitive market. Veloura helps them build digital touchpoints that feel refined, bilingual, and conversion-aware.', ar: 'تعمل علامات الإمارات في سوق مصقول وتنافسي. تساعد Veloura على بناء نقاط تواصل رقمية راقية وثنائية اللغة وواعية بالتحويل.' },
    markets: [
      { en: 'Dubai, Abu Dhabi, and UAE-wide companies.', ar: 'دبي وأبوظبي والشركات في الإمارات.' },
      { en: 'Strong fit for premium service, retail, real estate, hospitality, and consulting brands.', ar: 'ملائم للخدمات الراقية والتجزئة والعقار والضيافة والاستشارات.' },
    ],
    proof: { en: 'We align identity, website, landing pages, campaign creative, content direction, and business documents so the brand feels serious at every touchpoint.', ar: 'نوائم الهوية والموقع وصفحات الهبوط وإبداع الحملات وتوجيه المحتوى والمستندات حتى تبدو العلامة جادة في كل نقطة تواصل.' },
  },
  {
    id: 'dubai',
    slug: 'dubai',
    title: { en: 'Dubai', ar: 'دبي' },
    h1: { en: 'Branding, Websites, and Digital Creative for Dubai Brands', ar: 'هوية ومواقع وإبداع رقمي لعلامات دبي' },
    metaTitle: { en: 'Branding and Website Studio for Dubai Brands | Veloura', ar: 'استوديو هوية ومواقع لعلامات دبي | Veloura' },
    metaDesc: { en: 'Brand identity, UI/UX, websites, landing pages, ad designs, social strategy, AI video, and basic SEO for Dubai brands.', ar: 'هوية وUI/UX ومواقع وصفحات هبوط وتصاميم إعلانات واستراتيجية سوشيال وفيديو AI وسيو أساسي لعلامات دبي.' },
    intro: { en: 'Dubai rewards brands that look credible quickly and communicate with polish. Veloura builds focused digital assets for that standard.', ar: 'تكافئ دبي العلامات التي تبدو موثوقة بسرعة وتتواصل بذوق. تبني Veloura أصولاً رقمية مركزة لهذا المعيار.' },
    markets: [
      { en: 'Premium services, clinics, real estate, retail, restaurants, and B2B firms.', ar: 'خدمات راقية وعيادات وعقار وتجزئة ومطاعم وشركات B2B.' },
      { en: 'English and Arabic communication for mixed audiences.', ar: 'تواصل عربي وإنجليزي لجماهير متعددة.' },
    ],
    proof: { en: 'The model is remote-first, structured, and focused on premium digital output rather than generic monthly packages.', ar: 'النموذج عن بُعد ومنظم ومركز على مخرجات رقمية راقية بدلاً من باقات شهرية عامة.' },
  },
  {
    id: 'abu-dhabi',
    slug: 'abu-dhabi',
    title: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    h1: { en: 'Branding, Websites, and Business Communication for Abu Dhabi Businesses', ar: 'هوية ومواقع وتواصل مؤسسي لأعمال أبوظبي' },
    metaTitle: { en: 'Branding and Website Studio for Abu Dhabi | Veloura', ar: 'استوديو هوية ومواقع لأبوظبي | Veloura' },
    metaDesc: { en: 'Refined branding, websites, landing pages, campaign creatives, basic SEO, and business documents for Abu Dhabi businesses.', ar: 'هوية مصقولة ومواقع وصفحات هبوط وإبداع حملات وسيو أساسي ومستندات أعمال لأعمال أبوظبي.' },
    intro: { en: 'Veloura helps Abu Dhabi businesses present expertise with calm authority and turn digital presence into clearer enquiries.', ar: 'تساعد Veloura أعمال أبوظبي على تقديم خبرتها بثقة هادئة وتحويل الحضور الرقمي إلى استفسارات أوضح.' },
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
    h1: { en: 'Branding, Websites, and Campaign Creatives for Qatar Businesses', ar: 'هوية ومواقع وإبداع حملات للأعمال في قطر' },
    metaTitle: { en: 'Branding and Website Studio for Qatar Businesses | Veloura', ar: 'استوديو هوية ومواقع للأعمال في قطر | Veloura' },
    metaDesc: { en: 'Brand identity, websites, landing pages, campaign creatives, social media strategy, basic SEO, and business communication for Qatar businesses.', ar: 'هوية ومواقع وصفحات هبوط وإبداع حملات واستراتيجية سوشيال وسيو أساسي وتواصل مؤسسي للأعمال في قطر.' },
    intro: { en: 'Veloura works remotely with Qatar businesses that need a premium digital presence, clearer service journeys, and more professional communication.', ar: 'تعمل Veloura عن بُعد مع أعمال قطر التي تحتاج حضوراً رقمياً راقياً ورحلات خدمات أوضح وتواصلاً أكثر احترافية.' },
    markets: [
      { en: 'Doha and Qatar-wide companies.', ar: 'الدوحة والشركات في قطر.' },
      { en: 'Built for bilingual communication and structured project delivery.', ar: 'مصمم لتواصل ثنائي اللغة وتنفيذ مشاريع منظم.' },
    ],
    proof: { en: 'Our model supports remote strategy sessions, shared assets, approval flows, and clear launch-ready deliverables.', ar: 'يدعم نموذجنا جلسات استراتيجية عن بُعد وأصول مشتركة ومسارات موافقة ومخرجات جاهزة للإطلاق.' },
  },
  {
    id: 'doha',
    slug: 'doha',
    title: { en: 'Doha', ar: 'الدوحة' },
    h1: { en: 'Boutique Digital Growth Studio for Doha Brands', ar: 'استوديو نمو رقمي بوتيك لعلامات الدوحة' },
    metaTitle: { en: 'Branding and Website Studio for Doha Brands | Veloura', ar: 'استوديو هوية ومواقع لعلامات الدوحة | Veloura' },
    metaDesc: { en: 'Remote-first branding, websites, landing pages, campaign creatives, content direction, and basic SEO for Doha brands.', ar: 'هوية ومواقع وصفحات هبوط وإبداع حملات وتوجيه محتوى وسيو أساسي عن بُعد لعلامات الدوحة.' },
    intro: { en: 'Veloura helps Doha brands sharpen how they are seen, understood, and contacted online.', ar: 'تساعد Veloura علامات الدوحة على تحسين طريقة ظهورها وفهمها والتواصل معها رقمياً.' },
    markets: [
      { en: 'Useful for clinics, restaurants, real estate, retail, B2B firms, and service companies.', ar: 'مناسب للعيادات والمطاعم والعقار والتجزئة وشركات B2B وشركات الخدمات.' },
      { en: 'Remote-first collaboration with premium English and Arabic content.', ar: 'تعاون عن بُعد بمحتوى عربي وإنجليزي راقٍ.' },
    ],
    proof: { en: 'Veloura supports Doha remotely through structured digital delivery and focused creative output.', ar: 'تدعم Veloura الدوحة عن بُعد عبر تنفيذ رقمي منظم ومخرجات إبداعية مركزة.' },
  },
  {
    id: 'kuwait',
    slug: 'kuwait',
    title: { en: 'Kuwait', ar: 'الكويت' },
    h1: { en: 'Branding, Websites, and Content Systems for Kuwait Brands', ar: 'هوية ومواقع وأنظمة محتوى للعلامات في الكويت' },
    metaTitle: { en: 'Branding and Website Studio for Kuwait Brands | Veloura', ar: 'استوديو هوية ومواقع للعلامات في الكويت | Veloura' },
    metaDesc: { en: 'Premium branding, websites, landing pages, campaign creatives, content direction, basic SEO, and business communication for Kuwait brands.', ar: 'هوية راقية ومواقع وصفحات هبوط وإبداع حملات وتوجيه محتوى وسيو أساسي وتواصل مؤسسي لعلامات الكويت.' },
    intro: { en: 'Veloura supports Kuwait brands with refined digital systems that connect credibility, content, websites, and campaign-ready creative.', ar: 'تدعم Veloura علامات الكويت بأنظمة رقمية راقية تربط المصداقية والمحتوى والمواقع والإبداع الجاهز للحملات.' },
    markets: [
      { en: 'Suitable for premium retail, clinics, hospitality, consulting, and service firms.', ar: 'مناسب للتجزئة الراقية والعيادات والضيافة والاستشارات وشركات الخدمات.' },
      { en: 'Remote execution with bilingual communication.', ar: 'تنفيذ عن بُعد بتواصل ثنائي اللغة.' },
    ],
    proof: { en: 'Each project is scoped around diagnosis, market context, and the assets the business can actually use.', ar: 'يُبنى كل مشروع حول التشخيص وسياق السوق والأصول التي يستطيع العمل استخدامها فعلاً.' },
  },
  {
    id: 'bahrain',
    slug: 'bahrain',
    title: { en: 'Bahrain', ar: 'البحرين' },
    h1: { en: 'Boutique Branding and Website Studio for Bahrain Brands', ar: 'استوديو هوية ومواقع بوتيك للعلامات في البحرين' },
    metaTitle: { en: 'Branding and Website Studio for Bahrain Brands | Veloura', ar: 'استوديو هوية ومواقع للعلامات في البحرين | Veloura' },
    metaDesc: { en: 'Remote-first brand identity, websites, landing pages, campaign creatives, social strategy, basic SEO, and business documents for Bahrain brands.', ar: 'هوية ومواقع وصفحات هبوط وإبداع حملات واستراتيجية سوشيال وسيو أساسي ومستندات أعمال لعلامات البحرين عن بُعد.' },
    intro: { en: 'Veloura works with Bahrain brands that need sharper positioning, better digital presentation, and more consistent communication.', ar: 'تعمل Veloura مع علامات البحرين التي تحتاج تموضعاً أوضح وحضوراً رقمياً أفضل وتواصلاً أكثر اتساقاً.' },
    markets: [
      { en: 'Built for serious service, retail, restaurant, clinic, and professional brands.', ar: 'مصمم للخدمات والتجزئة والمطاعم والعيادات والعلامات المهنية الجادة.' },
      { en: 'Remote-first delivery across the Gulf.', ar: 'تنفيذ عن بُعد عبر الخليج.' },
    ],
    proof: { en: 'We build custom scopes instead of generic monthly packages.', ar: 'نبني نطاقات مخصصة بدلاً من باقات شهرية عامة.' },
  },
  {
    id: 'oman',
    slug: 'oman',
    title: { en: 'Oman', ar: 'عُمان' },
    h1: { en: 'Branding, Websites, and Digital Content for Oman Businesses', ar: 'هوية ومواقع ومحتوى رقمي للأعمال في عُمان' },
    metaTitle: { en: 'Branding and Website Studio for Oman Businesses | Veloura', ar: 'استوديو هوية ومواقع للأعمال في عُمان | Veloura' },
    metaDesc: { en: 'Premium branding, websites, landing pages, campaign creatives, content direction, basic SEO, and business communication for Oman businesses.', ar: 'هوية راقية ومواقع وصفحات هبوط وإبداع حملات وتوجيه محتوى وسيو أساسي وتواصل مؤسسي للأعمال في عُمان.' },
    intro: { en: 'Veloura helps Oman businesses build a calmer, more credible, and more professional digital presence for serious customers.', ar: 'تساعد Veloura أعمال عُمان على بناء حضور رقمي أهدأ وأكثر مصداقية واحترافاً للعملاء الجادين.' },
    markets: [
      { en: 'Useful for premium local services, healthcare, hospitality, B2B firms, and retail.', ar: 'مناسب للخدمات المحلية الراقية والرعاية الصحية والضيافة وشركات B2B والتجزئة.' },
      { en: 'Remote collaboration with structured approvals and bilingual delivery.', ar: 'تعاون عن بُعد بموافقات منظمة وتسليم ثنائي اللغة.' },
    ],
    proof: { en: 'Every scope connects brand perception, digital journey, and practical communication assets.', ar: 'كل نطاق يربط انطباع العلامة والرحلة الرقمية وأصول التواصل العملية.' },
  },
];

export const INSIGHT_TOPICS: Localized[] = [
  { en: 'Why Premium Branding Builds Trust Before a Customer Speaks to You', ar: 'لماذا تبني الهوية الراقية الثقة قبل أن يتحدث العميل معك' },
  { en: 'The Difference Between Social Media Posting and a Real Marketing System', ar: 'الفرق بين النشر على السوشيال ونظام التسويق الحقيقي' },
  { en: 'Why Gulf Businesses Need Bilingual Digital Systems', ar: 'لماذا تحتاج الأعمال الخليجية إلى أنظمة رقمية ثنائية اللغة' },
  { en: 'Basic Website SEO Checks Before Launch', ar: 'فحوص السيو الأساسية للموقع قبل الإطلاق' },
];

export const findServicePage = (slug: string | null): ServicePage | undefined =>
  SERVICE_PAGES.find((item) => item.slug === slug || item.id === slug);

export const serviceSlugById = (id: string): string =>
  SERVICE_PAGES.find((item) => item.id === id)?.slug || id;

export const findIndustryPage = (slug: string | null): IndustryPage | undefined =>
  INDUSTRY_PAGES.find((item) => item.slug === slug || item.id === slug);

export const findLocationPage = (slug: string | null): LocationPage | undefined =>
  LOCATION_PAGES.find((item) => item.slug === slug || item.id === slug);
