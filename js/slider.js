'use strict';

(function () {
  const radixTen = 10;

  let setControlNum = function (control, index) {
    control.id = 'ctrl-' + index;
  };

  let getControlNum = function (control) {
    return parseInt(control.id.slice(-1), radixTen);
  };

  let changeBtnState = function (controls, target) {
    if (target.classList.contains('slider__btn')) {
      controls.forEach(function (control) {
        control.classList.remove('slider__btn--active');
      });

      target.classList.add('slider__btn--active');
    }
  };

  window.slider = function (element) {
    let content = element.querySelector('.slider__content');
    let controlsWrapper = element.querySelector('.slider__controls');
    let controlsList = controlsWrapper.querySelectorAll('.slider__btn');
    let controls = Array.from(controlsList);
    let slide = element.querySelector('.slider__slide');
    let slideWidth = slide.offsetWidth;

    controls.forEach(function (control, index) {
      setControlNum(control, index);
    });

    let movePosition = function (content, controlNum) {
      content.style.left = -(slideWidth) * controlNum + 'px';
    };

    let onControlClick = function (evt) {
      evt.preventDefault();
      movePosition(content, getControlNum(evt.target));
      changeBtnState(controls, evt.target);
    }

    controlsWrapper.addEventListener('click', onControlClick);
  };
})();
