import { WindowElement } from './WindowElement';
import { WindowCoordinates } from './WindowCoordinates';
import { WindowPosition } from './WindowPosition';
import { WindowOrigin } from './WindowOrigin';
/**
 * Style management class.
 *
 * Класс управления стилями.
 */
export declare class WindowStyles {
    protected readonly element: WindowElement;
    protected readonly coordinates: WindowCoordinates;
    protected readonly position: WindowPosition;
    protected readonly origin: WindowOrigin;
    protected readonly className: string;
    /**
     * Constructor
     * @param element an object of the class for working with elements/ объект класса для работы с элементами
     * @param coordinates object for working with coordinates/ объект для работы с координатами
     * @param position object for working with the position of the element/ объект для работы с положением элемента
     * @param origin the object for work is in the initial position upon opening/ объект для работы в начальной позиции при открытии
     * @param className class name/ название класса
     */
    constructor(element: WindowElement, coordinates: WindowCoordinates, position: WindowPosition, origin: WindowOrigin, className: string);
    /**
     * Data update.
     *
     * Обновление данных.
     */
    update(): void;
    /**
     * Updates the window type (menu or modal).
     *
     * Обновляет тип окна (меню или модальное).
     * @param isMenu whether the window is a menu/ является ли окно меню
     */
    updateType(isMenu: boolean): void;
}
