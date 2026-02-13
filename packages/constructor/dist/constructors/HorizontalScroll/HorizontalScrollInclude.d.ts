import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { HorizontalScrollComponentInclude, HorizontalScrollPropsInclude } from './basicTypes';
import { HorizontalScrollPropsBasic } from './props';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * HorizontalScrollInclude class provides functionality for conditionally rendering horizontal scroll components
 * within other components. It manages the logic for determining when to display a horizontal scroll
 * and configures the appropriate properties.
 *
 * Класс HorizontalScrollInclude предоставляет функциональность для условного рендеринга компонентов
 * горизонтальной прокрутки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения горизонтальной прокрутки и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending HorizontalScrollPropsInclude
 */
export declare class HorizontalScrollInclude<Props extends HorizontalScrollPropsInclude = HorizontalScrollPropsInclude> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<HorizontalScrollComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<ConstrBind<HorizontalScrollPropsBasic>> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Element of the component.
     *
     * Элемент компонента.
     */
    readonly element: Ref<any, any>;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter/ дополнительный параметр
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<HorizontalScrollComponentInclude, Props> | undefined, extra?: RefOrNormal<ConstrBind<HorizontalScrollPropsBasic>> | undefined, index?: string | undefined);
    /**
     * HTML element of the component.
     *
     * HTML элемент компонента.
     */
    readonly elementHtml: ComputedRef<HTMLDivElement | undefined>;
    /**
     * Computed bindings for the horizontal scroll/ Вычисляемые привязки для горизонтальной прокрутки
     */
    readonly binds: ComputedRef<ConstrBind< ItemList>>;
    /**
     * Scrolls to the selected element.
     *
     * Прокручивает к выбранному элементу.
     */
    readonly toSelected: () => void;
    /**
     * Renders the horizontal scroll component with provided properties and configuration.
     * Returns an array of VNode elements representing the rendered horizontal scroll, or an empty
     * array if the component cannot be rendered.
     *
     * Обрисовывает компонент горизонтальной прокрутки с предоставленными свойствами и конфигурацией.
     * Возвращает массив VNode элементов, представляющих отрисованную горизонтальную прокрутку, или пустой
     * массив, если компонент не может быть отрисованы.
     *
     * @param children content for the default slot/ контент для слота по умолчанию
     * @param props additional properties/ дополнительные свойства
     */
    readonly render: (children?: any, props?: RefOrNormal<ConstrBind<HorizontalScrollPropsBasic>>) => VNode[];
}
