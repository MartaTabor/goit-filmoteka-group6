const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const modalSec = document.querySelector('.film-details-modal-window');
const footerSec = document.querySelector('.footer_container');
const modalBtns = document.querySelectorAll('.modal-buttons');

// Dark Mode Styles
function darkMode() {
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  modalSec.style.backgroundColor = '#0e171e';
  footerSec.style.backgroundColor = '#0e171e';
  modalBtns.forEach(btn => {
    btn.style.color = '#fff';
  });
}

// Light Mode Styles
function lightMode() {
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  modalSec.style.backgroundColor = '#fff';
  footerSec.style.backgroundColor = '#fff';
}

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
