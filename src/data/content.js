/* Single source of truth for page copy.
   Figures in [brackets] are placeholders pending Kayo leadership verification.
   Photos come from the client's asset folder (Kayo photos / Founder's pic / Awards). */

import veenaPhoto from '../assets/photos/veena.jpg'
import sankaraPhoto from '../assets/photos/sankara.jpg'
import centreClass from '../assets/photos/centre-class.jpg'

/* Backdrop for the case-study video block. */
export const CENTRE_PHOTO = centreClass

/* Videos. Set either value to an embeddable URL and the play control appears:
     Google Drive → driveEmbed('<file id>')   (file must be link-shareable)
     YouTube      → 'https://www.youtube.com/embed/<id>'
   Left null because the client Drive has no franchisee testimonial or founder
   intro clip yet — only classroom activity footage. */
export const driveEmbed = (fileId) => `https://drive.google.com/file/d/${fileId}/preview`

export const VIDEOS = {
  caseStudy: null,
  founder: null,
}

export const CONTACT = {
  phone: '+91 91761 25555',
  phoneHref: 'tel:+919176125555',
  // Franchise desk WhatsApp — every WhatsApp CTA on the page routes here.
  whatsapp: 'https://wa.me/919176125555',
  whatsappCall:
    'https://wa.me/919176125555?text=' +
    encodeURIComponent("Hi Kayo franchise desk — I'd like to book a call slot about the franchise."),
  site: 'kayointernational.in',
  // TODO: replace with the real PDF once the brochure is supplied.
  brochureUrl: null,
}

/* Hero founder cards. Drop a real photo import into `photo` when the
   high-res files arrive; the initials avatar is the fallback until then.
   To show only Veena, delete the second entry — the layout adapts. */
export const FOUNDERS = [
  {
    name: 'Veena Sundaramurthy',
    initials: 'VS',
    photo: veenaPhoto,
    title: 'Founder & Director, M.A.',
    note: 'Early Childhood Education & Child Psychology. Creator of the NURTURE Lab Curriculum.',
  },
  {
    name: 'Sankara K',
    initials: 'SK',
    photo: sankaraPhoto,
    title: 'Founder — [designation to confirm]',
    note: 'BITS Pilani. Builds the education-technology and growth systems behind Kayo.',
  },
]

export const NAV_LINKS = [
  { label: 'Investment', href: '#economics' },
  { label: 'Franchisee Proof', href: '#proof' },
  { label: 'Support', href: '#support' },
  { label: 'FAQ', href: '#faq' },
]

export const LADDER = [
  { id: 'top', label: 'Attention' },
  { id: 'trust', label: 'Trust' },
  { id: 'economics', label: 'Economics' },
  { id: 'support', label: 'Risk removal' },
  { id: 'proof', label: 'Proof' },
  { id: 'apply', label: 'Action' },
]

export const HERO_BULLETS = [
  { strong: '₹15 lakh', rest: ' all-in investment range — inclusions listed openly below' },
  { strong: 'No royalty', rest: ' operating model — recurring fees explained line by line' },
  { strong: '', rest: 'Protected territory with a city-fit review before you commit' },
  { strong: '', rest: 'Launch, curriculum, hiring and admissions support from day one' },
]

export const PROOF_STATS = [
  { value: '12+', label: 'Years of expertise' },
  { value: '20+', label: 'Awards received' },
  { value: '1,000+', label: 'Happy children' },
  { value: '4.9/5', label: 'Parent rating' },
  { value: '[X]', label: 'Cities — Chennai · Coimbatore · expanding*', wide: true },
]

export const OPPORTUNITY = [
  {
    icon: 'trending-up',
    title: 'Predictable revenue cycle',
    body: 'Preschool admissions follow a consistent academic calendar, making enrollment periods easier to anticipate. This allows you to plan classroom capacity, staffing, and finances with greater confidence throughout the year.',
  },
  {
    icon: 'users',
    title: 'Community asset',
    body: 'A trusted preschool grows into an integral part of the local community. As relationships with families strengthen over time, referrals from parents, siblings, and neighbours become a steady source of new enrolments.',
  },
  {
    icon: 'settings',
    title: 'Structured operating system',
    body: 'Benefit from an NEP-aligned curriculum, proven SOPs, staff training, audits, and admissions playbooks designed for smooth operations. You manage your preschool with confidence while Kayo supports the systems that keep it running efficiently.',
  },
]

