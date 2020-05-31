import DOMHelper from './DOMHelper';

const Animation = {
  /**
   * @param {List} elements
   * @param {String} currentElementId
   * @param {String} animationCSSClass
   * @param {int} intervalRemoveTime
   */
  handleClassesSwapAnimation: (
    elements,
    currentElementId,
    animationCSSClass,
    intervalRemoveTime,
  ) => {
    const currentElementValue = DOMHelper.getClassListById(currentElementId).value;
    let nextElementValue = currentElementValue.replace(` ${animationCSSClass}`, '');

    elements.forEach((element) => {
      const elementValue = DOMHelper.getClassListById(element).value;
      DOMHelper.getClassListById(element).value = nextElementValue;
      nextElementValue = elementValue;
    });

    const removeInterval = setInterval(() => {
      DOMHelper.getClassListById(currentElementId).value = nextElementValue;
      DOMHelper.getClassListById(currentElementId).remove(animationCSSClass);
      clearInterval(removeInterval);
    }, intervalRemoveTime);
  },
};

export default Animation;
