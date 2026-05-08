import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
/**
 * Checks if an element is visible (not hidden by CSS and is in the DOM).
 * An element can be off-screen and still be considered visible.
 *
 * Проверяет, является ли элемент видимым (не скрыт через CSS и находится в DOM).
 * Элемент может находиться за пределами экрана и при этом считаться видимым.
 * @param elementSelectors selectors for matching or an Element/ селекторов для сопоставления или Element
 * @returns true if the element is visible, otherwise false/ true, если элемент является видимым, иначе false
 */
export declare function isElementVisible<E extends ElementOrWindow>(elementSelectors?: ElementOrString<E>): boolean;