export const SNAPSHOT = [
  { item: 'Total project range', detail: '₹15 lakh' },
  { item: 'Built-up area required', detail: '2,000 sq.ft' },
  { item: 'Outdoor play area', detail: '150 – 200 sq.ft' },
  { item: 'Royalty', detail: 'Nil — no-royalty model', inc: true },
  { item: 'Recurring fees', detail: '₹8,000 per student / yr as full-year kit fee' },
  { item: 'Working capital buffer', detail: '3–6 months opex' },
]

export const INCLUSIONS = [
  ['Brand licence & territory rights', 'Property lease / deposit'],
  ['Infrastructure design & site selection help', 'Civil work & interiors execution'],
  ['NEP-aligned curriculum & student kits', 'Staff salaries'],
  ['Owner & teacher training', 'Local utilities & running costs'],
  ['Launch marketing playbook & SOPs', 'Local ad spend beyond launch kit'],
  ['School set-up with furniture, learning & play materials', ''],
  ['Around-the-clock support & guidance', ''],
]

export const SCENARIOS = [
  {
    lab: 'Conservative',
    title: 'Slow-start city',
    rows: [
      ['Enrolled students (yr 1)', '[40]'],
      ['Avg. annual fee', '[₹XX,XXX]'],
      ['Monthly operating cost', '[₹X.X L]'],
      ['Break-even students', '[~35]'],
    ],
    payback: '[30–36 months]',
  },
  {
    lab: 'Target',
    title: 'Typical Kayo launch',
    mid: true,
    rows: [
      ['Enrolled students (yr 1)', '[60]'],
      ['Avg. annual fee', '[₹XX,XXX]'],
      ['Monthly operating cost', '[₹X.X L]'],
      ['Break-even students', '[~35]'],
    ],
    payback: '[20–26 months]',
  },
  {
    lab: 'Mature',
    title: 'Full-capacity centre',
    rows: [
      ['Enrolled students', '[90–100]'],
      ['Avg. annual fee', '[₹XX,XXX]'],
      ['Monthly operating cost', '[₹X.X L]'],
      ['Capacity utilisation', '[85%+]'],
    ],
    payback: '[14–18 months]',
  },
]

export const WHY_KAYO = [
  {
    icon: 'percent',
    title: 'No royalty structure',
    body: 'Your fee revenue is yours. Kayo earns through the franchise package and material supply — incentives stay aligned with your enrollment growth.',
  },
  {
    icon: 'book-open',
    title: 'NEP-aligned international curriculum',
    body: 'Delivered ready-to-teach with student kits, teacher guides and assessment frameworks. You never write a syllabus.',
  },
  {
    icon: 'target',
    title: 'Admissions system, not just branding',
    body: 'Launch campaign playbook, counselling scripts, CRM and enquiry follow-up SOPs built from operating centres.',
  },
  {
    icon: 'graduation-cap',
    title: 'Owner & teacher training',
    body: 'Structured induction before launch, plus refresher programs. You can enter with zero education experience.',
  },
  {
    icon: 'clipboard-check',
    title: 'Quality audits',
    body: "Scheduled audits protect the brand promise parents pay for — and protect your centre's reputation with it.",
  },
  {
    icon: 'shield',
    title: 'Protected territory',
    body: "Defined catchment exclusivity so a second Kayo doesn't open across your street. Policy detailed before agreement.",
  },
]

export const PHASES = [
  {
    n: 1,
    phase: 'Evaluate',
    kayo: 'City-fit & demand assessment, territory check',
    you: 'Share capital range, premises status, timeline',
    output: 'Go / no-go decision, both sides',
  },
  {
    n: 2,
    phase: 'Approve',
    kayo: 'Agreement, territory protection terms, cost sheet',
    you: 'Sign agreement, pay franchise fee',
    output: 'Protected territory locked',
  },
  {
    n: 3,
    phase: 'Build',
    kayo: 'Site selection help, infrastructure design, vendor specs',
    you: 'Lease premises, fund & execute fit-out',
    output: 'Launch-ready centre, audit-passed',
  },
  {
    n: 4,
    phase: 'School Setup',
    kayo: 'Classroom furniture, toys, play materials, indoor & outdoor learning aids, and setup guidance',
    you: 'Receive and install the provided setup materials',
    output: 'Fully equipped, classroom-ready preschool',
  },
  {
    n: 5,
    phase: 'Hire',
    kayo: 'Role profiles, teacher training & certification',
    you: 'Recruit locally, pay salaries',
    output: 'Trained, certified team',
  },
  {
    n: 6,
    phase: 'Launch',
    kayo: 'Launch campaign kit, counselling scripts, CRM setup',
    you: 'Run local outreach, host open days',
    output: 'First admissions batch enrolled',
  },
  {
    n: 7,
    phase: 'Operate',
    kayo: 'SOPs, materials supply, quality audits, ongoing support',
    you: 'Daily operations, parent experience',
    output: 'Retention + referral engine running',
  },
  {
    n: 8,
    phase: 'Scale',
    kayo: 'Multi-centre pathway, priority territory options',
    you: 'Reinvest from centre cash flow',
    output: 'Second-centre eligibility',
  },
]

