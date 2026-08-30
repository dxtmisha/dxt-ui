// md5:b42313c534aa5636eb862744a117c461 true
import type { ConstrClass } from '@dxtmisha/functional';

export type FieldMessageComponents = FieldCounterComponentInclude;

export type FieldMessageEmits = {};

export interface FieldMessageExpose {}

/** Available slots for FieldMessage component @keywords slots */
export interface FieldMessageSlots {
  /** Slot for helper message @keywords slot helper */
  helper?(props: FieldMessageSlot): any;
  /** Slot for validation error message @keywords slot validation */
  validation?(props: FieldMessageSlot): any;
}

/** CSS class names map for FieldMessage component @keywords classes */
export type FieldMessageClasses = {
  main: ConstrClass;
  info: string;
  error: string;
  fieldCounter: string;
};