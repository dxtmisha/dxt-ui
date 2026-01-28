import { MenuProps } from './props';
import { ListSlots } from '@dxtmisha/constructor/List';
import { MenuSlotInclude, MenuControlItem } from '@dxtmisha/constructor/Menu';
import { DefineComponent, ComputedRef, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { WindowControlItem, WindowExpose, WindowEmitOptions } from '@dxtmisha/constructor/Window';
import { ConstrBind, ListList, ListNames } from '@dxtmisha/functional';
import { NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';
import { EventClickValue } from '@dxtmisha/constructor';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly< ListSlots & MenuSlotInclude & {
        control?(props: MenuControlItem): any;
    }> & ListSlots & MenuSlotInclude & {
        control?(props: MenuControlItem): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<MenuProps, {
    id: ComputedRef<string | undefined>;
    open: ComputedRef<boolean>;
    control: ComputedRef< WindowControlItem | undefined>;
    setOpen: WindowExpose["setOpen"];
    toOpen: WindowExpose["toOpen"];
    toClose: WindowExpose["toClose"];
    toggle: WindowExpose["toggle"];
    windowElement: Ref< ConstrBind<WindowExpose> | undefined>;
    isSelected: ComputedRef<boolean>;
    selectedList: ComputedRef<ListList>;
    selectedNames: ComputedRef<ListNames>;
    selectedValues: ComputedRef<any[]>;
    loading: Ref<boolean>;
    previous(): NumberOrStringOrBoolean | undefined;
    next(): NumberOrStringOrBoolean | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    window: (options: WindowEmitOptions) => any;
    clickLite: (value: EventClickValue) => any;
    bars: (event: MouseEvent, value: EventClickValue) => any;
    barsLite: (value: EventClickValue) => any;
    barsBack: (value: EventClickValue) => any;
    "update:selected": (value: string) => any;
    "update:modelSelected": (value: string) => any;
    updateValue: (value?: NumberOrStringOrBoolean | undefined) => any;
    clickSlot: (value?: string | undefined) => any;
}, string, PublicProps, Readonly<MenuProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onWindow?: ((options: WindowEmitOptions) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
    onBars?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onBarsLite?: ((value: EventClickValue) => any) | undefined;
    onBarsBack?: ((value: EventClickValue) => any) | undefined;
    "onUpdate:selected"?: ((value: string) => any) | undefined;
    "onUpdate:modelSelected"?: ((value: string) => any) | undefined;
    onUpdateValue?: ((value?: NumberOrStringOrBoolean | undefined) => any) | undefined;
    onClickSlot?: ((value?: string | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
