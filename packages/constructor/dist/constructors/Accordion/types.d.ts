import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { CellComponentInclude, CellSlotsInclude } from '../Cell';
import { MotionTransformComponentInclude, MotionTransformControlItem, MotionTransformEmitsInclude, MotionTransformExposeInclude } from '../MotionTransform';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AccordionComponents = CellComponentInclude & MotionTransformComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type AccordionEmits = EventClickEmits & MotionTransformEmitsInclude & {
    'update:open': [value: boolean];
    'update:modelOpen': [value: boolean];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface AccordionExpose extends MotionTransformExposeInclude {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AccordionSlots extends CellSlotsInclude {
    default?(props: MotionTransformControlItem): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type AccordionClasses = {
    main: ConstrClass;
    head: string;
    body: string;
};
