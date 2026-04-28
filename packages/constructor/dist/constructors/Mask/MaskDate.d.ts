import { Datetime } from '@dxtmisha/functional';
import { MaskType } from './MaskType';
import { FieldMasks, FieldPatternList } from '../../types/fieldTypes';
import { MaskProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with date/time masks (date, datetime, time etc.).
 *
 * Класс для работы с масками даты/времени (date, datetime, time и т.п.).
 */
export declare class MaskDate {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type mask type helper/ объект помощник типа маски
     */
    constructor(props: MaskProps, type: MaskType);
    /** Mask template for current date type / Шаблон маски для текущего типа даты */
    readonly mask: ComputedRef<string[]>;
    /**
     * Returns base Datetime helper for given value (or default stub).
     *
     * Возвращает базовый помощник Datetime для значения (или дефолтный шаблон).
     * @param date filled date string/ заполненная строка даты
     */
    getDatetime(date?: string): Datetime;
    /**
     * Returns localized formatted date/time value.
     *
     * Возвращает локализованное форматированное значение даты/времени.
     * @param date filled date string/ заполненная строка даты
     */
    getValue(date?: string): string;
    /**
     * Returns standardized (ISO-like) date/time value or empty if invalid.
     *
     * Возвращает стандартизированное (похоже на ISO) значение или пустую строку при невалидности.
     * @param date masks data grouped by parts/ данные масок, сгруппированные по частям
     */
    getValueStandard(date: FieldMasks): string;
    /**
     * Returns full raw date/time string assembled from groups (or empty if invalid).
     *
     * Возвращает полную «сырую» строку даты/времени, собранную из групп (или пусто если невалидно).
     * @param date masks data grouped by parts/ данные масок, сгруппированные по частям
     */
    getValueStandardFull(date: FieldMasks): string;
    /**
     * Returns validation patterns object for date/time parts.
     *
     * Возвращает объект паттернов валидации для частей даты/времени.
     */
    getPattern(): FieldPatternList;
    /** Returns list of date-only group symbols/ Возвращает список символов для даты */
    getSpecialDate(): string[];
    /** Returns list of full date-time group symbols/ Возвращает список символов для даты и времени */
    getSpecialFull(): string[];
    /**
     * Returns display symbol for group.
     *
     * Возвращает отображаемый символ для группы.
     * @param groupName group name/ название группы
     */
    getView(groupName: string): string | undefined;
}
