import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClassObject, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { LabelInclude } from '../../classes/LabelInclude';
import { FieldCounterInclude } from '../FieldCounter';
import { ProgressInclude } from '../Progress';
import { SkeletonInclude } from '../Skeleton';
import { FieldLabelComponents, FieldLabelEmits, FieldLabelSlots } from './types';
import { FieldLabelProps } from './props';
/**
 * FieldLabel
 */
export declare class FieldLabel {
    protected readonly props: FieldLabelProps;
    protected readonly refs: ToRefs<FieldLabelProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<FieldLabelComponents, FieldLabelProps> | undefined;
    protected readonly slots?: FieldLabelSlots | undefined;
    protected readonly emits?: ConstrEmit<FieldLabelEmits> | undefined;
    /** Label include/ Подключение метки */
    readonly label: LabelInclude;
    /** Field counter include/ Подключение счетчика поля */
    readonly fieldCounter: FieldCounterInclude<FieldLabelProps>;
    /** Progress include/ Подключение прогресса */
    readonly progress: ProgressInclude;
    /** Skeleton include/ Подключение скелетона */
    readonly skeleton: SkeletonInclude;
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
     * @param constructors.FieldCounterConstructor class for working with field counter/ класс для работы со счетчиком поля
     * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
     * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
     * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
     */
    constructor(props: FieldLabelProps, refs: ToRefs<FieldLabelProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<FieldLabelComponents, FieldLabelProps> | undefined, slots?: FieldLabelSlots | undefined, emits?: ConstrEmit<FieldLabelEmits> | undefined, constructors?: {
        FieldCounterConstructor?: typeof FieldCounterInclude;
        LabelConstructor?: typeof LabelInclude;
        ProgressConstructor?: typeof ProgressInclude;
        SkeletonConstructor?: typeof SkeletonInclude;
    });
    /**
     * Values for the class.
     *
     * Значения для класса.
     * Возвращает объект классов, включающий классы скелетона, если он активен.
     */
    readonly classes: ComputedRef<ConstrClassObject>;
}
