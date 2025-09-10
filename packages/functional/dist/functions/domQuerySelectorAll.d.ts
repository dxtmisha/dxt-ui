/**
 * Selects all elements that match the specified selectors.
 *
 * Выбирает все элементы, которые соответствуют указанным селекторам.
 * @param selectors selectors/ селекторы
 */
export declare function domQuerySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E> | undefined;
