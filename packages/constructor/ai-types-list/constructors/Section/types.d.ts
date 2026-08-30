// md5:512a85859bf7fd555439aa5f195c303e true
import type { ConstrClass } from '@dxtmisha/functional';

export type SectionComponents = BlockComponents;
export type SectionEmits = BlockEmits;
export interface SectionExpose extends BlockExpose {}
export interface SectionSlots extends BlockSlots {}

/** CSS class list for the section component structure. @keywords section classes */
export type SectionClasses = {
  main: ConstrClass;
  headline: string;
  header: string;
  description: string;
  body: string;
};