import { ConstrBind } from '@dxtmisha/functional';
import { IconPropsBasic } from '../Icon';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { AriaList } from '../../types/ariaTypes';
import { FieldPropsBasic } from './props';
import { FieldSlots } from './types';
/**
 * Control data passed to slots and subcomponents/
 * Данные управления, передаваемые в слоты и под-компоненты
 */
export type FieldControl = {
    /**
     * Unique element identifier for binding label and input/
     * Уникальный идентификатор элемента для связывания label и input
     */
    id: string;
    /**
     * CSS classes for the visible input area/
     * CSS-классы для видимой зоны ввода
     */
    className: string;
    /**
     * CSS classes for the hidden native input element/
     * CSS-классы для скрытого нативного элемента ввода
     */
    classHidden: string;
    /**
     * CSS classes applied when the field is focused/
     * CSS-классы, применяемые при фокусировке на поле
     */
    classForFocus: string;
    binds: AriaList & {
        id: string;
        class: string;
    };
};
/**
 * Interface for describing which components need to be connected for Field work/
 * Интерфейс для описания, какие компоненты надо подключить для работы Field
 */
export type FieldComponentInclude = {
    field: object;
};
/**
 * Type describing available slots for Field/
 * Тип, описывающий доступные слоты для Field
 */
export interface FieldSlotsInclude extends Omit<FieldSlots, 'default'> {
}
/**
 * Properties that can be passed to FieldInclude/
 * Свойства, которые можно передать в FieldInclude
 */
export type FieldPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = Omit<FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress>, 'disabledPrevious' | 'disabledNext' | 'to' | 'value' | 'maxlength' | 'cancelShow' | 'counter' | 'counterTemplate' | 'counterTop' | 'iconArrowLeft' | 'iconArrowRight' | 'iconPlus' | 'iconMinus' | 'iconClose'> & {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    align?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    fieldAttrs?: ConstrBind<Field>;
};
