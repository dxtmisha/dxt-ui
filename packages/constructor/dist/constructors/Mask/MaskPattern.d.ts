import { FieldInputCheckInclude, FieldInputCheckListInclude } from '../../classes/Field/FieldInputCheckInclude';
import { MaskType } from './MaskType';
import { MaskSpecial } from './MaskSpecial';
import { MaskDate } from './MaskDate';
import { FieldPatternItemOrFunction, FieldPatternList } from '../../types/fieldTypes';
import { MaskProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for producing validation pattern data per mask group.
 *
 * Класс для получения данных паттернов валидации по группам маски.
 */
export declare class MaskPattern {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly special: MaskSpecial;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type mask type helper/ объект помощник типа маски
     * @param date date mask helper/ объект помощник маски даты
     * @param special special symbols helper/ объект помощник специальных символов
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, special: MaskSpecial);
    /** Validation input objects by group / Объекты проверки по названию группы */
    readonly item: ComputedRef<FieldInputCheckListInclude>;
    /** Patterns list by group / Список паттернов по группам */
    readonly list: ComputedRef<FieldPatternList>;
    /**
     * Checks if there is a global check pattern.
     *
     * Проверяет, есть ли глобальный паттерн проверки.
     */
    isCheck(): boolean;
    /**
     * Returns validation input object by group.
     *
     * Возвращает объект проверки по названию группы.
     * @param groupName group name (default: check)/ имя группы (по умолчанию: check)
     */
    getInput(groupName?: string): FieldInputCheckInclude | undefined;
    /**
     * Builds base patterns object depending on mask type.
     *
     * Формирует базовый объект паттернов в зависимости от типа маски.
     */
    protected getByType(): FieldPatternList;
    /**
     * Returns pattern definition for group or global pattern.
     *
     * Возвращает определение паттерна для группы или глобальный паттерн.
     * @param groupName group name/ имя группы
     */
    protected getPattern(groupName?: string): FieldPatternItemOrFunction | undefined;
}
