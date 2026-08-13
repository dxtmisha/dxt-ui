// md5:9ffc56ff496a0fe312ef676e6d7291a9
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { ButtonComponentInclude } from '../Button';
import { AlertLinkComponentInclude, AlertLinkEmitsInclude } from '../AlertLink';
import { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions';
import { EventClickEmits } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
import { DescriptionSlots } from '../../types/descriptionTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AlertComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude & AlertLinkComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type AlertEmits = AlertLinkEmitsInclude & ActionsEmitsInclude & EventClickEmits & {
    close: [];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface AlertExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AlertSlots extends LabelSlots, DescriptionSlots {
    trailing?(props: any): any;
    body?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type AlertClasses = {
    main: ConstrClass;
    icon: string;
    trailing: string;
    context: string;
    label: string;
    description: string;
    body: string;
    button: string;
    buttons: string;
    buttonClose: string;
    links: string;
    linksItem: string;
    actions: string;
};
