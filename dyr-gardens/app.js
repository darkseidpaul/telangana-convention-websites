// ==========================================================================
// D.Y.R. Gardens & AC Function Hall - Interactive Script
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('inquiry-dialog');
  const openInquiryBtn = document.getElementById('open-inquiry-btn');
  const heroInquireBtn = document.getElementById('hero-inquire-btn');
  const calcBookBtn = document.getElementById('calc-book-btn');
  const closeDialogBtn = document.getElementById('close-dialog');
  const dyrForm = document.getElementById('dyr-form');

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

  if (openInquiryBtn) openInquiryBtn.addEventListener('click', openModal);
  if (heroInquireBtn) heroInquireBtn.addEventListener('click', openModal);
  if (calcBookBtn) calcBookBtn.addEventListener('click', openModal);
  if (closeDialogBtn) closeDialogBtn.addEventListener('click', closeModal);

  // Modern Web Guidance: Light dismiss for dialog
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

  // Interactive Guest Slider
  const paxRange = document.getElementById('pax-range');
  const paxLabel = document.getElementById('pax-label');
  const recSpace = document.getElementById('rec-space');
  const recSuites = document.getElementById('rec-suites');

  function updatePax() {
    if (!paxRange) return;
    const val = parseInt(paxRange.value, 10);
    paxLabel.textContent = `${val.toLocaleString()} Guests`;

    if (val <= 400) {
      recSpace.textContent = 'Central AC Hall + Indoor Dining';
      recSuites.textContent = '1 AC Bridal Suite';
    } else if (val <= 800) {
      recSpace.textContent = 'Central AC Hall + Open Lawn + Dining';
      recSuites.textContent = '2 AC Dressing Rooms';
    } else {
      recSpace.textContent = 'Full Estate: AC Hall + Starlit Lawn + Courtyard';
      recSuites.textContent = 'Full Green Suite Access & Ample Parking';
    }
  }

  if (paxRange) {
    paxRange.addEventListener('input', updatePax);
  }
  updatePax();

  // Form submission directly to verified phone (+91 99850 85936)
  if (dyrForm) {
    dyrForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('user-name').value;
      const phone = document.getElementById('user-phone').value;
      const date = document.getElementById('user-date').value;
      const guests = document.getElementById('user-guests').value || 'Unspecified';
      const notes = document.getElementById('user-details').value || 'None';

      const msg = `*Booking Inquiry - D.Y.R. Gardens (Yapral)*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Date:* ${encodeURIComponent(date)}%0A*Guests:* ${encodeURIComponent(guests)}%0A*Notes:* ${encodeURIComponent(notes)}%0A%0APlease let us know date availability and booking package.`;

      closeModal();
      window.open(`https://wa.me/919985085936?text=${msg}`, '_blank');
      alert(`Inquiry prepared for D.Y.R. Gardens management! You will be connected directly with their desk.`);
      dyrForm.reset();
    });
  }
});
