import { TooltipInclude } from '../Tooltip';
import { AnchorHref } from './AnchorHref';
import { AnchorTo } from './AnchorTo';
import { AnchorProps } from './props';
import { Ref } from 'vue';
/**
 * Anchor event handler
 *
 * Обработчик событий Anchor
 */
export declare class AnchorEvent {
    protected readonly props: AnchorProps;
    protected readonly tooltip: TooltipInclude;
    protected readonly href: AnchorHref;
    protected readonly to?: AnchorTo | undefined;
    readonly copy: Ref<boolean | undefined, boolean | undefined>;
    protected timeout: any;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param tooltip tooltip / подсказка
     * @param href href handler / обработчик ссылки
     * @param to scroll handler / обработчик прокрутки
     */
    constructor(props: AnchorProps, tooltip: TooltipInclude, href: AnchorHref, to?: AnchorTo | undefined);
    /**
     * Is copy state
     *
     * Является ли состоянием копирования
     */
    isCopy(): boolean;
    /**
     * On click handler
     *
     * Обработчик нажатия
     */
    readonly onClick: (event: MouseEvent) => void;
    /**
     * Trigger copy state
     *
     * Запустить состояние копирования
     */
    protected toCopy(): void;
}
