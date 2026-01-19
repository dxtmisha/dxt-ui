import { WindowClasses } from './WindowClasses';
import { WindowElement } from './WindowElement';
/**
 * A class for working with coordinates.
 *
 * Класс для работы с координатами.
 */
export declare class WindowCoordinates {
    protected readonly classes: WindowClasses;
    protected readonly element: WindowElement;
    protected top: number;
    protected right: number;
    protected bottom: number;
    protected left: number;
    protected width: number;
    protected height: number;
    protected innerWidth: number;
    protected innerHeight: number;
    protected controlWidth: number;
    protected controlHeight: number;
    protected padding: number;
    protected location: string;
    /**
     * Constructor
     * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
     * @param element an object of the class for working with elements/ объект класса для работы с элементами
     */
    constructor(classes: WindowClasses, element: WindowElement);
    /**
     * Returns the distance from the top point.
     *
     * Возвращает расстояние от верхней точки.
     */
    getTop(): number;
    /**
     * Returns the distance from the right point.
     *
     * Возвращает расстояние от правой точки.
     */
    getRight(): number;
    /**
     * Returns the distance from the lower point.
     *
     * Возвращает расстояние от нижней точки.
     */
    getBottom(): number;
    /**
     * Returns the distance from the left point.
     *
     * Возвращает расстояние от левой точки.
     */
    getLeft(): number;
    /**
     * Returns the width of the element.
     *
     * Возвращает ширину элемента.
     */
    getWidth(): number;
    /**
     * Returns the height of the element.
     *
     * Возвращает высоту элемента.
     */
    getHeight(): number;
    /**
     * Returns the width of the window.
     *
     * Возвращает ширину окна.
     */
    getInnerWidth(): number;
    /**
     * Returns the height of the window.
     *
     * Возвращает высоту окна.
     */
    getInnerHeight(): number;
    /**
     * Returns the width of the control element.
     *
     * Возвращает ширину элемента управления.
     */
    getControlWidth(): number;
    /**
     * Returns the height of the control element.
     *
     * Возвращает высоту элемента управления.
     */
    getControlHeight(): number;
    /**
     * Returns the margins of the element.
     *
     * Возвращает отступы у элемента.
     */
    getPadding(): number;
    /**
     * Returns the values of the element's position.
     *
     * Возвращает значения положения элемента.
     */
    getLocation(): string;
    /**
     * Returns the maximum height of the body.
     *
     * Возвращает максимальную высоту у body.
     */
    getMaxHeight(): number;
    /**
     * Data updates.
     *
     * Обновления данных.
     */
    update(): boolean;
    /**
     * Resets all data to initial values.
     *
     * Сбрасывает все данные к начальным значениям.
     */
    reset(): this;
    /**
     * Initializes padding value from computed styles.
     *
     * Инициализирует значение отступов из вычисленных стилей.
     */
    protected initPadding(): number;
    /**
     * Calculates control position values.
     *
     * Вычисляет значения положения контроля.
     * @param top position of an element/ положение элемента
     */
    protected initLocation(top: number): string;
}
