import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
/**
 * Checks if an element is still in the DOM tree.
 *
 * Проверяет, находится ли еще элемент в дереве DOM.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function isInDom<E extends ElementOrWindow>(element?: ElementOrString<E>): boolean;
