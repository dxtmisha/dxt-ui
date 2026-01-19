import { TabIndexInclude } from '../../classes/TabIndexInclude';
import { MotionTransformElement } from './MotionTransformElement';
import { MotionTransformSize } from './MotionTransformSize';
import { MotionTransformProps } from './props';
import { Ref, ComputedRef } from 'vue';
/**
 * State management class.
 *
 * Класс управления состоянием.
 */
export declare class MotionTransformState {
    protected element: MotionTransformElement;
    protected tabIndex: TabIndexInclude<HTMLDivElement>;
    protected size: MotionTransformSize;
    /** Open state flag/ Флаг состояния открытия */
    readonly open: Ref<boolean, boolean>;
    /** Temporary show state for animation/ Временный флаг показа для анимации */
    readonly show: Ref<boolean, boolean>;
    /** Teleportation state flag/ Флаг состояния телепортации */
    readonly teleport: Ref<boolean, boolean>;
    /**
     * Constructor.
     *
     * Конструктор.
     * @param props input data/ входные данные
     * @param element class object for managing an element/ объект класса для управления элементом
     * @param tabIndex class object for managing tab indices/ объект класса для управления табуляцией
     * @param size class object for managing sizes/ объект класса для управления размерами
     */
    constructor(props: MotionTransformProps, element: MotionTransformElement, tabIndex: TabIndexInclude<HTMLDivElement>, size: MotionTransformSize);
    /** Computed open flag/ Вычисляемый флаг открытия */
    readonly isOpen: ComputedRef<boolean>;
    /** Checks if the element should be shown/ Проверяет, следует ли показывать элемент */
    readonly isShow: ComputedRef<boolean>;
    /**
     * Checks if teleportation should be disabled.
     *
     * Проверяет, нужно ли отключить телепортацию.
     */
    isTeleportClose(): boolean;
    /**
     * Changes in the state of the open window.
     *
     * Изменения состояния открытого окна.
     * @param open opening status/ статус открытия
     * @param animation opening with animation/ открытие с анимацией
     */
    set(open: boolean, animation?: boolean): void;
    /**
     * Status switching.
     *
     * Переключение статуса.
     */
    toggle(): void;
    /**
     * Resets the data to the initial state.
     *
     * Сбрасывает данные в первичное состояние.
     */
    reset(): this;
    /**
     * Update of the display class.
     *
     * Обновление класса показа.
     */
    protected readonly makeShow: () => void;
    /**
     * Update of the opening class.
     *
     * Обновление класса открытия.
     */
    protected readonly makeOpen: () => void;
    /**
     * Update of the teleport class.
     *
     * Обновление класса телепорта.
     */
    protected readonly makeTeleport: () => void;
    /**
     * Calculations before animation.
     *
     * Вычисления перед анимацией.
     */
    protected calculations(): void;
    /**
     * Animation control.
     *
     * Управление анимацией.
     */
    protected toTeleport(): void;
    /**
     * Updates the list of styles.
     *
     * Обновляет список стилей.
     */
    protected make(): void;
    /**
     * Updates the list of styles for the main element.
     *
     * Обновляет список стилей для главного элемента.
     */
    protected makeMain(): void;
    /**
     * Updates the list of styles for the context element.
     *
     * Обновляет список стилей для элемента контекста.
     */
    protected makeContext(): void;
}
