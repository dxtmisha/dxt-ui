// md5:70b081cad6e5c1f00959fc510de480d5
/**
 * Returns data by their path.
 *
 * Возвращает данные по их пути.
 * @param item object for work/ объект для работы
 * @param path data path/ путь к данным
 * @returns data by path or undefined / данные по пути или undefined
 */
export declare function getItemByPath<T extends Record<string, any>, R = string>(item: T, path: string): R | undefined;
