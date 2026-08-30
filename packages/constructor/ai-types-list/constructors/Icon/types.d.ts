// md5:8d30b297e02dd96227410992ca69cfb3 true
import type { ConstrClass } from '@dxtmisha/functional';

export type IconComponents = ImageComponentInclude;
export type IconEmits = ImageEmitsInclude & EventClickEmits;

export interface IconExpose extends EventClickExpose {
    /** Checks whether the icon is currently active @keywords active, state */
    isActive(): boolean;
}

export interface IconSlots {
    /** Slot for custom icon content @keywords slot, content, template */
    default?(props: any): any;
}

export type IconClasses = {
    main: ConstrClass;
};