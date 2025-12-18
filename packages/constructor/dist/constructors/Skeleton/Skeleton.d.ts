import { ComputedRef, Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { SkeletonClassesList } from './basicTypes';
import { SkeletonComponents, SkeletonEmits, SkeletonSlots } from './types';
import { SkeletonProps } from './props';
/**
 * Skeleton
 */
export declare class Skeleton {
    protected readonly props: SkeletonProps;
    protected readonly refs: ToRefs<SkeletonProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly className: string;
    protected readonly components?: DesignComp<SkeletonComponents, SkeletonProps> | undefined;
    protected readonly slots?: SkeletonSlots | undefined;
    protected readonly emits?: ConstrEmit<SkeletonEmits> | undefined;
    protected status?: ComputedRef<boolean>;
    /**
     * Returns the list of available classes.
     *
     * Возвращает список доступных классов для текуший элемента.
     */
    readonly classes: SkeletonClassesList;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: SkeletonProps, refs: ToRefs<SkeletonProps>, element: Ref<HTMLElement | undefined>, className: string, components?: DesignComp<SkeletonComponents, SkeletonProps> | undefined, slots?: SkeletonSlots | undefined, emits?: ConstrEmit<SkeletonEmits> | undefined);
    /**
     * Checks if the loading mode is enabled.
     *
     * Проверяет, включен ли режим загрузки.
     */
    readonly isActive: ComputedRef<boolean>;
    /**
     * Returns the list of available classes.
     *
     * Возвращает список доступных классов.
     * @param className class name/ название класса
     */
    static getClassesList(className: string): SkeletonClassesList;
    /**
     * Returns a list of available classes by design name.
     *
     * Возвращает список доступных классов по названию дизайна.
     * @param design design name/ названия дизайна
     */
    static getClassesListByDesign(design: string): SkeletonClassesList;
}
