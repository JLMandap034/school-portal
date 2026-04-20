const baseImage = {
  src: '/placeholder-campus.svg',
  alt: 'Generic placeholder illustration for school website content',
  width: 1600,
  height: 500,
};

const academicsPlaceholder = {
  src: '/placeholder-academics.svg',
  alt: 'Generic placeholder illustration for academic content',
  width: 1600,
  height: 900,
};

const eventsPlaceholder = {
  src: '/placeholder-events.svg',
  alt: 'Generic placeholder illustration for school activities and events',
  width: 1600,
  height: 900,
};

const buildGalleryImages = (slug, title, sources) =>
  sources.map((source, index) => ({
    id: `${slug}-${index + 1}`,
    src: source.src,
    alt: `${title} image ${index + 1}`,
    width: source.width,
    height: source.height,
  }));

const createSeo = ({ title, description, image = baseImage, type = 'website' }) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    type,
    image,
  },
});

const createRecord = ({
  id,
  slug,
  title,
  excerpt,
  featured = false,
  sortOrder = 0,
  archived = false,
  publishStatus = 'published',
  coverImage = baseImage,
  seo,
  publishedAt = '2026-04-01T08:00:00+08:00',
  updatedAt = '2026-04-20T08:00:00+08:00',
  ...rest
}) => ({
  id,
  slug,
  title,
  excerpt,
  featured,
  sortOrder,
  archived,
  publishStatus,
  coverImage,
  seo: seo || createSeo({ title, description: excerpt, image: coverImage }),
  publishedAt,
  updatedAt,
  ...rest,
});

export const contentModelBlueprint = {
  commonFields: [
    'id',
    'slug',
    'title',
    'excerpt',
    'coverImage',
    'featured',
    'sortOrder',
    'archived',
    'publishStatus',
    'seo',
    'publishedAt',
    'updatedAt',
  ],
  entities: [
    'pages',
    'news_posts',
    'events',
    'gallery_items',
    'testimonials',
    'faculty_members',
    'faqs',
    'academic_programs',
    'admissions_content',
    'downloadable_documents',
    'contact_details',
    'site_settings',
    'navigation_items',
    'announcements',
    'partners',
    'campus_facilities',
    'student_life_sections',
  ],
};

export const siteSettings = {
  schoolName: 'School Portal',
  shortName: 'School Portal',
  logo: {
    src: '/generic-logo.svg',
    alt: 'School Portal logo',
  },
  tagline: '',
  contactInfo: {
    email: 'hello@schoolportal.edu.ph',
    phone: '+63 2 8123 4521',
    mobile: '+63 917 555 2810',
    address: '118 Sampaguita Street, San Miguel, Quezon City, Metro Manila',
    officeHours: 'Monday to Friday, 7:30 AM to 5:00 PM',
  },
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
    { label: 'YouTube', href: 'https://www.youtube.com', icon: 'youtube' },
  ],
  mapCoordinates: {
    lat: 14.676,
    lng: 121.0437,
  },
  directionsLink:
    'https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=14.6760%2C121.0437%3B14.6760%2C121.0437',
  locales: ['en-PH', 'fil-PH'],
  theme: {
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    surface: '#ffffff',
    surfaceMuted: '#eff6ff',
  },
};

export const announcements = [
  createRecord({
    id: 'announcement-enrollment',
    slug: 'early-enrollment-window',
    title: 'Early enrollment inquiries now open for School Year 2026-2027',
    excerpt: 'Families may now request admissions briefings, campus tours, and program guides for the upcoming school year.',
    featured: true,
    category: 'announcement',
  }),
];

export const emergencyBanner = {
  enabled: false,
  title: 'Emergency Advisory',
  message: 'Campus operations will shift to online coordination only during severe weather alerts.',
};

export const partners = [
  createRecord({
    id: 'partner-deped-ready',
    slug: 'deped-aligned',
    title: 'DepEd-aligned curriculum',
    excerpt: 'Programs are organized around Philippine academic standards and practical learner outcomes.',
  }),
  createRecord({
    id: 'partner-guidance-network',
    slug: 'guidance-network',
    title: 'Student support partnerships',
    excerpt: 'Guidance, wellness, and family support programs are coordinated with community partners and specialists.',
  }),
  createRecord({
    id: 'partner-community-outreach',
    slug: 'community-outreach',
    title: 'Community outreach network',
    excerpt: 'The school collaborates with outreach groups and local institutions for student service initiatives.',
  }),
];

