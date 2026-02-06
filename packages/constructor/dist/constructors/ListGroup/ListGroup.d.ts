import { Ref, ToRefs } from 'vue';
import { ConstrBind, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { ListGroupOpen } from './ListGroupOpen';
import { MotionTransformProps } from '../MotionTransform';
import { ListGroupComponents, ListGroupEmits, ListGroupSlots } from './types';
import { ListGroupProps } from './props';
/**
 * ListGroup
 */
export declare class ListGroup {
    protected readonly props: ListGroupProps;
    protected readonly refs: ToRefs<ListGroupProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ListGroupComponents, ListGroupProps> | undefined;
    protected readonly slots?: ListGroupSlots | undefined;
    protected readonly emits?: ConstrEmit<ListGroupEmits> | undefined;
    readonly open: ListGroupOpen<ListGroupProps>;
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
     * @param ListGroupOpenConstructor class for working with list group open/ класс для работы с открытием группы списка
     */
    constructor(props: ListGroupProps, refs: ToRefs<ListGroupProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ListGroupComponents, ListGroupProps> | undefined, slots?: ListGroupSlots | undefined, emits?: ConstrEmit<ListGroupEmits> | undefined, ListGroupOpenConstructor?: typeof ListGroupOpen);
    /**
     * Returns the property for the transformation component.
     *
     * Возвращает свойство для компонента трансформации.
     */
    readonly transformBinds: () => ConstrBind<MotionTransformProps>;
}
