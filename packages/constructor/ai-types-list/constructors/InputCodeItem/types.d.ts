// md5:e4d620d03f51bddd5a3abdfec696bf33 true
import { ConstrClass } from '@dxtmisha/functional';

export type InputCodeItemComponents = {};

export type InputCodeItemEmits = {
    focus: [index: InputCodeItemPropsBasic['index']];
    input: [index: InputCodeItemPropsBasic['index'], value: string];
    paste: [index: InputCodeItemPropsBasic['index'], value: string];
    backspace: [index: InputCodeItemPropsBasic['index']];
};

export interface InputCodeItemExpose {
    index: InputCodeItemPropsBasic['index'];
    /** Get value @keywords getValue, code */
    getValue(): string;
    /** Set value @keywords set, code */
    set(value: string): void;
    /** Set tabindex @keywords setTabindex, tab */
    setTabindex(value: number | string | undefined): void;
    /** Reset value @keywords reset, clear */
    reset(): void;
    /** Focus input element @keywords focus, input */
    focusInput(): void;
}

export interface InputCodeItemSlots {
}

export type InputCodeItemClasses = {
    main: ConstrClass;
    input: string;
    sub: string;
};