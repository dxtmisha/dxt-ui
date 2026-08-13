// md5:46c41e5d8f305fef33f9f74b86a2d117 true
/** Class for managing field HTML input attributes. @keywords field attributes input validation */
export declare class FieldAttributesInclude {
    /** Creates an instance of FieldAttributesInclude. @keywords constructor create */
    constructor(props: FieldAllProps, type?: FieldTypeInclude | undefined, pattern?: FieldPatternInclude | undefined, inputMode?: FieldInputModeInclude | undefined, typeDefault?: string);
    /** Gets base attribute list. @keywords attributes list */
    get list(): Record<string, any>;
    /** Gets validation attribute list. @keywords attributes check validation */
    get listForCheck(): Record<string, any>;
    /** Gets input-specific attribute list. @keywords attributes input */
    get listForInput(): Record<string, any>;
    /** Gets checkbox-specific attribute list. @keywords attributes checkbox */
    get listForCheckbox(): Record<string, any>;
    protected getAttributes(): (keyof typeof this.props)[];
    protected getInputAttributes(): (keyof typeof this.props)[];
    protected getData(attributes: (keyof typeof this.props)[]): Record<string, any>;
}