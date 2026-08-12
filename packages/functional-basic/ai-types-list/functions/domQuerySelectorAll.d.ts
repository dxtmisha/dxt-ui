// md5:4b46cfb805805c6a5c23fe018dc072f2
/**
 * Selects all elements that match the specified selectors.
 *
 * Выбирает все элементы, которые соответствуют указанным селекторам.
 * @param selectors selectors / селекторы
 * @returns list of matched elements or undefined / список найденных элементов или undefined
 */
export declare function domQuerySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E> | undefined;
