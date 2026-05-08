import { TranslateFile } from './TranslateFile';
import { TranslateCode, TranslateDataFile, TranslateList } from '../types/translateTypes';
/**
 * Class for getting the translated text.
 *
 * Класс для получения переведенного текста.
 */
export declare class TranslateInstance {
    protected url: string;
    protected propsName: string;
    protected readonly files: TranslateFile;
    /** List of translations/ Список переводов */
    protected readonly data: Record<string, string>;
    /** Cache of codes to get/ Кэш кодов для получения */
    protected cache: string[];
    /** List of resolves for promises/ Список разрешений для промисов */
    protected resolveList: (() => void)[];
    /** Timeout for getting translations/ Таймаут для получения переводов */
    protected timeout?: any;
    /** Flag indicating whether to read from the API/ Флаг, указывающий, нужно ли читать из API */
    protected isReadApi: boolean;
    /**
     * Creates an instance of the class.
     *
     * Создает экземпляр класса.
     * @param url URL for getting translations/ URL для получения переводов
     * @param propsName Property name for getting translations/ Имя свойства для получения переводов
     * @param files List of files with translations/ Список файлов с переводами
     */
    constructor(url?: string, propsName?: string, files?: TranslateFile);
    /**
     * Getting the translation text by its code.
     *
     * Получение текста перевода по его коду.
     * @param name code name/ название кода
     * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
     * @returns translation text / текст перевода
     */
    get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
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
    getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /**
     * Getting a list of translations by an array of text codes.
     *
     * Получение списка переводов по массиву кодов текста.
     * @param names list of codes to get translations/ список кодов для получения переводов
     * @returns object with translations / объект с переводами
     */
    getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /**
     * Getting a list of translations by an array of text codes.
     *
     * Получение списка переводов по массиву кодов текста.
     * @param names list of codes to get translations/ список кодов для получения переводов
     * @param first If set to false, returns an empty string if there is no text/
     * если установлено false, возвращает пустую строку, если нет текста
     * @returns object with translations / объект с переводами
     */
    getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /**
     * Added a list of translated texts.
     *
     * Добавлен список переведенных текстов.
     * @param names list of codes to get translations/ список кодов для получения переводов
     * @returns promise resolving when translations are added / промис, разрешающийся после добавления переводов
     */
    add(names: string | string[]): Promise<void>;
    /**
     * Adds texts in sync mode.
     *
     * Добавляет тексты в режиме синхронизации.
     * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
     */
    addSync(data: Record<string, string>): void;
    /**
     * Adding data in the form of a query or directly, depending on the execution environment.
     *
     * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
     * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
     * @returns promise / промис
     */
    addNormalOrSync(data: Record<string, string>): Promise<void>;
    /**
     * Adds texts synchronously by location.
     *
     * Добавляет тексты синхронно по местоположению.
     * @param data list of texts by location/ список текстов по местоположению
     */
    addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /**
     * Adds texts synchronously from the file.
     *
     * Добавляет тексты синхронно из файла.
     * @param data file with translations/ файл с переводами
     */
    addSyncByFile(data: TranslateDataFile): void;
    /**
     * Change the path to the script for obtaining the translation.
     *
     * Изменить путь к скрипту для получения перевода.
     * @param url path to the script/ путь к скрипту
     */
    setUrl(url: string): this;
    /**
     * Change the name of the property to get the translation.
     *
     * Изменить имя свойства для получения перевода.
     * @param name property name/ имя свойства
     */
    setPropsName(name: string): this;
    /**
     * Change the read mode from the API.
     *
     * Изменить режим чтения из API.
     * @param value read mode/ режим чтения
     */
    setReadApi(value: boolean): this;
    /**
     * Checks for translation by code, taking into account fallback options.
     *
     * Проверяет наличие перевода по коду с учетом запасных вариантов.
     * @param name code name/ название кода
     * @returns boolean / логическое значение
     */
    protected hasName(name: string): boolean;
    /**
     * Retrieves translation text by code, returning the first matching fallback.
     *
     * Получает текст перевода по коду, возвращая первое совпадение из запасных вариантов.
     * @param name code name/ название кода
     * @returns translation text or undefined / текст перевода или undefined
     */
    protected getText(name: string): string | undefined;
    /**
     * Getting the full title for translation.
     *
     * Получение полного названия для перевода.
     * @param name code name/ название кода
     * @returns full title / полное название
     */
    protected getName(name: string): string;
    /**
     * Getting the title for translation by language.
     *
     * Получение названия для перевода по языку.
     * @param name code name/ название кода
     * @returns title by language / название по языку
     */
    protected getNameByLanguage(name: string): string;
    /**
     * Getting the title for translation globally.
     *
     * Получение названия для перевода глобально.
     * @param name code name/ название кода
     * @returns global title / глобальное название
     */
    protected getNameByGlobal(name: string): string;
    /**
     * Returns a list of names that are not yet in the list.
     *
     * Возвращает список имен, которых еще нет в списке.
     * @param names list of codes to get translations/ список кодов для получения переводов
     * @returns list of missing names / список отсутствующих имен
     */
    protected getNamesNone(names: string | string[]): string[];
    /**
     * Getting the list of translations from the server.
     *
     * Получение списка переводов с сервера.
     * @returns promise with record of translations / промис с записью переводов
     */
    protected getResponse(): Promise<Record<string, string>>;
    /**
     * Replaces the text with the specified values.
     *
     * Заменяет текст на указанные значения.
     * @param text text to replace/ текст для замены
     * @param replacement values for replacement/ значения для замены
     * @returns replaced text / замененный текст
     */
    protected replacement(text: string, replacement?: string[] | Record<string, string | number>): any;
    /**
     * Adding translation data from the server.
     *
     * Добавление данных по переводу с сервера.
     * @returns promise / промис
     */
    protected make(): Promise<void>;
    /**
     * Adding translation data from the list.
     *
     * Добавление данных по переводу из списка.
     * @param list list of translations/ список переводов
     */
    protected makeList(list: Record<string, string>): void;
}
