// md5:915143965820ba9cda448a42030e70aa true
import type { VNode } from 'vue';
import type { ConstrClass } from '@dxtmisha/functional';
import type { SkeletonClassesList } from './basicTypes';

export type SkeletonComponents = {};
export type SkeletonEmits = {};

export interface SkeletonExpose {
  /** Checks whether the skeleton loading state is currently active. @keywords skeleton, active, state, loading */
  isActive(): boolean;
}

export interface SkeletonSlots {
  /** Renders the default skeleton content. @keywords slot, default, content */
  default?(props: SkeletonClassesList): VNode[];
}

export type SkeletonClasses = {
  main: ConstrClass;
};