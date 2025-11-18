export type NavigationItem = {
  label: string;
  href: string | null;
  items?: NavigationSubItem[];
};

export type NavigationSubItem = {
  label: string;
  href: string;
  description?: string;
};

export const NAVIGATION: NavigationItem[] = [
  {
    label: 'Students',
    href: null,
    items: [
      {
        label: 'Leadership Board',
        href: '/students/leadership-board',
        description: 'Join the SheTech Student Board and help shape programs',
      },
      {
        label: 'Explorer Day',
        href: '/students/explorer-day',
        description: 'Hands-on tech conference for high school girls',
      },
      {
        label: 'Summer Internship',
        href: '/students/summer-internship',
        description: 'Get an inside look at real tech companies',
      },
      {
        label: 'Media Internship',
        href: '/students/media-internship',
        description: 'Hands-on journalism experience in tech',
      },
      {
        label: 'Thanksgiving Point Internship',
        href: '/students/thanksgiving-point-internship',
        description: 'Agriculture technology and STEM education',
      },
      {
        label: 'Clubs',
        href: '/students/clubs',
        description: 'Start or join a SheTech club at your school',
      },
      {
        label: 'Scholarships',
        href: '/students/scholarships',
        description: 'Financial support for your education',
      },
      {
        label: 'Entrepreneur Apprenticeship',
        href: '/students/entrepreneur-apprenticeship',
        description: 'Learn entrepreneurship from tech leaders',
      },
      {
        label: 'WTC College Interns',
        href: '/students/wtc-college-interns',
        description: 'College internship opportunities',
      },
    ],
  },
  {
    label: 'Teachers',
    href: null,
    items: [
      {
        label: 'Register Your Students',
        href: '/teachers/register-your-students',
        description: 'Sign up your students for SheTech programs',
      },
      {
        label: 'Why Participate',
        href: '/teachers/why-participate',
        description: 'Learn about the benefits of SheTech',
      },
      {
        label: 'Sign Up for Information',
        href: '/sign-up-for-information',
        description: 'Receive updates on events and opportunities',
      },
    ],
  },
  {
    label: 'Companies',
    href: null,
    items: [
      {
        label: 'Sponsor',
        href: '/companies/sponsor',
        description: 'Support SheTech programs and events',
      },
      {
        label: 'Mentor',
        href: '/companies/mentor',
        description: 'Guide and inspire the next generation',
      },
      {
        label: 'Volunteer',
        href: '/companies/volunteer',
        description: 'Contribute your time and expertise',
      },
      {
        label: 'Host Internship',
        href: '/companies/host-internship',
        description: 'Provide real-world experience to students',
      },
    ],
  },
  {
    label: 'Media Hub',
    href: null,
    items: [
      {
        label: 'TechBuzz Articles',
        href: '/media-hub/techbuzz-articles',
        description: 'Latest articles about women in tech',
      },
      {
        label: 'Instagram Feed',
        href: '/media-hub/instagram-feed',
        description: 'Follow our journey on Instagram',
      },
      {
        label: 'Student Demos',
        href: '/media-hub/student-demos',
        description: 'Watch student project demonstrations',
      },
      {
        label: 'Tech Workshops',
        href: '/media-hub/tech-workshops',
        description: 'Recorded workshops and tutorials',
      },
    ],
  },
  {
    label: 'Chapters',
    href: null,
    items: [
      {
        label: 'Host SheTech Day',
        href: '/chapters/host-shetech-day',
        description: 'Bring SheTech to your community',
      },
      {
        label: 'Arizona',
        href: '/chapters/arizona',
        description: 'SheTech programs in Arizona',
      },
      {
        label: 'Idaho',
        href: '/chapters/idaho',
        description: 'SheTech programs in Idaho',
      },
      {
        label: 'Colorado',
        href: '/chapters/colorado',
        description: 'SheTech programs in Colorado',
      },
    ],
  },
  {
    label: 'About',
    href: null,
    items: [
      {
        label: 'Sponsors',
        href: '/about/sponsors',
        description: 'Our valued partners and supporters',
      },
      {
        label: 'Board Members',
        href: '/about/board-members',
        description: 'Meet our leadership team',
      },
      {
        label: 'About Women Tech Council',
        href: '/about/about-women-tech-council',
        description: 'Our mission and history',
      },
      {
        label: 'Contact Us',
        href: '/about/contact-us',
        description: 'Get in touch with us',
      },
    ],
  },
];

