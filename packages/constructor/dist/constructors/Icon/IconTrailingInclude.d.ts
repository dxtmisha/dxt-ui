import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { IconInclude } from './IconInclude';
import { IconComponentInclude, IconTrailingPropsInclude } from './basicTypes';
import { IconPropsBasic } from './props';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
export declare class IconTrailingInclude<Props extends IconTrailingPropsInclude = IconTrailingPropsInclude> extends IconInclude<Props> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<IconComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter/ дополнительный параметр
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<IconComponentInclude, Props> | undefined, extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined);
    /**
     * Checks whether an icon is specified for rendering the component/
     * Проверяет, указана ли иконка для отображения компонента
     */
    readonly isIconTrailing: ComputedRef<boolean>;
    /**
     * Checks if there is at least one icon/
     * Проверяет, есть ли хотя бы одна иконка
     */
    readonly hasAtLeastOneIcon: ComputedRef<boolean>;
    /**
     * list of properties for the secondary icon component/ список свойств для вторичного компонента иконки
     */
    readonly trailingBind: ComputedRef<ConstrBind< ItemList>>;
    /**
     * Render of the secondary icon component
     *
     * Рендер вторичного компонента иконки
     */
    readonly renderIconTrailing: () => VNode[];
    /**
     * Method for rendering all icons — first the main ones, then the additional icons
     *
     * Метод для рендеринга всех иконок — сначала основных, затем дополнительных
     */
    readonly render: () => VNode[];
}
