import { VNode, ComputedRef } from 'vue';
import { ConstrBind, ConstrEmit, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { EventClickValue } from '../../types/eventClickTypes';
import { ActionsComponentInclude, ActionsEmitsInclude, ActionsPropsInclude } from './basicTypes';
import { ActionsProps } from './props';
/**
 * ActionsInclude class provides functionality for conditionally rendering actions components
 * within other components. It manages the logic for determining when to display actions
 * and configures the appropriate properties.
 *
 * Класс ActionsInclude предоставляет функциональность для условного рендеринга компонентов
 * действий внутри других компонентов. Он управляет логикой определения необходимости
 * отображения действий и настраивает соответствующие свойства.
 */
export declare class ActionsInclude<Props extends ActionsPropsInclude = ActionsPropsInclude, PropsExtra extends ConstrBind<ActionsProps> = ConstrBind<ActionsProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<ActionsComponentInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<ActionsEmitsInclude> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<ActionsComponentInclude, Props> | undefined, emits?: ConstrEmit<ActionsEmitsInclude> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, index?: string | undefined);
    /**
     * Checks whether actions should be displayed/
     * Проверяет, нужно ли отображать действия
     */
    readonly is: ComputedRef<boolean>;
    /** Computed bindings for the actions/ Вычисляемые привязки для действий */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Render the Actions component
     *
     * Рендер компонента действий
     */
    readonly render: () => VNode[];
    /**
     * Handles click events from Actions and emits related events/
     * Обрабатывает клики по действиям и испускает связанные события
     *
     * @param event native mouse event/ native событие мыши
     * @param value payload with { type, value, detail }/ данные события с { type, value, detail }
     */
    protected readonly onClick: (event: MouseEvent, value: EventClickValue) => void;
}
