const searchButton = document.querySelectorAll('.user__search');
const searchField = document.querySelector('.search');
const buttonClose = searchField.querySelector('.search__close-btn');
const page = document.querySelector('html');

const openPopup = () => {
  searchField.classList.remove('search--hidden');

  page.style.overflowY = 'hidden';
  buttonClose.focus();
}

const closePopup = () => {
  searchField.classList.add('search--hidden');
  page.style.overflowY = 'auto';
}

const onWindowClick = (evt) => {
  const isPopup = evt.target.closest('.search__form');
  const isButton = evt.target.closest('#search');
  const isClose = searchField.classList.contains('search--hidden');

  if (!isPopup && !isButton && !isClose) {
    closePopup()
  }
}

const onWindowKeydown = (evt) => {
  if (!searchField.classList.contains('search--hidden')) {
    if (evt.key === "Esc" || evt.key === "Escape") {
      closePopup();
    }
  }
}

const onSearchButtonClick = (evt) => {
  evt.preventDefault();
  openPopup();
}

const onButtonCloseClick = (evt) => {
  evt.preventDefault();
  closePopup();
}


searchButton.forEach((el) => {
  el.addEventListener('click', onSearchButtonClick);
})

buttonClose.addEventListener('click', onButtonCloseClick);
window.addEventListener('click', onWindowClick);
window.addEventListener('keydown', onWindowKeydown);




