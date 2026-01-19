import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, ConstrEmit, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { EventClickValue } from '../../types/eventClickTypes';
import { BarsComponentInclude, BarsEmitsInclude, BarsPropsInclude } from './basicTypes';
import { BarsExpose } from './types';
import { BarsProps } from './props';
/**
 * BarsInclude class provides functionality for conditionally rendering bars components
 * within other components. It manages the logic for determining when to display bars
 * and configures the appropriate properties.
 *
 * Класс BarsInclude предоставляет функциональность для условного рендеринга компонентов
 * панелей действий внутри других компонентов. Он управляет логикой определения необходимости
 * отображения панелей и настраивает соответствующие свойства.
 */
export declare class BarsInclude<Props extends BarsPropsInclude = BarsPropsInclude, PropsExtra extends ConstrBind<BarsProps> = ConstrBind<BarsProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<BarsComponentInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<BarsEmitsInclude> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    readonly element: Ref<BarsExpose | undefined, BarsExpose | undefined>;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<BarsComponentInclude, Props> | undefined, emits?: ConstrEmit<BarsEmitsInclude> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks whether bars should be displayed/
     * Проверяет, нужно ли отображать панели
     */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for the bars/ Вычисляемые привязки для панелей */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the Bars component
     *
     * Рендер компонента панелей
     */
    readonly render: () => VNode[];
    /**
     * Handles click events from Bars and emits related events/
     * Обрабатывает клики по панелям и испускает связанные события
     *
     * @param event native mouse event/ native событие мыши
     * @param value payload with { type, value, detail }/ данные события с { type, value, detail }
     */
    protected readonly onClick: (event: MouseEvent, value: EventClickValue) => void;
}
