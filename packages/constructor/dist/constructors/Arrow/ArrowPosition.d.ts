import { ArrowElement } from './ArrowElement';
import { ArrowElementTarget } from './ArrowElementTarget';
import { ArrowParent } from './ArrowParent';
import { ArrowBorder, ArrowDirection } from './basicTypes';
import { ArrowProps } from './props';
import { Ref } from 'vue';
/**
 * Class for calculating the position of the arrow element relative to the target element.
 *
 * Класс для вычисления позиции элемента стрелки относительно целевого элемента.
 */
export declare class ArrowPosition {
    protected readonly props: ArrowProps;
    protected readonly elementItem: ArrowElement;
    protected readonly elementTarget: ArrowElementTarget;
    protected readonly parent: ArrowParent;
    /** Border between item and target elements / Граница между элементами item и target */
    readonly border: Ref<ArrowBorder | undefined, ArrowBorder | undefined>;
    /** Direction of the arrow / Направление стрелки */
    readonly direction: Ref<ArrowDirection | undefined, ArrowDirection | undefined>;
    /** Shift of the arrow / Смещение стрелки */
    readonly shift: Ref<string | undefined, string | undefined>;
    /** Clip path for the arrow / Область обрезки для стрелки */
    readonly clipPath: Ref<string | undefined, string | undefined>;
    /**
     * Constructor
     * @param props input properties / входные свойства
     * @param elementItem arrow element / элемент стрелки
     * @param elementTarget target element / целевой элемент
     * @param parent parent element / родительский элемент
     */
    constructor(props: ArrowProps, elementItem: ArrowElement, elementTarget: ArrowElementTarget, parent: ArrowParent);
    /**
     * Updates the position of the arrow.
     *
     * Обновляет позицию стрелки.
     */
    readonly update: () => void;
    /**
     * Checks if the arrow is in the X direction.
     *
     * Проверяет, находится ли стрелка в направлении X.
     */
    isX(): boolean;
    /**
     * Gets the minimum value for the arrow position.
     *
     * Получает минимальное значение для позиции стрелки.
     */
    protected getMinValue(): number;
    /**
     * Initializes the border between the item and target elements.
     *
     * Инициализирует границу между элементами item и target.
     */
    protected initBorder(): ArrowBorder | undefined;
    /**
     * Initializes the direction of the arrow.
     *
     * Инициализирует направление стрелки.
     */
    protected initDirection(): ArrowDirection | undefined;
    /**
     * Initializes the shift of the arrow.
     *
     * Инициализирует смещение стрелки.
     */
    protected initShift(): string | undefined;
    /**
     * Initializes the clip path for the arrow.
     *
     * Инициализирует область обрезки для стрелки.
     */
    protected initClipPath(): string | undefined;
}
