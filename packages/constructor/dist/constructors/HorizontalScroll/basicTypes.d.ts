import { ConstrBind } from '@dxtmisha/functional';
import { HorizontalScrollPropsBasic } from './props';
/**
 * Type for the control item of the horizontal scroll.
 *
 * Тип для элемента управления горизонтальной прокруткой.
 */
export type HorizontalScrollControlItem = {
    /** CSS class for the item/ CSS-класс для элемента */
    classItem: string;
    /** CSS class for the selected item/ CSS-класс для выбранного элемента */
    classItemSelected: string;
    /** Binds for the scroll controller/ Привязки для контроллера прокрутки */
    binds: {
        /** CSS class for the binding/ CSS-класс для привязки */
        class: string;
    };
};
/**
 * Type for the component include.
 *
 * Тип для подключения компонента.
 */
export type HorizontalScrollComponentInclude = {
    /** Horizontal scroll component configuration/ Конфигурация компонента горизонтальной прокрутки */
    horizontalScroll?: object;
};
/**
 * Type for the properties include.
 *
 * Тип для подключения свойств.
 */
export type HorizontalScrollPropsInclude<HorizontalScroll extends HorizontalScrollPropsBasic = HorizontalScrollPropsBasic> = {
    /** Whether the scroll area is flush with the edges/ Прилегает ли область прокрутки к краям */
    horizontalScrollFlush?: boolean;
    /** Alignment of the horizontal scroll/ Выравнивание горизонтальной прокрутки */
    horizontalScrollAlign?: 'block' | 'left';
    /** Additional attributes for the horizontal scroll/ Дополнительные атрибуты для горизонтальной прокрутки */
    horizontalScrollAttrs?: ConstrBind<HorizontalScroll>;
};
