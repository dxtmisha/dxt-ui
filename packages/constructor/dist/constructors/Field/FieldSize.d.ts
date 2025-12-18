import { Ref } from 'vue';
import { EventItem } from '@dxtmisha/functional';
/**
 * Input field margin control class.
 *
 * Класс управления отступами для элемента ввода.
 */
export declare class FieldSize {
    protected readonly element: Ref<HTMLLabelElement | undefined>;
    protected readonly className: string;
    protected left: number;
    protected right: number;
    protected title: number;
    protected event?: EventItem<Window, Event>;
    /**
     * Constructor
     * @param element main element/ главный элемент
     * @param className class name/ название класса
     */
    constructor(element: Ref<HTMLLabelElement | undefined>, className: string);
    /**
     * Update margins.
     *
     * Обновление отступов.
     */
    readonly update: () => void;
    /**
     * Returns separator elements.
     *
     * Возвращает элементы-разделители.
     */
    protected getElementSpace(): HTMLDivElement | undefined;
    /**
     * Returns element with prefix.
     *
     * Возвращает элемент с префиксом.
     */
    protected getElementPrefix(): HTMLDivElement | undefined;
    /**
     * Update input field margins.
     *
     * Обновление отступов для поля ввода.
     */
    protected make(): void;
}
