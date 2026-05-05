import { AccordionSlots } from '@dxtmisha/constructor/Accordion';
import { AccordionProps } from './props';
import { DefineComponent, Ref, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { MotionTransformExpose, MotionTransformEmitOptions } from '@dxtmisha/constructor/MotionTransform';
import { EventClickValue } from '@dxtmisha/constructor';
type __VLS_Slots = AccordionSlots;
declare const __VLS_component: DefineComponent<AccordionProps, {
    motionTransformElement: Ref< ConstrBind<MotionTransformExpose> | undefined>;
    open: Ref<boolean>;
    isShow: ComputedRef<boolean>;
    setOpen(open: boolean): void;
    toOpen(): void;
    toClose(): void;
    toggle(): void;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
    "update:open": (value: boolean) => any;
    "update:modelOpen": (value: boolean) => any;
    transform: (event: Event | undefined, options: MotionTransformEmitOptions) => any;
    transformLite: (options: MotionTransformEmitOptions) => any;
}, string, PublicProps, Readonly<AccordionProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
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
