"use client";

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // We put all original index.js code here
    // Wait slightly to ensure DOM is ready and external scripts are loaded
    const timeout = setTimeout(() => {
      const animateElements = document.querySelectorAll(".animate");

      // Track scroll direction
      let lastScrollTop = 0;
      let scrollDirection = "down";

      // INITIAL HIDE - Set initial state for all animated elements
      animateElements.forEach((el) => {
        (el as HTMLElement).style.opacity = "0";

        // Add data attributes for animation direction
        const direction = el.classList.contains("animate-up")
          ? "up"
          : el.classList.contains("animate-down")
          ? "down"
          : el.classList.contains("animate-left")
          ? "left"
          : el.classList.contains("animate-right")
          ? "right"
          : "up";
        (el as HTMLElement).dataset.animateDirection = direction;

        // Set initial position based on direction
        switch (direction) {
          case "up":
            (el as HTMLElement).style.transform = "translateY(50px)";
            break;
          case "down":
            (el as HTMLElement).style.transform = "translateY(-50px)";
            break;
          case "left":
            (el as HTMLElement).style.transform = "translateX(50px)";
            break;
          case "right":
            (el as HTMLElement).style.transform = "translateX(-50px)";
            break;
        }

        (el as HTMLElement).style.transition = "opacity 0.8s ease, transform 0.8s ease";
      });

      // Enhanced Intersection Observer with scroll direction awareness
      const observer = new IntersectionObserver(
        (entries, observerInstance) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const direction = el.dataset.animateDirection || "up";

              // Adjust animation based on scroll direction
              const animateDirection =
                scrollDirection === "up"
                  ? direction === "up"
                    ? "down"
                    : direction === "down"
                    ? "up"
                    : direction === "left"
                    ? "right"
                    : "left"
                  : direction;

              // Add delay based on position in the observer entries
              const delay = index * 0.1;

              setTimeout(() => {
                el.style.opacity = "1";

                // Animate based on adjusted direction
                switch (animateDirection) {
                  case "up":
                    el.style.transform = "translateY(0)";
                    break;
                  case "down":
                    el.style.transform = "translateY(0)";
                    break;
                  case "left":
                    el.style.transform = "translateX(0)";
                    break;
                  case "right":
                    el.style.transform = "translateX(0)";
                    break;
                }

                el.classList.add("animated");

                // Animate skill bars inside this element
                const progressBars = el.querySelectorAll(".skill-progress");
                progressBars.forEach((bar) => {
                  const b = bar as HTMLElement;
                  const targetWidth = b.dataset.width || b.style.width;
                  b.style.transition = `width 1s ease-in-out ${delay}s`;
                  b.style.width = targetWidth;
                });

                // Add a subtle scale effect
                el.style.transform += " scale(1)";

                observerInstance.unobserve(el); // Animate only once
              }, delay * 1000);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      // Track scroll for navbar and general direction
      const navbar = document.querySelector(".navbar");
      const handleScroll = () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        
        // Toggle Scrolled Class
        if (navbar) {
            if (st > 50) {
            navbar.classList.add("scrolled");
            } else {
            navbar.classList.remove("scrolled");
            }
        }

        if (st > lastScrollTop) {
          scrollDirection = "down";
        } else {
          scrollDirection = "up";
        }
        lastScrollTop = st <= 0 ? 0 : st;
      };
      
      window.addEventListener("scroll", handleScroll);

      // Prepare elements for observation
      animateElements.forEach((el) => {
        // Save target width in data attribute (for skill bars)
        el.querySelectorAll(".skill-progress").forEach((bar) => {
          const b = bar as HTMLElement;
          b.dataset.width = b.style.width;
          b.style.width = "0%";
        });

        observer.observe(el);
      });

      // Enhanced smooth scroll behavior on anchor clicks
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = anchor.getAttribute("href");
          if (!targetId || targetId === '#') return;
          const target = document.querySelector(targetId) as HTMLElement;
          if (target) {
            // Check if target is inside the custom scroll box
            const scrollBox = target.closest('.custom-scroll-box');
            
            if (scrollBox) {
               const scrollBoxTop = scrollBox.getBoundingClientRect().top;
               const targetTop = target.getBoundingClientRect().top;
               const offset = targetTop - scrollBoxTop + scrollBox.scrollTop;
               
               scrollBox.scrollTo({
                 top: offset,
                 behavior: "smooth",
               });
            } else {
               const absoluteTop = target.getBoundingClientRect().top + window.scrollY;
               window.scrollTo({
                 top: absoluteTop - 120, // Adjusted offset for sticky header
                 behavior: "smooth",
               });
            }

            // Add a slight pulse animation to the target section
            setTimeout(() => {
              target.style.transform = "scale(1.01)";
              setTimeout(() => {
                target.style.transform = "scale(1)";
              }, 300);
            }, 1000);
          }

          document
            .querySelectorAll(".nav-link")
            .forEach((link) => link.classList.remove("active"));
          
          if(anchor.classList.contains('nav-link')) {
              anchor.classList.add("active");
          }
        });
      });

      // Active link on window scroll with animation
      const handleWindowScrollSpy = () => {
        const scrollY = window.scrollY;

        document.querySelectorAll("section[id]").forEach((section) => {
          const s = section as HTMLElement;
          const sectionAbsoluteTop = s.getBoundingClientRect().top + window.scrollY;
          const sectionTop = sectionAbsoluteTop - 100;
          const sectionHeight = s.offsetHeight;
          const id = s.getAttribute("id");

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll(".nav-link").forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");

                // Add a subtle animation to the active link
                (link as HTMLElement).style.transform = "scale(1.1)";
                setTimeout(() => {
                  (link as HTMLElement).style.transform = "scale(1)";
                }, 300);
              }
            });
          }
        });
      };
      
      // Active link on custom scroll box scroll
      const handleBoxScrollSpy = () => {
         const scrollBox = document.querySelector('.custom-scroll-box') as HTMLElement;
         if(!scrollBox) return;
         
         const boxScrollY = scrollBox.scrollTop;
         
         document.querySelectorAll(".exp-detail-block").forEach((block) => {
          const b = block as HTMLElement;
          const blockTop = b.offsetTop;
          const blockHeight = b.offsetHeight;
          const id = b.getAttribute("id");

          // Trigger point is near the top of the box
          if (boxScrollY >= blockTop - 150 && boxScrollY < blockTop + blockHeight - 150) {
            document.querySelectorAll("#experience-list .list-group-item").forEach((item) => {
              item.classList.remove("active");
              if (item.getAttribute("href") === `#${id}`) {
                item.classList.add("active");
              }
            });
          }
        });
      };

      window.addEventListener("scroll", handleWindowScrollSpy);
      
      const scrollBoxEl = document.querySelector('.custom-scroll-box');
      if (scrollBoxEl) {
         scrollBoxEl.addEventListener("scroll", handleBoxScrollSpy);
         // trigger once on load
         setTimeout(handleBoxScrollSpy, 500); 
      }

      // Contact form submission with animation
      const contactForm = document.getElementById("contactForm") as HTMLFormElement;
      const formStatus = document.getElementById("form-status");

      if (contactForm && formStatus) {
        contactForm.addEventListener("submit", async (e) => {
          e.preventDefault();

          // Add submitting animation
          formStatus.innerHTML =
            '<div class="alert alert-info">Sending your message...</div>';
          formStatus.style.opacity = "0";
          formStatus.style.transform = "translateY(20px)";
          formStatus.style.transition = "opacity 0.3s ease, transform 0.3s ease";

          setTimeout(() => {
            formStatus.style.opacity = "1";
            formStatus.style.transform = "translateY(0)";
          }, 10);

          try {
            const res = await fetch(contactForm.action, {
              method: "POST",
              body: new FormData(contactForm),
              headers: {
                Accept: "application/json",
              },
            });

            if (res.ok) {
              // Success animation
              formStatus.innerHTML =
                '<div class="alert alert-success">Message sent successfully!</div>';
              contactForm.reset();

              // Add celebration animation
              formStatus.style.transform = "scale(1.1)";
              setTimeout(() => {
                formStatus.style.transform = "scale(1)";
              }, 300);
            } else {
              throw new Error("Failed to send");
            }
          } catch (err) {
            console.error(err);
            // Error animation
            formStatus.innerHTML = `<div class="alert alert-danger">Oops! There was a problem. Email me directly at <a href="mailto:annmariyawilson@gmail.com">annmariyawilson@gmail.com</a></div>`;
            formStatus.style.transform = "translateX(-10px)";
            setTimeout(() => {
              formStatus.style.transform = "translateX(10px)";
              setTimeout(() => {
                formStatus.style.transform = "translateX(0)";
              }, 100);
            }, 100);
          }
        });
      }

      // Add scroll-triggered animations for containers with direction awareness
      const containers = document.querySelectorAll(".container, .timeline-item");

      const containerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const container = entry.target as HTMLElement;

              // Adjust animation based on scroll direction
              if (scrollDirection === "up") {
                container.style.transform = "translateY(20px)";
                setTimeout(() => {
                  container.style.transform = "translateY(0)";
                }, 50);
              } else {
                container.style.transform = "translateY(-20px)";
                setTimeout(() => {
                  container.style.transform = "translateY(0)";
                }, 50);
              }

              container.style.opacity = "1";
              container.classList.add("container-visible");
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      containers.forEach((container) => {
        const c = container as HTMLElement;
        c.style.opacity = "0";
        c.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        containerObserver.observe(c);
      });

      // Parallax effect for profile image
      const profileImg = document.querySelector(".profile-img") as HTMLElement;
      if (profileImg) {
        window.addEventListener("scroll", () => {
          const scrollPosition = window.pageYOffset;
          profileImg.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        });
      }


      // @ts-expect-error
      if (window.particlesJS) {
        // @ts-expect-error
        window.particlesJS("particles-edu", {
            particles: {
              number: { value: 50, density: { enable: true, value_area: 800 } },
              color: { value: "#6bbd99" },
              shape: { type: "circle" },
              opacity: { value: 0.3, random: true },
              size: { value: 3, random: true },
              line_linked: {
                enable: true,
                distance: 130,
                color: "#4a8d6d",
                opacity: 0.3,
                width: 1,
              },
              move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: false },
              },
              modes: { grab: { distance: 150, line_linked: { opacity: 0.6 } } },
            },
            retina_detect: true,
        });

        // Initialize particles for Skills section (golden dots)
        // @ts-expect-error
        window.particlesJS("particles-skills", {
            particles: {
              number: { value: 60, density: { enable: true, value_area: 800 } },
              color: { value: "#d4af37" }, // Golden color
              shape: { type: "circle" },
              opacity: { value: 0.6, random: true },
              size: { value: 3, random: true },
              line_linked: {
                enable: false // Just floating dots
              },
              move: { enable: true, speed: 1.5, direction: "none", out_mode: "out" },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "bubble" },
                onclick: { enable: false },
              },
              modes: { bubble: { distance: 200, size: 6, duration: 2, opacity: 1 } },
            },
            retina_detect: true,
        });
      }
    }, 500); // 500ms timeout allows CDN scripts to load and DOM to mount
    
    return () => clearTimeout(timeout);
  }, []);

  return null;
}
