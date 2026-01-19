import { ConstrClass } from '@dxtmisha/functional';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ArrowComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ArrowEmits = {};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ArrowExpose {
    update: () => void;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ArrowSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ArrowClasses = {
    main: ConstrClass;
    mask: string;
    arrow: string;
    arrowLine: string;
    arrowArea: string;
    border: string;
    borderHidden: string;
};
