import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { IconInclude, IconValue, IconPropsBasic } from '../Icon';
import { LabelInclude } from '../../classes/LabelInclude';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { TextInclude } from '../../classes/TextInclude';
import { WindowClassesInclude } from '../Window';
import { ModalAbstract } from '../Modal/ModalAbstract';
import { DialogComponents, DialogEmits, DialogSlots } from './types';
import { DialogProps } from './props';
import { ImagePropsBasic } from '../Image';
/**
 * Dialog
 */
export declare class Dialog extends ModalAbstract {
    protected readonly props: DialogProps;
    protected readonly refs: ToRefs<DialogProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<DialogComponents, DialogProps> | undefined;
    protected readonly slots?: DialogSlots | undefined;
    protected readonly emits?: ConstrEmit<DialogEmits> | undefined;
    readonly icon: IconInclude;
    readonly label: LabelInclude;
    readonly description: DescriptionInclude;
    readonly windowClasses: WindowClassesInclude;
    readonly text: TextInclude;
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
    constructor(props: DialogProps, refs: ToRefs<DialogProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<DialogComponents, DialogProps> | undefined, slots?: DialogSlots | undefined, emits?: ConstrEmit<DialogEmits> | undefined);
    /**
     * Returns the icon for display.
     *
     * Возвращает иконку для отображения.
     */
    protected readonly iconValue: ComputedRef< IconValue<IconPropsBasic<ImagePropsBasic>> | undefined>;
}
