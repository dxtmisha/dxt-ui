import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { ModelInclude } from '../../classes/ModelInclude';
import { MotionAxisInclude } from '../MotionAxis/MotionAxisInclude';
import { TabsNavigationInclude } from '../TabsNavigation/TabsNavigationInclude';
import { TabsSelected } from './TabsSelected';
import { TabsComponents, TabsEmits, TabsSlots } from './types';
import { TabsProps } from './props';
/**
 * Tabs
 */
export declare class Tabs {
    protected readonly props: TabsProps;
    protected readonly refs: ToRefs<TabsProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<TabsComponents, TabsProps> | undefined;
    protected readonly slots?: TabsSlots | undefined;
    protected readonly emits?: ConstrEmit<TabsEmits> | undefined;
    readonly event: EventClickInclude;
    readonly motionAxis: MotionAxisInclude;
    readonly tabsNavigation: TabsNavigationInclude;
    readonly selected: TabsSelected;
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
     * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
     * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
     * @param constructors.MotionAxisIncludeConstructor class for working with motion axis/ класс для работы с осью движения
     * @param constructors.TabsNavigationIncludeConstructor class for working with tabs navigation/ класс для работы с навигацией вкладок
     * @param constructors.TabsSelectedConstructor class for working with selected/ класс для работы с выбранным
     */
    constructor(props: TabsProps, refs: ToRefs<TabsProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<TabsComponents, TabsProps> | undefined, slots?: TabsSlots | undefined, emits?: ConstrEmit<TabsEmits> | undefined, constructors?: {
        EventClickIncludeConstructor?: typeof EventClickInclude;
        ModelIncludeConstructor?: typeof ModelInclude;
        MotionAxisIncludeConstructor?: typeof MotionAxisInclude;
        TabsNavigationIncludeConstructor?: typeof TabsNavigationInclude;
        TabsSelectedConstructor?: typeof TabsSelected;
    });
}
