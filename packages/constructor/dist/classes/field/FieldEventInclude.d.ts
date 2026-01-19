import { ConstrEmit } from '@dxtmisha/functional';
import { ModelInclude } from '../ModelInclude';
import { FieldChangeInclude } from './FieldChangeInclude';
import { FieldValueInclude } from './FieldValueInclude';
import { FieldValidationInclude } from './FieldValidationInclude';
import { FieldAllProps, FieldBasicEmits, FieldValidationItem } from '../../types/fieldTypes';
/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export declare class FieldEventInclude {
    protected readonly props: FieldAllProps;
    protected readonly change: FieldChangeInclude;
    protected readonly value: FieldValueInclude;
    protected readonly validation?: FieldValidationInclude | undefined;
    protected readonly emits?: ConstrEmit<FieldBasicEmits> | undefined;
    protected readonly model: ModelInclude;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param change object for working with data change label/ объект для работы с меткой об изменении данных
     * @param value object for working with values/ объект для работы со значениями
     * @param validation object for working with validity/ объект для работы с валидностью
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: FieldAllProps, change: FieldChangeInclude, value: FieldValueInclude, validation?: FieldValidationInclude | undefined, emits?: ConstrEmit<FieldBasicEmits> | undefined);
    /**
     * Events for losing focus.
     *
     * События для потери фокуса.
     */
    readonly onBlur: () => void;
    /**
     * Call of data change event.
     *
     * Вызов события изменения данных.
     * @param event event object/ объект события
     * @param data object with data/ объект с данными
     */
    readonly onInput: (event: InputEvent, data?: Record<string, any>) => void;
    /**
     * Triggering the change event after losing focus.
     *
     * Вызов события изменения после потери фокуса.
     * @param event event object/ объект события
     */
    readonly onChange: (event?: InputEvent | Event) => void;
    /**
     * Triggering the event for select change.
     *
     * Вызов события для изменения селект.
     * @param event event object/ объект события
     * @param data object with data/ объект с данными
     */
    readonly onSelect: (event: Event, data?: Record<string, any>) => void;
    /**
     * Triggering the event for changes in the checkbox.
     *
     * Вызов события для изменения в checkbox.
     * @param event event object/ объект события
     */
    readonly onChecked: (event: Event) => void;
    /**
     * Triggering the event for changes in the radio.
     *
     * Вызов события для изменения в radio.
     * @param event event object/ объект события
     */
    readonly onRadio: (event: Event) => void;
    /**
     * Triggering the event to delete all values.<br>
     * Вызов события для удаления всех значений.
     * @param event event object/ объект события
     */
    readonly onClear: (event: MouseEvent) => void;
    /**
     * Triggering the event to set a specific value.
     *
     * Вызов события для установки конкретного значения.
     * @param value new value/ новое значение
     */
    readonly onValue: (value: any) => void;
    /**
     * Triggering the event.
     *
     * Вызов события.
     * @param event event object/ объект события
     * @param type event type/ тип события
     */
    readonly on: <E>(event?: E, type?: string & keyof FieldBasicEmits) => this;
    /**
     * Checks whether additional data needs to be generated for the current event.
     *
     * Проверяет, надо ли генерировать дополнительные данные для текущего события.
     * @param type event type/ тип события
     */
    protected isValue(type: string & keyof FieldBasicEmits): boolean;
    /**
     * Checks if it is possible to change the value.
     *
     * Проверяет, возможно ли изменение значения.
     */
    protected isEnabled(): boolean;
    /**
     * Returns input data.
     *
     * Возвращает данные об вводе.
     */
    protected getData(): FieldValidationItem;
    /**
     * Returns validity data.
     *
     * Возвращает данные валидности.
     * @param type event type/ тип события
     */
    protected getValidation(type: string & keyof FieldBasicEmits): FieldValidationItem;
    /**
     * Triggering the event and change event.
     *
     * Вызов события и события изменения.
     * @param event event object/ объект события
     */
    protected onAndChange(event?: InputEvent | Event): this;
}
