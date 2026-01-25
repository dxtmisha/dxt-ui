import { ListSlots } from '@dxtmisha/constructor/List';
import { ListProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { ListList, ListNames } from '@dxtmisha/functional';
import { EventClickValue } from '@dxtmisha/constructor';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ListSlots> & ListSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<ListProps, {
    isSelected: ComputedRef<boolean>;
    selectedList: ComputedRef<ListList>;
    selectedNames: ComputedRef<ListNames>;
    selectedValues: ComputedRef<any[]>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
    close: () => any;
}, string, PublicProps, Readonly<ListProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
