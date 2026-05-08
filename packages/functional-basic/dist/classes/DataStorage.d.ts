import { ErrorCenterInstance } from './ErrorCenterInstance';
/**
 * Class for working with localStorage and sessionStorage.
 * Includes support for prefixes, expiration time, and request isolation in SSR.
 *
 * Класс для работы с localStorage и sessionStorage.
 * Включает поддержку префиксов, времени жизни данных и изоляцию запросов в SSR.
 */
export declare class DataStorage<T> {
    private name;
    private isSession;
    private errorCenter;
    /**
     * Changing the prefix in key names. Should be called at the beginning of the code.
     *
     * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
     * @param newPrefix new prefix/ новый префикс
     * @returns void
     */
    static setPrefix(newPrefix: string): void;
    /**
     * The current value stored in memory/
     * Текущее значение, хранящееся в памяти
     */
    private value?;
    /**
     * The timestamp of when the value was last saved/
     * Временная метка последнего сохранения значения
     */
    private age?;
    /**
     * Constructor.
     *
     * Конструктор.
     * @param name value name / название значения
     * @param isSession should we use a session/ использовать ли сессию
     * @param errorCenter error center instance/ экземпляр центра ошибок
     */
    constructor(name: string, isSession?: boolean, errorCenter?: ErrorCenterInstance);
    /**
     * Getting data from storage.
     *
     * Получение данных из хранилища.
     * @param defaultValue default value / значение по умолчанию
     * @param cache cache time in seconds / время кэширования в секундах
     * @returns stored value or default value / сохраненное значение или значение по умолчанию
     */
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    /**
     * Changing data in storage.
     *
     * Изменение данных в хранилище.
     * @param value new values / новые значения
     * @returns the set value / установленное значение
     */
    set(value?: T | (() => T)): T | undefined;
    /**
     * Removing data from storage.
     *
     * Удаление данных из хранилища.
     * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
     */
    remove(): this;
    /**
     * Syncing data from storage.
     *
     * Синхронизация данных из хранилища.
     * @returns this instance / текущий экземпляр
     */
    update(): this;
    /**
     * Checks for storage time limit.
     *
     * Проверяет данные на истечение срока хранения (кэша).
     * @param cache cache time in seconds / время кэширования в секундах
     * @returns true if data is valid / true, если данные актуальны
     */
    private isCache;
    /**
     * Returns an object for working with storage (localStorage or sessionStorage).
     *
     * Возвращает объект для работы с хранилищем (localStorage или sessionStorage).
     * @returns Storage object or undefined / объект Storage или undefined
     */
    private getMethod;
    /**
     * Getting the storage key name with prefix.
     *
     * Получение имени ключа в хранилище с учетом префикса.
     * @returns key name / имя ключа
     */
    private getIndex;
    /**
     * Getting raw data from storage.
     *
     * Получение "сырых" данных из хранилища.
     * @returns parsed data or undefined / распарсенные данные или undefined
     */
    private getValue;
    /**
     * Filling in the data from storage into memory.
     *
     * Заполнение данных из хранилища в память.
     * @returns this instance / текущий экземпляр
     */
    private make;
}
