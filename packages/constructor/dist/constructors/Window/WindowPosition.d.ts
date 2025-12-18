import { WindowClient } from './WindowClient';
import { WindowElement } from './WindowElement';
import { WindowCoordinates } from './WindowCoordinates';
import { WindowProps } from './props';
/**
 * A class for working with position.
 *
 * Класс для работы с позицией.
 */
export declare class WindowPosition {
    protected readonly props: WindowProps;
    protected readonly client: WindowClient;
    protected readonly element: WindowElement;
    protected readonly coordinates: WindowCoordinates;
    protected x: number;
    protected y: number;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
     * @param element an object of the class for working with elements/ объект класса для работы с элементами
     * @param coordinates object for working with coordinates/ объект для работы с координатами
     */
    constructor(props: WindowProps, client: WindowClient, element: WindowElement, coordinates: WindowCoordinates);
    /**
     * Checks if the alignment type is above the element.
     *
     * Проверяет, является ли тип выравнивания над элементом.
     */
    isOver(): boolean;
    /**
     * Returns the X position.
     *
     * Возвращает позицию X.
     */
    getX(): number;
    /**
     * Returns the Y position.
     *
     * Возвращает позицию Y.
     */
    getY(): number;
    /**
     * Returns the X position for styles.
     *
     * Возвращает позицию X для стилей.
     */
    getStyleX(): string;
    /**
     * Returns the Y position for styles.
     *
     * Возвращает позицию Y для стилей.
     */
    getStyleY(): string;
    /**
     * Update of the element's position coordinates.
     *
     * Обновление координаты положения элемента.
     */
    update(): boolean;
    /**
     * Updates the scroll position if an element is selected.
     *
     * Обновляет место скрола, если выбран элемент.
     */
    updateScroll(): void;
    /**
     * Updates the scroll display status of the element.
     *
     * Обновляет статус отображения скролла у элемента.
     */
    updateBody(): void;
    /**
     * Returns the axis alignment values.
     *
     * Возвращает значения оси выравнивания.
     */
    protected getAxis(): WindowProps['axis'];
    /**
     * Returns the margins from the control element.
     *
     * Возвращает отступы от элемента управления.
     * @param axis the axis of alignment of the element/ ось выравнивания элемента
     */
    protected getIndent(axis: string): number;
    /**
     * Calculation of the position for window alignment.
     *
     * Вычисление места положения для выравнивания окна.
     * @param rectTop high control coordinates/ высокие координаты контрола
     * @param rectBottom lower control coordinates/ нижние координаты контрола
     */
    protected getOverHeight(rectTop: number, rectBottom: number): number;
    /**
     * Changes in position along the X coordinate.
     *
     * Изменения положения по координате X.
     */
    protected setX(): this;
    /**
     * Changes in position along the Y coordinate.
     *
     * Изменения положения по координате Y.
     */
    protected setY(): this;
    /**
     * Calculation of the element's position.
     *
     * Вычисление положения элемента.
     * @param inValue initial values/ начальные значения
     * @param outValue final values/ конечные значения
     * @param length length of the object/ длина объекта
     * @param innerLength length of the indentation/ длина отступа
     * @param maxSize maximum length/ максимальная длина
     */
    protected calculationInner(inValue: number, outValue: number, length: number, innerLength: number, maxSize: number): number;
    /**
     * Calculation of the element's position.
     *
     * Вычисление положения над элемента.
     * @param value initial values/ начальные значения
     * @param top high control coordinates/ высокие координаты контрола
     * @param bottom lower control coordinates/ нижние координаты контрола
     * @param length length of the object/ длина объекта
     * @param innerLength length of the indentation/ длина отступа
     */
    protected calculationOver(value: number, top: number, bottom: number, length: number, innerLength: number): number;
}
