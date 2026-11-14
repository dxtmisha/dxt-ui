// md5:a52452cfe7ac491e067cd4d696e73a56 true
export type FigmaStorageDataValue<T> = {
    value: T;
    age: number;
};
/** Manages cached key-value data with expiration tracking for Figma storage. @keywords figma storage data cache */
export declare class FigmaStorageData<T> {
    /** Initializes storage data item with key name and optional cache TTL. @keywords figma storage data constructor init */
    constructor(name: string, cache?: number | undefined);
    /** Returns the current stored value. @keywords get read value */
    get(): T | undefined;
    /** Sets the stored value and timestamp. @keywords set write value age */
    set(value?: T, age?: number): this;
    /** Restores value and age from a storage data object. @keywords set by object restore */
    setByObject(value?: FigmaStorageDataValue<T>): this;
    /** Checks whether the cached value is still valid within its time limit. @keywords is cache valid expiration ttl */
    isCache(): boolean;
    /** Checks if the stored value is null or undefined. @keywords is null undefined empty */
    isNull(): boolean;
    /** Checks if the value is defined and within the valid cache duration. @keywords is value valid cached */
    isValue(): boolean;
    /** Returns the timestamp when the value was last updated. @keywords get age timestamp */
    getAge(): number | undefined;
    /** Returns the cache duration limit. @keywords get cache ttl duration */
    getCache(): number | undefined;
    /** Returns the storage key name. @keywords get name key */
    getName(): string;
    /** Sets the update timestamp. @keywords set age timestamp */
    setAge(age?: number): this;
    /** Sets the value without modifying the timestamp. @keywords set value */
    setValue(value?: T): this;
    /** Clears the stored value and timestamp. @keywords remove delete clear reset */
    remove(): this;
    /** Updates the value and sets timestamp to current time. @keywords update value touch */
    update(value?: T): this;
    /** Serializes current data into a storage payload object. @keywords to value serialize export */
    toValue(): FigmaStorageDataValue<T>;
}