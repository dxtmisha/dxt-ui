// md5:035b425a4655da968774dc4ec7b4437a true
import type { Ref } from 'vue';
import type { ConstrBind } from '@dxtmisha/functional';

/** Control element bindings and event handlers for tooltip trigger. @keywords tooltip, control, binds, events */
export type TooltipControlBinds = AriaList & {
    class: string;
    onClick: () => void;
    onMouseover: (event: MouseEvent) => void;
    onMouseout: (event: MouseEvent) => void;
};

/** Reactive control state and bindings for tooltip instance. @keywords tooltip, control, state */
export type TooltipControl = TooltipControlBinds & {
    open: Ref<boolean>;
    binds: Record<string, any>;
};

/** Component inclusion map for Tooltip. @keywords tooltip, component, include */
export type TooltipComponentInclude = {
    tooltip?: object;
};

/** Slot definitions for Tooltip component integration. @keywords tooltip, slots */
export type TooltipSlotsInclude = {
    tooltip?(): any;
};

/** Props for including and configuring Tooltip subcomponent. @keywords tooltip, props, include */
export type TooltipPropsInclude<Tooltip extends TooltipProps = TooltipProps> = {
    tooltipLabel?: string;
    tooltipDescription?: string;
    tooltipAttrs?: ConstrBind<Tooltip>;
};