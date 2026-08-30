// md5:867f3bad7d03b9952292836da1280f9d true
import type { ConstrClass } from '@dxtmisha/functional';

export type AvatarComponents = ImageComponentInclude & BadgeComponentInclude;
export type AvatarEmits = ImageEmitsInclude & EventClickEmits;
export interface AvatarExpose extends EventClickExpose {}
export interface AvatarSlots extends LabelSlots {}
export type AvatarClasses = {
  main: ConstrClass;
  label: string;
};