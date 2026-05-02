import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude';
import { ClientOnlyComponents, ClientOnlyEmits, ClientOnlySlots } from './types';
import { ClientOnlyProps } from './props';
/**
 * ClientOnly
 */
export declare class ClientOnly {
    protected readonly props: ClientOnlyProps;
    protected readonly refs: ToRefs<ClientOnlyProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ClientOnlyComponents, ClientOnlyProps> | undefined;
    protected readonly slots?: ClientOnlySlots | undefined;
    protected readonly emits?: ConstrEmit<ClientOnlyEmits> | undefined;
    readonly clientOnly: ClientOnlyInclude;
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
    constructor(props: ClientOnlyProps, refs: ToRefs<ClientOnlyProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ClientOnlyComponents, ClientOnlyProps> | undefined, slots?: ClientOnlySlots | undefined, emits?: ConstrEmit<ClientOnlyEmits> | undefined);
}
