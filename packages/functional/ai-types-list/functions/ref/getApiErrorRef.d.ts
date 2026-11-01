// md5:9a3f41cde084f8325149fa45c2d2f8c8
import { type ComputedRef } from 'vue';
import { type ApiData, type ApiErrorItem } from '@dxtmisha/functional-basic';
import type { RefType } from '../../types/refTypes';
/**
 * Returns the error item for the Api ref.
 *
 * Возвращает элемент ошибки для Api ref.
 * @param data reactive API response data / реактивные данные ответа API
 * @returns computed reference to the error item or undefined / вычисляемая ссылка на элемент ошибки или undefined
 */
export declare function getApiErrorRef<R = unknown>(data: RefType<ApiData<R> | undefined> | {
    readonly value: unknown;
}): ComputedRef<ApiErrorItem | undefined>;
