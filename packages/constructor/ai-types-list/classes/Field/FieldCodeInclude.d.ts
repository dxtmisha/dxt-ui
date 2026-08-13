// md5:74b10ab7bb80d395973cf96e49df0509 true
/** Class for processing standard error text. @keywords field, error, code, validation */
export declare class FieldCodeInclude {
    /** Creates an instance of FieldCodeInclude. @keywords constructor, init */
    constructor(props: FieldAllProps);
    /** Returns error text or undefined based on validity state. @keywords get, error, message */
    get(state?: ValidityState): string | undefined;
}