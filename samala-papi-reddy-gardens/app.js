// ==========================================================================
// Samala Papi Reddy Gardens & Grand Convention - Interactive Controller
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const dialog = document.getElementById('inquiry-dialog');
  const openHeaderBtn = document.getElementById('open-header-inquiry');
  const openNavBtn = document.getElementById('nav-inquire-btn');
  const openHeroBtn = document.getElementById('hero-book-btn');
  const openCalcBtn = document.getElementById('calc-inquire-btn');
  const openStickyBtn = document.getElementById('sticky-inquire-btn');
  const closeBtn = document.getElementById('close-dialog-btn');
  const bookingForm = document.getElementById('booking-form');

  // Open Dialog Function
  const openModal = (e) => {
    if (e) e.preventDefault();
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
    }
  };

  // Close Dialog Function
  const closeModal = () => {
    if (dialog && typeof dialog.close === 'function') {
      dialog.close();
    }
  };

  // Event Listeners for Opening
  if (openHeaderBtn) openHeaderBtn.addEventListener('click', openModal);
  if (openNavBtn) openNavBtn.addEventListener('click', openModal);
  if (openHeroBtn) openHeroBtn.addEventListener('click', openModal);
  if (openCalcBtn) openCalcBtn.addEventListener('click', openModal);
  if (openStickyBtn) openStickyBtn.addEventListener('click', openModal);

  // Close Button Listener
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Modern Web Guidance: Light dismiss implementation for native dialog
  if (dialog) {
    dialog.addEventListener('click', (event) => {
      // If the click is on the dialog itself (the backdrop), close it
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });
  }

  // Guest Estimator Calculator
  const guestRange = document.getElementById('guest-range');
  const guestCountVal = document.getElementById('guest-count-val');
  const eventTypeSelect = document.getElementById('event-type');
  const recVenue = document.getElementById('rec-venue');
  const recParking = document.getElementById('rec-parking');
  const recRooms = document.getElementById('rec-rooms');

  function updateEstimates() {
    if (!guestRange) return;
    const count = parseInt(guestRange.value, 10);
    guestCountVal.textContent = `${count.toLocaleString()} Guests`;

    if (count <= 1000) {
      recVenue.textContent = 'Swarnamukhi AC Convention Palace';
      recParking.textContent = '150+ Dedicated Car Slots';
      recRooms.textContent = '4 AC Luxury Suites included';
    } else if (count <= 2200) {
      recVenue.textContent = 'Main AC Palace + Rajgharana Dining Arena';
      recParking.textContent = '300+ Dedicated Car Slots & Valet';
      recRooms.textContent = '8 AC Luxury Suites included';
    } else {
      recVenue.textContent = 'Full Estate: AC Palace + Royal Open-Air Lawn + Dining Arena';
      recParking.textContent = '400+ Full Campus Parking & Traffic Marshals';
      recRooms.textContent = 'All 12 AC VIP/Bridal Suites included';
    }
  }

  if (guestRange) {
    guestRange.addEventListener('input', updateEstimates);
  }
  if (eventTypeSelect) {
    eventTypeSelect.addEventListener('change', updateEstimates);
  }
  updateEstimates();

  // Booking Form Submission Handler
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('client-name').value;
      const phone = document.getElementById('client-phone').value;
      const date = document.getElementById('event-date').value;
      const guests = document.getElementById('estimated-guests').value || 'Not specified';

      // Format WhatsApp Message for Direct Handoff
      const message = `*Event Inquiry - Samala Papi Reddy Gardens*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Date:* ${encodeURIComponent(date)}%0A*Expected Guests:* ${encodeURIComponent(guests)}%0A%0APlease share availability and tariff details.`;
      
      closeModal();
      
      // Open WhatsApp with prefilled message
      window.open(`https://wa.me/919390714545?text=${message}`, '_blank');

      alert(`Thank you, ${name}! Your inquiry has been generated. Our management team at Samala Papi Reddy Gardens (+91 93907 14545) will confirm your date.`);
      bookingForm.reset();
    });
  }
});
