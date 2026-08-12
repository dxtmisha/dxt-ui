// md5:638eca22a4518af0a1fc5fb681b386f5
import { UrlInstanceAbstract } from './UrlInstanceAbstract';
/**
 * Class for working with data stored in the URL hash.
 *
 * Класс для работы с данными, сохранёнными в хеше URL.
 */
export declare class HashInstance extends UrlInstanceAbstract {
    /**
     * Initializes hash data and registers the hashchange listener.
     *
     * Инициализирует данные хэша и регистрирует слушатель hashchange.
     * @returns this instance / текущий экземпляр
     */
    protected init(): this;
    /**
     * Obtaining data from the URL string.
     *
     * Получение данных из строки URL.
     * @returns Record<string, any> hash data / данные хэша
     */
    protected getLocation(): Record<string, any>;
    /**
     * Update hash string in URL.
     *
     * Обновление строки хэша в URL.
     * @returns this instance / текущий экземпляр
     */
    protected update(): this;
}
