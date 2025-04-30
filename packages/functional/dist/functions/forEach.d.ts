/**
 * The function performs the specified function once for each element in the object.
 * And returns an array with the results of executing the function.
 *
 * Функция выполняет указанную функцию один раз для каждого элемента в объекте.
 * И возвращает массив с результатами выполнения функции.
 * @param data object for iteration/ объект для перебора
 * @param callback a function to execute for each element in the array/
 * функция, которая будет вызвана для каждого элемента
 */
export declare function forEach<T, R, D extends T[] | Record<string, T> | Map<string, T> = T[] | Record<string, T> | Map<string, T>, K = D extends T[] ? number : string>(data: D & (T[] | Record<string, T> | Map<string, T>), callback: (item: T, key: K, dataMain: typeof data) => R): R[];
