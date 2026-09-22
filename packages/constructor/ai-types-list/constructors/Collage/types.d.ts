// md5:b2e4523eb6a3cfe560fb0a96c31d0dc8 true
import type { ConstrClass, ListSelectedList } from '@dxtmisha/functional';

export type CollageComponents = CollageItemComponentInclude;

export type CollageEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;

export interface CollageExpose extends EventClickExpose {
  /** Recalculates and updates the collage layout. @keywords update, recalculate, layout */
  update(): void;
}

export interface CollageSlots {
  /** Default slot for custom content rendering. @keywords slot, default, template */
  default?(props: any): any;
}

export type CollageClasses = {
  main: ConstrClass;
  body: string;
  item: string;
};