import { GeoPhoneValue, GeoPhoneMap, GeoPhoneMapInfo } from '../types/geoTypes';
/**
 * A class for storing and processing phone number masks.
 *
 * Класс для хранения и обработка маски телефона.
 */
export declare class GeoPhone {
    protected static list: GeoPhoneValue[];
    protected static map: Record<string, GeoPhoneMap>;
    /**
     * Getting an object with information about the phone code and country.
     *
     * Получение объекта с информацией о телефонном коде и стране.
     * @param code country and language code/ код страны и языка
     */
    static get(code: string): GeoPhoneValue | undefined;
    /**
     * Getting information by phone.
     *
     * Получение информации по телефону.
     * @param phone phone number/ номер телефон
     */
    static getByPhone(phone: string): GeoPhoneMapInfo;
    /**
     * Retrieves complete mask data by country code.
     *
     * Получает полные данные о маске по коду страны.
     * @param code country and language code/ код страны и языка
     */
    static getByCode(code: string): GeoPhoneMap | undefined;
    /**
     * We get an array from a list of all phone numbers.
     *
     * Получаем массив из списка всех телефонных кодов.
     */
    static getList(): GeoPhoneValue[];
    /**
     * We get a map of a tree, sorted by its code.
     *
     * Получаем карту дерева, отсортированную по его коду.
     */
    static getMap(): Record<string, GeoPhoneMap>;
    /**
     * Convert to phone mask.
     *
     * Преобразовать в маску телефона.
     * @param phone phone number/ номер телефон
     * @param masks a mask to transform a phone number/ маска для преобразования номер телефон
     */
    static toMask(phone: string, masks?: string[]): string | undefined;
    /**
     * Deletes the country code from the input number.
     *
     * Удаляет код страны по входному номеру.
     * @param phone phone number/ номер телефон
     */
    static removeZero(phone: string): string;
    /**
     * Returns the symbol by the internal country code.
     *
     * Возвращает символ по коду внутри страны.
     * @param within internal country code/ код внутри страны
     */
    protected static getWithinSymbol(within: number | string): string;
    /**
     * Deletes all characters that do not belong to the mask.
     *
     * Удаляет все символы, не относящиеся к маске.
     * @param mask A mask to transform a phone number/ маска для преобразования номер телефон
     */
    protected static getUnnecessaryLength(mask: string): number;
    /**
     * Creating a list for the map.
     *
     * Формирование списка для карты.
     */
    protected static makeList(): void;
    /**
     * Creating a map for search.
     *
     * Создание карты для поиска.
     */
    protected static makeMap(): void;
    /**
     * The method parses a string argument and returns a floating point number.
     *
     * Метод принимает строку в качестве аргумента и возвращает десятичное число.
     * @param value the value to parse/ текстовая строка
     */
    protected static toNumber(value: string): string[];
    /**
     * Converts the phone to a standard.
     *
     * Преобразовывает телефон в стандарт.
     * @param phone phone number/ номер телефон
     * @param mask a mask to transform a phone number/ маска для преобразования номер телефон
     */
    protected static toStandard(phone: string, mask: string): string;
    /**
     * Replaces the first character with the internal country code
     *
     * Заменяет первый символ на код внутри страны.
     * @param mask a mask to transform a phone number/ маска для преобразования номер телефон
     * @param within internal country code/ код внутри страны
     */
    protected static toWithin(mask: string, within: number | string): string;
}
