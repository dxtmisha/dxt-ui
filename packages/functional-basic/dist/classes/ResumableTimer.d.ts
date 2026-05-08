import { FunctionVoid } from '../types/basicTypes';
/**
 * Class for creating a timer that can be paused and resumed.
 *
 * Класс для создания таймера, который можно приостанавливать и возобновлять.
 */
export declare class ResumableTimer {
    protected callback: FunctionVoid;
    protected delay: number;
    protected timerId?: ReturnType<typeof setTimeout>;
    protected startTime?: number;
    protected remaining?: number;
    protected completed: boolean;
    /**
     * Constructor
     * @param callback function to be called after the delay / функция, которая будет вызвана после задержки
     * @param delay delay in milliseconds / задержка в миллисекундах
     * @param blockStart if true, the timer will not start immediately / если true, таймер не запустится сразу
     */
    constructor(callback: FunctionVoid, delay?: number, blockStart?: boolean);
    /**
     * Resumes the timer if it was paused or starts it for the first time.
     *
     * Возобновляет таймер, если он был приостановлен, или запускает его впервые.
     */
    resume(): this;
    /**
     * Pauses the timer and calculates the remaining time.
     *
     * Приостанавливает таймер и вычисляет оставшееся время.
     */
    pause(): this;
    /**
     * Resets and restarts the timer with the original delay.
     *
     * Сбрасывает и перезапускает таймер с исходной задержкой.
     */
    reset(): this;
    /**
     * Completely clears the timer and resets its state.
     *
     * Полностью очищает таймер и сбрасывает его состояние.
     */
    clear(): this;
    /**
     * Returns the remaining time or the initial delay.
     *
     * Возвращает оставшееся время или начальную задержку.
     */
    protected getRemaining(): number;
    /**
     * Returns the time when the timer was started or the current time.
     *
     * Возвращает время запуска таймера или текущее время.
     */
    protected getStartTime(): number;
    /**
     * Executes the callback and marks the timer as completed.
     *
     * Выполняет колбэк и отмечает таймер как завершенный.
     */
    protected go(): this;
    /**
     * Updates the remaining time based on the elapsed time.
     *
     * Обновляет оставшееся время на основе прошедшего времени.
     */
    protected updateRemaining(): this;
    /**
     * Sets the current time as the start time.
     *
     * Устанавливает текущее время как время начала.
     */
    protected updateStartTime(): this;
    /**
     * Stops the timer and clears the timeout ID.
     *
     * Останавливает таймер и очищает идентификатор таймаута.
     */
    protected stop(): this;
}
