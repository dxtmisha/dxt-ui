/**
 * Class for changing cookie access status.
 *
 * Класс для изменения статуса доступа к куки.
 */
export declare class CookieBlockInstance {
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
     * @returns void
     */
    set(value: boolean): void;
}
