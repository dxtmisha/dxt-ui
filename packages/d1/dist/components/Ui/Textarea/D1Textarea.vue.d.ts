import { TextareaSlots } from '@dxtmisha/constructor/Textarea';
import { TextareaProps } from './props';
import { DefineComponent, ShallowRef, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { FieldValidationItem } from '@dxtmisha/constructor';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TextareaSlots> & TextareaSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<TextareaProps, {
    value: ShallowRef<string | undefined>;
    checkValidity: () => boolean;
    validationMessage: ComputedRef<string>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    input: (event: Event | InputEvent, value: FieldValidationItem<any>) => any;
    "update:value": (value: any) => any;
    "update:modelValue": (value: any) => any;
    inputLite: (value: FieldValidationItem<any>) => any;
    change: (event: Event | InputEvent, value: FieldValidationItem<any>) => any;
    changeLite: (value: FieldValidationItem<any>) => any;
}, string, PublicProps, Readonly<TextareaProps> & Readonly<{
    onInput?: ((event: Event | InputEvent, value: FieldValidationItem<any>) => any) | undefined;
    "onUpdate:value"?: ((value: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onInputLite?: ((value: FieldValidationItem<any>) => any) | undefined;
    onChange?: ((event: Event | InputEvent, value: FieldValidationItem<any>) => any) | undefined;
    onChangeLite?: ((value: FieldValidationItem<any>) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
