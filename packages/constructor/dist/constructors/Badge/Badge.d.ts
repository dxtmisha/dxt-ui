import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { LabelNumberInclude } from '../../classes/LabelNumberInclude';
import { IconInclude } from '../Icon';
import { AriaList } from '../../types/ariaTypes';
import { BadgeComponents, BadgeEmits, BadgeSlots } from './types';
import { BadgeProps } from './props';
/**
 * The Badge class implements a badge constructor with icon support and auto-hide logic.
 *
 * Класс Badge реализует конструктор бейджа с поддержкой иконок и авто-скрытия.
 */
export declare class Badge {
    protected readonly props: BadgeProps;
    protected readonly refs: ToRefs<BadgeProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<BadgeComponents, BadgeProps> | undefined;
    protected readonly slots?: BadgeSlots | undefined;
    protected readonly emits?: ConstrEmit<BadgeEmits> | undefined;
    readonly label: LabelNumberInclude;
    readonly icon: IconInclude;
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
     * @param LabelNumberIncludeConstructor class for working with label/ класс для работы с меткой
     * @param IconIncludeConstructor class for working with icon/ класс для работы с иконкой
     */
    constructor(props: BadgeProps, refs: ToRefs<BadgeProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<BadgeComponents, BadgeProps> | undefined, slots?: BadgeSlots | undefined, emits?: ConstrEmit<BadgeEmits> | undefined, LabelNumberIncludeConstructor?: typeof LabelNumberInclude, IconIncludeConstructor?: typeof IconInclude);
    /**
     * Computes if the badge should auto-hide when there is no dot, icon, or label.
     *
     * Вычисляет, должен ли бейдж автоматически скрываться, если нет точки, иконки и текста.
     */
    readonly autoHide: ComputedRef<boolean>;
    /**
     * Classes for controlling badge visibility.
     *
     * Классы для управления видимостью бейджа.
     */
    readonly classes: ComputedRef<{
        [x: string]: boolean;
    }>;
    readonly aria: ComputedRef<AriaList>;
}
