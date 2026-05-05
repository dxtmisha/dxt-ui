import { TooltipSlots } from '@dxtmisha/constructor/Tooltip';
import { TooltipProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Slots = TooltipSlots;
declare const __VLS_component: DefineComponent<TooltipProps, {
    toggle(open: boolean, flash?: boolean): Promise<void>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    tooltip: (open: boolean) => any;
}, string, PublicProps, Readonly<TooltipProps> & Readonly<{
    onTooltip?: ((open: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
