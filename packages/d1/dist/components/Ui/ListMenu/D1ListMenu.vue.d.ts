import { ListMenuSlots } from '@dxtmisha/constructor/ListMenu';
import { ListMenuProps } from './props';
import { DefineComponent, ComputedRef, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { WindowControlItem, WindowExpose, WindowEmitOptions } from '@dxtmisha/constructor/Window';
import { ConstrBind } from '@dxtmisha/functional';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ListMenuSlots> & ListMenuSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<ListMenuProps, {
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
}, string, PublicProps, Readonly<ListMenuProps> & Readonly<{
    onWindow?: ((options: WindowEmitOptions) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
