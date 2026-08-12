// md5:d61f93dbb96845a9c569ac1099aee55a
import { GeoIntl } from './GeoIntl';
import { GeoFlagItem, GeoFlagNational, GeoItemFull } from '../types/geoTypes';
export declare const GEO_FLAG_ICON_NAME = "f";
/**
 * Class for working with flags and geographic information.
 * Provides methods for retrieving country names, languages, and flag icons.
 *
 * Класс для работы с флагами и географической информацией.
 * Предоставляет методы для получения названий стран, языков и иконок флагов.
 */
export declare class GeoFlag {
    protected code: string;
    /**
     * Mapping of country codes to flag icon names/
     * Словарь соответствия кодов стран названиям иконок флагов
     */
    static flags: Record<string, string>;
    /**
     * Constructor
     *
     * Конструктор
     * @param code country and language code / код страны и языка
     */
    constructor(code?: string);
    /**
     * Returns information about the country and its flag.
     *
     * Возвращает информацию о стране и её флаге.
     * @param code country code / код страны
     * @returns country information / информация о стране
     */
    get(code?: string): GeoFlagItem | undefined;
    /**
     * Returns information about the language and its flag.
     *
     * Возвращает информацию о языке и его флаге.
     * @param code country code / код страны
     * @returns language information / информация о языке
     */
    getLanguage(code?: string): GeoFlagItem | undefined;
    /**
     * Returns the country code.
     *
     * Возвращает код страны.
     * @returns country code / код страны
     */
    getCode(): string;
    /**
     * Returns the identifier of the flag icon.
     *
     * Возвращает идентификатор иконки флага.
     * @param code country code / код страны
     * @returns flag icon identifier / идентификатор иконки флага
     */
    getFlag(code?: string): string | undefined;
    /**
     * Returns a list of countries based on the provided codes.
     * If no codes are provided, returns all available countries.
     *
     * Возвращает список стран на основе предоставленных кодов.
     * Если коды не переданы, возвращает все доступные страны.
     * @param codes array of country codes / массив кодов стран
     * @param sort whether to sort the list / сортировать ли список
     * @returns list of countries / список стран
     */
    getList(codes?: string[], sort?: boolean): GeoFlagItem[];
    /**
     * Returns a list of languages based on the provided codes.
     * If no codes are provided, returns all available languages.
     *
     * Возвращает список языков на основе предоставленных кодов.
     * Если коды не переданы, возвращает все доступные языки.
     * @param codes array of country codes / массив кодов стран
     * @param sort whether to sort the list / сортировать ли список
     * @returns list of languages / список языков
     */
    getListLanguage(codes?: string[], sort?: boolean): GeoFlagItem[];
    /**
     * Returns a list of countries in their national languages.
     *
     * Возвращает список стран на их национальных языках.
     * @param codes array of country codes / массив кодов стран
     * @param sort whether to sort the list / сортировать ли список
     * @returns list of countries with national names / список стран с национальными названиями
     */
    getNational(codes?: string[], sort?: boolean): GeoFlagNational[];
    /**
     * Returns a list of languages in their national names.
     *
     * Возвращает список языков на их национальных названиях.
     * @param codes array of country codes / массив кодов стран
     * @param sort whether to sort the list / сортировать ли список
     * @returns list of languages with national names / список языков с национальными названиями
     */
    getNationalLanguage(codes?: string[], sort?: boolean): GeoFlagNational[];
    /**
     * Changes the current locale/location.
     *
     * Изменяет текущую локаль/местоположение.
     * @param code country and language code / код страны и языка
     * @returns this / текущий экземпляр
     */
    setCode(code: string): this;
    /**
     * Returns a special object for formatting and translations.
     *
     * Возвращает специальный объект для работы с форматированием и переводами.
     * @protected
     * @returns GeoIntl instance / экземпляр GeoIntl
     */
    protected getLocation(): GeoIntl;
    /**
     * Returns a list of country codes to retrieve data from.
     *
     * Возвращает список кодов стран для получения данных.
     * @param codes optional array of codes / опциональный массив кодов
     * @protected
     * @returns array of codes / массив кодов
     */
    protected getCodes(codes?: string[]): string[];
    /**
     * Getting the name of the language.
     *
     * Получение названия языка.
     * @param data object with information of data/ объект с информацией данных
     */
    protected getLanguageName(data: GeoItemFull): string;
    /**
     * Getting the name of the country.
     *
     * Получение названия страны.
     * @param data object with information of data/ объект с информацией данных
     */
    protected getCountry(data: GeoItemFull): string;
}
