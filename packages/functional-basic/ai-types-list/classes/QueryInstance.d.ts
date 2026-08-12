// md5:86db03cdd1c3e7241616cbff2af715b2
import { UrlInstanceAbstract } from './UrlInstanceAbstract';
/**
 * Class for working with data stored in the URL query parameters.
 *
 * Класс для работы с данными, сохранёнными в query-параметрах URL.
 */
export declare class QueryInstance extends UrlInstanceAbstract {
    /**
     * Initializes query data and registers the popstate listener.
     *
     * Инициализирует данные query-параметров и регистрирует слушатель popstate.
     * @returns this instance / текущий экземпляр
     */
    protected init(): this;
    /**
     * Obtaining data from the URL string.
     *
     * Получение данных из строки URL.
     * @returns Record<string, any> query data / данные query-параметров
     */
    protected getLocation(): Record<string, any>;
    /**
     * Update query string in URL.
     *
     * Обновление строки query-параметров в URL.
     * @returns this instance / текущий экземпляр
     */
    protected update(): this;
}
