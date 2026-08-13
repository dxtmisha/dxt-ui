// md5:b333b61ebeecf40dbb560a75ec154095
import { ToRefs, Ref, ComputedRef } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { FieldElementInclude } from './FieldElementInclude';
import { FieldValueProps } from '../../types/fieldTypes';
/**
 * Class for working with input values.
 * It manages the reactive state of the input value, tracks whether the value is full,
 * handles conversions to other types, and coordinates updates between Vue props and internal state.
 *
 * Класс для работы со значениями инпута.
 * Управляет реактивным состоянием значения ввода, отслеживает полноту значения,
 * обрабатывает преобразования в другие типы и координирует обновления между Vue props и внутренним состоянием.
 */
export declare class FieldValueInclude<Value = any> {
    protected readonly props: FieldValueProps<Value>;
    protected readonly refs: ToRefs<FieldValueProps<Value>>;
    protected readonly element?: FieldElementInclude | undefined;
    protected readonly original?: RefOrNormal<Value> | undefined;
    protected readonly isMultiple: boolean;
    /** Current value / Текущее значение */
    readonly item: Ref<Value | undefined, Value | undefined>;
    /** Indicates if the value is complete / Указывает, полное ли значение */
    readonly isFull: Ref<boolean, boolean>;
    /** Indicates if there are temporary values / Указывает, есть ли временные значения */
    protected readonly hasEdit: Ref<boolean, boolean>;
    /**
     * Constructor for FieldValueInclude.
     *
     * Конструктор для FieldValueInclude.
     * @param props input data / входные данные
     * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
     * @param element object for working with the input element / объект для работы с элементом ввода
     * @param original original values / оригинальные значения
     * @param isMultiple flag enabling multiple selection handling in setValues / флаг включения множественного выбора в setValues
     */
    constructor(props: FieldValueProps<Value>, refs: ToRefs<FieldValueProps<Value>>, element?: FieldElementInclude | undefined, original?: RefOrNormal<Value> | undefined, isMultiple?: boolean);
    /** Returns the current value if isFull is true / Возвращает текущее значение, если isFull истинно */
    readonly itemByFull: ComputedRef<Value | undefined>;
    /**
     * Returns the current value, converted to a number.
     *
     * Возвращает текущее значение, преобразованное в число.
     * @returns numeric representation of the value / числовое представление значения
     */
    get number(): number;
    /**
     * Returns the current value of type string.
     *
     * Возвращает текущее значение типа string.
     * @returns string representation of the value / строковое представление значения
     */
    get string(): string;
    /**
     * Returns the current value of type boolean.
     *
     * Возвращает текущее значение типа boolean.
     * @returns boolean representation of the value / булево представление значения
     */
    get boolean(): boolean;
    /**
     * Returns the length of the entered value.
     *
     * Возвращает длину введенного значения.
     * @returns length of the value / длина значения
     */
    get length(): number;
    /**
     * Checks if there are values or temporary values.
     *
     * Проверяет, есть ли значения или временные значения.
     * @returns true if has values or temporary values / true, если есть значения или временные значения
     */
    is(): boolean;
    /**
     * Checks if there are any values.
     *
     * Проверяет, есть ли значения.
     * @returns true if has values / true, если есть значения
     */
    isValue(): boolean;
    /**
     * Returns the current value.
     *
     * Возвращает текущее значение.
     * @returns current value / текущее значение
     */
    get(): Value | undefined;
    /**
     * Returns the current value as an array.
     *
     * Возвращает текущее значение в виде массива.
     * @returns array of values / массив значений
     */
    getToArray(): Value[];
    /**
     * Returns value properties for expose.
     *
     * Возвращает свойства значения для экспонирования.
     * @returns value expose object / объект экспонирования значения
     */
    readonly expose: () => {
        value: Ref<Value | undefined, Value | undefined>;
        getValue: () => Value | undefined;
    };
    /**
     * Changes the value.
     *
     * Изменяет значение.
     * @param value changeable value / изменяемое значение
     * @returns current instance / текущий экземпляр
     */
    set(value: any): this;
    /**
     * Changes the values by the selected element.
     *
     * Изменяет значения по выбранному элементу.
     * @param eventValue event object or values / объект события или значения
     * @returns current instance / текущий экземпляр
     */
    setByEvent(eventValue: Event | Record<string, any> | any): this;
    /**
     * Changes the values by the selected element.
     *
     * Изменяет значения по выбранному элементу.
     * @param target selected element / выбранный элемент
     * @returns current instance / текущий экземпляр
     */
    setByTarget(target: HTMLInputElement): this;
    /**
     * Changes the value by the checked property.
     *
     * Изменяет значение по свойству checked.
     * @param event event object / объект события
     * @returns current instance / текущий экземпляр
     */
    setByChecked(event: Event): this;
    /**
     * Changes the value for radio type.
     *
     * Изменяет значение для типа radio.
     * @param event event object / объект события
     * @returns current instance / текущий экземпляр
     */
    setByRadio(event: Event): this;
    /**
     * Sets the isFull value.
     *
     * Устанавливает значение isFull.
     * @param isFull isFull value / значение isFull
     */
    setFull(isFull: boolean): void;
    /**
     * Sets the hasEdit value.
     *
     * Устанавливает значение hasEdit.
     * @param hasEdit hasEdit value / значение hasEdit
     */
    setHasEdit(hasEdit: boolean): void;
    /**
     * Sets the value to the original one.
     *
     * Устанавливает значение на оригинальное.
     * @returns current instance / текущий экземпляр
     */
    setToOriginal(): this;
    /**
     * Clear all values to the original ones.
     *
     * Очисти все значения до оригинальных.
     * @returns current instance / текущий экземпляр
     */
    clear(): this;
    /**
     * Is the selected type a checkbox.
     *
     * Является ли выбранный тип чекбокс.
     * @param target selected element / выбранный элемент
     * @returns true if target is checkbox / true, если элемент чекбокс
     */
    protected isCheckbox(target: HTMLInputElement): boolean;
    /**
     * Checks if the value has actually been changed.
     *
     * Проверяет, было ли значение действительно изменено.
     * @param value value to check / значение для проверки
     * @returns true if there is difference / true, если значения различаются
     */
    protected isDifference(value?: any): boolean;
    /**
     * Returns the original value.
     *
     * Возвращает оригинальное значение.
     * @returns original value / оригинальное значение
     */
    protected getOriginal(): any;
    /**
     * Changes the values to the original ones.
     *
     * Изменяет значения на оригинальные.
     */
    protected readonly update: () => void;
    /**
     * Checks if the value is being edited.
     *
     * Проверяет, редактируется ли значение.
     * @param value value to check / значение для проверки
     * @returns true if value is edited / true, если значение редактируется
     */
    protected isEdit(value?: Value): boolean;
}
