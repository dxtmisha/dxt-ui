import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { MotionAxisEmitOptions } from '@dxtmisha/constructor/MotionAxis';
import { MotionAxisPropsBasic } from '@dxtmisha/constructor/MotionAxis';
import { MotionAxisSelectedValue } from '@dxtmisha/constructor/MotionAxis';
import { MotionAxisSlots } from '@dxtmisha/constructor/MotionAxis';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<D1MotionAxisProps, {
    back(): void;
    next(): void;
    to(selected: MotionAxisSelectedValue): void;
    top(selected: MotionAxisSelectedValue): void;
    right(selected: MotionAxisSelectedValue): void;
    bottom(selected: MotionAxisSelectedValue): void;
    left(selected: MotionAxisSelectedValue): void;
    down(selected: MotionAxisSelectedValue): void;
    up(selected: MotionAxisSelectedValue): void;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    start: (selected: MotionAxisSelectedValue) => any;
    end: (selected: MotionAxisSelectedValue) => any;
    "update:selected": (value: MotionAxisSelectedValue) => any;
    "update:modelSelected": (value: MotionAxisSelectedValue) => any;
    motionAxis: (options: MotionAxisEmitOptions) => any;
}, string, PublicProps, Readonly<D1MotionAxisProps> & Readonly<{
    onStart?: ((selected: MotionAxisSelectedValue) => any) | undefined;
    onEnd?: ((selected: MotionAxisSelectedValue) => any) | undefined;
    "onUpdate:selected"?: ((value: MotionAxisSelectedValue) => any) | undefined;
    "onUpdate:modelSelected"?: ((value: MotionAxisSelectedValue) => any) | undefined;
    onMotionAxis?: ((options: MotionAxisEmitOptions) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<MotionAxisSlots> & MotionAxisSlots;
    refs: {};
    rootEl: any;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const D1MotionAxis: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export declare type D1MotionAxisProps = MotionAxisPropsBasic & PropsToken;

declare type PropsToken = {
    axis?: 'x' | 'y' | 'z';
    direction?: 'next' | 'back' | 'auto';
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
