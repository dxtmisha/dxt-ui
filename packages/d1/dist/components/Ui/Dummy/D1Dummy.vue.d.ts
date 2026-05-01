import { DummySlots } from '@dxtmisha/constructor/Dummy';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<DummySlots> & DummySlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<{
    size?: string | "x" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    palette?: string | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone" | "black" | "white";
}, {
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    size?: string | "x" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    palette?: string | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone" | "black" | "white";
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
