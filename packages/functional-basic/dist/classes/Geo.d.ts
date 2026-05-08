import { GeoInstance } from './GeoInstance';
import { GeoItem, GeoItemFull } from '../types/geoTypes';
/**
 * Static class for working with geographical data.
 * Provides a centralized interface for managing locale, country, and time zone.
 *
 * Статический класс для работы с географическими данными.
 * Предоставляет централизованный интерфейс для управления локалью, страной и часовым поясом.
 */
export declare class Geo {
    /**
     * Returns a request-isolated instance of GeoInstance.
     *
     * Возвращает изолированный в рамках запроса экземпляр GeoInstance.
     * @returns GeoInstance instance / экземпляр GeoInstance
     */
    static getObject(): GeoInstance;
    /**
     * Returns information about the current country and language.
     *
     * Возвращает информацию о текущей стране и языке.
     * @returns current geo item / данные о текущей гео-позиции
     */
    static get(): GeoItemFull;
    /**
     * Returns the 2-letter code of the current country.
     *
     * Возвращает 2-буквенный код текущей страны.
     * @returns country code / код страны
     */
    static getCountry(): string;
    /**
     * Returns the 2-letter code of the current language.
     *
     * Возвращает 2-буквенный код текущего языка.
     * @returns language code / код языка
     */
    static getLanguage(): string;
    /**
     * Returns the combined locale string in the standard format (e.g., 'en-US').
     *
     * Возвращает комбинированную строку локали в стандартном формате (например, 'ru-RU').
     * @returns standard locale string / стандартная строка локали
     */
    static getStandard(): string;
    /**
     * Returns the code for the first day of the week for the current locale.
     *
     * Возвращает код первого дня недели для текущей локали.
     * @returns first day of the week / первый день недели
     */
    static getFirstDay(): string;
    /**
     * Returns the current location string.
     *
     * Возвращает текущую строку местоположения.
     * @returns location string / строка местоположения
     */
    static getLocation(): string;
    /**
     * Returns fully processed geo data updated with the current language.
     *
     * Возвращает полностью обработанные гео-данные с учетом текущего языка.
     * @returns full geo item data / полные данные гео-объекта
     */
    static getItem(): GeoItemFull;
    /**
     * Returns the complete list of available countries and regions.
     *
     * Возвращает полный список доступных стран и регионов.
     * @returns list of geo items / список гео-объектов
     */
    static getList(): GeoItem[];
    /**
     * Returns geo data by country or language code from the global database.
     *
     * Возвращает гео-данные по коду страны или языка из глобальной базы данных.
     * @param code country or language code / код страны или языка
     * @returns full geo data / полные гео-данные
     */
    static getByCode(code?: string): GeoItemFull;
    /**
     * Returns exact geo data by searching for the full locale match (e.g., 'en-US').
     *
     * Возвращает точные гео-данные по поиску полного совпадения локали (например, 'ru-RU').
     * @param code full locale string / полная строка локали
     * @returns geo item or undefined / гео-объект или undefined
     */
    static getByCodeFull(code: string): GeoItem | undefined;
    /**
     * Returns geo data for a specific country by its code.
     *
     * Возвращает гео-данные для конкретной страны по её коду.
     * @param country country code / код страны
     * @returns geo item or undefined / гео-объект или undefined
     */
    static getByCountry(country: string): GeoItem | undefined;
    /**
     * Returns geo data for a specific language by its code.
     *
     * Возвращает гео-данные для конкретного языка по его коду.
     * @param language language code / код языка
     * @returns geo item or undefined / гео-объект или undefined
     */
    static getByLanguage(language: string): GeoItem | undefined;
    /**
     * Returns the time zone offset in minutes for the current context.
     *
     * Возвращает смещение часового пояса в минутах для текущего контекста.
     * @returns timezone offset / смещение часового пояса
     */
    static getTimezone(): number;
    /**
     * Returns the formatted time zone string (e.g., '+00:00') for the current context.
     *
     * Возвращает отформатированную строку часового пояса (например, '+03:00') для текущего контекста.
     * @returns formatted timezone / отформатированная временная зона
     */
    static getTimezoneFormat(): string;
    /**
     * Finds or determines the geo data for a given code. Alias for getByCode.
     *
     * Находит или определяет гео-данные для заданного кода. Алиас для getByCode.
     * @param code country or language code / код страны или языка
     * @returns full geo data / полные гео-данные
     */
    static find(code: string): GeoItemFull;
    /**
     * Returns a standard concatenated string for a geo item (e.g., 'en-US').
     *
     * Возвращает стандартную объединенную строку для гео-объекта (например, 'ru-RU').
     * @param item geo item data / данные гео-объекта
     * @returns standard string / стандартная строка
     */
    static toStandard(item: GeoItem): string;
    /**
     * Sets the current geographical location. Updates the instance state.
     *
     * Устанавливает текущее географическое положение. Обновляет состояние инстанса.
     * @param code location code / код локации
     * @param save whether to persist the change in storage / сохранять ли изменения в хранилище
     */
    static set(code: string, save?: boolean): void;
    /**
     * Sets a custom time zone offset for the current context.
     *
     * Устанавливает кастомное смещение часового пояса для текущего контекста.
     * @param timezone timezone offset in minutes / смещение часового пояса в минутах
     */
    static setTimezone(timezone: number): void;
}
