/**
 * Selects the first element that matches the specified selectors.
 *
 * Выбирает первый элемент, который соответствует указанным селекторам.
 * @param selectors selectors/ селекторы
 */
export declare function domQuerySelector<E extends Element = Element>(selectors: string): E | undefined;
