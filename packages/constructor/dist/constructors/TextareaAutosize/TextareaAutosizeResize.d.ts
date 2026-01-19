import { Ref } from 'vue';
import { TextareaAutosizeValue } from './TextareaAutosizeValue';
import { TextareaAutosizeProps } from './props';
/**
 * Class for managing the height of the field.
 *
 * Класс управления высотой поля.
 */
export declare class TextareaAutosizeResize {
    protected readonly props: Readonly<TextareaAutosizeProps>;
    protected readonly element: Ref<HTMLTextAreaElement | undefined>;
    protected readonly value: TextareaAutosizeValue;
    readonly clone: Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element input element/ элемент ввода
     * @param value object for working with values/ объект для работы со значениями
     */
    constructor(props: Readonly<TextareaAutosizeProps>, element: Ref<HTMLTextAreaElement | undefined>, value: TextareaAutosizeValue);
    /**
     * Changes the size of the field.
     *
     * Изменяет размер поля.
     */
    readonly updateSize: () => void;
    /**
     * Event for updating size and value.
     *
     * Событие для обновления размера и значения.
     */
    readonly on: () => void;
    /**
     * Event for changing the value.
     *
     * Событие для изменения значения.
     * @param event invoked event/ вызываемое событие
     */
    readonly onInput: (event: InputEvent) => void;
    /**
     * Checks if all elements are present.
     *
     * Проверяет, есть ли все элементы.
     */
    protected isElements(): this is {
        element: Ref<HTMLInputElement>;
        clone: Ref<HTMLDivElement>;
    };
    /**
     * Updates the content of the clone element.
     *
     * Обновляет содержимое элемента клона.
     */
    protected updateValue(): void;
    /**
     * Updates the height of the field.
     *
     * Обновляет высоту поля.
     */
    protected readonly updateHeight: () => void;
}
