import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, ConstrEmit, DesignComponents, RefOrNormal } from '@dxtmisha/functional';
import { WindowProps } from './props';
import { WindowExpose, WindowSlots } from './types';
import { WindowComponentInclude, WindowEmitOptions, WindowEmitsInclude, WindowExposeInclude, WindowPropsInclude } from './basicTypes';
import { NormalOrPromise } from '@dxtmisha/functional-basic';
/**
 * The class returns data for working with the Window component
 *
 * Класс возвращает данные для работы с компонентом Window
 */
export declare class WindowInclude<Props extends WindowPropsInclude = WindowPropsInclude, PropsExtra extends ConstrBind<WindowProps> = ConstrBind<WindowProps>> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<WindowComponentInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<WindowEmitsInclude> | undefined;
    protected readonly extra?: RefOrNormal<PropsExtra> | undefined;
    protected readonly ariaLabelledby?: string | undefined;
    protected readonly ariaDescribedby?: string | undefined;
    protected readonly index?: string | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
     * @param ariaLabelledby identifier for the label/ идентификатор для метки
     * @param ariaDescribedby identifier for the description/ идентификатор для описания
     * @param index index identifier/ идентификатор индекса
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<WindowComponentInclude, Props> | undefined, emits?: ConstrEmit<WindowEmitsInclude> | undefined, extra?: RefOrNormal<PropsExtra> | undefined, ariaLabelledby?: string | undefined, ariaDescribedby?: string | undefined, index?: string | undefined);
    /** Reference to window element expose/ Ссылка на expose элемента окна */
    readonly element: Ref<ConstrBind<WindowExpose> | undefined, ConstrBind<WindowExpose> | undefined>;
    /** Computed bindings for the window/ Вычисляемые привязки для окна */
    readonly binds: ComputedRef<PropsExtra>;
    /**
     * Expose helpers for window state and actions/
     * Вспомогательные методы expose для состояния и действий окна
     */
    readonly expose: WindowExposeInclude;
    /**
     * Render the Window component with slots/
     * Рендер компонента Window со слотами
     * @param slotsChildren slots passed to the window/ слоты, передаваемые окну
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    readonly render: (slotsChildren: WindowSlots, attrs?: Record<string, any>) => VNode[];
    /** Returns preparation result/ Возвращает результат preparation */
    protected readonly getPreparation: () => NormalOrPromise<void>;
    /** Returns opening result/ Возвращает результат opening */
    protected readonly getOpening: () => NormalOrPromise<boolean>;
    /** Returns closing result/ Возвращает результат closing */
    protected readonly getClosing: () => NormalOrPromise<boolean>;
    /**
     * Emits 'window' event upward/
     * Поднимает событие 'window' наверх
     * @param options event payload/ параметры события
     */
    protected readonly onWindow: (options: WindowEmitOptions) => void;
}
