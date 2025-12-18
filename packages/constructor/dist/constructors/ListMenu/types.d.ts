import { ConstrClass } from '@dxtmisha/functional';
import { WindowComponentInclude, WindowControlItem, WindowEmitsInclude, WindowExposeInclude } from '../Window';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListMenuComponents = WindowComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListMenuEmits = WindowEmitsInclude;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ListMenuExpose extends WindowExposeInclude {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ListMenuSlots {
    head?(props: WindowControlItem): any;
    list?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ListMenuClasses = {
    main: ConstrClass;
    head: string;
    list: string;
};
