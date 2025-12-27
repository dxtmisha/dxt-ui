import { Ref, ComputedRef } from 'vue';
/**
 * Class for working with the parent element.
 *
 * Класс для работы с родительским элементом.
 */
export declare class ArrowParent {
    protected readonly element: Ref<HTMLElement | undefined>;
    /**
     * Constructor
     * @param element input element/ элемент ввода
     */
    constructor(element: Ref<HTMLElement | undefined>);
    /** Parent element/ Родительский элемент **/
    readonly elementParent: ComputedRef<HTMLElement | undefined>;
    /** Background color of the parent element/ Цвет фона родительского элемента **/
    readonly background: ComputedRef<string>;
    /** Border radius of the parent element/ Радиус границы родительского элемента **/
    readonly borderRadius: ComputedRef<string>;
    /**
     * Get computed styles of the parent element.
     *
     * Получить вычисленные стили родительского элемента.
     */
    protected getStyles(): CSSStyleDeclaration | undefined;
}
