import { TooltipSlots } from '@dxtmisha/constructor/Tooltip';
import { TooltipProps } from './props';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TooltipSlots> & TooltipSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<TooltipProps, {
    toggle(open: boolean, flash?: boolean): Promise<void>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    tooltip: (open: boolean) => any;
}, string, PublicProps, Readonly<TooltipProps> & Readonly<{
    onTooltip?: ((open: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
