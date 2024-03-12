const libraryNavSpan = document.querySelector('.plus-minus');
const libraryNavList = document.querySelector('.library-list');
const navLibrary = document.querySelector('.nav-library');

const openBtn = document.querySelector('.mobile-nav-open-btn');
const closeBtn = document.querySelector('.mobile-nav-close-btn');
const navElements = document.querySelectorAll('.mobile-nav');
const mobileMenu = document.querySelector('.mobile-menu');

const isVisible = () => {
  const innerWidth = window.innerWidth;
  const scrolled = window.scrollY;

  if (innerWidth < 768 && scrolled >= 216) {
    mobileMenu.style.display = 'flex';
  } else {
    mobileMenu.style.display = 'none';
    navElements.forEach(navEl => navEl.classList.remove('mobile-visible'));
  }
};

const isHidden = () => {
  libraryNavList.classList.toggle('nav-hidden');
  if (libraryNavList.classList.contains('nav-hidden')) {
    libraryNavSpan.innerHTML = '<i class="fa-solid fa-plus"></i>';
  } else {
    libraryNavSpan.innerHTML = '<i class="fa-solid fa-minus"></i>';
  }
};

window.addEventListener('scroll', isVisible);
window.addEventListener('resize', isVisible);

isVisible();

openBtn.addEventListener('click', () => {
  navElements.forEach(navEl => navEl.classList.add('mobile-visible'));
});

closeBtn.addEventListener('click', () => {
  navElements.forEach(navEl => navEl.classList.remove('mobile-visible'));
});

navLibrary.addEventListener('click', e => {
  e.preventDefault();
  isHidden();
});
