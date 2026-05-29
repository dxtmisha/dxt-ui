import { executeFunction } from '@dxtmisha/functional-basic'
import { getRef } from './getRef'
import type { RefOrNormalOrFunction } from '../../types/refTypes'

/**
 * Executes a function if the provided argument is a function, and unwraps the resulting Vue Ref if it is reactive.
 * If the argument is a Vue Ref or a primitive value, it unwraps or returns it directly.
 *
 * Выполняет функцию, если переданный аргумент является функцией, и распаковывает полученный Vue Ref, если он реактивный.
 * Если аргумент является Vue Ref или простым значением, распаковывает или возвращает его напрямую.
 * @param data reactive reference, plain value, or a function returning them / реактивная ссылка, обычное значение или функция, возвращающая их
 * @returns the resolved and unwrapped value / разрешенное и распакованное значение
 */
export function executeFunctionRef<T>(data: RefOrNormalOrFunction<T>): T {
  return getRef(executeFunction(data))
}
