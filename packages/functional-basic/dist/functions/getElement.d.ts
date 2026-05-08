import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
/**
 * Returns the first Element in the document that matches the specified selector or the element.
 *
 * Возвращает первый Element документа, который соответствует указанному селектору или сам элемент.
 * @param element selectors for matching or an Element / селектор для сопоставления или Element
 * @returns found element or undefined / найденный элемент или undefined
 */
export declare function getElement<E extends ElementOrWindow, R extends Exclude<E, Window>>(element?: ElementOrString<E>): R | undefined;
