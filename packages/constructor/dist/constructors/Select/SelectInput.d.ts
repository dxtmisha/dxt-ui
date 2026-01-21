import { ConstrBind } from '@dxtmisha/functional';
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude';
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude';
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude';
import { SelectProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with the select input.
 *
 * Класс для работы с input селекта.
 */
export declare class SelectInput {
    protected readonly props: Readonly<SelectProps>;
    protected readonly attributes: FieldAttributesInclude;
    protected readonly value: FieldValueInclude;
    protected readonly event: FieldEventInclude;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
     * @param value object for working with values/ объект для работы со значениями
     * @param event object for working with events/ объект для работы с событиями
     */
    constructor(props: Readonly<SelectProps>, attributes: FieldAttributesInclude, value: FieldValueInclude, event: FieldEventInclude);
    /** Indicates if it is in edit mode/ Указывает, находится ли в режиме редактирования */
    readonly isEdit: ComputedRef<boolean>;
    /**
     * Returns data for the input field.
     *
     * Возвращает данные для поля input.
     */
    readonly binds: ComputedRef<ConstrBind<Partial<HTMLInputElement>> | undefined>;
    /**
     * Handles the keydown event to simulate a click on the input element.
     *
     * Обрабатывает событие нажатия клавиши для имитации клика по элементу ввода.
     * @param event The keydown event object/ Объект события нажатия клавиши
     */
    protected onKeydown: (event: Event) => void;
}
