import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { LabelInclude } from '../../classes/LabelInclude';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { ArrowInclude } from '../Arrow';
import { TooltipClasses } from './TooltipClasses';
import { TooltipStyle } from './TooltipStyle';
import { TooltipStatus } from './TooltipStatus';
import { TooltipPosition } from './TooltipPosition';
import { TooltipOpen } from './TooltipOpen';
import { TooltipEvent } from './TooltipEvent';
import { TooltipControl } from './basicTypes';
import { TooltipComponents, TooltipEmits, TooltipSlots } from './types';
import { TooltipProps } from './props';
/**
 * Tooltip
 */
export declare class Tooltip {
    protected readonly props: TooltipProps;
    protected readonly refs: ToRefs<TooltipProps>;
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<TooltipComponents, TooltipProps> | undefined;
    protected readonly slots?: TooltipSlots | undefined;
    protected readonly emits?: ConstrEmit<TooltipEmits> | undefined;
    readonly classes: TooltipClasses;
    readonly style: TooltipStyle;
    readonly status: TooltipStatus;
    readonly position: TooltipPosition;
    readonly open: TooltipOpen;
    readonly event: TooltipEvent;
    readonly arrow: ArrowInclude;
    readonly label: LabelInclude;
    readonly description: DescriptionInclude;
    /** Data for the control slot/ Данные для слота управления */
    readonly slotData: TooltipControl;
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
     * @param TooltipClassesConstructor class for working with classes/ класс для работы с классами
     * @param TooltipStyleConstructor class for working with styles/ класс для работы со стилями
     * @param TooltipStatusConstructor class for working with status/ класс для работы со статусом
     * @param TooltipPositionConstructor class for working with position/ класс для работы с позицией
     * @param TooltipOpenConstructor class for working with open state/ класс для работы с состоянием открытия
     * @param TooltipEventConstructor class for working with events/ класс для работы с событиями
     * @param ArrowIncludeConstructor class for working with arrow/ класс для работы со стрелкой
     * @param LabelIncludeConstructor class for working with label/ класс для работы с меткой
     * @param DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
     */
    constructor(props: TooltipProps, refs: ToRefs<TooltipProps>, element: Ref<HTMLDivElement | undefined>, classDesign: string, className: string, components?: DesignComp<TooltipComponents, TooltipProps> | undefined, slots?: TooltipSlots | undefined, emits?: ConstrEmit<TooltipEmits> | undefined, TooltipClassesConstructor?: typeof TooltipClasses, TooltipStyleConstructor?: typeof TooltipStyle, TooltipStatusConstructor?: typeof TooltipStatus, TooltipPositionConstructor?: typeof TooltipPosition, TooltipOpenConstructor?: typeof TooltipOpen, TooltipEventConstructor?: typeof TooltipEvent, ArrowIncludeConstructor?: typeof ArrowInclude, LabelIncludeConstructor?: typeof LabelInclude, DescriptionIncludeConstructor?: typeof DescriptionInclude);
}
