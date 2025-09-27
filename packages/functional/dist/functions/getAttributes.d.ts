import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
/**
 * Gets a list of attributes of an element.
 *
 * Получает список атрибутов у элемента.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function getAttributes<E extends ElementOrWindow>(element?: ElementOrString<E>): Record<string, string | undefined>;
