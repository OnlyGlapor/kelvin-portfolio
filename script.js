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


  document.addEventListener('DOMContentLoaded', function() {
    emailjs.init({
      publicKey: '-tN8u5eTcU9U3IrBI',
      blockHeadless: true,
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    });
  
    const form = document.getElementById('contactForm');
    const externalButton = document.getElementById('externalbutton');
    const loaderContainer = document.getElementById('loaderContainer');
    
    function validateForm() {
      let isValid = true;
      const name = form.querySelector('#from_name');
      const email = form.querySelector('#from_email');
      const message = form.querySelector('#message');
      
      // Reset previous error messages
      clearErrorMessages();
  
      // Validate name
      if (!name.value.trim()) {
        displayErrorMessage(name, 'Name is required');
        isValid = false;
      }
  
      // Validate email
      if (!email.value.trim()) {
        displayErrorMessage(email, 'Email is required');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        displayErrorMessage(email, 'Please enter a valid email address');
        isValid = false;
      }
  
      // Validate message
      if (!message.value.trim()) {
        displayErrorMessage(message, 'Message is required');
        isValid = false;
      }
  
      return isValid;
    }
  
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function displayErrorMessage(element, message) {
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      element.parentNode.appendChild(errorElement);
      element.classList.add('error');
    }
  
    function clearErrorMessages() {
      const errorMessages = form.querySelectorAll('.error-message');
      errorMessages.forEach(el => el.remove());
      form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    }

    function showLoader() {
      loaderContainer.style.display = 'block';
      externalButton.style.display = 'none';
    }
  
    function hideLoader() {
      loaderContainer.style.display = 'none';
      externalButton.style.display = 'block';
    }
  
    function submitButton() {
      if (validateForm()) {
        showLoader();
        const formData = new FormData(form);
        const templateParams = Object.fromEntries(formData);
        
        emailjs.send('service_5gsgq0p', 'template_n634hu4', templateParams)
          .then(function(response) {
            hideLoader();
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            form.reset();
          }, function(error) {
            hideLoader();
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
          });
      }
    }
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      submitButton();
    });
  
    externalButton.addEventListener("click", function(e) {
      e.preventDefault();
      submitButton();
    });
  });