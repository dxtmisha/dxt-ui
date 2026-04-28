import { Ref } from 'vue';
import { MotionAxisSelected } from './MotionAxisSelected';
/**
 * Class for managing style properties.
 *
 * Класс для управления свойствами стилей.
 */
export declare class MotionAxisStyles {
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly className: string | string[];
    protected readonly selected: MotionAxisSelected;
    /**
     * Constructor
     * @param element window element / элемент окна
     * @param className class name / название класса
     * @param selected class object for managing the active element / объект класса для управления активным элементом
     */
    constructor(element: Ref<HTMLDivElement | undefined>, className: string | string[], selected: MotionAxisSelected);
    /**
     * Adding styles for animation.
     *
     * Добавление стилей для анимации.
     * @param slide slide title / название слайда
     */
    add(slide?: string): void;
    /**
     * Adding styles for the next element.
     *
     * Добавление стилей для следующего элемента.
     */
    addNext(): void;
    /**
     * Removing animation styles.
     *
     * Удаление стилей анимации.
     */
    remove(): void;
}
