import { ComputedRef, Ref, ToRefs } from 'vue';
import { ConstrClassObject, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { ImageEventData } from '../Image';
import { SkeletonInclude } from '../Skeleton';
import { IconComponents, IconEmits, IconSlots } from './types';
import { IconProps } from './props';
import { IconEventLoad } from './basicTypes';
/**
 * Base class for working with icons.
 *
 * Базовый класс для работы с иконками.
 */
export declare class Icon {
    protected readonly props: IconProps;
    protected readonly refs: ToRefs<IconProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<IconComponents, IconProps> | undefined;
    protected readonly slots?: IconSlots | undefined;
    protected readonly emits?: ConstrEmit<IconEmits> | undefined;
    protected readonly SkeletonIncludeConstructor: typeof SkeletonInclude;
    /**
     * Returns the property for the base icon/ Возвращает свойство для базовой иконки
     */
    readonly iconBind: ComputedRef<IconEventLoad['iconBind']>;
    /**
     * Returns the property for the additional icon/ Возвращает свойство для дополнительной иконки
     */
    readonly iconActiveBind: ComputedRef<IconEventLoad['iconActiveBind']>;
    /**
     * An object for working with the Skeleton/ Объект для работы с Skeleton
     */
    readonly skeleton: SkeletonInclude;
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
     * @param SkeletonIncludeConstructor class for working with Skeleton/ класс для работы с Skeleton
     */
    constructor(props: IconProps, refs: ToRefs<IconProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<IconComponents, IconProps> | undefined, slots?: IconSlots | undefined, emits?: ConstrEmit<IconEmits> | undefined, SkeletonIncludeConstructor?: typeof SkeletonInclude);
    /**
     * Checks if the additional icon is active/ Проверяет, активна ли дополнительная иконка
     */
    readonly isActive: ComputedRef<boolean>;
    /**
     * Values for the class/ Значения для класса
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    /**
     * Computed bindings for the icon element.
     *
     * Вычисляемые привязки для элемента иконки.
     */
    readonly binds: ComputedRef<any>;
    /**
     * Get the ARIA role for the icon element.
     *
     * Получить ARIA роль для элемента иконки.
     */
    protected getRole(): string | undefined;
    /**
     * Triggers an event when the image loading is complete.
     *
     * Вызывает событие, когда завершится загрузка картинки.
     * @param event event object/ объект события
     */
    protected readonly onLoad: (event: ImageEventData) => void | undefined;
}
