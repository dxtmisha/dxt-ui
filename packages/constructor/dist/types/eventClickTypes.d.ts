import { Ref } from 'vue';
import { RouteLocationRaw } from 'vue-router';
/**
 * Value object for click events/ Объект значения для событий клика
 */
export type EventClickValue = {
    /** Event type/ Тип события */
    type: string;
    /** Event value/ Значение события */
    value: any;
    /** Additional event details/ Дополнительные детали события */
    detail: Record<string, any> | undefined;
};
/**
 * Emits for click event handling/ События для обработки кликов
 */
export type EventClickEmits = {
    /** Full click event with MouseEvent/ Полное событие клика с MouseEvent */
    click: [
        event: MouseEvent,
        value: EventClickValue
    ];
    /** Lightweight click event/ Упрощённое событие клика */
    clickLite: [
        value: EventClickValue
    ];
};
/**
 * Exposed properties for click functionality/ Экспонируемые свойства для функциональности клика
 */
export interface EventClickExpose {
    /** Reactive value reference/ Реактивная ссылка на значение */
    value?: Ref<EventClickValue['value']>;
    /** Reactive detail reference/ Реактивная ссылка на детали */
    detail?: Ref<EventClickValue['detail']>;
}
/**
 * Props for click event handling/ Пропсы для обработки событий клика
 */
export interface EventClickProps {
    /** Navigation target (string or route object)/ Цель навигации (строка или объект роута) */
    to?: string | RouteLocationRaw;
    /** Click event value/ Значение события клика */
    value?: EventClickValue['value'];
    /** Additional click event details/ Дополнительные детали события клика */
    detail?: EventClickValue['detail'];
}
