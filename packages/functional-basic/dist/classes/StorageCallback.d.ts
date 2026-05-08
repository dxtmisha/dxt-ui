/**
 * A class for working with callback lists for storage.
 *
 * Класс для работы со списками обратных вызовов для хранилища.
 */
export declare class StorageCallback<T = any, Callback = (value: T) => void | Promise<void>> {
    protected name: string;
    protected group: string;
    /**
     * Returns an instance of the class by name.
     *
     * Возвращает экземпляр класса по названию.
     * @param name storage name/ название хранилища
     * @param group storage group/ группа хранилища
     * @returns StorageCallback instance / экземпляр StorageCallback
     */
    static getInstance<T>(name: string, group?: string): StorageCallback<T, (value: T) => void | Promise<void>>;
    protected callbacks: {
        callback: Callback;
        isOnce?: boolean;
    }[];
    protected loading: boolean;
    /**
     * Constructor for initialization.
     *
     * Конструктор для инициализации.
     * @param name storage name/ название хранилища
     * @param group storage group/ группа хранилища
     */
    constructor(name: string, group?: string);
    /**
     * Returns the loading state.
     *
     * Возвращает состояние загрузки.
     * @returns loading state / состояние загрузки
     */
    isLoading(): boolean;
    /**
     * Returns the storage name.
     *
     * Возвращает название хранилища.
     * @returns storage name / название хранилища
     */
    getName(): string;
    /**
     * Returns the loading state.
     *
     * Возвращает состояние загрузки.
     * @returns loading state / состояние загрузки
     */
    getLoading(): boolean;
    /**
     * Adds a callback to the list.
     *
     * Добавляет обратный вызов в список.
     * @param callback function for callbacks/ функция для обратных вызовов
     * @param isOnce whether the callback should only be called once/ является ли колбэк одноразовым
     * @returns this instance / текущий экземпляр
     */
    addCallback(callback: Callback, isOnce?: boolean): this;
    /**
     * Removes a callback from the list.
     *
     * Удаляет обратный вызов из списка.
     * @param callback function for callbacks/ функция для обратных вызовов
     * @returns this instance / текущий экземпляр
     */
    removeCallback(callback: Callback): this;
    /**
     * Preparation of data before launch.
     *
     * Подготовка данных перед запуском.
     * @returns this instance / текущий экземпляр
     */
    preparation(): this;
    /**
     * Execution of all callbacks.
     *
     * Выполнение всех обратных вызовов.
     * @param value storage data/ данные хранилища
     * @returns this instance / текущий экземпляр
     */
    run(value: T): Promise<this>;
}
