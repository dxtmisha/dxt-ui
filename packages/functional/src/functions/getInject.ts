import { hasInjectionContext, inject } from 'vue'
import { isNull } from '@dxtmisha/functional-basic'

/**
 * Reads a provided value by its string key when a Vue injection context is available.
 * Preserves falsy values and treats only null and undefined as absent.
 *
 * Читает предоставленное значение по строковому ключу при наличии контекста внедрения Vue.
 * Сохраняет ложные значения и считает отсутствующими только null и undefined.
 * @template T type of the provided value / тип предоставленного значения
 * @param name provide/inject key / ключ provide/inject
 * @returns provided non-nullish value, or undefined outside the context or when absent / предоставленное значение, отличное от null и undefined, либо undefined вне контекста или при отсутствии значения
 * @remarks
 * A missing key inside an injection context retains Vue's standard warning.
 * Отсутствующий ключ внутри контекста внедрения сохраняет стандартное предупреждение Vue.
 */
export function getInject<T>(name: string): T | undefined {
  if (hasInjectionContext()) {
    const item = inject<T>(name)

    if (!isNull(item)) {
      return item
    }
  }

  return undefined
}
