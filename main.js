/* ==========================================================
   Launchpad — main.js
   Plain JS, no dependencies. Handles:
   - "Book a free chat" modal (open / close / form / confirm)
   - Nav active state
   - Smooth scroll for anchor nav links
   ========================================================== */

(function () {
  'use strict';

  /* ---- Modal ---- */
  const overlay   = document.getElementById('chat-modal');
  const formView  = document.getElementById('modal-form-view');
  const confirmView = document.getElementById('modal-confirm-view');
  const confirmName = document.getElementById('confirm-name');
  const chatForm  = document.getElementById('chat-form');
  const nameInput = document.getElementById('field-name');
  const emailInput= document.getElementById('field-email');
  const nameErr   = document.getElementById('name-error');
  const emailErr  = document.getElementById('email-error');

  function openModal() {
    // Reset to form state each time
    showForm();
    nameInput.value  = '';
    emailInput.value = '';
    document.getElementById('field-about').value = '';
    clearErrors();
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    // Focus first field after transition
    setTimeout(() => nameInput.focus(), 220);
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function showForm() {
    formView.hidden    = false;
    confirmView.hidden = true;
  }

  function showConfirm(firstName) {
    confirmName.textContent = firstName || 'friend';
    formView.hidden    = true;
    confirmView.hidden = false;
  }

  function clearErrors() {
    nameInput.classList.remove('has-error');
    emailInput.classList.remove('has-error');
    nameErr.textContent  = '';
    emailErr.textContent = '';
  }

  // Open triggers: every element with data-open-modal
  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', openModal);
  });

  // Close on overlay click (but not on modal card itself)
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Close buttons
  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  // Form submission
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let valid = true;

      if (!nameInput.value.trim()) {
        nameInput.classList.add('has-error');
        nameErr.textContent = 'Just so we know what to call you.';
        valid = false;
      }

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(emailInput.value.trim())) {
        emailInput.classList.add('has-error');
        emailErr.textContent = 'Please pop in a valid email.';
        valid = false;
      }

      if (!valid) return;

      const firstName = nameInput.value.trim().split(' ')[0];
      showConfirm(firstName);
    });
  }

  /* ---- Nav active state ---- */
  const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navLinks.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Highlight nav link based on scroll position
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    let current = '';
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 90) current = sec.id;
    });
    navLinks.forEach((l) => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
