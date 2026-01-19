import { TabIndexInclude } from '../../classes/TabIndexInclude';
import { WindowStatus } from './WindowStatus';
import { WindowClient } from './WindowClient';
import { WindowHook } from './WindowHook';
import { WindowElement } from './WindowElement';
import { WindowFlash } from './WindowFlash';
import { WindowCoordinates } from './WindowCoordinates';
import { WindowPosition } from './WindowPosition';
import { WindowOrigin } from './WindowOrigin';
import { WindowEmit } from './WindowEmit';
import { WindowStyles } from './WindowStyles';
import { WindowProps } from './props';
import { Ref, ComputedRef } from 'vue';
/**
 * Class for managing the status of an open window.
 *
 * Класс для управления статусом открытого окна.
 */
export declare class WindowOpen {
    protected readonly props: WindowProps;
    protected readonly client: WindowClient;
    protected readonly hook: WindowHook;
    protected readonly element: WindowElement;
    protected readonly tabIndex: TabIndexInclude;
    protected readonly status: WindowStatus;
    protected readonly flash: WindowFlash;
    protected readonly coordinates: WindowCoordinates;
    protected readonly position: WindowPosition;
    protected readonly origin: WindowOrigin;
    protected readonly emit: WindowEmit;
    protected readonly styles: WindowStyles;
    readonly item: Ref<boolean, boolean>;
    protected readonly first: Ref<boolean, boolean>;
    protected clicks: number;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
     * @param hook object for working with hooks/ объект для работы с хуками
     * @param element an object of the class for working with elements/ объект класса для работы с элементами
     * @param tabIndex class object for working with tab indices/ объект класса для работы с табуляцией
     * @param status object for working with statuses/ объект для работы со статусами
     * @param flash class object for working with fast window opening/ объект класса для работы с быстрым открытием окна
     * @param coordinates object for working with coordinates/ объект для работы с координатами
     * @param position object for working with the position of the element/ объект для работы с положением элемента
     * @param origin the object for work is in the initial position upon opening/ объект для работы в начальной позиции при открытии
     * @param emit the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param styles an object for working with the styles of an element/ объект для работы со стилями элемента
     */
    constructor(props: WindowProps, client: WindowClient, hook: WindowHook, element: WindowElement, tabIndex: TabIndexInclude, status: WindowStatus, flash: WindowFlash, coordinates: WindowCoordinates, position: WindowPosition, origin: WindowOrigin, emit: WindowEmit, styles: WindowStyles);
    /**
     * Checks whether the element should be kept in the DOM.
     *
     * Проверяет, надо ли элемент оставить в DOM.
     */
    readonly inDom: ComputedRef<boolean>;
    /**
     * Checks if the window is open.
     *
     * Проверяет, открыто ли окно.
     */
    isClicks(): boolean;
    /**
     * Changes the current state.
     *
     * Изменяет текущее состояние.
     * @param open the value of the current state/ значение текущего состояния
     */
    readonly set: (open?: boolean) => Promise<void>;
    /**
     * Opens the window.
     *
     * Открывает окно.
     */
    readonly open: () => Promise<void>;
    /**
     * Closes the window.
     *
     * Закрывает окно.
     */
    readonly close: () => Promise<void>;
    /**
     * Switches the state, that is, opens or closes the window, depending on the value of item.
     *
     * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
     */
    readonly toggle: () => Promise<void>;
    /**
     * Close handler on animation end.
     *
     * Обработчик закрытия по окончании анимации.
     */
    closeForEvent(): void;
    /**
     * Resets all data to initial values.
     *
     * Сбрасывает все данные к начальным значениям.
     */
    reset(): this;
    /**
     * The method increases the number of clicks.
     *
     * Метод увеличивает количество кликов.
     */
    pressed(): this;
    /**
     * The method resets the number of clicks.
     *
     * Метод сбрасывает количество кликов.
     */
    resetClicks(): this;
    /**
     * The method updates the current position.
     *
     * Метод обновляет текущее положение.
     */
    watchPosition(): Promise<void>;
    /**
     * Changes values and triggers events.
     *
     * Изменяет значения и вызывает события.
     * @param open the value of the current state/ значение текущего состояния
     */
    setOpen(open: boolean): Promise<this>;
    /**
     * Changing the location of the menu window.
     *
     * Изменение расположения окна меню.
     */
    protected watchCoordinates(): this;
    /**
     * Transition to the closing state.
     *
     * Переход в состояние закрытия.
     */
    protected toClose(): void;
}
