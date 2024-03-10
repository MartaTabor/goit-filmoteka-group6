document.addEventListener('DOMContentLoaded', function () {
  const closeModalButton = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');

  document.body.addEventListener('click', function (event) {
    if (event.target.closest('[data-modal-open]')) {
      modal.classList.remove('film-details-is-hidden');
    }
  });

  closeModalButton.addEventListener('click', function () {
    modal.classList.add('film-details-is-hidden');
  });
});
