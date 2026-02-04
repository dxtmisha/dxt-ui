import { TooltipOpen } from './TooltipOpen';
import { TooltipStatus } from './TooltipStatus';
import { TooltipClasses } from './TooltipClasses';
import { TooltipStyle } from './TooltipStyle';
import { TooltipProps } from './props.ts';
/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export declare class TooltipEvent {
    protected readonly props: Readonly<TooltipProps>;
    protected readonly classes: TooltipClasses;
    protected readonly style: TooltipStyle;
    protected readonly status: TooltipStatus;
    protected readonly open: TooltipOpen;
    protected next: boolean;
    protected timeout?: any;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param classes object for working with the class/ объект для работы с классом
     * @param style object for working with styles/ объект для работы со стилями
     * @param status object for working with statuses/ объект для работы со статусами
     * @param open data opening management/ управление открытием данных
     */
    constructor(props: Readonly<TooltipProps>, classes: TooltipClasses, style: TooltipStyle, status: TooltipStatus, open: TooltipOpen);
    /**
     * Events on clicking an element in a mobile application.
     *
     * События при клике на элементе в мобильном приложении.
     */
    readonly onClick: () => void;
    /**
     * Element management events on receiving focus.
     *
     * События управления элементом при получении фокуса.
     * @param target selected element/ выбранный элемент
     */
    readonly onMouseover: ({ target }: MouseEvent) => void;
    /**
     * Element management events on receiving focus on the tooltip itself.
     *
     * События управления элементом при получении фокуса на самом тултипе.
     */
    readonly onMouseoverTooltip: () => void;
    /**
     * Element management events on losing focus.
     *
     * События управления элементом при потере фокуса.
     * @param relatedTarget selected element/ выбранный элемент
     */
    readonly onMouseout: ({ relatedTarget }: MouseEvent) => void;
    /**
     * Event of the end of the transition.
     *
     * Событие окончания трансформации.
     * @param event event data/ данные события
     */
    readonly onTransitionend: (event: TransitionEvent) => void;
    protected isNotEmbedded(): boolean;
}
