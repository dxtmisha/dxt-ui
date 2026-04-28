import { GeoIntl } from '@dxtmisha/functional';
import { MaskType } from './MaskType';
import { MaskRubberItem } from './MaskRubberItem';
import { FieldMasks } from '../../types/fieldTypes';
import { MaskSpecialList, MaskSpecialProp } from './basicTypes';
import { MaskProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with formatted number / currency masks.
 *
 * Класс для работы с форматированными масками числа / валюты.
 */
export declare class MaskFormat {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly rubberItem: MaskRubberItem;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type mask type helper/ объект помощник типа маски
     * @param rubberItem rubber groups helper/ объект помощник резиновых групп
     */
    constructor(props: MaskProps, type: MaskType, rubberItem: MaskRubberItem);
    /** Special symbols configuration (groups) for numeric input / Конфигурация специальных символов (группы) для числового ввода */
    readonly special: MaskSpecialProp;
    /** Rubber mask instructions (dynamic length per group) / Инструкции резиновой маски (динамическая длина по группам) */
    readonly rubber: ComputedRef<MaskSpecialList>;
    /** Base view symbol per group / Базовый отображаемый символ для группы */
    readonly view: ComputedRef<string>;
    /** Fraction digits count / Количество знаков после запятой */
    readonly fraction: ComputedRef<number>;
    /** Returns mask characters for current numeric type / Возвращает символы маски для текущего числового типа */
    readonly mask: ComputedRef<string[]>;
    /**
     * Is fraction part rubber (dynamic)?
     *
     * Является ли дробная часть резиновой (динамичной)?
     */
    isFractionRubber(): boolean;
    /**
     * Returns standardized raw numeric value (integer or integer.fraction).
     *
     * Возвращает стандартизированное «сырое» числовое значение (целое или целое.дробь).
     * @param value masks data object/ объект масок
     */
    getValueStandard(value: FieldMasks): string;
    /** Returns base number mask string.
     *
     * Возвращает строку маски числа.
     */
    getNumber(): string;
    /**
     * Returns formatted number mask string.
     *
     * Возвращает форматированную строку числа.
     */
    getNumberFormat(): string;
    /**
     * Returns currency mask string with appended currency symbol.
     *
     * Возвращает строку маски валюты с добавленным символом валюты.
     */
    getCurrency(): string;
    /**
     * Returns list of delimiter characters for switching to fraction part.
     *
     * Возвращает список символов-разделителей для перехода к дробной части.
     */
    getDecimal(): string[];
    /**
     * Returns list of special group keys.
     *
     * Возвращает список ключей групп специальных символов.
     */
    getSpecial(): string[];
    /**
     * Returns GeoIntl helper instance.
     *
     * Возвращает экземпляр помощника GeoIntl.
     */
    protected getIntl(): GeoIntl;
    /**
     * Builds base numeric pattern string (with optional fraction & currency).
     *
     * Формирует базовую строку числового паттерна (с необязательной дробью и валютой).
     */
    protected getNumberForString(): string;
    /**
     * Converts digit markers (9/3) to group symbols (n/f).
     *
     * Преобразует цифровые маркеры (9/3) в групповые символы (n/f).
     */
    protected toSpecial(mask: string): string[];
}
