import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { MotionTransformInclude } from '../MotionTransform';
import { ModelInclude } from '../../classes/ModelInclude';
import { CellExpose } from '../Cell';
import { AccordionComponents, AccordionEmits, AccordionSlots } from './types';
import { AccordionProps } from './props';
import { IconValue, IconPropsBasic } from '../Icon';
import { NumberOrString } from '@dxtmisha/functional-basic';
import { EventClickValue } from '../../library';
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
    /** Motion transform manager/ Менеджер анимации перехода */
    readonly motionTransform: MotionTransformInclude;
    /** Event manager/ Менеджер событий */
    readonly event: EventClickInclude;
    /** Open state/ Состояние открытия */
    readonly open: Ref<boolean, boolean>;
    /** Model manager/ Менеджер модели */
    readonly model: ModelInclude<boolean>;
    /** Head element reference/ Ссылка на элемент заголовка */
    readonly elementHead: Ref<CellExpose | undefined, CellExpose | undefined>;
    protected readonly labelId: string;
    protected readonly descriptionId: string;
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
     * @param constructors object with classes/ объект с классами
     * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
     * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
     * @param constructors.MotionTransformIncludeConstructor class for working with motion transform/ класс для работы с анимацией перехода
     */
    constructor(props: AccordionProps, refs: ToRefs<AccordionProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<AccordionComponents, AccordionProps> | undefined, slots?: AccordionSlots | undefined, emits?: ConstrEmit<AccordionEmits> | undefined, constructors?: {
        EventClickIncludeConstructor?: typeof EventClickInclude;
        ModelIncludeConstructor?: typeof ModelInclude;
        MotionTransformIncludeConstructor?: typeof MotionTransformInclude;
    });
    /**
     * Computed bindings for the cell.
     *
     * Вычисляемые привязки для ячейки.
     */
    readonly bindsCell: ComputedRef<{
        ref: Ref<CellExpose | undefined, CellExpose | undefined>;
        icon: IconValue<IconPropsBasic> | undefined;
        iconTrailing: IconValue<IconPropsBasic> | undefined;
        label: NumberOrString | undefined;
        description: string | number | undefined;
        dynamic: boolean;
        labelId: string;
        descriptionId: string;
        onClick: (event: MouseEvent, options?: EventClickValue) => void;
        onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void;
    }>;
}
