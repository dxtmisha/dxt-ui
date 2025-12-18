import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { ButtonComponentInclude, ButtonPropsInclude } from './basicTypes';
import { ButtonPropsBasic } from './props';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * ButtonInclude class provides functionality for conditionally rendering button components
 * within other components. It manages the logic for determining when to display a button
 * and configures the appropriate properties.
 *
 * Класс ButtonInclude предоставляет функциональность для условного рендеринга компонентов
 * кнопки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения кнопки и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending ButtonPropsInclude
 */
export declare class ButtonInclude<Props extends ButtonPropsInclude = ButtonPropsInclude> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<ButtonComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<ButtonPropsBasic>> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter/ дополнительный параметр
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<ButtonComponentInclude, Props> | undefined, extra?: RefOrNormal<ConstrBind<ButtonPropsBasic>> | undefined, index?: string | undefined);
    /**
     * Computed bindings for the button/ Вычисляемые привязки для кнопки
     */
    readonly binds: ComputedRef<ConstrBind< ItemList>>;
    /**
     * Renders the button component with provided properties and configuration.
     * Returns an array of VNode elements representing the rendered button, or an empty
     * array if the component cannot be rendered.
     *
     * Обрисовывает компонент кнопки с предоставленными свойствами и конфигурацией.
     * Возвращает массив VNode элементов, представляющих отрисованную кнопку, или пустой
     * массив, если компонент не может быть отрисованы.
     *
     * @param props additional properties/ дополнительные свойства
     */
    readonly render: (props?: RefOrNormal<ConstrBind<ButtonPropsBasic>>) => VNode[];
}
