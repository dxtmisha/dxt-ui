import { ToRefs } from 'vue';
import { ConstrEmit, ConstrValue } from '@dxtmisha/functional';
import { ScrollbarProps } from './props';
import { ScrollbarEmits } from './types';
/**
 * ScrollbarBorder class provides functionality for updating scroll position and displaying borders.
 * It monitors scroll events and manages visual feedback for top and bottom scroll boundaries.
 *
 * Класс ScrollbarBorder предоставляет функциональность для обновления положения скролла и отображения границ.
 * Он отслеживает события скролла и управляет визуальной обратной связью для верхней и нижней границ скролла.
 */
export declare class ScrollbarBorder {
    protected readonly props: ScrollbarProps;
    protected readonly element: ConstrValue<HTMLDivElement>;
    protected readonly className: string;
    protected readonly emits?: ConstrEmit<ScrollbarEmits> | undefined;
    private event?;
    private eventSub?;
    /**
     * Top boundary state/ состояние верхней границы
     */
    private top;
    /**
     * Bottom boundary state/ состояние нижней границы
     */
    private bottom;
    /**
     * Constructor for ScrollbarBorder class.
     *
     * Конструктор класса ScrollbarBorder.
     * @param props properties/ свойства
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param className class name/ название класса
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: ScrollbarProps, refs: ToRefs<ScrollbarProps>, element: ConstrValue<HTMLDivElement>, className: string, emits?: ConstrEmit<ScrollbarEmits> | undefined);
    /**
     * Changing the monitoring status depending on the border parameter.
     *
     * Изменение статуса слежения в зависимости от параметра border.
     */
    readonly toggle: () => void;
    /**
     * Updating the monitoring element for the event object.
     *
     * Обновление элемента слежения для объекта события.
     */
    readonly reset: () => void;
    /**
     * Start monitoring the scroll.
     *
     * Начать слежение за скроллом.
     */
    start(): void;
    /**
     * Stopping the monitoring of scroll changes.
     *
     * Остановка слежения за изменениями скролла.
     */
    stop(): void;
    /**
     * Updates the list of active classes.
     *
     * Обновляет список активных классов.
     */
    protected readonly update: () => void;
    /**
     * Function for the event of monitoring scroll changes.
     *
     * Функция для события слежения за изменениями скролла.
     */
    protected readonly on: () => void;
    /**
     * Changing the data for class output.
     *
     * Изменение данных для вывода класса.
     * @param top status of the top border display/ статус отображения верхнего бордера
     * @param bottom status of the bottom border display/ статус отображения нижнего бордера
     */
    protected setData(top: boolean, bottom: boolean): this;
    /**
     * Sets the top boundary state and emits related events.
     *
     * Устанавливает состояние верхней границы и генерирует связанные события.
     * @param top status of the top border display/ статус отображения верхнего бордера
     */
    private setTop;
    /**
     * Sets the bottom boundary state and emits related events.
     *
     * Устанавливает состояние нижней границы и генерирует связанные события.
     * @param bottom status of the bottom border display/ статус отображения нижнего бордера
     */
    private setBottom;
}
