import { ConstrEmit, EventItem } from '@dxtmisha/functional';
import { MotionTransformElement } from './MotionTransformElement';
import { MotionTransformState } from './MotionTransformState';
import { MotionTransformEmitOptions } from './basicTypes';
import { MotionTransformEmits } from './types';
import { MotionTransformProps } from './props';
/**
 * Class for event management.
 *
 * Класс для управления событиями.
 */
export declare class MotionTransformEvent {
    protected readonly props: MotionTransformProps;
    protected readonly element: MotionTransformElement;
    protected readonly state: MotionTransformState;
    protected readonly emits?: ConstrEmit<MotionTransformEmits> | undefined;
    protected readonly item: EventItem<HTMLElement, PointerEvent>;
    /**
     * Constructor.
     *
     * Конструктор.
     * @param props input data/ входные данные
     * @param element class object for managing an element/ объект класса для управления элементом
     * @param state class object for status management/ объект класса для управления статусом
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: MotionTransformProps, element: MotionTransformElement, state: MotionTransformState, emits?: ConstrEmit<MotionTransformEmits> | undefined);
    /**
     * Stopping event listening.
     *
     * Остановка прослушивания события.
     */
    stop(): this;
    /**
     * Click event on the title.
     *
     * Событие клика на заголовок.
     * @param event event object/ объект события
     */
    readonly onClick: (event: Event) => void;
    /**
     * End of animation event.
     *
     * Событие окончания анимации.
     * @param event event object/ объект события
     */
    readonly onTransitionend: (event: TransitionEvent) => void;
    /**
     * Event call.
     *
     * Вызов события.
     * @param event event object/ объект события
     * @param type event type/ тип события
     */
    emit(event: Event | undefined, type: MotionTransformEmitOptions['type']): void;
    protected listener: (event: PointerEvent) => void;
}
