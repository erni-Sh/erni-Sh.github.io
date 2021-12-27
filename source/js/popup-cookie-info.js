const popup = document.querySelector('.popup-cookie-info');

if (popup) {
  const buttonsOpen = document.querySelectorAll('#cookie');
  const buttonClose = popup.querySelector('.popup-cookie-info__close');
  const page = document.querySelector('html');

  const openPopup = () => {
    popup.classList.remove('popup-cookie-info--hidden');

    page.style.overflowY = 'hidden';
    buttonClose.focus();
  }

  const closePopup = () => {
    popup.classList.add('popup-cookie-info--hidden');
    page.style.overflowY = 'auto';
  }

  const onWindowClick = (evt) => {
    const isPopup = evt.target.closest('.popup-cookie-info__block');
    const isButton = evt.target.closest('#cookie');
    const isClose = popup.classList.contains('popup-cookie-info--hidden');

    if (!isPopup && !isButton && !isClose) {
      closePopup()
    }
  }

  const onWindowKeydown = (evt) => {
    if (!popup.classList.contains('popup-cookie-info--hidden')) {
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



