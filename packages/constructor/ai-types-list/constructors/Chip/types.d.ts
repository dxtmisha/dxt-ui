// md5:a200cfd6c98322e8ff0e05feec03e7ef true
import type { ConstrClass } from '@dxtmisha/functional';

export type ChipComponents = ButtonComponents;
export type ChipEmits = ButtonEmits;
export interface ChipExpose extends ButtonExpose {}
export interface ChipSlots extends ButtonSlots {}

/** CSS class names structure for Chip sub-elements. @keywords chip, classes, styling */
export type ChipClasses = {
  main: ConstrClass;
  label: string;
  icon: string;
  trailing: string;
  loading: string;
};