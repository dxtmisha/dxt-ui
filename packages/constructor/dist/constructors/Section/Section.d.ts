import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { SectionComponents, SectionEmits, SectionSlots } from './types';
import { SectionProps } from './props';
/**
 * Section
 */
export declare class Section {
    protected readonly props: SectionProps;
    protected readonly refs: ToRefs<SectionProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<SectionComponents, SectionProps> | undefined;
    protected readonly slots?: SectionSlots | undefined;
    protected readonly emits?: ConstrEmit<SectionEmits> | undefined;
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
    constructor(props: SectionProps, refs: ToRefs<SectionProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<SectionComponents, SectionProps> | undefined, slots?: SectionSlots | undefined, emits?: ConstrEmit<SectionEmits> | undefined);
}
