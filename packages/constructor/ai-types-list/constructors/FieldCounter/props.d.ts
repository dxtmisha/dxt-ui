// md5:ffdcbc24c5198f4063a61996514397b8 true
export type FieldCounterPropsToken = {};
export type FieldCounterPropsBasic = TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & {
    /** Current counter value. @keywords counter, value */
    counter?: string | number;
    /** Maximum allowed character length. @keywords maxlength, limit */
    maxlength?: string | number;
    /** Remaining character threshold when screen reader starts announcing. @keywords screen reader, accessibility */
    maxlengthOnce?: string | number;
    /** Template for formatting the counter display. @keywords template, format */
    template?: string;
    /** Unique identifier for the element. @keywords id, identifier */
    id?: string;
};
/** Properties for the field counter component. @keywords field counter, props */
export type FieldCounterProps = FieldCounterPropsBasic & FieldCounterPropsToken;
/** Default values for field counter properties. @keywords defaults, field counter */
export declare const defaultsFieldCounter: {};