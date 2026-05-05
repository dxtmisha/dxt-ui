import { MotionTransformSlots, MotionTransformEmitOptions } from '@dxtmisha/constructor/MotionTransform';
import { MotionTransformProps } from './props';
import { DefineComponent, Ref, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Slots = MotionTransformSlots;
declare const __VLS_component: DefineComponent<MotionTransformProps, {
    open: Ref<boolean>;
    isShow: ComputedRef<boolean>;
    setOpen(open: boolean): void;
    toOpen(): void;
    toClose(): void;
    toggle(): void;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
    "update:modelOpen": (value: boolean) => any;
    transform: (event: Event | undefined, options: MotionTransformEmitOptions) => any;
    transformLite: (options: MotionTransformEmitOptions) => any;
}, string, PublicProps, Readonly<MotionTransformProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelOpen"?: ((value: boolean) => any) | undefined;
    onTransform?: ((event: Event | undefined, options: MotionTransformEmitOptions) => any) | undefined;
    onTransformLite?: ((options: MotionTransformEmitOptions) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