export const achievements = [
  'Campus journalism finalists in the division press conference',
  'Regional STEM project commendations for senior high research teams',
  'Student leadership recognition for community outreach work',
  'Academic excellence awards across elementary and junior high levels',
];

export const campusFacilities = [
  createRecord({
    id: 'facility-library',
    slug: 'library-learning-hub',
    title: 'Library and learning hub',
    excerpt: 'A calm reading and study environment with print resources, digital stations, and guided research support.',
  }),
  createRecord({
    id: 'facility-stem',
    slug: 'science-and-stem-labs',
    title: 'Science and STEM laboratories',
    excerpt: 'Flexible spaces for experiments, demonstrations, robotics activities, and collaborative inquiry.',
  }),
  createRecord({
    id: 'facility-court',
    slug: 'covered-court',
    title: 'Covered court and activity grounds',
    excerpt: 'A practical venue for assemblies, intramurals, recognition programs, and school-wide events.',
  }),
];

export const studentLifeSections = [
  createRecord({
    id: 'student-life-leadership',
    slug: 'student-leadership',
    title: 'Student leadership',
    excerpt: 'Councils, committees, and mentoring opportunities help learners build confidence and responsibility.',
  }),
  createRecord({
    id: 'student-life-clubs',
    slug: 'clubs-and-organizations',
    title: 'Clubs and organizations',
    excerpt: 'Creative, academic, service, and media groups give students room to discover interests and build community.',
  }),
  createRecord({
    id: 'student-life-service',
    slug: 'service-and-community',
    title: 'Service and community',
    excerpt: 'Students participate in outreach and campus improvement projects that strengthen empathy and initiative.',
  }),
];

export const testimonials = [
  createRecord({
    id: 'testimonial-parent',
    slug: 'parent-marielle',
    title: 'Parent testimonial',
    excerpt: 'The school communicates clearly and the website makes it easy for our family to find updates and key information.',
    quote:
      'The school communicates clearly and the website makes it easy for our family to find updates, admissions details, and activity information without confusion.',
    personName: 'Marielle Dela Cruz',
    role: 'Parent',
  }),
  createRecord({
    id: 'testimonial-student',
    slug: 'student-andre',
    title: 'Student testimonial',
    excerpt: 'School feels structured, supportive, and welcoming every day.',
    quote:
      'Teachers challenge us to do well, but the environment still feels welcoming and organized every day. It feels like a school that really knows its students.',
    personName: 'Andre Paloma',
    role: 'Senior High Student',
  }),
  createRecord({
    id: 'testimonial-alumni',
    slug: 'alumni-sofia',
    title: 'Alumni testimonial',
    excerpt: 'The school gave me a strong academic base and the confidence to speak up.',
    quote:
      'What stayed with me most was how the school balanced discipline, values, and encouragement. It gave me a strong academic base and the confidence to speak up.',
    personName: 'Sofia Ramirez',
    role: 'Alumna',
  }),
];

export const facultyMembers = [
  createRecord({
    id: 'faculty-principal',
    slug: 'dr-elena-navarro',
    title: 'Dr. Elena Navarro',
    excerpt: 'Principal with a focus on academic clarity, family partnership, and organized school systems.',
    position: 'Principal',
    department: 'School Leadership',
    bio: 'Dr. Navarro leads the school with an emphasis on meaningful instruction, strong communication, and a values-centered learning culture.',
  }),
  createRecord({
    id: 'faculty-acad-head',
    slug: 'mr-carlo-reyes',
    title: 'Mr. Carlo Reyes',
    excerpt: 'Academic coordinator guiding curriculum continuity from elementary through senior high.',
    position: 'Academic Coordinator',
    department: 'Academics',
    bio: 'Mr. Reyes supports curriculum alignment, teacher collaboration, and learning continuity across grade levels.',
  }),
  createRecord({
    id: 'faculty-guidance',
    slug: 'ms-lia-santos',
    title: 'Ms. Lia Santos',
    excerpt: 'Guidance lead focused on student support, wellness, and parent partnership.',
    position: 'Guidance Head',
    department: 'Student Support',
    bio: 'Ms. Santos coordinates learner well-being initiatives, counseling programs, and responsive family support.',
  }),
  createRecord({
    id: 'faculty-stem',
    slug: 'ms-joanna-lim',
    title: 'Ms. Joanna Lim',
    excerpt: 'STEM educator supporting inquiry, research, and project-based learning.',
    position: 'Senior High STEM Teacher',
    department: 'Science and Research',
    bio: 'Ms. Lim mentors research teams and helps students connect scientific reasoning with real-world problem solving.',
  }),
];

