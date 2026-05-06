import { FigmaPostAbstract } from './FigmaPostAbstract';
/**
 * Messenger for the Figma UI side (frontend).
 *
 * Мессенджер для стороны UI Figma (frontend).
 */
export declare class FigmaUiMessenger extends FigmaPostAbstract {
    /**
     * Getting an instance of the class for working with Figma UI messenger (frontend).
     *
     * Получение экземпляра класса для работы с мессенджером UI Figma (frontend).
     * @returns current instance/ текущий экземпляр
     */
    static getInstance(): FigmaUiMessenger;
    /**
     * Sends a message to the Figma plugin.
     *
     * Отправляет сообщение в плагин Figma.
     * @param type The type of the message / Тип сообщения
     * @param message The message data / Данные сообщения
     */
    post<Message>(type: string, message?: Message): void;
    /**
     * Initializes the listener using the window message event.
     *
     * Инициализирует слушатель, используя событие message объекта window.
     */
    protected prepare(): void;
}
