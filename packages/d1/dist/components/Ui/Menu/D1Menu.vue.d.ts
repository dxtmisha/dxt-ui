import { MenuSlots } from '@dxtmisha/constructor/Menu';
import { MenuProps } from './props';
import { DefineComponent, ComputedRef, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { WindowControlItem, WindowExpose, WindowEmitOptions } from '@dxtmisha/constructor/Window';
import { ConstrBind, ListList, ListNames } from '@dxtmisha/functional';
import { NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';
import { EventClickValue } from '@dxtmisha/constructor';
type __VLS_Slots = MenuSlots;
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
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
    window: (options: WindowEmitOptions) => any;
    bars: (event: MouseEvent, value: EventClickValue) => any;
    barsLite: (value: EventClickValue) => any;
    barsBack: (value: EventClickValue) => any;
    "update:selected": (value: string) => any;
    "update:modelSelected": (value: string) => any;
    updateValue: (value?: NumberOrStringOrBoolean | undefined) => any;
    clickSlot: (value?: string | undefined) => any;
}, string, PublicProps, Readonly<MenuProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
    onWindow?: ((options: WindowEmitOptions) => any) | undefined;
    onBars?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onBarsLite?: ((value: EventClickValue) => any) | undefined;
    onBarsBack?: ((value: EventClickValue) => any) | undefined;
    "onUpdate:selected"?: ((value: string) => any) | undefined;
    "onUpdate:modelSelected"?: ((value: string) => any) | undefined;
    onUpdateValue?: ((value?: NumberOrStringOrBoolean | undefined) => any) | undefined;
    onClickSlot?: ((value?: string | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
