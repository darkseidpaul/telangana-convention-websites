// ==========================================================================
// Pingali Venkatarama Reddy Convention Centre - Interactive Script
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('pvr-dialog');
  const openNavBtn = document.getElementById('pvr-check-date-btn');
  const openHeroBtn = document.getElementById('hero-tariffs-btn');
  const openModalBtn = document.getElementById('pvr-inquire-modal-btn');
  const closeBtn = document.getElementById('pvr-close-btn');
  const pvrForm = document.getElementById('pvr-booking-form');

  const openModal = (e) => {
    if (e) e.preventDefault();
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
    }
  };

  const closeModal = () => {
    if (dialog && typeof dialog.close === 'function') {
      dialog.close();
    }
  };

  if (openNavBtn) openNavBtn.addEventListener('click', openModal);
  if (openHeroBtn) openHeroBtn.addEventListener('click', openModal);
  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Modern Web Guidance: Light dismiss implementation
  if (dialog) {
    dialog.addEventListener('click', (event) => {
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

  // Booking Form Submission Handler
  if (pvrForm) {
    pvrForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('pvr-name').value;
      const phone = document.getElementById('pvr-phone').value;
      const date = document.getElementById('pvr-date').value;
      const slot = document.getElementById('pvr-slot').value;
      const ceremony = document.getElementById('pvr-ceremony').value;
      const guests = document.getElementById('pvr-guests').value || 'Unspecified';

      const msg = `*Muhurtham Date Inquiry - Pingali Venkatarama Reddy Convention Centre*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Date:* ${encodeURIComponent(date)}%0A*Slot:* ${encodeURIComponent(slot)}%0A*Occasion:* ${encodeURIComponent(ceremony)}%0A*Approx Guests:* ${encodeURIComponent(guests)}%0A%0APlease let us know the date availability and tariff at Domalguda.`;

      closeModal();
      window.open(`https://wa.me/919866401251?text=${msg}`, '_blank');
      alert(`Inquiry sent for PVR Convention Centre administration (+91 98664 01251). They will review your requested date.`);
      pvrForm.reset();
    });
  }
});
