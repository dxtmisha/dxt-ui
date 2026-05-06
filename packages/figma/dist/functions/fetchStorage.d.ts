/**
 * Fetch storage data.
 *
 * Получить данные хранилища.
 * @param name Storage name / Имя хранилища
 * @param callback Callback function / Функция обратного вызова
 * @param id Storage id / Идентификатор хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @param isOnce Call only once / Вызвать только один раз
 */
export declare function fetchStorage<T>(name: string, callback: (value: T) => void, id?: string, defaultValue?: T, isOnce?: boolean): void;
