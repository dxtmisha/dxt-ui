import { FigmaPostAbstract } from './FigmaPostAbstract';
/**
 * Messenger for the Figma plugin side (backend).
 *
 * Мессенджер для стороны плагина Figma (backend).
 */
export declare class FigmaPluginMessenger extends FigmaPostAbstract {
    /**
     * Sends a message to the Figma UI.
     *
     * Отправляет сообщение в UI Figma.
     * @param type The type of the message / Тип сообщения
     * @param message The message data / Данные сообщения
     */
    post<Message>(type: string, message?: Message): void;
    /**
     * Initializes the listener using the figma.ui.onmessage API.
     *
     * Инициализирует слушатель, используя API figma.ui.onmessage.
     */
    protected prepare(): void;
}
