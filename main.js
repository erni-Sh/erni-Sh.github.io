import './styles/index.css';
import { carousel } from './scripts/carousel-main';
import { enableAccardion } from './scripts/accardion';
import { enableMobileMenu } from './scripts/mobile-menu';

window.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.js-observer');
  console.log(targets);
  const options = {
    rootMargin: '-80px',
    threshold: 0.2,
  };

  const startAnimation = (entries, observer) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.dataset.src // if is img
          ? (e.target.src = e.target.dataset.src)
          : e.target.classList.add('js_isVisible');
        observer.unobserve(e.target);
      }
    });
  };

  const observer = new IntersectionObserver(startAnimation, options);

  targets.forEach((e) => {
    observer.observe(e);
  });
});
carousel();
enableAccardion();
enableMobileMenu();
