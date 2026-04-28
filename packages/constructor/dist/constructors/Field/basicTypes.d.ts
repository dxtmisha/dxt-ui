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
    /** Properties bound to the input element/ Свойства, привязанные к элементу ввода */
    binds: AriaList & {
        /** Unique ID/ Уникальный идентификатор */
        id: string;
        /** Class name/ Имя класса */
        class: string;
    };
};
/**
 * Interface for describing which components need to be connected for Field work/
 * Интерфейс для описания, какие компоненты надо подключить для работы Field
 */
export type FieldComponentInclude = {
    /** Field component configuration/ Конфигурация компонента поля */
    field?: object;
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
    /** Status/ Статус */
    /** Whether the field is focused/ Сфокусировано ли поле */
    focus?: boolean;
    /** Whether the field is selected/ Выбрано ли поле */
    selected?: boolean;
    /** Whether the field is read-only/ Находится ли поле в режиме «только для чтения» */
    readonly?: boolean;
    /** Whether the field is disabled/ Отключено ли поле */
    disabled?: boolean;
    /** Style/ Стили */
    /** Alignment of content in the field/ Выравнивание контента в поле */
    align?: 'center' | 'right' | 'left';
    /** Cancellation behavior/ Поведение отмены */
    cancel?: 'auto' | 'always' | 'none';
    /** Additional attributes for the Field component/ Дополнительные атрибуты для компонента поля */
    fieldAttrs?: ConstrBind<Field>;
};
