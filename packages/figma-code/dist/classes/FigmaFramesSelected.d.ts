import { FigmaStorage } from './FigmaStorage';
/**
 * Class for managing and synchronizing the list of selected frames in the Figma plugin.
 *
 * Класс для управления и синхронизации списка выбранных фреймов в плагине Figma.
 */
export declare class FigmaFramesSelected {
    /** Storage for persistent selected frames / Хранилище для постоянного списка выбранных фреймов */
    protected static storage: FigmaStorage<string[]>;
    /** Cached list of selected frame IDs / Кэшированный список идентификаторов выбранных фреймов */
    protected static selected: string[] | undefined;
    /**
     * Checks if a frame with the given ID is selected.
     *
     * Проверяет, выбран ли фрейм с указанным идентификатором.
     * @param id Frame ID / Идентификатор фрейма
     * @returns `true` if selected / `true`, если выбран
     */
    static has(id: string): boolean;
    /**
     * Retrieves the current list of selected frame IDs, using cache if available.
     *
     * Получает текущий список идентификаторов выбранных фреймов, используя кэш при его наличии.
     * @returns An array of selected frame IDs / Массив идентификаторов выбранных фреймов
     */
    static get(): string[];
    /**
     * Adds a frame ID to the selection list.
     *
     * Добавляет идентификатор фрейма в список выбора.
     * @param id Frame ID / Идентификатор фрейма
     */
    static add(id: string): void;
    /**
     * Removes a frame ID from the selection list.
     *
     * Удаляет идентификатор фрейма из списка выбора.
     * @param id Frame ID / Идентификатор фрейма
     */
    static remove(id: string): void;
    /**
     * Toggles the selection state of a frame.
     *
     * Переключает состояние выбора фрейма.
     * @param id Frame ID / Идентификатор фрейма
     * @param selected Whether to select or deselect / Выбрать или отменить выбор
     */
    static toggle(id: string, selected: boolean): void;
    /**
     * Sets up communication via the plugin messenger to handle selection state.
     *
     * Настраивает связь через мессенджер плагина для управления состоянием выбора.
     */
    static send(): void;
    /**
     * Retrieves the raw selection list from storage.
     *
     * Получает необработанный список выбора из хранилища.
     * @returns An array of frame IDs / Массив идентификаторов фреймов
     */
    protected static getList(): string[];
    /**
     * Updates the selection list in cache and storage.
     *
     * Обновляет список выбора в кэше и хранилище.
     * @param selected New selection list / Новый список выбора
     */
    protected static set(selected: string[]): void;
    /**
     * Posts the current selection list to the Figma UI.
     *
     * Публикует текущий список выбора в интерфейс Figma.
     */
    protected static post(): void;
}