export const QUALIFY = {
  territory: [
    'Priority expansion: Tamil Nadu, Karnataka, Kerala & Andhra Pradesh — tier 1–3 cities',
    'Protected catchment — exclusivity radius defined in the agreement',
    'One operator per territory; multi-unit rights available to performing partners',
    'City availability confirmed during the fit check, before any commitment',
  ],
  site: [
    '2,000 sq.ft built-up area (~4 classrooms)',
    'Comparable outdoor play space',
    'Ground floor preferred, residential-catchment location',
    'Leased or owned — site approval by Kayo before fit-out begins',
  ],
}

export const ROADMAP = [
  {
    wk: 'Week 0–2',
    title: 'City-fit & discovery',
    body: 'Availability check, discovery call, investment brief walkthrough.',
    gate: 'Mutual go / no-go',
  },
  {
    wk: 'Week 2–4',
    title: 'Agreement & territory',
    body: 'Terms review, territory protection defined, agreement signed.',
    gate: 'Territory locked',
  },
  {
    wk: 'Week 4–6',
    title: 'Site & design',
    body: 'Site approval, infrastructure design, vendor specs issued.',
    gate: 'Site approved',
  },
  {
    wk: 'Week 6–12',
    title: 'Fit-out & hiring',
    body: 'Interiors executed to spec; team recruited, enters training.',
    gate: 'Build audit passed',
  },
  {
    wk: 'Week 12–16',
    title: 'Training & setup',
    body: 'Owner + teacher certification, kits delivered, CRM live.',
    gate: 'Team certified',
  },
  {
    wk: 'Week 16',
    title: 'Admissions launch',
    body: 'Local launch campaign, open days, Kayo counselling scripts.',
    gate: 'First enrolments',
  },
  {
    wk: 'Week 16+',
    title: 'Opening day',
    body: 'Centre opens with first batch; operations shift to SOP rhythm.',
    gate: 'Centre live',
  },
  {
    wk: 'Ongoing',
    title: 'Operate & grow',
    body: 'Quality audits, refresher training, year-two enrolment planning.',
    gate: 'KPI: retention + referrals',
    highlight: true,
  },
]

export const LEADERS = [
  {
    icon: 'user',
    initials: 'VS',
    photo: veenaPhoto,
    name: 'Veena Sundaramurthy',
    role: 'Founder · 12+ years in early education',
    body: 'Founded in 2013 by Veena Sundaramurthy, Kayo International was born from her passion for early childhood education and her vision to nurture confident, curious, and creative young learners. Combining expertise in Early Childhood Education and Child Psychology, she developed the NURTURE Lab Curriculum, blending Montessori, STEM, and play-based learning. With a strong foundation of quality, transparency, and innovation, Kayo International provides a trusted preschool environment that prepares children for lifelong success.',
    video: 'Founder intro video',
  },
  {
    icon: 'user',
    initials: 'SK',
    photo: sankaraPhoto,
    name: 'Sankara K',
    role: 'Founder · BITS Pilani · [designation to confirm]',
    body: 'My journey from BITS Pilani inspired a lifelong mission to combine education and technology to transform how schools grow and succeed. I build innovative education solutions, explore emerging opportunities, and help institutions navigate growth with strategic insights. By partnering with school leaders, I turn ambitious ideas into impactful strategies that drive academic and business excellence.',
    video: 'Founder intro video',
  },
]

