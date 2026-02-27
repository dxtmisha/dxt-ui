import { AccordionPropsBasic } from '@dxtmisha/constructor/Accordion';
import { AccordionSlots } from '@dxtmisha/constructor/Accordion';
import { CellPropsBasic } from '@dxtmisha/constructor/Cell';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { DefineComponent } from 'vue';
import { IconPropsBasic } from '@dxtmisha/constructor/Icon';
import { ImagePropsBasic } from '@dxtmisha/constructor/Image';
import { MotionTransformEmitOptions } from '@dxtmisha/constructor/MotionTransform';
import { MotionTransformExpose } from '@dxtmisha/constructor/MotionTransform';
import { MotionTransformPropsBasic } from '@dxtmisha/constructor/MotionTransform';
import { ProgressPropsBasic } from '@dxtmisha/constructor/Progress';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

declare const __VLS_component: DefineComponent<D1AccordionProps, {
    motionTransformElement: Ref< ConstrBind<MotionTransformExpose> | undefined>;
    open: Ref<boolean>;
    isShow: ComputedRef<boolean>;
    setOpen(open: boolean): void;
    toOpen(): void;
    toClose(): void;
    toggle(): void;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
    "update:open": (value: boolean) => any;
    "update:modelOpen": (value: boolean) => any;
    transform: (event: Event | undefined, options: MotionTransformEmitOptions) => any;
    transformLite: (options: MotionTransformEmitOptions) => any;
}, string, PublicProps, Readonly<D1AccordionProps> & Readonly<{
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelOpen"?: ((value: boolean) => any) | undefined;
    onTransform?: ((event: Event | undefined, options: MotionTransformEmitOptions) => any) | undefined;
    onTransformLite?: ((options: MotionTransformEmitOptions) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<AccordionSlots> & AccordionSlots;
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
declare type CellProps = CellPropsBasic<IconProps, ProgressProps> & PropsToken_4;

export declare const D1Accordion: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export declare type D1AccordionProps = AccordionPropsBasic<IconProps, CellProps, MotionTransformProps> & PropsToken_6;

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
declare type MotionTransformProps = MotionTransformPropsBasic & PropsToken_5;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
declare type ProgressProps = ProgressPropsBasic & PropsToken_3;

declare type PropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    size?: 'auto' | 'contain' | 'cover';
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

declare type PropsToken_4 = {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    dynamic?: boolean;
    dynamicHover?: boolean;
    divider?: boolean;
    dividerLabel?: 'always' | 'none' | 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl' | 'containerSm' | 'containerMd' | 'containerLg' | 'containerXl' | 'container2xl';
    iconTop?: boolean;
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};

declare type PropsToken_5 = {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways' | 'planeSm' | 'planeMd' | 'planeLg' | 'planeXl' | 'plane2xl';
};

declare type PropsToken_6 = {
    divider?: boolean;
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
