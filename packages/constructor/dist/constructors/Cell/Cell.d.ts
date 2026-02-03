import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClass, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { LabelInclude } from '../../classes/LabelInclude';
import { CaptionInclude } from '../../classes/CaptionInclude';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { EnabledInclude } from '../../classes/EnabledInclude';
import { IconTrailingInclude } from '../Icon';
import { ProgressInclude } from '../Progress';
import { RippleInclude } from '../Ripple';
import { SkeletonInclude } from '../Skeleton';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { CellComponents, CellEmits, CellSlots } from './types';
import { CellProps } from './props';
import { CellClassesSub } from './basicTypes';
/**
 * Cell
 */
export declare class Cell {
    protected readonly props: CellProps;
    protected readonly refs: ToRefs<CellProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<CellComponents, CellProps> | undefined;
    protected readonly slots?: CellSlots | undefined;
    protected readonly emits?: ConstrEmit<CellEmits> | undefined;
    readonly progress: ProgressInclude;
    readonly skeleton: SkeletonInclude;
    readonly label: LabelInclude;
    readonly description: DescriptionInclude;
    readonly caption: CaptionInclude;
    readonly enabled: EnabledInclude;
    readonly icon: IconTrailingInclude;
    readonly ripple: RippleInclude;
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
     * @param LabelConstructor class for creating a label/ класс для создания метки
     * @param CaptionConstructor class for creating a caption/ класс для создания подписи
     * @param DescriptionConstructor class for creating a description/ класс для создания описания
     * @param EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
     * @param IconConstructor class for creating an icon/ класс для создания иконки
     * @param ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
     * @param RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
     * @param SkeletonConstructor class for creating a skeleton/ класс для создания скелета
     * @param EventConstructor class for creating an event/ класс для создания события
     */
    constructor(props: CellProps, refs: ToRefs<CellProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<CellComponents, CellProps> | undefined, slots?: CellSlots | undefined, emits?: ConstrEmit<CellEmits> | undefined, LabelConstructor?: typeof LabelInclude, CaptionConstructor?: typeof CaptionInclude, DescriptionConstructor?: typeof DescriptionInclude, EnabledConstructor?: typeof EnabledInclude, IconConstructor?: typeof IconTrailingInclude, ProgressConstructor?: typeof ProgressInclude, RippleConstructor?: typeof RippleInclude, SkeletonConstructor?: typeof SkeletonInclude, EventConstructor?: typeof EventClickInclude);
    /**
     * Computed CSS classes for the cell component.
     *
     * Вычисляемые CSS классы для компонента ячейки.
     */
    readonly classes: ComputedRef<ConstrClass>;
    /**
     * Computed role for the cell component.
     *
     * Вычисляемая роль для компонента ячейки.
     */
    readonly role: ComputedRef<string | undefined>;
    /**
     * Returns a list of sub-element CSS classes for the cell component.
     *
     * Возвращает список CSS классов для под-элементов компонента ячейки.
     */
    getClassesSub(): CellClassesSub;
}
