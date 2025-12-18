import { VNode } from 'vue';
import { ConstrEmit, DesignComponents } from '@dxtmisha/functional';
import { ScrollbarComponentsInclude, ScrollbarEmitsInclude, ScrollbarPropsInclude, ScrollbarEdgeType } from './basicTypes';
/**
 * ScrollbarInclude class provides functionality for conditionally rendering scrollbar components
 * within other components. It manages the logic for determining when to display a scrollbar
 * and configures the appropriate properties.
 *
 * Класс ScrollbarInclude предоставляет функциональность для условного рендеринга компонентов
 * скроллбара внутри других компонентов. Он управляет логикой определения необходимости
 * отображения скроллбара и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending ScrollbarPropsInclude
 */
export declare class ScrollbarInclude<Props extends ScrollbarPropsInclude = ScrollbarPropsInclude> {
    protected readonly props: Readonly<Props>;
    protected readonly className: string;
    protected readonly components?: DesignComponents<ScrollbarComponentsInclude, Props> | undefined;
    protected readonly emits?: ConstrEmit<ScrollbarEmitsInclude> | undefined;
    /**
     * Constructor
     * @param props input parameter/ входной параметр
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: Readonly<Props>, className: string, components?: DesignComponents<ScrollbarComponentsInclude, Props> | undefined, emits?: ConstrEmit<ScrollbarEmitsInclude> | undefined);
    /**
     * Renders scrollbar component or fallback element
     * Рендерит компонент скроллбара или элемент по умолчанию
     */
    render(tag: string, props?: Record<string, any>, children?: any): VNode[];
    /**
     * Returns event handlers for scrollbar
     * Возвращает обработчики событий для скроллбара
     */
    protected getScrollbarEvents(): {
        onTop: (isTop: boolean) => void | undefined;
        onReachTop: () => void | undefined;
        onLeaveTop: () => void | undefined;
        onBottom: (isBottom: boolean) => void | undefined;
        onReachBottom: () => void | undefined;
        onLeaveBottom: () => void | undefined;
        onEdge: (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => void | undefined;
    };
}
