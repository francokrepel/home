// Navigation Bar SECTION
const navBar = {
  show: true,
};  

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Franco",
  middleName: "A.",
  lastName: "Krepel",
  message: "Passionate about technology and its power to change the world.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/francokrepel",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/francokrepel",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/francokrepel/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/franco-krepel-a241b21b7/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/franco.jpeg"), // Update this with your image or leave it as is for now
  imageSize: 375,
  message:
    "My name is Franco A. Krepel. I'm a student at the University of Florida Herbert Wertheim College of Engineering pursuing a Bachelor of Science in Computer Science with a minor in Economics. I'm passionate about technology, bioinformatics, and software engineering. I've had diverse experiences ranging from software engineering internships to computational genomics research.",
  resume: "https://drive.google.com/file/d/1p3rGLj11getIsPwU9zgl9ziV0L558fvi/view?usp=sharing", // Update this with a link to your resume
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "francokrepel",
  reposLength: 0,
  specificRepos: ["DBS", "Schedule-a-Doc", "Compiler", "student-investment-club", "COVID-Tracer"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Internship in South Africa",
  message:
    "During my time in Cape Town, South Africa, I embarked on a transformative journey that expanded both my professional and personal horizons. As a Full-Stack Software Engineer Intern with Youth in Transformation, I was immersed in a dynamic tech environment that challenged me to apply my skills in real-world scenarios. Beyond the technical aspects, South Africa offered a rich tapestry of cultures, landscapes, and histories. From the majestic Table Mountain to the vibrant streets of Bo-Kaap, every experience deepened my appreciation for the country's diversity. Engaging with locals, I gained insights into the nation's complex past and its aspirations for the future. This experience in South Africa was not just about honing my technical skills; it was a holistic journey that left an indelible mark on my worldview.",
  images: [
    {
      img: require('../assets/img/2.JPG'),
    },
    { 
      img: require('../assets/img/3.jpg'), // Update with your image or a relevant image
      // label: "Warrington Book Club", 
      // paragraph: "As the Vice President of Technological Development since January 2022, I manage a weekly newsletter for 115 members, providing deadlines, reminders, and career opportunities. I also co-direct the “Research Committee”, crafting presentations for members from compiled information from book chapters." 
    },
    {
      img: require('../assets/img/7.JPG'),
    },
    {
      img: require('../assets/img/6.jpg'),
    },
    {
      img: require('../assets/img/5.jpg'),
    },
    {
      img: require('../assets/img/4.jpg'),
    },

    // { 
    //   img: require("../editable-stuff/hashirshoaeb.png"), // Update with your image or a relevant image
    //   // label: "Student Investment Club", 
    //   // paragraph: "Serving as the Programming and Website Director since August 2021, I speak to over 100 members to help them understand the finance industry and UF’s opportunities to break into the industry. I've also been instrumental in rebranding the organization by building a new website using Next.js with Tailwind and enhancing visuals with Photoshop." 
    // },
    // { 
    //   img: require("../editable-stuff/hashirshoaeb.png"), // Update with your image or a relevant image
    //   // label: "Society of Hispanic Professional Engineers", 
    //   // paragraph: "As the Marketing Cabinet - Apparel Director from January to May 2021, I raised $790 with custom Photoshop-designed t-shirts for an event, reinvesting the proceeds into the organization for future events. I also optimized t-shirt inventory management using a normal distribution model, resulting in 26% less remaining inventory." 
    // },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C++", value: 90 },
    { name: "Python", value: 85 },
    { name: "R", value: 80 },
    { name: "TypeScript", value: 75 },
    { name: "HTML", value: 70 },
    { name: "Java", value: 85 },
    { name: "Adobe Photoshop", value: 70 },
    { name: "Excel", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always open to new opportunities and collaborations. If you have any questions or just want to say hi, please feel free to email me at",
  email: "francokrepel@ufl.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Computational Genomics Research Assistant',
      company: 'The Graim Lab',
      companylogo: require('../assets/img/uf.png'), // Update with a relevant logo or image
      date: 'April 2023 - Present',
      location: 'Gainesville, FL',
      description: 'Crafted an R script to transform Salmon RNA-seq data into count file, enabling its use for downstream statistical processing. Used bioinformatics tools and algorithms (GSEA) to map extracted RNA sequences to biological processes and pathways. Translated complex bioinformatics findings into accessible insights, aiding comprehension among non-expert audiences.',
    },
    {
      role: 'Equity Research Intern',
      company: 'AR Partners',
      companylogo: require('../assets/img/latin_securities.jpg'), // Update with a relevant logo or image for AR Partners
      date: 'May - June 2022',
      location: 'Buenos Aires, Argentina',
      description: 'Automated market data collection using Python, streamlining daily report generation in Excel and Gmail for employees. Analyzed 5 years of financial statement data to model varying company performances and trends using Excel. Utilized Photoshop to customize data visualizations for client presentations, improving data comprehension and engagement.',
    },
    {
      role: 'Full-Stack Software Engineer Intern',
      company: 'Youth in Transformation',
      companylogo: require('../assets/img/yit.png'), // Update with a relevant logo or image
      date: 'June – July 2023',
      location: 'Cape Town, South Africa',
      description: '', // Add any specific tasks or achievements here
    }
    // ... Add other experiences as needed
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
