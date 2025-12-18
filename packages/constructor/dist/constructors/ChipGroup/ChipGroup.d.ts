import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp, ListDataRef, ListList, ListSelectedList } from '@dxtmisha/functional';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { ModelValueInclude } from '../../classes/ModelValueInclude';
import { ChipGroupComponents, ChipGroupEmits, ChipGroupSlots } from './types';
import { ChipGroupProps } from './props';
/**
 * ChipGroup
 */
export declare class ChipGroup {
    protected readonly props: ChipGroupProps;
    protected readonly refs: ToRefs<ChipGroupProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ChipGroupComponents, ChipGroupProps> | undefined;
    protected readonly slots?: ChipGroupSlots | undefined;
    protected readonly emits?: ConstrEmit<ChipGroupEmits> | undefined;
    readonly data: ListDataRef;
    readonly event: EventClickInclude;
    readonly model: ModelValueInclude<ListSelectedList>;
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
    constructor(props: ChipGroupProps, refs: ToRefs<ChipGroupProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ChipGroupComponents, ChipGroupProps> | undefined, slots?: ChipGroupSlots | undefined, emits?: ConstrEmit<ChipGroupEmits> | undefined);
    /**
     * Get list of items.
     *
     * Получить список элементов.
     */
    getList(): ListList;
}
