import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { MaskPropsBasic } from '@dxtmisha/constructor/Mask';
import { MaskSlots } from '@dxtmisha/constructor/Mask';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<D1MaskProps, {
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
}, string, PublicProps, Readonly<D1MaskProps> & Readonly<{
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

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<MaskSlots> & MaskSlots;
    refs: {};
    rootEl: any;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const D1Mask: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export declare type D1MaskProps = MaskPropsBasic & PropsToken;

/** Base data for validation check/ Базовые данные проверки */
declare type FieldCheckMain = {
    /** Group key/ Ключ группы */
    group?: string;
    /** Related input element/ Связанный элемент ввода */
    input?: FieldElementDom;
    /** Pattern used/ Используемый шаблон */
    pattern?: FieldPatternItemOrFunction;
};

/** Base input or textarea element/ Базовый элемент input или textarea */
declare type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;

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

/** Partial input element for pattern/ Частичный элемент для pattern */
declare type FieldPatternElement = Partial<HTMLInputElement>;

/** Pattern string or element/ Строка шаблона или элемент */
declare type FieldPatternItem = string | FieldPatternElement;

/** Pattern or factory function/ Шаблон или функция‑генератор */
declare type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem);

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

declare type PropsToken = {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
};

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
