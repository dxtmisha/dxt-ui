import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponentInclude } from '../Button';
import { EventClickEmits } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BarsComponents = ButtonComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BarsEmits = EventClickEmits & {
    'update:action': [value: boolean];
    'update:modelAction': [value: boolean];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BarsExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BarsSlots extends LabelSlots, DescriptionSlots {
    bars?(props: any): any;
    actionBars?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BarsClasses = {
    main: ConstrClass;
    context: string;
    label: string;
    description: string;
};
