export function enableAccardion() {
  const acc = document.querySelectorAll('.faq__accordion');

  acc.forEach((item) => {
    const arrow = item.querySelector('.arrow');
    const arrowFill = item.querySelector('.arrow__fill');
    item.addEventListener('click', function () {
      const panel = this.nextElementSibling;
      arrow.classList.toggle('arrow_down');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        arrowFill.style.fill = '#ffba07';
      } else {
        arrowFill.style.fill = '#00A0F9';
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}
