import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { AreaInclude } from '../../classes/AreaInclude';
import { CaptionInclude } from '../../classes/CaptionInclude';
import { IconInclude } from '../Icon';
import { LabelInclude } from '../../classes/LabelInclude';
import { HeaderComponents, HeaderEmits, HeaderSlots } from './types';
import { HeaderProps } from './props';
/**
 * Header
 */
export declare class Header {
    protected readonly props: HeaderProps;
    protected readonly refs: ToRefs<HeaderProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<HeaderComponents, HeaderProps> | undefined;
    protected readonly slots?: HeaderSlots | undefined;
    protected readonly emits?: ConstrEmit<HeaderEmits> | undefined;
    /**
     * Object for working with label/
     * Объект для работы с меткой
     */
    readonly label: LabelInclude;
    /**
     * Object for working with caption/
     * Объект для работы с подписью
     */
    readonly caption: CaptionInclude;
    /**
     * Object for working with icon/
     * Объект для работы с иконкой
     */
    readonly icon: IconInclude;
    /**
     * Object for working with area value/
     * Объект для работы со значением области
     */
    readonly area: AreaInclude;
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
     * @param constructors.AreaIncludeConstructor class for working with area value/ класс для работы со значением области
     * @param constructors.CaptionIncludeConstructor class for working with caption/ класс для работы с подписью
     * @param constructors.IconIncludeConstructor class for working with icon/ класс для работы с иконкой
     * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
     */
    constructor(props: HeaderProps, refs: ToRefs<HeaderProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<HeaderComponents, HeaderProps> | undefined, slots?: HeaderSlots | undefined, emits?: ConstrEmit<HeaderEmits> | undefined, constructors?: {
        AreaIncludeConstructor?: typeof AreaInclude;
        CaptionIncludeConstructor?: typeof CaptionInclude;
        IconIncludeConstructor?: typeof IconInclude;
        LabelIncludeConstructor?: typeof LabelInclude;
    });
    /**
     * List of classes for the input element/
     * Список классов для элемента ввода
     */
    readonly classList: ComputedRef<string[]>;
}
