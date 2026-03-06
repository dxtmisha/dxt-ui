import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { DummyComponents, DummyEmits, DummySlots } from './types';
import { DummyProps } from './props';
/**
 * Dummy
 */
export declare class Dummy {
    protected readonly props: DummyProps;
    protected readonly refs: ToRefs<DummyProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<DummyComponents, DummyProps> | undefined;
    protected readonly slots?: DummySlots | undefined;
    protected readonly emits?: ConstrEmit<DummyEmits> | undefined;
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
    constructor(props: DummyProps, refs: ToRefs<DummyProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<DummyComponents, DummyProps> | undefined, slots?: DummySlots | undefined, emits?: ConstrEmit<DummyEmits> | undefined);
}
