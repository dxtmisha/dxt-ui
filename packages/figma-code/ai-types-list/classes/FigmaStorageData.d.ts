// md5:0021379a6a8d400cdee162823d70966e true
export type FigmaStorageDataValue<T> = {
    value: T;
    age: number;
};
/** Class for managing cached Figma storage data @keywords figma, storage, cache */
export declare class FigmaStorageData<T> {
    /** Initializes storage data item with key name and optional cache duration @keywords constructor, init, cache */
    constructor(name: string, cache?: number | undefined);
    /** Checks if the value is null or undefined @keywords isNull, empty, check */
    isNull(): boolean;
    /** Checks whether stored data is within the cache time limit @keywords isCache, expiration, ttl */
    isCache(): boolean;
    /** Checks if value is defined and within cache validity @keywords isValue, valid */
    isValue(): boolean;
    /** Retrieves the current stored value @keywords get, read, value */
    get(): T | undefined;
    /** Retrieves the timestamp age of the value @keywords getAge, timestamp, age */
    getAge(): number | undefined;
    /** Retrieves the storage key name @keywords getName, key */
    getName(): string;
    /** Retrieves the cache expiration limit @keywords getCache, ttl, cache */
    getCache(): number | undefined;
    /** Sets the value and its update timestamp @keywords set, assign */
    set(value?: T, age?: number): this;
    /** Sets data from a FigmaStorageDataValue object @keywords setByObject, import */
    setByObject(value?: FigmaStorageDataValue<T>): this;
    /** Sets the stored value @keywords setValue */
    setValue(value?: T): this;
    /** Sets the timestamp age @keywords setAge, timestamp */
    setAge(age?: number): this;
    /** Updates value and sets age to current timestamp @keywords update, refresh */
    update(value?: T): this;
    /** Clears stored data @keywords remove, clear, delete */
    remove(): this;
    /** Converts data into a FigmaStorageDataValue representation @keywords toValue, serialize */
    toValue(): FigmaStorageDataValue<T>;
}