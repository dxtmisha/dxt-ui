// md5:9cf2c1d239652f36771324bd647ef791 true
import type { ConstrClass } from '@dxtmisha/functional';

export type IconComponents = ImageComponentInclude;
export type IconEmits = ImageEmitsInclude & EventClickEmits;

export interface IconExpose extends EventClickExpose {
    /** Checks whether the icon is currently active. @keywords active, state, status */
    isActive(): boolean;
}

export interface IconSlots {
    /** Slot for rendering custom icon content. @keywords slot, content, template */
    default?(props: any): any;
}

export type IconClasses = {
    main: ConstrClass;
    icon: string;
    iconActive: string;
};