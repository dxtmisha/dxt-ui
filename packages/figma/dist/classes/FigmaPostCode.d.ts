/**
 * Class for managing the unique code used for verifying messages between the Figma plugin and UI.
 *
 * Класс для управления уникальным кодом, используемым для проверки сообщений между плагином Figma и UI.
 */
export declare class FigmaPostCode {
    private static code;
    private static isEditable;
    /**
     * Checks if the provided code matches the current post code.
     *
     * Проверяет, совпадает ли предоставленный код с текущим кодом сообщения.
     * @param code The code to check / Проверяемый код
     */
    static is(code: string): boolean;
    /**
     * Returns the current post code.
     *
     * Возвращает текущий код сообщения.
     */
    static get(): string;
    /**
     * Sets a new post code. Can only be called once.
     *
     * Устанавливает новый код сообщения. Можно вызвать только один раз.
     * @param code The new code to set / Новый код для установки
     */
    static set(code: string): void;
}
