// md5:9eecad705605242983dbb3e9c3c6ff97
import { Ref } from 'vue';
import { EventItem } from '@dxtmisha/functional';
import { StickyPropsInclude } from '../types/stickyTypes';
/**
 * Class for managing sticky positioning of an element relative to its parent's visible area.
 * It tracks scroll and resize actions to compute and update the visual offset.
 *
 * Класс для управления липким позиционированием элемента относительно видимой области его родителя.
 * Отслеживает действия прокрутки и изменения размера для вычисления и обновления визуального смещения.
 */
export declare class StickyInclude {
    protected readonly props: StickyPropsInclude | (() => StickyPropsInclude);
    protected readonly className: string;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly parent: Ref<HTMLElement | undefined>;
    /** Scroll container targets / Целевые контейнеры прокрутки */
    protected scrollContainer: (HTMLElement | Window)[];
    /** Event listeners for scroll containers / Слушатели событий для контейнеров прокрутки */
    protected eventScroll: EventItem<HTMLElement | Window, Event>[];
    /** Event listener for parent resizing / Слушатель событий для изменения размера родителя */
    protected eventResizeParent?: EventItem<HTMLElement, Event>;
    /** Event listener for element resizing / Слушатель событий для изменения размера элемента */
    protected eventResizeElement?: EventItem<HTMLElement, Event>;
    /** Timeout for scroll end detection / Таймаут для обнаружения окончания прокрутки */
    protected scrollTimeout?: any;
    /**
     * Constructor
     *
     * Конструктор
     * @param props input properties / входящие свойства
     * @param className class name / название класса
     * @param element target element reference / ссылка на целевой элемент
     * @param parent parent element reference / ссылка на родительский элемент
     */
    constructor(props: StickyPropsInclude | (() => StickyPropsInclude), className: string, element: Ref<HTMLElement | undefined>, parent: Ref<HTMLElement | undefined>);
    /**
     * Checks if sticky positioning is enabled.
     *
     * Проверяет, включено ли липкое позиционирование.
     * @returns true if sticky is enabled / true, если липкое позиционирование включено
     */
    protected isEnabled(): boolean;
    /**
     * Returns the configuration properties.
     *
     * Возвращает свойства конфигурации.
     * @returns properties / свойства
     */
    protected getProps(): StickyPropsInclude;
    /**
     * Returns the name of the custom CSS property for the sticky top offset.
     *
     * Возвращает имя пользовательского CSS-свойства для верхнего отступа липкого элемента.
     * @returns custom CSS property name / имя пользовательского CSS-свойства
     */
    protected getCustomProperty(): string;
    /**
     * Returns the name of the custom CSS property for the sticky height.
     *
     * Возвращает имя пользовательского CSS-свойства для высоты липкого элемента.
     * @returns custom CSS property name / имя пользовательского CSS-свойства
     */
    protected getCustomPropertyHeight(): string;
    /**
     * Returns the dataset property name for the sticky state.
     *
     * Возвращает имя свойства dataset для состояния липкости.
     * @returns dataset property name / имя свойства dataset
     */
    protected getDatasetProperty(): string;
    /**
     * Returns the dataset property name for the active scroll state.
     *
     * Возвращает имя свойства dataset для активного состояния прокрутки.
     * @returns dataset property name / имя свойства dataset
     */
    protected getDatasetScrollProperty(): string;
    /**
     * Returns the current scroll top position of the primary scroll container.
     *
     * Возвращает текущее положение прокрутки сверху основного контейнера прокрутки.
     * @returns scroll top position / положение прокрутки сверху
     */
    protected getScrollTop(): number;
    /**
     * Finds the closest scrollable ancestor of the element, or window if none found.
     *
     * Находит ближайшего прокручиваемого предка элемента или window, если таковой не найден.
     * @returns scrollable ancestor or window / прокручиваемый предок или window
     */
    protected getScrollContainer(): (HTMLElement | Window)[];
    /**
     * Calculates the top position offset bounded by parent dimensions.
     *
     * Вычисляет верхнее смещение положения, ограниченное размерами родителя.
     * @returns calculated top offset in pixels or undefined / вычисленный верхний отступ в пикселях или undefined
     */
    protected getClampedTop(): number | undefined;
    /**
     * Starts tracking position and listening to events.
     *
     * Начинает отслеживание положения и прослушивание событий.
     */
    protected start(): void;
    /**
     * Stops tracking position and removes all event listeners.
     *
     * Останавливает отслеживание положения и удаляет все слушатели событий.
     */
    protected stop(): void;
    /**
     * Resets active listeners and starts tracking.
     *
     * Сбрасывает активные слушатели и начинает отслеживание.
     */
    protected reset(): void;
    /**
     * Initializes the scroll container.
     *
     * Инициализирует контейнер прокрутки.
     */
    protected initScrollContainer(): this;
    /**
     * Initializes and starts scroll event listener.
     *
     * Инициализирует и запускает слушатель событий прокрутки.
     */
    protected initEventScroll(): this;
    /**
     * Initializes and starts parent resizing event listener.
     *
     * Инициализирует и запускает слушатель событий изменения размера родителя.
     */
    protected initEventResizeParent(): this;
    /**
     * Initializes and starts element resizing event listener.
     *
     * Инициализирует и запускает слушатель событий изменения размера элемента.
     */
    protected initEventResizeElement(): this;
    /**
     * Removes the active scroll dataset attribute from the element.
     *
     * Удаляет активный атрибут dataset для прокрутки с элемента.
     */
    protected removeDatasetScroll(): void;
    /**
     * Computes position and updates element style positioning.
     *
     * Вычисляет положение и обновляет стили позиционирования элемента.
     */
    readonly updatePosition: () => void;
    /**
     * Event handler for scrolling.
     * Updates position and manages the active scroll dataset attribute.
     *
     * Обработчик события прокрутки.
     * Обновляет положение и управляет активным атрибутом dataset для прокрутки.
     */
    readonly onScroll: () => void;
}
