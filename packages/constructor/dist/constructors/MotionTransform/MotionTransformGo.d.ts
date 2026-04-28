import { MotionTransformState } from './MotionTransformState';
/**
 * Class for managing control actions.
 *
 * Класс для управления действиями управления.
 */
export declare class MotionTransformGo {
    protected readonly state: MotionTransformState;
    /**
     * Constructor.
     *
     * Конструктор.
     * @param state class object for status management/ объект класса для управления статусом
     */
    constructor(state: MotionTransformState);
    /**
     * Opens.
     *
     * Открывает.
     */
    readonly open: () => void;
    /**
     * Closes.
     *
     * Закрывает.
     */
    readonly close: () => void;
    /**
     * Switching.
     *
     * Переключение.
     */
    readonly toggle: () => void;
    /**
     * State changes.
     *
     * Изменение состояния.
     * @param open opening status/ статус открытия
     */
    readonly to: (open: boolean) => void;
}
