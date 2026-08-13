// md5:40b1abbf51e5cd177c9ff28f0d290c34 true
export type SelectableAreaPropsToken = {};
/** Basic selectable area properties @keywords selectable area props basic configuration */
export type SelectableAreaPropsBasic = ModelPropsSelected & {
    /** Disables selection @keywords disabled boolean */
    disabled?: boolean;
    /** Active status @keywords active continuous selection */
    active?: boolean;
    /** Selected values @keywords selected values string array */
    selected?: string | string[];
    /** Wrapper HTML tag @keywords tag html element */
    tag?: string;
};
export type SelectableAreaProps = SelectableAreaPropsBasic & SelectableAreaPropsToken;
/** Default properties @keywords defaults selectable area tag */
export declare const defaultsSelectableArea: {
    tag: string;
};