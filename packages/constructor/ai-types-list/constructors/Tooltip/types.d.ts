// md5:34f5c33767b1c94e805dacc92987e337 true
import { ConstrClass } from '@dxtmisha/functional';

export type TooltipComponents = ArrowComponentInclude;

export type TooltipEmits = {
    /** Event triggered when tooltip open state changes @keywords tooltip open state change event */
    tooltip: [open: boolean];
};

export interface TooltipExpose {
    /** Toggles tooltip open state @keywords tooltip toggle open flash */
    toggle(open: boolean, flash?: boolean): Promise<void>;
}

export interface TooltipSlots extends LabelSlots, DescriptionSlots {
    /** Slot for control element triggering tooltip @keywords tooltip slot control trigger */
    control?(props: TooltipControl): any;
    /** Slot for tooltip body content @keywords tooltip slot body content */
    body?(): any;
}

export type TooltipClasses = {
    main: ConstrClass;
    label: string;
    description: string;
    body: string;
};