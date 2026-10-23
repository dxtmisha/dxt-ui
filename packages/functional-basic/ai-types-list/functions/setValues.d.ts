// md5:6ac4f40270ef9c55da24ac2181b3796a true
export interface SetValuesOptions {
    multiple?: boolean;
    maxlength?: number;
    alwaysChange?: boolean;
    notEmpty?: boolean;
}
/** Modifies or toggles single or multiple selected values according to configuration options. @keywords set values, toggle selection, collection, update */
export declare function setValues<T>(selected: T | T[] | undefined, value: T, options?: SetValuesOptions): T | T[] | undefined;