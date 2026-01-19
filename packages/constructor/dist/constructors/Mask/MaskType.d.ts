import { GeoDate } from '@dxtmisha/functional';
import { MaskTypeItem } from './basicTypes';
import { MaskProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for defining the mask type.
 *
 * Класс для определения типа маски.
 */
export declare class MaskType {
    protected readonly props: MaskProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: MaskProps);
    /** Current mask type (default: text)/ Текущий тип маски (по умолчанию: text) */
    readonly item: ComputedRef<MaskTypeItem>;
    /**
     * Is the mask simple number type.
     *
     * Является ли маска простым числовым типом (number).
     */
    isNumber(): boolean;
    /**
     * Is the mask formatted number type (number-format).
     *
     * Является ли маска типом форматированного числа (number-format).
     */
    isNumberFormat(): boolean;
    /**
     * Is the mask currency type.
     *
     * Является ли маска валютным типом (currency).
     */
    isCurrency(): boolean;
    /**
     * Is the mask one of numeric related types (number | number-format | currency).
     *
     * Является ли маска одним из числовых типов (number | number-format | currency).
     */
    isCurrencyOrNumber(): boolean;
    /**
     * Is the mask one of the time input types.
     *
     * Является ли маска одним из типов для ввода времени.
     */
    isTime(): boolean;
    /**
     * Is the mask one of the date (or time) input types.
     *
     * Является ли маска одним из типов для ввода даты (или времени).
     */
    isDate(): boolean;
    /**
     * Returns GeoDate-compatible mask type (fallback: date).
     *
     * Возвращает тип маски совместимый с GeoDate (если нет — date).
     */
    getByDate(): GeoDate;
}