export const faqs = [
  createRecord({
    id: 'faq-admissions',
    slug: 'how-do-i-start-an-inquiry',
    title: 'How do I start an admissions inquiry?',
    excerpt: 'Families may reach out through the inquiry form, phone, or email for admissions guidance.',
    category: 'Admissions',
    answer:
      'You may start by sending an inquiry through the contact form, calling the admissions office, or emailing the school directly. A staff member will guide you through the next steps.',
  }),
  createRecord({
    id: 'faq-campus-visits',
    slug: 'are-campus-visits-available',
    title: 'Are campus visits available?',
    excerpt: 'Campus visits may be arranged depending on the school calendar and appointment availability.',
    category: 'Visits',
    answer:
      'Yes. Campus visits may be scheduled depending on the academic calendar, event schedule, and available appointment slots.',
  }),
  createRecord({
    id: 'faq-updates',
    slug: 'where-can-families-find-updates',
    title: 'Where can families find school updates?',
    excerpt: 'Latest updates are posted on the public website through announcements, news, and activities pages.',
    category: 'Website',
    answer:
      'Families can check the homepage, news page, and events page for current announcements, recaps, and upcoming activities.',
  }),
  createRecord({
    id: 'faq-documents',
    slug: 'what-documents-are-needed',
    title: 'What documents are usually needed for admissions?',
    excerpt: 'Required documents typically include student records, photos, and identification requirements.',
    category: 'Admissions',
    answer:
      'Common requirements include a completed application form, recent report card, birth certificate copy, photos, and transfer credentials if applicable.',
  }),
];

export const academicPrograms = [
  createRecord({
    id: 'program-preschool',
    slug: 'preschool',
    title: 'Preschool',
    excerpt: 'Foundational play-based learning that develops literacy readiness, routines, and social confidence.',
    summary:
      'Preschool learners build readiness through guided routines, language development, creative exploration, and age-appropriate early numeracy.',
    highlights: ['Language readiness', 'Structured play', 'Creative exploration'],
  }),
  createRecord({
    id: 'program-elementary',
    slug: 'elementary',
    title: 'Elementary',
    excerpt: 'Balanced academic growth with strong literacy, numeracy, and values formation.',
    summary:
      'Elementary students strengthen core skills while building confidence in communication, collaboration, and responsible habits.',
    highlights: ['Reading culture', 'Project work', 'Character formation'],
  }),
  createRecord({
    id: 'program-jhs',
    slug: 'junior-high-school',
    title: 'Junior High School',
    excerpt: 'Deeper subject learning supported by clubs, leadership opportunities, and structured guidance.',
    summary:
      'Junior high students develop discipline, analytical thinking, and meaningful participation in school life through core academics and student programs.',
    highlights: ['Academic depth', 'Leadership opportunities', 'Guidance support'],
  }),
  createRecord({
    id: 'program-shs',
    slug: 'senior-high-school',
    title: 'Senior High School',
    excerpt: 'College and career preparation through strand-based learning, research, and mentoring.',
    summary:
      'Senior high school supports transition planning through academic strands, performance tasks, research, and practical future-readiness support.',
    highlights: ['STEM, ABM, HUMSS, TVL', 'Research mentoring', 'Career guidance'],
  }),
];

