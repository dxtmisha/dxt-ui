import { InputSlots } from '@dxtmisha/constructor/Input';
import { InputProps } from './props';
import { DefineComponent, ShallowRef, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { FieldValidationItem } from '@dxtmisha/constructor';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<InputSlots> & InputSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<InputProps, {
    value: ShallowRef<string | undefined>;
    checkValidity: () => boolean;
    validationMessage: ComputedRef<string>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    input: (event: Event | InputEvent, value: FieldValidationItem<string>) => any;
    inputLite: (value: FieldValidationItem<string>) => any;
    change: (event: Event | InputEvent, value: FieldValidationItem<string>) => any;
    changeLite: (value: FieldValidationItem<string>) => any;
    "update:value": (value: string) => any;
    "update:modelValue": (value: string) => any;
}, string, PublicProps, Readonly<InputProps> & Readonly<{
    onInput?: ((event: Event | InputEvent, value: FieldValidationItem<string>) => any) | undefined;
    onInputLite?: ((value: FieldValidationItem<string>) => any) | undefined;
    onChange?: ((event: Event | InputEvent, value: FieldValidationItem<string>) => any) | undefined;
    onChangeLite?: ((value: FieldValidationItem<string>) => any) | undefined;
    "onUpdate:value"?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
