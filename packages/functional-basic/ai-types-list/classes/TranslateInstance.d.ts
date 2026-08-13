// md5:60d80f958d253127bbfbd917dd764643 true
/** Class for managing translations and fetching localized text. @keywords translate translation i18n localization */
export declare class TranslateInstance {
    /** @param url URL for getting translations @param propsName Property name for getting translations @param files List of files with translations */
    constructor(url?: string, propsName?: string, files?: TranslateFile);
    /** Gets translated text by its code. @keywords translate text get */
    get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Gets translated text synchronously by its code. @keywords translate text sync */
    getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Gets a list of translations by an array of codes. @keywords translate list async */
    getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Gets a list of translations synchronously by an array of codes. @keywords translate list sync */
    getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Adds a list of translated texts. @keywords translate add */
    add(names: string | string[]): Promise<void>;
    /** Adds texts in synchronous mode. @keywords translate add sync */
    addSync(data: Record<string, string>): void;
    /** Adds data via query or directly based on runtime environment. @keywords translate add normal sync */
    addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Adds texts synchronously by location. @keywords translate add location */
    addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /** Adds texts synchronously from a file. @keywords translate add file */
    addSyncByFile(data: TranslateDataFile): void;
    /** Sets the translation endpoint URL. @keywords translate url set */
    setUrl(url: string): this;
    /** Sets the translation property name. @keywords translate propsName set */
    setPropsName(name: string): this;
    /** Sets the API read mode. @keywords translate readApi set */
    setReadApi(value: boolean): this;
}