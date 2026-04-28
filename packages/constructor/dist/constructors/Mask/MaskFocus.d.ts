import { MaskBuffer } from './MaskBuffer';
/**
 * Class for storing element focus state.
 *
 * Класс для хранения состояния фокуса элемента.
 */
export declare class MaskFocus {
    protected readonly buffer: MaskBuffer;
    /** Focus state flag/ Флаг состояния фокуса */
    protected value: boolean;
    /**
     * Constructor
     * @param buffer buffer helper object/ объект помощник буфера
     */
    constructor(buffer: MaskBuffer);
    /**
     * Returns current focus state.
     *
     * Возвращает текущее состояние фокуса.
     */
    is(): boolean;
    /**
     * Sets focus state to active and resets buffer.
     *
     * Устанавливает состояние фокуса активным и сбрасывает буфер.
     */
    in(): void;
    /**
     * Removes focus state and resets buffer.
     *
     * Снимает состояние фокуса и сбрасывает буфер.
     */
    out(): void;
}
