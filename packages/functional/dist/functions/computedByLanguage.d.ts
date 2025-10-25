import { ComputedGetter, ComputedRef, DebuggerOptions } from 'vue';
/**
 * Метод `computedByLanguage` предоставляет возможность создания реактивного свойства `computed`,
 * значение которого изменяется в зависимости от текущего языка и определённых условий.
 * @param getter Функция, которая предоставляет основное значение, зависящее от текущего языка
 * или других факторов. Этот `getter` будет вызываться для получения актуального значения
 * @param getterNone Альтернативное значение, которое будет возвращено в случаях, если:
 *   Условия не выполнены,
 *   Значение, возвращённое `getter`, равно `undefined`
 * @param conditions Условие, определяющее, когда должен быть вызван основной `getter`.
 * Если функция отсутствует, условие считается выполненным всегда
 * @param debugOptions Используется для отладки реактивных вычислений.
 * Поддерживается библиотекой Vue.js
 */
export declare function computedByLanguage<T, R extends (T | undefined)>(getter: ComputedGetter<R>, getterNone?: R | (() => R), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<R>;
