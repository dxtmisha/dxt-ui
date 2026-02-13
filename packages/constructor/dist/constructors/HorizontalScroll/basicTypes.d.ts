import { ConstrBind } from '@dxtmisha/functional';
import { HorizontalScrollPropsBasic } from './props';
/**
 * Type for the control item of the horizontal scroll.
 *
 * Тип для элемента управления горизонтальной прокруткой.
 */
export type HorizontalScrollControlItem = {
    classItem: string;
    classItemSelected: string;
    binds: {
        class: string;
    };
};
/**
 * Type for the component include.
 *
 * Тип для подключения компонента.
 */
export type HorizontalScrollComponentInclude = {
    horizontalScroll?: object;
};
/**
 * Type for the properties include.
 *
 * Тип для подключения свойств.
 */
export type HorizontalScrollPropsInclude<HorizontalScroll extends HorizontalScrollPropsBasic = HorizontalScrollPropsBasic> = {
    horizontalScrollFlush?: boolean;
    horizontalScrollAttrs?: ConstrBind<HorizontalScroll>;
};
