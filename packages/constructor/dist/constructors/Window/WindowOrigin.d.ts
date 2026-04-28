import { WindowClient } from './WindowClient';
import { WindowElement } from './WindowElement';
import { WindowPosition } from './WindowPosition';
/**
 * Class for defining the initial position for the animation.
 *
 * Класс для определения начального положения для анимации.
 */
export declare class WindowOrigin {
    protected readonly client: WindowClient;
    protected readonly element: WindowElement;
    protected readonly position: WindowPosition;
    protected x: number | null;
    protected y: number | null;
    /**
     * Constructor
     * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
     * @param element an object of the class for working with elements/ объект класса для работы с элементами
     * @param position object for working with the position of the element/ объект для работы с положением элемента
     */
    constructor(client: WindowClient, element: WindowElement, position: WindowPosition);
    /**
     * Returns the initial X point for the start of the animation.
     *
     * Возвращает начальную точку X для начала анимации.
     */
    getStyleX(): string | null;
    /**
     * Returns the initial Y point for the start of the animation.
     *
     * Возвращает начальную точку Y для начала анимации.
     */
    getStyleY(): string | null;
    /**
     * Updating the initial position of the element for the animation.
     *
     * Обновление начального положения элемента для анимации.
     */
    update(): this;
    /**
     * Resets all data to initial values.
     *
     * Сбрасывает все данные к начальным значениям.
     */
    reset(): this;
}
