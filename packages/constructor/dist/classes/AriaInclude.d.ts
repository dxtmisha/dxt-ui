import { AriaAll, AriaList } from '../types/ariaTypes';
/**
 * The class returns data for working with ARIA roles.
 *
 * Класс возвращает данные для работы с ARIA ролями.
 */
export declare class AriaInclude {
    protected readonly props: AriaAll;
    protected readonly valueDefault?: AriaList | undefined;
    constructor(props: AriaAll, valueDefault?: AriaList | undefined);
    /**
     * Get role by props.
     *
     * Получить роль по пропсам.
     */
    role(): AriaList;
    /**
     * Get control role.
     *
     * Получить роль управления.
     */
    control(): AriaList;
    /**
     * Get modal role.
     *
     * Получить модальную роль.
     * @param isModal is modal/ является модальным
     */
    modal(isModal?: boolean): AriaList;
    /**
     * Add role to list.
     *
     * Добавить роль в список.
     * @param list list to add/ список для добавления
     * @param isAdd is add/ добавлять ли
     */
    protected addRole(list: AriaList, isAdd?: boolean): AriaList;
}
