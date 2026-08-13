// md5:a5a2c0330abbf63feb71639c8b98c177
import { ConstrClass } from '@dxtmisha/functional';
import { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions';
import { ImageComponentInclude, ImageEmitsInclude } from '../Image';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { LabelSlots } from '../../types/labelTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type PlaceholderComponents = ImageComponentInclude & ActionsComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type PlaceholderEmits = ImageEmitsInclude & ActionsEmitsInclude;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface PlaceholderExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface PlaceholderSlots extends LabelSlots, DescriptionSlots {
    context?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type PlaceholderClasses = {
    main: ConstrClass;
    image: string;
    label: string;
    description: string;
    actions: string;
};
