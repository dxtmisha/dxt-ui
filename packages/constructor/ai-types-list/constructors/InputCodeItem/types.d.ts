// md5:2baca57a3bd45f3008c5647e90251a09 true
import type { ConstrClass } from '@dxtmisha/functional';

export type InputCodeItemComponents = {};

export type InputCodeItemEmits = {
    focus: [index: InputCodeItemPropsBasic['index']];
    input: [index: InputCodeItemPropsBasic['index'], value: string];
    paste: [index: InputCodeItemPropsBasic['index'], value: string];
    backspace: [index: InputCodeItemPropsBasic['index']];
};

export interface InputCodeItemExpose {
    index: InputCodeItemPropsBasic['index'];
    /** Gets current input item value. @keywords get, value, code */
    getValue(): string;
    /** Sets the input item value. @keywords set, value */
    set(value: string): void;
    /** Sets the tabindex attribute for the input element. @keywords tabindex, focus */
    setTabindex(value: number | string | undefined): void;
    /** Resets the input item value. @keywords reset, clear */
    reset(): void;
    /** Focuses the input element. @keywords focus, input */
    focusInput(): void;
}

export interface InputCodeItemSlots {}

export type InputCodeItemClasses = {
    main: ConstrClass;
    input: string;
    sub: string;
};