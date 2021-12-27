const popup = document.querySelector('.popup-app');

if (popup) {
  const buttonOpen = document.querySelectorAll('#app');
  const buttonClose = document.querySelector('.popup-app__close');
  const page = document.querySelector('html');

  const openPopup = () => {
    popup.classList.remove('popup-app--hidden');

    page.style.overflowY = 'hidden';
    buttonClose.focus();
  }

  const closePopup = () => {
    popup.classList.add('popup-app--hidden');
    page.style.overflowY = 'auto';
  }

  const onWindowClick = (evt) => {
    const isPopup = evt.target.closest('.popup-app__block');
    const isButton = evt.target.closest('#app');
    const isClose = popup.classList.contains('popup-app--hidden');

    if (!isPopup && !isButton && !isClose) {
      closePopup()
    }
  }

  const onWindowKeydown = (evt) => {
    if (!popup.classList.contains('popup-app--hidden')) {
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


  buttonOpen.forEach((el) => {
    el.addEventListener('click', onButtonClick);
  })

  buttonClose.addEventListener('click', onButtonCloseClick);
  window.addEventListener('click', onWindowClick);
  window.addEventListener('keydown', onWindowKeydown);
}



