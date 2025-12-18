import { MaskValidation } from './MaskValidation';
import { ConstrEmit } from '@dxtmisha/functional';
import { MaskEmits } from './types';
/**
 * Class for event invocation
 *
 * Класс для вызова событий
 */
export declare class MaskEmit {
    protected readonly validation: MaskValidation;
    protected readonly emits?: ConstrEmit<MaskEmits> | undefined;
    /** Current event type key/ Текущий ключ типа события */
    protected type?: string & keyof MaskEmits;
    /** Native event object/ Объект нативного события */
    protected event?: Event;
    /**
     * Constructor
     * @param validation object for working with validation/ объект для работы с валидацией
     * @param emits emit function (Design system bridge)/ функция вызова события
     */
    constructor(validation: MaskValidation, emits?: ConstrEmit<MaskEmits> | undefined);
    /**
     * Checks whether extra data (validation) should be generated for current event
     *
     * Проверяет, нужно ли генерировать дополнительные данные (валидацию) для текущего события
     */
    isValue(): boolean;
    /**
     * Initializes event handling and emits event with optional validation payload
     *
     * Инициализирует обработку и вызывает событие с опциональной валидацией
     */
    go(): this;
    /**
     * Sets both event type and native event object
     *
     * Устанавливает одновременно тип события и объект события
     * @param type event name/ название события
     * @param event event object/ объект события
     */
    set<E extends Event>(type: string & keyof MaskEmits, event: E): this;
    /**
     * Sets event type
     *
     * Устанавливает тип события
     * @param type event name/ название события
     */
    setType(type: string & keyof MaskEmits): this;
    /**
     * Sets native event object
     *
     * Устанавливает объект события
     * @param event event object/ объект события
     */
    setEvent<E extends Event>(event: E): this;
    /**
     * Resets all internal state (type + event)
     *
     * Сбрасывает всё внутреннее состояние (тип и событие)
     */
    reset(): this;
    /**
     * Resets stored event type
     *
     * Сбрасывает сохранённый тип события
     */
    resetType(): this;
    /**
     * Resets stored native event
     *
     * Сбрасывает сохранённый объект события
     */
    resetEvent(): this;
}
