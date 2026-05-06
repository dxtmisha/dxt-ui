/**
 * Fetch client storage data.
 *
 * Получить данные клиентского хранилища.
 * @param name Storage name / Имя хранилища
 * @param callback Callback function / Функция обратного вызова
 * @param defaultValue Default value / Значение по умолчанию
 * @param isOnce Call only once / Вызвать только один раз
 */
export declare function fetchClientStorage<T>(name: string, callback: (value: T) => void, defaultValue?: T, isOnce?: boolean): void;
