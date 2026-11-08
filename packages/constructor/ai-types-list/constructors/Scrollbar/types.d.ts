// md5:d8ba419dac096d8c9975b0ab0c48d831 true
import type { ConstrClass } from '@dxtmisha/functional';

export type ScrollbarComponents = {};

/** Scrollbar event emissions contract. @keywords scrollbar events emits */
export type ScrollbarEmits = {
  /** Triggered on top boundary state change. @keywords scroll top edge */
  top: [isTop: boolean];
  /** Triggered when reaching the top position. @keywords scroll reach top */
  reachTop: [];
  /** Triggered when leaving the top position. @keywords scroll leave top */
  leaveTop: [];
  /** Triggered on bottom boundary state change. @keywords scroll bottom edge */
  bottom: [isBottom: boolean];
  /** Triggered when reaching the bottom position. @keywords scroll reach bottom */
  reachBottom: [];
  /** Triggered when leaving the bottom position. @keywords scroll leave bottom */
  leaveBottom: [];
  /** Triggered when reaching any boundary edge. @keywords scroll edge boundary */
  edge: [isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType];
};

export interface ScrollbarExpose {}

/** Scrollbar slots definition. @keywords scrollbar slots */
export interface ScrollbarSlots {
  /** Slot for default scrollbar content. @keywords slot default */
  default?(props: any): any;
}

/** Scrollbar class names structure. @keywords scrollbar classes */
export type ScrollbarClasses = {
  /** Root element classes. @keywords root classes */
  main: ConstrClass;
};