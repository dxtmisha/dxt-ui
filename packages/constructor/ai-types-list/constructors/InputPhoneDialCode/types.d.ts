// md5:5413a141230c6ce107c6ddcc66f712ec
import { ConstrClass } from '@dxtmisha/functional';
import { ButtonComponentInclude } from '../Button';
import { MenuCountryComponentInclude, MenuCountryEmits } from '../MenuCountry';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputPhoneDialCodeComponents = ButtonComponentInclude & MenuCountryComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputPhoneDialCodeEmits = MenuCountryEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputPhoneDialCodeExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputPhoneDialCodeSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputPhoneDialCodeClasses = {
    main: ConstrClass;
    button: string;
    menuCountry: string;
};
