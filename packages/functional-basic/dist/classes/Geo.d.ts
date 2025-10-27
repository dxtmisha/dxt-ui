import { GeoItem, GeoItemFull } from '../types/geoTypes';
/**
 * Base class for working with geographic data.
 *
 * Базовый класс для работы с географическими данными.
 */
export declare class Geo {
    private static storage;
    private static location;
    private static item;
    private static language;
    private static timezone;
    /**
     * Information about the current country.
     *
     * Информация об текущей стране.
     */
    static get(): GeoItemFull;
    /**
     * Current country.
     *
     * Текущая страна.
     */
    static getCountry(): string;
    /**
     * Current language.
     *
     * Текущий язык.
     */
    static getLanguage(): string;
    /**
     * Full format according to the standard.
     *
     * Полный формат согласно стандарту.
     */
    static getStandard(): string;
    /**
     * Returns the first day of the week.
     *
     * Возвращает первый день недели.
     */
    static getFirstDay(): string;
    /**
     * Full format.
     *
     * Полный формат.
     */
    static getLocation(): string;
    /**
     * Obtaining processed data.
     *
     * Получение обработанных данных.
     */
    static getItem(): GeoItemFull;
    /**
     * Returns the full list of countries.
     *
     * Возвращает полный список стран.
     */
    static getList(): GeoItem[];
    /**
     * Returns the data about the country by its full code.
     *
     * Возвращает данные о стране по ее полному коду.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    static getByCode(code?: string): GeoItemFull;
    /**
     * Returns the full data by language and country.
     *
     * Возвращает полные данные по языку и стране.
     * @param code string in the form of language-country/ строка в виде язык-страна
     */
    static getByCodeFull(code: string): GeoItem | undefined;
    /**
     * Returns the full data by country.
     *
     * Возвращает полные данные по стране.
     * @param country country/ страна
     */
    static getByCountry(country: string): GeoItem | undefined;
    /**
     * Returns the full data by language.
     *
     * Возвращает полные данные по языку.
     * @param language language/ язык
     */
    static getByLanguage(language: string): GeoItem | undefined;
    /**
     * Retrieving the default timezone.
     *
     * Получение временной зоны по умолчанию
     */
    static getTimezone(): number;
    /**
     * Retrieving the default timezone (formatted view).
     *
     * Получение временной зоны по умолчанию (отформатированный вид).
     */
    static getTimezoneFormat(): string;
    /**
     * Determines the current country by its full name.
     *
     * Определяет текущую страну по ее полному названию.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    static find(code: string): GeoItemFull;
    /**
     * Returns a complete string with the country code and language.
     *
     * Возвращает полную строку с кодом страны и языка.
     * @param item object with data about the current country/
     * объект с данными об текущей стране
     */
    static toStandard(item: GeoItem): string;
    /**
     * Changes the data by the full code.
     *
     * Изменяет данные по полному коду.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     * @param save save the result/ сохранить результат
     */
    static set(code: string, save?: boolean): void;
    /**
     * Changing the default timezone for transmitted dates.
     *
     * Изменение временной зоны по умолчанию для отправляемых дат
     * @param timezone new time zone/ новая временная зона
     */
    static setTimezone(timezone: number): void;
    /**
     * Determines the current location.
     *
     * Определяет текущую локацию.
     */
    private static findLocation;
    /**
     * Determines the current language.
     *
     * Определяет текущий язык.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    private static findLanguage;
    /**
     * Returns the country code by its full language-country.
     *
     * Возвращает код страны по ее полному язык-страна.
     * @param code country code/ код страна
     */
    private static toCountry;
    /**
     * Returns the language code by its full language-country.<br>
     * Возвращает код языка по его полному язык-страна.
     * @param code country code/ код страна
     */
    private static toLanguage;
    /**
     * Adding missing data.<br>
     * Добавление недостающих данных.
     * @param item object with data about the current country/
     * объект с данными об текущей стране
     */
    private static toFull;
}
