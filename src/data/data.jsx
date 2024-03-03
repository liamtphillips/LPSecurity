import { GoShield } from "react-icons/go";
import { MdElectricBolt } from "react-icons/md"
import { MdOutlineReportProblem } from "react-icons/md";
import { FaBacteria } from "react-icons/fa";
import { HiMiniClipboardDocumentCheck, HiMiniClipboardDocumentList } from "react-icons/hi2";
import mockup from '../assets/mockup4.png';
import ipad from '../assets/ipad.png';
import teamMember1 from '../assets/teamMember1.jpg';
import teamMember2 from '../assets/teamMember2.jpg';
import teamMember3 from '../assets/teamMember3.jpg';
import teamMember4 from '../assets/teamMember4.jpg';
import teamMember5 from '../assets/teamMember5.jpg';

export const cardsData = [
  {
    title: 'Unauthorized Access',
    description: 'Without cybersecurity measures, businesses are vulnerable to unauthorized access to sensitive data, systems, and networks.',
    icon: <GoShield />,
    iconColor: 'indigo',
  },
  {
    title: 'Malware Infections',
    description: 'Cybersecurity safeguards against malware which can cause damage to systems and disrupt operations',
    icon: <FaBacteria />,
    iconColor: 'indigo',
  },
  {
    title: 'Data Breaches',
    description: 'Lack of security exposes businesses to the risk of data breaches, where confidential data is accessed, stolen, or compromised.',
    icon: <MdElectricBolt />,
    iconColor: 'indigo',
  },
  {
    title: 'Disruption of Operations',
    description: 'Cyberattacks, such as distributed denial of service (DDoS) attacks, can disrupt business operations, leading to downtime and financial losses.',
    icon: <MdOutlineReportProblem />,
    iconColor: 'indigo',
  },
];

export const sections = [
  {
    icon: <HiMiniClipboardDocumentCheck />,
    title: 'How will you help my business?',
    lineOne:
      "Our intuitive and robust dashboard provides real-time insights into your network security, vulnerability assessments, and threat landscapes. With our product, you gain a comprehensive overview of your cybersecurity posture, enabling proactive identification and mitigation of potential risks.",
    lineTwo:
      "Our software incorporates all of the necessary security essentials into a user friendly dashboard for a fraction of the price of our competitors.",
    lineThree:
      "Our 24/7 support team complied with industry experts are always ready to help with any issues you may encounter.",
  },
  {
    icon: <HiMiniClipboardDocumentList />,
    title: 'What does the dashboard do?',
    lineOne:
      "Different security solutions may not seamlessly integrate with each other, leading to interoperability issues. This lack of cohesion can result in a fragmented security infrastructure, making it challenging to manage and monitor effectively.",
    lineTwo:
      "Our dashboard solves this problem by embedding all the essentials into one place. We make your cyber security experience a stress free one.",
    lineThree:
      "Fusing contractual data with deep security understanding unlocks immediate financial and inventory insights, empoering C-level strategy.",
  },
  {
    icon: <HiMiniClipboardDocumentCheck />,
    title: 'Is it updated regularly?',
    lineOne:
      "Our product is constantly kept up to date with industry standards,",
    lineTwo:
      "LTSecurity solves this problem by embedding into your procurement process to continually track security-related contracts. Our advanced search and analytics engine indexes contracts, providing a clear view of what products your enterprise owns, when they expire, and how much they cost.",
    lineThree:
      "Fusing contractual data with deep security understanding unlocks immediate financial and inventory insights, empoering C-level strategy.",
  },
];

export const deviceData = [
  {
    title: 'Security on the go.',
    text: 'Fit all of your cyber security essentials in your pocket, so you never miss a beat while on the go.',
    deviceImage: mockup,
  },
  {
    title: 'Receive updates constantly.',
    text: 'A constant stream of information from your business available 24/7.',
    deviceImage: ipad,
  },
];

export const teamMembersData = [
  {
    name: 'Jason Jackson',
    role: 'CEO & Co-Founder',
    experience:
      'Over a decade of cyber security experience across government and enterprise. Specialized in security value realization, helping enterprise clients architect, deploy and operationalize security products.',
    image: teamMember1,
  },
  {
    name: 'Jess Wilson',
    role: 'Project Lead & Co-Founder',
    experience:
      'The visionary force behind our mission! Leading the charge in steering our projects to success. With an unparalleled blend of strategic insight, leadership finesse, and a knack for innovation. ',
    image: teamMember2,
  },
  {
    name: 'Ray Hughes',
    role: 'Industry Advisor',
    experience:
      'An expert in security value realization with a focus on guiding enterprise clients through the strategic process of architecting, deploying, and operationalizing security products.',
    image: teamMember3,
  },
  {
    name: 'Mike Darch',
    role: 'Cyber Security Specialist',
    experience:
      'Armed with expertise in risk assessment, encryption, and a knack for sniffing out vulnerabilities. Mike is our go-to hero for fortifying our digital frontiers, defending our digital fortress with skill.',
    image: teamMember4,
  },
  {
    name: 'Graham Cork',
    role: 'Product Advisor',
    experience:
      "The wizard of innovation and user experience! This maestro is the guiding light behind our product. From ideation to implementation, they're the compass steering our product journey.",
    image: teamMember5,
  },
];
