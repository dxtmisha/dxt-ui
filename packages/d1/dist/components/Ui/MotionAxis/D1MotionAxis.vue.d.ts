import { MotionAxisSlots, MotionAxisSelectedValue, MotionAxisEmitOptions } from '@dxtmisha/constructor/MotionAxis';
import { MotionAxisProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<MotionAxisSlots> & MotionAxisSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<MotionAxisProps, {
    back(): void;
    next(): void;
    to(selected: MotionAxisSelectedValue): void;
    top(selected: MotionAxisSelectedValue): void;
    right(selected: MotionAxisSelectedValue): void;
    bottom(selected: MotionAxisSelectedValue): void;
    left(selected: MotionAxisSelectedValue): void;
    down(selected: MotionAxisSelectedValue): void;
    up(selected: MotionAxisSelectedValue): void;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    start: (selected: MotionAxisSelectedValue) => any;
    end: (selected: MotionAxisSelectedValue) => any;
    "update:selected": (value: MotionAxisSelectedValue) => any;
    "update:modelSelected": (value: MotionAxisSelectedValue) => any;
    motionAxis: (options: MotionAxisEmitOptions) => any;
}, string, PublicProps, Readonly<MotionAxisProps> & Readonly<{
    onStart?: ((selected: MotionAxisSelectedValue) => any) | undefined;
    onEnd?: ((selected: MotionAxisSelectedValue) => any) | undefined;
    "onUpdate:selected"?: ((value: MotionAxisSelectedValue) => any) | undefined;
    "onUpdate:modelSelected"?: ((value: MotionAxisSelectedValue) => any) | undefined;
    onMotionAxis?: ((options: MotionAxisEmitOptions) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
