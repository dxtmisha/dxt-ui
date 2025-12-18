import { MaskRubberItem } from './MaskRubberItem';
import { MaskCharacterLength } from './MaskCharacterLength';
import { MaskSpecial } from './MaskSpecial';
import { MaskItem } from './MaskItem';
import { MaskSelection } from './MaskSelection';
import { MaskProps } from './props';
import { Ref } from 'vue';
/**
 * Class for working with and storing input characters.
 *
 * Класс для работы и хранения вводимых символов.
 */
export declare class MaskCharacter {
    protected readonly props: MaskProps;
    protected readonly rubberItem: MaskRubberItem;
    protected readonly characterLength: MaskCharacterLength;
    protected readonly special: MaskSpecial;
    protected readonly mask: MaskItem;
    protected readonly selection: MaskSelection;
    /** Entered characters list/ Список введённых символов */
    readonly item: Ref<string[], string[]>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
     * @param characterLength object for managing input length/ объект управления длиной ввода
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param mask object for managing masks/ объект управления маской
     * @param selection object for managing cursor position/ объект для управления положением курсора
     */
    constructor(props: MaskProps, rubberItem: MaskRubberItem, characterLength: MaskCharacterLength, special: MaskSpecial, mask: MaskItem, selection: MaskSelection);
    /**
     * Checks if the value is filled.
     *
     * Проверяет, заполнено ли значение.
     */
    is(): boolean;
    /**
     * Checks if the selected character was previously deleted.
     *
     * Проверяет, является ли выделенный символ ранее удалённым.
     */
    isCharDelete(): boolean;
    /**
     * Getting the selected mask character.
     *
     * Получение выбранного символа маски.
     */
    getFocus(): string;
    /**
     * Getting the mask character by the key number of the nearest special character.
     *
     * Получение символа маски по номеру ключа ближайшего специального символа.
     */
    getImmediate(): string;
    /**
     * Getting the next mask character.
     *
     * Получение следующего символа маски.
     */
    getNext(): string;
    /**
     * Adding 1 entered character at its selection location.
     *
     * Добавление 1 введённого символа по месту его выделения.
     * @param char entered character/ введённый символ
     */
    add(char: string): this;
    /**
     * Deleting 1 entered character at its selection location.
     *
     * Удаление 1 введённого символа по месту его выделения.
     */
    pop(): this;
    /**
     * Resets the values to the initial values.
     *
     * Сбрасывает значения до начальных.
     */
    reset(): this;
    /**
     * Shifts by 1 value depending on the direction of selection change.
     *
     * Сдвигает на 1 значение в зависимости от направления изменения выделения.
     * @param status shift status/ статус сдвига
     */
    shift(status?: number): this;
    /**
     * Checks if there is another group of special characters ahead.
     *
     * Проверяет, есть ли впереди другая группа специальных символов.
     */
    protected isSpecialNextAnother(): boolean;
    /**
     * Updates the length of entered characters.
     *
     * Обновляет длину введённых символов.
     */
    protected updateLength(): this;
}
