// md5:850be75646618347babdedab6f67b42b true
import type { ConstrClass } from '@dxtmisha/functional';

export type SegmentControlComponents = HorizontalScrollComponentInclude & SegmentControlItemComponentInclude;
export type SegmentControlEmits = TabsNavigationEmits;
export interface SegmentControlExpose extends TabsNavigationExpose {}
export interface SegmentControlSlots extends TabsNavigationSlots {}
export type SegmentControlClasses = {
  main: ConstrClass;
  item: string;
};