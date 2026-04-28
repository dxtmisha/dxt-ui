import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { BadgeComponentInclude, BadgePropsInclude } from './basicTypes';
import { BadgeProps } from './props';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * BadgeInclude class provides functionality for conditionally rendering badge components
 * within other components. It manages the logic for determining when to display a badge
 * and configures the appropriate properties.
 *
 * Класс BadgeInclude предоставляет функциональность для условного рендеринга компонентов
 * бейджа внутри других компонентов. Он управляет логикой определения необходимости
 * отображения бейджа и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending BadgePropsInclude
 */
export declare class BadgeInclude<Props extends BadgePropsInclude = BadgePropsInclude> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<BadgeComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<BadgeProps>> | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter/ дополнительный параметр
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<BadgeComponentInclude, Props> | undefined, extra?: RefOrNormal<ConstrBind<BadgeProps>> | undefined);
    /**
     * Checks whether a badge is specified for rendering the component/
     * Проверяет, указан ли бейдж для отображения компонента
     */
    readonly is: ComputedRef<boolean>;
    /**
     * list of properties for the badge component/ список свойств для компонента бейджа
     */
    readonly binds: ComputedRef<ConstrBind< ItemList>>;
    /**
     * Render of the badge component
     *
     * Рендер компонента бейджа
     */
    readonly render: () => VNode[];
}
