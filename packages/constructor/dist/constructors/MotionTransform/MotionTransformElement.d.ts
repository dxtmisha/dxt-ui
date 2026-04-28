import { Ref, ComputedRef } from 'vue';
import { MotionTransformClassList, MotionTransformStyle } from './basicTypes';
import { MotionTransformProps } from './props';
/**
 * Class for working with elements and classes.
 *
 * Класс для работы с элементами и классами.
 */
export declare class MotionTransformElement {
    protected readonly props: MotionTransformProps;
    readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly elementContext: Ref<HTMLDivElement | undefined>;
    protected readonly className: string;
    readonly id: string;
    readonly idControl: string;
    readonly idBody: string;
    readonly classes: MotionTransformClassList;
    readonly style: MotionTransformStyle;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element window element/ элемент окна
     * @param elementContext substrate element/ элемент подложка
     * @param className class name/ название класса
     */
    constructor(props: MotionTransformProps, element: Ref<HTMLDivElement | undefined>, elementContext: Ref<HTMLDivElement | undefined>, className: string);
    /** Checks if the element exists/ Проверяет, есть ли элемент */
    readonly is: ComputedRef<boolean>;
    /**
     * Checks if the click event is prohibited.
     *
     * Проверяет, запрещено ли событие клика.
     * @param target selected element/ выбранный элемент
     */
    isClick(target: HTMLElement): boolean;
    /**
     * Checks if the click event is prohibited in the global area.
     *
     * Проверяет, запрещено ли событие клика в глобальной области.
     * @param target selected element/ выбранный элемент
     */
    isClickGlobal(target: HTMLElement): boolean;
    /**
     * Checks if the window needs to be closed on click.
     *
     * Проверяет, нужно ли закрыть окно при клике.
     * @param target selected element/ выбранный элемент
     */
    isClose(target: HTMLElement): boolean;
    /**
     * Checks if the element is outside the body.
     *
     * Проверяет, является ли элемент за предел тела.
     * @param target selected element/ выбранный элемент
     */
    isOutside(target: HTMLElement): boolean;
    /**
     * Checks if the element needs to be ignored.
     *
     * Проверяет, нужно ли игнорировать элемент.
     * @param target selected element/ выбранный элемент
     */
    isIgnore(target: HTMLElement): boolean;
    /**
     * Is the animation for slide changes enabled.
     *
     * Включено ли анимация на изменения слайда.
     */
    isAnimation(): boolean;
    /**
     * Is window mode enabled.
     *
     * Включен ли режим окна.
     */
    isWindow(): boolean;
    /**
     * Checks whether the title needs to be left.
     *
     * Проверяет, надо ли оставить заголовок.
     */
    isSection(): boolean;
    /**
     * Returns the main element.
     *
     * Возвращает главного элемента.
     */
    getElement(): HTMLDivElement | undefined;
    /**
     * Returns the context element.
     *
     * Возвращает элемент контекста.
     */
    getElementContext(): HTMLDivElement | undefined;
    /**
     * Returns the title element.
     *
     * Возвращает элемент заголовка.
     */
    getElementHead(): HTMLDivElement | undefined;
    /**
     * Returns the body element.
     *
     * Возвращает элемент тела.
     */
    getElementBody(): HTMLDivElement | undefined;
    /**
     * Returns the identifier.
     *
     * Возвращает идентификатор.
     */
    getId(): string;
    /**
     * Returns the sizes of elements.
     *
     * Возвращает размеры элементов.
     */
    getRect(): DOMRect | undefined;
    /**
     * Returns the list of available classes.
     *
     * Возвращает список доступных классов.
     * @param className class name/ название класса
     */
    static getClassesList(className: string): MotionTransformClassList;
    /**
     * Returns a list of available classes by design name.
     *
     * Возвращает список доступных классов по названию дизайна.
     * @param design design name/ названия дизайна
     */
    static getClassesListByDesign(design: string): MotionTransformClassList;
}
