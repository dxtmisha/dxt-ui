// md5:521c262907b8f6311764b5541801ed46 true
import type { ConstrClass } from '@dxtmisha/functional';

export type BarsComponents = ButtonComponentInclude;

export type BarsEmits = EventClickEmits & {
  'update:action': [value: boolean];
  'update:modelAction': [value: boolean];
};

export interface BarsExpose {}

export interface BarsSlots extends LabelSlots, DescriptionSlots {
  bars?(props: any): any;
  actionBars?(props: any): any;
}

export type BarsClasses = {
  main: ConstrClass;
  context: string;
  label: string;
  description: string;
};