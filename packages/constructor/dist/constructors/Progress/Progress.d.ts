import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClassObject, ConstrEmit, ConstrStyles, DesignComp } from '@dxtmisha/functional';
import { ProgressComponents, ProgressEmits, ProgressSlots } from './types';
import { ProgressProps } from './props';
/**
 * Base class for working with the loader.
 *
 * Базовый класс для работы с загрузчиком.
 */
export declare class Progress {
    protected readonly props: ProgressProps;
    protected readonly refs: ToRefs<ProgressProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ProgressComponents, ProgressProps> | undefined;
    protected readonly slots?: ProgressSlots | undefined;
    protected readonly emits?: ConstrEmit<ProgressEmits> | undefined;
    protected timeout?: any;
    readonly hide: Ref<boolean, boolean>;
    readonly visible: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: ProgressProps, refs: ToRefs<ProgressProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ProgressComponents, ProgressProps> | undefined, slots?: ProgressSlots | undefined, emits?: ConstrEmit<ProgressEmits> | undefined);
    /**
     * Returns the tag type for the element.
     *
     * Возвращает тип тега для элемента.
     */
    readonly tag: ComputedRef<string>;
    /**
     * Returns values.
     *
     * Возвращает значения.
     */
    readonly value: ComputedRef<number>;
    /**
     * Returns values in percentages.
     *
     * Возвращает значения в процентах.
     */
    readonly valueInPercent: ComputedRef<string | null>;
    /**
     * Values for the class.
     *
     * Значения для класса.
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    /**
     * Returns the property for style.
     *
     * Возвращает свойство для стиля.
     */
    readonly styles: ComputedRef<ConstrStyles>;
    /**
     * Monitors the animation event for hiding the element.
     *
     * Следит за событием анимации для скрытия элемента.
     * @param animationName A string containing the value of the animation-name that generated the animation/
     * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
     */
    readonly onAnimation: ({ animationName }: AnimationEvent) => void;
    /**
     * Checks if there are any values.
     *
     * Проверяет, есть ли значения.
     */
    isValue(): this is {
        props: {
            value: number;
        };
    };
    /**
     * Returns the maximum allowable value.
     *
     * Возвращает максимально допустимое значение.
     */
    getMax(): number;
    /**
     * The mode is triggered when the visible property changes to change the output status of the element.
     *
     * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
     */
    protected readonly switch: () => void;
    /**
     * Updates dependent data when the visible property changes.
     *
     * Обновляет зависимые данные при изменении свойства visible.
     */
    protected update(): this;
    /**
     * Resets values to their initial state.
     *
     * Сбрасывает значения до начального положения.
     */
    protected reset(): this;
}
