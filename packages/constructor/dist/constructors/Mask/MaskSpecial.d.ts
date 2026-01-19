import { MaskType } from './MaskType';
import { MaskDate } from './MaskDate';
import { MaskFormat } from './MaskFormat';
import { FieldPatternItemOrFunction } from '../../types/fieldTypes';
import { MaskMatchItem, MaskSpecialItem, MaskSpecialList, MaskSpecialProp } from './basicTypes';
import { MaskProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with groups defined by special symbols.
 *
 * Класс для работы с группами, определёнными специальными символами.
 */
export declare class MaskSpecial {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type mask type helper/ объект помощник типа маски
     * @param date date mask helper/ объект помощник маски даты
     * @param format numeric/currency mask helper/ объект помощник числовых масок
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, format: MaskFormat);
    /**
     * Returns list of special symbols.
     *
     * Возвращает список специальных символов.
     */
    readonly item: ComputedRef<string[]>;
    /**
     * Returns map of only rubber-enabled groups.
     *
     * Возвращает карту только резиновых групп.
     */
    readonly rubberList: ComputedRef<MaskSpecialList>;
    /**
     * Checks if symbol is special.
     *
     * Проверяет, является ли символ специальным.
     * @param char symbol to check/ символ для проверки
     */
    isSpecial(char: string): boolean;
    /**
     * Checks if group has default value.
     *
     * Проверяет, имеет ли группа значение по умолчанию.
     * @param groupName group name/ название группы
     */
    isDefault(groupName: string): boolean;
    /**
     * Returns default value for group.
     *
     * Возвращает значение по умолчанию для группы.
     * @param groupName group name/ название группы
     */
    getDefault(groupName: string): MaskMatchItem | undefined;
    /**
     * Returns matcher (regexp/string) for group.
     *
     * Возвращает выражение для проверки группы.
     * @param groupName group name/ название группы
     */
    getMatch(groupName: string): MaskMatchItem | undefined;
    /**
     * Returns pattern definition for group.
     *
     * Возвращает pattern для группы.
     * @param groupName group name/ название группы
     */
    getPattern(groupName: string): FieldPatternItemOrFunction | undefined;
    /**
     * Returns view (display character) for group.
     *
     * Возвращает отображаемый символ для группы.
     * @param groupName group name/ название группы
     */
    getView(groupName: string): string | undefined;
    /**
     * Returns special property (original definition).
     *
     * Возвращает свойство special (оригинальное определение).
     */
    protected readonly special: ComputedRef<MaskSpecialProp>;
    /**
     * Returns special group item data by name.
     *
     * Возвращает данные группы special по имени.
     * @param groupName group name/ название группы
     */
    protected getSpecialItem(groupName: string): MaskSpecialItem | undefined;
}
