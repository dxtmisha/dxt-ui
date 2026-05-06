/**
 * Sends the storage data to the Figma plugin.
 *
 * Отправляет данные хранилища в плагин Figma.
 * @param name The name of the storage / Название хранилища
 * @param value The value to store / Значение для хранения
 * @param id The ID of the object / Идентификатор объекта
 */
export declare function sendStorage<T>(name: string, value: T, id?: string): void;