export const downloadableDocuments = [
  createRecord({
    id: 'doc-admissions-guide',
    slug: 'admissions-guide',
    title: 'Admissions Guide',
    excerpt: 'Placeholder for the admissions process guide and general enrollment reminders.',
    fileType: 'PDF',
    fileSize: '420 KB',
  }),
  createRecord({
    id: 'doc-school-calendar',
    slug: 'school-calendar',
    title: 'School Calendar',
    excerpt: 'Placeholder for the downloadable school year calendar.',
    fileType: 'PDF',
    fileSize: '380 KB',
  }),
  createRecord({
    id: 'doc-student-handbook',
    slug: 'student-handbook',
    title: 'Student Handbook',
    excerpt: 'Placeholder for the handbook covering school policies and important reminders.',
    fileType: 'PDF',
    fileSize: '960 KB',
  }),
];

export const admissionsContent = createRecord({
  id: 'admissions-main',
  slug: 'admissions-overview',
  title: 'Admissions',
  excerpt: 'A clear admissions process that guides families from inquiry to enrollment.',
  overview:
    'The admissions page is designed to answer common family questions quickly while remaining ready for future CMS-managed updates, downloadable forms, and application workflows.',
  steps: [
    {
      label: 'Send an inquiry',
      description: 'Reach out through the admissions contact points to request available levels, schedule details, and next steps.',
    },
    {
      label: 'Prepare requirements',
      description: 'Gather the required student records and identity documents for initial evaluation.',
    },
    {
      label: 'Attend the interview or assessment',
      description: 'Meet with the admissions team for readiness review, school fit discussion, and academic guidance.',
    },
    {
      label: 'Confirm enrollment',
      description: 'Receive final enrollment instructions, orientation information, and school-year reminders.',
    },
  ],
  requirements: [
    'Completed inquiry or application form',
    'Recent report card or learner progress record',
    'Birth certificate copy',
    'Two recent ID photos',
    'Good moral certificate if applicable',
    'Transfer credentials for incoming enrollees',
  ],
  calendar: [
    { date: 'May 10, 2026', label: 'Admissions briefings begin' },
    { date: 'May 24, 2026', label: 'Family interview schedule opens' },
    { date: 'June 7, 2026', label: 'Enrollment confirmation period starts' },
  ],
  inquiryCategories: ['General admissions', 'Preschool and elementary', 'Junior high', 'Senior high', 'Documents'],
});

export const newsPosts = [
  createRecord({
    id: 'news-capstone',
    slug: 'community-capstone-projects',
    title: 'Senior high research teams present community-focused capstone projects',
    excerpt: 'Student groups shared proposals focused on campus safety, local mobility, and family communication.',
    featured: true,
    category: 'Featured',
    body: [
      'Senior high learners presented capstone proposals that addressed practical community concerns, from safer campus movement to clearer information flow for families.',
      'Faculty mentors highlighted the students’ ability to combine research, communication, and collaborative problem-solving in ways that felt relevant to school life and the wider community.',
      'The presentations also served as a preview of how research and public speaking are developed within the school’s senior high experience.',
    ],
    tags: ['research', 'senior high', 'featured'],
    author: 'Communications Office',
    publishedAt: '2026-04-18T09:00:00+08:00',
  }),
  createRecord({
    id: 'news-enrollment',
    slug: 'admissions-inquiry-week',
    title: 'Admissions inquiry week opens for new preschool and elementary families',
    excerpt: 'Families may now schedule admissions briefings, request campus walkthroughs, and access school information packs.',
    category: 'Admissions',
    body: [
      'The school has opened a focused inquiry week for preschool and elementary families who want a more guided introduction to programs and admissions requirements.',
      'Parents may coordinate schedules with the admissions office and receive an overview of school culture, communication practices, and expected next steps.',
    ],
    tags: ['admissions', 'elementary', 'preschool'],
    author: 'Admissions Office',
    publishedAt: '2026-04-14T09:00:00+08:00',
  }),
  createRecord({
    id: 'news-outreach',
    slug: 'student-outreach-reading-program',
    title: 'Student leaders wrap up outreach drive with barangay reading program',
    excerpt: 'The student council and volunteers completed a week-long literacy support activity for partner community learners.',
    category: 'Student Life',
    body: [
      'Student leaders and faculty volunteers worked together to run a reading support activity with young learners in a partner barangay.',
      'The outreach reflected the school’s emphasis on service, responsibility, and confidence-building beyond the classroom.',
    ],
    tags: ['student life', 'outreach', 'leadership'],
    author: 'Student Affairs Office',
    publishedAt: '2026-04-11T09:00:00+08:00',
  }),
  createRecord({
    id: 'news-clubs',
    slug: 'club-showcase-month',
    title: 'Junior high clubs launch showcase month for arts, journalism, and STEM',
    excerpt: 'Student organizations are opening up project displays and club rooms to help younger learners explore future interests.',
    category: 'Campus Life',
    body: [
      'A month-long club showcase is introducing younger learners to student journalism, performing arts, robotics, and academic organizations.',
      'Each week highlights one cluster of student groups so visitors can better understand the range of non-classroom experiences available at school.',
    ],
    tags: ['clubs', 'junior high', 'campus life'],
    author: 'Student Affairs Office',
    publishedAt: '2026-04-06T09:00:00+08:00',
  }),
];

