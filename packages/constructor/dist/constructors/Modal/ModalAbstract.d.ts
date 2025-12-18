import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp, RefOrNormal } from '@dxtmisha/functional';
import { WindowInclude } from '../Window';
import { BarsInclude } from '../Bars';
import { ActionsInclude } from '../Actions';
import { ModalComponents, ModalEmits, ModalSlots } from './types';
import { ModalProps } from './props';
/**
 * ModalAbstract
 */
export declare abstract class ModalAbstract {
    protected readonly props: ModalProps;
    protected readonly refs: ToRefs<ModalProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ModalComponents, ModalProps> | undefined;
    protected readonly slots?: ModalSlots | undefined;
    protected readonly emits?: ConstrEmit<ModalEmits> | undefined;
    protected readonly extraWindow?: RefOrNormal<any> | undefined;
    protected readonly extraBars?: RefOrNormal<any> | undefined;
    protected readonly extraActions?: RefOrNormal<any> | undefined;
    readonly bars: BarsInclude;
    readonly actions: ActionsInclude;
    readonly window: WindowInclude;
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
     * @param extraWindow additional parameters for WindowInclude/ дополнительные параметры для WindowInclude
     * @param extraBars additional parameters for BarsInclude/ дополнительные параметры для BarsInclude
     * @param extraActions additional parameters for ActionsInclude/ дополнительные параметры для ActionsInclude
     */
    protected constructor(props: ModalProps, refs: ToRefs<ModalProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ModalComponents, ModalProps> | undefined, slots?: ModalSlots | undefined, emits?: ConstrEmit<ModalEmits> | undefined, extraWindow?: RefOrNormal<any> | undefined, extraBars?: RefOrNormal<any> | undefined, extraActions?: RefOrNormal<any> | undefined);
}
