// md5:0aa2d28c3f357b6f06a05b936b81b031
import { ConstrClass } from '@dxtmisha/functional';
import { ImageEventData, ImageEventItem, ImageTypeItem } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ImageComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ImageEmits = {
    /** Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения */
    load: [image: ImageEventData];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export type ImageExpose = {
    /** Current image type/ Текущий тип изображения */
    getType: () => ImageTypeItem;
    /** Current image data/ Текущие данные изображения */
    getData: () => ImageEventItem;
};
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ImageSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ImageClasses = {
    main: ConstrClass;
};
