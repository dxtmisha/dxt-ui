import { GeoItem, GeoItemFull } from '../types/geoTypes';
/**
 * Base class for working with geographic data.
 * Includes methods for determining location, language, and time zone.
 *
 * Базовый класс для работы с географическими данными.
 * Включает методы для определения местоположения, языка и часового пояса.
 */
export declare class GeoInstance {
    /**
     * Data storage instance for geo code/
     * Экземпляр хранилища данных для гео-кода
     */
    private storage;
    /**
     * Current location code (e.g., 'en-GB')/
     * Текущий код локации (например, 'en-GB')
     */
    private location;
    /**
     * Detailed data about the current country/
     * Детальные данные о текущей стране
     */
    private item;
    /**
     * Current language code/
     * Текущий код языка
     */
    private language;
    /**
     * Current time zone offset in minutes/
     * Текущее смещение часового пояса в минутах
     */
    private timezone;
    /**
     * Constructor.
     * Initializes the location and related data.
     *
     * Конструктор.
     * Инициализирует местоположение и связанные с ним данные.
     */
    constructor();
    /**
     * Getting information about the current country.
     *
     * Получение информации о текущей стране.
     * @returns object with geo data / объект с гео-данными
     */
    get(): GeoItemFull;
    /**
     * Getting the current country code.
     *
     * Получение текущего кода страны.
     * @returns country code / код страны
     */
    getCountry(): string;
    /**
     * Getting the current language code.
     *
     * Получение текущего кода языка.
     * @returns language code / код языка
     */
    getLanguage(): string;
    /**
     * Getting the full format according to the standard (language-country).
     *
     * Получение полного формата согласно стандарту (язык-страна).
     * @returns standard string / строка стандарта
     */
    getStandard(): string;
    /**
     * Getting the first day of the week for the current country.
     *
     * Получение первого дня недели для текущей страны.
     * @returns first day of the week / первый день недели
     */
    getFirstDay(): string;
    /**
     * Getting the current location string.
     *
     * Получение строки текущего местоположения.
     * @returns location string / строка местоположения
     */
    getLocation(): string;
    /**
     * Getting processed data including the current language.
     *
     * Получение обработанных данных, включая текущий язык.
     * @returns full geo item data / полные данные гео-объекта
     */
    getItem(): GeoItemFull;
    /**
     * Returns the full list of available countries.
     *
     * Возвращает полный список доступных стран.
     * @returns list of geo items / список гео-объектов
     */
    getList(): GeoItem[];
    /**
     * Returns data about the country by its code.
     *
     * Возвращает данные о стране по ее коду.
     * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
     * @returns full geo data / полные гео-данные
     */
    getByCode(code?: string): GeoItemFull;
    /**
     * Returns full data by language and country combination.
     *
     * Возвращает полные данные по комбинации языка и страны.
     * @param code string in the form of language-country / строка в виде язык-страна
     * @returns geo item or undefined / гео-объект или undefined
     */
    getByCodeFull(code: string): GeoItem | undefined;
    /**
     * Returns full data by country code.
     *
     * Возвращает полные данные по коду страны.
     * @param country country code / код страны
     * @returns geo item or undefined / гео-объект или undefined
     */
    getByCountry(country: string): GeoItem | undefined;
    /**
     * Returns full data by language code.
     *
     * Возвращает полные данные по коду языка.
     * @param language language code / код языка
     * @returns geo item or undefined / гео-объект или undefined
     */
    getByLanguage(language: string): GeoItem | undefined;
    /**
     * Returns the current time zone offset in minutes.
     *
     * Возвращает текущее смещение часового пояса в минутах.
     * @returns timezone offset / смещение часового пояса
     */
    getTimezone(): number;
    /**
     * Returns the current time zone offset in a formatted string (e.g., '+03:00').
     *
     * Возвращает текущее смещение часового пояса в виде отформатированной строки (например, '+03:00').
     * @returns formatted timezone string / отформатированная строка часового пояса
     */
    getTimezoneFormat(): string;
    /**
     * Finds the country data by its code or name.
     *
     * Ищет данные о стране по ее коду или названию.
     * @param code country code / код страны
     * @returns full geo data / полные гео-данные
     */
    find(code: string): GeoItemFull;
    /**
     * Converts a geo item to its standard string representation (language-country).
     *
     * Преобразует гео-объект в его стандартное строковое представление (язык-страна).
     * @param item geo item data / данные гео-объекта
     * @returns standard code string / строка стандартного кода
     */
    toStandard(item: GeoItem): string;
    /**
     * Updates the current location and related data.
     *
     * Обновляет текущее местоположение и связанные с ним данные.
     * @param code location code (e.g., 'en-GB') / код локации (например, 'en-GB')
     * @param save whether to save the location in storage / нужно ли сохранять местоположение в хранилище
     */
    set(code: string, save?: boolean): void;
    /**
     * Updates the default time zone offset.
     *
     * Обновляет смещение часового пояса по умолчанию.
     * @param timezone new time zone offset / новое смещение часового пояса
     */
    setTimezone(timezone: number): void;
    /**
     * Internal method to determine the initial location.
     *
     * Внутренний метод для определения начального местоположения.
     * @returns initial location code / начальный код локации
     */
    private findLocation;
    /**
     * Internal method to determine the language from the provided code.
     *
     * Внутренний метод для определения языка по предоставленному коду.
     * @param code location or language code / код локации или языка
     * @returns language code / код языка
     */
    private findLanguage;
    /**
     * Internal method to extract country code from a location string.
     *
     * Внутренний метод для извлечения кода страны из строки локации.
     * @param code combined string / комбинированная строка
     * @returns country code / код страны
     */
    private toCountry;
    /**
     * Internal method to extract language code from a location string.
     *
     * Внутренний метод для извлечения кода языка из строки локации.
     * @param code combined string / комбинированная строка
     * @returns language code / код языка
     */
    private toLanguage;
    /**
     * Internal method to fill missing fields in a geo item.
     *
     * Внутренний метод для заполнения отсутствующих полей в гео-объекте.
     * @param item basic geo item / базовый гео-объект
     * @returns full geo item data / полные данные гео-объекта
     */
    private toFull;
}
