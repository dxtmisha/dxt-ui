import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { ModelInclude } from '../../classes/ModelInclude';
import { TabIndexInclude } from '../../classes/TabIndexInclude';
import { MotionTransformElement } from './MotionTransformElement';
import { MotionTransformSize } from './MotionTransformSize';
import { MotionTransformState } from './MotionTransformState';
import { MotionTransformEvent } from './MotionTransformEvent';
import { MotionTransformGo } from './MotionTransformGo';
import { WindowEsc } from '../Window/WindowEsc';
import { MotionTransformComponents, MotionTransformEmits, MotionTransformSlots } from './types';
import { MotionTransformProps } from './props';
import { MotionTransformControlItem } from './basicTypes';
/**
 * MotionTransform
 */
export declare class MotionTransform {
    protected readonly props: MotionTransformProps;
    protected readonly refs: ToRefs<MotionTransformProps>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<MotionTransformComponents, MotionTransformProps> | undefined;
    protected readonly slots?: MotionTransformSlots | undefined;
    protected readonly emits?: ConstrEmit<MotionTransformEmits> | undefined;
    /** Reference helper for element interactions/ Вспомогательный класс для работы с элементами */
    readonly element: MotionTransformElement;
    readonly tabIndex: TabIndexInclude<HTMLDivElement>;
    /** Size calculation manager/ Менеджер расчёта размеров */
    readonly size: MotionTransformSize;
    /** State manager/ Менеджер состояния */
    readonly state: MotionTransformState;
    /** Event manager/ Менеджер событий */
    readonly event: MotionTransformEvent;
    /** Control actions manager/ Менеджер действий управления */
    readonly go: MotionTransformGo;
    /** Window esc manager/ Менеджер esc окна */
    readonly esc: WindowEsc;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param elementContext substrate element / элемент подложка
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param MotionTransformElementConstructor class for working with elements/ класс для работы с элементами
     * @param MotionTransformSizeConstructor class for working with size/ класс для работы с размером
     * @param MotionTransformStateConstructor class for working with state/ класс для работы с состоянием
     * @param MotionTransformEventConstructor class for working with events/ класс для работы с событиями
     * @param MotionTransformGoConstructor class for working with go/ класс для работы с переходом
     * @param TabIndexIncludeConstructor class for working with tab index/ класс для работы с индексом табуляции
     * @param WindowEscConstructor class for working with esc/ класс для работы с esc
     * @param ModelIncludeConstructor class for working with model/ класс для работы с моделью
     */
    constructor(props: MotionTransformProps, refs: ToRefs<MotionTransformProps>, element: Ref<HTMLDivElement | undefined>, elementContext: Ref<HTMLDivElement | undefined>, classDesign: string, className: string, components?: DesignComp<MotionTransformComponents, MotionTransformProps> | undefined, slots?: MotionTransformSlots | undefined, emits?: ConstrEmit<MotionTransformEmits> | undefined, MotionTransformElementConstructor?: typeof MotionTransformElement, MotionTransformSizeConstructor?: typeof MotionTransformSize, MotionTransformStateConstructor?: typeof MotionTransformState, MotionTransformEventConstructor?: typeof MotionTransformEvent, MotionTransformGoConstructor?: typeof MotionTransformGo, TabIndexIncludeConstructor?: typeof TabIndexInclude, WindowEscConstructor?: typeof WindowEsc, ModelIncludeConstructor?: typeof ModelInclude);
    /**
     * Computed slot data for managing slots/
     * Вычисляемые данные слотов для управления слотами
     */
    readonly slotData: ComputedRef<MotionTransformControlItem>;
    /**
     * Returns data for managing slot data.
     *
     * Возвращает данные для управления данными слотами.
     */
    getSlotData(): MotionTransformControlItem;
}
