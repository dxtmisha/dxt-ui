import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { ArrowComponentInclude, ArrowPropsInclude } from './basicTypes';
import { ArrowProps } from './props';
/**
 * ArrowInclude class provides functionality for conditionally rendering arrow components
 * within other components. It manages the logic for determining when to display arrow
 * and configures the appropriate properties.
 *
 * Класс ArrowInclude предоставляет функциональность для условного рендеринга компонентов
 * стрелки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения стрелки и настраивает соответствующие свойства.
 */
export declare class ArrowInclude<Props extends ArrowPropsInclude = ArrowPropsInclude, PropsExtra extends ConstrBind<ArrowProps> = ConstrBind<ArrowProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<ArrowComponentInclude, Props> | undefined;
    protected readonly elementTarget?: (HTMLElement | string) | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param elementTarget target element or selector/ целевой элемент или селектор
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<ArrowComponentInclude, Props> | undefined, elementTarget?: (HTMLElement | string) | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks whether arrow should be displayed/
     * Проверяет, нужно ли отображать стрелку
     */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for the arrow/ Вычисляемые привязки для стрелки */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the Arrow component
     *
     * Рендер компонента стрелки
     */
    readonly render: () => VNode[];
}
