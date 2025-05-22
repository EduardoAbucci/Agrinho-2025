
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.navbar-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (menuToggle.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = function() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  };
  
  // Initial check for elements in view
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
  
  // Handle form submission (just prevent default for now)
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // You can add form validation and submission logic here
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      console.log('Form submission:', { name, email, subject, message });
      
      // For a real implementation, you would send this data to a server
      alert('Formulário enviado com sucesso!');
      this.reset();
    });
  }
});
