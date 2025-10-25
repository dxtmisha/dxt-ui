/**
 * Class for working with localStorage.
 *
 * Класс для работы с localStorage.
 */
export declare class DataStorage<T> {
    private name;
    private isSession;
    /**
     * Changing the prefix in key names. Should be called at the beginning of the code.
     *
     * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
     * @param newPrefix new prefix/ новый префикс
     */
    static setPrefix(newPrefix: string): void;
    private value?;
    private age?;
    /**
     * Constructor
     * @param name value name/ название значения
     * @param isSession should we use a session/ использовать ли сессию
     */
    constructor(name: string, isSession?: boolean);
    /**
     * Getting data from local storage.
     *
     * Получение данных из локального хранилища.
     * @param defaultValue default value/ значение по умолчанию
     * @param cache cache time/ время кэширования
     */
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    /**
     * Changing data in storage.
     *
     * Изменение данных в хранилище.
     * @param value new values/ новые значения
     */
    set(value?: T | (() => T)): T | undefined;
    /**
     * Removing data from storage.
     *
     * Удаление данных из хранилища.
     */
    remove(): this;
    /**
     * Clearing all data from storage.
     *
     * Очистка всех данных из хранилища.
     */
    update(): this;
    /**
     * Checks for storage time limit.
     *
     * Проверяет на лимит времени хранения.
     * @param cache cache time/ время кэширования
     */
    private isCache;
    /**
     * Returns an object for working with storage.
     *
     * Возвращает объект для работы с хранилищем.
     */
    private getMethod;
    /**
     * Getting the storage key name.
     *
     * Получение имени ключа в хранилище.
     */
    private getIndex;
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     */
    private getValue;
    /**
     * Filling in the data from storage.
     *
     * Заполнение данными из хранилища.
     */
    private make;
}
