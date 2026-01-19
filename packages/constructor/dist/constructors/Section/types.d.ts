import { ConstrClass } from '@dxtmisha/functional';
import { BlockComponents, BlockEmits, BlockExpose, BlockSlots } from '../Block';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SectionComponents = BlockComponents;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SectionEmits = BlockEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SectionExpose extends BlockExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SectionSlots extends BlockSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SectionClasses = {
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
