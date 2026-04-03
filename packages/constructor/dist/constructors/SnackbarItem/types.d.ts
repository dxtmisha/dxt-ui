import { ConstrClass } from '@dxtmisha/functional';
import { DescriptionSlots } from '../../types/descriptionTypes';
import { EventClickEmits } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
import { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions';
import { ButtonComponentInclude } from '../Button';
import { IconComponentInclude } from '../Icon';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SnackbarItemComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SnackbarItemEmits = ActionsEmitsInclude & EventClickEmits & {
    close: [value: string | undefined];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SnackbarItemExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SnackbarItemSlots extends LabelSlots, DescriptionSlots {
    body?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SnackbarItemClasses = {
    main: ConstrClass;
    tool: string;
    icon: string;
    trailing: string;
    context: string;
    label: string;
    description: string;
    body: string;
    button: string;
    close: string;
    actions: string;
};