/* Transcribed from the award certificates in the client asset folder. */
export const AWARDS = [
  {
    name: 'Top 100 Preschools of India',
    body: 'Brainfeed School Excellence Awards, 2022 — for commitment to nurturing young minds. Presented at Hyderabad.',
  },
  {
    name: 'Hall of Fame — Top 50 Franchised Preschools in Asia',
    body: 'Early Childhood Association (ECA), 2019 — awarded to Kayo International, Chennai.',
  },
  {
    name: 'Promising 21st Century India Preschool',
    body: 'EducationWorld, 2018–19 — for Teachers–Parents–Student Engagement. Kayo International, Perungudi, Chennai.',
  },
  {
    name: 'Best Early Education Innovative Curriculum in Chennai',
    body: 'Global Triumph Foundation, GTF Education Summit & Awards 2018 — presented at New Delhi.',
  },
  {
    name: 'Pre-School with the Interactive Infrastructure (Regional)',
    body: 'GSLC INSPIRE 3.0, 2023 — for outstanding contribution and impact in education. Presented at Hyderabad.',
  },
  {
    name: 'Best Emerging Pre School in South India',
    body: "Indian's Eminent Educational Awards, 2020 — honourable achievement, Eminent Research.",
  },
  {
    name: 'Top 50 Incredible Educators',
    body: 'ECDLA, Early Years Educators Summit & Awards 2023 — awarded to founder Veena Sundaramurthy, Chennai.',
  },
]

export const FAQS = [
  {
    q: 'Is the ₹15 lakh figure complete?',
    a: 'It covers the franchise package listed in the inclusions table above. Property, fit-out execution, salaries and running costs are separate and shown in the same table.',
  },
  {
    q: 'Do I need education experience?',
    a: 'No. Owner training, teacher certification and SOPs are part of the package. What you need: local presence, operational involvement and a long-term view.',
  },
  {
    q: 'How many students break even?',
    a: "Approximately [~35] enrolled students under the target model above — pressure-test that against your city's fee levels during the discovery call.",
  },
  {
    q: 'What if admissions are slow?',
    a: "The launch playbook includes local lead generation, counselling scripts and a CRM follow-up system, with Kayo's admissions team reviewing your funnel through the first season. The conservative scenario above models a slow start honestly.",
  },
  {
    q: 'Is my territory protected?',
    a: 'Yes — a defined exclusivity catchment is written into the agreement. One operator per territory.',
  },
  {
    q: 'Are there recurring fees despite "no royalty"?',
    a: 'Yes, and they\'re listed openly: material/kit supply and [annual fee — verified figure]. No revenue-share royalty on your fee income.',
  },
  {
    q: 'What does Kayo fund vs what do I fund?',
    a: 'See the inclusions/exclusions table in the investment section — the split is itemised line by line.',
  },
  {
    q: 'How long does setup take?',
    a: 'Roughly 18 weeks from agreement to opening, gate by gate, per the roadmap above. Site readiness is the biggest variable.',
  },
  {
    q: 'Can I open more centres?',
    a: 'Yes — performing partners get priority on adjacent territories under the multi-unit pathway.',
  },
  {
    q: 'What is the agreement duration?',
    a: '[X years], with renewal terms stated in the agreement — ask for the draft during discovery.',
  },
  {
    q: 'What are renewal and exit terms?',
    a: "[Renewal conditions / exit and transfer process — insert approved terms]. You'll see the full clause before signing anything.",
  },
  {
    q: 'Why Kayo over other preschool franchises?',
    a: "No-royalty economics, a 12-year operating record in Tamil Nadu, NEP-aligned curriculum, and a launch admissions system — compare each mechanism above against any alternative's brochure.",
  },
]

export const STEP2_FIELDS = [
  {
    id: 'capital',
    label: 'Are you ready to invest ₹15 lakh?',
    options: ['Yes', 'May be', 'No'],
    required: true,
  },
  {
    id: 'timeline',
    label: 'When do you want to launch?',
    options: ['Within 3 months', '3 – 6 months', '6 – 12 months', 'Just exploring'],
    required: true,
  },
  {
    id: 'premises',
    label: 'Premises status',
    options: ['Own a suitable property', 'Identified a property to lease', 'Still searching'],
    required: true,
  },
  {
    id: 'involvement',
    label: 'Your involvement',
    options: ['Full-time operator', 'Part-time with hired manager', 'Investor only'],
    required: false,
  },
]
