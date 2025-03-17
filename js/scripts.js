window.addEventListener("DOMContentLoaded", (event) => {
    var clicked = false;
    // Navbar shrink function
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY <= 50 && !clicked) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };
  
    // Shrink the navbar
    navbarShrink();
  
    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);
  
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: 74,
      });
    }
  
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
  
    // Handle navbar toggler click
    navbarToggler.addEventListener("click", () => {
      setTimeout(() => {
        if (navbarToggler.classList.contains("collapsed") && window.scrollY <= 50) {
          setTimeout(() => {
            mainNav.classList.remove("navbar-shrink");
            clicked = false;
          }, 300);
        } else {
          mainNav.classList.add("navbar-shrink");
          clicked = true;
        }
      }, 10);
    });
  
    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarResponsive.classList.remove("navbar-shrink");
          setTimeout(() => {
            navbarToggler.click();
          }, 300);
        }
      });
    });
  });
  