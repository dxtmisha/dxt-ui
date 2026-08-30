// md5:344583478c1d2cc481180746b9d10b5b true
export type MaskPropsToken = {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
};
export type MaskPropsBasic = {
    /** Field name */
    name?: string;
    /** Current value */
    value?: string | number;
    /** Default value */
    valueDefault?: string | number;
    /** Currency code */
    currency?: string;
    /** Whether to hide currency symbol */
    currencyHide?: boolean;
    /** Allow only complete mask values */
    fullOnly?: boolean;
    /** Mask string or list of mask formats */
    mask?: MaskList;
    /** Special mask properties */
    special?: MaskSpecialProp;
    /** Mask matching rules */
    match?: MaskMatchItem;
    /** Retain group formatting in value */
    groupSave?: boolean;
    /** Validation pattern */
    pattern?: FieldPatternItemOrFunction;
    /** Additional validation function or pattern */
    check?: FieldPatternItemOrFunction;
    /** Fraction part settings */
    fraction?: MaskFractionItem;
    /** Mask type */
    type?: MaskTypeItem;
    /** Representation view */
    view?: string;
    /** Additional attributes for the input element */
    inputAttrs?: Partial<HTMLInputElement>;
    /** Representation language */
    language?: string;
};
/** Input mask configuration properties. @keywords mask, input, props */
export type MaskProps = MaskPropsBasic & MaskPropsToken;
/** Default configuration values for input mask. @keywords mask, defaults, options */
export declare const defaultsMask: {
    visible: boolean;
    special: string;
    match: RegExp;
    type: string;
    groupSave: boolean;
    view: string;
};