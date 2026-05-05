import { TabsNavigationSlots, TabsNavigationIdsList } from '@dxtmisha/constructor/TabsNavigation';
import { TabsNavigationProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { EventClickValue } from '@dxtmisha/constructor';
import { ListSelectedList } from '@dxtmisha/functional';
type __VLS_Slots = TabsNavigationSlots;
declare const __VLS_component: DefineComponent<TabsNavigationProps, {
    ids: ComputedRef<TabsNavigationIdsList>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
    "update:selected": (value: ListSelectedList) => any;
    "update:modelSelected": (value: ListSelectedList) => any;
}, string, PublicProps, Readonly<TabsNavigationProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
    "onUpdate:selected"?: ((value: ListSelectedList) => any) | undefined;
    "onUpdate:modelSelected"?: ((value: ListSelectedList) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
