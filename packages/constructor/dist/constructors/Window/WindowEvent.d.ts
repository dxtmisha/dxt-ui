import { EventItem } from '@dxtmisha/functional';
import { WindowStatus } from './WindowStatus';
import { WindowClient } from './WindowClient';
import { WindowFlash } from './WindowFlash';
import { WindowOpen } from './WindowOpen';
import { WindowVerification } from './WindowVerification';
import { WindowProps } from './props';
import { TabIndexInclude } from '../../classes/TabIndexInclude.ts';
/**
 * A class for working with events.
 *
 * Класс для работы с событиями.
 */
export declare class WindowEvent {
    protected readonly props: WindowProps;
    protected readonly tabIndex: TabIndexInclude;
    protected readonly status: WindowStatus;
    protected readonly client: WindowClient;
    protected readonly flash: WindowFlash;
    protected readonly open: WindowOpen;
    protected readonly verification: WindowVerification;
    protected readonly event: EventItem<HTMLBodyElement, MouseEvent>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param tabIndex class object for working with tab indices/ объект класса для работы с табуляцией
     * @param status object for working with statuses/ объект для работы со статусами
     * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
     * @param flash class object for working with fast window opening/ объект класса для работы с быстрым открытием окна
     * @param open the class object for working with the status of closing or opening the window/ объект класса для работы со статусом закрытия или открытия окна
     * @param verification an object for working with the check for changing the status of opening or closing/ объект для работы с проверкой изменения статуса открытия или закрытия
     */
    constructor(props: WindowProps, tabIndex: TabIndexInclude, status: WindowStatus, client: WindowClient, flash: WindowFlash, open: WindowOpen, verification: WindowVerification);
    /**
     * Events of pressing a control element.
     *
     * События нажатия на элемент управления.
     * @param event event object/ объект события
     */
    readonly onClick: (event: (MouseEvent & TouchEvent) | KeyboardEvent) => Promise<void>;
    /**
     * Events of pressing a key.
     *
     * События нажатия на клавишу.
     * @param event event object/ объект события
     */
    readonly onKeydown: (event: (MouseEvent & TouchEvent) | KeyboardEvent) => Promise<void>;
    /**
     * Events of pressing the right mouse button on a control element.
     *
     * События нажатия на правую кнопку мыши на элемент управления.
     * @param event event object/ объект события
     */
    readonly onContextmenu: (event: (MouseEvent & TouchEvent) | KeyboardEvent) => Promise<void>;
    /**
     * Event of animation end when closing the window.
     *
     * Событие окончания анимации при закрытии окна.
     */
    readonly onTransition: () => void;
    /**
     * Starts listening to global events.
     *
     * Стартует прослушивание глобальных событий.
     */
    start(): this;
    /**
     * Stop the global event.
     *
     * Остановить глобальное событие.
     */
    stop(): this;
    /**
     * Changes the event listening status depending on the window's open status.
     *
     * Изменяет статус прослушивания события в зависимости от статуса открытия окна.
     */
    toggle(): this;
    /**
     * Event activation.
     *
     * Активация события.
     * @param event event object/ объект события
     */
    protected on(event: MouseEvent & TouchEvent): Promise<void>;
    /**
     * Callback of the event when pressing any area for checking and changing the opening state.
     *
     * Callback события при нажатии на любую область для проверки и изменения состояния открытия.
     * @param event event instance/ экземпляр события
     */
    protected readonly onGlobal: (event?: Event) => Promise<void>;
}
