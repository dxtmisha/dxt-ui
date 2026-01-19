import { Ref, ComputedRef } from 'vue';
import { ArrowElement } from './ArrowElement';
/**
 * Class for working with the parent element.
 *
 * Класс для работы с родительским элементом.
 */
export declare class ArrowParent {
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly className: string;
    protected readonly elementItem: ArrowElement;
    /**
     * Constructor
     * @param element input element/ элемент ввода
     * @param className class name/ название класса
     * @param elementItem arrow element/ элемент стрелки
     */
    constructor(element: Ref<HTMLElement | undefined>, className: string, elementItem: ArrowElement);
    /** Checks if the parent element has a border/ Проверяет, есть ли у родительского элемента граница */
    readonly isBorder: ComputedRef<boolean>;
    /** Parent element/ Родительский элемент **/
    readonly elementParent: ComputedRef<HTMLElement | undefined>;
    /** Background color of the parent element/ Цвет фона родительского элемента **/
    readonly background: ComputedRef<string>;
    /** Border color of the parent element/ Цвет границы родительского элемента **/
    readonly borderWidth: ComputedRef<string>;
    /** Border color of the parent element/ Цвет границы родительского элемента **/
    readonly borderColor: ComputedRef<string>;
    /** Border radius of the parent element/ Радиус границы родительского элемента **/
    readonly borderRadius: ComputedRef<string>;
    /**
     * Get border width as number.
     *
     * Получить ширину границы в виде числа.
     */
    getBorderRadius(): number;
    /**
     * Get computed styles of the parent element.
     *
     * Получить вычисленные стили родительского элемента.
     */
    protected getStyles(): CSSStyleDeclaration | undefined;
    /**
     * Method for creating styles for the parent element.
     *
     * Метод для создания стилей для родительского элемента.
     */
    protected readonly make: () => void;
}
