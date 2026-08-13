// md5:44496d8bd48d8e52beef8ee6dbfd8ec5
import { ConstrClass } from '@dxtmisha/functional';
import { ModelEmits } from '../../types/modelTypes';
import { FieldLabelComponentInclude } from '../FieldLabel';
import { FieldMessageComponentInclude } from '../FieldMessage';
import { InputCodeItemComponentInclude } from '../InputCodeItem';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputCodeComponents = InputCodeItemComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputCodeEmits = ModelEmits & {
    /** Event triggered on value change / Событие, вызываемое при изменении значения */
    input: [value: string];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputCodeExpose {
    /**
     * Returns the current value.
     *
     * Возвращает текущее значение.
     */
    getValue(): string;
    /**
     * Set new value.
     *
     * Установить новое значение.
     * @param value new value / новое значение
     */
    set(value: string | number): void;
    /**
     * Reset value.
     *
     * Сбросить значение.
     */
    reset(): void;
    /**
     * Set focus.
     *
     * Установить фокус.
     */
    focus(): void;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputCodeSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputCodeClasses = {
    /** Main class name / Основное имя класса */
    main: ConstrClass;
    context: string;
};
