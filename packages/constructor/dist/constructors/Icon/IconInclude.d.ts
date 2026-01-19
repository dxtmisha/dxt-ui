import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { IconLiteInclude } from './IconLiteInclude';
import { IconComponentInclude, IconPropsInclude } from './basicTypes';
import { IconPropsBasic } from './props';
import { ComputedRef } from 'vue';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
export declare class IconInclude<Props extends IconPropsInclude = IconPropsInclude> extends IconLiteInclude<Props> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<IconComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined;
    protected readonly turn?: RefOrNormal<boolean> | undefined;
    protected readonly dir?: RefOrNormal<boolean> | undefined;
    protected readonly start: RefOrNormal<boolean | undefined>;
    protected readonly end: RefOrNormal<boolean | undefined>;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter/ дополнительный параметр
     * @param turn should the icon be flipped/ надо ли перевернуть иконку
     * @param dir should the icon be mirrored/ надо ли зеркально отображать иконка
     * @param start add sorting at the beginning/ добавить сортировку в начале
     * @param end add sorting at the end/ добавить сортировку в конце
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<IconComponentInclude, Props> | undefined, extra?: RefOrNormal<ConstrBind<IconPropsBasic>> | undefined, turn?: RefOrNormal<boolean> | undefined, dir?: RefOrNormal<boolean> | undefined, start?: RefOrNormal<boolean | undefined>, end?: RefOrNormal<boolean | undefined>);
    /**
     * List of properties for the icon component/ Список свойств для компонента иконки
     */
    readonly iconBind: ComputedRef<ConstrBind< ItemList>>;
}
