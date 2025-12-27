import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, ConstrStyles, DesignComp } from '@dxtmisha/functional';
import { ArrowElement } from './ArrowElement';
import { ArrowParent } from './ArrowParent';
import { ArrowComponents, ArrowEmits, ArrowSlots } from './types';
import { ArrowProps } from './props';
/**
 * Arrow
 */
export declare class Arrow {
    protected readonly props: ArrowProps;
    protected readonly refs: ToRefs<ArrowProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ArrowComponents, ArrowProps> | undefined;
    protected readonly slots?: ArrowSlots | undefined;
    protected readonly emits?: ConstrEmit<ArrowEmits> | undefined;
    readonly id: string;
    readonly idMask: string;
    readonly elementItem: ArrowElement;
    readonly parent: ArrowParent;
    readonly markUrl: string;
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
    constructor(props: ArrowProps, refs: ToRefs<ArrowProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ArrowComponents, ArrowProps> | undefined, slots?: ArrowSlots | undefined, emits?: ConstrEmit<ArrowEmits> | undefined);
    /** Styles for the component/ Стили для компонента */
    readonly styles: ComputedRef<ConstrStyles>;
}
