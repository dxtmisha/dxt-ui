// md5:22b94134a8dbd1bb4b29741477f40483 true
import type { VNode } from 'vue';
import type { ConstrClass } from '@dxtmisha/functional';
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import type { ImageComponentInclude, ImageEmitsInclude } from '../Image';

export type IconComponents = ImageComponentInclude;
export type IconEmits = ImageEmitsInclude & EventClickEmits;

export interface IconExpose extends EventClickExpose {
    /** Checks whether the icon is currently active. @keywords active, state, status */
    isActive(): boolean;
}

export interface IconSlots {
    /** Slot for custom icon content. @keywords slot, content, default */
    default?(props: unknown): VNode[];
}

export type IconClasses = {
    main: ConstrClass;
    icon: string;
    iconActive: string;
};