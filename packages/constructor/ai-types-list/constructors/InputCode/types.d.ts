// md5:50519b45058bb96b9d483c327bbbe939 true
import type { ConstrClass } from '@dxtmisha/functional';

export type InputCodeComponents = InputCodeItemComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude;

export type InputCodeEmits = ModelEmits & {
  input: [value: string];
};

export interface InputCodeExpose {
  /** Returns current input value. @keywords get, value */
  getValue(): string;
  /** Sets new input value. @keywords set, update */
  set(value: string | number): void;
  /** Resets input value. @keywords reset, clear */
  reset(): void;
  /** Focuses the input element. @keywords focus */
  focus(): void;
}

export interface InputCodeSlots {}

export type InputCodeClasses = {
  main: ConstrClass;
  context: string;
};