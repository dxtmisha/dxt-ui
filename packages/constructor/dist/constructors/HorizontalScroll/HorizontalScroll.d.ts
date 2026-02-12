import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { HorizontalScrollComponents, HorizontalScrollEmits, HorizontalScrollSlots } from './types';
import { HorizontalScrollProps } from './props';
import { HorizontalScrollControlItem } from './basicTypes.ts';
/**
 * HorizontalScroll
 */
export declare class HorizontalScroll {
    protected readonly props: HorizontalScrollProps;
    protected readonly refs: ToRefs<HorizontalScrollProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<HorizontalScrollComponents, HorizontalScrollProps> | undefined;
    protected readonly slots?: HorizontalScrollSlots | undefined;
    protected readonly emits?: ConstrEmit<HorizontalScrollEmits> | undefined;
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
    constructor(props: HorizontalScrollProps, refs: ToRefs<HorizontalScrollProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<HorizontalScrollComponents, HorizontalScrollProps> | undefined, slots?: HorizontalScrollSlots | undefined, emits?: ConstrEmit<HorizontalScrollEmits> | undefined);
    /** Returns data for managing slot data/ Возвращает данные для управления данными слотами */
    readonly slotData: ComputedRef<HorizontalScrollControlItem>;
}