export const events = [
  createRecord({
    id: 'event-open-house',
    slug: 'family-open-house-2026',
    title: 'Family Open House 2026',
    excerpt: 'A campus welcome event for prospective families exploring programs, facilities, and admissions support.',
    featured: true,
    category: 'Admissions',
    tags: ['open house', 'admissions'],
    startDate: '2026-05-12T09:00:00+08:00',
    endDate: '2026-05-12T12:00:00+08:00',
    location: 'Main Campus',
    body: [
      'Prospective families are invited to an on-campus open house that introduces school programs, facilities, and student life opportunities.',
      'The event will include a short admissions briefing, a leadership message, and guided campus stops for key learning areas.',
    ],
  }),
  createRecord({
    id: 'event-org-fair',
    slug: 'clubs-and-organizations-fair',
    title: 'Clubs and Organizations Fair',
    excerpt: 'Student groups and faculty advisers will introduce activities, leadership opportunities, and sign-up details.',
    category: 'Student Life',
    tags: ['clubs', 'events'],
    startDate: '2026-06-04T08:30:00+08:00',
    endDate: '2026-06-04T15:00:00+08:00',
    location: 'Covered Court',
    body: [
      'The annual fair gives students and families an overview of organizations available across academic, creative, service, and leadership areas.',
      'Visitors can speak with student officers, faculty advisers, and event coordinators about expectations and schedules.',
    ],
  }),
  createRecord({
    id: 'event-family-day',
    slug: 'family-day-and-learning-showcase',
    title: 'Family Day and Learning Showcase',
    excerpt: 'A school-wide day for exhibits, performances, workshops, and parent partnership activities.',
    category: 'Community',
    tags: ['family day', 'showcase'],
    startDate: '2026-03-15T09:00:00+08:00',
    endDate: '2026-03-15T16:00:00+08:00',
    location: 'Main Campus',
    body: [
      'Family Day combines classroom showcases, student exhibits, and parent partnership sessions into a single campus event.',
      'The program highlights both academic work and the relationships that support learner growth throughout the year.',
    ],
    archived: true,
  }),
];

