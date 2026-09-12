// md5:7eb33d8536ed6a2f14cd8f7d13b18578 true
import type { ConstrClass } from '@dxtmisha/functional';

export type CollageBarComponents = ButtonComponentInclude;
export type CollageBarEmits = EventClickEmits;
export interface CollageBarExpose extends EventClickExpose {}
export interface CollageBarSlots extends LabelSlots, DescriptionSlots {
  /** Slot for the body content. @keywords body, content */
  body?(props: any): any;
  /** Slot for the trailing element. @keywords trailing, element */
  trailing?(props: any): any;
}
export type CollageBarClasses = {
  main: ConstrClass;
  context: string;
  label: string;
  description: string;
  button: string;
};