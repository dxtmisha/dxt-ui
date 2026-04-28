import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClassObject, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { ModelInclude } from '../../classes/ModelInclude';
import { MotionAxisElement } from './MotionAxisElement';
import { MotionAxisGo } from './MotionAxisGo';
import { MotionAxisPrevious } from './MotionAxisPrevious';
import { MotionAxisSelected } from './MotionAxisSelected';
import { MotionAxisSlides } from './MotionAxisSlides';
import { MotionAxisStatus } from './MotionAxisStatus';
import { MotionAxisStyles } from './MotionAxisStyles';
import { MotionAxisComponents, MotionAxisEmits, MotionAxisSlots } from './types';
import { MotionAxisProps } from './props';
/**
 * MotionAxis
 */
export declare class MotionAxis {
    protected readonly props: MotionAxisProps;
    protected readonly refs: ToRefs<MotionAxisProps>;
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<MotionAxisComponents, MotionAxisProps> | undefined;
    protected readonly slots?: MotionAxisSlots | undefined;
    protected readonly emits?: ConstrEmit<MotionAxisEmits> | undefined;
    readonly elementItem: MotionAxisElement;
    readonly go: MotionAxisGo;
    readonly previous: MotionAxisPrevious;
    readonly selected: MotionAxisSelected;
    readonly slides: MotionAxisSlides;
    readonly status: MotionAxisStatus;
    readonly styles: MotionAxisStyles;
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
     * @param constructors object with classes/ объект с классами
     * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
     * @param constructors.MotionAxisElementConstructor class for working with elements/ класс для работы с элементами
     * @param constructors.MotionAxisGoConstructor class for working with go/ класс для работы с переходом
     * @param constructors.MotionAxisPreviousConstructor class for working with previous/ класс для работы с предыдущим
     * @param constructors.MotionAxisSelectedConstructor class for working with selected/ класс для работы с выбранным
     * @param constructors.MotionAxisSlidesConstructor class for working with slides/ класс для работы со слайдами
     * @param constructors.MotionAxisStatusConstructor class for working with status/ класс для работы со статусом
     * @param constructors.MotionAxisStylesConstructor class for working with styles/ класс для работы со стилями
     */
    constructor(props: MotionAxisProps, refs: ToRefs<MotionAxisProps>, element: Ref<HTMLDivElement | undefined>, classDesign: string, className: string, components?: DesignComp<MotionAxisComponents, MotionAxisProps> | undefined, slots?: MotionAxisSlots | undefined, emits?: ConstrEmit<MotionAxisEmits> | undefined, constructors?: {
        ModelIncludeConstructor?: typeof ModelInclude;
        MotionAxisElementConstructor?: typeof MotionAxisElement;
        MotionAxisGoConstructor?: typeof MotionAxisGo;
        MotionAxisPreviousConstructor?: typeof MotionAxisPrevious;
        MotionAxisSelectedConstructor?: typeof MotionAxisSelected;
        MotionAxisSlidesConstructor?: typeof MotionAxisSlides;
        MotionAxisStatusConstructor?: typeof MotionAxisStatus;
        MotionAxisStylesConstructor?: typeof MotionAxisStyles;
    });
    /**
     * Returns a list of available values for the style/
     * Возвращает список доступных значений для стиля
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    isInDom(key: string): boolean;
    isInDomSlide(key: string): boolean;
    /**
     * Updating data based on its status.
     *
     * Обновление данных по его статусу.
     */
    protected readonly updateSelected: () => void;
}
