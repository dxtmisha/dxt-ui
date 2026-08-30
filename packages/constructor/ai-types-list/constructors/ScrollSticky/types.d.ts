// md5:c5ea31adc442a083cd8b57af8ecbc4ae true
import type { ConstrClass } from '@dxtmisha/functional';

export type ScrollStickyComponents = {};
export type ScrollStickyEmits = {};
export interface ScrollStickyExpose {}

export interface ScrollStickySlots {
  /** Slot for default ScrollSticky content. @keywords slot, default */
  default?(props: {
    /** Recalculates the scroll width. @keywords resize, recalculate */
    onResize(): void;
  }): any;
  /** Slot for context element replacement. @keywords slot, context */
  context?(props: ScrollStickyBindItem): any;
  /** Slot for scroll element replacement. @keywords slot, scroll */
  scroll?(props: ScrollStickyBindItem): any;
}

export type ScrollStickyClasses = {
  main: ConstrClass;
  context: string;
  scroll: string;
};