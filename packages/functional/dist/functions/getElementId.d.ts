import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
/**
 * Returns the identifier (ID) of the element or creates it if the element has no ID.
 *
 * Возвращает идентификатор (ID) элемента или создает его, если у элемента нет ID.
 * @param element element from which you obtain an ID/ элемент, с которого получаете ID
 * @param selector selectors for matching/ селекторов для сопоставления
 */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;
