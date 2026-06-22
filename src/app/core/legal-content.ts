import { FaqItem } from './market-content';
import { Localized } from './i18n';

export interface LegalSection {
  title: Localized;
  body: Localized[];
}

export interface LegalPage {
  id: 'privacy-policy' | 'terms-and-conditions' | 'faqs';
  title: Localized;
  h1: Localized;
  metaTitle: Localized;
  metaDesc: Localized;
  intro: Localized;
  sections: LegalSection[];
  faqs: FaqItem[];
}

export const LEGAL_PAGES: LegalPage[] = [
  {
    id: 'privacy-policy',
    title: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    h1: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    metaTitle: {
      en: 'Privacy Policy and Data Handling Practices | Veloura',
      ar: 'سياسة الخصوصية وحماية بيانات العملاء الرقمية | Veloura',
    },
    metaDesc: {
      en: 'Learn how Veloura collects, uses, and protects enquiry and project information, website analytics, and client communication data across its digital services.',
      ar: 'تعرّف على كيفية جمع Veloura لبيانات الاستفسارات والمشاريع وتحليلات الموقع واتصالات العملاء، واستخدامها وحفظها وحمايتها ضمن خدماتها الرقمية بكل وضوح تام.',
    },
    intro: {
      en: 'This policy explains what information Veloura may collect, why it is used, and how it is handled when a business contacts us or works with us.',
      ar: 'توضح هذه السياسة المعلومات التي قد تجمعها Veloura ولماذا تُستخدم وكيف يتم التعامل معها عند تواصل الأعمال معنا أو العمل معنا.',
    },
    sections: [
      {
        title: { en: 'Information we collect', ar: 'المعلومات التي نجمعها' },
        body: [
          {
            en: 'We may collect business contact details, project brief information, website or social links, preferred communication details, and messages submitted through forms, email, WhatsApp, or shared workspaces.',
            ar: 'قد نجمع بيانات تواصل تجارية، معلومات موجز المشروع، روابط الموقع أو السوشيال، وسيلة التواصل المفضلة، والرسائل المرسلة عبر النماذج أو البريد أو واتساب أو مساحات العمل المشتركة.',
          },
          {
            en: 'We may also review public-facing brand, website, content, and competitor information when preparing an audit or proposal.',
            ar: 'قد نراجع أيضاً معلومات عامة عن الهوية والموقع والمحتوى والمنافسين عند إعداد تدقيق أو عرض.',
          },
        ],
      },
      {
        title: { en: 'How we use information', ar: 'كيف نستخدم المعلومات' },
        body: [
          {
            en: 'Information is used to understand the business, respond to enquiries, prepare scopes, deliver approved work, manage communication, and improve website performance.',
            ar: 'تُستخدم المعلومات لفهم العمل والرد على الاستفسارات وإعداد نطاقات العمل وتنفيذ الأعمال الموافق عليها وإدارة التواصل وتحسين أداء الموقع.',
          },
          {
            en: 'Veloura does not sell personal data. We only share information with collaborators or service providers when it is needed to deliver an approved project.',
            ar: 'لا تبيع Veloura البيانات الشخصية. نشارك المعلومات فقط مع متعاونين أو مزودي خدمات عند الحاجة لتنفيذ مشروع تمت الموافقة عليه.',
          },
        ],
      },
      {
        title: { en: 'Analytics, cookies, and tools', ar: 'التحليلات والكوكيز والأدوات' },
        body: [
          {
            en: 'The website may use basic analytics, performance tools, contact forms, and embedded services to understand traffic, improve pages, and receive enquiries.',
            ar: 'قد يستخدم الموقع تحليلات أساسية وأدوات أداء ونماذج تواصل وخدمات مدمجة لفهم الزيارات وتحسين الصفحات واستقبال الاستفسارات.',
          },
          {
            en: 'If third-party platforms are used during a project, their own privacy terms may also apply.',
            ar: 'إذا استُخدمت منصات خارجية أثناء المشروع، فقد تنطبق شروط الخصوصية الخاصة بها أيضاً.',
          },
        ],
      },
      {
        title: { en: 'Retention and requests', ar: 'الاحتفاظ والطلبات' },
        body: [
          {
            en: 'Project records are kept only as long as needed for communication, delivery, accounting, reference, and reasonable business continuity.',
            ar: 'يتم الاحتفاظ بسجلات المشروع فقط طالما كانت مطلوبة للتواصل والتنفيذ والمحاسبة والرجوع واستمرارية العمل المعقولة.',
          },
          {
            en: 'A business may contact Veloura to request correction or deletion of non-essential information, unless retention is required for legal, accounting, or project-record reasons.',
            ar: 'يمكن لأي عمل التواصل مع Veloura لطلب تصحيح أو حذف المعلومات غير الأساسية، ما لم يكن الاحتفاظ مطلوباً لأسباب قانونية أو محاسبية أو سجلات المشروع.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: 'Does Veloura sell client data?', ar: 'هل تبيع Veloura بيانات العملاء؟' },
        a: { en: 'No. Veloura does not sell personal or business enquiry data.', ar: 'لا. لا تبيع Veloura بيانات الاستفسارات الشخصية أو التجارية.' },
      },
      {
        q: { en: 'Do you review public competitor information?', ar: 'هل تراجعون معلومات المنافسين العامة؟' },
        a: { en: 'Yes. Competition analysis uses public-facing branding, website, content, ads, and positioning signals.', ar: 'نعم. يستخدم تحليل المنافسين معلومات عامة عن الهوية والمواقع والمحتوى والإعلانات والتموضع.' },
      },
      {
        q: { en: 'Can a business request deletion?', ar: 'هل يمكن طلب حذف البيانات؟' },
        a: { en: 'Yes, a business can request deletion of non-essential information by contacting Veloura directly.', ar: 'نعم، يمكن لأي عمل طلب حذف المعلومات غير الأساسية عبر التواصل مباشرة مع Veloura.' },
      },
    ],
  },
  {
    id: 'terms-and-conditions',
    title: { en: 'Terms & Conditions', ar: 'الشروط والأحكام' },
    h1: { en: 'Terms & Conditions', ar: 'الشروط والأحكام' },
    metaTitle: {
      en: 'Terms and Conditions for Veloura Digital Client Projects',
      ar: 'الشروط والأحكام لمشاريع Veloura وخدماتها الرقمية للعملاء',
    },
    metaDesc: {
      en: 'Review Veloura terms for enquiries, proposals, project scopes, payments, revisions, approvals, intellectual property, and delivery of digital work for clients.',
      ar: 'راجع شروط Veloura للاستفسارات والعروض ونطاقات المشاريع والمدفوعات والتعديلات والموافقات والملكية الفكرية وتسليم الأعمال الرقمية للعملاء بكل وضوح وشفافية.',
    },
    intro: {
      en: 'These terms describe how Veloura works with businesses. A signed proposal, invoice, or written scope may add project-specific terms.',
      ar: 'توضح هذه الشروط كيف تعمل Veloura مع الأعمال. قد يضيف العرض أو الفاتورة أو نطاق العمل المكتوب شروطاً خاصة بالمشروع.',
    },
    sections: [
      {
        title: { en: 'Scope and proposals', ar: 'نطاق العمل والعروض' },
        body: [
          {
            en: 'Veloura works through custom scopes, not fixed monthly packages. Each proposal should define the deliverables, timeline, payment structure, revision boundaries, and assumptions.',
            ar: 'تعمل Veloura عبر نطاقات مخصصة لا باقات شهرية ثابتة. يجب أن يحدد كل عرض المخرجات والجدول وهيكل الدفع وحدود التعديلات والافتراضات.',
          },
          {
            en: 'Work outside the approved scope may require a separate estimate or written approval.',
            ar: 'قد يتطلب العمل خارج النطاق الموافق عليه تقديراً منفصلاً أو موافقة مكتوبة.',
          },
        ],
      },
      {
        title: { en: 'Approvals and timelines', ar: 'الموافقات والجداول' },
        body: [
          {
            en: 'Timelines depend on timely feedback, access, content, approvals, and clear decision-making from the client side.',
            ar: 'تعتمد الجداول على سرعة الملاحظات والوصول والمحتوى والموافقات ووضوح القرار من جهة العميل.',
          },
          {
            en: 'Delays in feedback, assets, or approvals may shift delivery dates.',
            ar: 'قد تؤدي التأخيرات في الملاحظات أو الأصول أو الموافقات إلى تغيير مواعيد التسليم.',
          },
        ],
      },
      {
        title: { en: 'Payments and ownership', ar: 'المدفوعات والملكية' },
        body: [
          {
            en: 'Payment terms are set in the proposal or invoice. Final files, websites, or assets may be released after agreed payments are completed.',
            ar: 'تُحدد شروط الدفع في العرض أو الفاتورة. قد يتم تسليم الملفات النهائية أو المواقع أو الأصول بعد إتمام المدفوعات المتفق عليها.',
          },
          {
            en: 'Unless otherwise agreed, clients own the final approved deliverables after full payment. Veloura may retain reusable processes, templates, know-how, and unused concepts.',
            ar: 'ما لم يتم الاتفاق خلاف ذلك، يمتلك العملاء المخرجات النهائية المعتمدة بعد السداد الكامل. قد تحتفظ Veloura بالعمليات والقوالب والمعرفة والمفاهيم غير المستخدمة.',
          },
        ],
      },
      {
        title: { en: 'Service limits', ar: 'حدود الخدمة' },
        body: [
          {
            en: 'Veloura focuses on branding, UI/UX, websites, landing pages, campaign creatives, content systems, AI-assisted motion, competition analysis, business communication, and practical website SEO.',
            ar: 'تركز Veloura على الهوية وUI/UX والمواقع وصفحات الهبوط وإبداع الحملات وأنظمة المحتوى والموشن بمساعدة AI وتحليل المنافسين والتواصل المؤسسي والسيو العملي للمواقع.',
          },
          {
            en: 'Media buying, large operational systems, CRM architecture, and deep measurement setups are not core services unless agreed as light supporting add-ons.',
            ar: 'إدارة الإعلانات المتقدمة والأتمتة المؤسسية وهندسة CRM المعقدة والتحليلات المتقدمة ليست خدمات أساسية إلا إذا تم الاتفاق عليها كإضافات داعمة بسيطة.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: 'Does Veloura sell fixed packages?', ar: 'هل تبيع Veloura باقات ثابتة؟' },
        a: { en: 'No. Veloura defines custom scopes after diagnosis and agreement on priorities.', ar: 'لا. تحدد Veloura نطاقات مخصصة بعد التشخيص والاتفاق على الأولويات.' },
      },
      {
        q: { en: 'Who owns the final work?', ar: 'من يملك العمل النهائي؟' },
        a: { en: 'Unless otherwise agreed, the client owns the final approved deliverables after full payment.', ar: 'ما لم يتم الاتفاق خلاف ذلك، يمتلك العميل المخرجات النهائية المعتمدة بعد السداد الكامل.' },
      },
      {
        q: { en: 'Does Veloura guarantee SEO rankings?', ar: 'هل تضمن Veloura ترتيب نتائج البحث؟' },
        a: { en: 'No. Veloura can improve technical basics, metadata, page structure, performance, and content direction, but no studio can guarantee a specific search ranking.', ar: 'لا. تستطيع Veloura تحسين الأساسيات التقنية والبيانات الوصفية وبنية الصفحات والأداء وتوجيه المحتوى، لكن لا يمكن لأي استوديو ضمان ترتيب محدد في نتائج البحث.' },
      },
    ],
  },
  {
    id: 'faqs',
    title: { en: 'FAQs', ar: 'الأسئلة الشائعة' },
    h1: { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },
    metaTitle: {
      en: 'Veloura FAQs | Branding, Websites, SEO and Delivery',
      ar: 'أسئلة Veloura | الهوية والمواقع والسيو والتنفيذ',
    },
    metaDesc: {
      en: 'Find answers about Veloura branding, UI/UX, websites, landing pages, campaign creatives, practical SEO, bilingual delivery, timelines, and custom project scopes.',
      ar: 'اعثر على إجابات حول الهوية وUI/UX والمواقع وصفحات الهبوط وإبداع الحملات والسيو العملي والتنفيذ ثنائي اللغة والجداول ونطاقات المشاريع المخصصة.',
    },
    intro: {
      en: 'Short answers for businesses evaluating whether Veloura is the right fit.',
      ar: 'إجابات مختصرة للأعمال التي تقيّم ما إذا كانت Veloura مناسبة لها.',
    },
    sections: [],
    faqs: [
      {
        q: { en: 'What is Veloura?', ar: 'ما هي Veloura؟' },
        a: { en: 'Veloura is a premium boutique digital growth studio for GCC and international businesses. It helps companies look sharper, convert better, and communicate more professionally.', ar: 'Veloura استوديو نمو رقمي بوتيك راقٍ للأعمال الخليجية والدولية. يساعد الشركات على الظهور بشكل أرقى والتحويل بشكل أوضح والتواصل باحتراف أكبر.' },
      },
      {
        q: { en: 'What services does Veloura offer?', ar: 'ما الخدمات التي تقدمها Veloura؟' },
        a: { en: 'Veloura focuses on brand identity, UI/UX design, WordPress and custom websites, landing pages, case studies, campaign creatives, social media strategy, AI video and motion content, competition analysis, basic SEO, and business communication kits.', ar: 'تركز Veloura على الهوية، تصميم UI/UX، مواقع ووردبريس والمواقع المخصصة، صفحات الهبوط، دراسات الحالة، إبداع الحملات، استراتيجية السوشيال، فيديو وموشن AI، تحليل المنافسين، السيو الأساسي، وحقائب التواصل المؤسسي.' },
      },
      {
        q: { en: 'Does Veloura work with individuals?', ar: 'هل تعمل Veloura مع الأفراد؟' },
        a: { en: 'No. Veloura is built for companies, clinics, service businesses, venues, real estate projects, retail brands, education providers, professional firms, and other business entities.', ar: 'لا. Veloura مصممة للشركات والعيادات والأعمال الخدمية والقاعات والمشاريع العقارية وعلامات التجزئة ومقدمي التعليم والشركات المهنية والكيانات التجارية.' },
      },
      {
        q: { en: 'Does Veloura offer SEO?', ar: 'هل تقدم Veloura السيو؟' },
        a: { en: 'Yes, but as practical website SEO: technical basics, metadata, headings, on-page structure, performance checks, local SEO basics, and content direction. Veloura is not positioned as a search-only agency.', ar: 'نعم، ولكن كسيو عملي للمواقع: أساسيات تقنية، ميتا، عناوين، بنية صفحات، فحوص أداء، أساسيات السيو المحلي، وتوجيه محتوى. لا تتموضع Veloura كوكالة متخصصة فقط في البحث.' },
      },
      {
        q: { en: 'Does Veloura offer social media strategy and campaign creatives?', ar: 'هل تقدم Veloura استراتيجية للسوشيال ميديا وإبداعاً للحملات؟' },
        a: { en: 'Yes. Veloura develops content direction, campaign ideas, post structure, calendars, captions, reels direction, and branded static or motion creatives. The work is shaped around the business strategy rather than fixed posting packages.', ar: 'نعم. تطور Veloura توجيه المحتوى وأفكار الحملات وبنية المنشورات والجداول والكابشن واتجاه الريلز والإبداعات الثابتة أو المتحركة المتوافقة مع الهوية. يُبنى العمل حول استراتيجية النشاط بدلاً من باقات نشر ثابتة.' },
      },
      {
        q: { en: 'Can Veloura support English and Arabic websites?', ar: 'هل تدعم Veloura المواقع العربية والإنجليزية؟' },
        a: { en: 'Yes. Veloura designs bilingual English and Arabic structures with attention to LTR and RTL layout, tone, hierarchy, and conversion paths.', ar: 'نعم. تصمم Veloura هياكل عربية وإنجليزية مع مراعاة تخطيط LTR وRTL والنبرة والتسلسل ومسارات التحويل.' },
      },
      {
        q: { en: 'Does Veloura build WordPress websites?', ar: 'هل تبني Veloura مواقع ووردبريس؟' },
        a: { en: 'Yes. Veloura builds refined WordPress websites and custom-coded websites for companies, clinics, portfolios, service businesses, and landing-driven business sites.', ar: 'نعم. تبني Veloura مواقع ووردبريس مصقولة ومواقع مخصصة للشركات والعيادات ومعارض الأعمال والأعمال الخدمية والمواقع المبنية حول صفحات هبوط.' },
      },
      {
        q: { en: 'How does a project start?', ar: 'كيف يبدأ المشروع؟' },
        a: { en: 'A project starts with diagnosis: the business, market, audience, offer, website, content, competitors, and customer journey are reviewed before a custom scope is recommended.', ar: 'يبدأ المشروع بالتشخيص: تتم مراجعة العمل والسوق والجمهور والعرض والموقع والمحتوى والمنافسين ورحلة العميل قبل اقتراح نطاق مخصص.' },
      },
      {
        q: { en: 'Can Veloura work remotely across the GCC?', ar: 'هل يمكن لـ Veloura العمل عن بُعد عبر الخليج؟' },
        a: { en: 'Yes. Veloura is remote-first for GCC and international businesses, using strategy sessions, shared workspaces, bilingual communication, approval flows, and structured delivery.', ar: 'نعم. Veloura مبنية للعمل عن بُعد مع الأعمال الخليجية والدولية عبر جلسات استراتيجية ومساحات عمل مشتركة وتواصل ثنائي اللغة ومسارات موافقة وتسليم منظم.' },
      },
      {
        q: { en: 'Does Veloura manage media buying, CRM, or analytics?', ar: 'هل تدير Veloura شراء الإعلانات أو CRM أو التحليلات؟' },
        a: { en: 'Not as core services. Veloura may support campaign creative, light tracking, or basic operational clarity when needed, but media buying, enterprise CRM, and deep analytics are outside the main positioning.', ar: 'ليست خدمات أساسية. قد تدعم Veloura إبداع الحملات أو تتبعاً بسيطاً أو وضوحاً تشغيلياً عند الحاجة، لكن شراء الإعلانات وCRM المؤسسي والتحليلات العميقة خارج التموضع الأساسي.' },
      },
    ],
  },
];

export const findLegalPage = (id: string | null | undefined): LegalPage | undefined =>
  LEGAL_PAGES.find((page) => page.id === id);
