import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    nblik,
    earlysolutions,
    prepbytes,
    starbucks,
    tesla,
    rgas,
    skepsis,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "C++ Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Front-end Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Project Management Intern",
      company_name: "Robeen Ghose and associates PVT. LTD.",
      icon: rgas,
      iconBg: "#383E56",
      date: "February 2021 - May 2021",
      points: [
        "Used excellent time management and project management skills to successfully oversee and manage projects from conception to completion.",
        "Expanded the company's reach to various organizations within the country and providing reports on the assigned tasks.",
      ],
    },
    {
      title: "Campus Business Manager",
      company_name: "Prepbytes",
      icon: prepbytes,
      iconBg: "#E6DEDD",
      date: "April 2021 - August 2022",
      points: [
        "Introducing and spreading the word of Prepbytes in and among different universities.",
        "Widening the community by attracting members through events and seminars under the supervision of Prepbytes.",
        "Making it one of the best technical community in the university.",
      ],
    },
    {
      title: "Core Team Member",
      company_name: "Skepsis",
      icon: skepsis,
      iconBg: "#383E56",
      date: "August 2021 - Present",
      points: [
        "Organizing and maintaining coding contests, hackathons and tech related events in the university.",
        "Making it one of the best technical club under the techno group.",
      ],
    },
    {
      title: "Subject Matter Expert (Mathematics)",
      company_name: "Early Solutions",
      icon: earlysolutions,
      iconBg: "#E6DEDD",
      date: "August 2022 - January 2023",
      points: [
        "Worked as a SME for Mathematics in a team with other experts",
        "Providing expert verified answers and reaching the company's everyday target for answering the required number of questions",
      ],
    },
    {
      title: "Recruitment Intership",
      company_name: "Nblik",
      icon: nblik,
      iconBg: "#E6DEDD",
      date: "March 2023 - April 2023",
      points: [
        "Onboarding users on the Nblik application.",
        "Analyzing reviews of users and sharing ideas on the improvement of the application.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Soft Skill Analysis Game",
      description:
        "Based on your choices and time taken to complete the level, the game predicts at most of 5 soft skills that you may have. Comes with admin/user login/logout features",
      tags: [
        {
          name: "py-game",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tkinter",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/deorc-unity/escaperoom",
    },
  ];
  
  export { services, technologies, experiences, projects };