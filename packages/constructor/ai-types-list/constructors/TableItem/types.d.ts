// md5:ad4d48c91b7bdf88a39104d47153338d
import { ConstrClass } from '@dxtmisha/functional';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableItemComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableItemEmits = {};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableItemExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TableItemSlots extends LabelSlots, DescriptionSlots {
    /** Slot for custom cell context / Слот для пользовательского контекста ячейки */
    context?(): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableItemClasses = {
    /** Main class name of the table item / Основное имя класса ячейки таблицы */
    main: ConstrClass;
    label: string;
    description: string;
};
