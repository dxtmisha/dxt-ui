import { AriaList, AriaTrueOrFalse } from '../types/ariaTypes';
import { RoleType } from '../types/roleTypes';
/**
 * The class returns static ARIA attributes.
 *
 * Класс возвращает статические ARIA атрибуты.
 */
export declare class AriaStaticInclude {
    /**
     * Get role by props.
     *
     * Получить роль по пропсам.
     * @param role ARIA role type/ Тип ARIA роли
     */
    static role(role?: RoleType): AriaList;
    /**
     * Get ARIA label.
     *
     * Получить ARIA label.
     * @param label ARIA label/ ARIA метка
     */
    static label(label?: string): AriaList;
    /**
     * Get control role.
     *
     * Получить роль управления.
     * @param id Element ID/ Идентификатор элемента
     * @param controls ARIA controls attribute/ Атрибут ARIA controls
     * @param haspopup ARIA haspopup attribute/ Атрибут ARIA haspopup
     * @param expanded ARIA expanded state/ Состояние ARIA expanded
     */
    static control(id?: string, controls?: string, haspopup?: AriaList['aria-haspopup'], expanded?: boolean): AriaList;
    /**
     * Get ARIA hidden attribute.
     *
     * Получить атрибут ARIA hidden.
     * @param isHidden is hidden/ является скрытым
     */
    static hidden(isHidden?: boolean): AriaList;
    /**
     * Get ARIA live attribute.
     *
     * Получить атрибут ARIA live.
     * @param live ARIA live attribute/ Атрибут ARIA live
     */
    static live(live?: AriaList['aria-live']): AriaList;
    /**
     * Get modal role.
     *
     * Получить модальную роль.
     * @param isModal is modal/ является модальным
     * @param ariaLabelledby ARIA labelledby attribute/ Атрибут ARIA labelledby
     * @param ariaDescribedby ARIA describedby attribute/ Атрибут ARIA describedby
     */
    static modal(isModal?: boolean, ariaLabelledby?: string, ariaDescribedby?: string): AriaList;
    /**
     * Returns ARIA value now, min and max.
     *
     * Возвращает ARIA value now, min и max.
     * @param value Current value/ Текущее значение
     * @param min Minimum value/ Минимальное значение
     * @param max Maximum value/ Максимальное значение
     */
    static valueMinMax(value?: string | number, min?: string | number, max?: string | number): AriaList;
    /**
     * Returns 'true' or 'false' based on the boolean value.
     *
     * Возвращает 'true' или 'false' в зависимости от булевого значения.
     * @param value boolean value/ булевое значение
     */
    static isTrueOrFalse(value?: boolean): AriaTrueOrFalse | undefined;
}
