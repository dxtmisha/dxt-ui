import { ScrollbarSlots, ScrollbarEdgeType } from '@dxtmisha/constructor/Scrollbar';
import { ScrollbarProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Slots = ScrollbarSlots;
declare const __VLS_component: DefineComponent<ScrollbarProps, {
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
