import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { AreaComponents, AreaEmits, AreaSlots } from './types';
import { AreaProps } from './props';
/**
 * Area
 */
export declare class Area {
    protected readonly props: AreaProps;
    protected readonly refs: ToRefs<AreaProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<AreaComponents, AreaProps> | undefined;
    protected readonly slots?: AreaSlots | undefined;
    protected readonly emits?: ConstrEmit<AreaEmits> | undefined;
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
    constructor(props: AreaProps, refs: ToRefs<AreaProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<AreaComponents, AreaProps> | undefined, slots?: AreaSlots | undefined, emits?: ConstrEmit<AreaEmits> | undefined);
    /** The property of the current area value/ Свойство текущего значения области */
    readonly area: ComputedRef<string | undefined>;
}
