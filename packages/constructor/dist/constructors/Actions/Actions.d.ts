import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { ActionsComponents, ActionsEmits, ActionsSlots } from './types';
import { ActionsProps } from './props';
/**
 * Actions
 */
export declare class Actions {
    protected readonly props: ActionsProps;
    protected readonly refs: ToRefs<ActionsProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ActionsComponents, ActionsProps> | undefined;
    protected readonly slots?: ActionsSlots | undefined;
    protected readonly emits?: ConstrEmit<ActionsEmits> | undefined;
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
     * @param constructors object with classes/ объект с классами
     * @param constructors.EventConstructor class for creating an event/ класс для создания события
     */
    constructor(props: ActionsProps, refs: ToRefs<ActionsProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ActionsComponents, ActionsProps> | undefined, slots?: ActionsSlots | undefined, emits?: ConstrEmit<ActionsEmits> | undefined, constructors?: {
        EventConstructor?: typeof EventClickInclude;
    });
    /**
     * Checks if the main list needs to be displayed/
     * Проверяет, нужно ли выводить главный список
     */
    readonly isList: ComputedRef<boolean>;
    /**
     * Checks if the secondary list needs to be displayed/
     * Проверяет, нужно ли выводить второстепенный список
     */
    readonly isSecondary: ComputedRef<boolean>;
}
