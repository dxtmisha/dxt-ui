import { MotionTransformSlots, MotionTransformEmitOptions } from '@dxtmisha/constructor/MotionTransform';
import { MotionTransformProps } from './props';
import { DefineComponent, Ref, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<MotionTransformSlots> & MotionTransformSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<MotionTransformProps, {
    open: Ref<boolean>;
    isShow: ComputedRef<boolean>;
    setOpen(open: boolean): void;
    toOpen(): void;
    toClose(): void;
    toggle(): void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    transform: (event: Event | undefined, options: MotionTransformEmitOptions) => any;
    transformLite: (options: MotionTransformEmitOptions) => any;
    "update:open": (value: boolean) => any;
    "update:modelOpen": (value: boolean) => any;
}, string, PublicProps, Readonly<MotionTransformProps> & Readonly<{
    onTransform?: ((event: Event | undefined, options: MotionTransformEmitOptions) => any) | undefined;
    onTransformLite?: ((options: MotionTransformEmitOptions) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelOpen"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
