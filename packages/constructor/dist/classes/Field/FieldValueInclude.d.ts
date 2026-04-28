import { ToRefs, Ref, ComputedRef } from 'vue';
import { RefOrNormal } from '@dxtmisha/functional';
import { FieldElementInclude } from './FieldElementInclude';
import { FieldValueProps } from '../../types/fieldTypes';
/**
 * Class for working with input values.
 *
 * Класс для работы со значениями инпута.
 */
export declare class FieldValueInclude<Value = any> {
    protected readonly props: FieldValueProps<Value>;
    protected readonly refs: ToRefs<FieldValueProps<Value>>;
    protected readonly element?: FieldElementInclude | undefined;
    protected readonly original?: RefOrNormal<Value> | undefined;
    /** Current value/ Текущее значение */
    readonly item: Ref<Value | undefined, Value | undefined>;
    /** Indicates if the value is complete/ Указывает, полное ли значение */
    readonly isFull: Ref<boolean, boolean>;
    /** Indicates if there are temporary values/ Указывает, есть ли временные значения */
    protected readonly hasEdit: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param refs input data in the form of reactive elements /<br>входные данные в виде реактивных элементов
     * @param element object for working with the input element /<br>объект для работы с элементом ввода
     * @param original original values /<br>оригинальные значения
     */
    constructor(props: FieldValueProps<Value>, refs: ToRefs<FieldValueProps<Value>>, element?: FieldElementInclude | undefined, original?: RefOrNormal<Value> | undefined);
    /** Checks if there are values or temporary values/ Проверяет, есть ли значения или временные значения */
    readonly is: ComputedRef<boolean>;
    /** Checks if there are any values/ Проверяет, есть ли значения */
    readonly isValue: ComputedRef<boolean>;
    /** Returns the current value if isFull is true/ Возвращает текущее значение, если isFull истинно */
    readonly itemByFull: ComputedRef<Value | undefined>;
    /**
     * Returns the current value, converted to a number/
     * Возвращает текущее значение, преобразованное в номер
     */
    readonly number: ComputedRef<number>;
    /** Returns the current value of type string/ Возвращает текущее значение типа string */
    readonly string: ComputedRef<string>;
    /** Returns the current value of type boolean/ Возвращает текущее значение типа boolean */
    readonly boolean: ComputedRef<boolean>;
    /** Returns the length of the entered value/ Возвращает длину введенного значения */
    readonly length: ComputedRef<number>;
    /**
     * Returns the current value.
     *
     * Возвращает текущее значение.
     */
    get(): Value | undefined;
    /**
     * Returns the current value as an array.
     *
     * Возвращает текущее значение в виде массива.
     */
    getToArray(): Value[];
    /**
     * Changes the value.
     *
     * Изменяет значение.
     * @param value changeable value/ изменяемое значение
     */
    set(value: any): this;
    /**
     * Changes the values by the selected element.
     *
     * Изменяет значения по выбранному элементу.
     * @param event event object/ объект события
     */
    setByEvent(event: Event): this;
    setByEvent(value: Record<string, any>): this;
    setByEvent(value: any): this;
    /**
     * Changes the values by the selected element.
     *
     * Изменяет значения по выбранному элементу.
     * @param target selected elements/ выбранные элементы
     */
    setByTarget(target: HTMLInputElement): this;
    /**
     * Changes the value by the checked property.
     *
     * Изменяет значение по свойству checked.
     * @param event event value/ значение события
     */
    setByChecked(event: Event): this;
    /**
     * Changes the value for radio type.
     *
     * Изменяет значение для типа radio.
     * @param event event object/ объект события
     */
    setByRadio(event: Event): this;
    /**
     * Sets the isFull value.
     *
     * Устанавливает значение isFull.
     * @param isFull isFull value/ значение isFull
     */
    setFull(isFull: boolean): void;
    /**
     * Sets the hasEdit value.
     *
     * Устанавливает значение hasEdit.
     * @param hasEdit hasEdit value/ значение hasEdit
     */
    setHasEdit(hasEdit: boolean): void;
    /**
     * Sets the value to the original one.
     *
     * Устанавливает значение на оригинальное.
     */
    setToOriginal(): this;
    /**
     * Clear all values to the original ones.
     *
     * Очисти все значения до оригинальных.
     */
    clear(): this;
    /**
     * Is the selected type a checkbox.
     *
     * Является ли выбранный тип чекбокс.
     * @param target selected elements/ выбранные элементы
     */
    protected isCheckbox(target: HTMLInputElement): boolean;
    /**
     * Checks if the value has actually been changed.
     *
     * Проверяет, было ли значение действительно изменено.
     * @param value value to check/ значение для проверки
     */
    protected isDifference(value?: any): boolean;
    /**
     * Returns the original value.
     *
     * Возвращает оригинальное значение.
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
     * @param value value to check/ значение для проверки
     */
    protected isEdit(value?: Value): boolean;
}
