// md5:63fb04524fc6b353279915e2ddf1cc49 true
/** Checks input value matching with another element. @keywords field match check */
export declare class FieldMatchInclude {
    /** Creates an instance of FieldMatchInclude. @keywords constructor */
    constructor(props: FieldAllProps, element: FieldElementInclude, value: FieldValueInclude, text?: TextInclude | undefined);
    /** Checks whether matching verification is enabled. @keywords is enabled check */
    is(): boolean;
    /** Returns selector used to find external element. @keywords get selectors */
    getSelectors(): string | HTMLInputElement | undefined;
    /** Returns validation error text. @keywords get validation message */
    getValidationMessage(): string;
    /** Checks value against external element. @keywords check validation */
    check(): FieldValidationItem | undefined;
}