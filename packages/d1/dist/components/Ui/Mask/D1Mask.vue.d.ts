import { MaskSlots } from '@dxtmisha/constructor/Mask';
import { MaskProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { FieldValidationItem } from '@dxtmisha/constructor';
type __VLS_Slots = MaskSlots;
declare const __VLS_component: DefineComponent<MaskProps, {
    valueBasic: ComputedRef<string>;
    value: ComputedRef<string>;
    setValue(value: string): boolean;
    clear(): boolean;
    elementHtml?: ComputedRef<HTMLInputElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    blur: (event: FocusEvent) => any;
    focus: (event: FocusEvent) => any;
    input: (event: InputEvent, value: FieldValidationItem) => any;
    reset: (event: Event) => any;
    inputLite: (value: FieldValidationItem) => any;
    change: (event: InputEvent, value: FieldValidationItem) => any;
    changeLite: (value: FieldValidationItem) => any;
    keydown: (event: KeyboardEvent) => any;
    keyup: (event: KeyboardEvent) => any;
    beforeinput: (event: InputEvent) => any;
    paste: (event: ClipboardEvent) => any;
}, string, PublicProps, Readonly<MaskProps> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((event: InputEvent, value: FieldValidationItem) => any) | undefined;
    onReset?: ((event: Event) => any) | undefined;
    onInputLite?: ((value: FieldValidationItem) => any) | undefined;
    onChange?: ((event: InputEvent, value: FieldValidationItem) => any) | undefined;
    onChangeLite?: ((value: FieldValidationItem) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onKeyup?: ((event: KeyboardEvent) => any) | undefined;
    onBeforeinput?: ((event: InputEvent) => any) | undefined;
    onPaste?: ((event: ClipboardEvent) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
