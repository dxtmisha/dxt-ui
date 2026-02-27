import { BadgePropsBasic } from '@dxtmisha/constructor/Badge';
import { BarsPropsBasic } from '@dxtmisha/constructor/Bars';
import { ButtonPropsBasic } from '@dxtmisha/constructor/Button';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { DefineComponent } from 'vue';
import { FieldCounterPropsBasic } from '@dxtmisha/constructor/FieldCounter';
import { FieldLabelPropsBasic } from '@dxtmisha/constructor/FieldLabel';
import { FieldMessagePropsBasic } from '@dxtmisha/constructor/FieldMessage';
import { FieldPropsBasic } from '@dxtmisha/constructor/Field';
import { IconPropsBasic } from '@dxtmisha/constructor/Icon';
import { ImagePropsBasic } from '@dxtmisha/constructor/Image';
import { InputPropsBasic } from '@dxtmisha/constructor/Input';
import { ListItemPropsBasic } from '@dxtmisha/constructor/ListItem';
import { ListPropsBasic } from '@dxtmisha/constructor/List';
import { MaskPropsBasic } from '@dxtmisha/constructor/Mask';
import { MenuExpose } from '@dxtmisha/constructor/Menu';
import { MenuPropsBasic } from '@dxtmisha/constructor/Menu';
import { ProgressPropsBasic } from '@dxtmisha/constructor/Progress';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { ScrollbarPropsBasic } from '@dxtmisha/constructor/Scrollbar';
import { SelectPropsBasic } from '@dxtmisha/constructor/Select';
import { SelectSlots } from '@dxtmisha/constructor/Select';
import { ShallowRef } from 'vue';
import { WindowPropsBasic } from '@dxtmisha/constructor/Window';

declare const __VLS_component: DefineComponent<D1SelectProps, {
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
}, string, PublicProps, Readonly<D1SelectProps> & Readonly<{
    onInput?: ((event: Event | InputEvent, value: FieldValidationItem<any>) => any) | undefined;
    "onUpdate:value"?: ((value: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onInputLite?: ((value: FieldValidationItem<any>) => any) | undefined;
    onChange?: ((event: Event | InputEvent, value: FieldValidationItem<any>) => any) | undefined;
    onChangeLite?: ((value: FieldValidationItem<any>) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<SelectSlots> & SelectSlots;
    refs: {};
    rootEl: any;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type BadgeProps = BadgePropsBasic<IconProps> & PropsToken_10;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type BarsProps = BarsPropsBasic<ButtonProps> & PropsToken_14;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ButtonProps = ButtonPropsBasic<IconProps, ProgressProps> & PropsToken_13;

export declare const D1Select: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export declare type D1SelectProps = SelectPropsBasic<IconProps, FieldProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, InputProps, ProgressProps, MenuProps> & PropsToken_18;

/** Base data for validation check/ Базовые данные проверки */
declare type FieldCheckMain = {
    /** Group key/ Ключ группы */
    group?: string;
    /** Related input element/ Связанный элемент ввода */
    input?: FieldElementDom;
    /** Pattern used/ Используемый шаблон */
    pattern?: FieldPatternItemOrFunction;
};

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type FieldCounterProps = FieldCounterPropsBasic & PropsToken_3;

/** Base input or textarea element/ Базовый элемент input или textarea */
declare type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type FieldLabelProps = FieldLabelPropsBasic<FieldCounterProps, ProgressProps> & PropsToken_5;

/** Single mask fragment meta/ Один фрагмент маски с мета‑данными */
declare type FieldMaskItem = {
    /** Group key/ Ключ группы */
    group: string;
    /** Accumulated value/ Накопленное значение */
    value: string;
    /** Max length for fragment/ Максимальная длина фрагмента */
    maxLength: number;
    /** Fragment filled flag/ Фрагмент заполнен */
    full: boolean;
    /** Caret end flag/ Флаг конца ввода */
    end: boolean;
    /** Characters extracted from value (value split into array)/ Символы извлечённые из value (value разделено на массив символов) */
    chars: string[];
};

/** Masks data split by groups/ Данные маски, разделённые на группы */
declare type FieldMasks = Record<string, FieldMaskItem>;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type FieldMessageProps = FieldMessagePropsBasic<FieldCounterProps> & PropsToken_6;

/** Partial input element for pattern/ Частичный элемент для pattern */
declare type FieldPatternElement = Partial<HTMLInputElement>;

/** Pattern string or element/ Строка шаблона или элемент */
declare type FieldPatternItem = string | FieldPatternElement;

/** Pattern or factory function/ Шаблон или функция‑генератор */
declare type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem);

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type FieldProps = FieldPropsBasic<IconProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken_7;

/** Single validation result/ Результат одной проверки */
declare type FieldValidationItem<Value = any> = FieldCheckMain & {
    /** Custom type marker/ Произвольный тип */
    type?: string;
    /** Pass status/ Статус успешности */
    status?: boolean;
    /** Required flag/ Флаг обязательности */
    required?: boolean;
    /** Full value flag/ Флаг полноты значения */
    isFull?: boolean;
    /** Message text/ Текст сообщения */
    validationMessage?: string;
    /** Native validity state/ Нативное состояние валидности */
    validity?: ValidityState;
    /** Custom validity message (overrides native)/ Кастомное сообщение валидности (перекрывает нативное) */
    validityMessage?: string;
    /** Original value/ Исходное значение */
    value: Value;
    /** Raw input value/ Введённое значение */
    valueInput?: Value;
    /** Extra details/ Дополнительные данные */
    detail?: Record<string, any>;
};

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type IconProps = IconPropsBasic<ImageProps> & PropsToken_2;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ImageProps = ImagePropsBasic & PropsToken;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type InputProps = InputPropsBasic<MaskProps, IconProps, FieldProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken_9;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ListItemProps = ListItemPropsBasic<IconProps, BadgeProps, ProgressProps> & PropsToken_11;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ListProps = ListPropsBasic<IconProps, ListItemProps> & PropsToken_12;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type MaskProps = MaskPropsBasic & PropsToken_8;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type MenuProps = MenuPropsBasic<ListProps, ListItemProps, BarsProps, WindowProps> & PropsToken_17;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ProgressProps = ProgressPropsBasic & PropsToken_4;

declare type PropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};

declare type PropsToken_10 = {
    selected?: boolean;
    hide?: boolean;
    dot?: boolean;
    overlap?: 'rectangular' | 'circular' | 'static';
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'right' | 'center' | 'left';
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'none';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};

declare type PropsToken_11 = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    iconTop?: boolean;
    iconAlign?: 'center' | 'edge';
    fill?: string | 'custom';
    divider?: boolean;
    size?: 'sm' | 'md' | 'lg';
    dense?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};

declare type PropsToken_12 = {
    focus?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
};

declare type PropsToken_13 = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    adaptive?: 'iconAlways' | 'block' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    container?: 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    inverse?: boolean;
    grid?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    text?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    roundedFull?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};

