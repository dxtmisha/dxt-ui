import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { MotionTransformInclude } from '../MotionTransform';
import { ModelInclude } from '../../classes/ModelInclude';
import { CellExpose } from '../Cell';
import { AccordionComponents, AccordionEmits, AccordionSlots } from './types';
import { AccordionProps } from './props';
/**
 * Accordion
 */
export declare class Accordion {
    protected readonly props: AccordionProps;
    protected readonly refs: ToRefs<AccordionProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<AccordionComponents, AccordionProps> | undefined;
    protected readonly slots?: AccordionSlots | undefined;
    protected readonly emits?: ConstrEmit<AccordionEmits> | undefined;
    readonly motionTransform: MotionTransformInclude;
    readonly event: EventClickInclude;
    readonly open: Ref<boolean, boolean>;
    readonly model: ModelInclude<boolean>;
    readonly elementHead: Ref<CellExpose | undefined, CellExpose | undefined>;
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
    constructor(props: AccordionProps, refs: ToRefs<AccordionProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<AccordionComponents, AccordionProps> | undefined, slots?: AccordionSlots | undefined, emits?: ConstrEmit<AccordionEmits> | undefined);
}
