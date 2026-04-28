import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { GridItemComponents, GridItemEmits, GridItemSlots } from './types';
import { GridItemProps } from './props';
/**
 * GridItem
 */
export declare class GridItem {
    protected readonly props: GridItemProps;
    protected readonly refs: ToRefs<GridItemProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<GridItemComponents, GridItemProps> | undefined;
    protected readonly slots?: GridItemSlots | undefined;
    protected readonly emits?: ConstrEmit<GridItemEmits> | undefined;
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
    constructor(props: GridItemProps, refs: ToRefs<GridItemProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<GridItemComponents, GridItemProps> | undefined, slots?: GridItemSlots | undefined, emits?: ConstrEmit<GridItemEmits> | undefined);
}
