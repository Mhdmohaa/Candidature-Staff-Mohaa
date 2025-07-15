document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
  
  // Particles.js configuration
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#e60012"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#e60012",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
  
  // Custom cursor
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
  });
  
  // Animate stats counters
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  statNumbers.forEach(stat => {
    const target = +stat.getAttribute('data-count');
    const speed = 2000;
    const count = +stat.innerText;
    const increment = target / (speed / 16);
    
    if (count < target) {
      stat.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      stat.innerText = target;
    }
    
    function updateCount() {
      const count = +stat.innerText;
      if (count < target) {
        stat.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        stat.innerText = target;
      }
    }
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuToggle.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Correction pour la timeline sur mobile
  function adjustTimelineForMobile() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (window.innerWidth < 992) {
      timelineItems.forEach(item => {
        item.style.justifyContent = 'flex-start';
        item.style.paddingLeft = '70px';
        item.style.paddingRight = '0';
      });
    }
  }

  // Initial adjustment
  adjustTimelineForMobile();
  
  // Adjust on resize
  window.addEventListener('resize', adjustTimelineForMobile);
});