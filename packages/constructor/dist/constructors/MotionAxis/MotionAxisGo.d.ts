import { Ref, ToRefs } from 'vue';
import { MotionAxisSlides } from './MotionAxisSlides';
import { MotionAxisStatus } from './MotionAxisStatus';
import { MotionAxisSelectedValue } from './basicTypes';
import { MotionAxisProps } from './props';
/**
 * Class for motion control.
 *
 * Класс для управления движением.
 */
export declare class MotionAxisGo {
    protected readonly props: Readonly<MotionAxisProps>;
    protected readonly refs: ToRefs<MotionAxisProps>;
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly slides: MotionAxisSlides;
    protected readonly status: MotionAxisStatus;
    readonly axis: Ref<"x" | "y" | "z" | undefined, "x" | "y" | "z" | undefined>;
    readonly direction: Ref<"next" | "auto" | "back" | undefined, "next" | "auto" | "back" | undefined>;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
     * @param element window element / элемент окна
     * @param slides list of slides / список слайдов
     * @param status class object for managing the active element / объект класса для управления активным элементом
     */
    constructor(props: Readonly<MotionAxisProps>, refs: ToRefs<MotionAxisProps>, element: Ref<HTMLDivElement | undefined>, slides: MotionAxisSlides, status: MotionAxisStatus);
    /**
     * Previous slide.
     *
     * Перемещение слайда на один шаг назад.
     */
    readonly back: () => void;
    /**
     * Next slide.
     *
     * Перемещение слайда на один шаг вперед.
     */
    readonly next: () => void;
    /**
     * Moving the slide to the selected slide with automatic selection of animation direction.
     *
     * Перемещение слайда на выбранный слайд с автоматическим выбором направления анимации.
     * @param selected selected item / выбранный элемент
     */
    readonly to: (selected: MotionAxisSelectedValue) => void;
    /**
     * Move to the upper slide.
     *
     * Переместите на верхний слайд.
     * @param selected selected item / выбранный элемент
     */
    readonly top: (selected: MotionAxisProps["selected"]) => void;
    /**
     * Move to the right slide.
     *
     * Переместите на правый слайд.
     * @param selected selected item / выбранный элемент
     */
    readonly right: (selected: MotionAxisProps["selected"]) => void;
    /**
     * Move to the lower slide.
     *
     * Переместите на нижний слайд.
     * @param selected selected item / выбранный элемент
     */
    readonly bottom: (selected: MotionAxisProps["selected"]) => void;
    /**
     * Move to the left slide.
     *
     * Переместите на левый слайд.
     * @param selected selected item / выбранный элемент
     */
    readonly left: (selected: MotionAxisProps["selected"]) => void;
    /**
     * Move to the back slide.
     *
     * Переместите на задний слайд.
     * @param selected selected item / выбранный элемент
     */
    readonly down: (selected: MotionAxisProps["selected"]) => void;
    /**
     * Move to the front slide.
     *
     * Переместите на передний слайд.
     * @param selected selected item / выбранный элемент
     */
    readonly up: (selected: MotionAxisProps["selected"]) => void;
    /**
     * Changes the axis.
     *
     * Изменяет ось.
     * @param axis axis name / название оси
     */
    readonly setAxis: (axis: MotionAxisProps["axis"]) => void;
    /**
     * Changes the direction.
     *
     * Изменяет направление.
     * @param direction direction name / название направления
     */
    readonly setDirection: (direction: MotionAxisProps["direction"]) => void;
}
