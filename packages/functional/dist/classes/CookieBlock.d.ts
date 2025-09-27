import { DataStorage } from './DataStorage';
/**
 * Class for changing cookie access status.
 *
 * Класс для изменения статуса доступа к куки.
 */
export declare class CookieBlock {
    static storage: DataStorage<boolean>;
    /**
     * Obtaining status.
     *
     * Получение статуса.
     */
    static get(): boolean;
    /**
     * Changing status.
     *
     * Изменение статуса.
     * @param value value to be changed/ значение, на которое будет изменен
     */
    static set(value: boolean): void;
}
