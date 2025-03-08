/**
 * Returns data by their path.
 *
 * Возвращает данные по их пути.
 * @param item object for work/ объект для работы
 * @param path data path/ путь к данным
 */
export declare function getItemByPath<T extends Record<string, any>>(item: T, path: string): string;
