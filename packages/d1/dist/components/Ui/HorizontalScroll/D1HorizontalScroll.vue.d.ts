import { HorizontalScrollSlots } from '@dxtmisha/constructor/HorizontalScroll';
import { HorizontalScrollProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Slots = HorizontalScrollSlots;
declare const __VLS_component: DefineComponent<HorizontalScrollProps, {
    toSelected(): void;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<HorizontalScrollProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
