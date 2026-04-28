import { MaskType } from './MaskType';
import { MaskRubberItem } from './MaskRubberItem';
import { MaskRubberTransition } from './MaskRubberTransition';
import { MaskSpecial } from './MaskSpecial';
import { MaskMatch } from './MaskMatch';
import { MaskFormat } from './MaskFormat';
import { FieldMasks } from '../../types/fieldTypes';
import { MaskSpecialItem, MaskSpecialList } from './basicTypes';
import { MaskProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with the rubber type.
 *
 * Класс для работы с резиновым типом.
 */
export declare class MaskRubber {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly rubberItem: MaskRubberItem;
    protected readonly rubberTransition: MaskRubberTransition;
    protected readonly special: MaskSpecial;
    protected readonly match: MaskMatch;
    protected readonly format: MaskFormat;
    /**
     * Constructor
     * @param props base data/ базовые данные
     * @param type object for working with the mask type/ объект для работы с типом маски
     * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
     * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param match object for managing the input character/ объект для управления символом ввода
     * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
     */
    constructor(props: MaskProps, type: MaskType, rubberItem: MaskRubberItem, rubberTransition: MaskRubberTransition, special: MaskSpecial, match: MaskMatch, format: MaskFormat);
    /**
     * Checks if the symbol is a transition.
     *
     * Проверяет, является ли символ перехода.
     * @param char checkable symbol/ проверяемый символ
     */
    isTransition(char: string): boolean;
    /**
     * Getting properties for the rubber group.
     *
     * Получение свойства для резиновой группы.
     * @param groupName group name/ название группы
     */
    get(groupName: string): MaskSpecialItem | undefined;
    /**
     * Updates the group of rubber symbols if all conditions are met and returns true.
     *
     * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
     * @param data values for verification/ значения для проверки
     * @param groupName group name/ название группы
     * @param char symbol for checking/ символ для проверки
     */
    update(data: FieldMasks, groupName: string, char: string): boolean;
    /**
     * Reduces the length of the entered symbol by its group.
     *
     * Уменьшает длину вводимого символа по его группе.
     * @param groupName group name/ название группы
     */
    pop(groupName: string): boolean;
    /**
     * Resets all states of all groups to the initial one.
     *
     * Сбрасывает все состояния всех групп до начального.
     */
    reset(): this;
    /** List of rubber groups/ Список резиновых групп */
    protected readonly list: ComputedRef<MaskSpecialList>;
    /** List of transition symbols/ Список символов перехода */
    protected readonly transition: ComputedRef<string[]>;
}
