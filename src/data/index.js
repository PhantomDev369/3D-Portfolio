import { skills, yt, oscs } from '../assets';

export const navLinks = [
  {
    id: 'hero',
    title: 'Hero',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const experiences = [
  {
    title: 'UI/UX Designer',
    company_name: 'Self Employed',
    date: '2024 - Present',
    details: [
      'As a passionate UI/UX Designer, I focus on creating visually appealing and user-friendly interfaces that enhance digital experiences. My design philosophy revolves around usability, accessibility, and aesthetics, ensuring that every product not only looks great but also functions seamlessly.',
      '<br>',
      'Every design I create aims to bridge the gap between functionality and creativity, delivering meaningful interactions that leave a lasting impression.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Self Employed',
    date: '2023 - Present',
    details: [
      'Building Scalable & Modern Web Solutions',
      'I specialize in developing high-performance web applications with clean, efficient code.',
      '<ol><li>✅ <strong>Frontend Development</strong> – Creating interactive, responsive interfaces.</li> <li>✅ <strong>Backend Development</strong> – Little bit.</li> <li>✅ <strong>Database Management</strong> – Null.</li> <li>✅ <strong>API Integration</strong> – Connecting systems seamlessly.</li> </ol>',
      'I turn ideas into functional, user-friendly web experiences.',
    ],
  },
  {
    title: 'Editor',
    company_name: 'NULL',
    date: 'null - Present',
    details: ['NULL'],
  },
];

const portfolio = [
  {
    name: 'My Github Profile',
    description: 'A GitHub repo with over 0 stars containing nothing',
    image: oscs,
  },
  {
    name: 'YouTube Status',
    description:
      'As you can see i have 0 subs and 0 videos. i dont have to explain this',
    image: yt,
  },
  {
    name: 'Line Where I Specialized',
    description:
      'I have a month experience of React and Three.js and little bit NEXT',
    image: skills,
  },
];

export { experiences, portfolio };
