// md5:9d510ae01bd4296128f3e6e1c0af13e3
import { ConstrClass } from '@dxtmisha/functional';
import { TableHeaderItemComponentInclude, TableHeaderItemEmits } from '../TableHeaderItem';
import { TableItemComponentInclude } from '../TableItem';
import { TableRecordItemSlots } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableRecordComponents = TableHeaderItemComponentInclude & TableItemComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableRecordEmits = TableHeaderItemEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableRecordExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type TableRecordSlots = TableRecordItemSlots;
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableRecordClasses = {
    /** Main element class name / Основное имя класса элемента */
    main: ConstrClass;
};
