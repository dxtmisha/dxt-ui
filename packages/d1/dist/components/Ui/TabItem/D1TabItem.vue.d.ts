import { TabItemSlots } from '@dxtmisha/constructor/TabItem';
import { TabItemProps } from './props';
import { DefineComponent, Ref, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { EventClickValue } from '@dxtmisha/constructor';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TabItemSlots> & TabItemSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<TabItemProps, {
    value?: Ref< EventClickValue["value"]>;
    detail?: Ref< EventClickValue["detail"]>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
}, string, PublicProps, Readonly<TabItemProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
