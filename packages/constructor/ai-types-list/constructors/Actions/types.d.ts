// md5:f4e7fa490fe913b033f22d63661f39b1 true
import type { ConstrClass } from '@dxtmisha/functional';

export type ActionsComponents = ButtonComponentInclude;

export type ActionsEmits = EventClickEmits;

export interface ActionsExpose {}

export interface ActionsSlots {
  /** Slot for the main list of actions @keywords slot, main */
  default?(props: any): any;
  /** Slot for the secondary list of actions @keywords slot, secondary */
  secondary?(props: any): any;
}

export type ActionsClasses = {
  main: ConstrClass;
  item: string;
  list: string;
  secondary: string;
  spacer: string;
};