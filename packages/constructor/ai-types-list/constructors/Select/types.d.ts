// md5:55029019161575a9b4e1fa7d2ce9e5a3 true
import type { ConstrClass } from '@dxtmisha/functional';

export type SelectComponents = MenuComponentInclude & FieldComponentInclude & SelectValueComponentInclude;
export type SelectEmits = FieldBasicEmits;
export interface SelectExpose extends FieldBasicExpose, MenuExposeInclude {}
export interface SelectSlots extends FieldSlotsInclude, MenuSlotInclude {}
export type SelectClasses = {
  main: ConstrClass;
};