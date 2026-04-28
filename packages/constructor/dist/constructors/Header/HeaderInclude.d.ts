import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { HeaderComponentInclude, HeaderPropsInclude, HeaderSlotsInclude } from './basicTypes';
import { HeaderProps } from './props';
/**
 * The class returns data for working with the Header component
 *
 * Класс возвращает данные для работы с компонентом Header
 */
export declare class HeaderInclude<Props extends HeaderPropsInclude = HeaderPropsInclude, PropsExtra extends ConstrBind<HeaderProps> = ConstrBind<HeaderProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<HeaderComponentInclude, Props> | undefined;
    protected readonly slots?: HeaderSlotsInclude | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly labelId?: string | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots list of slots/ список слотов
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param labelId identifier for the label/ идентификатор для метки
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<HeaderComponentInclude, Props> | undefined, slots?: HeaderSlotsInclude | undefined, extra?: RefOrNormal<PropsExtra> | undefined, labelId?: string | undefined, index?: string | undefined);
    /** Checks whether header should be displayed/ Проверяет, нужно ли отображать заголовок */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for the header/ Вычисляемые привязки для header */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the Header component with slots/
     * Рендер компонента Header со слотами
     */
    readonly render: () => VNode[];
}
