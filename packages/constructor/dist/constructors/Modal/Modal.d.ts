import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { ModalAbstract } from './ModalAbstract';
import { ModalComponents, ModalEmits, ModalSlots } from './types';
import { ModalProps } from './props';
/**
 * Modal
 */
export declare class Modal extends ModalAbstract {
    protected readonly props: ModalProps;
    protected readonly refs: ToRefs<ModalProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ModalComponents, ModalProps> | undefined;
    protected readonly slots?: ModalSlots | undefined;
    protected readonly emits?: ConstrEmit<ModalEmits> | undefined;
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
    constructor(props: ModalProps, refs: ToRefs<ModalProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ModalComponents, ModalProps> | undefined, slots?: ModalSlots | undefined, emits?: ConstrEmit<ModalEmits> | undefined);
}
