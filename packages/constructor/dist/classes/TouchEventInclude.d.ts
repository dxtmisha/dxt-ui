import { Ref } from 'vue';
import { TouchEventCallback, TouchEventClient } from '../types/touchEventTypes';
/**
 * Class for handling touch and mouse events with gesture detection.
 *
 * Класс для обработки событий касания и мыши с определением жестов.
 */
export declare class TouchEventInclude {
    private readonly start?;
    private readonly move?;
    private readonly end?;
    private readonly element?;
    /**
     * Current touch point
     *
     * Текущая точка касания
     */
    readonly touche: Ref<Touch | undefined, Touch | undefined>;
    /**
     * Touchpoint during move
     *
     * Точка касания во время движения
     */
    readonly toucheMove: Ref<Touch | undefined, Touch | undefined>;
    /**
     * Current mouse position
     *
     * Текущая позиция мыши
     */
    readonly mouse: Ref<TouchEventClient | undefined, TouchEventClient | undefined>;
    /**
     * Mouse position during move
     *
     * Позиция мыши во время движения
     */
    readonly mouseMove: Ref<TouchEventClient | undefined, TouchEventClient | undefined>;
    /**
     * Constructor
     * @param start callback on touch/mouse start/ колбэк при начале касания/клика
     * @param move callback on touch/mouse move/ колбэк при движении
     * @param end callback on touch/mouse end/ колбэк при завершении
     * @param element optional element reference/ необязательная ссылка на элемент
     */
    constructor(start?: ((mouse: TouchEventClient, touche?: Touch) => void) | undefined, move?: TouchEventCallback | undefined, end?: TouchEventCallback | undefined, element?: Ref<HTMLElement | undefined> | undefined);
    /**
     * Touch event handlers
     *
     * Обработчики событий касания
     */
    readonly onTouch: {
        onTouchstart: (event: TouchEvent) => void;
        onTouchend: (event: TouchEvent) => void;
        onTouchcancel: (event: TouchEvent) => void;
        onTouchmove: (event: TouchEvent) => void;
    };
    /**
     * Mouse event handlers
     *
     * Обработчики событий мыши
     */
    readonly onMouse: {
        onMousedown: (event: MouseEvent) => void;
        onMouseup: (event: MouseEvent) => void;
        onMousemove: (event: MouseEvent) => void;
    };
    /**
     * Gets the target element for touch events.
     *
     * Получает целевой элемент для событий касания.
     * @param target event target element/ целевой элемент события
     */
    private getElement;
    /**
     * Determines horizontal direction type from client X coordinate.
     *
     * Определяет тип горизонтального направления из координаты X.
     * @param clientX horizontal coordinate/ горизонтальная координата
     */
    private getTypeX;
    /**
     * Determines vertical direction type from client Y coordinate.
     *
     * Определяет тип вертикального направления из координаты Y.
     * @param clientY vertical coordinate/ вертикальная координата
     */
    private getTypeY;
    /**
     * Executes callback with calculated movement data.
     *
     * Выполняет колбэк с рассчитанными данными движения.
     * @param callback callback function/ функция обратного вызова
     */
    private callback;
    /**
     * Resets touch/mouse state and CSS properties after interaction ends.
     *
     * Сбрасывает состояние касания/мыши и CSS свойства после завершения взаимодействия.
     * @param target selected item/ выбранный элемент
     */
    private reset;
    /**
     * Resets all touch/mouse state and removes CSS custom properties.
     *
     * Сбрасывает все состояния касания/мыши и удаляет CSS кастомные свойства.
     * @param elementValue target element/ целевой элемент
     */
    private resetData;
    /**
     * Updates initial touch/mouse position and sets CSS custom properties.
     *
     * Обновляет начальную позицию касания/мыши и устанавливает CSS кастомные свойства.
     * @param target selected item/ выбранный элемент
     */
    private update;
    /**
     * Updates touch/mouse position during movement and sets CSS custom properties.
     *
     * Обновляет позицию касания/мыши во время движения и устанавливает CSS кастомные свойства.
     * @param target selected item/ выбранный элемент
     */
    private updateMove;
}
