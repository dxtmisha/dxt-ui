// md5:18f033c42f9f7e526738117027d26aef true
type SelectableAreaPropsToken = {};

export type SelectableAreaPropsBasic = ModelPropsSelected & {
    /** Disables selection functionality */
    disabled?: boolean;
    /** Active status for continuous selection */
    active?: boolean;
    /** Array or string of currently selected values */
    selected?: string | string[];
    /** HTML tag of the wrapper element */
    tag?: string;
};

export type SelectableAreaProps = SelectableAreaPropsBasic & SelectableAreaPropsToken;

/** Default property values for SelectableArea @keywords selectable-area, defaults */
export declare const defaultsSelectableArea: {
    tag: string;
};