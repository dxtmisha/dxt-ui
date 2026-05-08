/**
 * The function performs the specified function once for each element in the object
 * and returns an array with the results of executing the function.
 *
 * Функция выполняет указанную функцию один раз для каждого элемента в объекте
 * и возвращает массив с результатами выполнения функции.
 * @param data object for iteration / объект для перебора
 * @param callback a function to execute for each element in the array /
 * функция, которая будет вызвана для каждого элемента
 * @param saveUndefined if true, the function will return an array with undefined values /
 * если true, функция вернет массив с undefined значениями
 * @returns returns an array with the results of executing the function / возвращает массив с результатами выполнения функции
 */
export declare function forEach<T, R, D extends T[] | Record<string, T> | Map<string, T> | Set<T> = T[] | Record<string, T> | Map<string, T> | Set<T>, K = D extends T[] ? number : string>(data: D & (T[] | Record<string, T> | Map<string, T> | Set<T>), callback: (item: T, key: K, dataMain: typeof data) => R, saveUndefined?: boolean): R[];
