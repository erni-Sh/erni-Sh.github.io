const popup = document.querySelector('.popup-cookie');

if (popup) {
  const buttonClose = popup.querySelector('.popup-cookie__button');
  const linkInfo = popup.querySelector('.popup-cookie__link');

  const openPopup = () => {
    popup.classList.remove('popup-cookie--hidden');

    linkInfo.focus();
  }

  const closePopup = () => {
    popup.classList.add('popup-cookie--hidden');
  }

  const onWindowClick = (evt) => {
    const isPopup = evt.target.closest('.popup-cookie__block');
    const isClose = popup.classList.contains('popup-cookie--hidden');
    const isCookieInfo = evt.target.closest('.popup-cookie-info');

    if (!isPopup && !isClose && !isCookieInfo) {
      closePopup()
    }
  }

  const onWindowKeydown = (evt) => {
    if (!popup.classList.contains('popup-cookie--hidden')) {
      if (evt.key === "Esc" || evt.key === "Escape") {
        closePopup();
      }
    }
  }

  const onButtonCloseBlur = (evt) => {
    evt.preventDefault();
    linkInfo.focus();
  }

  const onButtonCloseClick = (evt) => {
    evt.preventDefault();
    closePopup();
  }

  buttonClose.addEventListener('click', onButtonCloseClick);
  window.addEventListener('click', onWindowClick);
  window.addEventListener('keydown', onWindowKeydown);

  buttonClose.addEventListener('blur', onButtonCloseBlur);

  openPopup();
}

