// md5:e2c3ad08a49c040a71166509d5f7b148 true
import type { ConstrClass } from '@dxtmisha/functional';

export type TooltipComponents = ArrowComponentInclude;

export type TooltipEmits = {
    tooltip: [open: boolean];
};

export interface TooltipExpose {
    /** Toggles the tooltip open state. @keywords tooltip, toggle, visibility */
    toggle(open: boolean, flash?: boolean): Promise<void>;
}

export interface TooltipSlots extends LabelSlots, DescriptionSlots {
    control?(props: TooltipControl): any;
    body?(): any;
}

export type TooltipClasses = {
    main: ConstrClass;
    label: string;
    description: string;
    body: string;
};