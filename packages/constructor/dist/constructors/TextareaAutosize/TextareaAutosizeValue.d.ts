import { ToRefs, Ref } from 'vue';
import { ConstrEmit } from '@dxtmisha/functional';
import { TextareaAutosizeEmits } from './types';
import { TextareaAutosizeProps } from './props';
/**
 * Class for working with values.
 *
 * Класс для работы со значениями.
 */
export declare class TextareaAutosizeValue {
    protected readonly props: TextareaAutosizeProps;
    protected readonly refs: ToRefs<TextareaAutosizeProps>;
    protected readonly emits?: ConstrEmit<TextareaAutosizeEmits> | undefined;
    readonly item: Ref<string, string>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: TextareaAutosizeProps, refs: ToRefs<TextareaAutosizeProps>, emits?: ConstrEmit<TextareaAutosizeEmits> | undefined);
    /**
     * Changes values.
     *
     * Изменяет значения.
     * @param value changeable value/ изменяемое значение
     */
    set(value?: string): boolean;
    /**
     * Event for changing the value.
     *
     * Событие для изменения значения.
     * @param event invoked event/ вызываемое событие
     */
    on(event: InputEvent): void;
    /**
     * Checks if the value has actually been changed.
     *
     * Проверяет, было ли значение действительно изменено.
     * @param value changeable value/ изменяемое значение
     */
    protected isDifference(value?: string): boolean;
}
