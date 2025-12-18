import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClass, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { LabelInclude } from '../../classes/LabelInclude';
import { EnabledInclude } from '../../classes/EnabledInclude';
import { IconTrailingInclude } from '../Icon';
import { ProgressInclude } from '../Progress';
import { RippleInclude } from '../Ripple';
import { SkeletonInclude } from '../Skeleton';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { AriaList } from '../../types/ariaTypes';
import { ButtonComponents, ButtonEmits, ButtonSlots } from './types';
import { ButtonPropsBasic } from './props';
/**
 * Button
 */
export declare class Button {
    protected readonly props: ButtonPropsBasic;
    protected readonly refs: ToRefs<ButtonPropsBasic>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ButtonComponents, ButtonPropsBasic> | undefined;
    protected readonly slots?: ButtonSlots | undefined;
    protected readonly emits?: ConstrEmit<ButtonEmits> | undefined;
    readonly label: LabelInclude;
    readonly enabled: EnabledInclude;
    readonly icon: IconTrailingInclude;
    readonly progress: ProgressInclude;
    readonly ripple: RippleInclude;
    readonly skeleton: SkeletonInclude;
    readonly event: EventClickInclude;
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
    constructor(props: ButtonPropsBasic, refs: ToRefs<ButtonPropsBasic>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ButtonComponents, ButtonPropsBasic> | undefined, slots?: ButtonSlots | undefined, emits?: ConstrEmit<ButtonEmits> | undefined);
    /** values for the class/ значения для класса */
    readonly classes: ComputedRef<ConstrClass>;
    /**
     * list of aria properties for the button component/
     * список aria свойств для компонента Button
     */
    readonly aria: ComputedRef<AriaList>;
}
