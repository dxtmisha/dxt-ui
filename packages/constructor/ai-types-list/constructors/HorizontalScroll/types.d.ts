// md5:7d4900f71f32bf9318628630fcbdecc1 true
import type { ConstrClass } from '@dxtmisha/functional';

export type HorizontalScrollComponents = {};
export type HorizontalScrollEmits = {};

export interface HorizontalScrollExpose {
  /** Gets the root HTML element. @keywords root element dom */
  getElement(): HTMLDivElement | undefined;
  /** Scrolls the area to the currently selected element. @keywords scroll toSelected */
  toSelected(): void;
}

export interface HorizontalScrollSlots {
  /** Default content slot for horizontal scroll. @keywords default slot */
  default?(props: any): any;
}

export type HorizontalScrollClasses = {
  main: ConstrClass;
};