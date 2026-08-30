// md5:49b2eb4bebe97b69fddfc3ef5975588a true
import type { ConstrClass } from '@dxtmisha/functional';

export type CellComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;

export type CellEmits = EventClickEmits;

export interface CellExpose extends EventClickExpose {}

export interface CellSlots extends LabelSlots, DescriptionSlots, CaptionSlots {
  /** Slot for displaying additional content on the right side of the cell @keywords trailing, right, end */
  trailing?(props: CellClassesSub): any;
  /** Slot for displaying the main body content of the cell @keywords body, main, content */
  body?(props: CellClassesSub): any;
}

/** CSS class mapping for cell sub-elements @keywords classes, styling, bem */
export type CellClasses = {
  main: ConstrClass;
  context: string;
  contextTrailing: string;
  label: string;
  description: string;
  caption: string;
  icon: string;
  trailing: string;
  body: string;
  loading: string;
};