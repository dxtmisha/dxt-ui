// md5:13f2811d3aaab977e81692df9e998936
import { type RefOrNormal } from '../../types/refTypes';
/**
 * Returns the value of a reactive reference or the raw value if it is not reactive.
 *
 * Возвращает значение реактивной переменной или само значение, если оно не реактивное.
 * @param item reactive variable or ordinary value / реактивная переменная или обычное значение
 * @returns unwrapped value / распакованное значение
 */
export declare function getRef<T>(item: RefOrNormal<T>): T;
