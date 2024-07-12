// for the mobile menu

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const menuItems = document.querySelectorAll('nav ul li a');

  function toggleMenu() {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
  }

  menuToggle.addEventListener('click', toggleMenu);

  menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
              toggleMenu();
          }
      });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
      if (nav.classList.contains('active') && 
          !nav.contains(e.target) && 
          e.target !== menuToggle) {
          toggleMenu();
      }
  });

  // Close menu on window resize if it's open
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && nav.classList.contains('active')) {
          toggleMenu();
      }
  });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
  }
  
  function handleScrollAnimations() {
    const elements = document.querySelectorAll('.slide-left, .slide-right, .fade-in');
    
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  }
  
  // Throttle function to limit how often the scroll handler fires
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
  
  // Add event listeners
  window.addEventListener('scroll', throttle(handleScrollAnimations, 100));
  window.addEventListener('load', handleScrollAnimations);