import { ToRefs, Ref } from 'vue';
import { EventItem } from '@dxtmisha/functional';
import { WindowElement } from './WindowElement';
import { WindowProps } from './props';
/**
 * Class for working with a static window.
 *
 * Класс для работы со статичным окном.
 */
export declare class WindowStatic {
    protected readonly props: WindowProps;
    protected readonly element: WindowElement;
    protected event?: EventItem<Window, Event>;
    readonly item: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element an object of the class for working with elements/ объект класса для работы с элементами
     */
    constructor(props: WindowProps, refs: ToRefs<WindowProps>, element: WindowElement);
    /**
     * Checks if the static mode is enabled.
     *
     * Проверяет, включен ли режим статичности.
     */
    isStaticMod(): boolean;
    /**
     * Starts the status tracking event.
     *
     * Стартует событие слежения за статусами.
     */
    start(): void;
    /**
     * Restores the data to its previous state.
     *
     * Восстанавливает данные в прежнее состояние.
     */
    stop(): void;
    /**
     * Checks if the static window is active.
     *
     * Проверяет, активно ли статичное окно.
     */
    protected isStatic(): boolean;
    /**
     * The function called when an event is triggered.
     *
     * Вызываемая функция при срабатывании события.
     */
    protected readonly listener: () => void;
    /**
     * Performs status check and activates events when turned on.
     *
     * Выполняет проверку статуса и активизирует события при включении.
     */
    protected readonly make: () => void;
}
