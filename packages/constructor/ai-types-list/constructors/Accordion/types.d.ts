// md5:efa0b4f4afb5773fcfbffe9b7c60ec49 true
import type { ConstrClass } from '@dxtmisha/functional';

export type AccordionComponents = CellComponentInclude & MotionTransformComponentInclude;

export type AccordionEmits = EventClickEmits & MotionTransformEmitsInclude & ModelEmitsOpen;

export interface AccordionExpose extends MotionTransformExposeInclude {}

export interface AccordionSlots extends CellSlotsInclude {
  /** Main expandable content slot for the accordion. @keywords accordion default slot content */
  default?(props: MotionTransformControlItem): any;
}

export type AccordionClasses = {
  main: ConstrClass;
  head: string;
  body: string;
};