import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
/**
 * Returns the identifier (ID) of the element or creates it if the element has no ID.
 *
 * Возвращает идентификатор (ID) элемента или создает его, если у элемента нет ID.
 * @param element element from which you obtain an ID / элемент, с которого получаете ID
 * @param selector selectors for matching / селекторов для сопоставления
 * @returns element ID / идентификатор элемента
 */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;
/**
 * Initializes the getElementId function with a listener.
 *
 * Инициализирует функцию getElementId слушателем.
 * @param newListener listener that returns the current request context / слушатель, возвращающий контекст текущего запроса
 * @warning Initialization is mandatory for correct functioning of SSR on both server and client sides./
 * Инициализация обязательна для корректной работы SSR как на стороне сервера, так и на стороне клиента.
 * @example
 * ```typescript
 * import { useId } from 'vue'
 * import { initGetElementId } from '@dxtmisha/functional-basic'
 *
 * initGetElementId(() => useId())
 * ```
 */
export declare function initGetElementId(newListener: () => string | number): void;
