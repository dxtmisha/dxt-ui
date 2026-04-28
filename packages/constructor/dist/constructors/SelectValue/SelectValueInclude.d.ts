import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { SelectValueComponentInclude, SelectValuePropsInclude } from './basicTypes';
import { SelectValueProps } from './props';
/**
 * SelectValueInclude class provides functionality for conditionally rendering selectValue components
 * within other components. It manages the logic for determining when to display selectValue
 * and configures the appropriate properties.
 *
 * Класс SelectValueInclude предоставляет функциональность для условного рендеринга компонентов
 * selectValue внутри других компонентов. Он управляет логикой определения необходимости
 * отображения selectValue и настраивает соответствующие свойства.
 */
export declare class SelectValueInclude<Props extends SelectValuePropsInclude = SelectValuePropsInclude, PropsExtra extends ConstrBind<SelectValueProps> = ConstrBind<SelectValueProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<SelectValueComponentInclude, Props> | undefined;
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
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<SelectValueComponentInclude, Props> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks whether selectValue should be displayed/
     * Проверяет, нужно ли отображать selectValue
     */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for the selectValue/ Вычисляемые привязки для selectValue */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the SelectValue component
     *
     * Рендер компонента selectValue
     * @param attrs additional attributes/ дополнительные атрибуты
     * @returns VNode array/ массив VNode
     */
    readonly render: (attrs?: Record<string, any>) => VNode[];
}
