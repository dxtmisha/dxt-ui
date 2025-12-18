import { ConstrClass } from '@dxtmisha/functional';
import { CaptionSlots } from '../../types/captionTypes';
import { PrefixSlots } from '../../types/prefixTypes';
import { SuffixSlots } from '../../types/suffixTypes';
import { EventClickEmits } from '../../types/eventClickTypes';
import { IconComponentInclude } from '../Icon';
import { FieldLabelComponentInclude, FieldLabelSlotsInclude } from '../FieldLabel';
import { FieldMessageComponentInclude } from '../FieldMessage';
import { ProgressComponentInclude } from '../Progress';
import { FieldControl } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type FieldComponents = IconComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type FieldEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface FieldExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface FieldSlots extends CaptionSlots, PrefixSlots, SuffixSlots, FieldLabelSlotsInclude {
    leading?(props: FieldControl): any;
    trailing?(props: FieldControl): any;
    default?(props: FieldControl): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type FieldClasses = {
    main: ConstrClass;
    body: string;
    bodyInput: string;
    bodyTitle: string;
    bodyTitleLabel: string;
    bodyTitleLabelText: string;
    bodyScoreboard: string;
    bodyScoreboardLeft: string;
    bodyScoreboardRight: string;
    bodyScoreboardSpace: string;
    bodyScoreboardInput: string;
    bodyBorder: string;
    required: string;
};
