// md5:c60fd32e445c4428b9a710a672794add true
export type FieldCounterPropsToken = {};
export type FieldCounterPropsBasic = TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & {
    /** Current counter value @keywords counter, value */
    counter?: string | number;
    /** Maximum allowed length @keywords maxlength, limit */
    maxlength?: string | number;
    /** Characters remaining threshold for screen reader announcements @keywords maxlengthOnce, a11y, screenreader */
    maxlengthOnce?: string | number;
    /** Template for formatting the counter display @keywords template, format */
    template?: string;
    /** Unique identifier for the element @keywords id, identifier */
    id?: string;
};
export type FieldCounterProps = FieldCounterPropsBasic & FieldCounterPropsToken;
/** Default value for field counter property @keywords defaultsFieldCounter, default */
export declare const defaultsFieldCounter: {};