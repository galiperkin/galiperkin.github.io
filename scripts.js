// scripts.js

const projects=[
    {
      "name": "Moseiki: the UK based WEB3 social media",
      "details": [
        "Flutter frontend of the WEB3 social media app was implemented.",
        "WEB3 integration was conducted with backend."
      ],
      "logo": "moseiki.png"
    },
    {
      "name": "JConnect: Tinder like business social media",
      "details": [
        "This project aims to help professionals to match and make business. They can be matched based on their interests, roles and location.",
        "Instant messaging is implemented on Flutter with using streaming and websocket on Laravel backend."
      ],
      "logo": "jconnect.png"
    },

    {
      "name": "2Solar: Belgium based solar panel systems installment startup.",
      "details": [
        "Digital transformation of the solar panel system installment process starting from the customers’ target buildings’ inspections to post installment delivery.",
        "Utilized GoogleMaps and MapTiler for map manipulation to place solar panels on top of roofs."
      ],
      "logo": "2solar.png"
    },
    {
      "name": "Europe Aid Foundation: Netherlands based charity",
      "details": [
        "Digital transformation of the charity management and developed the mobile application.",
        "Donators can easily make donation via the mobile application.",
        "Molly payment system is integrated for transactions.",
        "Developed PDF creation and manipulation alongside with Excel import-export features to easily handle donation data.",
        "Integrated the Exact Account Management System"
      ],
      "logo": "aidef.png"
    },
    {
      "name": "Doculoud: Germany based startup like Adobe scan",
      "details": [
        "Providing document management system via mobile application.",
        "Implemented customers’ scanning feature requests with using native Swift and Kotlin."
      ],
      "logo": "doculoud.png"
    },
    {
      "name": "Flier: social media for private & public events",
      "details": [
        "Developed a platform, helping users to attend to both public and private events, using Flutter and Laravel.",
        "Users can connect with each other and notify them on newly created public, private or close friend events. They can also share stories on events they attended."
      ],
      "logo": "flier.png"
    },
    {
      "name": "FreelancerCRM: CRM for freelancers",
      "details": [
        "This projects aim is to help freelancers to organize their income, outcome, projects and customers.",
        "This project was available on iOS, Android, MacOS & Web."
      ],
      "logo": "fcrm.png"
    },
    {
      "name": "helo!: Startup ecosystem platform",
      "details": [
        "Developed a platform for startup ecosystem where startups and investors meet alongsidge with events, perks and connections.",
        "Implemented instant messaging with using websocket."
      ],
      "logo": "helo.png"
    },
    {
      "name": "RepairFinder: Germany based marketplace for repairmen (mobile device repair shops)",
      "details": [
        "Implemented three different websites, Customer, Workshop and Admin, with using VueJS with Laravel backend.",
        "Customer and Workshop users also have mobile application developed with Flutter with notification and streaming. Workshops monitor the incoming requests with using socket for instant connection."
      ],
      "logo": "repairfinder.png"
    },
    {
      "name": "Garantimo: E-warranty management platform from Sabancı ARF",
      "details": [
        "Flutter web project with Laravel backend.",
        "This project was aiming to reduce the hard copy of warranty papers to find a digital solution to keep and store warranty papers.",
        "Sabancı ARF is the internal startup program of the Sabancı Holding."
      ],
      "logo": "garantimo.png"
    },
    {
      "name": "Otorepa: B2B Marketplace for auto spare parts",
      "details": [
        "I have auto spare parts domain knowledge and work with big data while structuring the database.",
        "Mobile application and web platform were helping customers to easily upload their products and observe the end-to-end shipping process."
      ],
      "logo": "otorepa.png"
    },
    {
      "name": "Fundle: Game library app like Roblox",
      "details": [
        "Integrated Unity application into the Flutter application.",
        "Dynamic link and notifications features helped customers to enhance"
      ],
      "logo": "fundle.png"
    },
    {
      "name": "Drool: TikTok like social media app for food",
      "details": [
        "ffmpeg is used to optimize the videos for smooth transition between posts in the feed screen.",
        "Users share recipes for the food they are preparing with how to sections and ingredients. They can follow each other and make donations.",
        "Integrated Stripe for donations."
      ],
      "logo": "drool.png"
    },
    {
      "name": "Kuyumcumuz: Marketplace for jewelry store",
      "details": [
        "Three different user roles involving in the project to list and sell both second and brand-new jewelries.",
        "VueJS website with Laravel backend have been used to build this project."
      ],
      "logo": "kuyumcumuz.png"
    },
    {
      "name": "Dr. Moku: Duolingo like language learning app",
      "details": [
        "This project is live since Flutter version 1, first we have upgraded to Flutter v2 and then v3 gradually.",
        "Flutter In App Purchase package is used for implementing the IAP on both iOS and Android.",
        "Users can learn new languages with quizzes, reading, listening and writing sections. Also, special contents created by the customer help people to memorize words and letters in easier way."
      ],
      "logo": "drmoku.png"
    },
    {
      "name": "Kidu: Uber like transportation application for kids from Sabancı ARF",
      "details": [
        "This project has two mobile applications and backend. Child & Parent application and Driver applications. Google Map is used to let parents to monitor the current ride’s location instantly by using streaming."
      ],
      "logo": "kidu.png"
    },
    {
      "name": "PopOff – For Students: Tinder like social media for university students in the USA",
      "details": [
        "Only students with the university mail with edu domain could use the application. It helped students to get to know each other based on their interests, hobbies, music taste etc.",
        "Transformed state management from bloc to GetX to implement VIPER architecture."
      ],
      "logo": "popoff.png"
    },
    {
      "name": "Uzmanparca: E-Commerce for auto spare parts",
      "details": [
        "E-commerce platform is implemented to help users to easily buy a required auto spare part for their car. They can select their car with brand, model and year values to find the suitable spare parts in easier way."
      ],
      "logo": "uzmanparca.png"
    },
    
  ];
  

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  function loadProjects() {
    const projectGrid = document.getElementById('project-grid');
    
    projects.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <img 
                    src="./images/projects/${project.logo}" 
                    alt="${project.name}" 
                    class="project-image"
                >
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <p>${project.details[0]}</p>
                </div>
            </div>
        `;
        projectGrid.innerHTML += projectCard;
    });
}
  
  document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    
  });