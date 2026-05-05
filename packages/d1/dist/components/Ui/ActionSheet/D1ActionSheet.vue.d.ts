import { ActionSheetSlots } from '@dxtmisha/constructor/ActionSheet';
import { ActionSheetProps } from './props';
import { DefineComponent, ComputedRef, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { WindowControlItem, WindowExpose, WindowEmitOptions } from '@dxtmisha/constructor/Window';
import { ConstrBind } from '@dxtmisha/functional';
import { EventClickValue } from '@dxtmisha/constructor';
type __VLS_Slots = ActionSheetSlots;
declare const __VLS_component: DefineComponent<ActionSheetProps, {
    id: ComputedRef<string | undefined>;
    open: ComputedRef<boolean>;
    control: ComputedRef< WindowControlItem | undefined>;
    setOpen: WindowExpose["setOpen"];
    toOpen: WindowExpose["toOpen"];
    toClose: WindowExpose["toClose"];
    toggle: WindowExpose["toggle"];
    windowElement: Ref< ConstrBind<WindowExpose> | undefined>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    window: (options: WindowEmitOptions) => any;
    bars: (event: MouseEvent, value: EventClickValue) => any;
    barsLite: (value: EventClickValue) => any;
    barsBack: (value: EventClickValue) => any;
    actions: (event: MouseEvent, value: EventClickValue) => any;
    actionsLite: (value: EventClickValue) => any;
}, string, PublicProps, Readonly<ActionSheetProps> & Readonly<{
    onWindow?: ((options: WindowEmitOptions) => any) | undefined;
    onBars?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onBarsLite?: ((value: EventClickValue) => any) | undefined;
    onBarsBack?: ((value: EventClickValue) => any) | undefined;
    onActions?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onActionsLite?: ((value: EventClickValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
