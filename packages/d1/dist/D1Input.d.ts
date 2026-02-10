import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { FieldCounterPropsBasic } from '@dxtmisha/constructor/FieldCounter';
import { FieldLabelPropsBasic } from '@dxtmisha/constructor/FieldLabel';
import { FieldMessagePropsBasic } from '@dxtmisha/constructor/FieldMessage';
import { FieldPropsBasic } from '@dxtmisha/constructor/Field';
import { FieldValidationItem } from '@dxtmisha/constructor';
import { IconPropsBasic } from '@dxtmisha/constructor/Icon';
import { ImagePropsBasic } from '@dxtmisha/constructor/Image';
import { InputPropsBasic } from '@dxtmisha/constructor/Input';
import { InputSlots } from '@dxtmisha/constructor/Input';
import { MaskPropsBasic } from '@dxtmisha/constructor/Mask';
import { ProgressPropsBasic } from '@dxtmisha/constructor/Progress';
import { PublicProps } from 'vue';
import { ShallowRef } from 'vue';

declare const __VLS_component: DefineComponent<D1InputProps, {
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
}, string, PublicProps, Readonly<D1InputProps> & Readonly<{
    onInput?: ((event: Event | InputEvent, value: FieldValidationItem<string>) => any) | undefined;
    onInputLite?: ((value: FieldValidationItem<string>) => any) | undefined;
    onChange?: ((event: Event | InputEvent, value: FieldValidationItem<string>) => any) | undefined;
    onChangeLite?: ((value: FieldValidationItem<string>) => any) | undefined;
    "onUpdate:value"?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<InputSlots> & InputSlots;
    refs: {};
    rootEl: any;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const D1Input: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export declare type D1InputProps = InputPropsBasic<MaskProps, IconProps, FieldProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken_9;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type FieldCounterProps = FieldCounterPropsBasic & PropsToken_4;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type FieldLabelProps = FieldLabelPropsBasic<FieldCounterProps, ProgressProps> & PropsToken_6;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type FieldMessageProps = FieldMessagePropsBasic<FieldCounterProps> & PropsToken_7;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type FieldProps = FieldPropsBasic<IconProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken_8;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type IconProps = IconPropsBasic<ImageProps> & PropsToken_3;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ImageProps = ImagePropsBasic & PropsToken_2;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type MaskProps = MaskPropsBasic & PropsToken;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ProgressProps = ProgressPropsBasic & PropsToken_5;

declare type PropsToken = {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
};

declare type PropsToken_2 = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};

declare type PropsToken_3 = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    asPalette?: boolean;
    dir?: boolean;
    overlay?: boolean;
    dynamic?: boolean;
    start?: boolean;
    end?: boolean;
    high?: boolean;
    animationType?: 'type1' | 'type2';
    animationShow?: boolean;
    square?: boolean;
    circle?: boolean;
    rect?: boolean;
    size?: 'auto' | 'x' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    inverse?: boolean;
    rounded?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

declare type PropsToken_4 = {};

declare type PropsToken_5 = {
    point?: boolean;
    linear?: boolean;
    circular?: boolean;
    indeterminate?: 'type1' | 'type2' | 'type3';
    position?: 'top' | 'bottom' | 'static';
    dense?: boolean;
    inverse?: boolean;
    size?: 'sm' | 'md' | 'lg';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};

declare type PropsToken_6 = {};

declare type PropsToken_7 = {};

declare type PropsToken_8 = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    block?: boolean;
    isValue?: boolean;
    basic?: boolean;
    boxed?: boolean;
    tonal?: boolean;
    filled?: boolean;
    outlined?: boolean;
    classic?: boolean;
    arrowCarousel?: boolean;
    arrowStepper?: boolean;
    arrowAlign?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    align?: 'center' | 'right' | 'left';
    width?: string | 'custom';
    size?: 'sm' | 'md' | 'lg' | 'display';
};

declare type PropsToken_9 = {};

export { }


declare module '@vue/runtime-core' {
    interface GlobalComponents {
        D1Accordion: typeof D1Accordion;
        D1ActionSheet: typeof D1ActionSheet;
        D1Actions: typeof D1Actions;
        D1Anchor: typeof D1Anchor;
        D1Arrow: typeof D1Arrow;
        D1Badge: typeof D1Badge;
        D1Bars: typeof D1Bars;
        D1Block: typeof D1Block;
        D1Button: typeof D1Button;
        D1Cell: typeof D1Cell;
        D1Chip: typeof D1Chip;
        D1ChipGroup: typeof D1ChipGroup;
        D1Dialog: typeof D1Dialog;
        D1Field: typeof D1Field;
        D1FieldCounter: typeof D1FieldCounter;
        D1FieldLabel: typeof D1FieldLabel;
        D1FieldMessage: typeof D1FieldMessage;
        D1Icon: typeof D1Icon;
        D1Image: typeof D1Image;
        D1Input: typeof D1Input;
        D1List: typeof D1List;
        D1ListGroup: typeof D1ListGroup;
        D1ListItem: typeof D1ListItem;
        D1ListMenu: typeof D1ListMenu;
        D1Mask: typeof D1Mask;
        D1Menu: typeof D1Menu;
        D1Modal: typeof D1Modal;
        D1MotionTransform: typeof D1MotionTransform;
        D1Page: typeof D1Page;
        D1Progress: typeof D1Progress;
        D1Ripple: typeof D1Ripple;
        D1Scrollbar: typeof D1Scrollbar;
        D1Section: typeof D1Section;
        D1Select: typeof D1Select;
        D1SelectValue: typeof D1SelectValue;
        D1Skeleton: typeof D1Skeleton;
        D1TextareaAutosize: typeof D1TextareaAutosize;
        D1Tooltip: typeof D1Tooltip;
        D1Window: typeof D1Window;
    }
}
