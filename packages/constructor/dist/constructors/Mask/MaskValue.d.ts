import { MaskType } from './MaskType';
import { MaskDate } from './MaskDate';
import { MaskFormat } from './MaskFormat';
import { MaskItem } from './MaskItem';
import { MaskSpecial } from './MaskSpecial';
import { MaskValueBasic } from './MaskValueBasic';
import { FieldMaskItem, FieldMasks } from '../../types/fieldTypes';
import { MaskProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for transforming the entered data into the final result.
 *
 * Класс для преобразования введенных данных в конечный результат.
 */
export declare class MaskValue {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    protected readonly mask: MaskItem;
    protected readonly special: MaskSpecial;
    protected readonly valueBasic: MaskValueBasic;
    protected infoCache?: FieldMasks;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with the mask type/ объект для работы с типом маски
     * @param date object for working with date types/ объект для работы с типом даты
     * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
     * @param mask object for managing masks/ объект управления маской
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, format: MaskFormat, mask: MaskItem, special: MaskSpecial, valueBasic: MaskValueBasic);
    /**
     * Receiving a list with information about standard values/
     * Получение списка с информацией о стандартных значениях
     */
    readonly info: ComputedRef<FieldMasks>;
    /** Final value (shortcut)/ Финальное значение (ярлык) */
    readonly item: ComputedRef<string>;
    /** Checks if the mask is fully filled/ Проверяет, полностью ли заполнена маска */
    readonly isFull: ComputedRef<boolean>;
    /** Checks if the mask is fully filled by length/ Проверяет, полностью ли заполнена маска по длине */
    readonly isEnd: ComputedRef<boolean>;
    /**
     * Returns old values.
     *
     * Возвращает старые значения.
     */
    getValueCache(): string;
    /**
     * Getting full information for global verification.
     *
     * Получение полной информации для глобальной проверки.
     */
    getForCheck(): FieldMaskItem;
    /**
     * Getting information for a specific group.
     *
     * Получение информации для конкретной группы.
     * @param groupName group name/ название группы
     */
    getInfoItem(groupName: string): FieldMaskItem | undefined;
    /** Returns the final form of the value/ Возвращает финальный вид значения */
    protected readonly valueFinal: ComputedRef<string>;
    /**
     * Checks if there is a value by the key number in the basic values.
     *
     * Проверяет, есть ли значение по номеру ключа в базовых значениях.
     * @param index key number/ номер ключа
     */
    protected isStandard(index: number): boolean;
    /**
     * Returns values based on the specified data information structure.
     *
     * Возвращает значения по указанной структуре информации о данных.
     * @param info data information/ информация о данных
     */
    protected getValue(info: FieldMasks): string;
    /**
     * Adding a new character to the list divided by groups if it is not there and returning the property of the given group.
     *
     * Добавление нового символа в список, разделенный по группам, если его там нет, и возвращение свойства данной группы.
     * @param data data for verification/ данные для проверки
     * @param groupName group name/ название группы
     */
    protected add(data: FieldMasks, groupName: string): FieldMaskItem;
}
