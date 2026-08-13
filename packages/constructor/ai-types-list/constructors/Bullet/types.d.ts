// md5:61b9b2434267d19f1c45b7aed52e8532
import { ConstrClass } from '@dxtmisha/functional';
import { BulletItemComponentInclude } from '../BulletItem';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BulletComponents = BulletItemComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BulletEmits = {};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BulletExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BulletSlots {
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BulletClasses = {
    main: ConstrClass;
    item: string;
};
