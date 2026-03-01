import { HorizontalScrollSlots } from '@dxtmisha/constructor/HorizontalScroll';
import { HorizontalScrollProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<HorizontalScrollSlots> & HorizontalScrollSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<HorizontalScrollProps, {
    toSelected(): void;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<HorizontalScrollProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
