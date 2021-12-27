const popup = document.querySelector('.popup-payment');

if (popup) {
  const buttonOpen = document.querySelector('.course__payment-btn');
  const buttonClose = document.querySelector('.popup-payment__close');
  const firstInput = popup.querySelector('.input__field');
  const buttonPay = popup.querySelector('.popup-payment__button-pay');
  const linkConfidentiality = popup.querySelector('.popup-payment__confidentiality');
  const page = document.querySelector('html');

  const openPopup = () => {
    popup.classList.remove('popup-payment--hidden');

    page.style.overflowY = 'hidden';
    firstInput.focus();
  }

  const closePopup = () => {
    popup.classList.add('popup-payment--hidden');
    page.style.overflowY = 'auto';
  }

  const onWindowClick = (evt) => {
    const isPopup = evt.target.closest('.popup-payment__form');
    const isButton = evt.target.closest('.course__payment-btn');
    const isPopupConfidentiality = evt.target.closest('.popup-confidentiality');

    if (!isPopup && !isButton && !isPopupConfidentiality) {
      closePopup()
    }
  }

  const onWindowKeydown = (evt) => {
    if (!popup.classList.contains('popup-payment--hidden')) {
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

