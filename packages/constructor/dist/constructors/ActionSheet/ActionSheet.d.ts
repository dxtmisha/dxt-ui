import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { ModalAbstract } from '../Modal/ModalAbstract';
import { TouchEventInclude } from '../../classes/TouchEventInclude';
import { ActionSheetComponents, ActionSheetEmits, ActionSheetSlots } from './types';
import { ActionSheetProps } from './props';
/**
 * ActionSheet
 */
export declare class ActionSheet extends ModalAbstract {
    protected readonly props: ActionSheetProps;
    protected readonly refs: ToRefs<ActionSheetProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ActionSheetComponents, ActionSheetProps> | undefined;
    protected readonly slots?: ActionSheetSlots | undefined;
    protected readonly emits?: ConstrEmit<ActionSheetEmits> | undefined;
    readonly touchEvent: TouchEventInclude;
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
    constructor(props: ActionSheetProps, refs: ToRefs<ActionSheetProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ActionSheetComponents, ActionSheetProps> | undefined, slots?: ActionSheetSlots | undefined, emits?: ConstrEmit<ActionSheetEmits> | undefined);
}
