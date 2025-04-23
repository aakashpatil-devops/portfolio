document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    window.addEventListener('scroll', function () {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Skill animation
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    }
  
    function animateSkills() {
      document.querySelectorAll('.progress-bar span').forEach(span => {
        if (isInViewport(span)) {
          const value = span.getAttribute('data-value');
          span.style.width = value + '%';
          span.textContent = value + '%';
        } else {
          span.style.width = '0%';
          span.textContent = '';
        }
      });
    }
  
    window.addEventListener('scroll', animateSkills);
    window.addEventListener('load', animateSkills);
  
    // Contact form submission
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
  
        try {
          const response = await fetch('https://formspree.io/f/xvgaperr', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
  
          if (response.ok) {
            alert('Message sent successfully!');
            form.reset();
          } else {
            alert('Oops! Something went wrong.');
          }
        } catch (error) {
          alert('Error: ' + error.message);
        }
      });
    }
  
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links a');
    const navClose = document.querySelector('.nav-close');
  
    function toggleMenu() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    }
  
    if (hamburger) {
      hamburger.addEventListener('click', toggleMenu);
    }
  
    if (navClose) {
      navClose.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    }
  
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  });
  
