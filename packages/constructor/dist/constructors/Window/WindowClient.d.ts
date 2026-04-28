import { WindowElement } from './WindowElement';
/**
 * The class stores the coordinates of the mouse click. It is used for the opening
 * animation, when the element appears from the point of click. And also for the contextmenu event.
 *
 * Класс хранит координаты нажатия мыши. Используется для анимации открытия,
 * когда элемент появляется от точки нажатия. А также для события contextmenu.
 */
export declare class WindowClient {
    protected readonly element: WindowElement;
    protected x: number;
    protected y: number;
    constructor(element: WindowElement);
    /**
     * Checks if the button was pressed.
     *
     * Проверяет, было ли нажатие на кнопку.
     */
    is(): boolean;
    /**
     * Checks if the coordinates are at the origin (0,0).
     *
     * Проверяет, находятся ли координаты в начале координат (0,0).
     */
    isZero(): boolean;
    /**
     * Returns the X coordinate.
     *
     * Возвращает координату X.
     */
    getX(): number;
    /**
     * Returns the Y coordinate.
     *
     * Возвращает координату Y.
     */
    getY(): number;
    /**
     * Returns the shift along the X coordinate.
     *
     * Возвращает сдвиг по координате X.
     */
    getShiftX(value: number): number;
    /**
     * Returns the shift along the Y coordinate.
     *
     * Возвращает сдвиг по координате Y.
     */
    getShiftY(value: number): number;
    /**
     * Changes the coordinates.
     *
     * Изменяет координаты.
     * @param x value of X/ значение X
     * @param y value of Y/ значение Y
     */
    set(x: number, y: number): this;
    /**
     * Resets all data to initial values.
     *
     * Сбрасывает все данные к начальным значениям.
     */
    reset(): this;
    /**
     * The method updates the current position.
     *
     * Метод обновляет текущее положение.
     */
    update(): this;
}
