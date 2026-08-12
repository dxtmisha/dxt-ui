// md5:2f29c98f05fcdc253243de74837fec13
/**
 * Returns a random element from an array, object, or value.
 * If the input is empty or invalid, returns undefined.
 *
 * Возвращает случайный элемент из массива, объекта или значения.
 * Если массив/объект пуст или значение отсутствует, возвращает undefined.
 * @param value input array, object, or value / входной массив, объект или значение
 * @returns random element or undefined if empty / случайный элемент или undefined, если пусто
 */
export declare function getRandomItem<T>(value?: T | T[] | Record<string, T>): T | undefined;
