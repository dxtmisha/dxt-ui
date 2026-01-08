import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { TooltipComponentInclude, TooltipPropsInclude } from './basicTypes';
import { TooltipExpose, TooltipSlots } from './types';
import { TooltipProps } from './props';
/**
 * TooltipInclude class provides functionality for conditionally rendering tooltip components
 * within other components. It manages the logic for determining when to display tooltip
 * and configures the appropriate properties.
 *
 * Класс TooltipInclude предоставляет функциональность для условного рендеринга компонентов
 * подсказки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения подсказки и настраивает соответствующие свойства.
 */
export declare class TooltipInclude<Props extends TooltipPropsInclude = TooltipPropsInclude, PropsExtra extends ConstrBind<TooltipProps> = ConstrBind<TooltipProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<TooltipComponentInclude, Props> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    readonly element: Ref<TooltipExpose | undefined, TooltipExpose | undefined>;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<TooltipComponentInclude, Props> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /** Computed bindings for the tooltip/ Вычисляемые привязки для подсказки */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the Tooltip component
     *
     * Рендер компонента подсказки
     */
    readonly render: (slotsChildren: TooltipSlots) => VNode[];
    /**
     * Get the tooltip element.
     *
     * Получить элемент подсказки.
     */
    getElement(): TooltipExpose | undefined;
    /**
     * Open the tooltip.
     *
     * Открыть подсказку.
     */
    open(): void;
    /**
     * Close the tooltip.
     *
     * Закрыть подсказку.
     */
    close(): void;
    /**
     * Toggle the tooltip.
     *
     * Переключить подсказку.
     * @param open open status/ статус открытия
     */
    toggle(open: boolean): void;
}
