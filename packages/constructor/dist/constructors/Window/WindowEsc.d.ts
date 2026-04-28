import { Ref } from 'vue';
import { EventItem, RefOrNormal } from '@dxtmisha/functional';
/**
 * Class for handling Escape key press to close windows.
 *
 * Класс для обработки нажатия клавиши Escape для закрытия окон.
 */
export declare class WindowEsc {
    protected readonly open: Ref<boolean>;
    protected readonly on?: (() => void) | undefined;
    protected readonly active: RefOrNormal<boolean | (() => boolean)>;
    /** Event handler instance/ Экземпляр обработчика событий */
    protected event?: EventItem<HTMLElement, any>;
    /**
     * Constructor
     * @param open Reference to the open state/ Ссылка на состояние открытия
     * @param on Optional callback function when Escape is pressed/ Необязательная функция обратного вызова при нажатии Escape
     * @param active Reference to the active state/ Ссылка на состояние активности
     */
    constructor(open: Ref<boolean>, on?: (() => void) | undefined, active?: RefOrNormal<boolean | (() => boolean)>);
    /**
     * Start listening for the Escape key press.
     *
     * Начать прослушивание нажатия клавиши Escape.
     */
    start(): this;
    /**
     * Stop listening for the Escape key press.
     *
     * Остановить прослушивание нажатия клавиши Escape.
     */
    stop(): this;
    /**
     * Check if the pressed key is Escape.
     *
     * Проверяет, является ли нажатая клавиша Escape.
     * @param event Keyboard event/ Событие клавиатуры
     */
    protected isEsc(event: KeyboardEvent): boolean;
    /**
     * Event listener for keyboard events.
     *
     * Обработчик событий клавиатуры.
     */
    protected readonly listener: (event: KeyboardEvent) => void;
    /**
     * Create and initialize the event handler.
     *
     * Создать и инициализировать обработчик событий.
     */
    protected make(): void;
}
