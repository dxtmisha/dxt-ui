// md5:0599262f6e4f1f4eb21d69edb1548c0f
import { ConstrClass } from '@dxtmisha/functional';
import { TableRecordComponents, TableRecordEmits, TableRecordExpose, TableRecordSlots } from '../TableRecord';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableFlexRecordComponents = TableRecordComponents;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableFlexRecordEmits = TableRecordEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableFlexRecordExpose extends TableRecordExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type TableFlexRecordSlots = TableRecordSlots;
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableFlexRecordClasses = {
    /** Main element class name / Основное имя класса элемента */
    main: ConstrClass;
};
