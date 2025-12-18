import { MaskType } from './MaskType';
import { MaskDate } from './MaskDate';
import { MaskFormat } from './MaskFormat';
import { MaskSpecial } from './MaskSpecial';
import { MaskRubber } from './MaskRubber';
import { MaskItem } from './MaskItem';
import { MaskValueBasic } from './MaskValueBasic';
import { MaskValidation } from './MaskValidation';
import { MaskViewList } from './basicTypes';
import { MaskProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with data to output to the screen.
 *
 * Класс для работы с данными для вывода на экран.
 */
export declare class MaskView {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    protected readonly special: MaskSpecial;
    protected readonly rubber: MaskRubber;
    protected readonly mask: MaskItem;
    protected readonly valueBasic: MaskValueBasic;
    protected readonly validation: MaskValidation;
    /** Class name prefix for item/ Класс для элемента */
    protected classNameItem: string;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with the mask type/ объект для работы с типом маски
     * @param date object for working with date types/ объект для работы с типом даты
     * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param rubber object for working with rubber types/ объект для работы с резиновыми типами
     * @param mask object for managing masks/ объект управления маской
     * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
     * @param validation object for working with validation/ объект для работы с валидацией
     * @param className define class names for each symbol/ определить название класса для каждого символа
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, format: MaskFormat, special: MaskSpecial, rubber: MaskRubber, mask: MaskItem, valueBasic: MaskValueBasic, validation: MaskValidation, className: string);
    /** View items list/ Список данных для отображения */
    readonly item: ComputedRef<MaskViewList>;
    /** Input value with special view characters/ Значение ввода со спецсимволами отображения */
    readonly input: ComputedRef<string>;
    /**
     * Checks if the value is filled in.
     *
     * Проверяет, заполнено ли значение.
     * @param value checked value/ проверяемое значение
     */
    protected isValue(value?: string): value is string;
    /**
     * Returns the status by mask symbol and its position.
     *
     * Возвращает статус по символу маски и месту его расположения.
     * @param char mask symbol/ символ маски
     * @param value entered value for this position/ введённое значение для позиции
     */
    protected getStatus(char: string, value?: string): string;
    /**
     * Returns symbol for rendering: real value or placeholder.
     *
     * Возвращает символ для отображения: реальное значение или плейсхолдер.
     * @param char mask symbol/ символ маски
     * @param value entered value for position/ введённое значение позиции
     */
    protected getValue(char: string, value?: string): string;
    /**
     * Returns display version of special mask symbol (placeholder).
     *
     * Возвращает отображаемую версию специального символа маски (плейсхолдер).
     * @param char mask symbol/ символ маски
     */
    protected getSpecialToView(char: string): string;
    /**
     * Returns special character for view by its group name.
     *
     * Возвращает специальный символ для отображения по имени группы.
     * @param groupName group name/ имя группы
     */
    protected getViewChar(groupName: string): string | undefined;
}
