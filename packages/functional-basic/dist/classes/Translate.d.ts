import { TranslateInstance } from './TranslateInstance';
import { TranslateCode, TranslateConfig, TranslateDataFile, TranslateList } from '../types/translateTypes';
/**
 * Class for getting the translated text.
 *
 * Класс для получения переведенного текста.
 */
export declare class Translate {
    protected static item?: TranslateInstance;
    /**
     * Getting the translation text by its code.
     *
     * Получение текста перевода по его коду.
     * @param name code name/ название кода
     * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
     * @returns translation text / текст перевода
     */
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /**
     * Returns a request-isolated instance of TranslateInstance.
     *
     * Возвращает изолированный в рамках запроса экземпляр TranslateInstance.
     * @returns TranslateInstance instance / экземпляр TranslateInstance
     */
    static getItem(): TranslateInstance;
    /**
     * Getting the translation text by its code (Sync).
     *
     * Получение текста перевода по его коду (Sync).
     * @param name code name/ название кода
     * @param first If set to false, returns an empty string if there is no text/
     * если установлено false, возвращает пустую строку, если нет текста
     * @param replacement If set, replaces the text with the specified values/
     * если установлено, заменяет текст на указанные значения
     * @returns translation text / текст перевода
     */
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /**
     * Getting a list of translations by an array of text codes.
     *
     * Получение списка переводов по массиву кодов текста.
     * @param names list of codes to get translations/ список кодов для получения переводов
     * @returns object with translations / объект с переводами
     */
    static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /**
     * Getting a list of translations by an array of text codes.
     *
     * Получение списка переводов по массиву кодов текста.
     * @param names list of codes to get translations/ список кодов для получения переводов
     * @param first If set to false, returns an empty string if there is no text/
     * если установлено false, возвращает пустую строку, если нет текста
     * @returns object with translations / объект с переводами
     */
    static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /**
     * Added a list of translated texts.
     *
     * Добавлен список переведенных текстов.
     * @param names list of codes to get translations/ список кодов для получения переводов
     */
    static add(names: string | string[]): Promise<void>;
    /**
     * Adds texts in sync mode.
     *
     * Добавляет тексты в режиме синхронизации.
     * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
     */
    static addSync(data: Record<string, string>): void;
    /**
     * Adding data in the form of a query or directly, depending on the execution environment.
     *
     * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
     * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
     */
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    /**
     * Adds texts synchronously by location.
     *
     * Добавляет тексты синхронно по местоположению.
     * @param data list of texts by location/ список текстов по местоположению
     */
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /**
     * Adds texts synchronously from the file.
     *
     * Добавляет тексты синхронно из файла.
     * @param data file with translations/ файл с переводами
     */
    static addSyncByFile(data: TranslateDataFile): void;
    /**
     * Change the path to the script for obtaining the translation.
     *
     * Изменить путь к скрипту для получения перевода.
     * @param url path to the script/ путь к скрипту
     */
    static setUrl(url: string): void;
    /**
     * Change the name of the property to get the translation.
     *
     * Изменить имя свойства для получения перевода.
     * @param name property name/ имя свойства
     */
    static setPropsName(name: string): void;
    /**
     * Change the read mode from the API.
     *
     * Изменить режим чтения из API.
     * @param value read mode/ режим чтения
     */
    static setReadApi(value: boolean): void;
    /**
     * Set the configuration for the translation.
     *
     * Установить конфигурацию для перевода.
     * @param config configuration/ конфигурация
     */
    static setConfig(config: TranslateConfig): void;
}
