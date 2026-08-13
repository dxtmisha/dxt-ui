// md5:44496d8bd48d8e52beef8ee6dbfd8ec5 true
import { ConstrClass } from '@dxtmisha/functional';
export type InputCodeComponents = InputCodeItemComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude;
export type InputCodeEmits = ModelEmits & {
    input: [value: string];
};
export interface InputCodeExpose {
    /** Returns current value @keywords getValue, get, code, string */
    getValue(): string;
    /** Sets new value @keywords set, value, number, string */
    set(value: string | number): void;
    /** Resets current value @keywords reset, clear */
    reset(): void;
    /** Focuses the input element @keywords focus, active */
    focus(): void;
}
export interface InputCodeSlots {
}
export type InputCodeClasses = {
    main: ConstrClass;
    context: string;
};