export const galleryItems = [
  createRecord({
    id: 'gallery-campus',
    slug: 'campus-welcome-morning',
    title: 'Campus welcome morning',
    excerpt: 'A bright morning scene showing students arriving on campus.',
    category: 'Campus',
    image: baseImage,
    images: buildGalleryImages('campus-welcome-morning', 'Campus welcome morning', [
      baseImage,
      academicsPlaceholder,
      baseImage,
      eventsPlaceholder,
      baseImage,
      academicsPlaceholder,
    ]),
  }),
  createRecord({
    id: 'gallery-reading',
    slug: 'reading-corner-session',
    title: 'Reading corner session',
    excerpt: 'Elementary learners in a guided reading and quiet study routine.',
    category: 'Student Life',
    image: academicsPlaceholder,
    images: buildGalleryImages('reading-corner-session', 'Reading corner session', [
      academicsPlaceholder,
      baseImage,
      academicsPlaceholder,
      eventsPlaceholder,
      academicsPlaceholder,
    ]),
  }),
  createRecord({
    id: 'gallery-stem',
    slug: 'stem-project-showcase',
    title: 'STEM project showcase',
    excerpt: 'Senior high students presenting prototypes and research displays.',
    category: 'Academics',
    image: academicsPlaceholder,
    images: buildGalleryImages('stem-project-showcase', 'STEM project showcase', [
      academicsPlaceholder,
      eventsPlaceholder,
      academicsPlaceholder,
      baseImage,
      academicsPlaceholder,
      eventsPlaceholder,
    ]),
  }),
  createRecord({
    id: 'gallery-performance',
    slug: 'performance-and-arts',
    title: 'Performance and arts',
    excerpt: 'A student performance during a school cultural activity.',
    category: 'Events',
    image: eventsPlaceholder,
    images: buildGalleryImages('performance-and-arts', 'Performance and arts', [
      eventsPlaceholder,
      baseImage,
      eventsPlaceholder,
      academicsPlaceholder,
      eventsPlaceholder,
    ]),
  }),
  createRecord({
    id: 'gallery-service',
    slug: 'service-outreach-day',
    title: 'Service outreach day',
    excerpt: 'Students and faculty volunteering during a community outreach activity.',
    category: 'Community',
    image: eventsPlaceholder,
    images: buildGalleryImages('service-outreach-day', 'Service outreach day', [
      eventsPlaceholder,
      baseImage,
      academicsPlaceholder,
      eventsPlaceholder,
      baseImage,
      academicsPlaceholder,
    ]),
  }),
];

export const pageRecords = [
  createRecord({
    id: 'page-home',
    slug: '/',
    title: 'Home',
    excerpt: 'A welcoming introduction to the school with program previews, updates, and trust-building sections.',
    seo: createSeo({
      title: `${siteSettings.schoolName} | Home`,
      description:
        'Explore admissions, academics, activities, news, and school updates through a modern public-facing website for School Portal.',
    }),
  }),
  createRecord({
    id: 'page-about',
    slug: '/who-we-are/about-us',
    title: 'About Us',
    excerpt: 'School overview, mission, vision, and leadership story.',
  }),
  createRecord({
    id: 'page-history',
    slug: '/who-we-are/history',
    title: 'Our History',
    excerpt: 'A concise school timeline showing growth and milestones.',
  }),
  createRecord({
    id: 'page-values',
    slug: '/who-we-are/core-values',
    title: 'Core Values',
    excerpt: 'The principles that shape school culture, classroom life, and leadership.',
  }),
  createRecord({
    id: 'page-hymn',
    slug: '/who-we-are/school-hymn',
    title: 'School Hymn',
    excerpt: 'School hymn copy with an optional audio placeholder for future CMS use.',
  }),
  createRecord({
    id: 'page-testimonials',
    slug: '/who-we-are/testimonials',
    title: 'Testimonials',
    excerpt: 'Parent, student, and alumni voices that highlight the school experience.',
  }),
  createRecord({
    id: 'page-faculty',
    slug: '/who-we-are/faculty',
    title: 'Faculty',
    excerpt: 'Meet school leaders, academic coordinators, and support staff.',
  }),
  createRecord({
    id: 'page-faq',
    slug: '/who-we-are/faqs',
    title: 'FAQs',
    excerpt: 'Frequently asked questions about admissions, visits, and school communication.',
  }),
  createRecord({
    id: 'page-gallery',
    slug: '/activities/gallery',
    title: 'Gallery',
    excerpt: 'Campus, academics, student life, and event visuals organized by category.',
  }),
  createRecord({
    id: 'page-events',
    slug: '/activities/events',
    title: 'Events',
    excerpt: 'Upcoming and past event listings with filters, featured items, and archive support.',
  }),
  createRecord({
    id: 'page-academics',
    slug: '/academics',
    title: 'Academics',
    excerpt: 'Program overviews from preschool to senior high school.',
  }),
  createRecord({
    id: 'page-admissions',
    slug: '/admissions',
    title: 'Admissions',
    excerpt: 'Admissions overview, requirements, inquiry form, and calendar.',
  }),
  createRecord({
    id: 'page-news',
    slug: '/news',
    title: 'News',
    excerpt: 'Featured articles, school updates, and archive-ready news listings.',
  }),
  createRecord({
    id: 'page-contact',
    slug: '/contact-us',
    title: 'Contact Us',
    excerpt: 'Contact details, inquiry form, OpenStreetMap embed, and directions.',
  }),
  createRecord({
    id: 'page-privacy',
    slug: '/privacy-policy',
    title: 'Privacy Policy',
    excerpt: 'A public placeholder for privacy and information handling content.',
  }),
  createRecord({
    id: 'page-terms',
    slug: '/terms',
    title: 'Terms',
    excerpt: 'A public placeholder for website terms and basic usage guidance.',
  }),
  createRecord({
    id: 'page-maintenance',
    slug: '/maintenance',
    title: 'Maintenance',
    excerpt: 'A maintenance-mode page for future operational use.',
  }),
  createRecord({
    id: 'page-announcement',
    slug: '/announcements/featured',
    title: 'Announcement Banner',
    excerpt: 'A future-ready announcement page for campaigns or urgent notices.',
  }),
];

