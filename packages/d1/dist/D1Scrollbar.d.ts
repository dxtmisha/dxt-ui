import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';
import { ScrollbarEdgeType } from '@dxtmisha/constructor/Scrollbar';
import { ScrollbarPropsBasic } from '@dxtmisha/constructor/Scrollbar';
import { ScrollbarSlots } from '@dxtmisha/constructor/Scrollbar';

declare const __VLS_component: DefineComponent<D1ScrollbarProps, {
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    top: (isTop: boolean) => any;
    bottom: (isBottom: boolean) => any;
    reachTop: () => any;
    leaveTop: () => any;
    reachBottom: () => any;
    leaveBottom: () => any;
    edge: (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => any;
}, string, PublicProps, Readonly<D1ScrollbarProps> & Readonly<{
    onTop?: ((isTop: boolean) => any) | undefined;
    onBottom?: ((isBottom: boolean) => any) | undefined;
    onReachTop?: (() => any) | undefined;
    onLeaveTop?: (() => any) | undefined;
    onReachBottom?: (() => any) | undefined;
    onLeaveBottom?: (() => any) | undefined;
    onEdge?: ((isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ScrollbarSlots> & ScrollbarSlots;
    refs: {};
    rootEl: any;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const D1Scrollbar: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export declare type D1ScrollbarProps = ScrollbarPropsBasic & PropsToken;

declare type PropsToken = {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
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
