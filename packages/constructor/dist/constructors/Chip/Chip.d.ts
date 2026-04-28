import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { ChipComponents, ChipEmits, ChipSlots } from './types';
import { ChipPropsBasic } from './props';
/**
 * Chip
 */
export declare class Chip {
    protected readonly props: ChipPropsBasic;
    protected readonly refs: ToRefs<ChipPropsBasic>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ChipComponents, ChipPropsBasic> | undefined;
    protected readonly slots?: ChipSlots | undefined;
    protected readonly emits?: ConstrEmit<ChipEmits> | undefined;
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
    constructor(props: ChipPropsBasic, refs: ToRefs<ChipPropsBasic>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ChipComponents, ChipPropsBasic> | undefined, slots?: ChipSlots | undefined, emits?: ConstrEmit<ChipEmits> | undefined);
}