export const hymn = {
  title: 'School Hymn',
  body: [
    'With hearts made steady, minds awake, we walk the path of truth.',
    'In halls of learning, hope will rise and shape the work of youth.',
    'With faith in effort, hand in hand, we grow in grace and light.',
    'Our school, we lift your name with courage, joy, and might.',
  ],
  audioPlaceholder: {
    title: 'Audio version coming soon',
    description: 'This section is ready for a future audio upload or embedded media field.',
  },
};

export const historyTimeline = [
  {
    year: '2010',
    title: 'School foundation',
    description: 'School Portal began with a small but committed learning community centered on foundational education and family partnership.',
  },
  {
    year: '2014',
    title: 'Academic expansion',
    description: 'The school expanded its elementary programs and invested in stronger learning support structures for a growing student body.',
  },
  {
    year: '2018',
    title: 'Junior and senior high growth',
    description: 'Program offerings widened to support older learners with strand-based planning, clubs, and research-oriented activities.',
  },
  {
    year: '2026',
    title: 'Public website renewal',
    description: 'The school introduced a more modern, CMS-ready public website focused on discoverability, trust, and future content management.',
  },
];

export const coreValues = [
  {
    title: 'Excellence with humility',
    description: 'We pursue high standards while staying teachable, respectful, and grounded.',
  },
  {
    title: 'Integrity in action',
    description: 'We choose what is honest, responsible, and fair in both academic and community life.',
  },
  {
    title: 'Service and responsibility',
    description: 'We form learners who understand that growth should also benefit others.',
  },
  {
    title: 'Growth through partnership',
    description: 'We believe students thrive when school, home, and community work together with clarity and trust.',
  },
];

export const leadershipMessage = {
  heading: 'Leadership Message',
  body:
    'We want every family to feel that school information is clear, welcoming, and easy to trust. This website is designed as a front door for learning about who we are, what we offer, and how we serve students with purpose.',
  author: 'Dr. Elena Navarro, Principal',
};

export const navigationItems = [
  { label: 'Home', to: '/', children: [] },
  {
    label: 'Who We Are',
    to: '/who-we-are/about-us',
    children: [
      { label: 'About Us', to: '/who-we-are/about-us' },
      { label: 'Our History', to: '/who-we-are/history' },
      { label: 'Core Values', to: '/who-we-are/core-values' },
      { label: 'School Hymn', to: '/who-we-are/school-hymn' },
      { label: 'Testimonials', to: '/who-we-are/testimonials' },
      { label: 'Faculty', to: '/who-we-are/faculty' },
      { label: 'FAQs', to: '/who-we-are/faqs' },
    ],
  },
  {
    label: 'Activities',
    to: '/activities/gallery',
    children: [
      { label: 'Gallery', to: '/activities/gallery' },
      { label: 'Events', to: '/activities/events' },
    ],
  },
  { label: 'Academics', to: '/academics', children: [] },
  { label: 'Admissions', to: '/admissions', children: [] },
  { label: 'News', to: '/news', children: [] },
  { label: 'Contact Us', to: '/contact-us', children: [] },
];

