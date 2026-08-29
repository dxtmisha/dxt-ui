// md5:1d7237c022b205e3e9eface7ac6e4775 true
/** Modifies and updates selected values according to type and configuration settings. @keywords set values, update selection, multiple values, value modifier */
export declare function setValues<T>(selected: T | T[] | undefined, value: any, { multiple, maxlength, alwaysChange, notEmpty }: {
    multiple?: boolean | undefined;
    maxlength?: number | undefined;
    alwaysChange?: boolean | undefined;
    notEmpty?: boolean | undefined;
}): T | T[] | undefined;