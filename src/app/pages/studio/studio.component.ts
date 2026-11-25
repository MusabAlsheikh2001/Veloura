import { ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/translation.service';
import { SeoService } from '../../core/seo.service';
import { ContactFormComponent } from '../../ui/contact-form/contact-form.component';
import { CONTACT } from '../../core/content';

type TextPair = { en: string; ar: string };
type StudioPage = 'home' | 'services' | 'work' | 'about' | 'contact';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [RouterLink, ContactFormComponent],
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioComponent {
  protected readonly t = inject(TranslationService);
  protected readonly page = (inject(ActivatedRoute).snapshot.data['studioPage'] ?? 'home') as StudioPage;
  protected readonly mode = signal(0);
  protected readonly activeService = signal(0);
  protected readonly activeProject = signal(0);
  protected readonly activePlatformView = signal(0);
  protected readonly platformViews = [
    {
      label: {en: 'Control center', ar: 'مركز التحكم'},
      eyebrow: {en: 'ONE PLACE FOR COMPLEX OPERATIONS', ar: 'مركز واحد للعمليات المتعددة'},
      title: {en: 'Every moving part. In view.', ar: 'كل تفاصيل العمل. بوضوح.'},
      description: {en: 'A shared administrative perspective across projects, roles, activity and reporting.', ar: 'إدارة منظّمة للمشاريع والصلاحيات والأنشطة والتقارير من مكان واحد.'},
      modules: [{en: 'Organizations', ar: 'المنظمات'}, {en: 'Projects', ar: 'المشاريع'}, {en: 'Activity', ar: 'النشاط'}, {en: 'Reporting', ar: 'التقارير'}],
    },
    {
      label: {en: 'Client workspaces', ar: 'مساحات العملاء'},
      eyebrow: {en: 'A WORKSPACE FOR EVERY BUSINESS', ar: 'مساحة مخصصة لكل عمل'},
      title: {en: 'Control without the complexity.', ar: 'تحكم واضح دون تعقيد.'},
      description: {en: 'Purpose-built workspaces for content, enquiries, teams, and project-specific workflows.', ar: 'مساحات عمل متخصصة للمحتوى والاستفسارات والفرق والمهام المرتبطة بكل مشروع.'},
      modules: [{en: 'Website content', ar: 'محتوى الموقع'}, {en: 'Enquiries', ar: 'الاستفسارات'}, {en: 'Team', ar: 'الفريق'}, {en: 'Access control', ar: 'الصلاحيات'}],
    },
    {
      label: {en: 'Business operations', ar: 'عمليات الأعمال'},
      eyebrow: {en: 'SYSTEMS THAT WORK TOGETHER', ar: 'أنظمة تعمل بتناغم'},
      title: {en: 'From storefront to operations.', ar: 'من واجهة العميل إلى العمليات.'},
      description: {en: 'Connected operational modules for restaurant menus, orders and customer workflows.', ar: 'وحدات تشغيل مترابطة للقوائم والطلبات ومسارات خدمة العملاء في قطاع المطاعم.'},
      modules: [{en: 'Menus', ar: 'القوائم'}, {en: 'Orders', ar: 'الطلبات'}, {en: 'Customers', ar: 'العملاء'}, {en: 'Integrations', ar: 'التكاملات'}],
    },
  ];
  protected readonly email = CONTACT.email;

  protected readonly modes = [
    {
      number: '01', name: { en: 'Design', ar: 'التصميم' },
      heading: { en: 'An interface with intention.', ar: 'واجهات صُممت لهدف واضح.' },
      body: { en: 'Research, product thinking and expressive interaction become one understandable experience.', ar: 'نجمع فهم المستخدم وتفكير المنتج والتفاعل المدروس في تجربة واحدة واضحة.' },
      caption: { en: 'USER EXPERIENCE / DIGITAL PRODUCT', ar: 'تجربة المستخدم / المنتج الرقمي' },
      lines: ['Discovery', 'Interface system', 'Prototype'],
    },
    {
      number: '02', name: { en: 'Engineering', ar: 'الهندسة' },
      heading: { en: 'Beyond a beautiful screen.', ar: 'أكثر من مجرد واجهة جميلة.' },
      body: { en: 'Frontend systems, business logic and infrastructure shaped into dependable software.', ar: 'نحوّل الواجهات ومنطق الأعمال والبنية التقنية إلى برمجيات متكاملة.' },
      caption: { en: 'FRONTEND / SYSTEMS / DELIVERY', ar: 'الواجهات / الأنظمة / التسليم' },
      lines: ['Architecture', 'Development', 'Quality'],
    },
    {
      number: '03', name: { en: 'Growth', ar: 'النمو' },
      heading: { en: 'Built to reach people.', ar: 'تجربة تصل إلى جمهورها.' },
      body: { en: 'Brand, creative communication and performance thinking connect the product to its audience.', ar: 'نربط المنتج بجمهوره عبر الهوية والتواصل الإبداعي والتسويق المدروس.' },
      caption: { en: 'BRAND / CREATIVE / MARKETING', ar: 'الهوية / الإبداع / التسويق' },
      lines: ['Positioning', 'Communication', 'Iteration'],
    },
  ];

  protected readonly services = [
    {
      id: 'engineering', number: '01', kind: { en: 'TECHNOLOGY', ar: 'التقنية' },
      name: { en: 'Full-stack software & platforms', ar: 'تطوير متكامل للبرمجيات والمنصات' },
      desc: { en: 'We engineer the entire product: sophisticated interfaces, backend logic, APIs, data architecture, deployment and the systems connecting them. Real software for real business operations.', ar: 'نطوّر المنتج كاملاً: الواجهات المتقنة والخدمات الخلفية وواجهات البرمجة وقواعد البيانات والنشر والأنظمة التي تربطها. برمجيات حقيقية تدعم أعمالاً حقيقية.' },
      points: [{en:'Frontend & backend engineering',ar:'تطوير الواجهات والخدمات الخلفية'}, {en:'SaaS platforms & dashboards',ar:'منصات SaaS ولوحات التحكم'}, {en:'APIs, databases & deployment',ar:'واجهات البرمجة وقواعد البيانات والنشر'}],
    },
    {
      id: 'web', number: '02', kind: { en: 'ENGINEERING', ar: 'الهندسة' },
      name: { en: 'Websites that set a standard', ar: 'مواقع ترتقي بالتجربة' },
      desc: { en: 'Custom-coded, high-performance websites with deliberate design, accessibility and bilingual foundations.', ar: 'مواقع مبرمجة خصيصاً بأداء عالٍ وتصميم مدروس ودعم متقن للعربية والإنجليزية.' },
      points: [{en:'Angular & Next.js development',ar:'تطوير Angular وNext.js'}, {en:'Responsive, accessible interfaces',ar:'واجهات متجاوبة ومتاحة للجميع'}, {en:'Performance & technical SEO',ar:'الأداء والسيو التقني'}],
    },
    {
      id: 'product', number: '03', kind: { en: 'PRODUCT', ar: 'المنتج' },
      name: { en: 'Product design & UX', ar: 'تصميم المنتجات وتجربة المستخدم' },
      desc: { en: 'From research and prototypes to clear design systems that connect user needs with business goals.', ar: 'من البحث والنماذج الأولية إلى أنظمة تصميم تربط احتياجات المستخدم بأهداف العمل.' },
      points: [{en:'Product strategy',ar:'استراتيجية المنتج'}, {en:'UI/UX & interaction design',ar:'تصميم الواجهات والتفاعل'}, {en:'Design systems',ar:'أنظمة التصميم'}],
    },
    {
      id: 'automation', number: '04', kind: { en: 'SYSTEMS', ar: 'الأنظمة' },
      name: { en: 'Automation & integrations', ar: 'الأتمتة وتكامل الأنظمة' },
      desc: { en: 'Connected workflows, structured data and internal tools that help teams spend less time on repetition.', ar: 'سير عمل مترابط وبيانات منظمة وأدوات داخلية تساعد الفرق على تقليل العمل المتكرر.' },
      points: [{en:'Workflow design',ar:'تصميم سير العمل'}, {en:'System integration',ar:'تكامل الأنظمة'}, {en:'Operational tooling',ar:'الأدوات التشغيلية'}],
    },
    {
      id: 'brand', number: '05', kind: { en: 'IDENTITY', ar: 'الهوية' },
      name: { en: 'Brand & creative direction', ar: 'الهوية والتوجيه الإبداعي' },
      desc: { en: 'Distinctive visual identities, expressive digital experiences and consistent communication systems.', ar: 'هويات بصرية مميزة وتجارب رقمية معبّرة وأنظمة تواصل متسقة.' },
      points: [{en:'Visual identity',ar:'الهوية البصرية'}, {en:'Digital art direction',ar:'التوجيه الفني الرقمي'}, {en:'Motion & creative content',ar:'الموشن والمحتوى الإبداعي'}],
    },
    {
      id: 'growth', number: '06', kind: { en: 'GROWTH', ar: 'النمو' },
      name: { en: 'Marketing with a product mind', ar: 'تسويق يفهم المنتج' },
      desc: { en: 'Content, campaigns and growth strategy shaped by the same care we bring to digital products.', ar: 'محتوى وحملات واستراتيجيات نمو تحظى بالعناية نفسها التي نوليها للمنتجات الرقمية.' },
      points: [{en:'Campaign strategy',ar:'استراتيجية الحملات'}, {en:'Creative production',ar:'إنتاج المحتوى الإبداعي'}, {en:'SEO & audience growth',ar:'السيو ونمو الجمهور'}],
    },
  ];

  protected readonly projects = [
    {
      number:'01', name:'Nay Alrouh', domain:'nayalrouh.com', link:'https://nayalrouh.com/',
      logo:'https://nayalrouh.b-cdn.net/logo.png', theme:'nay',
      tag:{en:'DIGITAL HEALTH',ar:'الصحة الرقمية'},
      title:{en:'Care, made more accessible.',ar:'مساحة أقرب للرعاية النفسية.'},
      description:{en:'A bilingual mental wellness platform connecting people with digital therapy services and support.',ar:'منصة ثنائية اللغة للصحة النفسية تتيح الوصول إلى خدمات العلاج والدعم عن بُعد.'},
    },
    {
      number:'02', name:'Sukkar', domain:'sukkar.space', link:'https://sukkar.space/',
      logo:'/img/portfolio-sukkar-logo.svg', theme:'sukkar',
      tag:{en:'HEALTH EDUCATION',ar:'التثقيف الصحي'},
      title:{en:'Knowledge that feels human.',ar:'معرفة أقرب إلى الناس.'},
      description:{en:'An Arabic-first diabetes education initiative focused on accessible, useful information.',ar:'مبادرة عربية للتثقيف حول السكري تركّز على تقديم المعرفة بطريقة واضحة ومفيدة.'},
    },
    {
      number:'03', name:'Alma Alrouh', domain:'alma-alrouh.com', link:'https://alma-alrouh.com/',
      logo:'/img/portfolio-alma-logo.png', theme:'alma',
      tag:{en:'COMMUNITY & IMPACT',ar:'المجتمع والأثر'},
      title:{en:'A space for better conversations.',ar:'مساحة لحوارات أكثر إنسانية.'},
      description:{en:'A multilingual mental health support initiative connecting educational programs and community outreach.',ar:'مبادرة متعددة اللغات لدعم الصحة النفسية تجمع بين البرامج التوعوية والمشاركة المجتمعية.'},
    },
  ];

  protected readonly stack = [
    {name:'Angular',icon:'angular.svg'},
    {name:'React',icon:'react.svg'},
    {name:'Next.js',icon:'nextdotjs.svg'},
    {name:'TypeScript',icon:'typescript.svg'},
    {name:'JavaScript',icon:'javascript.svg'},
    {name:'Node.js',icon:'nodedotjs.svg'},
    {name:'PostgreSQL',icon:'postgresql.svg'},
    {name:'Prisma',icon:'prisma.svg'},
    {name:'Neon',icon:'neon.svg'},
    {name:'Railway',icon:'railway.svg'},
    {name:'Cloudflare',icon:'cloudflare.svg'},
    {name:'Git',icon:'git.svg'},
    {name:'GitHub',icon:'github.svg'},
    {name:'Figma',icon:'figma.svg'},
  ];

  protected readonly steps = [
    { number: '01', title: {en:'Understand',ar:'نفهم'}, body: {en:'Business context, user needs and the right problem to solve.',ar:'نفهم سياق العمل واحتياجات المستخدم والمشكلة التي تستحق الحل.'}},
    { number: '02', title: {en:'Shape',ar:'نصمّم'}, body: {en:'A clear product direction, visual language and technical approach.',ar:'نحدد اتجاه المنتج ولغته البصرية وطريقة تنفيذه تقنياً.'}},
    { number: '03', title: {en:'Build',ar:'نطوّر'}, body: {en:'Thoughtful engineering, connected systems and precise execution.',ar:'هندسة مدروسة وأنظمة مترابطة وتنفيذ متقن.'}},
    { number: '04', title: {en:'Refine',ar:'نحسّن'}, body: {en:'Real validation, performance and continuous improvement.',ar:'نتحقق من التجربة والأداء ونواصل التحسين.'}},
  ];

  constructor() {
    const seo = inject(SeoService);
    const meta: Record<StudioPage, { en: string; ar: string; description: TextPair }> = {
      home: {
        en: 'Veloura | Digital Products, Software Engineering & Creative Technology',
        ar: 'فيلورا | المنتجات الرقمية وهندسة البرمجيات والحلول الإبداعية',
        description: {en:'Veloura is a full-stack software development company building digital products, frontend and backend systems, SaaS platforms and VeloBase, with UI/UX, branding and marketing expertise.', ar:'فيلورا شركة تقنية تطوّر المواقع المخصصة وتطبيقات الويب والمنصات المترابطة وتجارب رقمية مميزة، مع خبرة في التصميم والهوية والتسويق.'},
      },
      services: {
        en:'Services | Veloura — Software, Digital Products & Growth',
        ar:'الخدمات | فيلورا — البرمجيات والمنتجات الرقمية والنمو',
        description:{en:'Custom software, websites, web applications, UX design, integrations, branding and marketing from Veloura.',ar:'حلول برمجية ومواقع وتطبيقات ويب وتصميم تجربة المستخدم وتكامل الأنظمة والهوية والتسويق من فيلورا.'},
      },
      work: {
        en:'Selected Work | Veloura', ar:'أعمالنا المختارة | فيلورا',
        description:{en:'Explore selected digital projects and organizations associated with Veloura: Nay Alrouh, Sukkar and Alma Alrouh.',ar:'تعرّف على مجموعة من المشاريع الرقمية المرتبطة بفيلورا، ومنها ناي الروح وسكّر وألما الروح.'},
      },
      about: {
        en:'About | Veloura — An Engineering-Led Creative Company',
        ar:'من نحن | فيلورا — شركة تقنية تجمع الهندسة والإبداع',
        description:{en:'We bring software engineering, product design, brand and marketing together to build thoughtful digital experiences.',ar:'نجمع هندسة البرمجيات وتصميم المنتجات والهوية والتسويق لبناء تجارب رقمية متكاملة.'},
      },
      contact: {
        en:'Contact | Start a Project with Veloura',
        ar:'تواصل معنا | ابدأ مشروعك مع فيلورا',
        description:{en:'Discuss a custom software, website, digital product, design or marketing project with Veloura.',ar:'تواصل مع فيلورا لمناقشة مشروع برمجي أو موقع أو منتج رقمي أو تصميم أو تسويق.'},
      },
    };
    seo.set(() => this.t.isArabic() ? meta[this.page].ar : meta[this.page].en,
            () => this.t.pick(meta[this.page].description));
  }

  protected text(value: TextPair): string { return this.t.pick(value); }
  protected copy(en: string, ar: string): string { return this.t.isArabic() ? ar : en; }
  protected selectMode(index: number): void { this.mode.set(index); }
  protected selectService(index: number): void { this.activeService.set(index); }
  protected selectProject(index: number): void { this.activeProject.set(index); }
  protected selectPlatformView(index: number): void { this.activePlatformView.set(index); }
}
