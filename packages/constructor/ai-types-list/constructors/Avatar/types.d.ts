// md5:5bacc3265449539ff5284af164d9815c
import { ConstrClass } from '@dxtmisha/functional';
import { LabelSlots } from '../../types/labelTypes';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { ImageComponentInclude, ImageEmitsInclude } from '../Image';
import { BadgeComponentInclude } from '../Badge';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AvatarComponents = ImageComponentInclude & BadgeComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type AvatarEmits = ImageEmitsInclude & EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface AvatarExpose extends EventClickExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AvatarSlots extends LabelSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type AvatarClasses = {
    /** Class for the main element / Класс для главного элемента */
    main: ConstrClass;
    label: string;
};
