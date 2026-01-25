import { ScrollbarSlots, ScrollbarEdgeType } from '@dxtmisha/constructor/Scrollbar';
import { ScrollbarProps } from './props';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ScrollbarSlots> & ScrollbarSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<ScrollbarProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    top: (isTop: boolean) => any;
    bottom: (isBottom: boolean) => any;
    reachTop: () => any;
    leaveTop: () => any;
    reachBottom: () => any;
    leaveBottom: () => any;
    edge: (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => any;
}, string, PublicProps, Readonly<ScrollbarProps> & Readonly<{
    onTop?: ((isTop: boolean) => any) | undefined;
    onBottom?: ((isBottom: boolean) => any) | undefined;
    onReachTop?: (() => any) | undefined;
    onLeaveTop?: (() => any) | undefined;
    onReachBottom?: (() => any) | undefined;
    onLeaveBottom?: (() => any) | undefined;
    onEdge?: ((isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
