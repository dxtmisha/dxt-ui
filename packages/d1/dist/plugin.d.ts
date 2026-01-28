import { Plugin as Plugin_2 } from 'vite';
import { PluginOptions } from '@dxtmisha/constructor/plugin';

/**
 * Initializes the Vite plugin for the design system.
 *
 * Инициализирует плагин Vite для дизайн-системы.
 * @param options plugin options / настройки плагина
 */
export declare function uiD1VitePlugin(options?: PluginOptions): Plugin_2;

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
