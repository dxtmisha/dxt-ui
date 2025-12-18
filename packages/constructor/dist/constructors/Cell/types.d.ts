import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentsInclude } from '../Ripple';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelExpose, LabelSlots } from '../../types/labelTypes';
import { DescriptionExpose, DescriptionSlots } from '../../types/descriptionTypes';
import { CaptionSlots } from '../../types/captionTypes';
import { CellClassesSub } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CellComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentsInclude;
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
export interface CellExpose extends LabelExpose, DescriptionExpose, EventClickExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CellSlots extends LabelSlots, DescriptionSlots, CaptionSlots {
    trailing?(props: CellClassesSub): any;
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
