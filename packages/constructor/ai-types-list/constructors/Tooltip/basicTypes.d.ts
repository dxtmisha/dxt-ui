// md5:fd7b9a66ca1041b3ab81c62aec079946 true
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';

export type TooltipControlBinds = AriaList & {
    class: string;
    onClick: () => void;
    onMouseover: (event: MouseEvent) => void;
    onMouseout: (event: MouseEvent) => void;
};

export type TooltipControl = TooltipControlBinds & {
    open: Ref<boolean>;
    binds: Record<string, any>;
};

export type TooltipComponentInclude = {
    tooltip?: object;
};

export type TooltipSlotsInclude = {
    tooltip?(): any;
};

export type TooltipPropsInclude<Tooltip extends TooltipProps = TooltipProps> = {
    tooltipLabel?: string;
    tooltipDescription?: string;
    tooltipAttrs?: ConstrBind<Tooltip>;
};