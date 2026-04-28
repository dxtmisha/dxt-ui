import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { MenuComponentInclude, MenuExposeInclude, MenuPropsInclude } from './basicTypes';
import { MenuExpose, MenuSlots } from './types';
import { MenuProps } from './props';
/**
 * MenuInclude class provides functionality for conditionally rendering menu components
 * within other components. It manages the logic for determining when to display menu
 * and configures the appropriate properties.
 *
 * Класс MenuInclude предоставляет функциональность для условного рендеринга компонентов
 * меню внутри других компонентов. Он управляет логикой определения необходимости
 * отображения меню и настраивает соответствующие свойства.
 */
export declare class MenuInclude<Props extends MenuPropsInclude = MenuPropsInclude, PropsExtra extends ConstrBind<MenuProps> = ConstrBind<MenuProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<MenuComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /** Reference to menu element/ Ссылка на элемент меню */
    protected readonly element: Ref<ConstrBind<MenuExpose> | undefined, ConstrBind<MenuExpose> | undefined>;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<MenuComponentInclude, Props> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks whether menu should be displayed/
     * Проверяет, нужно ли отображать меню
     */
    readonly is: ComputedRef<boolean>;
    readonly isOpen: ComputedRef<boolean>;
    /** Computed bindings for the menu/ Вычисляемые привязки для меню */
    readonly binds: ComputedRef<PropsExtra>;
    /** Menu expose functionality/ Функциональность экспорта меню */
    readonly expose: MenuExposeInclude;
    /**
     * Get the menu element
     *
     * Получить элемент меню
     */
    getElement(): ConstrBind<MenuExpose> | undefined;
    /**
     * Render the Menu component
     *
     * Рендер компонента меню
     * @param slotsChildren menu slots/ слоты меню
     * @param attrs additional attributes/ дополнительные атрибуты
     * @returns VNode array/ массив VNode
     */
    readonly render: (slotsChildren?: MenuSlots, attrs?: Record<string, any>) => VNode[];
}
