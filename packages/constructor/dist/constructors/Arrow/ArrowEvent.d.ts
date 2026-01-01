import { Ref, ToRefs } from 'vue';
import { EventItem, EventRef } from '@dxtmisha/functional';
import { ArrowElementTarget } from './ArrowElementTarget';
import { ArrowPosition } from './ArrowPosition';
import { ArrowParent } from './ArrowParent';
import { ArrowProps } from './props';
/**
 * Class for managing arrow events.
 *
 * Класс для управления событиями стрелки.
 */
export declare class ArrowEvent {
    protected readonly props: ArrowProps;
    protected readonly refs: ToRefs<ArrowProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly elementTarget: ArrowElementTarget;
    protected readonly parent: ArrowParent;
    protected readonly position: ArrowPosition;
    protected eventItem?: EventRef<HTMLElement, any>;
    protected eventTarget?: EventRef<HTMLElement, any>;
    protected eventBody?: EventItem<any, any>;
    /**
     * Constructor
     * @param props input properties / входные свойства
     * @param refs input properties as refs / входные свойства как ссылки
     * @param element arrow element / элемент стрелки
     * @param elementTarget target element / целевой элемент
     * @param parent parent object / объект родителя
     * @param position position object / объект позиции
     */
    constructor(props: ArrowProps, refs: ToRefs<ArrowProps>, element: Ref<HTMLElement | undefined>, elementTarget: ArrowElementTarget, parent: ArrowParent, position: ArrowPosition);
    /**
     * Update all reactive elements.
     *
     * Обновить все реактивные элементы.
     */
    readonly update: () => void;
    /**
     * Start events.
     *
     * Запустить события.
     */
    protected startEvents(): this;
    /**
     * Stop events.
     *
     * Остановить события.
     */
    protected stopEvents(): this;
    /**
     * Initialize events.
     *
     * Инициализировать события.
     */
    protected initEvents(): this;
    /**
     * Create events.
     *
     * Создать события.
     */
    protected makeEvents: () => void;
}
