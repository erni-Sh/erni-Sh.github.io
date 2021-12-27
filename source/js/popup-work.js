const popup = document.querySelector('.popup-work');

if (popup) {
  const buttonOpen = document.querySelector('.practice__invite-btn'); // Кнопка открытия
  const buttonClose = document.querySelector('.popup-work__close');
  const firstInput = popup.querySelector('.input__field');
  const buttonPay = popup.querySelector('.popup-work__button-pay');
  const linkConfidentiality = popup.querySelector('.popup-work__confidentiality');
  const page = document.querySelector('html');

  const openPopup = () => {
    popup.classList.remove('popup-work--hidden');

    page.style.overflowY = 'hidden';
    firstInput.focus();
  }

  const closePopup = () => {
    popup.classList.add('popup-work--hidden');
    page.style.overflowY = 'auto';
  }

  const onWindowClick = (evt) => {
    const isPopup = evt.target.closest('.popup-work__form');
    const isButton = evt.target.closest('.practice__invite-btn'); // Кнопка открытия
    const isPopupConfidentiality = evt.target.closest('.popup-confidentiality');

    if (!isPopup && !isButton & !isPopupConfidentiality) {
      closePopup()
    }
  }

  const onWindowKeydown = (evt) => {
    if (!popup.classList.contains('popup-work--hidden')) {
      if (evt.key === "Esc" || evt.key === "Escape") {
        closePopup();
      }
    }
  }

  const onLinkConfidentialityBlur = () => {
    if (buttonPay.classList.contains('btn--disabled')) {
      buttonClose.focus();
    }
  }

  const onbuttonPayBlur = (evt) => {
    evt.preventDefault();
    buttonClose.focus();
  }

  const onButtonClick = (evt) => {
    evt.preventDefault();
    openPopup();
  }

  const onButtonCloseClick = (evt) => {
    evt.preventDefault();
    closePopup();
  }

  const onButtonPayClick = (evt) => {
    evt.preventDefault();
    closePopup();
  }

  buttonOpen.addEventListener('click', onButtonClick);
  buttonClose.addEventListener('click', onButtonCloseClick);
  buttonPay.addEventListener('click', onButtonPayClick);
  window.addEventListener('click', onWindowClick);
  window.addEventListener('keydown', onWindowKeydown);

  linkConfidentiality.addEventListener('blur', onLinkConfidentialityBlur);
  buttonPay.addEventListener('blur', onbuttonPayBlur);
}

