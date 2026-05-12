import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { AreaInclude } from '../../classes/AreaInclude';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { ButtonGroupComponents, ButtonGroupEmits, ButtonGroupSlots } from './types';
import { ButtonGroupProps } from './props';
/**
 * ButtonGroup
 */
export declare class ButtonGroup {
    protected readonly props: ButtonGroupProps;
    protected readonly refs: ToRefs<ButtonGroupProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ButtonGroupComponents, ButtonGroupProps> | undefined;
    protected readonly slots?: ButtonGroupSlots | undefined;
    protected readonly emits?: ConstrEmit<ButtonGroupEmits> | undefined;
    readonly area: AreaInclude;
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
     * @param constructors.AreaIncludeConstructor class for working with area value/ класс для работы со значением области
     */
    constructor(props: ButtonGroupProps, refs: ToRefs<ButtonGroupProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ButtonGroupComponents, ButtonGroupProps> | undefined, slots?: ButtonGroupSlots | undefined, emits?: ConstrEmit<ButtonGroupEmits> | undefined, constructors?: {
        AreaIncludeConstructor?: typeof AreaInclude;
        EventConstructor?: typeof EventClickInclude;
    });
    /**
     * Checks if the main list needs to be displayed/
     * Проверяет, нужно ли выводить главный список
     */
    readonly isList: ComputedRef<boolean>;
}
