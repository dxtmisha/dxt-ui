import { VNode, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { ChipComponentInclude, ChipPropsInclude } from './basicTypes';
import { ChipPropsBasic } from './props';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * ChipInclude class provides functionality for conditionally rendering chip components
 * within other components. It manages the logic for determining when to display a chip
 * and configures the appropriate properties.
 *
 * Класс ChipInclude предоставляет функциональность для условного рендеринга компонентов
 * чипа внутри других компонентов. Он управляет логикой определения необходимости
 * отображения чипа и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending ChipPropsInclude
 */
export declare class ChipInclude<Props extends ChipPropsInclude = ChipPropsInclude> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<ChipComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<ChipPropsBasic>> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter/ дополнительный параметр
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<ChipComponentInclude, Props> | undefined, extra?: RefOrNormal<ConstrBind<ChipPropsBasic>> | undefined, index?: string | undefined);
    /**
     * Computed bindings for the chip/ Вычисляемые привязки для чипа
     */
    readonly binds: ComputedRef<ConstrBind< ItemList>>;
    /**
     * Renders the chip component with provided properties and configuration.
     * Returns an array of VNode elements representing the rendered chip, or an empty
     * array if the component cannot be rendered.
     *
     * Отрисовывает компонент чипа с предоставленными свойствами и конфигурацией.
     * Возвращает массив VNode элементов, представляющих отрисованный чип, или пустой
     * массив, если компонент не может быть отрисован.
     *
     * @param props additional properties/ дополнительные свойства
     */
    readonly render: (props?: RefOrNormal<ConstrBind<ChipPropsBasic>>) => VNode[];
}
