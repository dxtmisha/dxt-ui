import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentInclude } from '../Ripple';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { CaptionSlots } from '../../types/captionTypes';
import { CellClassesSub } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CellComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CellEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CellExpose extends EventClickExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CellSlots extends LabelSlots, DescriptionSlots, CaptionSlots {
    /** Slot for displaying additional content on the right side of the cell/ Слот для отображения дополнительного контента в правой части ячейки */
    trailing?(props: CellClassesSub): any;
    /** Slot for displaying the main body content of the cell/ Слот для отображения основного содержимого тела ячейки */
    body?(props: CellClassesSub): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CellClasses = {
    main: ConstrClass;
    context: string;
    contextTrailing: string;
    label: string;
    description: string;
    caption: string;
    icon: string;
    trailing: string;
    body: string;
    loading: string;
};
