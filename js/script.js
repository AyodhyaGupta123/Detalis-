const peopleData = [
  {
    id: 1,
    name: "Akanksha",
    place: "hopal, India",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    about: "UI/UX designer with a passion for creating intuitive interfaces.",
    skills: [
      "UI/UX",
      "Figma",
      "Sketch",
      "Adobe XD",
      "Prototyping",
      "Wireframing",
      "User Research",
      "User Testing",
    ],
  },
  {
    id: 2,
    name: "Ayodhya Gupta",
    place: "U.P, India",
    image: "image.jpg",
    about: "A passionate developer with a love for UI/UX design.",
    skills: ["UI/UX", "JavaScript", "React", "Node.js", "Figma", "CSS", "HTML"],
  },
  {
    id: 3,
    name: "Shubham Kumar",
    place: "Bihar, India",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    about: "DevOps engineer with expertise in cloud infrastructure.",
    skills: ["HTML", "CSS", "JavaScript", "jquary", "Python", "Java"],
  },
  {
    id: 4,
    name: "Priya Singh",
    place: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    about: "A creative designer with a knack for problem-solving.",
    skills: [
      "Graphic Design",
      "Illustrator",
      "Photoshop",
      "HTML",
      "CSS",
      "InDesign",
      "Typography",
      "Branding",
      "Web Design",
    ],
  },
  {
    id: 5,
    name: "Payal",
    place: "Beijing, China",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    about: "Front-end developer with a keen eye for detail.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
      "Sass",
      "Webpack",
    ],
  },
  {
    id: 6,
    name: "Minhaz",
    place: "Chennai, India",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    about: "Backend developer with experience in Node.js and MongoDB.",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "AWS",
      "GraphQL",
      "SQL",
      "Docker",
    ],
  },
  {
    id: 7,
    name: "Ayushi",
    place: "Rome, Italy",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    about: "Data scientist with a background in machine learning.",
    skills: [
      "Python",
      "R",
      "TensorFlow",
      "Keras",
      "SQL",
      "Pandas",
      "NumPy",
      "Data Visualization",
    ],
  },
  {
    id: 8,
    name: "Diksha",
    place: "Hyderabad, India",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    about: "Full-stack developer with a focus on responsive design.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "Redux",
      "TypeScript",
      "Next.js",
    ],
  },
  {
    id: 9,
    name: "Ankur",
    place: "Madrid, Spain",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    about:
      "Mobile app developer with experience in cross-platform development.",
    skills: [
      "React Native",
      "Flutter",
      "Java",
      "Swift",
      "Kotlin",
      "Dart",
      "Firebase",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: 10,
    name: "Vaibhav",
    place: "Delhi, India",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    about: "Front-end developer with a flair for animations.",
    skills: [
      "JavaScript",
      "CSS",
      "GSAP",
      "React",
      "Next.js",
      "HTML",
      "Sass",
      "Redux",
    ],
  },
  {
    id: 11,
    name: "Vishal",
    place: "Tokyo, Japan",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    about: "Game developer passionate about creating immersive experiences.",
    skills: [
      "Unity",
      "C#",
      "Blender",
      "Unreal Engine",
      "3D Modeling",
      "Animation",
      "Shader Programming",
    ],
  },
  {
    id: 12,
    name: "Sona Singh",
    place: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    about: "Software engineer with a focus on backend technologies.",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Docker",
      "SQL",
      "Kubernetes",
      "AWS",
      "Python",
    ],
  },
];

var clutter = "";

peopleData.forEach(function (elem) {
  clutter += `      <div class="card">
            <div class="header"><i class="ri-more-2-fill"></i></div>
            <img src=${elem.image} alt="">
            <div class="info">
                <h1>${elem.name}</h1>
                <h3>${elem.place}</h3>
                <div class="skills">
                    <h4>${elem.skills[0]}</h4>
                    <h4>${elem.skills[1]}</h4>
                    <h4>${elem.skills[2]}</h4>
                    <h5>${elem.skills.length-3}</h5>
                </div>
                <p>${elem.about}</p>
            </div>
            <button>View Profile</button>
        </div>
 `;
});

var main = document.querySelector("#main").innerHTML = clutter
