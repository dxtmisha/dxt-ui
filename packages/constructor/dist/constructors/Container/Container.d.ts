import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { AreaInclude } from '../../classes/AreaInclude';
import { ContainerComponents, ContainerEmits, ContainerSlots } from './types';
import { ContainerProps } from './props';
/**
 * Container
 */
export declare class Container {
    protected readonly props: ContainerProps;
    protected readonly refs: ToRefs<ContainerProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ContainerComponents, ContainerProps> | undefined;
    protected readonly slots?: ContainerSlots | undefined;
    protected readonly emits?: ConstrEmit<ContainerEmits> | undefined;
    /**
     * Object for working with area value/
     * Объект для работы со значением области
     */
    readonly area: AreaInclude;
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
     * @param constructors.AreaIncludeConstructor class for working with area value/ класс для работы со значением области
     */
    constructor(props: ContainerProps, refs: ToRefs<ContainerProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ContainerComponents, ContainerProps> | undefined, slots?: ContainerSlots | undefined, emits?: ConstrEmit<ContainerEmits> | undefined, constructors?: {
        AreaIncludeConstructor?: typeof AreaInclude;
    });
}
