// md5:b521b6d995dfb6db5383a3b3ac5b31ed
import { ConstrClass, SortColumnItem } from '@dxtmisha/functional';
import { ChipComponentInclude } from '../Chip';
import { IconComponentInclude } from '../Icon';
import { TableItemSlots } from '../TableItem';
import { TooltipComponentInclude } from '../Tooltip';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableHeaderItemComponents = ChipComponentInclude & IconComponentInclude & TooltipComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableHeaderItemEmits = {
    /** Event triggered when sort button is clicked / Событие, вызываемое при клике по кнопке сортировки */
    sort: [item: SortColumnItem];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableHeaderItemExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TableHeaderItemSlots extends TableItemSlots {
    /** Slot for displaying custom tooltip body / Слот для отображения пользовательского содержимого подсказки */
    tooltip?(): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableHeaderItemClasses = {
    /** Main element class name / Основное имя класса элемента */
    main: ConstrClass;
    label: string;
    description: string;
    body: string;
    sort: string;
    tooltip: string;
};
