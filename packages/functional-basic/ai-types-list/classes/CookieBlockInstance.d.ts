// md5:9cbf63c3ae2ec8b5225371945dd288b7
/**
 * Class for changing cookie access status.
 *
 * Класс для изменения статуса доступа к куки.
 */
export declare class CookieBlockInstance {
    /** Data storage for cookie block status / Хранилище данных для статуса блокировки куки */
    private storage;
    /**
     * Obtaining status.
     *
     * Получение статуса.
     * @returns boolean current block status/ текущий статус блокировки
     */
    get(): boolean;
    /**
     * Changing status.
     *
     * Изменение статуса.
     * @param value value to be changed/ значение, на которое будет изменен
     * @returns void / ничего не возвращает
     */
    set(value: boolean): void;
}
