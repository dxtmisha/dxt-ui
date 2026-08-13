// md5:1d71862b95fc2500767d74c0da698542 true
/** Manages translation files and loading data @keywords translate, file, localization */
export declare class TranslateFile {
    protected language: string | (() => string);
    protected location: string | (() => string);
    /** Creates an instance of the class. @keywords constructor, translate */
    constructor(data?: TranslateDataFile, language?: string | (() => string), location?: string | (() => string));
    /** Checks if files exist for the current location or language. @keywords isFile, check, translate */
    isFile(): boolean;
    /** Returns the current location. @keywords getLocation, location, translate */
    getLocation(): string;
    /** Returns the current language. @keywords getLanguage, language, translate */
    getLanguage(): string;
    /** Returns translation list for the current location. @keywords getList, translations, load */
    getList(): Promise<TranslateDataFileList | undefined>;
    /** Adds a list of translation files. @keywords add, files, translate */
    add(data: TranslateDataFile): void;
}