import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { BadgeComponentInclude } from '../Badge';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentsInclude } from '../Ripple';
import { LabelHighlightSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { PrefixSlots } from '../../types/prefixTypes';
import { CaptionSlots } from '../../types/captionTypes';
import { SuffixSlots } from '../../types/suffixTypes';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentsInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListItemEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ListItemExpose extends EventClickExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ListItemSlots extends LabelHighlightSlots, DescriptionSlots, PrefixSlots, CaptionSlots, SuffixSlots {
    leading?(props: any): any;
    trailing?(props: any): any;
    body?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ListItemClasses = {
    main: ConstrClass;
    body: string;
    context: string;
    label: string;
    highlight: string;
    prefix: string;
    caption: string;
    description: string;
    icon: string;
    trailing: string;
    badge: string;
    input: string;
};
