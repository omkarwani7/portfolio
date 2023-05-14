import {
    mobile,
    backend,
    web,
    javascript,
    androidlogo,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    logo,
    justchat,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Spiring Boot Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title:"Android Developer",
      icon:mobile,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"android",
      icon: androidlogo,
    },
    {
      name:"java",
      icon: java,
    },
    {
      name:"python",
      icon: python,
    },
  ];
  


  const experiences = [
    {
      title: "Cast Your Vote - A digital voting platform",
      type: "Web",
      icon: web,
      iconBg: "#383E56",
      date: "Dec 22 - Ongoing",
      points: [
        "Developed a fully responsive web-based voting application that enabled users to cast votes online and declare results in no time; reduced the need for manpower and expenditure by more than 50%.",
         "Technology: HTML/CSS, JavaScript, MySQL, Python Django",
        " Team Project: 4 members",
        "Role: Backend Development",
      ],
    },
    {
      title: "Just Chat",
      type: "Android",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Mar 2023",
      points: [
        " It’s a chatting application with real time messaging service, with secure login and cloud storage integration.",
        "Technology: Java, Firebase",
        "Solo Project",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Cast Your Vote ",
      description:
        "Developed a fully responsive web-based voting application that enabled users to cast votes online and declare results in no time.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "Cast_your_Vote.png",
      source_code_link: "https://github.com/",
    },
    {
      name: "Just Chat",
      description:
        "It’s a chatting application with real time messaging service, with secure login and cloud storage integration.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: justchat,
      source_code_link: "https://github.com/",
    }
  ];
  
  export { services, technologies, experiences, projects};