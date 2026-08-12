// md5:2c81ae513006615cab7368c2ef8519e0
import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
/**
 * Returns window or element.
 *
 * Возвращает окно или элемент.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function getElementOrWindow<E extends ElementOrWindow>(element?: ElementOrString<E>): E | undefined;
