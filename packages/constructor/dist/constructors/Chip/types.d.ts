import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponents, ButtonEmits, ButtonExpose, ButtonSlots } from '../Button';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ChipComponents = ButtonComponents;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ChipEmits = ButtonEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ChipExpose extends ButtonExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ChipSlots extends ButtonSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ChipClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    trailing: string;
    loading: string;
};
