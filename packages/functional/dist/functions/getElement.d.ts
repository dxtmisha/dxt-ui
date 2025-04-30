import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
/**
 * Returns the first Element in the document that matches the specified selector or the element.
 *
 * Возвращает первый Element документа, который соответствует указанному селектору или саму element.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function getElement<E extends ElementOrWindow, R extends Exclude<E, Window>>(element?: ElementOrString<E>): R | undefined;
