import { AccordionSlots } from '@dxtmisha/constructor/Accordion';
import { AccordionProps } from './props';
import { DefineComponent, Ref, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { MotionTransformExpose, MotionTransformEmitOptions } from '@dxtmisha/constructor/MotionTransform';
import { EventClickValue } from '@dxtmisha/constructor';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<AccordionSlots> & AccordionSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<AccordionProps, {
    motionTransformElement: Ref< ConstrBind<MotionTransformExpose> | undefined>;
    open: Ref<boolean>;
    isShow: ComputedRef<boolean>;
    setOpen(open: boolean): void;
    toOpen(): void;
    toClose(): void;
    toggle(): void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
    transform: (event: Event | undefined, options: MotionTransformEmitOptions) => any;
    transformLite: (options: MotionTransformEmitOptions) => any;
    "update:open": (value: boolean) => any;
    "update:modelOpen": (value: boolean) => any;
}, string, PublicProps, Readonly<AccordionProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
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
