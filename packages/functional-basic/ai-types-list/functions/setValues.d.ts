// md5:a42bb0bd33d619c870807af6c556e387 true
export interface SetValuesOptions {
    multiple?: boolean;
    maxlength?: number;
    alwaysChange?: boolean;
    notEmpty?: boolean;
}
/** Modifies, toggles, or updates single or multiple values based on configuration options. @keywords setValues, selection, toggle, update */
export declare function setValues<T>(selected: T | T[] | null | undefined, value: T, options?: SetValuesOptions): T | T[] | undefined;