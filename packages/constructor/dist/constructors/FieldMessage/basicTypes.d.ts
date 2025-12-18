import { ConstrBind } from '@dxtmisha/functional';
import { FieldMessagePropsBasic } from './props';
import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
/**
 * Type describing available slots/ Тип, описывающий доступные слоты
 */
export type FieldMessageSlot = {
    message?: string;
    helperMessage?: string;
    validationMessage?: string;
};
/**
 * Interface for describing which components need to be connected for FieldMessage work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldMessage
 */
export type FieldMessageComponentInclude = {
    fieldMessage: object;
};
/**
 * Properties that can be passed to FieldMessageInclude/
 * Свойства, которые можно передать в FieldMessageInclude
 */
export interface FieldMessagePropsInclude<FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends FieldCounterPropsInclude<FieldCounter> {
    forceShowMessage?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    fieldMessageAttrs?: ConstrBind<FieldMessage>;
    helperId?: string;
    validationId?: string;
}
