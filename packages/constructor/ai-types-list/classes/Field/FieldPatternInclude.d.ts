// md5:abb0349b94753796dd9e884a477eeff9 true
/** Class for working with regular expression validation patterns. @keywords field pattern regex validator */
export declare class FieldPatternInclude {
    /** Creates a FieldPatternInclude instance. @keywords constructor create */
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined);
    /** Returns the compiled validation pattern string. @keywords pattern string */
    get item(): string | undefined;
}