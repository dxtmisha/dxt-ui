import { WindowClasses } from './WindowClasses';
import { WindowElement } from './WindowElement';
import { WindowProps } from './props';
import { Ref } from 'vue';
/**
 * Class for managing the animation output before closing the window.
 *
 * Класс управления выводом анимации перед закрытием окна.
 */
export declare class WindowPersistent {
    protected readonly props: WindowProps;
    protected readonly classes: WindowClasses;
    protected readonly element: WindowElement;
    readonly item: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
     * @param element an object of the class for working with elements/ объект класса для работы с элементами
     */
    constructor(props: WindowProps, classes: WindowClasses, element: WindowElement);
    /**
     * Request to enable animation.
     *
     * Запрос на включение анимации.
     */
    on(): boolean;
    /**
     * Request to disable animation.
     *
     * Запрос на выключение анимации.
     */
    disabled(): this;
    /**
     * Event of the animation end of the closing prohibition.
     *
     * Событие окончания анимации запрета на закрытие.
     */
    protected readonly onTransitionend: () => void;
    /**
     * Removes the event of the end of the animation.
     *
     * Удаляет событие окончания анимации.
     */
    protected removeEvent(): void;
}
