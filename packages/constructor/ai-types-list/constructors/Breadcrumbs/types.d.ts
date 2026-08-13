// md5:0bcb600af02fd0044f1fecd54555bda7
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BreadcrumbsComponents = {
    /** Breadcrumb item component / Компонент элемента хлебных крошек */
    breadcrumbItem: object;
};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BreadcrumbsEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BreadcrumbsExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BreadcrumbsSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BreadcrumbsClasses = {
    /** Main class / Главный класс */
    main: ConstrClass;
    item: string;
};
