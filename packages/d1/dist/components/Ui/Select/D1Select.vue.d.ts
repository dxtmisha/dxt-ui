import { SelectSlots } from '@dxtmisha/constructor/Select';
import { SelectProps } from './props';
import { DefineComponent, ShallowRef, ComputedRef, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { MenuExpose } from '@dxtmisha/constructor/Menu';
import { ConstrBind } from '@dxtmisha/functional';
import { FieldValidationItem } from '@dxtmisha/constructor';
type __VLS_Slots = SelectSlots;
declare const __VLS_component: DefineComponent<SelectProps, {
    value: ShallowRef<string | undefined>;
    checkValidity: () => boolean;
    validationMessage: ComputedRef<string>;
    open: ComputedRef<boolean>;
    setOpen(open: boolean): Promise<void>;
    toOpen: MenuExpose["toOpen"];
    toClose: MenuExpose["toClose"];
    toggle(): Promise<void>;
    menuElement: Ref< ConstrBind<MenuExpose> | undefined>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    input: (event: Event | InputEvent, value: FieldValidationItem<any>) => any;
    "update:value": (value: any) => any;
    "update:modelValue": (value: any) => any;
    inputLite: (value: FieldValidationItem<any>) => any;
    change: (event: Event | InputEvent, value: FieldValidationItem<any>) => any;
    changeLite: (value: FieldValidationItem<any>) => any;
}, string, PublicProps, Readonly<SelectProps> & Readonly<{
    onInput?: ((event: Event | InputEvent, value: FieldValidationItem<any>) => any) | undefined;
    "onUpdate:value"?: ((value: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onInputLite?: ((value: FieldValidationItem<any>) => any) | undefined;
    onChange?: ((event: Event | InputEvent, value: FieldValidationItem<any>) => any) | undefined;
    onChangeLite?: ((value: FieldValidationItem<any>) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
