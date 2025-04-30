import { GeoIntl } from './GeoIntl';
import { GeoFlagItem, GeoFlagNational, GeoItemFull } from '../types/geoTypes';
export declare const GEO_FLAG_ICON_NAME = "@flag";
/**
 * Class for working with Flags.
 *
 * Класс для работы с Флагами.
 */
export declare class GeoFlag {
    protected code: string;
    static flags: Record<string, string>;
    /**
     * Constructor
     * @param code country and language code/ код страны и языка
     */
    constructor(code?: string);
    /**
     * Returns information about the country and its flag.
     *
     * Возвращает информацию о стране и её флаге.
     * @param code country code/ код страны
     */
    get(code?: string): GeoFlagItem | undefined;
    /**
     * Getting a link to the flag.
     *
     * Получение ссылки на флаг.
     * @param code country code/ код страны
     */
    getFlag(code?: string): string | undefined;
    /**
     * Getting a list of countries by an array of codes.
     *
     * Получение списка стран по массиву с кодами.
     * @param codes country code/ код страны
     */
    getList(codes?: string[]): GeoFlagItem[];
    /**
     * Getting a list of countries by an array of codes in national language.
     *
     * Получение списка стран по массиву с кодами на национальный язык.
     * @param codes country code/ код страны.
     */
    getNational(codes?: string[]): GeoFlagNational[];
    /**
     * To change the location.
     *
     * Изменить местоположение.
     * @param code country and language code/ код страны и языка
     */
    setCode(code: string): this;
    /**
     * Returns a special object for formatting.
     *
     * Возвращает специальный объект для работы с форматированием.
     */
    protected getLocation(): GeoIntl;
    /**
     * Returns a list of countries to retrieve data from.
     *
     * Возвращает список стран для получения данных.
     * @param codes country code/ код страны
     */
    protected getCodes(codes?: string[]): string[];
    /**
     * Getting the name of the language.
     *
     * Получение названия языка.
     * @param data object with information of data/ объект с информацией данных
     */
    protected getLanguage(data: GeoItemFull): string;
    /**
     * Getting the name of the country.
     *
     * Получение названия страны.
     * @param data object with information of data/ объект с информацией данных
     */
    protected getCountry(data: GeoItemFull): string;
}