export const footerNavigation = [
  {
    title: 'Explore',
    items: navigationItems.flatMap((item) =>
      item.children.length ? item.children.slice(0, 2) : [{ label: item.label, to: item.to }],
    ),
  },
  {
    title: 'Resources',
    items: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Maintenance Page', to: '/maintenance' },
      { label: 'Announcement Page', to: '/announcements/featured' },
    ],
  },
];

export const homeContent = {
  hero: {
    eyebrow: 'A clear and welcoming school website',
    title: `${siteSettings.schoolName} makes academics, admissions, and campus updates easy for families to explore.`,
    description:
      'Browse programs, school news, student activities, and admissions guidance through a public website designed to feel organized, approachable, and practical.',
    actions: [
      { label: 'Explore Academics', to: '/academics', variant: 'primary' },
      { label: 'Start Admissions', to: '/admissions', variant: 'secondary' },
    ],
    highlights: ['Admissions made clearer', 'Responsive on every device', 'Structured for future CMS content'],
  },
  intro: {
    title: 'A welcoming public website with better flow for real school users.',
    description:
      'The homepage is designed to help families understand what matters first: who the school is, what it offers, what is happening on campus, and how to get in touch.',
  },
  stats: [
    { value: '14:1', label: 'average learner support ratio' },
    { value: '4', label: 'academic levels served' },
    { value: '30+', label: 'student events each year' },
    { value: '100%', label: 'mobile-friendly public experience' },
  ],
};

export const contactDetails = {
  inquiryCategories: [
    'General inquiry',
    'Admissions',
    'Academic programs',
    'Events and partnerships',
    'Campus visits',
  ],
  cards: [
    {
      title: 'Main Office',
      value: siteSettings.contactInfo.phone,
      description: 'Call during office hours for general school concerns.',
    },
    {
      title: 'Admissions',
      value: siteSettings.contactInfo.email,
      description: 'Reach out for enrollment steps, requirements, and school tours.',
    },
    {
      title: 'Campus Address',
      value: siteSettings.contactInfo.address,
      description: 'Visit the campus by appointment or scheduled school event.',
    },
    {
      title: 'Office Hours',
      value: siteSettings.contactInfo.officeHours,
      description: 'Public-facing office support is available on regular school days.',
    },
  ],
};

export const aboutContent = {
  overview:
    'School Portal is a private academic community focused on steady learning growth, clear communication, and values-centered school culture.',
  mission:
    'We form capable, compassionate, and responsible learners through meaningful instruction, family partnership, and a safe, organized school culture.',
  vision:
    'We envision a school where every learner grows with confidence, curiosity, discipline, and a clear sense of purpose.',
  leadership:
    'School leadership prioritizes clarity, warm coordination with families, and a campus environment that helps students feel guided rather than overwhelmed.',
};

export const privacyPolicy = {
  title: 'Privacy Policy',
  sections: [
    {
      heading: 'Information handling',
      body: 'This placeholder page is ready for future CMS-managed privacy content covering contact forms, analytics, and information requests.',
    },
    {
      heading: 'Website inquiries',
      body: 'Families may use website forms to request school information. Final handling rules can later be managed through a backend-connected policy page.',
    },
  ],
};

export const termsContent = {
  title: 'Terms of Use',
  sections: [
    {
      heading: 'Website use',
      body: 'This public website is intended to provide school information, admissions guidance, and contact channels for visitors and families.',
    },
    {
      heading: 'Future updates',
      body: 'This page is structured to become CMS-managed later as school policy language and public guidance evolve.',
    },
  ],
};

export const findRecordBySlug = (collection, slug) =>
  collection.find((item) => item.slug === slug && item.publishStatus === 'published');

export const filterPublished = (collection) =>
  collection
    .filter((item) => item.publishStatus === 'published' && !item.archived)
    .sort((a, b) => a.sortOrder - b.sortOrder || new Date(b.publishedAt) - new Date(a.publishedAt));

export const getUpcomingEvents = () =>
  filterPublished(events).filter((event) => new Date(event.startDate) >= new Date('2026-04-20T00:00:00+08:00'));

export const getPastEvents = () =>
  events
    .filter((event) => event.publishStatus === 'published' && new Date(event.startDate) < new Date('2026-04-20T00:00:00+08:00'))
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
