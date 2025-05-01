// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and content
        tabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding content
        const tabId = button.dataset.tab;
        document.getElementById(`${tabId}-content`).classList.add('active');
      });
    });
    
    // Form submission handling
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
      reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const guests = document.getElementById('guests').value;
        const roomType = document.getElementById('roomType').value;
        
        if (!name || !email || !phone || !checkin || !checkout || !guests || !roomType) {
          alert('Please fill in all fields');
          return;
        }
        
        // Simulate form submission
        const submitButton = reservationForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Processing...';
        submitButton.disabled = true;
        
        setTimeout(() => {
          alert('Reservation request submitted successfully! We\'ll contact you shortly to confirm.');
          reservationForm.reset();
          submitButton.textContent = 'Request Reservation';
          submitButton.disabled = false;
        }, 1500);
      });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (!email || !email.includes('@')) {
          alert('Please enter a valid email address');
          return;
        }
        
        const submitButton = newsletterForm.querySelector('button');
        submitButton.textContent = 'Subscribing...';
        submitButton.disabled = true;
        
        setTimeout(() => {
          alert('Thank you for subscribing! You\'ll receive our next newsletter soon.');
          emailInput.value = '';
          submitButton.textContent = 'Subscribe';
          submitButton.disabled = false;
        }, 1000);
      });
    }
    
    // Book Now button functionality
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(button => {
      button.addEventListener('click', function() {
        const reservationSection = document.getElementById('reservation');
        if (reservationSection) {
          reservationSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  