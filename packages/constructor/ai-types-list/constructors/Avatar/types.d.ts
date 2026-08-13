// md5:5bacc3265449539ff5284af164d9815c true
import { ConstrClass } from '@dxtmisha/functional';

export type AvatarComponents = ImageComponentInclude & BadgeComponentInclude;

export type AvatarEmits = ImageEmitsInclude & EventClickEmits;

export interface AvatarExpose extends EventClickExpose {
}

export interface AvatarSlots extends LabelSlots {
}

/** Class definitions for avatar elements @keywords avatar classes main label */
export type AvatarClasses = {
    main: ConstrClass;
    label: string;
};