// scripts.js

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
  
  document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        const projectGrid = document.getElementById('project-grid');
        data.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.classList.add('project-card');
  
          projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.overview}</p>
            <a href="${project.name.toLowerCase().replace(/ /g, '-')}.html" class="button">View Project</a>
          `;
          projectGrid.appendChild(projectCard);
        });
      })
      .catch(error => console.error('Error loading projects:', error));
  });