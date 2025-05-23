export const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Angular library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "URL Shortner",
    des: "Built a URL shortening platform using MongoDB, Express.js, React.js, and Node.js, featuring custom short links, analytics tracking, and secure redirections. 🔗",
    img: "/url-shortener.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodb.png",
      "/nodejs-3.svg",
    ],
    link: "https://url-shortener-frontend-7k6s.onrender.com/",
  },
  {
    id: 2,
    title: "File Drive",
    des: "Developed a cloud-based file storage system using Next.js, Node.js, and Convex, enabling secure file uploads, real-time access, and efficient storage management. 📂",
    img: "/file-drive.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nodejs-3.svg", "/c.svg"],
    link: "https://github.com/yagitgadhok/file-drive?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "Ecommerce",
    des: "Built a full-stack e-commerce platform with secure authentication and optimized performance using MongoDB, Express.js, React.js, and Node.js. Deployed on Render with CI/CD pipelines. 🛒",
    img: "/ss1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodb.png",
      "/expressjs-ar21~bgwhite.svg",
    ],
    link: "https://github.com/yagitgadhok/ecommerce",
  },
  {
    id: 4,
    title: "Activity Tracker",
    des: "Built a full-featured MERN stack Activity Tracker with role-based access, task management, real-time notifications, and admin controls.📜",
    img: "/manager_dashboard.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/nodejs-3.svg",
      "/mongodb.png",
    ],
    link: "https://github.com/yagitgadhok/activity_tracker",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Tata Consultancy Services",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern - TCS",
    desc: "Enhanced emotion analysis accuracy and performance by 20% through ML optimization, while improving collaboration and delivery speed via Git workflows and stakeholder coordination.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern - DRDO",
    desc: "Analyzed geospatial data with Quantum GIS (QGIS) to highlight low-efficiency regions, contributing to a 25% boost in project effectiveness.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer - Sopra Steria",
    desc: "Created and maintained a high-performance Angular and Node.js web application, increasing user activity by 40% and reducing load times by 25%.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Senior Software Engineer - Sopra Steria",
    desc: "Spearheaded and Created accessible, cross-browser UI components compliant with WCAG standards and documented using Storybook, reducing onboarding time by 40% and development time by 25%.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/yagitgadhok",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/yagitgadhok/",
  },
];
