import { CheckboxSlots } from '@dxtmisha/constructor/Checkbox';
import { CheckboxProps } from './props';
import { DefineComponent, ShallowRef, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { FieldValidationItem } from '@dxtmisha/constructor';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<CheckboxSlots> & CheckboxSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<CheckboxProps, {
    value: ShallowRef<boolean | undefined>;
    checkValidity: () => boolean;
    validationMessage: ComputedRef<string>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    input: (event: Event | InputEvent, value: FieldValidationItem<boolean>) => any;
    "update:value": (value: boolean) => any;
    "update:modelValue": (value: boolean) => any;
    inputLite: (value: FieldValidationItem<boolean>) => any;
    change: (event: Event | InputEvent, value: FieldValidationItem<boolean>) => any;
    changeLite: (value: FieldValidationItem<boolean>) => any;
}, string, PublicProps, Readonly<CheckboxProps> & Readonly<{
    onInput?: ((event: Event | InputEvent, value: FieldValidationItem<boolean>) => any) | undefined;
    "onUpdate:value"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onInputLite?: ((value: FieldValidationItem<boolean>) => any) | undefined;
    onChange?: ((event: Event | InputEvent, value: FieldValidationItem<boolean>) => any) | undefined;
    onChangeLite?: ((value: FieldValidationItem<boolean>) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
