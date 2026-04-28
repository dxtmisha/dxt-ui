/**
 * Class for temporary storage of entered symbols to keep input position during fast typing.
 *
 * Класс для временного хранения вводимых символов, чтобы не терять позицию ввода при быстром наборе.
 */
export declare class MaskBuffer {
    /** Stored characters/ Сохранённые символы */
    protected chars: string[];
    /** Flag: buffering started/ Флаг: буферизация запущена */
    protected start: boolean;
    /**
     * Checks if buffer has records.
     *
     * Проверяет, есть ли записи в буфере.
     */
    is(): boolean;
    /**
     * Returns list of all buffered chars.
     *
     * Возвращает список всех символов в буфере.
     */
    get(): string[];
    /**
     * Adds new symbol to buffer.
     *
     * Добавляет новый символ в буфер.
     * @param key symbol to add / символ для добавления
     */
    add(key: string): this;
    /**
     * Handles fast input: if buffering active — adds symbol, else starts buffering.
     *
     * Обрабатывает быстрый ввод: если буфер активен — добавляет символ, иначе запускает буферизацию.
     * @param key symbol to process / символ для обработки
     * @returns true if processing should continue outside buffer / true если ввод продолжается вне буфера
     */
    go(key: string): boolean;
    /**
     * Starts buffering.
     *
     * Запускает буферизацию.
     */
    goStart(): this;
    /**
     * Resets all data (chars + start flag).
     *
     * Сбрасывает все данные (символы и флаг запуска).
     */
    reset(): this;
    /**
     * Clears stored characters only.
     *
     * Очищает только сохранённые символы.
     */
    resetChars(): this;
}
