document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.animate');

  // Track scroll direction
  let lastScrollTop = 0;
  let scrollDirection = 'down';

  // INITIAL HIDE - Set initial state for all animated elements
  animateElements.forEach(el => {
    el.style.opacity = '0';
    
    // Add data attributes for animation direction
    const direction = el.classList.contains('animate-up') ? 'up' : 
                     el.classList.contains('animate-down') ? 'down' : 
                     el.classList.contains('animate-left') ? 'left' : 
                     el.classList.contains('animate-right') ? 'right' : 'up';
    el.dataset.animateDirection = direction;
    
    // Set initial position based on direction
    switch(direction) {
      case 'up':
        el.style.transform = 'translateY(50px)';
        break;
      case 'down':
        el.style.transform = 'translateY(-50px)';
        break;
      case 'left':
        el.style.transform = 'translateX(50px)';
        break;
      case 'right':
        el.style.transform = 'translateX(-50px)';
        break;
    }
    
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });

  // Enhanced Intersection Observer with scroll direction awareness
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const direction = el.dataset.animateDirection || 'up';
        
        // Adjust animation based on scroll direction
        const animateDirection = scrollDirection === 'up' ? 
                               (direction === 'up' ? 'down' : 
                                direction === 'down' ? 'up' : 
                                direction === 'left' ? 'right' : 'left') : direction;
        
        // Add delay based on position in the observer entries
        const delay = index * 0.1;
        
        setTimeout(() => {
          el.style.opacity = '1';
          
          // Animate based on adjusted direction
          switch(animateDirection) {
            case 'up':
              el.style.transform = 'translateY(0)';
              break;
            case 'down':
              el.style.transform = 'translateY(0)';
              break;
            case 'left':
              el.style.transform = 'translateX(0)';
              break;
            case 'right':
              el.style.transform = 'translateX(0)';
              break;
          }
          
          el.classList.add('animated');

          // Animate skill bars inside this element
          const progressBars = el.querySelectorAll('.skill-progress');
          progressBars.forEach(bar => {
            const targetWidth = bar.dataset.width || bar.style.width;
            bar.style.transition = `width 1s ease-in-out ${delay}s`;
            bar.style.width = targetWidth;
          });

          // Add a subtle scale effect
          el.style.transform += ' scale(1)';
          
          observerInstance.unobserve(el); // Animate only once
        }, delay * 1000);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  // Track scroll direction
  window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      scrollDirection = 'down';
    } else {
      scrollDirection = 'up';
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });

  // Prepare elements for observation
  animateElements.forEach(el => {
    // Save target width in data attribute (for skill bars)
    el.querySelectorAll('.skill-progress').forEach(bar => {
      bar.dataset.width = bar.style.width;
      bar.style.width = '0%';
    });

    observer.observe(el);
  });

  // Enhanced smooth scroll behavior on anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Add a slight pulse animation to the target section
        setTimeout(() => {
          target.style.transform = 'scale(1.01)';
          setTimeout(() => {
            target.style.transform = 'scale(1)';
          }, 300);
        }, 1000);
      }

      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      anchor.classList.add('active');
    });
  });

  // Active link on scroll with animation
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
            
            // Add a subtle animation to the active link
            link.style.transform = 'scale(1.1)';
            setTimeout(() => {
              link.style.transform = 'scale(1)';
            }, 300);
          }
        });
      }
    });
  });

  // Contact form submission with animation
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Add submitting animation
      formStatus.innerHTML = '<div class="alert alert-info">Sending your message...</div>';
      formStatus.style.opacity = '0';
      formStatus.style.transform = 'translateY(20px)';
      formStatus.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      
      setTimeout(() => {
        formStatus.style.opacity = '1';
        formStatus.style.transform = 'translateY(0)';
      }, 10);

      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (res.ok) {
          // Success animation
          formStatus.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
          contactForm.reset();
          
          // Add celebration animation
          formStatus.style.transform = 'scale(1.1)';
          setTimeout(() => {
            formStatus.style.transform = 'scale(1)';
          }, 300);
        } else {
          throw new Error('Failed to send');
        }
      } catch (err) {
        console.error(err);
        // Error animation
        formStatus.innerHTML = `<div class="alert alert-danger">Oops! There was a problem. Email me directly at <a href="mailto:annmariyawilson@gmail.com">annmariyawilson@gmail.com</a></div>`;
        formStatus.style.transform = 'translateX(-10px)';
        setTimeout(() => {
          formStatus.style.transform = 'translateX(10px)';
          setTimeout(() => {
            formStatus.style.transform = 'translateX(0)';
          }, 100);
        }, 100);
      }
    });
  }

  // Add scroll-triggered animations for containers with direction awareness
  const containers = document.querySelectorAll('.container, .timeline-item');
  
  const containerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        
        // Adjust animation based on scroll direction
        if (scrollDirection === 'up') {
          container.style.transform = 'translateY(20px)';
          setTimeout(() => {
            container.style.transform = 'translateY(0)';
          }, 50);
        } else {
          container.style.transform = 'translateY(-20px)';
          setTimeout(() => {
            container.style.transform = 'translateY(0)';
          }, 50);
        }
        
        container.style.opacity = '1';
        container.classList.add('container-visible');
      }
    });
  }, {
    threshold: 0.1
  });

  containers.forEach(container => {
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    containerObserver.observe(container);
  });

  // Parallax effect for profile image
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      profileImg.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });
  }
});