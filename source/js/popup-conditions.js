const popup = document.querySelector('.popup-conditions');

if (popup) {
  const popupBlock = document.querySelector('.popup-conditions__block');
  const buttonsOpen = document.querySelectorAll('#conditions');
  const buttonClose = document.querySelector('.popup-conditions__close');
  const page = document.querySelector('html');

  const openPopup = () => {
    popup.classList.remove('popup-conditions--hidden');

    page.style.overflowY = 'hidden';
    buttonClose.focus();
  }

  const closePopup = () => {
    popup.classList.add('popup-conditions--hidden');
    page.style.overflowY = 'auto';
  }

  const onWindowClick = (evt) => {
    const isPopup = evt.target.closest('.popup-conditions__block');
    const isButton = evt.target.closest('#conditions');
    const isClose = popup.classList.contains('popup-conditions--hidden');

    if (!isPopup && !isButton && !isClose) {
      closePopup()
    }
  }

  const onWindowKeydown = (evt) => {
    if (!popup.classList.contains('popup-conditions--hidden')) {
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



