import { UiFigmaMessengerCallback, UiFigmaMessengerData, UiFigmaMessengerList } from '../types/figmaMessengerTypes';
/**
 * Base abstract class for managing messaging between the Figma plugin and UI.
 *
 * Базовый абстрактный класс для управления обменом сообщениями между плагином Figma и UI.
 */
export declare abstract class FigmaPostAbstract {
    protected isMake: boolean;
    protected readonly posts: UiFigmaMessengerList;
    /**
     * Sends a message to the other side.
     *
     * Отправляет сообщение на другую сторону.
     * @param type The type of the message / Тип сообщения
     * @param message The message data / Данные сообщения
     */
    abstract post<Message>(type: string, message?: Message): void;
    /**
     * Adds a callback listener for a specific message type.
     *
     * Добавляет колбэк-слушатель для определенного типа сообщения.
     * @param type The type of the message / Тип сообщения
     * @param callback The function to call when the message is received / Функция, вызываемая при получении сообщения
     * @param once Whether the callback should only be called once / Вызывать ли колбэк только один раз
     */
    add<Message>(type: string, callback: UiFigmaMessengerCallback<Message>, once?: boolean): this;
    /**
     * Removes a callback listener for a specific message type.
     *
     * Удаляет колбэк-слушатель для определенного типа сообщения.
     * @param type The type of the message / Тип сообщения
     * @param callback The function to remove / Функция для удаления
     */
    remove<Message>(type: string, callback: UiFigmaMessengerCallback<Message>): this;
    /**
     * Initializes the message listener.
     *
     * Инициализирует слушатель сообщений.
     */
    make(): this;
    /**
     * Sets up the actual environment-specific message listener.
     *
     * Настраивает фактический слушатель сообщений, зависящий от среды.
     */
    protected abstract prepare(): void;
    /**
     * Notifies all registered listeners for a specific message type.
     *
     * Уведомляет всех зарегистрированных слушателей для определенного типа сообщения.
     * @param type The type of the message / Тип сообщения
     * @param message The message data / Данные сообщения
     */
    protected notify<Message>(type: string, message: Message): void;
    /**
     * Internal message handler that filters by post code and notifies listeners.
     *
     * Внутренний обработчик сообщений, который фильтрует по коду сообщения и уведомляет слушателей.
     * @param data The received message data / Данные полученного сообщения
     */
    protected onMessage: (data?: UiFigmaMessengerData) => void;
}
