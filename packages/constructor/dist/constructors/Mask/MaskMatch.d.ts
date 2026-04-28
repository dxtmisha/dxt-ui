import { MaskSpecial } from './MaskSpecial';
import { MaskMatchItem } from './basicTypes';
import { MaskProps } from './props';
/**
 * Class for checking an incoming character.
 *
 * Класс для проверки входящего символа.
 */
export declare class MaskMatch {
    protected readonly props: MaskProps;
    protected readonly special: MaskSpecial;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param special special symbols helper/ объект помощник специальных символов
     */
    constructor(props: MaskProps, special: MaskSpecial);
    /**
     * Checks whether the character matches allowed pattern(s).
     *
     * Проверяет, соответствует ли символ разрешённому шаблону.
     * @param char character to check/ символ для проверки
     * @param groupName optional group name/ необязательное имя группы
     */
    is(char: string, groupName?: string): boolean;
    /**
     * Returns match definition (regexp or string) for group or global.
     *
     * Возвращает правило проверки (regexp или строка) для группы или глобально.
     * @param groupName group name/ имя группы
     */
    get(groupName?: string): MaskMatchItem;
    /**
     * Filters text returning only allowed characters (any group).
     *
     * Фильтрует текст, возвращая только допустимые символы (любая группа).
     * @param text source text/ исходный текст
     */
    filter(text: string): string[];
}
