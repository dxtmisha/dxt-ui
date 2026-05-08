import { CookieBlockInstance } from './CookieBlockInstance';
/**
 * Class for changing cookie access status.
 *
 * Класс для изменения статуса доступа к куки.
 */
export declare class CookieBlock {
    /**
     * Returns a request-isolated instance of CookieBlockInstance.
     *
     * Возвращает изолированный в рамках запроса экземпляр CookieBlockInstance.
     * @returns CookieBlockInstance instance / экземпляр CookieBlockInstance
     */
    static getItem(): CookieBlockInstance;
    /**
     * Obtaining status.
     *
     * Получение статуса.
     * @returns boolean current block status/ текущий статус блокировки
     */
    static get(): boolean;
    /**
     * Changing status.
     *
     * Изменение статуса.
     * @param value value to be changed/ значение, на которое будет изменен
     * @returns void
     */
    static set(value: boolean): void;
}
