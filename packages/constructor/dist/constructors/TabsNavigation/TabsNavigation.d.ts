import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { TabsNavigationComponents, TabsNavigationEmits, TabsNavigationSlots } from './types';
import { TabsNavigationProps } from './props';
/**
 * TabsNavigation
 */
export declare class TabsNavigation {
    protected readonly props: TabsNavigationProps;
    protected readonly refs: ToRefs<TabsNavigationProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<TabsNavigationComponents, TabsNavigationProps> | undefined;
    protected readonly slots?: TabsNavigationSlots | undefined;
    protected readonly emits?: ConstrEmit<TabsNavigationEmits> | undefined;
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
    constructor(props: TabsNavigationProps, refs: ToRefs<TabsNavigationProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<TabsNavigationComponents, TabsNavigationProps> | undefined, slots?: TabsNavigationSlots | undefined, emits?: ConstrEmit<TabsNavigationEmits> | undefined);
}
