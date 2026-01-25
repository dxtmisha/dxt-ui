import { MaskSlots } from '@dxtmisha/constructor/Mask';
import { MaskProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { FieldValidationItem } from '@dxtmisha/constructor';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<MaskSlots> & MaskSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<MaskProps, {
    valueBasic: ComputedRef<string>;
    value: ComputedRef<string>;
    setValue(value: string): boolean;
    clear(): boolean;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    blur: (event: FocusEvent) => any;
    focus: (event: FocusEvent) => any;
    input: (event: InputEvent, value: FieldValidationItem) => any;
    reset: (event: Event) => any;
    keydown: (event: KeyboardEvent) => any;
    keyup: (event: KeyboardEvent) => any;
    beforeinput: (event: InputEvent) => any;
    inputLite: (value: FieldValidationItem) => any;
    change: (event: InputEvent, value: FieldValidationItem) => any;
    changeLite: (value: FieldValidationItem) => any;
    paste: (event: ClipboardEvent) => any;
}, string, PublicProps, Readonly<MaskProps> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: InputEvent, value: FieldValidationItem) => any) | undefined;
    onReset?: ((event: Event) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onKeyup?: ((event: KeyboardEvent) => any) | undefined;
    onBeforeinput?: ((event: InputEvent) => any) | undefined;
    onInputLite?: ((value: FieldValidationItem) => any) | undefined;
    onChange?: ((event: InputEvent, value: FieldValidationItem) => any) | undefined;
    onChangeLite?: ((value: FieldValidationItem) => any) | undefined;
    onPaste?: ((event: ClipboardEvent) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
