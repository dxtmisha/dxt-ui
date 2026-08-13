// md5:3ab7e363fd61f62fc3f2daf9618ad18c
import { Ref } from 'vue';
/**
 * Class for managing horizontal scrolling mechanics using wheel interactions.
 * It provides custom wheel scroll behaviors, scroll snap compatibility checks,
 * and generates appropriate event bindings for scrollable container elements.
 *
 * Класс для управления механикой горизонтальной прокрутки с помощью взаимодействия с колесом мыши.
 * Обеспечивает настраиваемое поведение прокрутки колесом, проверку совместимости с привязкой
 * прокрутки (scroll snap) и генерирует соответствующие привязки событий для прокручиваемых контейнеров.
 */
export declare class ScrollToXInclude {
    protected readonly element: Ref<HTMLElement | undefined>;
    /**
     * Constructor
     *
     * Конструктор
     * @param element target scrollable element reference / ссылка на целевой прокручиваемый элемент
     */
    constructor(element: Ref<HTMLElement | undefined>);
    /**
     * Returns bindings for the element.
     *
     * Возвращает привязки для элемента.
     * @returns object with scroll event handlers / объект с обработчиками событий прокрутки
     */
    get binds(): {
        onWheelPassive: (event: WheelEvent) => void;
    };
    /**
     * Handler for the wheel event.
     *
     * Обработчик события колеса мыши.
     * @param event wheel event / событие колеса мыши
     */
    readonly onScrollToX: (event: WheelEvent) => void;
    /**
     * Checks if scroll snap is not enabled.
     *
     * Проверяет, не включена ли привязка прокрутки.
     * @returns checking state / состояние проверки
     */
    protected isNotScrollSnap(): boolean;
}
