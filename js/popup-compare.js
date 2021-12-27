const popup = document.querySelector('.popup-compare');

if (popup) {
  const buttonsOpen = document.querySelectorAll('#compare');
  const buttonClose = popup.querySelector('.popup-compare__close');
  const page = document.querySelector('html');

  const openPopup = () => {
    popup.classList.remove('popup-compare--hidden');

    page.style.overflowY = 'hidden';
    buttonClose.focus();
  }

  const closePopup = () => {
    popup.classList.add('popup-compare--hidden');
    page.style.overflowY = 'auto';
  }

  const onWindowClick = (evt) => {
    const isPopup = evt.target.closest('.popup-compare__block');
    const isButton = evt.target.closest('#compare');
    const isClose = popup.classList.contains('popup-compare--hidden');

    if (!isPopup && !isButton && !isClose) {
      closePopup()
    }
  }

  const onWindowKeydown = (evt) => {
    if (!popup.classList.contains('popup-compare--hidden')) {
      if (evt.key === "Esc" || evt.key === "Escape") {
        closePopup();
      }
    }
  }

  const onButtonClick = (evt) => {
    evt.preventDefault();
    openPopup();
  }

  const onButtonCloseClick = (evt) => {
    evt.preventDefault();
    closePopup();
  }


  buttonsOpen.forEach((el) => {
    el.addEventListener('click', onButtonClick);
  })

  buttonClose.addEventListener('click', onButtonCloseClick);
  window.addEventListener('click', onWindowClick);
  window.addEventListener('keydown', onWindowKeydown);
}



