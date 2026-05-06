/**
 * Sends the client storage data to the Figma plugin.
 *
 * Отправляет данные клиентского хранилища в плагин Figma.
 * @param name The name of the storage / Название хранилища
 * @param value The value to store / Значение для хранения
 */
export declare function sendClientStorage<T>(name: string, value: T): void;
