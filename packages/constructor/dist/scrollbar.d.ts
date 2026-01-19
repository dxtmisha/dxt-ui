import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrClassObject } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { ConstrValue } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { ScrollbarWidthRef } from '@dxtmisha/functional';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsScrollbar: {
    tag: string;
};

/**
 * Scrollbar class provides functionality for managing scrollbar behavior and appearance.
 * It handles scroll width calculations and border display based on scroll position.
 *
 * Класс Scrollbar предоставляет функциональность для управления поведением и внешним видом полосы прокрутки.
 * Он обрабатывает вычисления ширины скролла и отображение границ на основе позиции скролла.
 */
export declare class Scrollbar {
    protected readonly props: ScrollbarPropsBasic;
    protected readonly refs: ToRefs<ScrollbarPropsBasic>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ScrollbarComponents, ScrollbarPropsBasic> | undefined;
    protected readonly slots?: ScrollbarSlots | undefined;
    protected readonly emits?: ConstrEmit<ScrollbarEmits> | undefined;
    readonly width: ScrollbarWidthRef;
    readonly border: ScrollbarBorder;
    /**
     * Constructor for Scrollbar class.
     *
     * Конструктор класса Scrollbar.
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: ScrollbarPropsBasic, refs: ToRefs<ScrollbarPropsBasic>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ScrollbarComponents, ScrollbarPropsBasic> | undefined, slots?: ScrollbarSlots | undefined, emits?: ConstrEmit<ScrollbarEmits> | undefined);
    /**
     * Returns values for the class.
     *
     * Возвращает значения для класса.
     */
    readonly classes: ComputedRef<ConstrClassObject>;
}

/**
 * ScrollbarBorder class provides functionality for updating scroll position and displaying borders.
 * It monitors scroll events and manages visual feedback for top and bottom scroll boundaries.
 *
 * Класс ScrollbarBorder предоставляет функциональность для обновления положения скролла и отображения границ.
 * Он отслеживает события скролла и управляет визуальной обратной связью для верхней и нижней границ скролла.
 */
declare class ScrollbarBorder {
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

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type ScrollbarClasses = {
    main: ConstrClass;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type ScrollbarComponents = {};

/**
 * Interface for describing which components need to be connected for work/
 * Интерфейс для описания, какие компоненты надо подключить для работы
 */
export declare type ScrollbarComponentsInclude = {
    scrollbar?: object;
};

/**
 * ScrollbarDesign
 */
export declare class ScrollbarDesign<COMP extends ScrollbarComponents, EXPOSE extends ScrollbarExpose, CLASSES extends ScrollbarClasses, P extends ScrollbarPropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ScrollbarEmits, EXPOSE, ScrollbarSlots, CLASSES, P> {
    protected readonly item: Scrollbar;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ScrollbarEmits, P>);
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected initRender(): VNode | undefined;
}

/**
 * Type describing the edge position of the scrollbar/
 * Тип, описывающий позицию края скроллбара
 */
export declare type ScrollbarEdgeType = 'top' | 'bottom';

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type ScrollbarEmits = {
    top: [isTop: boolean];
    reachTop: [];
    leaveTop: [];
    bottom: [isBottom: boolean];
    reachBottom: [];
    leaveBottom: [];
    edge: [isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType];
};

/**
 * Interface for describing available events with scrollbar prefix/
 * Интерфейс для описания доступных событий с префиксом scrollbar
 */
export declare type ScrollbarEmitsInclude = {
    scrollbarTop: ScrollbarEmits['top'];
    scrollbarReachTop: ScrollbarEmits['reachTop'];
    scrollbarLeaveTop: ScrollbarEmits['leaveTop'];
    scrollbarBottom: ScrollbarEmits['bottom'];
    scrollbarReachBottom: ScrollbarEmits['reachBottom'];
    scrollbarLeaveBottom: ScrollbarEmits['leaveBottom'];
    scrollbarEdge: ScrollbarEmits['edge'];
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface ScrollbarExpose {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface ScrollbarProps extends ScrollbarPropsBasic, ScrollbarPropsToken {
}

export declare interface ScrollbarPropsBasic {
    tag?: string;
}

/**
 * Interface for describing available properties for scrollbar inclusion/
 * Интерфейс для описания доступных свойств для включения скроллбара
 */
export declare interface ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> {
    scrollbarAttrs?: ConstrBind<Scrollbar>;
}

declare interface ScrollbarPropsToken {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface ScrollbarSlots {
    default?(props: any): any;
}

export { }
