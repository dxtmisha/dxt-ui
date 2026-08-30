// md5:3b9d86ac14897825c76fab25629ddbcc true
import type { ConstrClass, NumberOrString } from '@dxtmisha/functional';

export type InputComponents = MaskComponentInclude & FieldComponentInclude;
export type InputEmits = FieldBasicEmits<NumberOrString>;
export interface InputExpose extends FieldBasicExpose {}
export interface InputSlots extends FieldSlotsInclude {}
export type InputClasses = {
  main: ConstrClass;
};