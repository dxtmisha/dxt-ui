import { TabsProps } from './props';
import { MotionAxisSlots, MotionAxisEmitOptions } from '@dxtmisha/constructor/MotionAxis';
import { DefineComponent, Ref, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { EventClickValue } from '@dxtmisha/constructor';
import { ListSelectedList } from '@dxtmisha/functional';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly< MotionAxisSlots> & MotionAxisSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<TabsProps, {
    value?: Ref< EventClickValue["value"]>;
    detail?: Ref< EventClickValue["detail"]>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
    "update:selected": (value: ListSelectedList) => any;
    "update:modelSelected": (value: ListSelectedList) => any;
    motionAxis: (options: MotionAxisEmitOptions) => any;
}, string, PublicProps, Readonly<TabsProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
    "onUpdate:selected"?: ((value: ListSelectedList) => any) | undefined;
    "onUpdate:modelSelected"?: ((value: ListSelectedList) => any) | undefined;
    onMotionAxis?: ((options: MotionAxisEmitOptions) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
