// md5:3074525c2509ecb129dbfc6fe2f7f370 true
import { ConstrClass } from '@dxtmisha/functional';

export type AnchorComponents = TooltipComponentInclude & IconComponentInclude;

export type AnchorEmits = {};

/** Exposes anchor component methods. @keywords anchor expose go */
export interface AnchorExpose {
    /** Navigates to the specified target. @keywords anchor go navigate */
    go(): void;
}

export interface AnchorSlots extends LabelSlots, TooltipSlotsInclude {
}

export type AnchorClasses = {
    main: ConstrClass;
    label: string;
};