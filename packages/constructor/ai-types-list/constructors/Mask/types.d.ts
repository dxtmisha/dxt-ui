// md5:0a75339595ef09f1328fd2473f6c0106 true
export type MaskComponents = {};
export type MaskEmits = {
    focus: [event: FocusEvent];
    blur: [event: FocusEvent];
    keydown: [event: KeyboardEvent];
    keyup: [event: KeyboardEvent];
    beforeinput: [event: InputEvent];
    input: [
        event: InputEvent,
        value: FieldValidationItem
    ];
    inputLite: [value: FieldValidationItem];
    change: [
        event: InputEvent,
        value: FieldValidationItem
    ];
    changeLite: [value: FieldValidationItem];
    paste: [event: ClipboardEvent];
    reset: [event: Event];
};
/** Mask exposed component methods API @keywords mask expose methods value */
export interface MaskExpose {
    /** Returns the raw, unformatted value @keywords get raw value basic */
    getValueBasic(): string;
    /** Returns the current formatted value @keywords get value formatted */
    getValue(): string;
    /** Sets a new value @keywords set value */
    setValue(value: string): boolean;
    /** Clears the current value @keywords clear value */
    clear(): boolean;
}
export interface MaskSlots {
}
export type MaskClasses = {
    main: ConstrClass;
    input: string;
    character: string;
    characterItem: string;
};