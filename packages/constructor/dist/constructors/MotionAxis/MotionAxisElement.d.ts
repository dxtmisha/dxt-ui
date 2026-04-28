import { Ref } from 'vue';
import { MotionAxisClassStatus } from './basicTypes';
/**
 * Class for managing elements.
 *
 * Класс для управления элементами.
 */
export declare class MotionAxisElement {
    protected element: Ref<HTMLDivElement | undefined>;
    protected className: string | string[];
    protected readonly classStatus: MotionAxisClassStatus;
    protected readonly start: Ref<boolean, boolean>;
    protected readonly move: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param element window element / элемент окна
     * @param className class name / название класса
     */
    constructor(element: Ref<HTMLDivElement | undefined>, className: string | string[]);
    /**
     * Checks if the element is an active slide.
     *
     * Проверяет, является ли элемент активным слайдом.
     * @param element selected element / выбранный элемент
     */
    isActive(element: HTMLDivElement): boolean;
    /**
     * Returns the element.
     *
     * Возвращает элемент.
     */
    get(): HTMLDivElement | undefined;
    /**
     * Returns the start state.
     *
     * Возвращает состояние старта.
     */
    getStart(): boolean;
    /**
     * Returns the move state.
     *
     * Возвращает состояние движения.
     */
    getMove(): boolean;
    /**
     * Returns a list of all classes by status.
     *
     * Возвращает список всех классов по статусу.
     */
    getClassStatus(): MotionAxisClassStatus;
    /**
     * Returns the element for preparation to transition to the active element.
     *
     * Возвращает элемент для подготовки к переходу к активному элементу.
     */
    getElementPreparation(): HTMLDivElement | null | undefined;
    /**
     * Blocks scrolling.
     *
     * Блокирует прокрутку.
     */
    blockScroll(): void;
    /**
     * Restores scrolling.
     *
     * Восстанавливает прокрутку.
     */
    returnScroll(): void;
    /**
     * Transition to start state.
     *
     * Переход в состояние старта.
     */
    toStart(): void;
    /**
     * End of start state.
     *
     * Окончание состояния старта.
     */
    toEnd(): void;
    /**
     * Transition to move state.
     *
     * Переход в состояние движения.
     */
    toMove(): void;
    /**
     * End of move state.
     *
     * Окончание состояния движения.
     */
    toStop(): void;
    /**
     * Activates event listeners for animation end.
     *
     * Активизирует события прослушивания окончания анимации.
     * @param callback event listener / прослушивать события
     */
    initEvent(callback: () => void): void;
    /**
     * Returns class names by status.
     *
     * Возвращает названия классов по статусу.
     * @param status status name / название статуса
     */
    protected getClassStatusItem(status?: string): string;
    /**
     * Returns the class name for the scroll element.
     *
     * Возвращает название класса для элемента прокрутки.
     */
    protected getClassScroll(): string;
    /**
     * Returns the class name for the hidden scroll element.
     *
     * Возвращает название класса для скрытого элемента прокрутки.
     */
    protected getClassScrollHidden(): string;
    /**
     * Returns the scroll element.
     *
     * Возвращает элемент прокрутки.
     */
    protected getElementScroll(): HTMLElement | undefined;
    /**
     * End of animation event.
     *
     * Событие окончания анимации.
     * @param event event object / объект события
     */
    protected isTransitionend(event: TransitionEvent): boolean;
}
