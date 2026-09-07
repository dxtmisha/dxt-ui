// md5:92276be1131e34f6806f04f6cda7979d true
/** Client storage manager for Figma plugins. @keywords figma clientStorage storage persist */
export declare class FigmaClientStorage<T> {
    /** Gets or creates an instance for a storage key. @keywords getInstance singleton clientStorage */
    static getInstance<T>(name: string): FigmaClientStorage<T>;
    /** Initializes storage instance with a key name and optional cache duration. @keywords constructor init cache */
    constructor(name: string, cache?: number | undefined);
    /** Retrieves data from storage with an optional default value fallback. @keywords get read load retrieve */
    get(defaultValue?: T | (() => T | Promise<T>)): Promise<T | undefined>;
    /** Updates stored data with a value or resolver function. @keywords set write save update */
    set(value?: T | (() => T | Promise<T>)): Promise<T | undefined>;
    /** Deletes data from storage. @keywords remove delete clear */
    remove(): Promise<this>;
}