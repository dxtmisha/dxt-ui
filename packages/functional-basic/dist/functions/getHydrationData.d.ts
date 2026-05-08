/**
 * Retrieves and parses JSON data from a script tag in the DOM.
 *
 * Извлекает и парсит JSON данные из тега скрипта в DOM.
 * @param id script tag ID / ID тега скрипта
 * @param defaultValue default value if not found or invalid / значение по умолчанию, если не найдено или невалидно
 * @param remove remove script after reading / удалить скрипт после чтения
 * @returns parsed data or default value / распарсенные данные или значение по умолчанию
 */
export declare function getHydrationData<T>(id: string, defaultValue: T, remove?: boolean): T;
