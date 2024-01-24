import EmblaCarousel from 'embla-carousel';
import {
  addPrevNextBtnsClickHandlers,
  addDotBtnsAndClickHandlers,
} from './carousel-buttons';

export const carousel = () => {
  if (window.innerWidth < 500) {
  }
  const OPTIONS = {
    loop: true,
    align: `${window.innerWidth < 500 ? 'center' : 'start'}`,
  };

  const emblaNode = document.querySelector('.embla');
  const viewportNode = emblaNode.querySelector('.embla__viewport');
  const prevBtn = emblaNode.querySelector('.embla__button--prev');
  const nextBtn = emblaNode.querySelector('.embla__button--next');
  const dotsNode = document.querySelector('.embla__dots');
  const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

  const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtn,
    nextBtn
  );
  const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
    emblaApi,
    dotsNode
  );

  emblaApi
    .on('destroy', removePrevNextBtnsClickHandlers)
    .on('destroy', removeDotBtnsAndClickHandlers);
};
