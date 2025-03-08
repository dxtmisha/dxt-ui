/**
 * Quick change of scroll at the element to the required element.
 *
 * Быстрое изменение скролла у элемента к нужному элементу.
 * @param selector the selected element, the scroll position of which needs to be changed/
 * выбранный элемент, положение скролла которого надо изменить
 * @param elementTo the element to which you need to scroll/ элемент, до которого надо проскроллить
 * @param elementCenter the element that needs to be centered/ элемент, который надо центрировать
 */
export declare function goScroll(selector: string, elementTo: HTMLElement | undefined, elementCenter?: HTMLElement): void;
