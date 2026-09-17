/* =========================================================
LITTLE VOGUE STUDIO - MAIN JAVASCRIPT
========================================================= */

// Apply stored theme and direction as early as possible
(function initPreferences() {
  const savedTheme = localStorage.getItem("littleVogueTheme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const savedDirection = localStorage.getItem("littleVogueDirection") || "ltr";
  document.documentElement.dir = savedDirection;
})();

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
  ACTIVE NAVIGATION LINK HIGHLIGHTING
  ========================================================= */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");
  
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else if (href && !href.startsWith("#") && href !== currentPath) {
      link.classList.remove("active");
    }
  });

  /* =========================================================
  MOBILE MENU TOGGLE & CONTROLS/CTA REPOSITION
  ========================================================= */
  const mobileBtn = document.getElementById("mobileBtn");
  const navLinksContainer = document.getElementById("navLinks");
  const navControls = document.getElementById("navControls");
  const navActions = document.querySelector(".nav-actions");
  const navCta = document.querySelector(".nav-cta");

  function handleNavControlsPosition() {
    if (!navLinksContainer || !navActions) return;

    if (window.innerWidth <= 1050) {
      if (navCta && !navLinksContainer.contains(navCta)) {
        navLinksContainer.appendChild(navCta);
      }
      if (navControls && !navLinksContainer.contains(navControls)) {
        navLinksContainer.appendChild(navControls);
      }
    } else {
      if (navControls && !navActions.contains(navControls)) {
        if (mobileBtn) {
          navActions.insertBefore(navControls, mobileBtn);
        } else {
          navActions.appendChild(navControls);
        }
      }
      if (navCta && !navActions.contains(navCta)) {
        if (mobileBtn) {
          navActions.insertBefore(navCta, mobileBtn);
        } else {
          navActions.appendChild(navCta);
        }
      }
    }
  }

  handleNavControlsPosition();

  if (mobileBtn && navLinksContainer) {
    mobileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinksContainer.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!navLinksContainer.contains(e.target) && !mobileBtn.contains(e.target)) {
        navLinksContainer.classList.remove("open");
      }
    });

    window.addEventListener("resize", () => {
      handleNavControlsPosition();
      if (window.innerWidth > 1050) {
        navLinksContainer.classList.remove("open");
      }
    });
  }

  /* =========================================================
  DARK / LIGHT THEME TOGGLE
  ========================================================= */
  const themeBtn = document.getElementById("themeBtn");

  function applyTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("littleVogueTheme", theme);
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  /* =========================================================
  RTL TOGGLE
  ========================================================= */
  const rtlBtn = document.getElementById("rtlBtn");

  function applyDirection(direction) {
    document.documentElement.dir = direction;
    localStorage.setItem("littleVogueDirection", direction);
  }

  if (rtlBtn) {
    rtlBtn.addEventListener("click", () => {
      const isRtl = document.documentElement.dir === "rtl";
      applyDirection(isRtl ? "ltr" : "rtl");
    });
  }

  /* =========================================================
  SCROLL REVEAL ANIMATIONS
  ========================================================= */
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("show"));
  }

  /* =========================================================
  CONTACT FORM SUBMISSION & TOAST
  ========================================================= */
  const contactForm = document.getElementById("contactForm");
  const toast = document.getElementById("toast");

  if (contactForm && toast) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      toast.style.opacity = "1";
      toast.style.transform = "translateY(0)";
      toast.setAttribute("aria-live", "polite");

      contactForm.reset();

      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(12px)";
      }, 3500);
    });
  }

  /* =========================================================
  IMAGE FALLBACK ERROR PROTECTION
  ========================================================= */
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.background = "linear-gradient(135deg, #eee7f8, #fce7f3)";
      img.style.objectFit = "cover";
      img.removeAttribute("src");
      img.alt = img.alt || "Little Vogue Studio";
    });
  });

  /* =========================================================
  SCROLL TO TOP BUTTON LOGIC
  ========================================================= */
  let scrollTopBtn = document.getElementById("scrollTopBtn");

  if (!scrollTopBtn) {
    scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.className = "scroll-top-btn";
    scrollTopBtn.setAttribute("aria-label", "Scroll to top");
    scrollTopBtn.setAttribute("title", "Scroll to Top");
    scrollTopBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    `;
    document.body.appendChild(scrollTopBtn);
  }

  function toggleScrollTopBtn() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleScrollTopBtn, { passive: true });
  toggleScrollTopBtn();

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  /* =========================================================
  FAQ ACCORDION TOGGLE
  ========================================================= */
  const faqCards = document.querySelectorAll(".faq-card");

  faqCards.forEach((card) => {
    const questionBtn = card.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      // Accordion toggle: option to close others or toggle current item
      faqCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("open");
          const otherBtn = otherCard.querySelector(".faq-question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      card.classList.toggle("open", !isOpen);
      questionBtn.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });
  });
});
