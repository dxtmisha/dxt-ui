import { ConstrClass } from '@dxtmisha/functional';
import { BlockComponents, BlockEmits, BlockExpose, BlockSlots } from '../Block';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type PageComponents = BlockComponents;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type PageEmits = BlockEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface PageExpose extends BlockExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface PageSlots extends BlockSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type PageClasses = {
    main: ConstrClass;
    headline: string;
    header: string;
    label: string;
    description: string;
    caption: string;
    icon: string;
    space: string;
    body: string;
};
