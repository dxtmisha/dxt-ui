import { ModalSlots } from '@dxtmisha/constructor/Modal';
import { ModalProps } from './props';
import { DefineComponent, ComputedRef, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { WindowControlItem, WindowExpose, WindowEmitOptions } from '@dxtmisha/constructor/Window';
import { ConstrBind } from '@dxtmisha/functional';
import { EventClickValue } from '@dxtmisha/constructor';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ModalSlots> & ModalSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<ModalProps, {
    id: ComputedRef<string | undefined>;
    open: ComputedRef<boolean>;
    control: ComputedRef< WindowControlItem | undefined>;
    setOpen: WindowExpose["setOpen"];
    toOpen: WindowExpose["toOpen"];
    toClose: WindowExpose["toClose"];
    toggle: WindowExpose["toggle"];
    windowElement: Ref< ConstrBind<WindowExpose> | undefined>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    window: (options: WindowEmitOptions) => any;
    actions: (event: MouseEvent, value: EventClickValue) => any;
    bars: (event: MouseEvent, value: EventClickValue) => any;
    barsLite: (value: EventClickValue) => any;
    barsBack: (value: EventClickValue) => any;
    actionsLite: (value: EventClickValue) => any;
}, string, PublicProps, Readonly<ModalProps> & Readonly<{
    onWindow?: ((options: WindowEmitOptions) => any) | undefined;
    onActions?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onBars?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onBarsLite?: ((value: EventClickValue) => any) | undefined;
    onBarsBack?: ((value: EventClickValue) => any) | undefined;
    onActionsLite?: ((value: EventClickValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
