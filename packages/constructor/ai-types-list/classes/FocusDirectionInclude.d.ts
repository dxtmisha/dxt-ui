// md5:64bef448d116057b127f2bf46366c52e
import { Ref } from 'vue';
import { EventItem } from '@dxtmisha/functional';
/**
 * Coordinate structure representing element center or coordinates difference.
 *
 * Структура координат, представляющая центр элемента или разность координат.
 */
export type FocusCoordinates = {
    /** Horizontal coordinate / Горизонтальная координата */
    x: number;
    /** Vertical coordinate / Вертикальная координата */
    y: number;
};
/**
 * Class for managing directional focus navigation on child elements via keyboard arrow keys,
 * while keeping actual browser focus on the parent element.
 *
 * Класс для управления направленной навигацией фокуса по дочерним элементам с помощью клавиш со стрелками,
 * сохраняя фактический фокус браузера на родительском элементе.
 */
export declare class FocusDirectionInclude {
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly selector: string;
    protected readonly activeSelector: string;
    protected readonly activeClass: string;
    /** Event item for keydown event / Элемент события для события нажатия клавиши */
    protected keydownEvent?: EventItem<HTMLElement, KeyboardEvent>;
    /** Currently active focus element / Текущий активный элемент фокуса */
    protected currentActive?: HTMLElement;
    /**
     * Constructor for FocusDirectionInclude.
     *
     * Конструктор для FocusDirectionInclude.
     * @param element reference to the parent element / ссылка на родительский элемент
     * @param selector selector for elements participating in focus / селектор элементов, участвующих в фокусировке
     * @param activeSelector selector for default element to receive focus / селектор элемента, получающего фокус по умолчанию
     * @param activeClass CSS class name indicating that element is focused / имя CSS-класса для указания, что элемент сейчас в фокусе
     */
    constructor(element: Ref<HTMLElement | undefined>, selector?: string, activeSelector?: string, activeClass?: string);
    /**
     * Returns binding properties for the parent focus container element.
     *
     * Возвращает свойства привязки для родительского элемента контейнера фокуса.
     * @returns binding properties object / объект свойств привязки
     */
    get binds(): {
        tabindex: number;
        onFocus: () => void;
        onBlur: () => void;
    };
    /**
     * Sets focus to the default/initial child element.
     *
     * Устанавливает фокус на начальный дочерний элемент по умолчанию.
     * @returns this instance / текущий экземпляр
     */
    activateDefault(): this;
    /**
     * Clears the active focus class from all child elements.
     *
     * Удаляет активный класс фокуса со всех дочерних элементов.
     * @returns this instance / текущий экземпляр
     */
    clearActive(): this;
    /** Handler for focus event / Обработчик для события фокуса */
    readonly onFocus: () => void;
    /** Handler for blur event / Обработчик для события потери фокуса */
    readonly onBlur: () => void;
    /**
     * Starts event listeners.
     *
     * Запускает слушатели событий.
     */
    protected start(): void;
    /**
     * Stops event listeners.
     *
     * Останавливает слушатели событий.
     */
    protected stop(): void;
    /**
     * Moves focus to the nearest element in the given direction.
     *
     * Перемещает фокус на ближайший элемент в указанном направлении.
     * @param direction keyboard arrow key direction / направление стрелки клавиатуры
     */
    protected move(direction: string): void;
    /**
     * Checks if the coordinate offset matches the target direction.
     *
     * Проверяет, соответствует ли смещение координат целевому направлению.
     * @param difference coordinate difference object / объект разницы координат
     * @param direction target direction / целевое направление
     * @returns true if direction matches / true, если направление совпадает
     */
    protected isCorrectDirection(difference: FocusCoordinates, direction: string): boolean;
    /**
     * Gets the currently active child element or activates the default one.
     *
     * Получает текущий активный дочерний элемент или активирует элемент по умолчанию.
     * @returns active element or undefined / активный элемент или undefined
     */
    protected getActiveElement(): HTMLElement | undefined;
    /**
     * Gets the current active child element, activating the default one if none is active.
     *
     * Получает текущий активный дочерний элемент, активируя элемент по умолчанию, если ни один не активен.
     * @returns current active element or undefined / текущий активный элемент или undefined
     */
    protected getCurrentActive(): HTMLElement | undefined;
    /**
     * Calculates the difference between two coordinates.
     *
     * Вычисляет разницу между двумя координатами.
     * @param center1 first coordinates / первые координаты
     * @param center2 second coordinates / вторые координаты
     * @returns difference object / объект разницы
     */
    protected getCoordinatesDifference(center1: FocusCoordinates, center2: FocusCoordinates): FocusCoordinates;
    /**
     * Calculates the weighted distance between element centers based on direction.
     *
     * Вычисляет взвешенное расстояние между центрами элементов в зависимости от направления.
     * @param difference coordinate difference object / объект разницы координат
     * @param direction target direction / целевое направление
     * @returns calculated distance / рассчитанное расстояние
     */
    protected getDistance(difference: FocusCoordinates, direction: string): number;
    /**
     * Calculates the center coordinates of a given element.
     *
     * Вычисляет координаты центра заданного элемента.
     * @param targetElement target HTML element / целевой HTML-элемент
     * @returns object with x and y coordinates of element center / объект с координатами x и y центра элемента
     */
    protected getElementCenter(targetElement: HTMLElement): FocusCoordinates;
    /**
     * Finds the nearest candidate element in the specified direction.
     *
     * Находит ближайший элемент-кандидат в указанном направлении.
     * @param direction keyboard arrow key direction / направление стрелки клавиатуры
     * @returns nearest candidate or undefined / ближайший кандидат или undefined
     */
    protected findNearestCandidate(direction: string): HTMLElement | undefined;
    /**
     * Removes the active class from all elements inside the container.
     *
     * Удаляет активный класс со всех элементов внутри контейнера.
     */
    protected clearAllActiveClasses(): void;
    /**
     * Handler for keydown event.
     *
     * Обработчик для события нажатия клавиши.
     * @param event keyboard event object / объект события клавиатуры
     */
    protected readonly onKeydown: (event: KeyboardEvent) => void;
}
