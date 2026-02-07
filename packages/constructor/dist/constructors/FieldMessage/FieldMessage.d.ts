import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClassObject, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { FieldCounterInclude } from '../FieldCounter';
import { FieldMessageMessage } from './FieldMessageMessage';
import { SkeletonInclude } from '../Skeleton';
import { FieldMessageComponents, FieldMessageEmits, FieldMessageSlots } from './types';
import { FieldMessageSlot } from './basicTypes';
import { FieldMessageProps } from './props';
/**
 * FieldMessage
 */
export declare class FieldMessage {
    protected readonly props: FieldMessageProps;
    protected readonly refs: ToRefs<FieldMessageProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<FieldMessageComponents, FieldMessageProps> | undefined;
    protected readonly slots?: FieldMessageSlots | undefined;
    protected readonly emits?: ConstrEmit<FieldMessageEmits> | undefined;
    /** Field counter functionality/ Функциональность счетчика поля */
    readonly fieldCounter: FieldCounterInclude<FieldMessageProps>;
    /** Message functionality/ Функциональность сообщений */
    readonly message: FieldMessageMessage;
    /** Skeleton include/ Подключение скелетона */
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
     * @param FieldCounterIncludeConstructor class for working with field counter/ класс для работы со счетчиком поля
     * @param FieldMessageMessageConstructor class for working with messages/ класс для работы с сообщениями
     * @param SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
     */
    constructor(props: FieldMessageProps, refs: ToRefs<FieldMessageProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<FieldMessageComponents, FieldMessageProps> | undefined, slots?: FieldMessageSlots | undefined, emits?: ConstrEmit<FieldMessageEmits> | undefined, FieldCounterIncludeConstructor?: typeof FieldCounterInclude, FieldMessageMessageConstructor?: typeof FieldMessageMessage, SkeletonIncludeConstructor?: typeof SkeletonInclude);
    /**
     * Checks if there are values for outputting the element/ Проверяет, есть ли значения для вывода элемента
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Checks if there is a helper message.
     *
     * Проверяет, есть ли вспомогательное сообщение.
     */
    readonly isHelper: ComputedRef<boolean>;
    /**
     * Checks if there is a validation message.
     *
     * Проверяет, есть ли сообщение о валидации.
     */
    readonly isValidation: ComputedRef<boolean>;
    /**
     * Returns data for the main style class/ Возвращает данные для главного класса стиля
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    /**
     * Data for helper slot/ Данные для слота helper
     */
    readonly slotHelperData: ComputedRef<FieldMessageSlot>;
    /**
     * Data for validation slot/ Данные для слота validation
     */
    readonly slotValidationData: ComputedRef<FieldMessageSlot>;
}
