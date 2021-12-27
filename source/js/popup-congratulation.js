const popup = document.querySelector('.popup-congratulation');

if (popup) {
  const buttonOpen = document.querySelector('#accept');
  const buttonClose = document.querySelector('.popup-congratulation__button');
  const page = document.querySelector('html');

  const openPopup = () => {
    popup.classList.remove('popup-congratulation--hidden');

    page.style.overflowY = 'hidden';
    buttonClose.focus();
  }

  const closePopup = () => {
    popup.classList.add('popup-congratulation--hidden');
    page.style.overflowY = 'auto';
  }

  const onWindowClick = (evt) => {
    const isPopup = evt.target.closest('.popup-congratulation__block');
    const isButton = evt.target.closest('#accept');
    const isClose = popup.classList.contains('popup-congratulation--hidden');

    if (!isPopup && !isButton && !isClose) {
      closePopup()
    }
  }

  const onWindowKeydown = (evt) => {
    if (!popup.classList.contains('popup-congratulation--hidden')) {
      if (evt.key === "Esc" || evt.key === "Escape") {
        closePopup();
      }
    }
  }

  const onButtonCloseBlur = (evt) => {
    evt.preventDefault();
    buttonClose.focus();
  }

  const onButtonOpenClick = (evt) => {
    evt.preventDefault();
    openPopup();
  }

  const onButtonCloseClick = (evt) => {
    evt.preventDefault();
    closePopup();
  }

  buttonOpen.addEventListener('click', onButtonOpenClick);
  buttonClose.addEventListener('click', onButtonCloseClick);
  window.addEventListener('click', onWindowClick);
  window.addEventListener('keydown', onWindowKeydown);

  buttonClose.addEventListener('blur', onButtonCloseBlur);
}

