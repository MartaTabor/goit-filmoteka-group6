const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const modalSec = document.querySelector('.film-details-modal-window');
const footerModal = document.querySelector('.modal-content');
const footerSec = document.querySelector('.footer_container');
const paginationBtns = document.querySelectorAll('.pagination-button');
const paginationSvg = document.querySelectorAll('.pagination-svg');
const mobileMenuA = document.querySelectorAll('.list li a');
const mobileNavWhite = document.querySelector('.mobile-nav-white');
const mobileNavBlack = document.querySelector('.mobile-nav-black');
const modalCloseBtn = document.querySelectorAll('.close-button');
const mobileCloseBtn = document.querySelector('.mobile-nav-close-btn');

// Style Dark Mode
const darkMode = () => {
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  modalSec.style.backgroundColor = '#0e171e';
  footerSec.style.backgroundColor = '#0e171e';
  footerModal.style.backgroundColor = '#0e171e';
  mobileNavWhite.style.backgroundColor = '#0e171e';
  mobileNavBlack.style.backgroundColor = '#fff';
  mobileCloseBtn.style.color = '#fff';

  mobileMenuA.forEach(link => {
    link.style.color = '#fff';
  });

  paginationBtns.forEach(btn => {
    btn.style.color = '#fff';
  });
};

// Style Light Mode
const lightMode = () => {
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  modalSec.style.backgroundColor = '#fff';
  footerSec.style.backgroundColor = '#fff';
  footerModal.style.backgroundColor = '#fff';
  mobileNavWhite.style.backgroundColor = '#fff';
  mobileNavBlack.style.backgroundColor = '#0e171e';
  mobileCloseBtn.style.color = '#000';

  mobileMenuA.forEach(link => {
    link.style.color = '#0e171e';
  });

  paginationBtns.forEach(btn => {
    btn.style.color = '#000';
  });
};

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}
