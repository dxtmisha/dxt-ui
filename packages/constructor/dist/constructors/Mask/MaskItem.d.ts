import { MaskType } from './MaskType';
import { MaskRubberItem } from './MaskRubberItem';
import { MaskDate } from './MaskDate';
import { MaskCharacterLength } from './MaskCharacterLength';
import { MaskSpecial } from './MaskSpecial';
import { MaskFormat } from './MaskFormat';
import { MaskList, MaskSpecialInfo } from './basicTypes';
import { MaskProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with a mask.
 *
 * Класс для работы с маской.
 */
export declare class MaskItem {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly rubberItem: MaskRubberItem;
    protected readonly characterLength: MaskCharacterLength;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    protected readonly special: MaskSpecial;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with the mask type/ объект для работы с типом маски
     * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
     * @param characterLength object for managing input length/ объект управления длиной ввода
     * @param date object for working with date types/ объект для работы с типом даты
     * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
     * @param special object for working with special characters/ объект для работы со специальными символами
     */
    constructor(props: MaskProps, type: MaskType, rubberItem: MaskRubberItem, characterLength: MaskCharacterLength, date: MaskDate, format: MaskFormat, special: MaskSpecial);
    /**
     * Returns the current mask.
     *
     * Возвращает текущую маску.
     */
    readonly item: ComputedRef<string[]>;
    /**
     * Returns an array with information about the location of all special characters.
     *
     * Возвращает массив с информацией о расположении всех специальных символов.
     */
    readonly info: ComputedRef<MaskSpecialInfo[]>;
    /**
     * Returns the length of the mask or the maximum length of masks if there are several.
     *
     * Возвращает длину маски или максимальную длину масок, если их несколько.
     */
    readonly maxLength: ComputedRef<number>;
    /**
     * Returns the mask symbol by its index.
     *
     * Возвращает символ маски по его индексу.
     * @param index index of the symbol's location/ индекс расположения символа
     */
    get(index: number): string;
    /**
     * Returns the location number for replacement by its input symbol.
     *
     * Возвращает номер нахождения для замены по его символу ввода.
     * @param char input symbol/ символ ввода
     * @param selection minimum index for search/ минимальный индекс для поиска
     */
    getByChar(char: string, selection?: number): number;
    /**
     * Returns the length of the active mask.
     *
     * Возвращает длину активной маски.
     */
    getLength(): number;
    /**
     * Returns the length of only special characters.
     *
     * Возвращает длину только из специальных символов.
     */
    getLengthBySpecial(): number;
    /**
     * Returns how many special characters were highlighted.
     *
     * Возвращает, сколько специальных символов было выделено.
     * @param start start of selection/ начало выделения
     * @param end end of selection/ конец выделения
     */
    getQuantity(start: number, end: number): number;
    /**
     * Returns the active mask.
     *
     * Возвращает активную маску.
     */
    protected readonly maskActive: ComputedRef<string>;
    /**
     * Returns the number of special characters in the current mask.
     *
     * Возвращает количество специальных символов в текущей маске.
     */
    protected readonly basic: ComputedRef<string[]>;
    /**
     * Returns a list of masks.
     *
     * Возвращает список масок.
     */
    protected getMask(): MaskList;
    /**
     * Returns the number of special characters in the current mask.
     *
     * Возвращает количество специальных символов в текущей маске.
     * @param mask selected mask/ выбранная маска
     */
    protected getSpecialLength(mask: string): number;
}
