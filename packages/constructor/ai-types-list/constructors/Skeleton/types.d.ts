// md5:95c325f0946376a2c32caff29b2cd4f6 true
import type { ConstrClass } from '@dxtmisha/functional';
export type SkeletonComponents = {};
export type SkeletonEmits = {};
export interface SkeletonExpose {
  /** Checks whether the skeleton is currently active. @keywords active, status */
  isActive(): boolean;
}
export interface SkeletonSlots {
  /** Default skeleton content slot. @keywords default, slot */
  default?(props: SkeletonClassesList): any;
}
export type SkeletonClasses = {
  /** Root element classes. @keywords root, main, classes */
  main: ConstrClass;
};