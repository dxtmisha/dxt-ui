import { MaskRubberTransition } from './MaskRubberTransition';
import { MaskItem } from './MaskItem';
import { MaskSpecial } from './MaskSpecial';
import { MaskCharacter } from './MaskCharacter';
import { ComputedRef } from 'vue';
/**
 * Class for getting basic input values.
 *
 * Класс для получения базовых вводимых значений.
 */
export declare class MaskValueBasic {
    protected readonly rubberTransition: MaskRubberTransition;
    protected readonly mask: MaskItem;
    protected readonly special: MaskSpecial;
    protected readonly character: MaskCharacter;
    /**
     * Constructor
     * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
     * @param mask object for managing masks/ объект управления маской
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param character object for managing entered character/ объект для управления введённым символом
     */
    constructor(rubberTransition: MaskRubberTransition, mask: MaskItem, special: MaskSpecial, character: MaskCharacter);
    /**
     * Receiving basic standard values.
     *
     * Получение базовых стандартных значений.
     */
    readonly item: ComputedRef<string>;
    /**
     * Checks if the values are filled in.
     *
     * Проверяет, заполнены ли значения.
     */
    is(): boolean;
    /**
     * Getting the character from the basic standard values by its key number.
     *
     * Получение символа из базовых стандартных значений по его номеру ключа.
     * @param index key number/ номер ключа
     */
    getChar(index: number): string | undefined;
    /**
     * Getting the length of basic standard values.
     *
     * Получение длины базовых стандартных значений.
     */
    getLength(): number;
}
