// md5:8e55b9bfd849ebeb88dd27fcbb47cfb6 true
import type { ConstrClass } from '@dxtmisha/functional';

export type MaskComponents = {};

export type MaskEmits = {
    focus: [event: FocusEvent];
    blur: [event: FocusEvent];
    keydown: [event: KeyboardEvent];
    keyup: [event: KeyboardEvent];
    beforeinput: [event: InputEvent];
    input: [event: InputEvent, value: FieldValidationItem];
    inputLite: [value: FieldValidationItem];
    change: [event: InputEvent, value: FieldValidationItem];
    changeLite: [value: FieldValidationItem];
    paste: [event: ClipboardEvent];
    reset: [event: Event];
};

export interface MaskExpose {
    /** Returns the raw unformatted value. @keywords mask, raw, basic */
    getValueBasic(): string;
    /** Returns the current formatted value. @keywords mask, formatted, get */
    getValue(): string;
    /** Sets a new value. @keywords mask, set */
    setValue(value: string): boolean;
    /** Clears the current value. @keywords mask, clear, reset */
    clear(): boolean;
}

export interface MaskSlots {}

export type MaskClasses = {
    main: ConstrClass;
    input: string;
    character: string;
    characterItem: string;
};