import { ToRefs } from 'vue';
import { ConstrEmit, EventItem } from '@dxtmisha/functional';
import { TooltipStyle } from './TooltipStyle';
import { TooltipStatus } from './TooltipStatus';
import { TooltipPosition } from './TooltipPosition';
import { TooltipProps } from './props';
import { TooltipEmits } from './types.ts';
/**
 * Class for managing the status of an open window.
 *
 * Класс для управления статусом открытого окна.
 */
export declare class TooltipOpen {
    protected readonly props: Readonly<TooltipProps>;
    protected readonly style: TooltipStyle;
    protected readonly status: TooltipStatus;
    protected readonly position: TooltipPosition;
    protected readonly emits?: ConstrEmit<TooltipEmits> | undefined;
    protected timeout?: any;
    protected timeoutHide?: any;
    protected timeoutTo?: any;
    protected readonly event: EventItem<Window, Event, any>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param style object for working with styles/ объект для работы со стилями
     * @param status object for working with statuses/ объект для работы со статусами
     * @param position object for working with the position of the element/ объект для работы с положением элемента
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: Readonly<TooltipProps>, refs: ToRefs<TooltipProps>, style: TooltipStyle, status: TooltipStatus, position: TooltipPosition, emits?: ConstrEmit<TooltipEmits> | undefined);
    /**
     * Element display management.
     *
     * Управление отображением элемента.
     * @param open display status/ статус отображения
     * @param flesh immediate display without delay/ мгновенное отображение без задержки
     */
    readonly toggle: (open: boolean, flesh?: boolean) => Promise<void>;
    /**
     * Cancel hiding the element.
     *
     * Отмена скрытия элемента.
     */
    noHide(): void;
    /**
     * Start listening to scroll events.
     *
     * Запуск прослушивания событий скролла.
     */
    eventStop(): void;
    /**
     * Scroll event management.
     *
     * Управление событиями скролла.
     */
    protected readonly onScroll: () => Promise<void>;
}
