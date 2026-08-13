// md5:e0285c0ebb70351ab2d48bb883ef0d16 true
import { ConstrClass } from '@dxtmisha/functional';

export type IconComponents = ImageComponentInclude;

export type IconEmits = ImageEmitsInclude & EventClickEmits;

export interface IconExpose extends EventClickExpose {
    /** Checks if the icon is currently active. @keywords isActive, icon, state */
    isActive(): boolean;
}

export interface IconSlots {
    /** Slot for custom icon content. @keywords default, slot, content */
    default?(props: any): any;
}

export type IconClasses = {
    main: ConstrClass;
};