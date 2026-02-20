import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { TabsNavigationComponentInclude, TabsNavigationPropsInclude } from './basicTypes';
import { TabsNavigationSlots } from './types';
import { TabsNavigationProps } from './props';
/**
 * The class returns data for working with the TabsNavigation component
 *
 * Класс возвращает данные для работы с компонентом TabsNavigation
 */
export declare class TabsNavigationInclude<Props extends TabsNavigationPropsInclude = TabsNavigationPropsInclude, PropsExtra extends ConstrBind<TabsNavigationProps> = ConstrBind<TabsNavigationProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<TabsNavigationComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<TabsNavigationComponentInclude, Props> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Computed bindings for the tabsNavigation/ Вычисляемые привязки для tabsNavigation */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the TabsNavigation component with slots/
     * Рендер компонента TabsNavigation со слотами
     * @param slotsChildren slots passed to the tabsNavigation/ слоты, передаваемые tabsNavigation
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    readonly render: (slotsChildren?: TabsNavigationSlots, attrs?: Record<string, any>) => VNode[];
}