declare type PropsToken_14 = {
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};

declare type PropsToken_15 = {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
};

declare type PropsToken_16 = {
    width?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom';
    height?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom';
    hide?: boolean;
    axis?: 'x' | 'y' | 'on';
    imagePosition?: 'top' | 'left';
    dense?: boolean;
    alignment?: 'center' | 'top' | 'topRight' | 'topLeft' | 'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'bottomFull' | 'left' | 'leftFull';
    origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight';
    adaptive?: 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'actionSheetRight' | 'actionSheetBottom' | 'static' | 'actionSheet' | 'actionSheetToModal' | 'autoStaticSm' | 'autoStaticMd' | 'autoStaticLg' | 'autoStaticXl' | 'autoStatic2xl';
    fullscreen?: boolean;
    overscroll?: boolean;
    closeButton?: boolean;
    closeMobileHide?: boolean;
    widthMatch?: boolean;
    imageSize?: 'sm' | 'md' | 'lg' | 'quarter' | 'half';
};

declare type PropsToken_17 = {
    hideList?: boolean;
    barsAdaptive?: 'showAlways' | 'showSm' | 'showMd' | 'showLg' | 'showXl' | 'show2xl';
};

declare type PropsToken_18 = {};

declare type PropsToken_2 = {
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

declare type PropsToken_3 = {};

declare type PropsToken_4 = {
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

declare type PropsToken_5 = {};

declare type PropsToken_6 = {};

declare type PropsToken_7 = {
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

declare type PropsToken_8 = {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
};

declare type PropsToken_9 = {};

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ScrollbarProps = ScrollbarPropsBasic & PropsToken_15;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type WindowProps = WindowPropsBasic<ScrollbarProps, IconProps, ImageProps> & PropsToken_16;

export { }


declare module '@vue/runtime-core' {
    interface GlobalComponents {
        D1Accordion: typeof components.D1Accordion;
        D1ActionSheet: typeof components.D1ActionSheet;
        D1Actions: typeof components.D1Actions;
        D1Anchor: typeof components.D1Anchor;
        D1Arrow: typeof components.D1Arrow;
        D1Badge: typeof components.D1Badge;
        D1Bars: typeof components.D1Bars;
        D1Block: typeof components.D1Block;
        D1Button: typeof components.D1Button;
        D1Cell: typeof components.D1Cell;
        D1Checkbox: typeof components.D1Checkbox;
        D1Chip: typeof components.D1Chip;
        D1ChipGroup: typeof components.D1ChipGroup;
        D1Dialog: typeof components.D1Dialog;
        D1Field: typeof components.D1Field;
        D1FieldCounter: typeof components.D1FieldCounter;
        D1FieldLabel: typeof components.D1FieldLabel;
        D1FieldMessage: typeof components.D1FieldMessage;
        D1HorizontalScroll: typeof components.D1HorizontalScroll;
        D1Icon: typeof components.D1Icon;
        D1Image: typeof components.D1Image;
        D1Input: typeof components.D1Input;
        D1List: typeof components.D1List;
        D1ListGroup: typeof components.D1ListGroup;
        D1ListItem: typeof components.D1ListItem;
        D1ListMenu: typeof components.D1ListMenu;
        D1Mask: typeof components.D1Mask;
        D1Menu: typeof components.D1Menu;
        D1Modal: typeof components.D1Modal;
        D1MotionAxis: typeof components.D1MotionAxis;
        D1MotionTransform: typeof components.D1MotionTransform;
        D1Page: typeof components.D1Page;
        D1Progress: typeof components.D1Progress;
        D1Ripple: typeof components.D1Ripple;
        D1Scrollbar: typeof components.D1Scrollbar;
        D1Section: typeof components.D1Section;
        D1Select: typeof components.D1Select;
        D1SelectValue: typeof components.D1SelectValue;
        D1Skeleton: typeof components.D1Skeleton;
        D1TabItem: typeof components.D1TabItem;
        D1Tabs: typeof components.D1Tabs;
        D1TabsNavigation: typeof components.D1TabsNavigation;
        D1Textarea: typeof components.D1Textarea;
        D1TextareaAutosize: typeof components.D1TextareaAutosize;
        D1Tooltip: typeof components.D1Tooltip;
        D1Window: typeof components.D1Window;
    }
}
