import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { PageAreaComponents, PageAreaEmits, PageAreaSlots } from './types';
import { PageAreaProps } from './props';
/**
 * PageArea
 *
 * Класс для работы с областью страницы.
 */
export declare class PageArea {
    protected readonly props: PageAreaProps;
    protected readonly refs: ToRefs<PageAreaProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<PageAreaComponents, PageAreaProps> | undefined;
    protected readonly slots?: PageAreaSlots | undefined;
    protected readonly emits?: ConstrEmit<PageAreaEmits> | undefined;
    /**
     * Constructor
     *
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: PageAreaProps, refs: ToRefs<PageAreaProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<PageAreaComponents, PageAreaProps> | undefined, slots?: PageAreaSlots | undefined, emits?: ConstrEmit<PageAreaEmits> | undefined);
    /** Area value / Значение области */
    readonly area: ComputedRef<string | undefined>;
}
