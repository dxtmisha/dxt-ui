// md5:9dcdd600e606130618a680a5b3adcf39 true
/** Class for getting the type of displayed keyboard. @keywords keyboard inputmode autocomplete */
export declare class FieldInputModeInclude {
    /** Creates an instance of FieldInputModeInclude. @keywords constructor */
    constructor(props: FieldAllProps, type: FieldTypeInclude);
    /** Returns the keyboard name. @keywords inputmode keyboard name */
    get item(): string | undefined;
    /** Returns the autocomplete mode. @keywords autocomplete mode */
    get autocomplete(): string | undefined;
}