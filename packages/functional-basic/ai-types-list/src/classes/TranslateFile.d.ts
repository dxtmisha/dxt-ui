// md5:c92358d2971e8ef9f03a19f5b0651aa3 true
/** Handles loading and resolving translation files. @keywords i18n, translation, file, loader */
export declare class TranslateFile {
    /** Initializes the translate file loader. @keywords i18n, localization, loader */
    constructor(data?: TranslateDataFile, language?: string | (() => string), location?: string | (() => string));
    /** Checks if translation files exist for the current location or language. @keywords isFile, exists, check */
    isFile(): boolean;
    /** Gets the current location. @keywords getLocation, location, path */
    getLocation(): string;
    /** Gets the current language code. @keywords getLanguage, language, lang */
    getLanguage(): string;
    /** Loads and returns translations for the current location. @keywords getList, load, translations */
    getList(): Promise<TranslateDataFileList | undefined>;
    /** Adds translation file definitions to the loader. @keywords add, register, files */
    add(data: TranslateDataFile): void;
}