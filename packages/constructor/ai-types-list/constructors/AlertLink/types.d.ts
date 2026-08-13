// md5:15c3eb04e47190faf63b7dc1715f72a5
import { ConstrClass } from '@dxtmisha/functional';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AlertLinkComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type AlertLinkEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface AlertLinkExpose extends EventClickExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AlertLinkSlots extends LabelSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type AlertLinkClasses = {
    /** Main class / Главный класс */
    main: ConstrClass;
    label: string;
};
