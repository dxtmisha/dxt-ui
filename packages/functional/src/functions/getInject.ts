import { hasInjectionContext, inject, type InjectionKey } from 'vue'
import { executeFunction, isNull } from '@dxtmisha/functional-basic'

/** Return type of the getInject function / Тип возвращаемого значения функции getInject */
export type InjectedValue<T, D = undefined> = [D] extends [undefined]
  ? (T | undefined)
  : unknown extends T
    ? (D extends () => infer R ? R : D)
    : (T | (D extends () => infer R ? R : D))

/**
 * Reads a provided value by its key when a Vue injection context is available.
 * Preserves falsy values and treats only null and undefined as absent, returning the optional fallback defaultValue.
 *
 * Читает предоставленное значение по ключу при наличии контекста внедрения Vue.
 * Сохраняет ложные значения и считает отсутствующими только null и undefined, возвращая опциональное резервное значение defaultValue.
 *
 * @template T Type of the provided value / Тип предоставленного значения
 * @template D Type of the default value or factory / Тип значения по умолчанию или фабрики
 * @param key Provide/inject key or InjectionKey / Ключ provide/inject либо InjectionKey
 * @param defaultValue Default value or factory returned when key is absent, nullish, or outside injection context /
 * Значение по умолчанию или фабрика, возвращаемое при отсутствии ключа, null/undefined или вне контекста внедрения
 * @returns Provided non-nullish value, defaultValue, or undefined outside context or when absent /
 * Предоставленное значение (не null/undefined), defaultValue либо undefined вне контекста или при отсутствии значения
 * @remarks
 * A missing key inside an injection context retains Vue's standard warning.
 *
 * Отсутствующий ключ внутри контекста внедрения сохраняет стандартное предупреждение Vue.
 */
export function getInject<T = unknown, D = undefined>(
  key: InjectionKey<T> | string,
  defaultValue?: D | (() => D)
): InjectedValue<T, D> {
  if (hasInjectionContext()) {
    const item = inject<T>(key)

    if (
      !isNull(item)
      && item !== undefined
    ) {
      return item as InjectedValue<T, D>
    }
  }

  return executeFunction(defaultValue) as InjectedValue<T, D>
}
