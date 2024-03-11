const openBtn = document.querySelector('.mobile-nav-open-btn');
const closeBtn = document.querySelector('.mobile-nav-close-btn');
const navElements = document.querySelectorAll('.mobile-nav');
const mobileMenu = document.querySelector('.mobile-menu');

const isVisible = () => {
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
  console.log(innerWidth);
  console.log(innerHeight);
  //
  if (innerWidth > 768) {
    mobileMenu.style.display = 'none';
    navElements.forEach(navEl => navEl.classList.remove('mobile-visible'));
  } else {
    mobileMenu.style.display = 'flex';
  }
};
isVisible();

openBtn.addEventListener('click', () => {
  navElements.forEach(navEl => navEl.classList.add('mobile-visible'));
});

closeBtn.addEventListener('click', () => {
  navElements.forEach(navEl => navEl.classList.remove('mobile-visible'));
});

window.addEventListener('resize', isVisible);
