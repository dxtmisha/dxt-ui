// md5:e985e79a9f3b2f7957c78ab196a27ffb true
import { FigmaStorageData, type FigmaStorageDataValue } from './FigmaStorageData';

/** Client storage manager for Figma plugins. @keywords figma, clientStorage, persistence, cache */
export declare class FigmaClientStorage<T> {
    /** Gets or creates a cached client storage instance by name. @keywords figma, clientStorage, singleton, factory */
    static getInstance<T>(name: string): FigmaClientStorage<T>;
    /** Clears all cached client storage instances in the registry. @keywords figma, reset, cache, clear */
    static reset(): void;
    /** Initializes client storage with an optional cache expiration time. @keywords figma, constructor, clientStorage */
    constructor(name: string, cache?: number | undefined);
    /** Retrieves data from client storage with an optional fallback. @keywords figma, get, read, clientStorage */
    get<D extends T | (() => T | Promise<T>) | undefined = undefined>(defaultValue?: D): Promise<[D] extends [undefined] ? T | undefined : T>;
    /** Saves or updates data in client storage. @keywords figma, set, write, persist, clientStorage */
    set(value?: T | (() => T | Promise<T>)): Promise<T | undefined>;
    /** Deletes data from client storage. @keywords figma, remove, delete, clientStorage */
    remove(): Promise<this>;
}