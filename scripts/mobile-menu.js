export function enableMobileMenu() {
  const burgerButton = document.querySelector('.header__burger-button');
  const header = document.querySelector('.header');
  const mobileMenu = document.querySelector('.menu');
  const navBar = mobileMenu.querySelector('.menu__navbar');

  function handleBurgerButton() {
    burgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('menu_isOpen');
      header.classList.toggle('header_mobile');
    });
  }
  function handleCloseMenu() {
    navBar.childNodes.forEach((item) => {
      item.addEventListener('click', () => {
        mobileMenu.classList.remove('menu_isOpen');
        header.classList.remove('header_mobile');
      });
    });
  }
  handleBurgerButton();
  handleCloseMenu();
}
