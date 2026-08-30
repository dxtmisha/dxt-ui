// md5:c92358d2971e8ef9f03a19f5b0651aa3 true
/** Manages translation file loading and resolution based on language and location. @keywords translation, localization, i18n, files, translate */
export declare class TranslateFile {
    /** Creates an instance of TranslateFile. @keywords constructor, init */
    constructor(data?: TranslateDataFile, language?: string | (() => string), location?: string | (() => string));
    /** Checks if translation files exist for the current location or language. @keywords isFile, check, exists */
    isFile(): boolean;
    /** Retrieves the current location identifier. @keywords getLocation, location, path */
    getLocation(): string;
    /** Retrieves the current active language code. @keywords getLanguage, language, locale, i18n */
    getLanguage(): string;
    /** Loads and returns the translation data list for the current location. @keywords getList, load, translations, async */
    getList(): Promise<TranslateDataFileList | undefined>;
    /** Registers additional translation file data sources. @keywords add, register, files */
    add(data: TranslateDataFile): void;
}