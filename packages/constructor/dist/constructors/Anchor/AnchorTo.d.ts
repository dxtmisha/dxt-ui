import { Ref } from 'vue';
import { AnchorHref } from './AnchorHref';
import { AnchorProps } from './props';
/**
 * Anchor scroll handler
 *
 * Обработчик прокрутки якоря
 */
export declare class AnchorTo {
    protected readonly props: AnchorProps;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly href: AnchorHref;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param element input element / элемент ввода
     * @param href href handler / обработчик ссылки
     */
    constructor(props: AnchorProps, element: Ref<HTMLElement | undefined>, href: AnchorHref);
    /**
     * Scroll to element
     *
     * Прокрутить к элементу
     */
    go(): void;
}
