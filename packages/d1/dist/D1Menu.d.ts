import { BadgePropsBasic } from '@dxtmisha/constructor/Badge';
import { BarsPropsBasic } from '@dxtmisha/constructor/Bars';
import { ButtonPropsBasic } from '@dxtmisha/constructor/Button';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { DefineComponent } from 'vue';
import { IconPropsBasic } from '@dxtmisha/constructor/Icon';
import { ImagePropsBasic } from '@dxtmisha/constructor/Image';
import { ListItemPropsBasic } from '@dxtmisha/constructor/ListItem';
import { ListList } from '@dxtmisha/functional';
import { ListNames } from '@dxtmisha/functional';
import { ListPropsBasic } from '@dxtmisha/constructor/List';
import { ListSlots } from '@dxtmisha/constructor/List';
import { MenuControlItem } from '@dxtmisha/constructor/Menu';
import { MenuPropsBasic } from '@dxtmisha/constructor/Menu';
import { MenuSlotInclude } from '@dxtmisha/constructor/Menu';
import { NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';
import { ProgressPropsBasic } from '@dxtmisha/constructor/Progress';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { ScrollbarPropsBasic } from '@dxtmisha/constructor/Scrollbar';
import { WindowControlItem } from '@dxtmisha/constructor/Window';
import { WindowEmitOptions } from '@dxtmisha/constructor/Window';
import { WindowExpose } from '@dxtmisha/constructor/Window';
import { WindowPropsBasic } from '@dxtmisha/constructor/Window';

declare const __VLS_component: DefineComponent<D1MenuProps, {
    id: ComputedRef<string | undefined>;
    open: ComputedRef<boolean>;
    control: ComputedRef< WindowControlItem | undefined>;
    setOpen: WindowExpose["setOpen"];
    toOpen: WindowExpose["toOpen"];
    toClose: WindowExpose["toClose"];
    toggle: WindowExpose["toggle"];
    windowElement: Ref< ConstrBind<WindowExpose> | undefined>;
    isSelected: ComputedRef<boolean>;
    selectedList: ComputedRef<ListList>;
    selectedNames: ComputedRef<ListNames>;
    selectedValues: ComputedRef<any[]>;
    loading: Ref<boolean>;
    previous(): NumberOrStringOrBoolean | undefined;
    next(): NumberOrStringOrBoolean | undefined;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
    window: (options: WindowEmitOptions) => any;
    bars: (event: MouseEvent, value: EventClickValue) => any;
    barsLite: (value: EventClickValue) => any;
    barsBack: (value: EventClickValue) => any;
    "update:selected": (value: string) => any;
    "update:modelSelected": (value: string) => any;
    updateValue: (value?: NumberOrStringOrBoolean | undefined) => any;
    clickSlot: (value?: string | undefined) => any;
}, string, PublicProps, Readonly<D1MenuProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
    onWindow?: ((options: WindowEmitOptions) => any) | undefined;
    onBars?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onBarsLite?: ((value: EventClickValue) => any) | undefined;
    onBarsBack?: ((value: EventClickValue) => any) | undefined;
    "onUpdate:selected"?: ((value: string) => any) | undefined;
    "onUpdate:modelSelected"?: ((value: string) => any) | undefined;
    onUpdateValue?: ((value?: NumberOrStringOrBoolean | undefined) => any) | undefined;
    onClickSlot?: ((value?: string | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly< ListSlots & MenuSlotInclude & {
        control?(props: MenuControlItem): any;
    }> & ListSlots & MenuSlotInclude & {
        control?(props: MenuControlItem): any;
    };
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
declare type BadgeProps = BadgePropsBasic<IconProps> & PropsToken_3;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type BarsProps = BarsPropsBasic<ButtonProps> & PropsToken_8;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ButtonProps = ButtonPropsBasic<IconProps, ProgressProps> & PropsToken_7;

export declare const D1Menu: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export declare type D1MenuProps = MenuPropsBasic<ListProps, ListItemProps, BarsProps, WindowProps> & PropsToken_11;

/**
 * Value object for click events/ Объект значения для событий клика
 */
declare type EventClickValue = {
    /** Event type/ Тип события */
    type: string;
    /** Event value/ Значение события */
    value: any;
    /** Additional event details/ Дополнительные детали события */
    detail: Record<string, any> | undefined;
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
declare type ListItemProps = ListItemPropsBasic<IconProps, BadgeProps, ProgressProps> & PropsToken_5;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ListProps = ListPropsBasic<IconProps, ListItemProps> & PropsToken_6;

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

declare type PropsToken_11 = {
    hideList?: boolean;
    barsAdaptive?: 'showAlways' | 'showSm' | 'showMd' | 'showLg' | 'showXl' | 'show2xl';
};

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

declare type PropsToken_3 = {
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

declare type PropsToken_5 = {
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

declare type PropsToken_6 = {
    focus?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
};

declare type PropsToken_7 = {
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

declare type PropsToken_8 = {
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};

declare type PropsToken_9 = {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
};

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ScrollbarProps = ScrollbarPropsBasic & PropsToken_9;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type WindowProps = WindowPropsBasic<ScrollbarProps, IconProps, ImageProps> & PropsToken_10;

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
