import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { TextInclude } from '../../classes/TextInclude';
import { FieldCounterComponents, FieldCounterEmits, FieldCounterSlots } from './types';
import { FieldCounterProps } from './props';
/**
 * FieldCounter
 */
export declare class FieldCounter {
    protected readonly props: FieldCounterProps;
    protected readonly refs: ToRefs<FieldCounterProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<FieldCounterComponents, FieldCounterProps> | undefined;
    protected readonly slots?: FieldCounterSlots | undefined;
    protected readonly emits?: ConstrEmit<FieldCounterEmits> | undefined;
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
     * @param TextIncludeConstructor class for working with text/ класс для работы с текстом
     */
    constructor(props: FieldCounterProps, refs: ToRefs<FieldCounterProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<FieldCounterComponents, FieldCounterProps> | undefined, slots?: FieldCounterSlots | undefined, emits?: ConstrEmit<FieldCounterEmits> | undefined, TextIncludeConstructor?: typeof TextInclude);
    /** Checks if it is necessary to display the number of input characters/ Проверяет, надо ли выводить количество вводимых символов */
    readonly is: ComputedRef<boolean>;
    /** Checks if it is necessary to display the maximum available number of characters/ Проверяет, надо ли выводить максимальное доступное количество символов */
    readonly isMax: ComputedRef<boolean>;
    /** Returns text for output/ Возвращает текст для вывода */
    readonly item: ComputedRef<string>;
    /**
     * Returns the text for the screen reader.
     *
     * Возвращает текст для скринридера.
     */
    readonly ariaText: ComputedRef<string | undefined>;
    /**
     * Returns the number of input characters.
     *
     * Возвращает количество вводимых символов.
     */
    getCounter(): number;
    /**
     * Returns the maximum available input number.
     *
     * Возвращает максимально доступное вводимое число.
     */
    getMax(): number;
    /**
     * Returns the number of characters remaining at which the screen reader starts announcing.
     *
     * Возвращает количество оставшихся символов, при котором скринридер начинает произносить.
     */
    getMaxlengthOnce(): number;
    /**
     * Returns the number of remaining characters.
     *
     * Возвращает количество оставшихся символов.
     */
    getRemaining(): number;
}
