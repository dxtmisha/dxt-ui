import { MotionTransformElement } from './MotionTransformElement';
/**
 * Class for managing size calculation.
 *
 * Класс для управления вычислением размера.
 */
export declare class MotionTransformSize {
    protected element: MotionTransformElement;
    /** Top offset for transform/ Верхнее смещение для трансформации */
    top: string | null;
    /** Left offset for transform/ Левое смещение для трансформации */
    left: string | null;
    /** Head width value/ Ширина шапки */
    headWidth: string | null;
    /** Total height value/ Общая высота */
    height: string | null;
    /** Scale factor/ Коэффициент масштаба */
    scale: string | null;
    /** Context width/ Ширина контекста */
    contextWidth: string | null;
    /** Context height/ Высота контекста */
    contextHeight: string | null;
    /** Head height value/ Высота шапки */
    headHeight: string | null;
    /** Head scale factor/ Коэффициент масштаба шапки */
    headScale: string | null;
    /** Body height value/ Высота тела */
    bodyHeight: string | null;
    /**
     * Constructor
     * @param element class object for managing an element/ объект класса для управления элементом
     */
    constructor(element: MotionTransformElement);
    /**
     * Update all sizes.
     *
     * Обновить все размеры.
     */
    update(): void;
    /**
     * Restores all data to original.
     *
     * Восстанавливает все данные на изначальные.
     */
    reset(): void;
}
