// md5:493a36d24e5a173f097ea975f1ea49ae
/**
 * Checks if object is Window.
 *
 * Проверяет, является ли объект Window.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export declare function isWindow<E>(element: E): element is Extract<E, Window>;
