import { WindowSlots, WindowControlItem, WindowEmitOptions } from '@dxtmisha/constructor/Window';
import { WindowProps } from './props';
import { DefineComponent, Ref, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { ImageEventData } from '@dxtmisha/constructor/Image';
import { ScrollbarEdgeType } from '@dxtmisha/constructor/Scrollbar';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<WindowSlots> & WindowSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<WindowProps, {
    id: string;
    open: Ref<boolean>;
    control: ComputedRef<WindowControlItem>;
    setOpen(open: boolean): Promise<void>;
    toOpen(): Promise<void>;
    toClose(): Promise<void>;
    toggle(): Promise<void>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    load: (image: ImageEventData) => any;
    window: (options: WindowEmitOptions) => any;
    "update:open": (value: boolean) => any;
    "update:modelOpen": (value: boolean) => any;
    scrollbarTop: (isTop: boolean) => any;
    scrollbarReachTop: () => any;
    scrollbarLeaveTop: () => any;
    scrollbarBottom: (isBottom: boolean) => any;
    scrollbarReachBottom: () => any;
    scrollbarLeaveBottom: () => any;
    scrollbarEdge: (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => any;
}, string, PublicProps, Readonly<WindowProps> & Readonly<{
    onLoad?: ((image: ImageEventData) => any) | undefined;
    onWindow?: ((options: WindowEmitOptions) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelOpen"?: ((value: boolean) => any) | undefined;
    onScrollbarTop?: ((isTop: boolean) => any) | undefined;
    onScrollbarReachTop?: (() => any) | undefined;
    onScrollbarLeaveTop?: (() => any) | undefined;
    onScrollbarBottom?: ((isBottom: boolean) => any) | undefined;
    onScrollbarReachBottom?: (() => any) | undefined;
    onScrollbarLeaveBottom?: (() => any) | undefined;
    onScrollbarEdge?: ((isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
