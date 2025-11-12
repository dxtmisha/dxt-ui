import { RefType } from '@dxtmisha/functional';
import { EventClickInclude } from './EventClickInclude';
import { EventClickValue } from '../types/eventClickTypes';
import { Ref } from 'vue';
/**
 * Class for managing model value with reactive reference and click handling.
 *
 * Класс для управления значением модели с реактивной ссылкой и обработкой клика.
 */
export declare class ModelValueInclude<Value = any> {
    protected readonly index: string;
    protected readonly emits?: any | undefined;
    protected readonly event?: EventClickInclude | undefined;
    protected readonly inputValue?: RefType<any> | undefined;
    protected readonly readonly?: RefType<boolean | undefined> | undefined;
    readonly value: Ref<Value | undefined, Value | undefined>;
    /**
     * Constructor
     * @param index identifier/ идентификатор
     * @param emits emits function/ функция эмитов
     * @param event event click handler/ обработчик клика
     * @param inputValue input value reference/ ссылка на входное значение
     * @param readonly readonly flag/ флаг только для чтения
     */
    constructor(index: string, emits?: any | undefined, event?: EventClickInclude | undefined, inputValue?: RefType<any> | undefined, readonly?: RefType<boolean | undefined> | undefined);
    /**
     * Returns the current value.
     *
     * Возвращает текущее значение.
     */
    getValue(): Value | undefined;
    /**
     * Click handler.
     *
     * Обработчик клика.
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
}
