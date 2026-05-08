import { TranslateDataFile, TranslateDataFileList } from '../types/translateTypes';
/**
 * Class for working with translation files.
 *
 * Класс для работы с файлами перевода.
 */
export declare class TranslateFile {
    protected language: string | (() => string);
    protected location: string | (() => string);
    /** List of files with translations/ Список файлов с переводами */
    protected files: TranslateDataFile;
    /** Data from files/ Данные из файлов */
    protected data: Record<string, TranslateDataFileList>;
    /**
     * Creates an instance of the class.
     *
     * Создает экземпляр класса.
     * @param data list of files/ список файлов
     * @param language language/ язык
     * @param location location/ местоположение
     */
    constructor(data?: TranslateDataFile, language?: string | (() => string), location?: string | (() => string));
    /**
     * Checks if there are files for the current location or language.
     *
     * Проверяет, есть ли файлы для текущего местоположения или языка.
     * @returns boolean / логическое значение
     */
    isFile(): boolean;
    /**
     * Returns the location.
     *
     * Возвращает местоположение.
     * @returns location / местоположение
     */
    getLocation(): string;
    /**
     * Returns the language.
     *
     * Возвращает язык.
     * @returns language / язык
     */
    getLanguage(): string;
    /**
     * Returns a list of translations from the file for the current location.
     *
     * Возвращает список переводов из файла для текущего местоположения.
     * @returns promise with list of translations / промис со списком переводов
     */
    getList(): Promise<TranslateDataFileList | undefined>;
    /**
     * Adds a list of files with translations.
     *
     * Добавляет список файлов с переводами.
     * @param data list of files/ список файлов
     */
    add(data: TranslateDataFile): void;
    /**
     * Returns the key for the current location from the list of files.
     *
     * Возвращает ключ для текущего местоположения из списка файлов.
     * @returns file key or undefined / ключ файла или undefined
     */
    protected getIndex(): string | undefined;
    /**
     * Returns a list of translations from the cache.
     *
     * Возвращает список переводов из кэша.
     * @param index file key/ ключ файла
     * @returns list of translations or undefined / список переводов или undefined
     */
    protected getByData(index: string): TranslateDataFileList | undefined;
    /**
     * Returns a list of translations from the file and caches the result.
     *
     * Возвращает список переводов из файла и кэширует результат.
     * @param index file key/ ключ файла
     * @returns promise with list of translations or undefined / промис со списком переводов или undefined
     */
    protected getByFile(index: string): Promise<TranslateDataFileList | undefined>;
}
