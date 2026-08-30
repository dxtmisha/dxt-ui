// md5:7e9b49fe0dc46bc69c6389799501b352 true
import type { ConstrClass } from '@dxtmisha/functional';

export type AnchorComponents = TooltipComponentInclude & IconComponentInclude;
export type AnchorEmits = {};
export interface AnchorExpose {
  /** Navigates to the specified target. @keywords anchor navigate go target scroll */
  go(): void;
}
export interface AnchorSlots extends LabelSlots, TooltipSlotsInclude {}
export type AnchorClasses = {
  main: ConstrClass;
  label: string;
};